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
    status++;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose();
    } else {
        if (status === a++) {
            cm.askYesNo('确定就此放弃，并返回水晶花园吗？\r\n#r（放弃时，生命和必杀技将初始化。）#k', 16, 0);
        } else {
            if (status === a++) {
                cm.dispose();
                if (d > 0) {
                    cm.getPlayer().scheduleWarpTask(3, 350032400, 0, false);
                }
            }
        }
    }
}