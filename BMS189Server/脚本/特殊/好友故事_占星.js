var status = -1;
var selectionLog = [];
function action(c, b, a) {
    if (cm.isQuestActive(32744)) {
        action1(c, b, a);
    } else {
        action0(c, b, a);
    }
}
function action0(d, c, b) {
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
            cm.sendNormalTalk_Bottom('？现在占星店里好像什么人都没有了。', 57, 0, false, false);
        } else {
            if (status === a++) {
                cm.dispose();
            }
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
            cm.sendNormalTalk_Bottom('嘘，我正在做兼职呢。千万不能让老师知道啊……我的妈呀，这不是希纳斯小姐吗？怎么会来这里？', 37, 1530180, false, true);
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom('别担心，我是不会让老师们知道的。不过，你能给我和#h0#算算命运吗？', 37, 1530060, true, true);
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom('本来这里一天只能给一个人算一次当天的运势……不过，你要是真想算的话，我卡珊德拉就给你们两个算算命运吧！', 37, 1530180, true, true);
                } else {
                    if (status === a++) {
                        cm.askMenu_Bottom('好了，#h0#。你从这三张牌中抽出一张。#b\r\n#L0#第一张牌\r\n#L1#第二张牌#l#l\r\n#L2#第三张牌#l', 37, 1530180);
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom('让我看看。嗯……有些奇妙？', 37, 1530180, false, true);
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom('你们两个前世在另一个地方曾有过一段不解之缘。希纳斯是女皇，而且#h0#，你是保护女皇的世界勇士。', 37, 1530180, true, true);
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom('简单一句话，那真是不简单的缘分啊。正因为有那样的不解之缘，所以你们两个在这里也能成为朋友。', 37, 1530180, true, true);
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom('这个嘛，已经没有必要继续算了。你们二人的友情就是PERFECT！！', 37, 1530180, true, true);
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom('天啊，和我不久前梦到的内容一样！怎么会这么神奇呢？你听到了吧，#h0#？我们的友情是完美的！', 37, 1530060, true, true);
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk_Bottom('#face0#果然，#h0#和我想的一样，就是那个命运之转学……啊，没什么。你就当什么也没听到。噢哈哈哈。', 37, 1530060, true, true);
                                            } else {
                                                if (status === a++) {
                                                    cm.forceCompleteQuest(32744);
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
        }
    }
}
function start() {
    status = -1;
    action(1, 0, 0);
}