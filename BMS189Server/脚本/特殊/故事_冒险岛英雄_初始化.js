var status = -1;
var selectionLog = [];
function start() {
    action(1, 0, 0);
}
function action(e, d, c) {
    if (status == 0 && e == 0) {
        cm.dispose();
        return;
    }
    e == 1 ? status++ : status--;
    selectionLog[status] = c;
    var b = -1;
    if (status <= b++) {
        cm.dispose();
    } else {
        if (status === b++) {
            cm.askYesNo('一旦进行初始化，在完全完成Act 1。5#b之前无法重新初始化，从初始化那一刻开始，一周内只能进行一次#k，确定要初始化吗？', 4, 1540446);
        } else {
            if (status === b++) {
                var a = cm.getQuestRecord(33911);
                a.setStatus(0);
                cm.getPlayer().updateQuest(a);
                cm.updateInfoQuest(33911, '');
                cm.updateInfoQuest(33952, '');
                cm.updateInfoQuest(33907, '');
                cm.updateInfoQuest(33961, '');
                cm.updateInfoQuest(33918, '1_5=19/09/06;1=17/05/21;2=17/05/22');
                cm.updateInfoQuest(33919, '1_5=2;1=1;2=1');
                cm.updateInfoQuest(33961, '');
                cm.dispose();
                cm.playerMessage(1, '初始化成功,请下线后再上游戏.');
            } else {
                cm.dispose();
            }
        }
    }
}