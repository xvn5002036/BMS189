function start() {
    if (cm.haveItem(2432005, 1) == true) {
        cm.gainItem(4310088, 5);
        cm.gainItem(2432005, -1);
        cm.playerMessage(-1, '恭喜您获得5个RED币');
        cm.worldSpouseMessage(32, '『幸运硬币箱』 : 恭喜 ' + cm.getPlayer().getName() + ' 从 <幸运硬币箱中> 获得 5 个RED币。');
        cm.dispose();
    } else {
        cm.sendOk('不足');
        cm.dispose();
    }
}