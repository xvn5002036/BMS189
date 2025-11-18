/*
 * 新版次元入侵InvasionEvent
 * 2016年7月2日 09:28:08
 */

var setupTask;
var 准备地图 = 940020000
var 实例地图 = [940021000];
var 复活次数 = 10;
var 副本名称 = '副本_次元入侵';
var 退场倒计时=60;
var reSummonMobId = 2510200; //首先召唤，杀死之后再召唤所有怪物
var mobList = Array(8870001, 8870002, 8870003, 8870004, 2510133); //随机一个，每个30只。  一共120只。
var BossId = 9303084; //班·雷昂
var BossDrop = new Array(
    //物品ID，爆率，最小值，最大值
    new Array(4001547, 100, 1, 1)
); //100必爆

var eim;
var phaseTime = 1000 * 60 * 1; //有1分钟的时间消灭召唤石

function init() {
    em.setProperty("state", "0");
}

function setup(eim, leaderid) {
    eim = em;
    var map = eim.setInstanceMap(实例地图[0]);
    map.resetFully();
    map.killAllMonsters(false);
    eim.startEventTimer(1000 * 5 * 60); //入场后有15秒的等候时间进行准备
    setupTask = eim.schedule("reSummonMob", 15); //15秒后程序开始
    //提示部分
    em.setProperty("state", "1"); //階段1
    return eim;
}
var Pos = Array(
    Array(2745, 28),
    Array(1999, -452),
    Array(3300, -452)
); //怪物产生的坐标点。

function reSummonMob(eim) {
    // for (var i = 0; i < eim.getPlayerCount(); i++) {
    //     // eim.getPlayers().get(i).openNpc(9900000, "InvasionShowEffect1");//開始特效
    // }

    var map = eim.getMapInstance(0);
    //开始动画TODO
    //提示打掉召喚石，召喚怪物
    // for (var i = 0; i < eim.getPlayerCount(); i++) {
    //     eim.getPlayers().get(i).openNpc(9900000, "InvasionShowEffect");
    // }
    eim.restartEventTimer(1000 * 60 * 5); //5分鐘的時間來消滅召喚石
    em.setProperty("state", (parseInt(em.getProperty("state")) + 1).toString()); //階段1
    var mob = em.getMonster(reSummonMobId);
    // var modified = em.newMonsterStats();
    // modified.setOHp(1000000000);
    mob.setOverrideStats();
    mob.getChangedStats().hp = 1000000000;
    mob.heal();
    eim.registerMonster(mob);
    map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(2745, 28));
    em.broadcastPlayerMsg(-1, "当前环节STATS:" + em.getProperty("state") + "，请在5分内的時間來消灭召唤石");
}

function SpawnWave(eim) {
    var map = em.getMapInstance(0);
    eim = em;
    //召唤石消失，召唤一大波怪物
    eim.restartEventTimer(1000 * 60 * 10); //10分鐘的時間來消滅怪物
    for (var i = 0; i < 30; i++) {
        var mob = em.getMonster(mobList[Math.floor(Math.random() * mobList.length)]);
        // var modified = em.newMonsterStats();
        // modified.setOHp(1000000000);
        mob.setOverrideStats();
        mob.getChangedStats().hp = 1000000000;
        mob.heal()
        eim.registerMonster(mob);
        map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(Pos[Math.floor(Math.random() * Pos.length)][0], Pos[Math.floor(Math.random() * Pos.length)][1]));
    }
    em.setProperty("state", (parseInt(em.getProperty("state")) + 1).toString()); //階段1
    em.broadcastPlayerMsg(-1, "当前环节STATS:" + em.getProperty("state") + "，请在10分内的時間來消灭所有怪物！");
}

function SpwanBoss(eim) {
    eim.restartEventTimer(1000 * 60 * 20); //20分鐘的時間來消滅怪物
    //一大波怪物消失，召喚BOSS
    em.setProperty("state", (parseInt(em.getProperty("state")) + 1).toString()); //階段1
    var map = eim.getMapInstance(0);
    //召喚BOSS部分
    var mob = em.getMonster(BossId);
    // var modified = em.newMonsterStats();
    // modified.setOHp(3000000000); //100E
    mob.setOverrideStats();
    mob.getChangedStats().hp = 3000000000;
    mob.heal()
    eim.registerMonster(mob);
    map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(2745, 28));
    em.broadcastPlayerMsg(-1, "当前环节STATS:" + em.getProperty("state") + "，请在20分内的時間來消灭BOSS！");
}

function onMonsterKilled(eim, b) {
    // eim.broadcastPlayerMsg(5, "STATS:" + em.getProperty("state"));
    if (em.getMapInstance(0).getAllMonsters().size() == 0) {
        player.getAPI().fieldEffect_ScreenMsg('monsterPark/clear');
        player.getAPI().fieldEffect_PlayFieldSound('Party1/Clear', 100);
        switch (em.getProperty("state")) {
            case "2":
            case "5":
            case "8":
            case "11":
                SpawnWave(em);
                break;
            case "3":
            case "6":
            case "9":
            case "12":
                SpwanBoss(em);
                break;
            case "4":
            case "7":
            case "10":
                /* for (var i = 0; i < eim.getPlayerCount(); i++) {
                     eim.getPlayers().get(i).openNpc(9900000, "InvasionReward");//碎片奖励NPC
                 }*/
                em.restartEventTimer(1000 * 15); //20分鐘的時間來消滅怪物
                setupTask = em.schedule("reSummonMob", 1000 * 14); //15秒后程序开始
                player.dropTopMsg("15秒后继续战斗！");
                break;
            case "13": //任務完成部分
                em.broadcastPlayerMsg(-1, "怪物已全部击杀完毕，请从左侧门离开！");
                em.broadcastPlayerMsg(-1, "怪物已全部击杀完毕，请从左侧门离开！");
                em.broadcastPlayerMsg(-1, "怪物已全部击杀完毕，请从左侧门离开！");
                em.getPlayers().forEach(function (player) {
                    //奖励相关想加什么自己改下面只是完成任务
                    player.getAPI().addNumberForQuestInfo(31844, "normal", 10); //这里是一次性完成10次
                    player.getAPI().addPlayerLog("167200",0,50); //段位点
                    player.getAPI().addPlayerLog("每日次元副本次数")
                    em.broadcastPlayerMsg(-1, "已通关副本，获得50点段位点数！");
                    em.startEventTimer(退场倒计时 * 1000);

                });
                break;
        } //13最終
    }
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
function onItemPickedUp(player, itemId) {}