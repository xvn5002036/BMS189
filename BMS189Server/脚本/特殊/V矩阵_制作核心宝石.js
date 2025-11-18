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
            cm.askYesNo('确定要使用V核心碎片，制作核心宝石吗？\r\n\r\n#b制作核心宝石所需要的V核心碎片数量：35\r\n#b当前持有的V核心碎片数量：' + cm.getPlayer().getVCorePiece(), 4, 1540945);
        } else {
            if (status === b++) {
                if (cm.getPlayer().getVCorePiece() >= 35) {
                    var a = Math.floor(cm.getPlayer().getVCorePiece() / 35);
                    cm.askNumber('要制作几个核心宝石？\r\n\r\n#b最多可以制作的数量：' + a, 1540945, 1, 1, a);
                } else {
                    cm.sendOk('你的V核心碎片数量不足以制作宝石。再收集一些吧。\r\n\r\n#b制作核心宝石所需要的V核心碎片数量：35\r\n#b当前持有的V核心碎片数量：' + cm.getPlayer().getVCorePiece(), 1540945);
                    cm.dispose();
                }
            } else {
                if (status === b++) {
                    cm.getPlayer().gainvCorePiece(-35 * c);
                    cm.gainItem(2435770, c);
                    cm.sendOk('核心宝石制作好了，请拿好！\r\n\r\n#b当前持有的V核心碎片数量：' + cm.getPlayer().getVCorePiece(), 1540945);
                }
            }
        }
    }
}