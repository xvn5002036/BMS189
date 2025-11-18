var status = 0;
var choice;
var scrolls = Array(Array('', 5840003, 10000), Array('', 5840006, 10000), Array('', 5840007, 10000), Array('', 5800000, 10000), Array('', 5800001, 10000), Array('', 5800002, 10000));
function start() {
    status = -1;
    action(1, 0, 0);
}
function action(f, d, c) {
    if (f == -1) {
        cm.dispose();
    } else {
        if (status == 0 && f == 0) {
            cm.dispose();
            return;
        } else {
            if (status >= 1 && f == 0) {
                cm.sendOk('好吧，欢迎下次继续光临！.');
                cm.dispose();
                return;
            }
        }
        if (f == 1) {
            status++;
        } else {
            status--;
        }
        if (status == 0) {
            choices = '\r\n当前点卷：#r' + cm.getPlayer().getCSPoints(1) + '#k (#r买后不支持退货哟亲#k)';
            for (var a = 0; a < scrolls.length; a++) {
                choices += '\r\n#L' + a + '##v' + scrolls[a][1] + '##z' + scrolls[a][1] + '#　#d需要#r' + scrolls[a][2] + '#d点卷#k#l';
            }
            cm.askMenuS('欢迎来到' + cm.getServerName() + 'BMS特殊新加1号店,你想买我们商店的物品么?请选择吧：.' + choices);
        } else {
            if (status == 1) {
                cm.askYesNo('你确定要购买#v' + scrolls[c][1] + '##t' + scrolls[c][1] + '#?');
                choice = c;
            } else {
                if (status == 2) {
                    var b = scrolls[choice][2];
                    if (cm.getPlayer().getCSPoints(1) < b) {
                        cm.sendOk('抱歉，你没足够的点卷！');
                        cm.dispose();
                    } else {
                        var e = cm.gainGachaponItem(scrolls[choice][1], 1, 'BMS特殊新加1号店', 3, true);
                        if (e != -1) {
                            cm.getPlayer().modifyCSPoints(1, -b);
                            cm.dispose();
                            cm.sendOk('恭喜您成功购买#i' + scrolls[choice][1] + ':# #b#t' + scrolls[choice][1] + '##k。');
                        } else {
                            cm.sendOk('购买失败，请您确认在背包所有栏目窗口中是否有一格以上的空间。');
                        }
                    }
                }
            }
        }
    }
}