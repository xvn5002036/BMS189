function start() {
    if (cm.getzhizunvip() != 2) {
        cm.dispose();
        cm.playerMessage(1, '该功能是至尊版专享。');
        return;
    }
    cm.gainItem(2432306, -1);
    var b = cm.getItemInfo();
    var a = b.randomizeStats(b.getEquipById(1162080)).copy();
    a.setStr(300);
    a.setDex(300);
    a.setInt(300);
    a.setLuk(300);
    a.setPad(260);
    a.setMad(260);
    a.setSpeed(10);
    a.setJump(10);
    a.setMaxHp(6000);
    a.setMaxMp(6000);
    a.setBdr(12);
    a.setImdr(12);
    a.setDamR(12);
    a.setStatR(12);
    a.setPdd(20);
    a.setMdd(20);
    a.setTitle('' + cm.getPlayer().getName() + '');
    cm.addFromDrop(cm.getClient(), a, false);
    cm.worldSpouseMessage(21, '『累积礼包』：感谢玩家 ' + cm.getPlayer().getName() + ' 赞助' + cm.getServerName() + '！系统赠送他 最终的 【漆黑套装口袋】 一件！！');
    cm.worldSpouseMessage(21, '『累积礼包』：感谢玩家 ' + cm.getPlayer().getName() + ' 赞助' + cm.getServerName() + '！系统赠送他 最终的 【漆黑套装口袋】 一件！！');
    cm.worldSpouseMessage(21, '『累积礼包』：感谢玩家 ' + cm.getPlayer().getName() + ' 赞助' + cm.getServerName() + '！系统赠送他 最终的 【漆黑套装口袋】 一件！！');
    cm.playerMessage(-1, '[获得道具]：' + cm.getItemName(1162080) + '');
    cm.playerMessage(1, '[获得道具]：' + cm.getItemName(1162080) + '');
    cm.dispose();
    return;
}