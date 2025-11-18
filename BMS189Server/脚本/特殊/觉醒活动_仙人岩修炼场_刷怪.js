var status = -1;
var selectionLog = [];
function start() {
    action(1, 0, 0);
}
function action(c, b, a) {
    var d = cm.getNpc();
    if (d >= 100) {
        cm.addPopupSay(9062334, 2000, '你成功击败了最高等级的仙人岩	！', '', 1);
        cm.scheduleWarpTask(5, 993184201, 0);
    } else {
        cm.gloryMagicMudmanUI(1, d + 1, 0);
        if (d > 0) {
            cm.addPopupSay(9062334, 2000, '#rSTAGE ' + (d + 1) + '#k 开始了。', '', 1);
        }
        mob();
    }
    cm.dispose();
}
function mob() {
    var c = cm.getMap();
    var d = em.getNumberProperty('level');
    var b = em.getMonster(9833820 + Math.min(9, d));
    if (d > 9) {
        b.setOverrideStats();
        b.getChangedStats().hp = 171057744000 * Math.pow(1.5, d - 9);
        b.heal();
        b.setSize(100 + (d - 9) * 3);
    }
    eim.registerMonster(b);
    c.spawnMonsterOnGroundBelow(b, new java.awt.Point(185, 15));
    for (var a = 0; a < 10; a++) {
        var b = em.getMonster(9833830 + Math.min(9, d));
        if (d > 9) {
            b.setOverrideStats();
            b.getChangedStats().hp = 19006416000 * Math.pow(1.5, d - 9);
            b.heal();
            b.setSize(100 + (d - 9) * 4);
        }
        eim.registerMonster(b);
        c.spawnMonsterOnGroundBelow(b, new java.awt.Point(cm.rand(0, 325), 15));
    }
}