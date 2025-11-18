var status = -1;
var selectionLog = [];
function start() {
    action(1, 0, 0);
}
function action(mode, type, selection) {
    var reactor = 'action' + cm.getNpc();
    eval(reactor)(mode, type, selection);
}
function action0(d, c, b) {
    status++;
    var a = -1;
    if (status <= a++) {
        cm.dispose();
    } else {
        if (status === a++) {
            cm.dispose();
        }
    }
}
function action1(d, c, b) {
    status++;
    var a = -1;
    if (status <= a++) {
        cm.dispose();
    } else {
        if (status === a++) {
            cm.askYesNo('模拟训练还没结束。你现在就想回到总部吗？', 4, 9401217);
        } else {
            if (status === a++) {
                cm.updateInfoQuest(65742, '');
                cm.dispose();
                cm.warp(867151000, 0, false);
            } else {
                if (status === a++) {
                    cm.dispose();
                }
            }
        }
    }
}