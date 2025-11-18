var status = -1;
var selectionLog = [];
function start() {
    action(1, 0, 0);
}
var npcs = [
    9400920,
    9400921,
    9401160
];
function action(g, f, e) {
    if (status == 0 && g == 0) {
        cm.dispose();
        return;
    }
    g == 1 ? status++ : status--;
    selectionLog[status] = e;
    var d = cm.getNumberFromQuestInfo(500773, 'manager');
    var b = npcs[d];
    var c = -1;
    if (status <= c++) {
        cm.dispose();
    } else {
        if (status === c++) {
            cm.askAcceptDecline_Bottom('#face3#选购还没结束呢！你真的要取消吗？', 36, b);
        } else {
            if (status === c++) {
                var a = new java.util.Date();
                var h = new java.text.SimpleDateFormat('yy/MM/dd/HH/mm').format(a);
                cm.updateInfoQuest(500778, 'last=' + h);
                cm.forceForfeitQuest(500778);
                cm.dispose();
            }
        }
    }
}