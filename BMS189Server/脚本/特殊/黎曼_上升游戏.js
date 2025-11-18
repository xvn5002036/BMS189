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
            cm.askMenu('去追上奥尔卡吧？\r\n#r\r\n※在规定时间内追上奥尔卡。#k\r\n\r\n#b#L0#进入游戏副本#l#k\r\n#L1#现在不去。#l', 24, 0);
        } else {
            var a = cm.getEventManager('黎曼_上升游戏2');
            a.startInstance(cm.getParty(), cm.getMap());
            cm.dispose();
        }
    }
}