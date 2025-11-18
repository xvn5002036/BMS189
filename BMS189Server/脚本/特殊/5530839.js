var status = -1;
function action(c, b, a) {
    if (c == 1) {
        status++;
    } else {
        status--;
    }
    if (status == 0) {
        cm.gainItem(2614008, 3);
        cm.gainItem(5530839, -1);
        cm.sendOk('恭喜您获得 #v2614008##t2614008##k  x3。');
        cm.dispose();
    } else {
        cm.dispose();
    }
}
function start() {
    status = -1;
    action(1, 0, 0);
}