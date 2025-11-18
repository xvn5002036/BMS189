var status = -1;
var selectionLog = [];
function action(c, b, a) {
    if (cm.getNumberFromQuestInfo(32990, 'ep1') > 0) {
        action2(c, b, a);
    } else {
        action1(c, b, a);
    }
}
function action1(d, c, b) {
    if (d == 1) {
        status++;
    } else {
        status--;
    }
    var a = -1;
    if (status <= a++) {
        cm.dispose();
    } else {
        if (status === a++) {
            cm.askYesNo('你要阅读Ep1。<白魔法师>吗？', 4, 2500000);
        } else {
            if (status === a++) {
                cm.sendNormalTalk('选择了#e白魔法师#n啊。', 4, 2500000, false, true);
            } else {
                if (status === a++) {
                    cm.sendNormalTalk('在故事中，#h0#会作为完全不同的存在，体验过去发生的事情。不过也无需太过担忧，因为这并不会改变历史。', 4, 2500000, true, true);
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk('在这个故事中#h0#你将回到数百年前，充当一个#e#b佣兵#k#n的角色。虽然你不会在历史上留名，但你确实会成为历史中存在的一个人物。', 4, 2500000, true, true);
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk('#fNpc/2500001.img/stand/0#\r\n如果想从故事中回到现实的话，请随时点击我。我会一直在故事里。', 4, 2500000, true, true);
                        } else {
                            if (status === a++) {
                                cm.dispose();
                                cm.warp(302090000, 0);
                            }
                        }
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
            cm.askYesNo('你要阅读 Ep1。<白魔法师>吗？', 4, 2500000);
        } else {
            if (status === a++) {
                cm.dispose();
                cm.warp(cm.getNumberFromQuestInfo(32990, 'ep1'), 0, false);
            }
        }
    }
}
function start() {
    status = -1;
    action(1, 0, 0);
}