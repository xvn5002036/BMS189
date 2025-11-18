var status = 0;
var choice;
var itemxh = new Array('1212065', '1222060', '1232058', '1242062', '1242063', '1302276', '1312154', '1322204', '1332226', '1342083', '1362091', '1372178', '1382209', '1402197', '1412136', '1422141', '1432168', '1442224', '1452206', '1462194', '1472215', '1482169', '1492180', '1522095', '1532099', '1542071', '1552071');
var itemxhcost = new Array('7000', '7000', '7000', '7000', '7000', '7000', '7000', '7000', '7000', '7000', '7000', '7000', '7000', '7000', '7000', '7000', '7000', '7000', '7000', '7000', '7000', '7000', '7000', '7000', '7000', '7000', '7000');
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
            cm.askMenuS('下面是可以兑换的杂物列表，请选择吧：.' + choices);
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