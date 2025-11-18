function start() {
    status = -1;
    action(1, 0, 0);
}
function action(c, b, a) {
    if (c == -1) {
        cm.dispose();
    } else {
        if (status == 0 && c == 0) {
            cm.dispose();
            return;
        } else {
            if (status == 2 && c == 0) {
                cm.sendNext('。。。');
                cm.dispose();
            }
        }
        if (c == 1) {
            status++;
        } else {
            status--;
        }
        if (status == 0) {
            cm.askYesNo('确定退出副本吗？');
        } else {
            if (status == 1) {
                cm.dispose();
                cm.warp(910000000, 0);
            }
        }
    }
}
var status = -1;