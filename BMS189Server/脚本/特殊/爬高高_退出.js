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
            cm.askYesNo_Bottom('#b<新复古爬高高~>#k已经开始了YO！真的要放弃吗YO？', 36, 9062176, 3);
        } else {
            cm.dispose();
            cm.warp(993104200, 3, false);
        }
    }
}