var status = -1;
function start() {
    action(1, 0, 0);
}
function action(f, c, b) {
    status++;
    var a = -1;
    if (status <= a++) {
        cm.dispose();
    } else {
        if (status === a++) {
            cm.sendNormalTalk('从现在开始，如果要让我们获得成长，需要用到特殊的材料。', 37, 2400009, false, true);
        } else {
            if (status === a++) {
                cm.sendNormalTalk('#face1#我们的身体……也太娇贵了……', 37, 2400010, true, true);
            } else {
                if (status === a++) {
                    var d = cm.getNumberFromQuestInfo(41901, 'grade');
                    var e = '好了，#h0#，你要怎么做呢？';
                    if (d < 8) {
                        e += '\r\n#L0# #b把拉比斯和拉兹丽成长到8型。#k#l';
                    }
                    if (d < 9) {
                        e += '\r\n#L1# #b把拉比斯和拉兹丽成长到9型。#k#l';
                    }
                    if (d < 10) {
                        e += '\r\n#L2##b 把拉比斯和拉兹丽成长为10型（创世武器）。#k#l';
                    }
                    e += '\r\n#L3# #b停止。#k#l';
                    cm.askMenu(e, 5, 2400009);
                } else {
                    if (status === a++) {
                        cm.dispose();
                        if (b == 0) {
                            if (!cm.haveItem(4310216)) {
                                cm.sendNormalTalk('为了成长，需要#b1个#i4310216##z4310216##k。', 37, 2400009, false, true);
                            } else {
                                if (cm.getLevel() < 180) {
                                    cm.sendNormalTalk('如果你不达到180级以上，恐怕很难承担成长后的我们吧？', 37, 2400009, false, false);
                                } else {
                                    cm.openZeroUpgradeUI();
                                }
                            }
                        } else {
                            if (b == 1) {
                                if (!cm.haveItem(4310217)) {
                                    cm.sendNormalTalk('为了成长，需要#b1个#i4310217##z4310217##k。', 37, 2400009, false, true);
                                } else {
                                    if (cm.getLevel() < 200) {
                                        cm.sendNormalTalk('如果你不达到200级以上，恐怕很难承担成长后的我们吧？', 37, 2400009, false, false);
                                    } else {
                                        cm.openZeroUpgradeUI();
                                    }
                                }
                            } else {
                                if (b == 2) {
                                    if (!cm.haveItem(4310260)) {
                                        cm.sendNormalTalk('为了成长，需要#b1个#i4310260##z4310260##k。', 37, 2400009, false, true);
                                    } else {
                                        if (cm.getLevel() < 200) {
                                            cm.sendNormalTalk('如果你不达到200级以上，恐怕很难承担成长后的我们吧？', 37, 2400009, false, false);
                                        } else {
                                            cm.openZeroUpgradeUI();
                                        }
                                    }
                                }
                            }
                        }
                    } else {
                        if (status === a++) {
                            cm.dispose();
                        }
                    }
                }
            }
        }
    }
}