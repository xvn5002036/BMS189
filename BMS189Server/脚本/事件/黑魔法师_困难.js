var mobId;
var mob;
var stats;
var modified;
var MaxRandom;
var setupTask;
var ostats;
var victor;
var luck;
var 清怪_怪物死亡特效 = false;
var 刷新地图 = false;
var 复活次数 = 11;
var 副本名称 = '黑魔法师[困难]';
var BOSS_1_id = 8880500;
var BOSS_1_血量倍率 = 1;
var BOSS_2_id = 8880501;
var BOSS_2_血量倍率 = 1;
var BOSS血条_1_id = 8880505;
var BOSS_3_id = 8880502;
var BOSS_3_血量倍率 = 1;
var BOSS_4_id = 8880503;
var BOSS_4_血量倍率 = 1;
var BOSS_5_id = 8880504;
var BOSS_5_血量倍率 = 1;
var BOSS血条_2_id = 8880519;
var 副本时限 = 3600000;
var 实例地图 = [
  450013000,
  450013100,
  450013200,
  450013300,
  450013400,
  450013500,
  450013600,
  450013700
];
var 准备地图 = 450012500;
var 退场倒计时 = 180;
var random = new java.util.Random();
var 哭墙倒计时 = 20;
var 哭墙CD = 10;
function init() {
}
function setup(v, R) {
  em.setProperty('state', '1');
  em.setProperty('leader', 'true');
  for (var X = 0; X < 实例地图.length; X++) {
    var H = em.setInstanceMap(实例地图[X]);
    H.resetPQ(v);
    H.resetFully();
    H.killAllMonsters(清怪_怪物死亡特效);
    H.respawn(刷新地图);
  }
  em.startEventTimer(副本时限);
  em.setProperty('FBtime', 副本时限);
  em.setProperty('FBname', 副本名称);
  em.setProperty('strMap', 准备地图);
  var G = em.getMonster(BOSS_1_id).getMobMaxHp() * BOSS_1_血量倍率;
  var J = em.getMonster(BOSS_2_id).getMobMaxHp() * BOSS_2_血量倍率;
  var e = em.getMonster(BOSS_3_id).getMobMaxHp() * BOSS_3_血量倍率;
  var M = em.getMonster(BOSS_4_id).getMobMaxHp() * BOSS_4_血量倍率;
  var b = em.getMonster(BOSS_5_id).getMobMaxHp() * BOSS_5_血量倍率;
  em.setProperty('BOSShp', G + J + e + M + b);
  em.setProperty('whiteKnight', '0');
  em.setProperty('blackKnight', '0');
  em.schedule('wailingwall', 哭墙倒计时 * 1000);
  mobId = BOSS_1_id;
  mob = em.getMonster(mobId);
  mob.setOverrideStats();
  mob.getChangedStats().hp = G;
  mob.getChangedStats().mp = 99000000;
  mob.heal();
  em.registerMonster(mob);
  var K = em.getMapInstance(实例地图[1]);
  K.spawnMonsterOnGroundBelow(mob, new java.awt.Point(-306, 85));
  mobId = BOSS_2_id;
  mob = em.getMonster(mobId);
  mob.setOverrideStats();
  mob.getChangedStats().hp = J;
  mob.getChangedStats().mp = 99000000;
  mob.heal();
  em.registerMonster(mob);
  var K = em.getMapInstance(实例地图[1]);
  K.spawnMonsterOnGroundBelow(mob, new java.awt.Point(358, 85));
  mobId = BOSS_3_id;
  mob = em.getMonster(mobId);
  mob.setOverrideStats();
  mob.getChangedStats().hp = e;
  mob.getChangedStats().mp = 99000000;
  mob.heal();
  em.registerMonster(mob);
  var K = em.getMapInstance(实例地图[3]);
  K.spawnMonsterOnGroundBelow(mob, new java.awt.Point(-11, 85));
  mobId = BOSS_4_id;
  mob = em.getMonster(mobId);
  mob.setOverrideStats();
  mob.getChangedStats().hp = M;
  mob.getChangedStats().mp = 99000000;
  mob.heal();
  em.registerMonster(mob);
  var K = em.getMapInstance(实例地图[5]);
  K.spawnMonsterOnGroundBelow(mob, new java.awt.Point(100, 85));
  mobId = BOSS_5_id;
  mob = em.getMonster(mobId);
  mob.setOverrideStats();
  mob.getChangedStats().hp = b;
  mob.getChangedStats().mp = 99000000;
  mob.heal();
  em.registerMonster(mob);
  var K = em.getMapInstance(实例地图[7]);
  K.spawnMonsterOnGroundBelow(mob, new java.awt.Point(128, 218));
}
function onPlayerRegistered(v) {
  var R = em.getMapInstance(实例地图[0]);
  v.dropMessage(6, '[' + 副本名称 + '] 进入到了挑战地图，请小心行事。');
  v.getAPI().warp(R, R.getPortal(0));
  v.setReviveCount(复活次数);
  v.getAPI().setNumberForQuestInfo(准备地图, 'damage', 0);
}
function onPlayerRevived(v) {
  if (v.getReviveCount() > 0) {
    v.getAPI().openUI(1204);
    return true;
  } else {
    var R = em.getMapFactoryMap(准备地图);
    v.getAPI().warp(R, R.getPortal(0));
    return true;
  }
}
function onMapChanged(v, R) {
  if (实例地图.indexOf(R) < 0) {
    on玩家退场(v, false);
    return;
  }
  switch (R) {
  case 实例地图[1]:
    em.schedule('Notice', 3000);
    break;
  case 实例地图[3]:
    em.schedule('Notice', 3000);
    break;
  case 实例地图[5]:
    em.schedule('Notice', 3000);
    break;
  case 实例地图[7]:
    em.schedule('Notice', 3000);
    break;
  }
}
function Notice(v) {
  var R = v.getMapInstance(实例地图[1]);
  var X = v.getMapInstance(实例地图[3]);
  var H = v.getMapInstance(实例地图[5]);
  var G = v.getMapInstance(实例地图[7]);
  if (R.getCharactersSize() != 0) {
    player.getAPI().openUI(1204);
    R.getWeatherEffectNotice('为了与黑魔法师对峙，必须要消灭保护他的创造和破坏骑士。', 265, 8000, 1);
    player.getAPI().addPopupSay(0, 5000, '这里发生的攻击似乎遭到了创造或破坏的诅咒。\r\n如果同时中了两种诅咒，将会受到#b巨大伤害#k，一定要小心', '', 0);
    v.schedule('黑魔法师_暗物质', 20000);
    v.schedule('红色雷电怪1段', 10000);
    v.schedule('黑魔法师锁链攻击', 15000);
  } else if (X.getCharactersSize() != 0) {
    player.getAPI().openUI(1204);
    X.getWeatherEffectNotice('终于站到黑魔法师面前了。拼尽全力消灭他吧。', 265, 8000, 1);
    player.getAPI().addPopupSay(0, 4000, '这里发生的攻击似乎遭到了创造或破坏的诅咒。\r\n如果同时中了两种诅咒，将会受到#b巨大伤害#k，一定要小心', '', 0);
    v.schedule('红色雷电怪2段', 10000);
    v.schedule('黑魔法师2阶段穿刺之眼', 15000);
    v.schedule('黑魔法师_晨星2阶段', 15000);
  } else if (H.getCharactersSize() != 0) {
    player.getAPI().openUI(1204);
    H['初始化黑魔法师3阶段平台']();
    v.schedule('黑魔法师锁链攻击', 0);
    H.getWeatherEffectNotice('他似乎得到了神的权能。但	哪怕对方是神，也要为了大家消灭他。', 265, 8000, 1);
    player.getAPI().addPopupSay(3003902, 4000, '#face1#走吧。我去复仇，你去守护世界。', '', 0);
    H['黑魔法师3阶NPC怪物_召唤']();
    黑魔法师3阶NPC怪物_攻击(v);
    黑魔法师3阶NPC怪物_移动(v);
    v.schedule('黑魔法师3阶段激光', 12000);
    v.schedule('黑魔法师_红陨星', 18000);
    v.schedule('黑魔法师_晨星3阶段', 15000);
    v.schedule('黑魔法师_创造之力', 38000);
  } else if (G.getCharactersSize() != 0) {
    player.getAPI().openUI(1204);
    G.getWeatherEffectNotice('压倒性气息令周围的一切瞬间灰飞烟灭。', 265, 3000, 1);
    v.schedule('黑魔法师4段黑白必杀', 18000);
    v.schedule('黑魔法师4段海胆爆炸攻击', 30000);
  }
}
function 黑魔法师_创造之力(v) {
  var R = v.getMapInstance(实例地图[5]);
  R['黑魔法师_创造之力']();
  v.schedule('黑魔法师_创造之力', 38000);
}
function 黑魔法师_暗物质(v) {
  var R = v.getMapInstance(实例地图[1]);
  var X = v.getMapInstance(实例地图[3]);
  var H = v.getMapInstance(实例地图[5]);
  var G = random.nextInt(100);
  if (G < 30) {
    R['黑魔法师_暗物质'](0);
    X['黑魔法师_暗物质'](0);
    H['黑魔法师_暗物质'](0);
  } else if (G < 60) {
    R['黑魔法师_暗物质'](1);
    X['黑魔法师_暗物质'](1);
    H['黑魔法师_暗物质'](1);
  } else {
    R['黑魔法师_暗物质'](-1);
    X['黑魔法师_暗物质'](-1);
    H['黑魔法师_暗物质'](-1);
  }
  v.schedule('黑魔法师_暗物质', 23000);
}
function 黑魔法师_红陨星(v) {
  var R = v.getMapInstance(实例地图[5]);
  R['黑魔法师_红陨星']();
  v.schedule('黑魔法师_红陨星', 22000);
}
function 黑魔法师_晨星2阶段(v) {
  var R = v.getMapInstance(实例地图[3]);
  R['黑魔法师_晨星']();
  v.schedule('黑魔法师_晨星2阶段', 35000);
}
function 黑魔法师_晨星3阶段(v) {
  var R = v.getMapInstance(实例地图[5]);
  R['黑魔法师_晨星']();
  v.schedule('黑魔法师_晨星3阶段', 35000);
}
function 黑魔法师3阶NPC怪物_攻击(v) {
  var R = v.getMapInstance(实例地图[5]);
  R['黑魔法师3阶NPC怪物_攻击']();
  v.schedule('黑魔法师3阶NPC怪物_攻击', 5000);
}
function 黑魔法师3阶NPC怪物_移动(v) {
  var R = v.getMapInstance(实例地图[5]);
  R['黑魔法师3阶NPC怪物_移动']();
  v.schedule('黑魔法师3阶NPC怪物_移动', 35000);
}
function 红色雷电怪1段(v) {
  var R = new java.util.Random();
  var X = R.nextInt(2) + 2;
  var H = v.getMapInstance(实例地图[1]);
  for (var G = 0; G < X; G++) {
    var J = R.nextInt(2000);
    var e = 8880506;
    if (R.nextInt(100) > 50) {
      J -= 2000;
    }
    mob = v.getMonster(e);
    mob.setOverrideStats();
    mob.getChangedStats().hp = 300000000;
    mob.heal();
    v.registerMonster(mob);
    var H = v.getMapInstance(实例地图[1]);
    H.spawnMonsterOnGroundBelow(mob, new java.awt.Point(J, 85));
  }
  v.schedule('红色雷电怪1段', 20000);
}
function 红色雷电怪2段(v) {
  var R = random.nextInt(2) + 2;
  var X = v.getMapInstance(实例地图[3]);
  for (var H = 0; H < R; H++) {
    var G = random.nextInt(800);
    var J = 8880506;
    if (random.nextInt(100) > 50) {
      G -= 800;
    }
    mob = v.getMonster(J);
    mob.setOverrideStats();
    mob.getChangedStats().hp = 300000000;
    mob.heal();
    v.registerMonster(mob);
    var X = v.getMapInstance(实例地图[3]);
    X.spawnMonsterOnGroundBelow(mob, new java.awt.Point(G, 88));
  }
  v.schedule('红色雷电怪2段', 20000);
}
function check1(v) {
  var R = v.getMapInstance(实例地图[1]);
  R.getWeatherEffectNotice('创造与破坏的骑士倒下，通向黑魔法师之路开启。', 265, 3000, 1);
  v.getPlayers().forEach(function (X) {
    X.getAPI().scheduleWarpTask(5, 实例地图[2], 0, false);
  });
  v.setProperty('state', '2');
}
function wailingwall(v) {
  if (player.getAPI().getzhizunvip() == 2) {
    var R = v.getMapInstance(实例地图[1]);
    var X = v.getNumberProperty('state');
    var H = v.getNumberProperty('stage' + X + '_kill') + 1;
    v.setProperty('stage' + X + '_kill', H);
    var G = 2400 - H * 150;
    var J = parseInt((H + 2) % 2);
    if (J == 0)
      var e = 8880507;
    else
      var e = 8880508;
    var M = v.getMonster(e);
    if (R.getNumMonsters() < 50) {
      R.spawnMonsterOnGroundBelow(M, new java.awt.Point(G, 85));
      R.getWeatherEffectNotice('哭墙升起蚕食空间。', 265, 3000, 1);
    }
    if (Math.abs(player.getPosition().x - G) < 185) {
      v.schedule('killedWall', 50);
      player.getAPI().onTeleport(1, player.getId(), G - 200, 85);
      player.dropMessage(-1, '希纳斯精神力把你从叹息之墙中拉出来..');
    }
    if (player.getPosition().x > G + 200) {
      player.getAPI().warp(R, R.getPortal(1));
      player.getAPI().onTeleport(1, player.getId(), G - 200, 85);
      player.dropMessage(-1, '希纳斯精神力把你从叹息之墙中拉出来..');
    }
    if (G < -1850) {
      v.getPlayers().forEach(function (b) {
        on玩家退场(b, true);
      });
      player.dropMessage(-1, '真棒！全军覆没..');
      player.dropMessage(1, '真棒！全军覆没..');
    }
    if (v.getProperty('state') === '1') {
      v.schedule('wailingwall', 哭墙CD * 1000);
    }
  }
}
function 黑魔法师空中掉落物2阶段蓝色掉落(v) {
  var R = v.getMapInstance(实例地图[1]);
  var X = v.getMapInstance(实例地图[3]);
  var H = v.getMapInstance(实例地图[5]);
  R['黑魔法师空中掉落物2阶段蓝色掉落']();
  X['黑魔法师空中掉落物2阶段蓝色掉落']();
  H['黑魔法师空中掉落物2阶段蓝色掉落']();
  v.schedule('黑魔法师空中掉落物2阶段蓝色掉落', 15000);
}
function 黑魔法师锁链攻击(v) {
  var R = v.getMapInstance(实例地图[1]);
  var X = v.getMapInstance(实例地图[3]);
  R['黑魔法师锁链攻击'](randomNum(1, 2));
  X['黑魔法师锁链攻击'](randomNum(1, 2));
  v.schedule('黑魔法师锁链攻击', 15000);
}
function 黑魔法师2阶段穿刺之眼(v) {
  var R = v.getMapInstance(实例地图[3]);
  R['黑魔法师2阶段穿刺之眼']();
  v.schedule('黑魔法师2阶段穿刺之眼', 20000);
}
function 黑魔法师3阶段激光(v) {
  var R = v.getMapInstance(实例地图[5]);
  R['黑魔法师3阶段激光']();
  v.schedule('黑魔法师3阶段激光', 10000);
}
function 黑魔法师4段黑白必杀(v) {
  var R = v.getMapInstance(实例地图[7]);
  R['黑魔法师4段黑白必杀']();
  R['黑魔法师4段海胆爆炸攻击']();
  R.getWeatherEffectNotice('发现了近乎于神之人的权能。是创造还是破坏，必须要选择一种力量。', 265, 3000, 1);
  v.schedule('黑魔法师4段黑白必杀', 30000);
}
function 黑魔法师4段海胆爆炸攻击(v) {
  var R = v.getMapInstance(实例地图[7]);
  R['黑魔法师4段海胆爆炸攻击']();
  R.getWeatherEffectNotice('发现了近乎于神之人的权能。是创造还是破坏，必须要选择一种力量。', 265, 3000, 1);
  v.schedule('黑魔法师4段海胆爆炸攻击', 10000);
}
function onMonsterKilled(v) {
  switch (v) {
  case BOSS血条_1_id:
    check1(em);
    break;
  case BOSS_1_id:
  case BOSS_2_id:
    var R = em.getMapInstance(实例地图[1]);
    R.getWeatherEffectNotice('创造和破坏的骑士被击倒而打开了前往黑魔法师的路。', 265, 6000, true);
    break;
  case BOSS_3_id:
    var R = em.getMapInstance(实例地图[3]);
    {
      em.getPlayers().forEach(function (H) {
        H.getAPI().scheduleWarpTask(5, 实例地图[4], 0, false);
      });
      R.getWeatherEffectNotice('黑魔法师喷射出未知气息，吞噬黑暗王座。', 265, 3000, 1);
    }
    break;
  case BOSS_4_id:
    var R = em.getMapInstance(实例地图[5]);
    {
      em.getPlayers().forEach(function (H) {
        H.getAPI().scheduleWarpTask(5, 实例地图[6], 0, false);
      });
      R.getWeatherEffectNotice('压倒性气息令周围的一切瞬间灰飞烟灭。', 265, 3000, 1);
    }
    break;
  case BOSS_5_id: {
      openNpc(9130027, '评价系统');
      em.startEventTimer(退场倒计时 * 1000);
    }
    var X = em.getPlayerCount();
    {
      em.getPlayers().forEach(function (H) {
        H.getAPI().updateAchievement(3034, 0, 1, 1);
        H.getAPI().updateAchievement(3035, 0, 1, 10);
        H.getAPI().updateAchievement(3036, 0, 1, 100);
        H.getAPI().updateAchievement(3037, 0, 1, 1000);
        if (X == 6) {
          H.getAPI().updateAchievement(3038, 0, 1, 4);
        }
        var G = H.getAPI().getJob();
        if (Math.floor(G / 100) == 27)
          H.getAPI().finishAchievement(3043);
        else if (Math.floor(G / 100) == 31)
          H.getAPI().finishAchievement(3044);
        else if (Math.floor(G / 100) == 101) {
          H.getAPI().finishAchievement(3049);
        }
        if (Math.floor(G / 1000) == 1)
          H.getAPI().updateAchievement(3045, 0, 1, 4);
        else if (Math.floor(G / 1000) == 0)
          H.getAPI().updateAchievement(3046, 0, 1, 4);
        else if (Math.floor(G / 1000) == 3) {
          H.getAPI().updateAchievement(3047, 0, 1, 4);
        }
        H.dropMessage(6, '[' + 副本名称 + '] 挑战成功！');
      });
      em.setProperty('whiteKnight', '0');
      em.setProperty('blackKnight', '0');
    }
    break;
  }
  return 1;
}
function onMonsterDamaged(v, R, X, H) {
  if (R == BOSS_1_id || R == BOSS_2_id || R == BOSS_3_id || R == BOSS_4_id || R == BOSS_5_id) {
    v.getAPI().addNumberForQuestInfo(准备地图, 'damage', X);
  }
}
function killedWall(v) {
  player.addHP(-500000);
  player.getAPI().showCashItemEffect(-500000, 0);
}
function openNpc(v, R) {
  for (var X = 0; X < em.getPlayerCount(); X++) {
    em.getPlayers().get(X).getAPI().openNpc(v, R);
  }
}
function randomNum(v, R) {
  switch (arguments.length) {
  case 1:
    return parseInt(Math.random() * v + 1, 10);
  case 2:
    return parseInt(Math.random() * (R - v + 1) + v, 10);
  default:
    return 0;
  }
}
function initProp(v, R) {
  if (em.getProperty(v) == null)
    em.setProperty(v, R);
}
function initPropArray(v, R, X, H) {
  for (var G = X; G <= H; G++) {
    if (em.getProperty(v + '_' + G) == null)
      em.setProperty(v + '_' + G, R);
  }
}
function initPropArrayRandom(v, R, X, H, G) {
  var J = new Array();
  var e = G - H + 1;
  var M = X - R < G - H ? true : false;
  do {
    var b = randomNum(R, X);
    if (M || J.indexOf(b) < 0) {
      J.push(b);
      e--;
    }
  } while (e);
  for (var K = H; K <= G; K++) {
    if (em.getProperty(v + '_' + K) == null)
      em.setProperty(v + '_' + K, J[K - 1]);
  }
}
function on玩家退场(v, R) {
  em.disposeIfPlayerBelow(R ? 999 : 0, 450013780);
  em.getProperties().clear();
  em.setProperty('state', 0);
  em.setProperty('leader', 'true');
  em.unregisterPlayer(v);
}
function onPlayerKilled(v) {
}
function onPartyDisbanded() {
  on玩家退场(player, false);
}
function onTimeOut() {
  em.getPlayers().forEach(function (v) {
    on玩家退场(v, true);
  });
}
function onPlayerDisconnected(v) {
  on玩家退场(v, false);
  return 0;
}
function onItemPickedUp(v, R) {
}