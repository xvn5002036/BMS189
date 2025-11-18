var status = -1;
var selectionLog = [];
function start() {
    action(1, 0, 0);
}
function action(d, c, b) {
    if (status == 0 && d == 0) {
        cm.dispose();
        return;
    }
    d == 1 ? status++ : status--;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose();
    } else {
        if (status === a++) {
            cm.gainItem(1004974, 1);
            cm.gainItem(1103022, 1);
            cm.gainItem(1053187, 1);
            cm.gainItem(1702769, 1);
            cm.playerMessage(-1, '获得道具：星系套装');
            cm.dispose();
        }
    }
}