status = -1;
var itemList = Array(Array(2340000, 600, 3, 3), Array(2049752, 100, 1, 3), Array(2049750, 50, 1, 3), Array(2049704, 200, 1, 3), Array(2049300, 500, 2, 3), Array(2049135, 50, 1, 3), Array(2049136, 50, 1, 3), Array(2049137, 50, 1, 3), Array(2049124, 500, 3, 3), Array(2046913, 150, 1, 3), Array(2046914, 150, 1, 3), Array(2046173, 150, 1, 3), Array(2046577, 150, 1, 3), Array(2046578, 150, 1, 3), Array(2046579, 150, 1, 3), Array(2046580, 150, 1, 3), Array(2046763, 150, 1, 3), Array(2046764, 150, 1, 3), Array(2046765, 150, 1, 3), Array(2046766, 150, 1, 3), Array(5064300, 600, 2, 3), Array(5062500, 600, 2, 3), Array(5062000, 600, 2, 3), Array(5064000, 600, 1, 3), Array(5064100, 600, 1, 3), Array(5062002, 600, 2, 3), Array(5062010, 600, 2, 3), Array(5062009, 600, 2, 3), Array(1402196, 30, 1, 3), Array(1432167, 30, 1, 3), Array(1452205, 30, 1, 3), Array(1462193, 30, 1, 3), Array(1472214, 30, 1, 3), Array(1332225, 30, 1, 3), Array(1342082, 30, 1, 3), Array(1362090, 30, 1, 3), Array(1382208, 30, 1, 3), Array(1372177, 30, 1, 3), Array(1212063, 30, 1, 3), Array(1242060, 30, 1, 3), Array(1232057, 30, 1, 3), Array(1522094, 30, 1, 3), Array(3010225, 50, 1, 3), Array(3010226, 50, 1, 3), Array(3010824, 50, 1, 3), Array(3010825, 50, 1, 3), Array(3010826, 50, 1, 3), Array(3010827, 50, 1, 3), Array(3010829, 50, 1, 3), Array(3010828, 50, 1, 3), Array(3010830, 50, 1, 3), Array(3010831, 50, 1, 3));
function start() {
    action(1, 0, 0);
}
function action(g, h, l) {
    if (g == 1) {
        status++;
    } else {
        if (status == 0) {
            cm.sendOk('不想使用吗？…我的肚子里有各类#b奇特座椅或卷轴、装备、新奇道具#k哦！');
            cm.dispose();
        }
        status--;
    }
    if (status == 0) {
        var a = Math.floor(Math.random() * 600);
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
            m = cm.gainGachaponItem(j, c, 'VIP神秘盒子', k);
            if (m != -1) {
                cm.gainItem(2430029, -1);
                cm.gainItem(4310030, 100);
                cm.sendOk('你获得了 #b#t' + m + '##k ' + c + '个，额外得到100个运动会币的奖励，可以在游戏商店中兑换#b运动会装备#k和#b必成卷轴#k。');
            } else {
                cm.sendOk('请你确认在背包的装备，消耗，其他窗口中是否有一格以上的空间。');
            }
            cm.dispose();
        } else {
            cm.sendOk('今天的运气可真差，什么都没有拿到。');
            cm.dispose();
        }
    }
}
var status = -1;