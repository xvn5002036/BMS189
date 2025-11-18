var status = -1;
function start() {
    action(1, 0, 0);
}
function action(f, d, c) {
    f == 1 ? status++ : status--;
    var b = -1;
    var a = cm.getEventManager('副本_枫之高校');
    if (status <= b++) {
        cm.dispose();
    } else {
        if (status == b++) {
            var e = eim.getNumberProperty('state');
            if (e < 100) {
                cm.askYesNoS('今天的课程还没有结束，这样就要走了吗？');
            } else {
                cm.warp(744000000, 1);
                cm.dispose();
            }
        } else {
            if (status == b++) {
                cm.sendOkS('呼！还好没有被老师们发现。');
            } else {
                cm.warp(744000000, 1);
                cm.dispose();
            }
        }
    }
}