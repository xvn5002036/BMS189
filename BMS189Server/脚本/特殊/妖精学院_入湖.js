var status = -1;
function start() {
    action(1, 0, 0);
}
function action(d, c, b) {
    status++;
    var a = -1;
    if (status <= a++) {
        cm.dispose();
    } else {
        if (status === a++) {
            cm.sendNextS('嗯？好奇怪的感觉，身体怎么变得那么重？');
        } else {
            if (status === a++) {
                if (cm.isQuestActive(32102)) {
                    cm.warp(101070001, 0);
                    cm.forceCompleteQuest(32102);
                } else {
                    cm.warp(101070000, 0);
                }
                cm.dispose();
            } else {
                cm.dispose();
            }
        }
    }
}