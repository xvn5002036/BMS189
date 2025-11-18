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
            cm.askYesNo('#r#e确定离开联盟突袭#n#k吗？', 4, 9010106);
        } else {
            if (status === a++) {
                cm.dispose();
                cm.warp(921172201, 0);
            } else {
                cm.dispose();
            }
        }
    }
}