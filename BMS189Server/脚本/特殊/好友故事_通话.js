var status = -1;
var selectionLog = [];
function action(mode, type, selection) {
    var npc = cm.getNpc();
    if (npc == 1530070 && cm.isQuestActive(32730)) {
        if ('call=1'.equals(cm.getInfoQuest(32731))) {
            action2(mode, type, selection);
        } else {
            action1(mode, type, selection);
        }
    } else {
        if (npc == 1530060 && cm.isQuestActive(32740)) {
            action3(mode, type, selection);
        } else {
            if (npc == 1530060 && cm.isQuestActive(32751)) {
                action4(mode, type, selection);
            } else {
                if (cm.isQuestActive(33023)) {
                    try {
                        var reactor = 'action' + npc;
                        eval(reactor)(mode, type, selection);
                    } catch (e) {
                        action0(mode, type, selection);
                    }
                } else {
                    if (npc == 1530130 && new Date().getHours() == 20) {
                        var reactor = 'actionOrca' + cm.getNumberFromQuestInfo(33044, 'call');
                        eval(reactor)(mode, type, selection);
                    } else {
                        action0(mode, type, selection);
                    }
                }
            }
        }
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
            cm.sendNormalTalk_Bottom('……不接电话。', 57, 0, false, false);
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
            cm.sendNormalTalk_Bottom('我不感兴趣。', 37, 1530070, false, true);
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom('……？', 57, 1530070, true, true);
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom('喂……喂？\r\n#b（电话被挂断了。再打一次试试吧。）#k', 57, 1530070, true, true);
                } else {
                    if (status === a++) {
                        cm.updateInfoQuest(32731, 'call=1');
                        cm.dispose();
                    }
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
            cm.sendNormalTalk_Bottom('又有什么事？我都说了不感兴趣。', 37, 1530070, false, true);
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom('怎么回事，我看是陌生号码……原来是转校生啊？我还以为是哪个#r商贩#k呢。', 37, 1530070, true, true);
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom('我在2楼阅览室呢。你有事的话就来这儿找我吧。', 37, 1530070, true, true);
                } else {
                    if (status === a++) {
                        cm.getTopMsgFont('可通过走廊左侧的台阶前往2楼. ', 3, 20, 20, 0);
                        cm.forceCompleteQuest(32730);
                        cm.forceStartQuest(32732, '');
                        cm.dispose();
                        cm.gainExp(Math.pow(cm.getLevel(), 3));
                    }
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
            cm.sendNormalTalk_Bottom('喂，#h0#？别吵，先听我说。', 37, 1530060, false, true);
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom('金司机叔叔正死死守在正门那里呢。所以我悄悄从后门溜了出来。', 37, 1530060, true, true);
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom('我在学校外等你！你快点过来哦。\r\n#r(去街心寻找希纳斯吧） ', 37, 1530060, true, true);
                } else {
                    if (status === a++) {
                        cm.forceCompleteQuest(32740);
                        cm.updateInfoQuest(32720, 'sms=22');
                        cm.dispose();
                    }
                }
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
            cm.updateInfoQuest(32719, 'gal=0;sms=1;add=0');
            cm.sendNormalTalk_Bottom('喂，#h0#？我现在正要过去呢。别担心，金司机已经被我甩掉了。', 37, 1530060, false, true);
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom('#face0#什么？你不是让我悄悄溜出来吗？我收到了以命运之转学生的名义发给我的信息。呵呵呵。', 37, 1530060, true, true);
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom('哎呀，电池好像……一会儿见吧。', 37, 1530060, true, true);
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom('希纳斯？希纳斯？\r\n#b（电话已经挂断）#k', 57, 1530060, true, true);
                    } else {
                        if (status === a++) {
                            cm.forceCompleteQuest(32751);
                            cm.dispose();
                        }
                    }
                }
            }
        }
    }
}
function action1530060(d, c, b) {
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
            cm.sendNormalTalk_Bottom('是的，我是希纳斯。', 37, 1530060, false, true);
            cm.effect_Voice('Voice2.img/Friends/CALL_cyg/1', 100);
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom('#face0#嗯？你问我在干什么？我不太明白你的意思……我现在当然是在接电话了……', 37, 1530060, true, true);
                cm.effect_Voice('Voice2.img/Friends/CALL_cyg/2', 100);
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom('什么？给我打电话就是因为无聊？', 37, 1530060, true, true);
                    cm.effect_Voice('Voice2.img/Friends/CALL_cyg/3', 100);
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom('呵呵……原来朋友之间无聊的时候也是会相互打电话的啊？我还是第一次听说呢。因为我本来就没有什么朋友……', 37, 1530060, true, true);
                        cm.effect_Voice('Voice2.img/Friends/CALL_cyg/4', 100);
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom('对了，等放假了，我们一起出去玩怎么样？夏威夷建了一座可以同时容纳2千人的度假村呢。有时间的话，就一起去吧？', 37, 1530060, true, true);
                            cm.effect_Voice('Voice2.img/Friends/CALL_cyg/5', 100);
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom('#face0#啊……我还要上高尔夫辅导课，得走了。回头给你打电话哦。', 37, 1530060, true, true);
                                cm.effect_Voice('Voice2.img/Friends/CALL_cyg/6', 100);
                            } else {
                                if (status === a++) {
                                    cm.updateInfoQuest(33037, 'npc=1530060');
                                    cm.forceCompleteQuest(33023);
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
function action1530070(d, c, b) {
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
            cm.sendNormalTalk_Bottom('我是南哈特。请问有什么事吗？', 37, 1530070, false, true);
            cm.effect_Voice('Voice2.img/Friends/CALL_nh/1', 100);
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom('嗯？我出来清醒一下头脑，顺便看看书……你有什么事的话就请说吧。', 37, 1530070, true, true);
                cm.effect_Voice('Voice2.img/Friends/CALL_nh/2', 100);
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom('没什么事？看来你的时间很多嘛。不过麻烦你不要占用我的时间好吗？', 37, 1530070, true, true);
                    cm.effect_Voice('Voice2.img/Friends/CALL_nh/3', 100);
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom('真是怪事，自从你转学过来之后，就频繁出状况。都是因为你才让我多了这么多需要处理的事，可是不无聊了啊……', 37, 1530070, true, true);
                        cm.effect_Voice('Voice2.img/Friends/CALL_nh/4', 100);
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom('使唤？我使唤你？那不过是你的错觉而已。有机会的话我会让你知道知道什么才是真正的使唤。', 37, 1530070, true, true);
                            cm.effect_Voice('Voice2.img/Friends/CALL_nh/5', 100);
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom('那我就先走啦……学校见喽。', 37, 1530070, true, true);
                                cm.effect_Voice('Voice2.img/Friends/CALL_nh/6', 100);
                            } else {
                                if (status === a++) {
                                    cm.updateInfoQuest(33037, 'npc=' + cm.getNpc());
                                    cm.forceCompleteQuest(33023);
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
function action1530080(d, c, b) {
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
            cm.sendNormalTalk_Bottom('是的, 我是米哈尔. ', 37, 1530080, 0, 1);
            cm.effect_Voice('Voice2.img/Friends/CALL_mic/1', 100);
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom('因为没事做所以才给我打电话? 哈哈, 什么嘛, 真够无聊的. 不过我现在也正好无事可做. ', 37, 1530080, 1, 1);
                cm.effect_Voice('Voice2.img/Friends/CALL_mic/2', 100);
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom('我上次建议你学习剑道的事, 你觉得怎么样? 那将会非常有助于你的身心修炼. 你要是愿意的话, 我也可以教你. 你看上去可是很有天赋呢. ', 37, 1530080, 1, 1);
                    cm.effect_Voice('Voice2.img/Friends/CALL_mic/3', 100);
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom('自从你来了之后, 学校可是充满了活力. 伊卡尔特和胡克虽然没表现出来, 但在心里可都是很喜欢你的. 嗯, 当然了, 我也一样. ', 37, 1530080, 1, 1);
                        cm.effect_Voice('Voice2.img/Friends/CALL_mic/4', 100);
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom('那我就先走了. 明天学校见喽. ', 37, 1530080, 1, 1);
                            cm.effect_Voice('Voice2.img/Friends/CALL_mic/5', 100);
                        } else {
                            if (status === a++) {
                                cm.updateInfoQuest(33037, 'npc=' + cm.getNpc());
                                cm.forceCompleteQuest(33023);
                                cm.dispose();
                            }
                        }
                    }
                }
            }
        }
    }
}
function action1530090(d, c, b) {
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
            cm.sendNormalTalk_Bottom('有什么事吗? ', 37, 1530090, 0, 1);
            cm.effect_Voice('Voice2.img/Friends/CALL_ic/1', 100);
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom('……嗯, 没什么. 只是突然接到你的电话有些意外而已. ', 37, 1530090, 1, 1);
                cm.effect_Voice('Voice2.img/Friends/CALL_ic/2', 100);
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom('……打着玩的? 够无聊的了……真是这样的吗? ', 37, 1530090, 1, 1);
                    cm.effect_Voice('Voice2.img/Friends/CALL_ic/3', 100);
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom('你要是想找人和你聊天的话, 恐怕你是挑错对象了. 因为我这个人本来话就不多……你如果没什么特别的事我就挂了啊. ', 37, 1530090, 1, 1);
                        cm.effect_Voice('Voice2.img/Friends/CALL_ic/4', 100);
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom('……啊, 好吧. 你上次不是问我在听什么音乐么? ', 37, 1530090, 1, 1);
                            cm.effect_Voice('Voice2.img/Friends/CALL_ic/5', 100);
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom('我明天去学校放给你听. 要是我们趣味相投……相信我们一定会变得更加要好的. ', 37, 1530090, 1, 1);
                                cm.effect_Voice('Voice2.img/Friends/CALL_ic/6', 100);
                            } else {
                                if (status === a++) {
                                    cm.updateInfoQuest(33037, 'npc=' + cm.getNpc());
                                    cm.forceCompleteQuest(33023);
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
function action1530100(d, c, b) {
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
            cm.sendNormalTalk_Bottom('喂？搞什么嘛……我还以为是谁，原来是你啊？', 37, 1530100, false, true);
            cm.effect_Voice('Voice2.img/Friends/CALL_hawk/1', 100);
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom('#face0#还能干什么，我正搜集美女的电话号呢，结果被你的一个电话全都搞砸了。真是个捣乱分子！', 37, 1530100, true, true);
                cm.effect_Voice('Voice2.img/Friends/CALL_hawk/2', 100);
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom('真的，已经差不多成功了！别看我长得不起眼，魅力可是十足呢！', 37, 1530100, true, true);
                    cm.effect_Voice('Voice2.img/Friends/CALL_hawk/3', 100);
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom('这么看来，你的脸蛋长得还是相当不错呢！下次要不要和我一起去呢？你只要站在那儿就行了，话由我胡克来说就好。怎么样，就这么说定了？', 37, 1530100, true, true);
                        cm.effect_Voice('Voice2.img/Friends/CALL_hawk/4', 100);
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom('啊……(窃窃私语)我看到一个更漂亮的姑娘！先挂了哈！', 37, 1530100, true, true);
                            cm.effect_Voice('Voice2.img/Friends/CALL_hawk/6', 100);
                        } else {
                            if (status === a++) {
                                cm.updateInfoQuest(33037, 'npc=1530100');
                                cm.forceCompleteQuest(33023);
                                cm.dispose();
                            }
                        }
                    }
                }
            }
        }
    }
}
function action1530110(d, c, b) {
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
            cm.sendNormalTalk_Bottom('（嘴里咕哝着）喂? （嘴里咕哝着）嗯~我刚才在吃东西, 嘿嘿嘿. ', 37, 1530110, 0, 1);
            cm.effect_Voice('Voice2.img/Friends/CALL_oz/1', 100);
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom('回想起你转学时的情景就好像发生在昨天一样, 真是光阴似箭啊. 现在你对新学校应该都适应了吧. ', 37, 1530110, 1, 1);
                cm.effect_Voice('Voice2.img/Friends/CALL_oz/2', 100);
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom('对了, 学校对面新开了一家蛋糕店, 要不要去尝尝? 听说非常松软可口呢. 哈……好好吃的样子哦~! ', 37, 1530110, 1, 1);
                    cm.effect_Voice('Voice2.img/Friends/CALL_oz/3', 100);
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom('呃, 电池就要没电了. 那明天见喽, 拜拜~! ', 37, 1530110, 1, 1);
                        cm.effect_Voice('Voice2.img/Friends/CALL_oz/4', 100);
                    } else {
                        if (status === a++) {
                            cm.updateInfoQuest(33037, 'npc=' + cm.getNpc());
                            cm.forceCompleteQuest(33023);
                            cm.dispose();
                        }
                    }
                }
            }
        }
    }
}
function action1530120(d, c, b) {
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
            cm.sendNormalTalk_Bottom('喂？呃，有什么事吗？', 37, 1530120, false, true);
            cm.effect_Voice('Voice2.img/Friends/CALL_ir/1', 100);
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom('我有些闷得慌，所以正打算出去转转呢。最近这天气正好适合运动。', 37, 1530120, true, true);
                cm.effect_Voice('Voice2.img/Friends/CALL_ir/2', 100);
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom('#face0#给我打电话就是因为无聊？真够没劲的…下周和奥兹还有希纳斯，咱们四个一起去看电影怎么样？', 37, 1530120, true, true);
                    cm.effect_Voice('Voice2.img/Friends/CALL_ir/3', 100);
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom('当然是看动作片了。能称得上是电影的自然非动作片莫属。一定会非常有趣的。', 37, 1530120, true, true);
                        cm.effect_Voice('Voice2.img/Friends/CALL_ir/4', 100);
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom('好吧，咱们再定。学校见喽！', 37, 1530120, true, true);
                            cm.effect_Voice('Voice2.img/Friends/CALL_ir/5', 100);
                        } else {
                            if (status === a++) {
                                cm.updateInfoQuest(33037, 'npc=1530120');
                                cm.forceCompleteQuest(33023);
                                cm.dispose();
                            }
                        }
                    }
                }
            }
        }
    }
}
function action1530130(d, c, b) {
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
            cm.sendNormalTalk_Bottom('喂？', 37, 1530130, false, true);
            cm.effect_Voice('Voice2.img/Friends/CALL_orka/1', 100);
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom('搞什么嘛，这不是跟踪狂吗？我还以为是谁呢。', 37, 1530130, false, true);
                cm.effect_Voice('Voice2.img/Friends/CALL_orka/2', 100);
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom('你问我忙不？那是相当的忙了！没办法，都因为我人气太旺嘛。你要把和奥尔卡通话当成是一种荣耀，知道了吧，跟踪狂。', 37, 1530130, true, true);
                    cm.effect_Voice('Voice2.img/Friends/CALL_orka/3', 100);
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom('奥尔卡正在电视台呢。这里可是你这种人连参观都没机会的地方哦，到处都是明星。不过，其中最美的当然要数奥尔卡我了。', 37, 1530130, true, true);
                        cm.effect_Voice('Voice2.img/Friends/CALL_orka/4', 100);
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom('奥尔卡现在要去录节目了，先挂了哈。', 37, 1530130, true, true);
                            cm.effect_Voice('Voice2.img/Friends/CALL_orka/5', 100);
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom('……那个，我一般在8点到9点之间方便通电话。', 37, 1530130, true, true);
                                cm.effect_Voice('Voice2.img/Friends/CALL_orka/6', 100);
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom('#face0#不是，我刚刚不过是自言自语而已！谁让你再打过来了？别再打过来，知道了吧！', 37, 1530130, true, true);
                                    cm.effect_Voice('Voice2.img/Friends/CALL_orka/7', 100);
                                } else {
                                    if (status === a++) {
                                        cm.updateInfoQuest(33037, 'npc=1530130');
                                        cm.forceCompleteQuest(33023);
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
function action1530140(d, c, b) {
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
            cm.sendNormalTalk_Bottom('（窃窃私语）对对暗号吧。', 37, 1530140, false, true);
            cm.effect_Voice('Voice2.img/Friends/CALL_fran/1', 100);
        } else {
            if (status === a++) {
                cm.sendNextS_Bottom('...？');
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom('真是个蠢货！竟然还能把暗号忘了。下次可千万不能忘了，知道了吧！', 37, 1530140, true, true);
                    cm.effect_Voice('Voice2.img/Friends/CALL_fran/2', 100);
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom('哈哈……计划实施得很顺利。现在，利用缔结了血之契约者的力量，就可以封印天界之门了。', 37, 1530140, true, true);
                        cm.effect_Voice('Voice2.img/Friends/CALL_fran/3', 100);
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom('呃，天使的袭击！呃啊，不行……我已经尽力了。接下来封印天界之门的事就交给你了，秘密兵器17号。', 37, 1530140, true, true);
                            cm.effect_Voice('Voice2.img/Friends/CALL_fran/4', 100);
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom('呃啊啊，作为我左膀右臂的黑龙变得猖獗起来了~！！！', 37, 1530140, true, true);
                                cm.effect_Voice('Voice2.img/Friends/CALL_fran/5', 100);
                            } else {
                                if (status === a++) {
                                    cm.sendNextS_Bottom('这人到底在说什么啊……');
                                } else {
                                    if (status === a++) {
                                        cm.updateInfoQuest(33037, 'npc=1530140');
                                        cm.forceCompleteQuest(33023);
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
function action1530160(d, c, b) {
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
            cm.sendNormalTalk_Bottom('#face0#喂。', 37, 1530150, false, true);
            cm.effect_Voice('Voice2.img/Friends/CALL_hil/1', 100);
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom('#face0#为什么是我接电话？这是我的电话……', 37, 1530150, true, true);
                cm.effect_Voice('Voice2.img/Friends/CALL_hil/3', 100);
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom('......哇啊啊啊啊！！什么啊，这不是我的电话？？', 37, 1530150, true, true);
                    cm.effect_Voice('Voice2.img/Friends/CALL_hil/4', 100);
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom('你，我接了希拉老师电话的事情，不准告诉任何人，知道了吗？！我相信你！', 37, 1530150, true, true);
                        cm.effect_Voice('Voice2.img/Friends/CALL_hil/5', 100);
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom('（嘟，嘟，嘟……）', 37, 1530150, true, true);
                        } else {
                            if (status === a++) {
                                cm.updateInfoQuest(33037, 'npc=' + cm.getNpc());
                                cm.forceCompleteQuest(33023);
                                cm.dispose();
                            }
                        }
                    }
                }
            }
        }
    }
}
function action1530200(d, c, b) {
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
            cm.sendNormalTalk_Bottom('#face0#我知道是你。', 37, 1530200, false, true);
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom('#face0#话说回来，虽然我读了学生写给我的信，但里面有一些不太好理解的单词呢。比如……', 37, 1530200, true, true);
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom('心砰……心砰是什么意思？最近的流行语实在是太难了。', 37, 1530200, true, true);
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom('不，我改变想法了。请不要告诉我。这种东西就是要自己去寻求答案才有趣。', 37, 1530200, true, true);
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom('心砰……心砰……', 37, 1530200, true, true);
                        } else {
                            if (status === a++) {
                                cm.sendNextSNoESC_Bottom('(阿白实习老师似乎完全沉侵其中了。)');
                            } else {
                                if (status === a++) {
                                    cm.updateInfoQuest(33037, 'npc=' + cm.getNpc());
                                    cm.forceCompleteQuest(33023);
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
function action1530574(d, c, b) {
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
            cm.sendNormalTalk_Bottom('谁啊？……啊，哥哥的朋友。', 37, 1530574, false, true);
            cm.effect_Voice('Voice2.img/Friends/CALL_rr/1', 100);
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom('你怎么知道我的电话号码？', 37, 1530574, true, true);
                cm.effect_Voice('Voice2.img/Friends/CALL_rr/2', 100);
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom('#face1#我告诉你的？……什么时候？', 37, 1530574, true, true);
                    cm.effect_Voice('Voice2.img/Friends/CALL_rr/3', 100);
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom('#face1#你就这么打过来了？……为什么？', 37, 1530574, true, true);
                        cm.effect_Voice('Voice2.img/Friends/CALL_rr/4', 100);
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom('#face1#真是无聊的人啊，你就简单说明下为什么要打电话给我吧？', 37, 1530574, true, true);
                            cm.effect_Voice('Voice2.img/Friends/CALL_rr/5', 100);
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom('之前的事情确实要谢谢你。反正我也没打算和那帮人太亲近。', 37, 1530574, true, true);
                                cm.effect_Voice('Voice2.img/Friends/CALL_rr/6', 100);
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom('#face2#你……你说什么？你是说我的语气和那个人很相像吗？', 37, 1530574, true, true);
                                    cm.effect_Voice('Voice2.img/Friends/CALL_rr/7', 100);
                                } else {
                                    if (status === a++) {
                                        cm.updateInfoQuest(33037, 'npc=' + cm.getNpc());
                                        cm.forceCompleteQuest(33023);
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
function action1530220(d, c, b) {
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
            cm.sendNormalTalk_Bottom('你最终还是闯祸了啊。你犯了什么罪？', 37, 1530220, false, true);
            cm.effect_Voice('Voice2.img/Friends/CALL_hel/1', 100);
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom('不用勉强说出来。你可以保持沉默，但你所说的每一句话都将成为呈堂证供。', 37, 1530220, true, true);
                cm.effect_Voice('Voice2.img/Friends/CALL_hel/2', 100);
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom('嗯？你不是打电话来自首的吗？', 37, 1530220, true, true);
                    cm.effect_Voice('Voice2.img/Friends/CALL_hel/3', 100);
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom('那是因为你的身边总是发生事故，我才会这么想。你最终也会闯祸的吧。', 37, 1530220, true, true);
                        cm.effect_Voice('Voice2.img/Friends/CALL_hel/4', 100);
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom('那么……如果在学校又发生了什么事情，你就联系我。', 37, 1530220, true, true);
                            cm.effect_Voice('Voice2.img/Friends/CALL_hel/5', 100);
                        } else {
                            if (status === a++) {
                                cm.updateInfoQuest(33037, 'npc=1530220');
                                cm.forceCompleteQuest(33023);
                                cm.dispose();
                            }
                        }
                    }
                }
            }
        }
    }
}
function actionOrca0(d, c, b) {
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
            cm.sendNormalTalk_Bottom('喂？#h #？', 37, 1530130, false, true);
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom('#face0#什么啊，你真的是跟踪狂啊！我说8点到9点之间可以打电话……你还真就按这个时间点打来了？太可怕了！', 37, 1530130, false, true);
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom('#face0#你问我在做什么？你为什么要问这个？你这个跟踪狂！我挂了！', 37, 1530130, false, true);
                } else {
                    if (status === a++) {
                        cm.addNumberForQuestInfo(33044, 'call', 1);
                        cm.playerMessage(5, '和奥尔卡每天通话，通话了' + cm.getNumberFromQuestInfo(33044, 'call') + '天。');
                        cm.forceStartQuest(33044);
                        cm.dispose();
                    }
                }
            }
        }
    }
}
function actionOrca1(d, c, b) {
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
            cm.sendNormalTalk_Bottom('喂？', 37, 1530130, false, true);
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom('#face0#什么啊，原来是跟踪狂？你今天也按时打给我了？', 37, 1530130, false, true);
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom('#face0#随你打吧。我才不会理你呢！我挂了！', 37, 1530130, false, true);
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom('……', 37, 1530130, false, true);
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom('#face1#我说要挂就会真的挂吗……你这个笨蛋。', 37, 1530130, false, true);
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom('#face0#呃呃呃！什么啊，还没挂？我挂了！！！', 37, 1530130, false, true);
                            } else {
                                if (status === a++) {
                                    cm.addNumberForQuestInfo(33044, 'call', 1);
                                    cm.playerMessage(5, '和奥尔卡每天通话，通话了' + cm.getNumberFromQuestInfo(33044, 'call') + '天。');
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
function actionOrca2(d, c, b) {
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
            cm.sendNormalTalk_Bottom('#face7#我明天还有行程，必须早点睡觉……我挂了…', 37, 1530570, false, true);
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom('#face7#等一下，别挂。到我睡着为止，你给我唱个摇篮曲吧，跟踪狂。', 37, 1530570, false, true);
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom('#face7#你还真是不会唱歌呢，我挂了。', 37, 1530570, false, true);
                } else {
                    if (status === a++) {
                        cm.addNumberForQuestInfo(33044, 'call', 1);
                        cm.playerMessage(5, '和奥尔卡每天通话，通话了' + cm.getNumberFromQuestInfo(33044, 'call') + '天。');
                        cm.dispose();
                    }
                }
            }
        }
    }
}
function actionOrca3(d, c, b) {
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
            cm.sendNormalTalk_Bottom('#face4#喂？跟踪狂？', 37, 1530570, false, true);
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom('#face4#呃……这可怎么办？我现在得去录音了。虽然从8点到9点我一般都没什么事，但如果有行程，就不能通话了。', 37, 1530570, false, true);
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom('#face4#等一下，我现在为什么要跟你辩解啊？我挂了，跟踪狂！', 37, 1530570, false, true);
                } else {
                    if (status === a++) {
                        cm.addNumberForQuestInfo(33044, 'call', 1);
                        cm.playerMessage(5, '和奥尔卡每天通话，通话了' + cm.getNumberFromQuestInfo(33044, 'call') + '天。');
                        cm.dispose();
                    }
                }
            }
        }
    }
}
function actionOrca4(d, c, b) {
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
            cm.sendNormalTalk_Bottom('#face0#你也真是执着呢……好吧，今天又是什么事啊？', 37, 1530570, false, true);
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom('#face0#你问我发生什么好事？为什么突然问这个？', 37, 1530570, false, true);
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom('#face0#我的声音怎么样？听上去很开心吗？', 37, 1530570, false, true);
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom('#face1#那怎么可能呢！这5天都要和你这个跟踪狂打电话！我挂了！', 37, 1530570, false, true);
                    } else {
                        if (status === a++) {
                            cm.addNumberForQuestInfo(33044, 'call', 1);
                            cm.playerMessage(5, '和奥尔卡每天通话，通话了' + cm.getNumberFromQuestInfo(33044, 'call') + '天。');
                            cm.dispose();
                        }
                    }
                }
            }
        }
    }
}
function actionOrca5(d, c, b) {
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
            cm.sendNormalTalk_Bottom('#face8#你为什么现在打电话来！', 37, 1530570, false, true);
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom('#face8#为什么不来上学！', 37, 1530570, false, true);
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom('#face8#奥尔卡好不容易去上一次学！你不是应该去门口等着，迎接我才对吗！', 37, 1530570, false, true);
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom('#face8#不知道！我挂了！', 37, 1530570, false, true);
                    } else {
                        if (status === a++) {
                            cm.addNumberForQuestInfo(33044, 'call', 1);
                            cm.playerMessage(5, '和奥尔卡每天通话，通话了' + cm.getNumberFromQuestInfo(33044, 'call') + '天。');
                            cm.dispose();
                        }
                    }
                }
            }
        }
    }
}
function actionOrca6(d, c, b) {
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
            cm.sendNormalTalk_Bottom('#face7#……喂？', 37, 1530570, false, true);
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom('#face7#……兔子……是我的……嘤……', 37, 1530570, false, true);
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom('#face7#这可不是梦话……我挂了……', 37, 1530570, false, true);
                } else {
                    if (status === a++) {
                        cm.addNumberForQuestInfo(33044, 'call', 1);
                        cm.playerMessage(5, '和奥尔卡每天通话，通话了' + cm.getNumberFromQuestInfo(33044, 'call') + '天。');
                        cm.dispose();
                    }
                }
            }
        }
    }
}
function actionOrca7(d, c, b) {
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
            cm.sendNormalTalk_Bottom('#face3#喂？跟踪狂？', 37, 1530570, false, true);
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom('#face3#奥尔卡现在正在粉丝见面会呢。但是，来的全是一帮丑丑的男人。', 37, 1530570, false, true);
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom('#face5#特别是坐在最前排的男人，盯着奥尔卡，一脸好色的样子……我当偶像还得忍受这些吗 ？真是烦死了，所有人都长得跟游戏开发者一样！！', 37, 1530570, false, true);
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom('#face3#还有……等一下。(奥尔卡放下听筒，喊了什么)', 37, 1530570, false, true);
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom('#face3#我现在得回去了，明天你也会打电话来的吧？', 37, 1530570, false, true);
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom('#face3#知道了，我挂了。', 37, 1530570, false, true);
                            } else {
                                if (status === a++) {
                                    cm.addNumberForQuestInfo(33044, 'call', 1);
                                    cm.playerMessage(5, '和奥尔卡每天通话，通话了' + cm.getNumberFromQuestInfo(33044, 'call') + '天。');
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
function actionOrca8(d, c, b) {
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
            cm.sendNormalTalk_Bottom('#face2#喂？是跟踪狂啊。', 37, 1530570, false, true);
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom('#face2#嗯，没啊，没什么。今天，我因为想见见斯乌，就去探病了。', 37, 1530570, false, true);
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom('#face2#斯乌什么时候才会回来呢？', 37, 1530570, false, true);
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom('#face2#你会偶尔听奥尔卡说话的吧？', 37, 1530570, false, true);
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom('#face2#……好吧，我挂了。', 37, 1530570, false, true);
                        } else {
                            if (status === a++) {
                                cm.addNumberForQuestInfo(33044, 'call', 1);
                                cm.playerMessage(5, '和奥尔卡每天通话，通话了' + cm.getNumberFromQuestInfo(33044, 'call') + '天。');
                                cm.dispose();
                            }
                        }
                    }
                }
            }
        }
    }
}
function actionOrca9(d, c, b) {
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
            cm.sendNormalTalk_Bottom('#face2#喂？跟踪狂？', 37, 1530570, false, true);
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom('#face2#我心情很不好，你说个笑话吧。', 37, 1530570, false, true);
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom('#face0#……那也叫搞笑？', 37, 1530570, false, true);
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom('#face1#我没笑！喂，我可没笑啊？我挂了！', 37, 1530570, false, true);
                    } else {
                        if (status === a++) {
                            cm.addNumberForQuestInfo(33044, 'call', 1);
                            cm.playerMessage(5, '和奥尔卡每天通话，通话了' + cm.getNumberFromQuestInfo(33044, 'call') + '天。');
                            cm.dispose();
                        }
                    }
                }
            }
        }
    }
}
function actionOrca10(d, c, b) {
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
            cm.sendNormalTalk_Bottom('#face3#喂？跟踪狂？', 37, 1530570, false, true);
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom('#face3#我今天心情也很不好，你再说个笑话吧。', 37, 1530570, false, true);
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom('#face4#我很烦吧？你现在觉得无聊了吧？已经联络11天了，你也累了吧？', 37, 1530570, false, true);
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom('#face4#啊，算了，不管了！我挂了！', 37, 1530570, false, true);
                    } else {
                        if (status === a++) {
                            cm.addNumberForQuestInfo(33044, 'call', 1);
                            cm.playerMessage(5, '和奥尔卡每天通话，通话了' + cm.getNumberFromQuestInfo(33044, 'call') + '天。');
                            cm.dispose();
                        }
                    }
                }
            }
        }
    }
}
function actionOrca11(d, c, b) {
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
            cm.sendNormalTalk_Bottom('#face7#喂……？跟踪狂？', 37, 1530570, false, true);
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom('#face7#不知道……我不舒服。没关系，睡一觉就好了。', 37, 1530570, false, true);
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom('#face7#探病？什么探病啊……不用了。', 37, 1530570, false, true);
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom('#face7#跟踪狂，你是不是喜……不，算了。你就当没听见吧。我挂了。', 37, 1530570, false, true);
                    } else {
                        if (status === a++) {
                            cm.addNumberForQuestInfo(33044, 'call', 1);
                            cm.playerMessage(5, '和奥尔卡每天通话，通话了' + cm.getNumberFromQuestInfo(33044, 'call') + '天。');
                            cm.dispose();
                        }
                    }
                }
            }
        }
    }
}
function actionOrca12(d, c, b) {
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
            cm.sendNormalTalk_Bottom('#face6#喂……？跟踪狂？', 37, 1530570, false, true);
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom('#face9#你还真是意志坚定啊…真是被打败了。', 37, 1530570, false, true);
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom('#face6#今天我难得好好睡了一觉。当了偶像之后，不知道有多久没像这样好好睡觉了。', 37, 1530570, false, true);
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom('#face6#……我梦见你了。', 37, 1530570, false, true);
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom('#face6#不知道，那个是秘密。', 37, 1530570, false, true);
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom('#face8#为什么总是问啊？你就这么想知道？我以后再告诉你，挂了。', 37, 1530570, false, true);
                            } else {
                                if (status === a++) {
                                    cm.addNumberForQuestInfo(33044, 'call', 1);
                                    cm.playerMessage(5, '和奥尔卡每天通话，通话了' + cm.getNumberFromQuestInfo(33044, 'call') + '天。');
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
function actionOrca13(d, c, b) {
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
            cm.sendNormalTalk_Bottom('#face0#啊，是跟踪狂，跟踪狂！', 37, 1530570, false, true);
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom('#face0#病？啊，早就好了。你把我奥尔卡看成什么人了？', 37, 1530570, false, true);
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom('#face0#今天我们公司聚餐。是啊，就是黑色之翼娱乐。', 37, 1530570, false, true);
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom('#face0#说到这个，跟踪狂要不要当偶像？和奥尔卡一起做二重唱吧？', 37, 1530570, false, true);
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom('#face0#我是开玩笑的，你怎么还当真了！跟踪狂怎么可能当偶像呢？哈哈哈哈！', 37, 1530570, false, true);
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom('#face0#哈哈哈哈哈！笑死我了！我挂了！', 37, 1530570, false, true);
                            } else {
                                if (status === a++) {
                                    cm.addNumberForQuestInfo(33044, 'call', 1);
                                    cm.playerMessage(5, '和奥尔卡每天通话，通话了' + cm.getNumberFromQuestInfo(33044, 'call') + '天。');
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
function actionOrca14(d, c, b) {
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
            cm.sendNormalTalk_Bottom('#face0#喂？跟踪狂？', 37, 1530570, false, true);
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom('#face0#嗯，今天没什么事吧？', 37, 1530570, false, true);
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom('#face2#你不会因为奥尔卡上次笑得太过了，就生气了吧？我嘲笑跟踪狂不能做偶像…', 37, 1530570, false, true);
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom('#face0#你说你没生气？要是那样的话……', 37, 1530570, false, true);
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom('#face1#等一下！奥尔卡为什么要管你的心情啊！烦死了！我挂了！', 37, 1530570, false, true);
                        } else {
                            if (status === a++) {
                                cm.addNumberForQuestInfo(33044, 'call', 1);
                                cm.playerMessage(5, '和奥尔卡每天通话，通话了' + cm.getNumberFromQuestInfo(33044, 'call') + '天。');
                                cm.dispose();
                            }
                        }
                    }
                }
            }
        }
    }
}
function actionOrca15(d, c, b) {
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
            cm.sendNormalTalk_Bottom('#face3#喂？跟踪狂？', 37, 1530570, false, true);
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom('#face3#嗯，今天跑了三个演出。我们公司真是太没良心了。', 37, 1530570, false, true);
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom('#face3#跟踪狂长大了想做什么？', 37, 1530570, false, true);
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom('#face3#什么？我没听清，你再大声点。', 37, 1530570, false, true);
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom('#face5#什么？跟踪狂居然还有这么伟大的梦想啊？哈哈哈哈哈！！', 37, 1530570, false, true);
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom('#face3#呃，我还是会支持你的。你既然能坚持给奥尔卡打16天的电话，就凭这种韧劲，无论做什么事情都能成功的。', 37, 1530570, false, true);
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom('#face3#那就这样吧……你明天还会打电话的吧？我挂了！', 37, 1530570, false, true);
                                } else {
                                    if (status === a++) {
                                        cm.addNumberForQuestInfo(33044, 'call', 1);
                                        cm.playerMessage(5, '和奥尔卡每天通话，通话了' + cm.getNumberFromQuestInfo(33044, 'call') + '天。');
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
function actionOrca16(d, c, b) {
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
            cm.sendNormalTalk_Bottom('#face1#跟踪狂，重大消息！奥尔卡要去拍电影了！', 37, 1530570, false, true);
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom('#face1#电影的名字？这个嘛，黑……就是反映某个时期的电影，会出现巨大的飞艇，是个大片呢。', 37, 1530570, false, true);
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom('#face1#奥尔卡在其中演的是反派呢。哈哈，我这么美，却要去演反派……不管我做什么坏事，大家都会接受的吧 ？这个选角完全错了嘛 ？', 37, 1530570, false, true);
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom('#face1#你以后来拍摄现场找我玩吧。我挂了！', 37, 1530570, false, true);
                    } else {
                        if (status === a++) {
                            cm.addNumberForQuestInfo(33044, 'call', 1);
                            cm.playerMessage(5, '和奥尔卡每天通话，通话了' + cm.getNumberFromQuestInfo(33044, 'call') + '天。');
                            cm.dispose();
                        }
                    }
                }
            }
        }
    }
}
function actionOrca17(d, c, b) {
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
            cm.sendNormalTalk_Bottom('#face5#呃，跟踪狂……有个坏消息。', 37, 1530570, false, true);
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom('#face5#这个嘛，我们公司的社长说自己也要在电影里客串一下。就是那个挺着肚子的胖老头！', 37, 1530570, false, true);
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom('#face5#不知道，反正估计会是个神经病一类的角色吧。也是，那个比较适合他。哈哈哈！', 37, 1530570, false, true);
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom('#face3#啊，我现在得走了。我挂了！', 37, 1530570, false, true);
                    } else {
                        if (status === a++) {
                            cm.addNumberForQuestInfo(33044, 'call', 1);
                            cm.playerMessage(5, '和奥尔卡每天通话，通话了' + cm.getNumberFromQuestInfo(33044, 'call') + '天。');
                            cm.dispose();
                        }
                    }
                }
            }
        }
    }
}
function actionOrca18(d, c, b) {
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
            cm.sendNormalTalk_Bottom('#face0#喂？跟踪狂？', 37, 1530570, false, true);
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom('#face0#那个，现在开始，我要问你一个很白痴的问题哦？你不要笑，好好听。', 37, 1530570, false, true);
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom('#face2#……爱情是什么？', 37, 1530570, false, true);
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom('#face0#……', 37, 1530570, false, true);
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom('#face1#……', 37, 1530570, false, true);
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom('#face1#啊，算了！我就不该对一个跟踪狂抱有什么希望！我挂了！', 37, 1530570, false, true);
                            } else {
                                if (status === a++) {
                                    cm.addNumberForQuestInfo(33044, 'call', 1);
                                    cm.playerMessage(5, '和奥尔卡每天通话，通话了' + cm.getNumberFromQuestInfo(33044, 'call') + '天。');
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
function actionOrca19(d, c, b) {
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
            cm.sendNormalTalk_Bottom('#face7#兔子……肚子软软的……', 37, 1530570, false, true);
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom('#face7#哎呀……我在睡觉的时候，你为什么要打电话啊……跟踪狂……嘤', 37, 1530570, false, true);
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom('#face7#我挂了……', 37, 1530570, false, true);
                } else {
                    if (status === a++) {
                        cm.addNumberForQuestInfo(33044, 'call', 1);
                        cm.playerMessage(5, '和奥尔卡每天通话，通话了' + cm.getNumberFromQuestInfo(33044, 'call') + '天。');
                        cm.dispose();
                    }
                }
            }
        }
    }
}
function actionOrca20(d, c, b) {
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
            cm.sendNormalTalk_Bottom('#face2#喂？跟踪狂？', 37, 1530570, false, true);
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom('#face2#嗯……没什么，只不过今天心情有点那个。', 37, 1530570, false, true);
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom('#face2#那，明天我们再通话吧。我挂了。', 37, 1530570, false, true);
                } else {
                    if (status === a++) {
                        cm.addNumberForQuestInfo(33044, 'call', 1);
                        cm.playerMessage(5, '和奥尔卡每天通话，通话了' + cm.getNumberFromQuestInfo(33044, 'call') + '天。');
                        cm.dispose();
                    }
                }
            }
        }
    }
}
function actionOrca21(d, c, b) {
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
            cm.sendNormalTalk_Bottom('#face2#喂？跟踪狂？', 37, 1530570, false, true);
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom('#face2#嗯……要说昨天发生了什么事呢。', 37, 1530570, false, true);
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom('#face2#有个挺红的男生偶像要了我的号码。从昨天开始就一直给我打电话。', 37, 1530570, false, true);
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom('#face2#你听到这种话，心情怎么样？没觉得怎么样吗？', 37, 1530570, false, true);
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom('#face2#哈……算了，我挂了。', 37, 1530570, false, true);
                        } else {
                            if (status === a++) {
                                cm.addNumberForQuestInfo(33044, 'call', 1);
                                cm.playerMessage(5, '和奥尔卡每天通话，通话了' + cm.getNumberFromQuestInfo(33044, 'call') + '天。');
                                cm.dispose();
                            }
                        }
                    }
                }
            }
        }
    }
}
function actionOrca22(d, c, b) {
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
            cm.sendNormalTalk_Bottom('#face4#我挂了。', 37, 1530570, false, true);
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom('#face4#啊，算了，我挂了。', 37, 1530570, false, true);
            } else {
                if (status === a++) {
                    cm.addNumberForQuestInfo(33044, 'call', 1);
                    cm.playerMessage(5, '和奥尔卡每天通话，通话了' + cm.getNumberFromQuestInfo(33044, 'call') + '天。');
                    cm.dispose();
                }
            }
        }
    }
}
function actionOrca23(d, c, b) {
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
            cm.sendNormalTalk_Bottom('#face4#什么啊，跟踪狂啊。我挂了。', 37, 1530570, false, true);
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom('#face4#什么？你不知道我为什么生气吗？我挂了。', 37, 1530570, false, true);
            } else {
                if (status === a++) {
                    cm.addNumberForQuestInfo(33044, 'call', 1);
                    cm.playerMessage(5, '和奥尔卡每天通话，通话了' + cm.getNumberFromQuestInfo(33044, 'call') + '天。');
                    cm.dispose();
                }
            }
        }
    }
}
function actionOrca24(d, c, b) {
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
            cm.sendNormalTalk_Bottom('#face8#跟踪狂，我挂了。', 37, 1530570, false, true);
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom('#face8#你说对不起？你有什么对不起我的？我挂了。', 37, 1530570, false, true);
            } else {
                if (status === a++) {
                    cm.addNumberForQuestInfo(33044, 'call', 1);
                    cm.playerMessage(5, '和奥尔卡每天通话，通话了' + cm.getNumberFromQuestInfo(33044, 'call') + '天。');
                    cm.dispose();
                }
            }
        }
    }
}
function actionOrca25(d, c, b) {
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
            cm.sendNormalTalk_Bottom('#face2#喂？跟踪狂？', 37, 1530570, false, true);
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom('#face2#……', 37, 1530570, false, true);
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom('#face2#……', 37, 1530570, false, true);
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom('#face2#……我想见你。', 37, 1530570, false, true);
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom('#face2#嗯……好，一会儿见。我挂了。', 37, 1530570, false, true);
                        } else {
                            if (status === a++) {
                                cm.addNumberForQuestInfo(33044, 'call', 1);
                                cm.playerMessage(5, '和奥尔卡每天通话，通话了' + cm.getNumberFromQuestInfo(33044, 'call') + '天。');
                                cm.dispose();
                            }
                        }
                    }
                }
            }
        }
    }
}
function actionOrca26(d, c, b) {
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
            cm.sendNormalTalk_Bottom('#face0#喂？', 37, 1530570, false, true);
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom('#face0#所以……嗯……奥尔卡……有很多话想和你说。', 37, 1530570, false, true);
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom('#face0#嗯，知道了。今后我们多多打电话吧……我挂了。', 37, 1530570, false, true);
                } else {
                    if (status === a++) {
                        cm.addNumberForQuestInfo(33044, 'call', 1);
                        cm.playerMessage(5, '和奥尔卡每天通话，通话了' + cm.getNumberFromQuestInfo(33044, 'call') + '天。');
                        cm.dispose();
                    }
                }
            }
        }
    }
}
function actionOrca27(d, c, b) {
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
            cm.sendNormalTalk_Bottom('#face6#上次我跟你说过那个梦吧？', 37, 1530570, false, true);
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom('#face6#嗯……就是，你出现在了奥尔卡的梦里。', 37, 1530570, false, true);
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom('#face9#算了，还是不说了。你会以为我是变态的。', 37, 1530570, false, true);
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom('#face9#什么？你不要想歪了啊！我挂了！', 37, 1530570, false, true);
                    } else {
                        if (status === a++) {
                            cm.addNumberForQuestInfo(33044, 'call', 1);
                            cm.playerMessage(5, '和奥尔卡每天通话，通话了' + cm.getNumberFromQuestInfo(33044, 'call') + '天。');
                            cm.dispose();
                        }
                    }
                }
            }
        }
    }
}
function actionOrca28(d, c, b) {
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
            cm.sendNormalTalk_Bottom('#face6#那个，你有没有玩过枕头大战？', 37, 1530570, false, true);
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom('#face6#嗯？奥尔卡一次都没玩过呢。因为我没去过修学旅行。', 37, 1530570, false, true);
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom('#face6#你问我想不想玩？你说什么呢，奥尔卡才不喜欢那种幼稚的游戏！', 37, 1530570, false, true);
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom('#face9#但是，如果要玩枕头大战，奥尔卡一定会用枕头狠狠打你的头的。不过你可不能打奥尔卡哦。你只要乖乖被打就行。', 37, 1530570, false, true);
                    } else {
                        if (status === a++) {
                            cm.askMenu_Bottom('#face9#你想被奥尔卡打吗？\r\n#b#L0#我会乖乖挨打的#l\r\n#L1#你就试试吧#l', 37, 1530570);
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom('#face9#哈哈，这可是你说的啊？我挂了。', 37, 1530570, false, true);
                            } else {
                                if (status === a++) {
                                    cm.addNumberForQuestInfo(33044, 'call', 1);
                                    cm.playerMessage(5, '和奥尔卡每天通话，通话了' + cm.getNumberFromQuestInfo(33044, 'call') + '天。');
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
function actionOrca29(d, c, b) {
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
            cm.sendNormalTalk_Bottom('#face0#喂？跟踪狂？', 37, 1530570, false, true);
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom('#face0#出大事了。奥尔卡的电话号码被泄露了，总是有奇怪的电话打进来。长得太漂亮也是很累人的，是吧 ？', 37, 1530570, false, true);
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom('#face0#总之，我接下来有段时间不能和你打电话了。', 37, 1530570, false, true);
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom('#face0#哎，你担心什么啊？我们的关系是很特别的，不是吗？', 37, 1530570, false, true);
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom('#face0#那个，今天是跟踪狂给我打电话的第30天了。你知道吗？', 37, 1530570, false, true);
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom('#face1#哼，什么啊，连日子都记不住，我挂了！', 37, 1530570, false, true);
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom('#face0#……', 37, 1530570, false, true);
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom('#face2#……', 37, 1530570, false, true);
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom('#face0#……等一下。', 37, 1530570, false, true);
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk_Bottom('#face0#不要挂，我们再聊会儿吧。', 37, 1530570, false, true);
                                            } else {
                                                if (status === a++) {
                                                    cm.addNumberForQuestInfo(33044, 'call', 1);
                                                    cm.playerMessage(5, '和奥尔卡每天通话，通话了' + cm.getNumberFromQuestInfo(33044, 'call') + '天。');
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