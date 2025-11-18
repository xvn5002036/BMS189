var status = -1;
function start() {
    action(1, 0, 0);
}
function action(d, b, a) {
    var c = cm.getNpc();
    if (c == 0) {
        action0(d, b, a);
    } else {
        if (c == 1) {
            action1(d, b, a);
        } else {
            if (c == 2) {
                action2(d, b, a);
            } else {
                if (c == 3) {
                    action3(d, b, a);
                }
            }
        }
    }
}
function action0(d, c, b) {
    status++;
    var a = -1;
    if (status <= a++) {
        cm.dispose();
    } else {
        if (status === a++) {
            cm.sendNormalTalk_Bottom('#fs25#哦？后面好像有个通道。难道是秘密书库？', 57, 0, false, true);
        } else {
            if (status === a++) {
                cm.updateInfoQuest(62012, 'hidden=hid1;find=1');
                cm.dispose();
                cm.warp(701220300, 1);
                cm.cancelItem(2210190);
            }
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
            cm.sendNormalTalk_Bottom('我刚刚……看到的那个是什么啊？这次得藏得严实点，偷偷进去吧。', 57, 0, false, true);
        } else {
            if (status === a++) {
                cm.updateInfoQuest(62012, 'secret=3;hidden=hid1;find=1');
                cm.dispose();
                cm.warp(701220351, 1);
            }
        }
    }
}
function action2(d, c, b) {
    status++;
    var a = -1;
    if (status <= a++) {
        cm.dispose();
    } else {
        if (status === a++) {
            cm.sendNormalTalk_Bottom('哦？这就是#r#t4034637##k？', 57, 0, false, true);
        } else {
            if (status === a++) {
                cm.playerMessage(5, '获得了#t4034637#。');
                cm.updateInfoQuest(62012, 'secret=7;hidden=hid1;find=1');
                cm.gainItem(4034637, 1);
                cm.dispose();
                cm.warp(701220351, 1);
            }
        }
    }
}