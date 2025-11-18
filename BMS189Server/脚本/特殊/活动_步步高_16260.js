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
            cm.updateInfoQuest(16260, 'reward=0000000000000000000000000000000000000000000000000000000;step=0;sTime=19/09/15/05/33;state=3');
            cm.updateInfoQuest(500060, 'reward=0000000000000000000000000000000000000000000000000000000');
            cm.updateInfoQuest(16271, 'value=0');
            cm.updateInfoQuest(16276, 'value=0');
            cm.updateInfoQuest(16277, 'value=0');
            cm.updateInfoQuest(16287, 'value=0');
            cm.updateInfoQuest(16294, 'value=0');
            cm.updateInfoQuest(16297, 'value=0');
            cm.updateInfoQuest(16295, 'value=0;state=0000000000');
            cm.updateInfoQuest(16313, 'pr=0;value=0');
            cm.forceCompleteQuest(16860);
            cm.updateInfoQuest(16260, 'reward=0000000000000000000000000000000000000000000000000000000;step=1;sTime=19/09/15/05/33;state=0');
            cm.dispose();
        }
    }
}