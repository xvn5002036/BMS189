var status = -1;
var selectionLog = [];
function start() {
    action(1, 0, 0);
}
function action(c, b, a) {
    cm.updateInfoQuest(64906, 'finish=1');
    cm.fieldEffect_ScreenMsg('killing/clear');
    cm.dispose();
    cm.getPlayer().scheduleWarpTask(3, 871000058, 0, false);
}