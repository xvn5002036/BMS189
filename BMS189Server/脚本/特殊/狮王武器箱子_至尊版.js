var 箱子名 = '狮子王';
var status = -1;
var itemList = [
    1292015,
    1522018,
    1592015,
    1212014,
    1222014,
    1232014,
    1302152,
    1402095,
    1312065,
    1412065,
    1322096,
    1422066,
    1432086,
    1442116,
    1542015,
    1242014,
    1242042,
    1552015,
    1252014,
    1262015,
    1272014,
    1282014,
    1332130,
    1342036,
    1362019,
    1372084,
    1382104,
    1452111,
    1462099,
    1472122,
    1482084,
    1492085,
    1532018,
    1582015,
    1562005,
    1572005
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
        if (cm.getSpace(1) < 2 || cm.getSpace(2) < 2 || cm.getSpace(3) < 2 || cm.getSpace(4) < 2 || cm.getSpace(5) < 2) {
            cm.sendOk('你的背包满了，每一栏都要留2个位置。');
            cm.dispose();
            return;
        }
        text = '#b请选择你要获得的#r' + 箱子名 + '#b装备：\r\n#fn方正粗黑宋简体#';
        for (var a = 0; a < itemList.length; a++) {
            text += '#L' + a + '##i' + itemList[a] + '# #b#z' + itemList[a] + '##l\r\n';
        }
        cm.askMenu(text);
    } else {
        if (status == 1) {
            cm.askYesNo('获得 #b#e#v' + itemList[c] + '##z' + itemList[c] + '# #n#k确定了吗？');
            selects = c;
        } else {
            if (status == 2) {
                var b = cm.getItemInfo();
                cm.gainGachaponItem(itemList[selects], 1, '' + 箱子名 + '装备箱', 3);
                cm.gainItem(cm.getItemId(), -1);
                cm.playerMessage(-1, '获得道具：' + cm.getItemName(itemList[selects]) + ' ');
                cm.playerMessage(1, '获得道具：' + cm.getItemName(itemList[selects]) + ' ');
                cm.dispose();
            }
        }
    }
}