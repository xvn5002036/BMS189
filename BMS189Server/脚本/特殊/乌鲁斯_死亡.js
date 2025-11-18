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
            if (cm.getPlayer().isAlive()) {
                cm.dispose();
                return;
            }
            cm.curNodeEventEnd(true);
            cm.eventSKill(0);
            cm.setInGameDirectionMode(true, false, true);
            var e = cm.getPlayer().getPosition();
            cm.inGameDirectionEvent_PushScaleInfo(800, 0, 4000, 800, e.x, e.y);
        } else {
            if (status === a++) {
                cm.inGameDirectionEvent_AskAnswerTime(3000);
            } else {
                if (status === a++) {
                    cm.curNodeEventEnd(true);
                    cm.dispose();
                    cm.乌鲁斯_结算奖励();
                }
            }
        }
    }
}