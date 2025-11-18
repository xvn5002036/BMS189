var status = -1;
function start() {
    action(1, 0, 0);
}
function action(c, b, a) {
    var d = cm.getNpc();
    if (cm.getMap().getNumMonsters() == 0) {
        cm.warp(d, 0);
        cm.dispose();
        return;
    }
    status++;
    if (status == 0) {
        cm.askYesNoS('确定要就这样结束挑战吗？');
    } else {
        if (status == 1) {
            cm.warp(d, 0);
            cm.dispose();
        } else {
            cm.dispose();
        }
    }
}