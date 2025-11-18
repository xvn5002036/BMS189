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
            var e = cm.getNpc();
            cm.sendOk('……啊？你找我吗？我也不知道我应该做什么。我的脚本位于： #b 脚本/特殊/活动_步步高_16269.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复我的脚本！');
        } else {
            cm.dispose();
        }
    }
}