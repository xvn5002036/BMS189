var status = -1;
function action(c, b, a) {
    if (c == 1) {
        status++;
    } else {
        status--;
    }
    if (status == 0) {
        cm.gainItem(2614032, 1);
        cm.gainItem(5530829, -1);
        cm.dispose();
        cm.sendOk('恭喜您获得 #v2614032##t2614032##k  x1。');
    } else {
        cm.dispose();
    }
}
function start() {
    status = -1;
    action(1, 0, 0);
}