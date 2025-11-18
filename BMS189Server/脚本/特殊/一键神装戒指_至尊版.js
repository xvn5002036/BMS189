function start() {
    if (cm.getzhizunvip() != 2) {
        cm.dispose();
        cm.playerMessage(1, '该菜单是至尊版专享。');
        return;
    }
    for (var b = 0; b < 6; b++) {
        var c = cm.getItemInfo();
        var a = c.randomizeStats(c.getEquipById(1112915)).copy();
        a.setStr(333);
        a.setDex(333);
        a.setInt(333);
        a.setLuk(333);
        a.setPad(100);
        a.setMad(100);
        a.setPdd(100);
        a.setMdd(100);
        a.setMaxHp(30000);
        a.setMaxMp(30000);
        a.setSpeed(66);
        a.setJump(66);
        a.setIuc(6);
        a.setOption(40603, 1, false);
        a.setOption(40603, 2, false);
        a.setOption(40603, 3, false);
        a.setOption(40603, 1, true);
        a.setOption(40603, 2, true);
        a.setOption(40603, 3, true);
        a.setEnhanceLevel(25);
        a.setUpgradeLevel(1);
        a.setUpgradeAvailable(1);
        a.setSpecialAttribute(4);
        a.setBdr(20);
        a.setImdr(20);
        a.setDamR(20);
        a.setStatR(20);
        a.setAttribute(1);
        a.setTitle('黑魔法师');
        cm.addFromDrop(cm.getClient(), a, false);
    }
    cm.dispose();
}