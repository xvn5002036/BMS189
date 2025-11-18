function start() {
    if (cm.getPlayer().getMapId() == 865000200 || cm.getPlayer().getMapId() == 865010006 || cm.getPlayer().getMapId() == 331003000 || cm.getPlayer().getMapId() == 703100011 || cm.getPlayer().getMapId() == 200090071 || cm.getPlayer().getMapId() == 200090200 || cm.getPlayer().getMapId() == 330000003 || cm.getPlayer().getMapId() == 200090100 || cm.getPlayer().getMapId() == 200090400) {
        cm.fieldEffect_PlayBGM('Bgm04/ArabPirate');
        cm.playerMessage(-1, '[大陆移动] 敌人出现了！');
        cm.playerMessage(6, '[大陆移动] 发现一个奇怪的家伙！');
    }
    cm.dispose();
}