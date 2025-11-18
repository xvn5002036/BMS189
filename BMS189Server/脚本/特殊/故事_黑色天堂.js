var selectionLog = [];
var status = -1;
function action(d, f, h) {
    if (d == 1) {
        status++;
    } else {
        status--;
    }
    selectionLog[status] = h;
    var j = cm.getNpc();
    var g = [
        33150,
        33164,
        33122,
        33123,
        33124,
        33125
    ];
    var e = parseInt(cm.getInfoQuest(1540446));
    var c = -1;
    if (status <= c++) {
        cm.dispose();
    } else {
        if (status === c++) {
            if (cm.getQuestStatus(g[j]) > 0) {
                cm.askYesNo('确定移动到保存的地方吗？', 4, 1540446);
            } else {
                if (j == 0) {
                    cm.askYesNo('确定要开始“第一章。黑色之翼的黑幕”吗？\r\n\r\n#b（该内容只有分辨率达到1024*768以上时才能正常进行。）#k', 4, 1540446);
                } else {
                    if (j == 1) {
                        cm.askYesNo('确定要开始“第二章。出战，水晶花园！”吗？\r\n\r\n#b（该内容只有分辨率达到1024*768以上时才能正常进行。）#k', 4, 1540446);
                    } else {
                        if (j == 2) {
                            cm.askYesNo('确定要开始“第三章。激战苍穹”吗？\r\n\r\n#b（该内容只有分辨率达到1024*768以上时才能正常进行。）#k', 4, 1540446);
                        } else {
                            if (j == 3) {
                                cm.askYesNo('确定要开始“第四章。反击之信号弹”吗？\r\n\r\n#b（该内容只有分辨率达到1024*768以上时才能正常进行。）#k', 4, 1540446);
                            } else {
                                if (j == 4) {
                                    cm.askYesNo('确定要开始“第五章。向着核心！”吗？\r\n\r\n#b（该内容只有分辨率达到1024*768以上时才能正常进行。）#k', 4, 1540446);
                                } else {
                                    if (j == 5) {
                                        cm.askYesNo('确定要开始“最终章。黑色天堂”吗？\r\n\r\n#b（该内容只有分辨率达到1024*768以上时才能正常进行。）#k', 4, 1540446);
                                    } else {
                                        cm.dispose();
                                    }
                                }
                            }
                        }
                    }
                }
            }
        } else {
            if (status === c++) {
                if (cm.getQuestStatus(g[j]) > 0 && e > 0) {
                    cm.sendNormalTalk('加载记录中……', 5, 1540446, false, true);
                } else {
                    if (j == 0) {
                        cm.sendNormalTalk('开始进行“第一章。黑色之翼的黑幕”。', 5, 1540446, false, true);
                    } else {
                        if (j == 1) {
                            cm.sendNormalTalk('开始进行“第二章。出战，水晶花园！”。', 5, 1540446, false, true);
                        } else {
                            if (j == 2) {
                                cm.sendNormalTalk('开始进行“第三章。激战苍穹”。', 5, 1540446, false, true);
                            } else {
                                if (j == 3) {
                                    cm.sendNormalTalk('开始进行“第四章。反击之信号弹”。', 5, 1540446, false, true);
                                } else {
                                    if (j == 4) {
                                        cm.sendNormalTalk('开始进行“第五章。向着核心！”。', 5, 1540446, false, true);
                                    } else {
                                        if (j == 5) {
                                            cm.sendNormalTalk('开始进行“最终章。黑色天堂”。', 5, 1540446, false, true);
                                        } else {
                                            cm.dispose();
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            } else {
                if (status === c++) {
                    cm.dispose();
                    if (cm.getQuestStatus(g[j]) > 0 && e > 0) {
                        var a = e;
                    } else {
                        if (j == 0) {
                            cm.forceStartQuest(33120, '');
                            cm.forceStartQuest(33179, '');
                            var a = 350011001;
                        } else {
                            if (j == 1) {
                                cm.forceStartQuest(33121, '');
                                cm.forceStartQuest(33179, '');
                                var b = cm.getPlayer().getJob();
                                if (b == 10000 || b == 10100 || b == 10110 || b == 10111 || b == 10112) {
                                    var a = 350020000;
                                } else {
                                    if (Math.floor(b / 100) == 152 || b == 15000) {
                                        var a = 940202048;
                                    } else {
                                        var a = 350020016;
                                    }
                                }
                            } else {
                                if (j == 2) {
                                    cm.forceStartQuest(33122, '');
                                    var a = 350031000;
                                } else {
                                    if (j == 3) {
                                        cm.forceStartQuest(33123, '');
                                        var a = 350040010;
                                    } else {
                                        if (j == 4) {
                                            cm.forceStartQuest(33124, '');
                                            var a = 350050000;
                                        } else {
                                            if (j == 5) {
                                                cm.forceStartQuest(33125, '');
                                                var a = 350060000;
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                    cm.warp(a, 0);
                    cm.setNumberForQuestCustomData(1540447, a);
                }
            }
        }
    }
}
function start() {
    status = -1;
    action(1, 0, 0);
}