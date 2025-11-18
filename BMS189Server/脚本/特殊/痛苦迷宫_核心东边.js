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
    if (cm.getParty() == null) {
        cm.PartyAutoOn();
    }
    if (status <= b++) {
        cm.dispose();
    } else {
        if (status === b++) {
            cm.askMenu('进去痛苦迷宫看看吧？\r\n#r\r\n※需要20分钟，中途无法离开。#k\r\n\r\n#b#L0#进入痛苦迷宫核心区副本#l#k\r\n#L1#现在不去。#l', 24, 0);
        } else {
            var a = cm.getEventManager('痛苦迷宫_核心东边');
            a.startInstance(cm.getPlayer());
            cm.dispose();
        }
    }
}