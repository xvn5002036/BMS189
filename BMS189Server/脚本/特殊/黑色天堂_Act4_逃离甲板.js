var status = -1;
var selectionLog = [];
function start() {
    action(1, 0, 0);
}
function action(mode, type, selection) {
    var reactor = 'action' + cm.getNpc();
    eval(reactor)(mode, type, selection);
}
function action1(d, c, b) {
    if (status == 0 && d == 0) {
        cm.dispose();
        return;
    }
    status++;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose();
    } else {
        if (status === a++) {
            cm.userSetFieldFloating(350042700, 0, 3, 1);
            cm.spawnMobLimit(8240002, 1, 1240, 150, 100);
            cm.getTopMsgFont('黑色天堂开始倾斜了！请将前方的障碍物破坏掉！', 3, 20, 20, 0);
            cm.updateInfoQuest(33199, 'count=2');
            cm.onCameraTilt(-15, 10000);
            cm.dispose();
        }
    }
}
function action2(d, c, b) {
    if (status == 0 && d == 0) {
        cm.dispose();
        return;
    }
    status++;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose();
    } else {
        if (status === a++) {
            cm.onCameraTilt(0, 5000);
            cm.spawnMobLimit(8240002, 1, 1240, 150, 100);
            cm.getTopMsgFont('黑色天堂开始倾斜了！请利用跳跃，避开从后方而来的障碍物！', 3, 20, 20, 0);
            cm.updateInfoQuest(33199, 'count=4');
            cm.dispose();
        }
    }
}
function action3(d, c, b) {
    if (status == 0 && d == 0) {
        cm.dispose();
        return;
    }
    status++;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose();
    } else {
        if (status === a++) {
            cm.onCameraTilt(15, 10000);
            cm.spawnMobLimit(8240002, 1, 1240, 150, 100);
            cm.spawnMobLimit(8240070, 1, 326, 150, 100);
            cm.dispose();
        }
    }
}
function action4(d, c, b) {
    if (status == 0 && d == 0) {
        cm.dispose();
        return;
    }
    status++;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose();
    } else {
        if (status === a++) {
            cm.onCameraTilt(0, 5000);
            cm.spawnMobLimit(8240069, 1, 259, 150, 100);
            cm.spawnMobLimit(8240070, 1, -78, 150, 100);
            cm.dispose();
        }
    }
}
function action10(d, c, b) {
    if (status == 0 && d == 0) {
        cm.dispose();
        return;
    }
    status++;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose();
    } else {
        if (status === a++) {
            cm.spawnMobLimit(8240002, 1, -1200, 150, 100);
            cm.dispose();
        }
    }
}
function action11(d, c, b) {
    if (status == 0 && d == 0) {
        cm.dispose();
        return;
    }
    status++;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose();
    } else {
        if (status === a++) {
            cm.spawnMobLimit(8240002, 1, 1240, 150, 100);
            cm.dispose();
        }
    }
}
function action20(d, c, b) {
    if (status == 0 && d == 0) {
        cm.dispose();
        return;
    }
    status++;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose();
    } else {
        if (status === a++) {
            cm.spawnMobLimit(8240070, 1, 326, 150, 100);
            cm.spawnMobLimit(8240069, 1, -175, 150, 100);
            cm.dispose();
        }
    }
}
function action21(d, c, b) {
    if (status == 0 && d == 0) {
        cm.dispose();
        return;
    }
    status++;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose();
    } else {
        if (status === a++) {
            cm.spawnMobLimit(8240069, 1, 259, 150, 100);
            cm.spawnMobLimit(8240070, 1, -78, 150, 100);
            cm.dispose();
        }
    }
}
function action22(d, c, b) {
    if (status == 0 && d == 0) {
        cm.dispose();
        return;
    }
    status++;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose();
    } else {
        if (status === a++) {
            cm.spawnMobLimit(8240070, 1, 800, 150, 100);
            cm.spawnMobLimit(8240069, 1, 1100, 150, 100);
            cm.dispose();
        }
    }
}