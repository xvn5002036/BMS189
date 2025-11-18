var mobId, mob, stats, modified, MaxRandom, setupTask, ostats, victor, luck;
var 清怪 = true;
var 刷新地图 = false;
var 复活次数 = 11;
var 副本名称 = '钻机[简单]';
var BOSS_1_id = 9600086;
var BOSS_1_血量倍率 = 1;
var 副本时限 = 1000 * 60 * 20;
var 实例地图 = [703020100];
var 准备地图 = 703020000;
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
    h.setProperty('BOSShp', g);
    mobId = BOSS_1_id;
    mob = em.getMonster(mobId);
    mob.setOverrideStats();
    mob.getChangedStats().hp = g;
    mob.heal();
    h.registerMonster(mob);
    var f = h.getMapInstance(实例地图);
    f.spawnMonsterOnGroundBelow(mob, new java.awt.Point(685, 227));
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
	if (mobId == BOSS_1_id) {
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
