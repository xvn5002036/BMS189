var status = -1;
var selectionLog = [];
var reMap = 0;
function start() {
    action(1, 0, 0);
}
function action(d, c, b) {
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
            if (cm.getMapId() >= 100000000 && cm.getMapId() <= 107000000 || cm.getMapId() == 120040000) {
                reMap = 104020100;
            } else {
                if (cm.getMapId() >= 130000000 && cm.getMapId() <= 130000500) {
                    reMap = 130000210;
                } else {
                    if (cm.getMapId() == 140000000) {
                        reMap = 140020300;
                    } else {
                        if (cm.getMapId() == 310000000) {
                            reMap = 310000010;
                        } else {
                            if (cm.getMapId() == 200000000) {
                                reMap = 200000100;
                            } else {
                                if (cm.getMapId() == 250000000) {
                                    reMap = 250000100;
                                } else {
                                    if (cm.getMapId() == 220000000 || cm.getMapId() == 221000000) {
                                        reMap = 220000100;
                                    } else {
                                        if (cm.getMapId() == 260000000) {
                                            reMap = 260000100;
                                        } else {
                                            if (cm.getMapId() == 240000000) {
                                                reMap = 240000100;
                                            } else {
                                                reMap = 104020100;
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
            cm.askYesNo('距离当前位置最近的大陆移动码头是#m' + reMap + '#。你想移动到#b<#m' + reMap + '#>#k去吗？', 4, 9000087);
        } else {
            if (status === a++) {
                cm.warp(reMap, 0, false);
                cm.effect_NormalSpeechBalloon('当前位置：<#m' + reMap + '#>', 1, 0, 0, 3000, 0, 0);
                cm.dispose();
            }
        }
    }
}