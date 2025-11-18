function action(c, b, a) {
    cm.warp(4000004);
    cm.gainExp(489);
    cm.gainExp(1242);
    cm.forceCompleteQuest(32216);
    cm.forceStartQuest(17901);
    cm.setInGameDirectionMode(false);
    cm.setStandAloneMode(false);
}
var status = -1;
function start() {
    status = -1;
    action(1, 0, 0);
}