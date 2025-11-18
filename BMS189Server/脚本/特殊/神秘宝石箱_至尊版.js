status = -1;
var 箱子名称 = '神秘宝石箱';
var 道具ID = 2631607;
var itemList;
var random = java.lang.Math.floor(Math.random() * 4 + 1);
if (random == 1) {
    itemList = Array(Array(4440001, 10, 1, 3), Array(4440101, 20, 1, 3), Array(4440200, 50, 1, 3), Array(4440300, 250, 1, 3));
} else {
    if (random == 2) {
        itemList = Array(Array(4441001, 10, 1, 3), Array(4441101, 20, 1, 3), Array(4441200, 50, 1, 3), Array(4441300, 250, 1, 3));
    } else {
        if (random == 3) {
            itemList = Array(Array(4442001, 10, 1, 3), Array(4442101, 20, 1, 3), Array(4442200, 50, 1, 3), Array(4442300, 250, 1, 3));
        } else {
            if (random == 4) {
                itemList = Array(Array(4443001, 10, 1, 3), Array(4443101, 20, 1, 3), Array(4443200, 50, 1, 3), Array(4443300, 250, 1, 3));
            }
        }
    }
}
function start() {
    action(1, 0, 0);
}
function action(g, h, l) {
    if (status == 0 && g == 0) {
        cm.dispose();
        return;
    }
    if (g == 1) {
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
        var a = Math.floor(Math.random() * 290);
        var d = Array();
        for (var f = 0; f < itemList.length; f++) {
            if (itemList[f][1] >= a) {
                d.push(itemList[f]);
            }
        }
        if (d.length != 0) {
            var m;
            var b = new java.util.Random();
            var e = b.nextInt(d.length);
            var j = d[e][0];
            var c = d[e][2];
            var k = d[e][3];
            m = cm.gainGachaponItem(j, c, '' + 箱子名称 + '', k);
            if (m != -1) {
                cm.gainItem(道具ID, -1);
                cm.effect_NormalSpeechBalloon('#b#z' + m + '##k x' + c + '', 1, 0, 0, 3000, 0, 0);
            } else {
                cm.sendOk('请你确认在背包的装备，消耗，其他窗口中是否有一格以上的空间。');
            }
            cm.dispose();
        } else {
            cm.gainItem(道具ID, -1);
            cm.getTopMsgFont('是一个空盒子。0.0~！', 3, 20, 4, 0);
            cm.dispose();
        }
    }
}