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
            cm.gainItem(1004393, 1);
            cm.gainItem(1102780, 1);
            cm.gainItem(1052876, 1);
            cm.gainItem(1702556, 1);
            cm.gainItem(1073027, 1);
            cm.gainItem(1102787, 1);
            cm.gainItem(1112177, 1);
            cm.gainItem(1112289, 1);
            cm.gainItem(1142788, 1);
            cm.playerMessage(-1, '获得套装');
            cm.dispose();
        }
    }
}