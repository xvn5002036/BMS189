var status = -1;
var npcs = [
    9400920,
    9400921,
    9401160
];
function start() {
    action(1, 0, 0);
}
function action(f, d, c) {
    f == 1 ? status++ : status--;
    var b = -1;
    if (status <= b++) {
        cm.dispose();
    } else {
        if (status === b++) {
            if (!cm.isQuestFinished(500763)) {
                cm.dispose();
                cm.startQuestScript(0, 500763);
                return;
            }
            if (cm.getNpc() == 0 || cm.getNpc() == cm.getPlayer().getAccountId()) {
                var e = '我';
            } else {
                var e = '别人';
            }
            var a = cm.getNumberFromQuestInfo(500773, 'manager');
            cm.askAcceptDecline_Bottom('#face1#要现在进入' + e + '的小屋吗？', 36, npcs[a]);
        } else {
            if (status === b++) {
                cm.updateInfoQuest(64590, 'rMap=' + cm.getMapId());
                cm.dispose();
                if (cm.getPlayer().getQuestStatus(64591) == 1) {
                    cm.warp(871000011);
                } else {
                    if (cm.getNpc() == cm.getPlayer().getAccountId()) {
                        cm.enterHome(0);
                    } else {
                        cm.enterHome(cm.getNpc());
                    }
                }
            }
        }
    }
}