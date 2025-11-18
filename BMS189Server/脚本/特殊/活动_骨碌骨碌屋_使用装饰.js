var status = -1;
var selectionLog = [];
function start() {
    action(1, 0, 0);
}
function action(d, c, b) {
    if (status == 0 && d == 0) {
        cm.dispose();
        return;
    }
    d == 1 ? status++ : status--;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose();
    } else {
        if (status === a++) {
            if (!cm.isQuestFinished(100485)) {
                cm.sendNormalTalk('你还没有骨碌骨碌屋呢！', 4, 9062276, false, true);
                cm.dispose();
                return;
            }
            var c = getType();
            var e = cm.getNumberFromQuestInfo(100488, 'lv');
            if (e < c) {
                cm.askYesNo('我的骨碌骨碌屋是#e#bLv.' + e + '#n#k。这个外形从#e#rLv.' + c + '#n#k开始可以使用。 要现在登记吗？\r\n\r\n#r#e※注意※ 即使现在登记材料，也无法变更为该外形。', 5, 9062276);
            } else {
                getItem();
            }
        } else {
            if (status === a++) {
                getItem();
            }
        }
    }
}
var typeItemBorders = [
    2631296,
    2631303,
    2631311,
    2631314,
    2631320,
    2631327,
    2631338,
    2631357,
    2631373,
    2631380,
    2631382
];
function getType() {
    var b = cm.getNpc();
    for (var a = 0; a + 1 < typeItemBorders.length; a++) {
        if (b < typeItemBorders[a + 1]) {
            return a;
        }
    }
}
function getIndex() {
    var b = cm.getNpc();
    for (var a = 0; a + 1 < typeItemBorders.length; a++) {
        if (b < typeItemBorders[a + 1]) {
            return b - typeItemBorders[a];
        }
    }
}
function getItem() {
    var d = cm.getNpc();
    var c = getType();
    var a = cm.getStringFromQuestInfo(100489 + c, 'check').toCharArray();
    var b = getIndex() + 1;
    if (a[b] == '0') {
        cm.sendNormalTalk('哇！好兴奋！有了新外形！\r\n\r\n#e#b[ 已登记外形 ]#n#k\r\n\r\n#b#i' + d + ':# #t' + d + ':##n', 4, 9062276, false, true);
        cm.effect_Voice('UI.img/productSuccess', 100);
        a[b] = '1';
        cm.setNumberForQuestInfo(100489 + c, 'check', new java.lang.String(a));
    } else {
        cm.sendNormalTalk('哎呀，#i' + d + ':# #b#t' + d + ':##k这个外形已经登记过了呢！', 4, 9062276, false, true);
    }
    cm.gainItem(d, -1);
    cm.dispose();
}