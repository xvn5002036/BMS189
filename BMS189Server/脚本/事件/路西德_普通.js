var mobId, mob, stats, modified, MaxRandom, setupTask, ostats, victor, luck;
var 清怪 = true;
var 刷新地图 = false;
var 复活次数 = 11;
var 副本名称 = '路西德[普通]';
var BOSS_1_id = 8880140;
var BOSS_1_血量倍率 = 1;
var BOSS_2_id = 8880150;
var BOSS_2_血量倍率 = 1;
var BOSS_3_id = 8880167;
var BOSS_3_血量倍率 = 1;
var 副本时限 = 1000 * 60 * 60;
var 实例地图 = [
    450004100,
    450004150,
    450004200,
    450004250,
    450004300
];
var 准备地图 = 450004000;
var 退场倒计时 = 180;
function init() {
}
function setup(a, c) {
    em.setProperty('state', '1');
    em.setProperty('leader', 'true');
    var h = em;
    for (var e = 0; e < 实例地图.length; e++) {
        var b = h.setInstanceMap(实例地图[e]);
        b.resetPQ(a);
        b.resetFully();
        b.killAllMonsters(清怪);
        b.respawn(刷新地图);
    }
    h.startEventTimer(副本时限);
    h.setProperty('FBtime', 副本时限);
    h.setProperty('FBname', 副本名称);
    h.setProperty('strMap', 准备地图);
    var g = em.getMonster(BOSS_1_id).getMobMaxHp() * BOSS_1_血量倍率;
    var d = em.getMonster(BOSS_2_id).getMobMaxHp() * BOSS_2_血量倍率;
    var j = em.getMonster(BOSS_3_id).getMobMaxHp() * BOSS_3_血量倍率;
    h.setProperty('BOSShp', g + d + j);
    mobId = BOSS_1_id;
    mob = em.getMonster(mobId);
    mob.setOverrideStats();
    mob.getChangedStats().hp = g;
    mob.heal();
    h.registerMonster(mob);
    var f = h.getMapInstance(实例地图[1]);
    f.spawnMonsterOnGroundBelow(mob, new java.awt.Point(999, 20));
    f.spawnMonsterOnGroundBelow(em.getMonster(8880166), new java.awt.Point(999, 20));
    mobId = BOSS_2_id;
    mob = em.getMonster(mobId);
    mob.setOverrideStats();
    mob.getChangedStats().hp = d;
    mob.heal();
    h.registerMonster(mob);
    var f = h.getMapInstance(实例地图[3]);
    f.spawnMonsterOnGroundBelow(mob, new java.awt.Point(716, -490));
    f.spawnMonsterOnGroundBelow(em.getMonster(8880171), new java.awt.Point(954, -359));
    f.spawnMonsterOnGroundBelow(em.getMonster(8880171), new java.awt.Point(378, -907));
    f.spawnMonsterOnGroundBelow(em.getMonster(8880171), new java.awt.Point(404, -375));
    f.spawnMonsterOnGroundBelow(em.getMonster(8880171), new java.awt.Point(1086, -842));
    mobId = BOSS_3_id;
    mob = em.getMonster(mobId);
    mob.setOverrideStats();
    mob.getChangedStats().hp = j;
    mob.heal();
    h.registerMonster(mob);
    var f = h.getMapInstance(实例地图[4]);
    f.spawnMonsterOnGroundBelow(em.getMonster(BOSS_3_id), new java.awt.Point(93, 35));
    return h;
}
// 玩家加入事件，被注册到事件实例里
function onPlayerRegistered(player) {
	var map = em.getMapInstance(实例地图[0]);
	player.dropMessage(6, "[" + 副本名称 + "] 进入到了挑战地图，请小心行事。");
	player.getAPI().warp(map, map.getPortal(0));
	player.setReviveCount(复活次数);
	player.getAPI().setNumberForQuestInfo(准备地图, "damage", 0)
}

// 玩家在事件里死亡后尝试复活时
// @return 如果返回true，视为复活成功，不进行死亡处理；否则，认为玩家死亡
function onPlayerRevived(player) {
	if (player.getReviveCount() > 0) {
		return true;
	} else {
		var map = em.getMapFactoryMap(准备地图);
		player.getAPI().warp(map, map.getPortal(0));
		return true;
	}
}

