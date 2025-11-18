var status = -1;
function action(c, b, a) {
    if (c == 1) {
        status++;
    } else {
        status--;
    }
    if (status == 0) {
        cm.gainItem(2614033, 10);
        cm.gainItem(5530834, -1);
        cm.sendOk('恭喜您获得 #v2614033##t2614033##k  x10。');
        cm.dispose();
    } else {
        cm.dispose();
    }
}
function start() {
    status = -1;
    action(1, 0, 0);
}