var status = -1;
var selectionLog = [];
function start() {
    action(1, 0, 0);
}
function action(f, d, c) {
    if (status == 0 && f == 0) {
        cm.dispose();
        return;
    }
    f == 1 ? status++ : status--;
    selectionLog[status] = c;
    var a = -1;
    if (status <= a++) {
        cm.dispose();
    } else {
        if (status === a++) {
            if (cm.getNumberFromQuestInfo(41927, 'lastReadCount') == 3) {
                cm.zeroReadBookResult(2, 0, 102, '今天就读到这里吧。', 0, 0, 0, 16);
            } else {
                cm.addNumberForQuestInfo(41927, 'lastReadCount', 1);
                var b = cm.rand(1, 11);
                var e = cm.rand(100, 300);
                if (b == 1) {
                    cm.zeroReadBookResult(0, 2, e, '早起的冒险家有经验值拿……读一遍试试吧。', 2400006, 0, 0, 64);
                } else {
                    if (b == 2) {
                        cm.zeroReadBookResult(0, 1, e, '能够看到魔方的里面吗？这种题目好像挺有意思啊！', 2400005, 1, 0, 32);
                    } else {
                        if (b == 3) {
                            cm.zeroReadBookResult(0, 5, e, '冒险岛潮流月刊......？应该会挺有趣的……', 2400006, 0, 0, 512);
                        } else {
                            if (b == 4) {
                                cm.zeroReadBookResult(0, 3, e, '怪盗幻影向你传授手上功夫的基础……题目和内容真的会一样吗？读读看吧。', 2400005, 0, 0, 128);
                            } else {
                                if (b == 5) {
                                    cm.zeroReadBookResult(0, 4, e, '我的机器人朋友? 光看题目就让人感觉很温暖。', 2400005, 2, 0, 256);
                                } else {
                                    if (b == 6) {
                                        cm.zeroReadBookResult(0, 3, e, '匠人街的匠人精神……题目和内容真的会一样吗？读读看吧。', 2400005, 1, 0, 128);
                                    } else {
                                        if (b == 7) {
                                            cm.zeroReadBookResult(0, 2, e, '冒险岛英雄们的史书……读一遍试试吧。', 2400006, 1, 0, 64);
                                        } else {
                                            if (b == 8) {
                                                cm.zeroReadBookResult(0, 1, e, '用水晶球看未来这种题目好像挺有意思啊！', 2400006, 0, 0, 32);
                                            } else {
                                                if (b == 9) {
                                                    cm.zeroReadBookResult(0, 0, e, '领导力和团队力？感觉这书名很霸气啊。', 2400005, 1, 0, 16);
                                                } else {
                                                    if (b == 10) {
                                                        cm.zeroReadBookResult(0, 1, e, '发放任务的NPC的心理这种题目好像挺有意思啊！', 2400006, 2, 0, 32);
                                                    } else {
                                                        cm.zeroReadBookResult(0, 3, e, '手比眼快……题目和内容真的会一样吗？读读看吧。', 2400005, 2, 0, 128);
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
            cm.dispose();
        }
    }
}