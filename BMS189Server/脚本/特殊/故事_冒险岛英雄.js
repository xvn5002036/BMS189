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
        33910,
        33911,
        33912,
        33913,
        33914
    ];
    var e = cm.getNumberFromQuestCustomData(1540448 + b);
    var a = -1;
    if (status <= a++) {
        cm.dispose();
    } else {
        if (status === a++) {
            if (cm.getQuestStatus(h[b]) > 0) {
                cm.askYesNo('确定移动到保存的地方吗？', 4, 1540446);
            } else {
                if (b == 0) {
                    cm.askYesNo('要开始‘Act 1。龙沉睡的岛’吗？\r\n\r\n#b   - 进场时角色的技能增益会全部消失。#k\r\n#b   - 分辨率1024*768以上可以正常进行。#k\r\n#b   - 以剧情上的主人公进行游戏。#k\r\n', 4, 1540446);
                } else {
                    if (b == 1) {
                        cm.askYesNo('要开始‘Act 1.5。重逢’吗？\r\n\r\n#b   - 进场时角色的技能增益会全部消失。#k\r\n#b   - 分辨率1024*768以上可以正常进行。#k\r\n#b   - 处理黑色天堂之后的剧情。#k\r\n#b   - 以剧情上的主人公进行游戏。#k\r\n', 4, 1540446);
                    } else {
                        if (b == 2) {
                            cm.askYesNo('要开始‘Act 2。阿布拉克萨斯’吗？\r\n\r\n#b   - 进场时角色的技能增益会全部消失。#k\r\n#b   - 分辨率1024*768以上可以正常进行。#k\r\n#b   - 处理黑色天堂之后的剧情。#k\r\n#b   - 以剧情上的主人公进行游戏。#k\r\n', 4, 1540446);
                        } else {
                            if (b == 3) {
                                cm.askYesNo('要开始‘Act 3。陌生的世界’吗？\r\n\r\n#b   - 进场时角色的技能增益会全部消失。#k\r\n#b   - 分辨率1024*768以上可以正常进行。#k\r\n#b   - 处理黑色天堂之后的剧情。#k\r\n#b   - 以剧情上的主人公进行游戏。#k\r\n', 4, 1540446);
                            } else {
                                if (b == 4) {
                                    cm.askYesNo('要开始‘Final Act。世界树’吗？\r\n\r\n#b   - 进场时角色的技能增益会全部消失。#k\r\n#b   - 分辨率1024*768以上可以正常进行。#k\r\n#b   - 处理黑色天堂之后的剧情。#k\r\n#b   - 以剧情上的主人公进行游戏。#k\r\n', 4, 1540446);
                                }
                            }
                        }
                    }
                }
            }
        } else {
            if (status === a++) {
                if (cm.getQuestStatus(h[b]) > 0 && e > 0) {
                    cm.sendNormalTalk('加载记录中……', 5, 1540446, false, true);
                } else {
                    cm.dispose();
                    if (b == 0) {
                        var f = 350100000;
                    } else {
                        if (b == 1) {
                            var f = 350150000;
                        } else {
                            if (b == 2) {
                                var f = 350120010;
                            } else {
                                if (b == 3) {
                                    var f = 350130000;
                                } else {
                                    if (b == 4) {
                                        var f = 350140000;
                                    }
                                }
                            }
                        }
                    }
                    cm.getPlayer().clearAllBuffs();
                    cm.setNumberForQuestCustomData(1540448 + b, f);
                    cm.warp(f);
                    cm.forceStartQuest(h[b]);
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