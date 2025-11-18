var status = -1;
var selectionLog = [];
function start() {
    action(1, 0, 0);
}
function action(c, b, a) {
    var d = cm.getNpc();
    if (d >= 100) {
        cm.addPopupSay(9400963, 2000, '完美的烟火秀！感谢你的帮助！', '', 1);
        cm.fieldEffect_ScreenMsg('UI/UIWindowPL.img/HiddenCatch/StageImg/clear');
        cm.fieldEffect_PlayFieldSound('Party1/Clear');
        cm.scheduleWarpTask(5, 867139399, 0);
    } else {
        cm.fieldEffect_SetObjectState(558000, 'obj' + d);
        cm.addPopupSay(9400963, 2000, '火焰燃烧得更加强烈和华丽了呢！\r\n#rLEVEL ' + (80 + d * 20) + '#k', '', 1);
        mob();
    }
    cm.dispose();
}
function mob() {
    var c = cm.getMap();
    var d = em.getNumberProperty('level');
    var b = em.getMonster(9601221 + Math.min(9, d));
    if (d > 9) {
        b.setOverrideStats();
        b.getChangedStats().hp = 171057744000 * Math.pow(1.5, d - 9);
        b.heal();
        b.setSize(100 + (d - 9) * 3);
    }
    eim.registerMonster(b);
    c.spawnMonsterOnGroundBelow(b, new java.awt.Point(109, 109));
    for (var a = 0; a < 1; a++) {
        var b = em.getMonster(9601231 + Math.min(9, d));
        if (d > 9) {
            b.setOverrideStats();
            b.getChangedStats().hp = 19006416000 * Math.pow(1.5, d - 9);
            b.heal();
            b.setSize(100 + (d - 9) * 4);
        }
        eim.registerMonster(b);
        c.spawnMonsterOnGroundBelow(b, new java.awt.Point(cm.rand(-150, 250), 59));
    }
}