function start() {
    var a = cm.getSavedLocation('MULUNG_TC');
    if (a < 0) {
        a = 100000000;
    }
    cm.warp(a);
    cm.playerMessage(6, ' 【副本中心】 已将您送回保存点~！');
    cm.effect_NormalSpeechBalloon('副本挑战结束!', 1, 1, 0, 3000, 0, 0);
    cm.dispose();
}