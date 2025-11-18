var status = -1;
var selectionLog = [];
function start() {
    action(1, 0, 0);
}
function action(c, b, a) {
    var d = cm.getNpc();
    if (d >= 100) {
        cm.addPopupSay(9062172, 2000, '你成功击败了魔王皮洛克！', '', 1);
        cm.scheduleWarpTask(5, 993107701, 0);
    } else {
        if (d > 0) {
            cm.addPopupSay(9062172, 2000, '魔王皮洛克变强了！\r\n#rLEVEL ' + (d * 20 + 100) + '#k', '', 1);
        }
        mob();
    }
    cm.dispose();
}
function mob() {
    var d = cm.getMap();
    var e = em.getNumberProperty('level');
    var c = em.getMonster(9833400);
    c.setOverrideStats();
    c.getChangedStats().hp = 2100000000 * Math.pow(1.5, e - 1) * Math.min(10, e + 1);
    c.heal();
    c.setSize(100 + (e - 1) * 3);
    eim.registerMonster(c);
    d.spawnMonsterOnGroundBelow(c, new java.awt.Point(-120, 33));
    cm.版本活动_无限怪物挑战_更新难度等级(e, Math.abs(255 - e) % 16 + 1, Math.abs(254 - e) % 16 + 1, c.getMobMaxHp(), c.getHp());
    var a = 9833401 + Math.min(9, e);
    for (var b = 0; b < 5; b++) {
        if (d.countMonsterById(a) >= 5) {
            return;
        }
        var c = em.getMonster(a);
        if (e > 9) {
            c.setOverrideStats();
            c.getChangedStats().hp = 38012832000 * Math.pow(1.5, e - 9);
            c.heal();
            c.setSize(100 + (e - 9) * 4);
        }
        eim.registerMonster(c);
        d.spawnMonsterOnGroundBelow(c, new java.awt.Point(-830 + 355 * b, -580));
    }
}