var status = -1;
function action(c, b, a) {
    if (c == 1) {
        status++;
    } else {
        status--;
    }
    if (status == 0) {
        cm.gainItem(2614008, 1);
        cm.gainItem(5530838, -1);
        cm.sendOk('恭喜您获得 #v2614008##t2614008##k  x1。');
        cm.dispose();
    } else {
        cm.dispose();
    }
}
function start() {
    status = -1;
    action(1, 0, 0);
}