var 箱子名 = '法弗纳武器';
var status = -1;
var 记录选择 = 0;
var 箱子ID = 2431938;
var itemList = [
    1213016,
    1292016,
    1592018,
    1282015,
    1272015,
    1212063,
    1222058,
    1232057,
    1242061,
    1242060,
    1302275,
    1312153,
    1322203,
    1332225,
    1342082,
    1362090,
    1372177,
    1382208,
    1402196,
    1412135,
    1422140,
    1432167,
    1442223,
    1452205,
    1462193,
    1472214,
    1482168,
    1492179,
    1522094,
    1532098,
    1542063,
    1552063,
    1262016,
    1252015
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
    if (status == 0) {
        text = '请选择你需要的物品：\r\n';
        for (var a = 0; a < itemList.length; a++) {
            text += '#L' + a + '##i' + itemList[a] + '# #b#z' + itemList[a] + '##l\r\n';
        }
        cm.askMenu(text);
    } else {
        if (status == 1) {
            var b = cm.getItemInfo();
            cm.gainItem(itemList[c], 1);
            cm.worldSpouseMessage(23, '' + cm.getPlayer().getName() + ' : {' + b.getName(itemList[c]) + '}是我在' + 箱子名 + '箱中获得的，恭喜我吧！');
            cm.sendOk('获得了#i' + itemList[c] + '# #b#z' + itemList[c] + '##k1个。');
            cm.gainItem(箱子ID, -1);
            cm.dispose();
        }
    }
}