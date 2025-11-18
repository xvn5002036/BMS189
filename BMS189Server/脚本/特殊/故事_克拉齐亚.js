var status = -1;
var selectionLog = [];
function start() {
    action(1, 0, 0);
}
function action(g, d, c) {
    if (status == 0 && g == 0) {
        cm.dispose();
        return;
    }
    g == 1 ? status++ : status--;
    selectionLog[status] = c;
    var b = cm.getNpc();
    var h = [
        61329,
        61330,
        61331,
        61332
    ];
    var e = cm.getNumberFromQuestCustomData(9201533);
    var a = -1;
    if (status <= a++) {
        cm.dispose();
    } else {
        if (status === a++) {
            if (cm.getQuestStatus(h[b]) > 0) {
                cm.askYesNo('确定移动到保存的地方吗？', 4, 9201532);
            } else {
                if (b == 0) {
                    cm.askYesNo('要开始“第1幕：被遗忘的战斗”吗？\r\n\r\n#b(该游戏内容最适宜在1366x768的分辨率下游玩。)#k', 4, 9201532);
                } else {
                    if (b == 1) {
                        cm.askYesNo('要开始“第2幕：1000多年前”吗？\r\n\r\n#b(该游戏内容最适宜在1366x768的分辨率下游玩。)#k', 4, 9201532);
                    } else {
                        if (b == 2) {
                            cm.askYesNo('要开始“第3幕：来自反转界的男人”吗？\r\n\r\n#b(该游戏内容最适宜在1366x768的分辨率下游玩。)#k', 4, 9201532);
                        } else {
                            if (b == 3) {
                                cm.askYesNo('要开始“第4幕：被遗忘的战斗”吗？\r\n\r\n#b(该游戏内容最适宜在1366x768的分辨率下游玩。)#k', 4, 9201532);
                            }
                        }
                    }
                }
            }
        } else {
            if (status === a++) {
                if (cm.getQuestStatus(h[b]) > 0 && e > 0) {
                    cm.sendNormalTalk('加载记录中……', 5, 9201532, false, true);
                } else {
                    cm.dispose();
                    if (b == 0) {
                        var f = 610061000;
                    } else {
                        if (b == 1) {
                            var f = 610062000;
                        } else {
                            if (b == 2) {
                                var f = 610063000;
                            } else {
                                if (b == 3) {
                                    var f = 610064000;
                                }
                            }
                        }
                    }
                    cm.getPlayer().clearAllBuffs();
                    cm.setQuestCustomData(9201533, h[b]);
                    cm.forceStartQuest(h[b]);
                    cm.warp(f, 0);
                }
            } else {
                if (status === a++) {
                    cm.dispose();
                    cm.getPlayer().clearAllBuffs();
                    cm.warp(e, 0);
                }
            }
        }
    }
}