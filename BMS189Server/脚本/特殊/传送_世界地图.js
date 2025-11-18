var status = -1;
var selectionLog = [];
function start() {
    action(1, 0, 0);
}
function action(e, c, b) {
    if (status == 0 && e == 0) {
        cm.dispose();
        return;
    }
    e == 1 ? status++ : status--;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose();
    } else {
        if (status === a++) {
            var d = '';
            d += '#r(强制移动可能会导致剧情任务错乱哦！)#k\r\n\r\n';
            d += '要前往 #b#m' + cm.getNpc() + '##k 吗？需要花费#r200#k点券。\r\n';
            d += '#b目前拥有：#r' + cm.getPlayer().getCSPoints(1) + '#k点券';
            cm.askYesNo(d, 9201555);
        } else {
            if (cm.getPlayer().getCSPoints(1) < 200) {
                cm.sendOkS('糟糕，点券不够用了。');
            } else {
                cm.getPlayer().modifyCSPoints(1, -200);
                cm.warp(cm.getNpc(), 0);
            }
            cm.dispose();
        }
    }
}