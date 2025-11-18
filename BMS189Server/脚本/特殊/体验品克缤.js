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
            if (cm.getJob() != 0) {
                cm.playerMessage(1, '错误,你不是新手冒险家职业,无法转换成品克缤职业\r\n请用小号来体验,创建一个新手冒险家,不要做任务。');
                cm.dispose();
            } else {
                cm.askAcceptDecline_Bottom('#face1#确定要转变成品克缤职业吗？', 36, 9001214);
            }
        } else {
            if (status === a++) {
                cm.dispose();
                cm.warp(927030091);
                cm.changeJob(13100);
            } else {
                cm.dispose();
            }
        }
    }
}