//玩家在事件里切换地图时
function onMapChanged(player, mapId) {
	var index = 实例地图.indexOf(mapId);
	// 如果不是副本地图，离场
	if (index < 0) {
		on玩家退场(player, false);
		return;
	}
    switch (index) {
    case 实例地图[0]:
        break;
    case 实例地图[1]:
        break;
    case 实例地图[2]:
        break;
    case 实例地图[3]:
        break;
    case 实例地图[4]:
        break;
    }
}
// 怪物被玩家击杀时
function onMonsterKilled(mobId) {
	switch (mobId) {
		case BOSS_1_id:
			em.getMapInstance(实例地图[1]).killAllMonsters(true); //杀死所有怪
			em.getPlayers().forEach(function (player) {
				player.getAPI().scheduleWarpTask(6, 实例地图[2], 0, false);
			});
			break;
		case BOSS_2_id:
			em.getMapInstance(实例地图[3]).killAllMonsters(true); //杀死所有怪
            em.getPlayers().forEach(function (player) {
				player.getAPI().scheduleWarpTask(6, 实例地图[4], 0, false);
			});
			break;
		case BOSS_3_id:
			// 完成主线剧情任务
			player.getAPI().updateInfoQuest(34360, "boss=1");
			player.getAPI().updateInfoQuest(34360, "bossS=1;boss=1");

			// 成就系统
			em.getPlayers().forEach(function (player) {
				player.getAPI().updateAchievement(825, 0, 1, 1);
				player.getAPI().updateAchievement(826, 0, 1, 10);
				player.getAPI().updateAchievement(827, 0, 1, 100);
				player.getAPI().updateAchievement(828, 0, 1, 100);
			});
			// 评价系统
			openNpc(9130027, "评价系统");
			// 倒计时离开副本
			em.startEventTimer(退场倒计时 * 1000);
			for (var i = 0; i < em.getPlayerCount(); i++) {
				em.getPlayers().get(i).dropMessage(6, "[" + 副本名称 + "] 挑战成功！");
			}
			break;
	} // switch
	return 1;
}
// 玩家对怪物造成伤害时
function onMonsterDamaged(player, mobId, realDamage, attackDamage) {
	if (mobId == BOSS_1_id || mobId == BOSS_2_id || mobId == BOSS_3_id) {
		player.getAPI().addNumberForQuestInfo(准备地图, "damage", realDamage)
	}
}

// ===================== 功能类方法 ======================
function openNpc(npcid, mode) {
	for (var i = 0; i < em.getPlayerCount(); i++) {
		em.getPlayers().get(i).getAPI().openNpc(npcid, mode);
	}
}
function randomNum(minNum, maxNum) {
	switch (arguments.length) {
		case 1:
			return parseInt(Math.random() * minNum + 1, 10);
		case 2:
			return parseInt(Math.random() * (maxNum - minNum + 1) + minNum, 10);
		default:
			return 0;
	}
}
// 初始化参数
function initProp(name, val) {
	if (em.getProperty(name) == null)
		em.setProperty(name, val);
}
function initPropArray(name, val, startI, endI) {
	for (var i = startI; i <= endI; i++) {
		if (em.getProperty(name + "_" + i) == null)
			em.setProperty(name + "_" + i, val);
	}
}
// 随机数序列
function initPropArrayRandom(name, min, max, startI, endI) {
	var arr = new Array();
	var maxTimes = endI - startI + 1;
	var canRepeat = (max - min) < (endI - startI) ? true : false;
	do {
		var num = randomNum(min, max);
		if (canRepeat || arr.indexOf(num) < 0) { //数组中不存在
			arr.push(num);
			maxTimes--;
		}
	} while (maxTimes);
	for (var i = startI; i <= endI; i++) {
		if (em.getProperty(name + "_" + i) == null)
			em.setProperty(name + "_" + i, arr[i - 1]);
	}
}
function on玩家退场(player, isTimeout) {
	// 时间到的话，就把所有人都赶出去，否则要等没人
	em.disposeIfPlayerBelow(isTimeout ? 999 : 0, 准备地图);
	// 清空配置文件
	em.getProperties().clear();
	em.setProperty("state", 0);
	em.setProperty("leader", "true");
	em.unregisterPlayer(player);
}

//队伍解散时
function onPartyDisbanded() {
	em.getPlayers().forEach(function (player) {
		on玩家退场(player, true);
	});
}
//时间结束时
function onTimeOut() {
	em.getPlayers().forEach(function (player) {
		on玩家退场(player, true);
	});
}
//玩家掉线时
function onPlayerDisconnected(player) {
	on玩家退场(player, true);
	return 0;
}
//捡取道具时
function onItemPickedUp(player, itemId) { }
