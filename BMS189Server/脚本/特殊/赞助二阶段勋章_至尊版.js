function start() {
    if (cm.getzhizunvip() != 2) {
        cm.dispose();
        cm.playerMessage(1, '该功能是至尊版专享。');
        return;
    }
    cm.gainItem(2434281, -1);
    var b = cm.getItemInfo();
    var a = b.randomizeStats(b.getEquipById(1022278)).copy();
    a.setStr(150);
    a.setDex(150);
    a.setInt(150);
    a.setLuk(150);
    a.setPad(120);
    a.setMad(120);
    a.setSpeed(10);
    a.setJump(10);
    a.setMaxHp(6000);
    a.setMaxMp(6000);
    a.setBdr(7);
    a.setImdr(7);
    a.setDamR(7);
    a.setStatR(7);
    a.setTitle('' + cm.getPlayer().getName() + '');
    cm.addFromDrop(cm.getClient(), a, false);
    cm.worldSpouseMessage(21, '『累积礼包』：感谢玩家 ' + cm.getPlayer().getName() + ' 赞助' + cm.getServerName() + '！系统赠送他专属2阶段 【漆黑套装眼饰】 一件！！');
    cm.playerMessage(-1, '[获得道具]：' + cm.getItemName(1022278) + '');
    cm.playerMessage(1, '[获得道具]：' + cm.getItemName(1022278) + '');
    cm.dispose();
    return;
}