var status = -1;
function start() {
    action(1, 0, 0);
}
function action(f, e, d) {
    var b = cm.getPlayer().getMapId();
    if (b != 867111150 && b != 867111270 && b != 867111350) {
        cm.fieldEffect_ScreenMsg('Map/EffectPL.img/3min/eff_cubeBreak');
        cm.fieldEffect_PlayFieldSound('PL_3min/CubeBreak', 100);
    } else {
        var c = cm.rand(1, 10);
        if (c <= 3) {
            var g = cm.getNumberFromQuestInfo(59789, 'diary' + c);
            var a = [
                6,
                5,
                6
            ];
            if (g < a[c - 1]) {
                cm.addNumberForQuestInfo(59789, 'diary' + c, 1);
                cm.playerMessage(5, '已获得APORD的克隆研究日志！整理了日志。');
            }
        }
    }
    if (b < 867111000) {
        cm.playerMessage(-1, '已达到关卡目标。为了进行下个关卡，请使用传送口。');
    }
    cm.dispose();
}