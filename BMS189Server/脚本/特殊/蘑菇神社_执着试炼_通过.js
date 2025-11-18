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
            cm.forceCompleteQuest(58772);
            cm.fieldEffect_KinesisEXP(Math.pow(cm.getLevel(), 3) / 3);
            cm.gainExp(Math.pow(cm.getLevel(), 3) / 3);
            cm.curNodeEventEnd(true);
            cm.eventSKill(0);
            cm.setInGameDirectionMode(true, false, true);
            cm.sendNormalTalk_Bottom('#face0#嘿嘿，我就知道你会成功的。虽然你花了40秒才出来，但你已经摒弃了心中的执念。祝贺你通关。', 37, 9111018, false, true);
        } else {
            if (status === a++) {
                cm.eventSKill(0);
                cm.warp(800024002, 0, true);
                cm.setInGameDirectionMode(false, true, false);
                cm.dispose();
            }
        }
    }
}