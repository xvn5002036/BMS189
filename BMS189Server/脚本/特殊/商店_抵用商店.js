var status = -1;
var aaa = '#fUI/UIWindow.img/PvP/Scroll/enabled/next2#';
var buyId = -1;
var item = null;
var itemList = Array(Array(2049005, 8000, 1, 10), Array(5062000, 600, 1, 30), Array(5050000, 5000, 100, -1), Array(5062002, 1200, 1, 10), Array(5062500, 1500, 1, 10), Array(5062010, 1800, 1, 10), Array(5062009, 2000, 1, 5), Array(2340000, 2000, 1, 10), Array(5064000, 3000, 1, 10), Array(2049402, 2500, 1, 10), Array(2049704, 5000, 1, 1), Array(5076000, 800, 1, -1), Array(5072000, 500, 1, -1));
function start() {
    action(1, 0, 0);
}
function action(e, h, i) {
    if (e == 1) {
        status++;
    } else {
        if (status == 0) {
            cm.dispose();
            return;
        }
        status--;
    }
    if (status == 0) {
        var k = '欢迎来到#e#b抵用商城#k#n，请选择你要购买的物品，部分物品有次数限制哦！\r\n';
        for (var j in itemList) {
            var g = itemList[j][0];
            var f = itemList[j][2];
            var b = itemList[j][3];
            var d = itemList[j][1];
            k += '#L' + j + '#' + aaa + ' #r' + d + '抵用券#d兑换#b#z' + g + '# #d' + f + '个#k ';
            if (b != -1) {
                var a = cm.getBossLogAcc('抵用券' + cm.getItemName(g));
                if (a >= b) {
                    k += '#r(' + a + '/' + b + '次)#k#l\r\n';
                } else {
                    k += '#g(' + a + '/' + b + '次)#k#l\r\n';
                }
            } else {
                k += '#l\r\n';
            }
        }
        cm.askMenu(k);
    } else {
        if (status == 1) {
            buyId = i;
            item = itemList[buyId];
            var g = item[0];
            var f = item[2];
            var d = item[1];
            cm.askYesNo('是否需要花费#r' + d + '抵用券#k购买' + f + '个#b#z' + g + '##k？');
        } else {
            if (status == 2) {
                var g = item[0];
                var f = item[2];
                var b = item[3];
                var d = item[1];
                var a = cm.getBossLogAcc('抵用券' + cm.getItemName(g));
                var c = cm.getPlayer().getCSPoints(2);
                if (c < d) {
                    cm.sendOk('您的抵用券余额不足，无法完成购买。');
                    cm.dispose();
                    return;
                }
                if (b != -1 && a >= b) {
                    cm.sendOk('您今天无法再购买该物品。');
                    cm.dispose();
                    return;
                }
                if (cm.getSpace(Math.floor(g / 1000000)) <= 2) {
                    cm.sendOk('您的背包空间不足，请整理后再购买。');
                    cm.dispose();
                    return;
                }
                cm.gainItem(g, f);
                cm.getPlayer().modifyCSPoints(2, -d);
                if (b != -1) {
                    cm.setBossLogAcc('抵用券' + cm.getItemName(g));
                }
                cm.sendOk('恭喜您购买成功！');
                cm.dispose();
            }
        }
    }
}