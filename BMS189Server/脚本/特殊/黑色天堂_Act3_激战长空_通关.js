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
    status++;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose();
    } else {
        if (status === a++) {
            cm.getMap().killAllMonsters(true);
            cm.setNumberForQuestInfo(33180, 'clear', 1);
            cm.fieldEffect_ScreenMsg('monsterPark/clear');
            cm.fieldEffect_PlayFieldSound('Party1/Clear', 100);
            cm.curNodeEventEnd(true);
            cm.setInGameDirectionMode(true, false, true);
            cm.inGameDirectionEvent_AskAnswerTime(4000);
        } else {
            if (status === a++) {
                cm.inGameDirectionEvent_ForcedFlip10(2, 1000);
                cm.inGameDirectionEvent_AskAnswerTime(2500);
            } else {
                if (status === a++) {
                    cm.dispose();
                    cm.forceStartQuest(33306);
                    cm.warp(350033000, 0, true);
                }
            }
        }
    }
}