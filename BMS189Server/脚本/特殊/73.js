var status = 0;
var choice;
var itemxh = new Array('1122076', '1002357', '1003112', '1002926', '1002927', '1122150', '1112597', '1072776', '1050253', '1051309');
var itemxhcost = new Array('5000', '2000', '5000', '500', '500', '3000', '10000', '2000', '2000', '2000');
function start() {
    status = -1;
    action(1, 0, 0);
}
function action(d, c, b) {
    if (d == -1) {
        cm.dispose();
    } else {
        if (status == 0 && d == 0) {
            cm.dispose();
            return;
        } else {
            if (status >= 1 && d == 0) {
                cm.sendOk('好吧，欢迎下次继续光临！.');
                cm.dispose();
                return;
            }
        }
        if (d == 1) {
            status++;
        } else {
            status--;
        }
        if (status == 0) {
            choices = '\r\n点卷余额：#r' + cm.getPlayer().getCSPoints(1) + '点#k\r\n';
            for (var a = 0; a < itemxh.length; a++) {
                choices += '\r\n#L' + a + '##v' + itemxh[a] + '##z' + itemxh[a] + '#　#d=#r' + itemxhcost[a] + '#d点卷#k#l';
            }
            cm.askMenuS('下面是可以回收的杂物列表，请选择吧：.' + choices);
        } else {
            if (status == 1) {
                cm.askNumber('你选择的杂物是#v' + itemxh[b] + '#可换取：' + itemxhcost[b] + '点卷/个\r\n请输入你兑换的数量', 1, 1, cm.getPlayer().getCSPoints(2));
                choice = b;
            } else {
                if (status == 2) {
                    fee = b;
                    money = fee * itemxhcost[choice];
                    if (fee < 0) {
                        cm.sendOk('只能输入0-1000以内的数字~');
                        cm.dispose();
                    } else {
                        if (cm.haveItem(itemxh[choice], fee) == false) {
                            cm.sendOk('兑换失败，你没有足够杂物');
                            cm.dispose();
                        } else {
                            cm.getPlayer().modifyCSPoints(1, money);
                            cm.gainItem(itemxh[choice], -fee);
                            cm.sendOk('恭喜，兑换成功。');
                            cm.dispose();
                        }
                    }
                }
            }
        }
    }
}