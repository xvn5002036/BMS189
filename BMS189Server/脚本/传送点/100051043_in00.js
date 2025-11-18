var status = -1;
var selectionLog = [];

function start() {
    action(1, 0, 0);
}

function enter() {

    if (cm.isQuestFinished(35925) && cm.getPlayer().getLevel() >= 30) {
        cm.warp(100051044, 0, false);
    } else {
        cm.warp(100051043, 0, false);
        cm.sendNormalTalk_Bottom('#face0#呃……前边比较危险，30级后再说。\r\n。', 37, 1013350, false, true, 1);
    }
    cm.forceCompleteQuest(35926);
    cm.dispose();
    return;

}