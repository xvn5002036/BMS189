status = -1;
var itemList = Array(Array(2430210, 600, 1, 3), Array(2048723, 300, 1, 3), Array(2048721, 300, 1, 3), Array(4000463, 600, 1, 3), Array(5062024, 500, 1, 3), Array(2048704, 300, 1, 3), Array(2048708, 300, 1, 3), Array(2614008, 400, 1, 3), Array(2614014, 300, 1, 3), Array(2614002, 200, 1, 3), Array(3015820, 200, 1, 3), Array(3015712, 200, 1, 3), Array(3015633, 200, 1, 3), Array(2614004, 300, 1, 3), Array(2435824, 100, 1, 3), Array(3994417, 40, 1, 3), Array(3994422, 40, 1, 3), Array(1112968, 300, 1, 3), Array(3015545, 200, 1, 3), Array(3015327, 200, 1, 3), Array(3015181, 200, 1, 3), Array(3015178, 200, 1, 3), Array(3015688, 200, 1, 3), Array(3015690, 200, 1, 3), Array(3015653, 200, 1, 3), Array(3015642, 200, 1, 3), Array(4000463, 600, 1, 3), Array(2435824, 100, 1, 3), Array(2048723, 300, 1, 3), Array(2048721, 300, 1, 3), Array(2435824, 100, 1, 3), Array(5062024, 500, 1, 3), Array(2436363, 40, 1, 3), Array(2048708, 300, 1, 3), Array(2614008, 400, 1, 3), Array(2614014, 300, 1, 3), Array(2614002, 200, 1, 3), Array(2430210, 600, 1, 3), Array(2436256, 30, 1, 3), Array(1113056, 30, 1, 3), Array(2048721, 300, 1, 3), Array(4000463, 600, 1, 3), Array(5062024, 500, 1, 3), Array(2048704, 300, 1, 3), Array(2048708, 300, 1, 3), Array(2614008, 400, 1, 3), Array(2614014, 300, 1, 3), Array(2614002, 200, 1, 3), Array(2430210, 600, 1, 3), Array(2435824, 100, 1, 3), Array(2048721, 300, 1, 3), Array(4000463, 600, 1, 3), Array(2430210, 500, 1, 3), Array(2048704, 300, 1, 3), Array(2048708, 300, 1, 3), Array(2614008, 400, 1, 3), Array(2614014, 300, 1, 3), Array(2614002, 200, 1, 3), Array(4000463, 600, 1, 3), Array(2048723, 300, 1, 3), Array(2048721, 300, 1, 3), Array(4000463, 600, 1, 3), Array(3994419, 40, 1, 3), Array(5062024, 500, 1, 3), Array(2048704, 300, 1, 3), Array(3994422, 40, 1, 3), Array(2048721, 300, 1, 3), Array(3994420, 40, 1, 3), Array(4000463, 600, 1, 3), Array(2436383, 30, 1, 3), Array(2048704, 300, 1, 3), Array(4000463, 600, 1, 3), Array(2430210, 600, 1, 3), Array(2048723, 300, 1, 3), Array(2435824, 150, 1, 3), Array(2436262, 40, 1, 3), Array(4000463, 600, 1, 3), Array(5062024, 500, 1, 3), Array(3994418, 40, 1, 3), Array(2048704, 300, 1, 3), Array(2048708, 300, 1, 3), Array(2614008, 400, 1, 3), Array(2614014, 300, 1, 3), Array(2614002, 200, 1, 3), Array(2435824, 100, 1, 3), Array(2048723, 300, 1, 3), Array(2048721, 300, 1, 3), Array(4000463, 600, 1, 3), Array(5062024, 500, 1, 3), Array(2048704, 300, 1, 3), Array(2048708, 300, 1, 3), Array(2614008, 400, 1, 3), Array(2614014, 300, 1, 3), Array(2614002, 200, 1, 3));
function start() {
    action(1, 0, 0);
}
function action(k, e, w) {
    if (k == 1) {
        status++;
    } else {
        if (status == 0) {
            cm.sendOk('不想使用吗？…我的肚子里有各类#b奇特座椅或卷轴、装备、新奇道具#k哦！');
            cm.dispose();
        }
        status--;
    }
    if (status == 0) {
        var b = Math.floor(Math.random() * 410);
        var o = Array();
        for (var p = 0; p < itemList.length; p++) {
            if (itemList[p][1] >= b) {
                o.push(itemList[p]);
            }
        }
        if (o.length != 0) {
            var q;
            var a = new java.util.Random();
            var l = a.nextInt(o.length);
            var g = o[l][0];
            var f = o[l][2];
            var r = o[l][3];
            q = cm.gainGachaponItem(g, f, '进阶露西德', r);
        } else {
            cm.dispose();
        }
        var d = Math.floor(Math.random() * 510);
        var n = Array();
        for (var p = 0; p < itemList.length; p++) {
            if (itemList[p][1] >= b) {
                n.push(itemList[p]);
            }
        }
        if (n.length != 0) {
            var x;
            var a = new java.util.Random();
            var y = a.nextInt(n.length);
            var t = n[y][0];
            var j = n[y][2];
            var r = n[y][3];
            x = cm.gainGachaponItem(t, j, '进阶露西德', r);
        } else {
            cm.dispose();
        }
        var c = Math.floor(Math.random() * 610);
        var m = Array();
        for (var p = 0; p < itemList.length; p++) {
            if (itemList[p][1] >= b) {
                m.push(itemList[p]);
            }
        }
        if (m.length != 0) {
            var v;
            var a = new java.util.Random();
            var u = a.nextInt(m.length);
            var s = m[u][0];
            var h = m[u][2];
            var r = m[u][3];
            v = cm.gainGachaponItem(s, h, '进阶露西德', r);
        } else {
            cm.dispose();
        }
        cm.dispose();
        cm.warp(910000000, 0);
    }
}
var status = -1;