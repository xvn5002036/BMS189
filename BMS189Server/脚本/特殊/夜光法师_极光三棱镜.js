var status = -1;
function start() {
    action(1, 0, 0);
}
function action(c, b, a) {
    status++;
    if (cm.isQuestFinished(25643)) {
        action1(c, b, a);
    } else {
        action100(c, b, a);
    }
}
function action100(d, c, b) {
    var a = -1;
    if (status <= a++) {
        cm.dispose();
    } else {
        if (status === a++) {
            cm.askYesNo('要移动到希利尼提吗？', 4, 1032209);
        } else {
            if (status === a++) {
                cm.dispose();
                cm.warp(101000200, 0, false);
            }
        }
    }
}
function action1(d, c, b) {
    var a = -1;
    if (status <= a++) {
        cm.dispose();
    } else {
        if (status === a++) {
            cm.askYesNo('要移动到拉尼娅的家吗？', 4, 1032210);
        } else {
            if (status === a++) {
                cm.dispose();
                cm.warp(101000100, 0, false);
            }
        }
    }
}