var status = -1;
function action(c, b, a) {
    if (c == 1) {
        status++;
    } else {
        status--;
    }
    if (status == 0) {
        cm.gainItem(2614033, 3);
        cm.gainItem(5530833, -1);
        cm.dispose();
        cm.sendOk('恭喜您获得 #v5530833##t5530833##k  x3。');
    } else {
        cm.dispose();
    }
}
function start() {
    status = -1;
    action(1, 0, 0);
}