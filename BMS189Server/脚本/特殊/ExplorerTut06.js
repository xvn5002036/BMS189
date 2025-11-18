var status = -1;
function action(c, b, a) {
    if (c == 1) {
        status++;
    } else {
        status--;
    }
    if (status == 0) {
        cm.sendNext('刚刚那个女孩是谁呢？为什么一见到我就逃走了呢？');
    } else {
        if (status == 1) {
            cm.sendNext('我也朝着那个方向过去看看吧。');
        } else {
            if (status == 2) {
                status = -1;
                cm.setInGameDirectionMode(false);
                cm.setStandAloneMode(false);
                cm.dispose();
            }
        }
    }
}
function start() {
    status = -1;
    action(1, 0, 0);
}