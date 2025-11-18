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
            cm.curNodeEventEnd(true);
            cm.eventSKill(0);
            cm.setInGameDirectionMode(true, false, true);
            cm.fieldEffect_KinesisEXP(Math.pow(cm.getLevel(), 3) * 12);
            cm.gainExp(Math.pow(cm.getLevel(), 3) * 12);
            cm.inGameDirectionEvent_AskAnswerTime(5000);
            cm.effect_Item(2631077);
        } else {
            if (status === a++) {
                cm.addNumberForQuestInfo(500827, 'QuestCount', 1);
                cm.forceCompleteQuest(64673);
                cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                cm.eventSKill(0);
                cm.warp(867131600, 1, false);
                cm.setInGameDirectionMode(false, true, false);
                cm.dispose();
            }
        }
    }
}