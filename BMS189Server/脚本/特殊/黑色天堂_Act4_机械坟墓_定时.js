var status = -1;
var selectionLog = [];
function start() {
    action(1, 0, 0);
}
function action(mode, type, selection) {
    var reactor = 'action' + cm.getNpc();
    eval(reactor)(mode, type, selection);
}
function action0(d, c, b) {
    if (status == 0 && d == 0) {
        cm.dispose();
        return;
    }
    status++;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose();
    } else {
        if (status === a++) {
            cm.fieldEffect_KinesisEXP(Math.pow(cm.getLevel(), 3) / 2);
            cm.effect_Voice('Field.img/masteryBook/EnchantSuccess', 100);
            cm.forceCompleteQuest(33194);
            cm.gainExp(Math.pow(cm.getLevel(), 3) / 2);
            cm.dispose();
            cm.getPlayer().scheduleWarpTask(3, 350040190, 0, false);
        }
    }
}