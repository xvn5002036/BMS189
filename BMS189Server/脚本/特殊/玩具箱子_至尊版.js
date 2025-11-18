status = -1;
var itemList;
var random = java.lang.Math.floor(Math.random() * 7 + 1);
if (random == 1) {
    itemList = Array(Array(1472081, 300, 1, 3), Array(1472063, 300, 1, 3), Array(1442123, 300, 1, 3), Array(1442065, 300, 1, 3), Array(1432039, 300, 1, 3), Array(1422128, 300, 1, 3), Array(1422011, 300, 1, 3), Array(1402184, 300, 1, 3), Array(1402169, 300, 1, 3), Array(1402063, 300, 1, 3), Array(1402044, 300, 1, 3), Array(1402037, 300, 1, 3), Array(1402014, 300, 1, 3), Array(1402013, 300, 1, 3), Array(1382173, 300, 1, 3), Array(1382177, 300, 1, 3), Array(1332053, 300, 1, 3), Array(1332032, 300, 1, 3), Array(1322188, 300, 1, 3), Array(1322159, 300, 1, 3), Array(1322160, 300, 1, 3), Array(1322102, 300, 1, 3), Array(1322051, 300, 1, 3), Array(1302341, 300, 1, 3), Array(1302162, 300, 1, 3), Array(1302129, 300, 1, 3), Array(1302128, 300, 1, 3), Array(1302106, 300, 1, 3), Array(1302087, 300, 1, 3), Array(1302080, 300, 1, 3), Array(1442018, 300, 1, 3));
} else {
    if (random == 2) {
        itemList = Array(Array(1000057, 300, 1, 3), Array(1002517, 300, 1, 3), Array(1002971, 300, 1, 3), Array(1003228, 300, 1, 3), Array(1003755, 300, 1, 3), Array(1003916, 300, 1, 3), Array(1003978, 300, 1, 3), Array(1003999, 300, 1, 3), Array(1004057, 300, 1, 3), Array(1004387, 300, 1, 3), Array(1004616, 300, 1, 3), Array(1004771, 300, 1, 3), Array(1004822, 300, 1, 3), Array(1001060, 300, 1, 3));
    } else {
        if (random == 3) {
            itemList = Array(Array(1102299, 200, 1, 3), Array(1102489, 200, 1, 3), Array(1102887, 150, 1, 3), Array(1102962, 60, 1, 3));
        } else {
            if (random == 4) {
                itemList = Array(Array(1051098, 300, 1, 3), Array(1050127, 300, 1, 3), Array(1052548, 300, 1, 3), Array(1052578, 300, 1, 3));
            } else {
                if (random == 5) {
                    itemList = Array(Array(1022147, 250, 1, 3), Array(1022152, 250, 1, 3), Array(1032226, 250, 1, 3), Array(1122299, 250, 1, 3), Array(1123012, 250, 1, 3));
                } else {
                    if (random == 6) {
                        itemList = Array(Array(1142075, 100, 1, 3), Array(1142122, 100, 1, 3), Array(1142146, 100, 1, 3), Array(1142207, 100, 1, 3), Array(1142206, 100, 1, 3), Array(1142204, 100, 1, 3), Array(1142208, 100, 1, 3), Array(1142215, 100, 1, 3), Array(1142256, 100, 1, 3), Array(1142275, 100, 1, 3), Array(1142304, 100, 1, 3), Array(1142371, 100, 1, 3), Array(1142587, 100, 1, 3), Array(1142952, 100, 1, 3), Array(1143028, 100, 1, 3), Array(1142321, 100, 1, 3), Array(1142349, 100, 1, 3), Array(1142409, 100, 1, 3), Array(1142505, 100, 1, 3), Array(1142716, 100, 1, 3), Array(1142726, 100, 1, 3), Array(1142803, 100, 1, 3), Array(1142802, 100, 1, 3), Array(1142858, 100, 1, 3), Array(1142896, 100, 1, 3), Array(1142897, 100, 1, 3), Array(1142925, 100, 1, 3), Array(1142951, 100, 1, 3), Array(1143003, 100, 1, 3), Array(1143026, 100, 1, 3), Array(1142908, 100, 1, 3));
                    } else {
                        if (random == 7) {
                            itemList = Array(Array(3700044, 100, 1, 3), Array(3700052, 100, 1, 3), Array(3700089, 100, 1, 3), Array(3700119, 100, 1, 3), Array(3700120, 100, 1, 3), Array(3700220, 100, 1, 3), Array(3700222, 100, 1, 3), Array(3700238, 100, 1, 3), Array(3700309, 100, 1, 3), Array(3700337, 100, 1, 3), Array(3700347, 100, 1, 3), Array(3700353, 100, 1, 3), Array(3700356, 100, 1, 3), Array(3700386, 100, 1, 3), Array(3700403, 100, 1, 3), Array(3700428, 100, 1, 3), Array(3700147, 100, 1, 3), Array(3700135, 100, 1, 3), Array(3700118, 100, 1, 3), Array(3700011, 100, 1, 3), Array(3700005, 100, 1, 3), Array(3700001, 100, 1, 3));
                        }
                    }
                }
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
        var a = Math.floor(Math.random() * 550);
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
            m = cm.gainGachaponItem(j, c, '每日礼物箱', k);
            if (m != -1) {
                cm.gainItem(2431083, -1);
                cm.sendOk('你获得了 #b#v' + m + '##z' + m + '##k ' + c + '个。');
            } else {
                cm.sendOk('请你确认在背包的装备，消耗，其他窗口中是否有一格以上的空间。');
            }
            cm.dispose();
        } else {
            cm.gainItem(2431083, -1);
            cm.playerMessage(-1, '是一个空盒子。0.0~！');
            cm.dispose();
        }
    }
}