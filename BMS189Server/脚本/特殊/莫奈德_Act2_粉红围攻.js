var status = -1;
function action(d, b, a) {
    var c = cm.getNpc();
    if (c == 0) {
        action0(d, b, a);
    } else {
        if (c == 1) {
            action1(d, b, a);
        } else {
            if (c == 10) {
                action10(d, b, a);
            } else {
                if (c == 2) {
                    action2(d, b, a);
                } else {
                    if (c == 20) {
                        action20(d, b, a);
                    } else {
                        if (c == 3) {
                            action3(d, b, a);
                        } else {
                            if (c == 30) {
                                action30(d, b, a);
                            } else {
                                if (c == 4) {
                                    action4(d, b, a);
                                } else {
                                    if (c == 40) {
                                        action40(d, b, a);
                                    } else {
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
}
function action0(e, c, b) {
    var d = cm.getNpc();
    status++;
    var a = -1;
    if (status <= a++) {
        cm.dispose();
    } else {
        if (status === a++) {
            cm.uiChangeStage(1);
            cm.spawnMobLimit(9402237, 1, 189, 402, 100);
            cm.spawnMobLimit(9402237, 1, 1896, 402, 100);
            cm.spawnMobLimit(9402237, 1, 189, 402, 100);
            cm.spawnMobLimit(9402237, 1, 1896, 402, 100);
            cm.spawnMobLimit(9402237, 1, 189, 402, 100);
            cm.spawnMobLimit(9402237, 1, 1896, 402, 100);
            cm.spawnMobLimit(9402237, 1, 189, 402, 100);
            cm.spawnMobLimit(9402237, 1, 1896, 402, 100);
            cm.spawnMobLimit(9402237, 1, 189, 402, 100);
            cm.spawnMobLimit(9402241, 1, 1896, 402, 100);
            cm.dispose();
        }
    }
}
function action1(e, c, b) {
    var d = cm.getNpc();
    status++;
    var a = -1;
    if (status <= a++) {
        cm.dispose();
    } else {
        if (status === a++) {
            cm.fieldEffect_ScreenMsg('defense/count');
            cm.fieldEffect_ScreenMsg('killing/stage/2');
            cm.fieldEffect_ScreenMsg('killing/first/start');
            cm.dispose();
        }
    }
}
function action10(e, c, b) {
    var d = cm.getNpc();
    status++;
    var a = -1;
    if (status <= a++) {
        cm.dispose();
    } else {
        if (status === a++) {
            cm.uiChangeStage(2);
            cm.spawnMobLimit(9402238, 1, 189, 402, 100);
            cm.spawnMobLimit(9402240, 1, 1896, 402, 100);
            cm.spawnMobLimit(9402238, 1, 419, 402, 100);
            cm.spawnMobLimit(9402238, 1, 189, 402, 100);
            cm.spawnMobLimit(9402240, 1, 1896, 402, 100);
            cm.spawnMobLimit(9402238, 1, 189, 402, 100);
            cm.spawnMobLimit(9402240, 1, 1896, 402, 100);
            cm.spawnMobLimit(9402238, 1, 189, 402, 100);
            cm.spawnMobLimit(9402240, 1, 1896, 402, 100);
            cm.spawnMobLimit(9402240, 1, 189, 402, 100);
            cm.spawnMobLimit(9402238, 1, 1896, 402, 100);
            cm.spawnMobLimit(9402240, 1, 189, 402, 100);
            cm.spawnMobLimit(9402238, 1, 189, 402, 100);
            cm.dispose();
        }
    }
}
function action2(e, c, b) {
    var d = cm.getNpc();
    status++;
    var a = -1;
    if (status <= a++) {
        cm.dispose();
    } else {
        if (status === a++) {
            cm.fieldEffect_ScreenMsg('defense/count');
            cm.fieldEffect_ScreenMsg('killing/stage/3');
            cm.fieldEffect_ScreenMsg('killing/first/start');
            cm.dispose();
        }
    }
}
function action20(e, c, b) {
    var d = cm.getNpc();
    status++;
    var a = -1;
    if (status <= a++) {
        cm.dispose();
    } else {
        if (status === a++) {
            cm.uiChangeStage(3);
            cm.spawnMobLimit(9402245, 1, 189, 402, 100);
            cm.spawnMobLimit(9402246, 1, 1896, 402, 100);
            cm.spawnMobLimit(9402245, 1, 189, 402, 100);
            cm.spawnMobLimit(9402245, 1, 189, 402, 100);
            cm.spawnMobLimit(9402246, 1, 1896, 402, 100);
            cm.spawnMobLimit(9402245, 1, 189, 402, 100);
            cm.spawnMobLimit(9402245, 1, 189, 402, 100);
            cm.spawnMobLimit(9402246, 1, 1896, 402, 100);
            cm.spawnMobLimit(9402245, 1, 189, 402, 100);
            cm.spawnMobLimit(9402246, 1, 300, 402, 100);
            cm.spawnMobLimit(9402246, 1, 1896, 402, 100);
            cm.dispose();
        }
    }
}
function action3(e, c, b) {
    var d = cm.getNpc();
    status++;
    var a = -1;
    if (status <= a++) {
        cm.dispose();
    } else {
        if (status === a++) {
            cm.fieldEffect_ScreenMsg('defense/count');
            cm.fieldEffect_ScreenMsg('killing/stage/4');
            cm.fieldEffect_ScreenMsg('killing/first/start');
            cm.dispose();
        }
    }
}
function action30(e, c, b) {
    var d = cm.getNpc();
    status++;
    var a = -1;
    if (status <= a++) {
        cm.dispose();
    } else {
        if (status === a++) {
            cm.uiChangeStage(4);
            cm.spawnMobLimit(9402242, 1, 1896, 402, 100);
            cm.spawnMobLimit(9402243, 1, 189, 402, 100);
            cm.spawnMobLimit(9402242, 1, 189, 402, 100);
            cm.spawnMobLimit(9402243, 1, 1896, 402, 100);
            cm.addPopupSay(9400580, 3000, '#face0#这些怪物都是从哪儿冒出来的？', '', 0);
            cm.spawnMobLimit(9402242, 1, 1896, 402, 100);
            cm.spawnMobLimit(9402243, 1, 189, 402, 100);
            cm.spawnMobLimit(9402242, 1, 189, 402, 100);
            cm.spawnMobLimit(9402243, 1, 1896, 402, 100);
            cm.spawnMobLimit(9402242, 1, 1896, 402, 100);
            cm.spawnMobLimit(9402243, 1, 189, 402, 100);
            cm.dispose();
        }
    }
}
function action4(e, c, b) {
    var d = cm.getNpc();
    status++;
    var a = -1;
    if (status <= a++) {
        cm.dispose();
    } else {
        if (status === a++) {
            cm.forceCompleteQuest(64076);
            cm.fieldEffect_ScreenMsg('killing/clear');
            cm.dispose();
        }
    }
}
function action40(e, c, b) {
    var d = cm.getNpc();
    status++;
    var a = -1;
    if (status <= a++) {
        cm.dispose();
    } else {
        if (status === a++) {
            cm.warp(867201502, 0, true);
            cm.npc_LeaveField('oid=3603888');
            cm.npc_LeaveField('oid=3603889');
            cm.dispose();
        }
    }
}
function start() {
    status = -1;
    action(1, 0, 0);
}