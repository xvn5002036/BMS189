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
            cm.askMenu('我们整理汇总了一些游戏玩法及内容的介绍。\r\n从萌新成长到高级玩法都有涵盖，如果有需要可以看一下。\r\n（点击时，将跳转至页面浏览器查看页面向导内容)\r\n\r\n#b#L100# 游戏指南#l\r\n', 4, 9010000);
        } else {
            if (status === a++) {
                cm.openWebNew(0, 1, 'http://mxd.sdo.com/web6/gameinfo/guide.html');
                cm.dispose();
            }
        }
    }
}