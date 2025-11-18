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
            cm.getMap().killAllMonsters(true);
            cm.fieldEffect_KinesisEXP(Math.pow(cm.getLevel(), 3) / 3);
            cm.gainExp(Math.pow(cm.getLevel(), 3) / 3);
            cm.curNodeEventEnd(true);
            cm.eventSKill(0);
            cm.setInGameDirectionMode(true, false, true);
            cm.inGameDirectionEvent_SetHideEffect(1);
            cm.sendNormalTalk_Bottom('#face0#可恶的人类……我要报仇！', 37, 9111023, false, true);
        } else {
            if (status === a++) {
                cm.inGameDirectionEvent_AskAnswerTime(1500);
            } else {
                if (status === a++) {
                    cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                    cm.inGameDirectionEvent_AskAnswerTime(500);
                } else {
                    if (status === a++) {
                        cm.forceCompleteQuest(58778);
                        cm.warp(800024004, 0, false);
                        cm.eventSKill(0);
                        cm.setInGameDirectionMode(false, true, false);
                        cm.npc_LeaveField('oid=3901591');
                        cm.npc_LeaveField('oid=3901591');
                        cm.dispose();
                    }
                }
            }
        }
    }
}