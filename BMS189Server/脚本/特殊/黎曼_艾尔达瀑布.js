var status = -1;
var selectionLog = [];
function start() {
    action(1, 0, 0);
}
function action(mode, type, selection) {
    var reactor = 'action' + cm.getNumberFromQuestInfo(35802, 'fall');
    eval(reactor)(mode, type, selection);
}
function action0(d, c, b) {
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
            cm.sendNormalTalk_Bottom('#face0#小心。', 37, 3003903, false, true);
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom('嗯？', 57, 0, true, true);
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom('#face0#艾尔达瀑布马上就会冲过来。', 37, 3003903, true, true);
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom('#face0#不想和其他怪物一起被卷走的话，最好躲在坚硬的岩石下面。', 37, 3003903, true, true);
                    } else {
                        if (status === a++) {
                            cm.setNumberForQuestInfo(35802, 'fall', 1);
                            cm.艾尔达瀑布_即将冲击();
                            cm.dispose();
                        }
                    }
                }
            }
        }
    }
}
function action1(d, c, b) {
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
            cm.sendNormalTalk_Bottom('#face0#又开始了。', 37, 3003903, false, true);
        } else {
            if (status === a++) {
                cm.setNumberForQuestInfo(35802, 'fall', 2);
                cm.艾尔达瀑布_即将冲击();
                cm.dispose();
            }
        }
    }
}
function action2(d, c, b) {
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
            cm.sendNormalTalk_Bottom('#face0#是水声。', 37, 3003903, false, true);
        } else {
            if (status === a++) {
                cm.setNumberForQuestInfo(35802, 'fall', 3);
                cm.艾尔达瀑布_即将冲击();
                cm.dispose();
            }
        }
    }
}