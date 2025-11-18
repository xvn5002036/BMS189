var a = 0;
var text;
var selects;
var buynum = 0;
var itemlist = Array(Array(2436324, 980), Array(5840003, 200), Array(5840006, 200), Array(5840007, 200));
function start() {
    a = -1;
    action(1, 0, 0);
}
function action(e, d, c) {
    if (e == -1) {
        cm.dispose();
    } else {
        if (e == 1) {
            a++;
        } else {
            a--;
        }
        if (a == -1) {
            cm.dispose();
        } else {
            if (a == 0) {
                text = '#h0#,您可以在这里购买#e#b理发卷#n#k,请选择你想要购买的物品\r\n#b';
                for (var b = 0; b < itemlist.length; b++) {
                    text += '#L' + b + '##i' + itemlist[b] + ':##t' + itemlist[b] + '# - #r' + itemlist[b][1] + '#b抵用卷  \r\n';
                    if (b != 0 && (b + 1) % 5 == 0) {
                        text += '\r\n';
                    }
                }
                cm.askMenu(text);
            } else {
                if (a == 1) {
                    selects = c;
                    cm.askNumber('请输入你请你输入想要购买的数量\r\n\r\n#r1个需要' + itemlist[selects][1] + '个#b抵用卷#k', 0, 0, 999999);
                } else {
                    if (a == 2) {
                        buynum = c;
                        cm.sendNext('你想购买' + buynum + '个#r#i' + itemlist[selects][0] + '##k？\r\n你将使用掉' + buynum * itemlist[selects][1] + '抵用卷。');
                    } else {
                        if (a == 3) {
                            if (cm.getPlayer().getMeso() >= -buynum * itemlist[selects][1]) {
                                cm.getPlayer().modifyCSPoints(2, -buynum * itemlist[selects][1]);
                                cm.gainItem(itemlist[selects][0], buynum);
                                cm.sendOk('购买成功了！');
                                cm.dispose();
                            } else {
                                cm.sendOk('对不起，你没有足够的抵用卷。');
                                cm.dispose();
                            }
                        }
                    }
                }
            }
        }
    }
}
var status = -1;