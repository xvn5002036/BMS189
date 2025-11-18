var 箱子名 = '暴君装备';
var status = -1;
var 记录选择 = 0;
var 箱子ID = 2432069;
var itemList = [
    1072743,
    1072744,
    1072745,
    1072746,
    1072747,
    1082543,
    1082544,
    1082545,
    1082546,
    1082547,
    1102481,
    1102482,
    1102483,
    1102484,
    1102485,
    1132174,
    1132175,
    1132176,
    1132177,
    1132178
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