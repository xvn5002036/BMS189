var status = -1;
function action(c, b, a) {
    if (c == 1) {
        status++;
    } else {
        status--;
    }
    if (status == 0) {
        cm.gainItem(2614034, 10);
        cm.gainItem(5530830, -1);
        cm.dispose();
        cm.sendOk('恭喜您获得 #v2614034##t2614034##k  x1。');
    } else {
        cm.dispose();
    }
}
function start() {
    status = -1;
    action(1, 0, 0);
}