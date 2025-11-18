var 箱子名 = '凯梅尔兹武器';
var status = -1;
var 记录选择 = 0;
var 箱子ID = 2433295;
var itemList = [
    1302299,
    1332249,
    1292036,
    1342091,
    1212090,
    1362110,
    1412153,
    1542073,
    1372196,
    1312174,
    1532119,
    1262038,
    1592031,
    1232085,
    1382232,
    1582024,
    1462214,
    1252032,
    1442243,
    1452227,
    1522114,
    1222085,
    1482190,
    1422159,
    1552073,
    1322224,
    1432189,
    1432189,
    1242091,
    1472236,
    1213033,
    1402222,
    1282031,
    1492200
];
function start() {
    action(1, 0, 0);
}
function action(e, d, c) {
    if (status == 0 && e == 0) {
        cm.dispose();
        return;
    }
    if (e == 1) {
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
                        cm.sendOkS('哎呀呀！！\r\n进行第' + (a + 1) + '次时应该获得#r#v' + itemList[selects] + '##z' + itemList[selects] + '##k但背包没空位啊。');
                        cm.dispose();
                        return;
                    }
                    cm.gainItem(itemList[selects], 1);
                    cm.worldSpouseMessage(23, '' + cm.getPlayer().getName() + ' : {' + b.getName(itemList[selects]) + '}是我在' + 箱子名 + '中获得的，恭喜我吧！');
                    cm.gainItem(箱子ID, -1);
                }
                cm.playerMessage(-1, '获得道具：' + cm.getItemName(itemList[selects]) + ' x' + c + '');
                cm.playerMessage(1, '获得道具：' + cm.getItemName(itemList[selects]) + ' x' + c + '');
                if (c > 3 && c < 10) {
                    cm.worldSpouseMessage(25, '[' + 箱子名 + ']  : 真是豪爽！玩家“' + cm.getPlayer().getName() + '”一口气开了' + c + '个！！！');
                } else {
                    if (c >= 10 && c < 20) {
                        cm.worldSpouseMessage(25, '[' + 箱子名 + ']  : 真是豪爽！玩家“' + cm.getPlayer().getName() + '”一口气开了' + c + '个！！！');
                        cm.worldSpouseMessage(25, '[' + 箱子名 + ']  : 真是豪爽！玩家“' + cm.getPlayer().getName() + '”一口气开了' + c + '个！！！');
                    } else {
                        if (c >= 20 && c < 50) {
                            cm.worldSpouseMessage(25, '[' + 箱子名 + ']  : 真是豪爽！玩家“' + cm.getPlayer().getName() + '”一口气开了' + c + '个！！！');
                            cm.worldSpouseMessage(25, '[' + 箱子名 + ']  : 真是豪爽！玩家“' + cm.getPlayer().getName() + '”一口气开了' + c + '个！！！');
                            cm.worldSpouseMessage(25, '[' + 箱子名 + ']  : 真是豪爽！玩家“' + cm.getPlayer().getName() + '”一口气开了' + c + '个！！！');
                        } else {
                            if (c >= 50) {
                                cm.worldSpouseMessage(25, '[' + 箱子名 + ']  : 真是豪爽！玩家“' + cm.getPlayer().getName() + '”一口气开了' + c + '个！！！');
                                cm.worldSpouseMessage(25, '[' + 箱子名 + ']  : 真是豪爽！玩家“' + cm.getPlayer().getName() + '”一口气开了' + c + '个！！！');
                                cm.worldSpouseMessage(25, '[' + 箱子名 + ']  : 真是豪爽！玩家“' + cm.getPlayer().getName() + '”一口气开了' + c + '个！！！');
                                cm.worldSpouseMessage(25, '[' + 箱子名 + ']  : 真是豪爽！玩家“' + cm.getPlayer().getName() + '”一口气开了' + c + '个！！！');
                                cm.worldSpouseMessage(25, '[' + 箱子名 + ']  : 真是豪爽！玩家“' + cm.getPlayer().getName() + '”一口气开了' + c + '个！！！');
                            }
                        }
                    }
                }
                cm.dispose();
            }
        }
    }
}