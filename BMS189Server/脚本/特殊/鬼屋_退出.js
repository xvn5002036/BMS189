var status = -1;
var selectionLog = [];
function start() {
    action(1, 0, 0);
}
function action(e, d, c) {
    if (status == 0 && e == 0) {
        cm.dispose();
        return;
    }
    e == 1 ? status++ : status--;
    selectionLog[status] = c;
    var b = -1;
    if (status <= b++) {
        cm.dispose();
    } else {
        if (status === b++) {
            cm.askYesNo('是否现在退出鬼屋？\r\n\r\n#r(※同意后立即移动退出到原来位置。)', 4, 9062265);
        } else {
            if (status === b++) {
                var a = cm.getNumberFromQuestInfo(100402, 'rMap');
                cm.warp(a, 0, false);
                cm.dispose();
            }
        }
    }
}