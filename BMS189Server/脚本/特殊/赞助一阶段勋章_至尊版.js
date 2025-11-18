function start() {
    if (cm.getzhizunvip() != 2) {
        cm.dispose();
        cm.playerMessage(1, '该功能是至尊版专享。');
        return;
    }
    cm.gainItem(2430976, -1);
    var b = cm.getItemInfo();
    var a = b.randomizeStats(b.getEquipById(1012632)).copy();
    a.setStr(100);
    a.setDex(100);
    a.setInt(100);
    a.setLuk(100);
    a.setPad(80);
    a.setMad(80);
    a.setSpeed(10);
    a.setJump(10);
    a.setMaxHp(6000);
    a.setMaxMp(6000);
    a.setBdr(5);
    a.setImdr(5);
    a.setDamR(5);
    a.setStatR(5);
    a.setPdd(20);
    a.setMdd(20);
    a.setTitle('' + cm.getPlayer().getName() + '');
    cm.addFromDrop(cm.getClient(), a, false);
    cm.worldSpouseMessage(21, '『累积礼包』：感谢玩家 ' + cm.getPlayer().getName() + ' 赞助' + cm.getServerName() + '！系统赠送他专属1阶段 【漆黑套装脸饰】 一件！！');
    cm.playerMessage(-1, '[获得道具]：' + cm.getItemName(1012632) + '');
    cm.playerMessage(1, '[获得道具]：' + cm.getItemName(1012632) + '');
    cm.dispose();
    return;
}