var 箱子名 = '法弗纳武器';
var status = -1;
var 记录选择 = 0;
var 箱子ID = 2431938;
var itemList = [
    1403016,
    1213016,
    1292016,
    1592018,
    1282015,
    1272015,
    1212063,
    1222058,
    1232057,
    1242061,
    1242060,
    1302275,
    1312153,
    1322203,
    1332225,
    1342082,
    1362090,
    1372177,
    1382208,
    1402196,
    1412135,
    1422140,
    1432167,
    1442223,
    1452205,
    1462193,
    1472214,
    1482168,
    1492179,
    1522094,
    1532098,
    1542063,
    1552063,
    1262016,
    1252015
];
function start() {
    action(1, 0, 0);
}
function action(f, d, c) {
    if (status == 0 && f == 0) {
        cm.dispose();
        return;
    }
    if (f == 1) {
        status++;
    } else {
        status--;
    }
    if (cm.getzhizunvip() != 2) {
        cm.dispose();
        cm.playerMessage(1, '该功能是至尊版专享。');
        return;
    }
    if (status == 0) {
        text = '#b请选择你要获得的#r' + 箱子名 + '#b：\r\n#fn方正粗黑宋简体#';
        for (var a = 0; a < itemList.length; a++) {
            text += '#L' + a + '##i' + itemList[a] + '# #b#z' + itemList[a] + '##l\r\n';
        }
        cm.askMenu(text);
    } else {
        if (status == 1) {
            cm.askNumber('获得 #b#e#v' + itemList[c] + '##z' + itemList[c] + '# #n#k确定了吗？\r\n身上有' + cm.getItemQuantity(箱子ID) + '个箱子，想要打开几个？（单次1-100）');
            selects = c;
        } else {
            if (status == 2) {
                if (c > cm.getItemQuantity(箱子ID) || c > 100) {
                    cm.playerMessage(1, '想要打开' + c + '个，\r\n但身上没那么多箱子。\r\n(单次开启上限100个)');
                    cm.dispose();
                    return;
                }
                var b = cm.getItemInfo();
                for (var a = 0; a < c; a++) {
                    if (!cm.canHold(itemList[selects])) {
                        cm.sendOkS('哎呀呀！\r\n进行第' + (a + 1) + '次时应该获得#r#v' + itemList[selects] + '##z' + itemList[selects] + '##k但背包没空位啊。');
                        cm.dispose();
                        return;
                    }
                    cm.gainItem(itemList[selects], 1);
                    cm.worldSpouseMessage(23, '' + cm.getPlayer().getName() + ' : {' + b.getName(itemList[selects]) + '}是我在' + 箱子名 + '箱中获得的，恭喜我吧！');
                    cm.gainItem(箱子ID, -1);
                }
                cm.playerMessage(-1, '获得道具：' + cm.getItemName(itemList[selects]) + ' x' + c + '');
                cm.playerMessage(1, '获得道具：' + cm.getItemName(itemList[selects]) + ' x' + c + '');
                var e = 0;
                if (c > 3 && c < 10) {
                    e = 1;
                } else {
                    if (c >= 10 && c < 20) {
                        e = 2;
                    } else {
                        if (c >= 20 && c < 50) {
                            e = 3;
                        } else {
                            if (c >= 50) {
                                e = 5;
                            }
                        }
                    }
                }
                for (var a = 0; a < e; a++) {
                    cm.worldSpouseMessage(25, '[' + 箱子名 + ']  : 真是豪爽！玩家“' + cm.getPlayer().getName() + '”一口气开了' + c + '个' + 箱子名 + '！');
                }
                cm.dispose();
            }
        }
    }
}