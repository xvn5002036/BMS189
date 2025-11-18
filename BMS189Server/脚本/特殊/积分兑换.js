function start() {
    if (cm.getzhizunvip() != 2) {
        cm.dispose();
        cm.playerMessage(1, '该菜单是至尊版专享。');
        return;
    }
    if (!cm.isQuestFinished(1465)) {
        cm.sendOk('必须五转才可以购买核心！');
        cm.dispose();
        return;
    }
    if (cm.getPlayer().getCSPoints(1) >= 10000) {
        cm.getPlayer().modifyCSPoints(1, -10000);
        cm.getPlayer().gainvCorePiece(2000);
        cm.effect_NormalSpeechBalloon(' 购买V核心2000个！', 1, 0, 0, 3000, 0, 0);
        cm.playerMessage(5, '[点卷消费提示] 消耗10000点卷，剩余点卷：' + cm.getPlayer().getCSPoints(1) + ' ');
    } else {
        cm.sendOk('点卷不足！');
    }
    cm.dispose();
}