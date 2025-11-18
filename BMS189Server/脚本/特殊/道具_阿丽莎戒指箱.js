var status = -1;
var NPC = 2540000;
var itemBorder = '#fUI/UIWindow.img/Item/New/inventory/0#';
var lock = '#v2200001#';
function start() {
    action(1, 0, 0);
}
function action(f, b, a) {
    var c = cm.getNpc();
    if (!cm.haveItem(c, 1)) {
        cm.dispose();
        return;
    }
    if (c >= 2028263 && c <= 2028272) {
        cm.gainItem(c, -1);
        var d = 2028273 - c;
        var e = '箱子里的东西有：\r\n';
        e += roll(2435049, 10, d, 30);
        e += roll(2432503, 5, d, 1);
        e += roll(2432502, 2, d, 1);
        e += roll(2432464, 1, d, 1);
        e += roll(2432468, 1, d, 1);
        e += roll(2049043, 10, d, 1);
        e += roll(5064100, 10, d, 1);
        e += roll(5062010, 1, d, 1);
        e += roll(5062000, 10, d, 1);
        e += roll(1402224, 1, d, 1);
        e += roll(cm.rand(1113098, 1113128), 1, d, 1);
        cm.sendOkS(e);
    } else {
        if (c == 2028273) {
            cm.gainItem(c, -1);
            var e = '箱子里的东西有：\r\n';
            e += roll(cm.rand(1113098, 1113128), 100, 1, 1);
        } else {
            if (c == 2433841) {
                cm.gainItem(c, -1);
                var e = '箱子里的东西有：\r\n';
                e += rollPeriod(cm.rand(1113098, 1113128), 100, 1, 1, 3, 7);
            }
        }
    }
    cm.dispose();
}
function rollPeriod(g, c, f, e, a, b) {
    var d = cm.rand(0, 100) < c * f ? e : 0;
    if (d > 0) {
        cm.gainItemPeriod(g, d, cm.rand(a, b));
        return d + ' 个 #v' + g + '##z' + g + '#\r\n';
    } else {
        return '';
    }
}
function roll(e, a, d, c) {
    var b = cm.rand(0, 100) < a * d ? c : 0;
    if (b > 0) {
        cm.gainItem(e, b);
        return b + ' 个 #v' + e + '##z' + e + '#\r\n';
    } else {
        return '';
    }
}