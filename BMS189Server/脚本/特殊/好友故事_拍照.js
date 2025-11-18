var status = -1;
var selectionLog = [];
function action(e, c, b) {
    var a = cm.getNpc();
    var d = cm.getMapId();
    if (a == 1) {
        action1(e, c, b);
    } else {
        if (a == 2) {
            action2(e, c, b);
        } else {
            if (a == 3) {
                action3(e, c, b);
            } else {
                if (a == 4) {
                    action4(e, c, b);
                } else {
                    if (a == 5) {
                        action5(e, c, b);
                    } else {
                        if (a == 6) {
                            action6(e, c, b);
                        } else {
                            if (a == 10) {
                                action10(e, c, b);
                            } else {
                                if (d == 330000005 && cm.isQuestActive(32778)) {
                                    cm.openCamera(1, 0, [1530133], [0], 0, -1, -1, 1);
                                    cm.dispose();
                                } else {
                                    if (d == 330000000 && cm.isQuestActive(32779)) {
                                        cm.openCamera(1, 0, [1530131], [0], 0, -1, -1, 1);
                                        cm.dispose();
                                    } else {
                                        if (d == 330001800 && cm.isQuestActive(32782)) {
                                            cm.openCamera(1, 0, [1530137], [0], 0, -1, -1, 1);
                                            cm.dispose();
                                        } else {
                                            action0(e, c, b);
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
function action0(e, d, c) {
    if (status == 0 && e == 0) {
        cm.dispose();
        return;
    }
    status++;
    selectionLog[status] = c;
    var b = -1;
    if (status <= b++) {
        cm.dispose();
    } else {
        if (status === b++) {
            var a = cm.getNpc();
            cm.getTopMsgFont('在这里没什么可拍的。', 3, 20, 20, 0);
            cm.dispose();
        }
    }
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
            cm.forceCompleteQuest(32778);
            cm.sendNormalTalk_Bottom('糟糕……照片拍花了。重新拍一次吧。', 57, 0, false, true);
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom('才离开没多久，跟上去的话应该能找到。\r\n#b（前往街心去寻找奥尔卡吧。）#k', 57, 0, true, true);
            } else {
                if (status === a++) {
                    cm.forceStartQuest(32779, '');
                    cm.getTopMsgFont('需要前往街心去寻找奥尔卡才行. ', 3, 20, 20, 0);
                    cm.dispose();
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
    status++;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose();
    } else {
        if (status === a++) {
            cm.forceCompleteQuest(32779);
            cm.sendNormalTalk_Bottom('呃，这次怎么拍得这么难看？看来智能手机还真是不好摆弄。', 57, 0, false, true);
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom('虽然麻烦，但也没办法。乘坐巴士的话，应该能追上。\r\n#b（为了追赶奥尔卡，乘坐巴士前往细雨散步路吧。）#k', 57, 0, true, true);
            } else {
                if (status === a++) {
                    cm.forceStartQuest(32780, '');
                    cm.getTopMsgFont('需要乘坐巴士前往细雨散步路才行. ', 3, 20, 20, 0);
                    cm.dispose();
                }
            }
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
            cm.setInGameDirectionMode(false, true, false);
            cm.sendNormalTalk_Bottom('很好，任务完成。照片也拍了，那就回去吧？', 57, 0, false, true);
        } else {
            if (status === a++) {
                cm.forceCompleteQuest(32782);
                cm.dispose();
                cm.warp(330002211, 0);
            }
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
            cm.sendNormalTalk_Bottom('很好，拍到了一张不错的照片。', 57, 0, false, true);
        } else {
            if (status === a++) {
                cm.updateInfoQuest(32843, 'ph1=1');
                cm.npc_LeaveField('oid=37319095');
                cm.npc_LeaveField('oid=37319095');
                cm.npc_LeaveField('oid=37319096');
                cm.npc_LeaveField('oid=37319096');
                cm.dispose();
                cm.warp(330002325, 1);
            }
        }
    }
}
function action5(d, c, b) {
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
            cm.sendNormalTalk_Bottom('很好，第二张应该也能用。', 57, 0, false, true);
        } else {
            if (status === a++) {
                cm.updateInfoQuest(32843, 'ph1=1;ph2=1');
                cm.npc_LeaveField('oid=37320851');
                cm.npc_LeaveField('oid=37320851');
                cm.npc_LeaveField('oid=37320852');
                cm.npc_LeaveField('oid=37320852');
                cm.dispose();
                cm.warp(330002326, 1);
            }
        }
    }
}
function action6(d, c, b) {
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
            cm.sendNormalTalk_Bottom('一共拍三张的话应该足够了吧？现在返回吧。', 57, 0, false, true);
        } else {
            if (status === a++) {
                cm.updateInfoQuest(32843, 'ph1=1;ph2=1;ph3=1');
                cm.forceStartQuest(32805, '');
                cm.npc_LeaveField('oid=37322197');
                cm.npc_LeaveField('oid=37322197');
                cm.npc_LeaveField('oid=37322198');
                cm.npc_LeaveField('oid=37322198');
                cm.dispose();
                cm.warp(330000500, 0);
            }
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
            cm.updateInfoQuest(33050, 'photo=1');
            cm.sendNormalTalk_Bottom(' 很好, 拍到#b阿白实习老师#k的照片了. ', 57, 0, false, true, 1);
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom(' ...?', 37, 1530200, true, false, 1);
            } else {
                if (status === a++) {
                    cm.dispose();
                }
            }
        }
    }
}
function start() {
    status = -1;
    action(1, 0, 0);
}