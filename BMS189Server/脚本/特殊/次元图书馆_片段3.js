var status = -1;
var selectionLog = [];
function start() {
    action(1, 0, 0);
}
function action(c, b, a) {
    if (cm.getNumberFromQuestInfo(32990, 'ep3') > 0) {
        action2(c, b, a);
    } else {
        action1(c, b, a);
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
            cm.askYesNo('你要阅读Ep3。<黑魔女>吗？', 4, 2500000);
        } else {
            if (status === a++) {
                cm.sendNormalTalk('选择了#e黑魔女#n啊。你准备好进入曾经震撼圣地的惊人事件中了吗？', 4, 2500000, false, true);
            } else {
                if (status === a++) {
                    cm.sendNormalTalk('#fNpc/2500001.img/stand/0#\r\n如果想从故事中回到现实的话，请随时点击我。我会一直在故事里。', 4, 2500000, true, true);
                } else {
                    if (status === a++) {
                        cm.dispose();
                        cm.warp(304090000, 0, false);
                    }
                }
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
            cm.askYesNo('你要阅读 Ep3。<黑魔女>吗？', 4, 2500000);
        } else {
            if (status === a++) {
                cm.dispose();
                cm.warp(cm.getNumberFromQuestInfo(32990, 'ep3'), 0, false);
            }
        }
    }
}