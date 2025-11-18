function start() {
    if (cm.haveItem(4001126, 3000)) {
        cm.gainItem(4032733, 8);
        cm.gainItem(4001126, -3000);
        cm.playerMessage(-1, '获得物品：彩虹枫叶 x8');
        cm.sendOk(' #v4001126##v4001126##v4001126##v4001126##v4001126##v4001126##v4001126##v4001126##v4001126##v4001126##v4001126#\r\n\r\n #b获得：#z4032733#x8#k\r\n 剩余枫叶数量：#e#r#c4001126##n#k');
    } else {
        cm.askMenuS('#e兑换失败：#n\r\n \r\n为了兑换#b#v4032733##z4032733##k#r#ex8#n#k，\r\n你需要带来 #b#v4001126##z4001126##k(#c4001126#/3000)个。');
    }
}
function action() {
    cm.dispose();
    cm.openNpc(9000231, '兑换中心');
}