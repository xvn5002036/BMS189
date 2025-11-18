var status = -1;
var selectionLog = [];
function start() {
    action(1, 0, 0);
}
function action(d, c, b) {
    if (status == 0 && d == 0) {
        cm.dispose();
        return;
    }
    d == 1 ? status++ : status--;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose();
    } else {
        if (status === a++) {
            cm.getTopMsgFont('深渊被黑暗所笼罩，暗影即将出现！', 4, 30, 15, 0, 0);
            cm.curNodeEventEnd(true);
            cm.eventSKill(0);
            cm.setInGameDirectionMode(true, false, true);
            cm.fieldEffect_ScreenMsg('Effect/EffectPL.img/AbyssShadow');
            cm.fieldEffect_PlayFieldSound('Sound/PL_Sound.img/Wz2_Abyss/shadow', 100);
            cm.inGameDirectionEvent_AskAnswerTime(600);
        } else {
            if (status === a++) {
                cm.spawnMobLimit(9601295, 1, 570, 74, 1);
                cm.eventSKill(0);
                cm.setInGameDirectionMode(false, true, false);
                cm.dispose();
            }
        }
    }
}