var 箱子名 = '星力卷随机';
var status = -1;
var 记录选择 = 0;
var 箱子ID = 2430047;
var itemList = [
    2049399,
    2049389,
    2049388,
    2049387,
    2049386,
    2049385,
    2049384,
    2049383,
    2049382,
    2049381,
    2049380,
    2049373
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
        text = '#b你会随机得到以下#r' + 箱子名 + '#b：\r\n#fn方正粗黑宋简体#';
        for (var b = 0; b < itemList.length; b++) {
            text += '#L' + b + '##i' + itemList[b] + '# #b#z' + itemList[b] + '##l\r\n';
        }
        cm.askMenu(text);
    } else {
        if (status == 1) {
            cm.askNumber('这是一个盲盒，从中随机获得道具。\r\n身上有' + cm.getItemQuantity(箱子ID) + '个箱子，想要打开几个？');
        } else {
            if (status == 2) {
                if (c > cm.getItemQuantity(箱子ID) || c > 100) {
                    cm.playerMessage(1, '想要打开' + c + '个，\r\n但身上没那么多箱子。\r\n(单次开启上限100个)');
                    cm.dispose();
                    return;
                }
                for (var b = 0; b < c; b++) {
                    var a = itemList[Math.floor(Math.random() * itemList.length)];
                    if (!cm.canHold(a)) {
                        cm.sendOkS('哎呀呀！！\r\n随机第' + (b + 1) + '次时应该获得#r#v' + a + '##z' + a + '##k但背包没空位啊。');
                        cm.dispose();
                        return;
                    }
                    cm.gainGachaponItem(a, 1, '' + 箱子名 + '箱', 3);
                    cm.playerMessage(-1, '获得道具：' + cm.getItemName(a) + '');
                    cm.playerMessage(5, '获得道具：' + cm.getItemName(a) + '');
                    cm.gainItem(箱子ID, -1);
                }
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