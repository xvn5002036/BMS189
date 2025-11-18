var status = -1;
function start() {
    action(1, 0, 0);
}
function action(d, c, b) {
    status++;
    var a = -1;
    if (status <= a++) {
        cm.dispose();
    } else {
        if (status === a++) {
            cm.forceStartQuest(41929, '0');
            cm.curNodeEventEnd(true);
            cm.setInGameDirectionMode(true, true, true);
            cm.sendNormalTalk('很好，挺熟练的。', 41, 2400005, false, true);
        } else {
            if (status === a++) {
                cm.sendNormalTalk('相反，你在战斗的时候使用我的技能，我就会切换你进行战斗。理解了吧？', 41, 2400005, true, true);
            } else {
                if (status === a++) {
                    cm.sendNormalTalk('#b(点头)#k', 41, 2400006, true, true);
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk('#face3#哼，你也不可能连这种程度都理解不了吧，毕竟你也是我。', 41, 2400005, true, true);
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk('那么我们出发吧。', 41, 2400005, true, true);
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk('#b(点头)#k', 41, 2400006, true, true);
                            } else {
                                if (status === a++) {
                                    cm.setInGameDirectionMode(false, true, false);
                                    cm.dispose();
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}