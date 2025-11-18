var status = 0;
function start() {
    status = -1;
    action(1, 0, 0);
}
function action(c, b, a) {
    if (status == 0 && c == 0) {
        cm.dispose();
        return;
    }
    if (c == 1) {
        status++;
    } else {
        status--;
    }
    if (status == 0) {
        cm.dispose();
        cm.openNpc(9000113, 'V卷');
    }
}