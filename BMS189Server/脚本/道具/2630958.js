function start() {
	if (cm.getMeso() >= 20000000){
	cm.useSkill(9001002, 50);//最多
	cm.gainMeso(-20000000);
	// cm.useSkill(2311003, 30);
    cm.playerMessage(-1, "15分钟神圣祈祷附身，祝你游戏愉快！");
    cm.dispose();
	} else {
		cm.playerMessage(-1, "BUFF需要花费2000W金币");
		cm.dispose();
	}
}