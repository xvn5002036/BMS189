function start() {
    if (cm.getzhizunvip() != 2) {
        cm.dispose();
        cm.playerMessage(1, '该功能是至尊版专享。');
        return;
    }
    cm.gainItem(2433512, -1);
    var b = cm.getItemInfo();
    var a = b.randomizeStats(b.getEquipById(1132308)).copy();
    a.setStr(200);
    a.setDex(200);
    a.setInt(200);
    a.setLuk(200);
    a.setPad(200);
    a.setMad(200);
    a.setSpeed(10);
    a.setJump(10);
    a.setMaxHp(6000);
    a.setMaxMp(6000);
    a.setBdr(10);
    a.setImdr(10);
    a.setDamR(10);
    a.setStatR(10);
    a.setPdd(20);
    a.setMdd(20);
    a.setTitle('' + cm.getPlayer().getName() + '');
    cm.addFromDrop(cm.getClient(), a, false);
    cm.worldSpouseMessage(21, '『累积礼包』：感谢玩家 ' + cm.getPlayer().getName() + ' 赞助' + cm.getServerName() + '！系统赠送他专属4阶段 【漆黑套装腰带】 一件！！');
    cm.playerMessage(-1, '[获得道具]：' + cm.getItemName(1132308) + '');
    cm.playerMessage(1, '[获得道具]：' + cm.getItemName(1132308) + '');
    cm.dispose();
    return;
}