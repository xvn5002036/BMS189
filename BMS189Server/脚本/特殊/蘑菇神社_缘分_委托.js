var status = -1;
var selectionLog = [];
function start() {
    action(1, 0, 0);
}
function action(mode, type, selection) {
    if (cm.isQuestActive(58714)) {
        cm.playerMessage(5, '每次只能向一个人提交委托。');
        cm.playerMessage(-1, '每次只能向一个人提交委托。');
        cm.dispose();
    } else {
        var reactor = 'action' + cm.getNpc();
        eval(reactor)(mode, type, selection);
    }
}
function action0(e, d, c) {
    if (status == 0 && e == 0) {
        cm.dispose();
        return;
    }
    e == 1 ? status++ : status--;
    selectionLog[status] = c;
    var a = -1;
    if (status <= a++) {
        cm.dispose();
    } else {
        if (status === a++) {
            cm.sendNormalTalk_Bottom(' #p' + (9111000 + cm.getNpc()) + '#，今天你能不能为我做件事？', 57, 0, false, true);
        } else {
            if (status === a++) {
                todo1();
            } else {
                if (status === a++) {
                    todo2();
                } else {
                    if (status === a++) {
                        var b = cm.rand(1, 3);
                        switch (b) {
                        case 1:
                            cm.sendNormalTalk_Bottom('#face0#虽然很不情愿，但既然是你的委托，我就走一趟吧。', 37, 9111000, true, true);
                            break;
                        case 2:
                            cm.sendNormalTalk_Bottom('#face2#你的委托总是让我很为难。', 37, 9111000, true, true);
                            break;
                        case 3:
                            cm.sendNormalTalk_Bottom('#face1#你真的就拜托这点小事吗？太简单了吧……', 37, 9111000, true, true);
                            break;
                        }
                    } else {
                        if (status === a++) {
                            cm.forceStartQuest(58714, '');
                            cm.dispose();
                            cm.setNumberForQuestInfo(58715, 'ing', 1);
                            cm.setNumberForQuestInfo(58715, 'npc', 9111000 + cm.getNpc());
                            cm.setNumberForQuestInfo(58715, 'last', new Date().getTime());
                        }
                    }
                }
            }
        }
    }
}
function action1(e, d, c) {
    if (status == 0 && e == 0) {
        cm.dispose();
        return;
    }
    e == 1 ? status++ : status--;
    selectionLog[status] = c;
    var a = -1;
    if (status <= a++) {
        cm.dispose();
    } else {
        if (status === a++) {
            cm.sendNormalTalk_Bottom(' #p' + (9111000 + cm.getNpc()) + '#，今天你能不能为我做件事？', 57, 0, false, true);
        } else {
            if (status === a++) {
                todo1();
            } else {
                if (status === a++) {
                    todo2();
                } else {
                    if (status === a++) {
                        var b = cm.rand(1, 3);
                        switch (b) {
                        case 1:
                            cm.sendNormalTalk_Bottom('#face1#哦……这事……，虽然有点为难，不过你放心吧。', 37, 9111001, true, true);
                            break;
                        case 2:
                            cm.sendNormalTalk_Bottom('#face2#没想到勇士你是位浪漫主义者。', 37, 9111001, true, true);
                            break;
                        case 3:
                            cm.sendNormalTalk_Bottom('#face0#呵呵，应该很有意思。我去去就来。', 37, 9111001, true, true);
                            break;
                        }
                    } else {
                        if (status === a++) {
                            cm.forceStartQuest(58714, '');
                            cm.dispose();
                            cm.setNumberForQuestInfo(58715, 'ing', 1);
                            cm.setNumberForQuestInfo(58715, 'npc', 9111000 + cm.getNpc());
                            cm.setNumberForQuestInfo(58715, 'last', new Date().getTime());
                        }
                    }
                }
            }
        }
    }
}
function action2(e, d, c) {
    if (status == 0 && e == 0) {
        cm.dispose();
        return;
    }
    e == 1 ? status++ : status--;
    selectionLog[status] = c;
    var a = -1;
    if (status <= a++) {
        cm.dispose();
    } else {
        if (status === a++) {
            cm.sendNormalTalk_Bottom(' #p' + (9111000 + cm.getNpc()) + '#，今天你能不能为我做件事？', 57, 0, false, true);
        } else {
            if (status === a++) {
                todo1();
            } else {
                if (status === a++) {
                    todo2();
                } else {
                    if (status === a++) {
                        var b = cm.rand(1, 4);
                        switch (b) {
                        case 1:
                            cm.sendNormalTalk_Bottom('#face1#哈哈，包在我身上。', 37, 9111002, true, true);
                            break;
                        case 2:
                            cm.sendNormalTalk_Bottom('#face2#……，啊，这事我不太擅长啊？哈哈，不过就算搞砸了我也不用担心。哈哈哈哈哈', 37, 9111002, true, true);
                            break;
                        case 3:
                            cm.sendNormalTalk_Bottom('#face2#我很快就回来～对了，没事的时候也多来看看我嘛。', 37, 9111002, true, true);
                            break;
                        case 4:
                            cm.sendNormalTalk_Bottom('#face0#这事是我的专长！', 37, 9111002, true, true);
                            break;
                        }
                    } else {
                        if (status === a++) {
                            cm.forceStartQuest(58714, '');
                            cm.dispose();
                            cm.setNumberForQuestInfo(58715, 'ing', 1);
                            cm.setNumberForQuestInfo(58715, 'npc', 9111000 + cm.getNpc());
                            cm.setNumberForQuestInfo(58715, 'last', new Date().getTime());
                        }
                    }
                }
            }
        }
    }
}
function action3(e, d, c) {
    if (status == 0 && e == 0) {
        cm.dispose();
        return;
    }
    e == 1 ? status++ : status--;
    selectionLog[status] = c;
    var a = -1;
    if (status <= a++) {
        cm.dispose();
    } else {
        if (status === a++) {
            cm.sendNormalTalk_Bottom(' #p' + (9111000 + cm.getNpc()) + '#，今天你能不能为我做件事？', 57, 0, false, true);
        } else {
            if (status === a++) {
                todo1();
            } else {
                if (status === a++) {
                    todo2();
                } else {
                    if (status === a++) {
                        var b = cm.rand(1, 3);
                        switch (b) {
                        case 1:
                            cm.sendNormalTalk_Bottom('#face2#诶，你这家伙怎么每天都要使唤我这老头子哦……', 37, 9111003, true, true);
                            break;
                        case 2:
                            cm.sendNormalTalk_Bottom('#face2#呵呵，虽然不知道你为什么提出这样的委托，不过好像很有意思，哈哈哈哈。', 37, 9111003, true, true);
                            break;
                        case 3:
                            cm.sendNormalTalk_Bottom('#face1#咳咳，那我就当活动活动筋骨吧。', 37, 9111003, true, true);
                            break;
                        }
                    } else {
                        if (status === a++) {
                            cm.forceStartQuest(58714, '');
                            cm.dispose();
                            cm.setNumberForQuestInfo(58715, 'ing', 1);
                            cm.setNumberForQuestInfo(58715, 'npc', 9111000 + cm.getNpc());
                            cm.setNumberForQuestInfo(58715, 'last', new Date().getTime());
                        }
                    }
                }
            }
        }
    }
}
function action4(e, d, c) {
    if (status == 0 && e == 0) {
        cm.dispose();
        return;
    }
    e == 1 ? status++ : status--;
    selectionLog[status] = c;
    var a = -1;
    if (status <= a++) {
        cm.dispose();
    } else {
        if (status === a++) {
            cm.sendNormalTalk_Bottom(' #p' + (9111000 + cm.getNpc()) + '#，今天你能不能为我做件事？', 57, 0, false, true);
        } else {
            if (status === a++) {
                todo1();
            } else {
                if (status === a++) {
                    todo2();
                } else {
                    if (status === a++) {
                        var b = cm.rand(1, 3);
                        switch (b) {
                        case 1:
                            cm.sendNormalTalk_Bottom('#face2#…………。这事我绝对不……唉……我这就去。', 37, 9111004, true, true);
                            break;
                        case 2:
                            cm.sendNormalTalk_Bottom('#face1#你还是第一次向我拜托这种事……', 37, 9111004, true, true);
                            break;
                        case 3:
                            cm.sendNormalTalk_Bottom('#face0#我不是很想做哦！！……我……我可不是因为不会做才不答应！！！', 37, 9111004, true, true);
                            break;
                        }
                    } else {
                        if (status === a++) {
                            cm.forceStartQuest(58714, '');
                            cm.dispose();
                            cm.setNumberForQuestInfo(58715, 'ing', 1);
                            cm.setNumberForQuestInfo(58715, 'npc', 9111000 + cm.getNpc());
                            cm.setNumberForQuestInfo(58715, 'last', new Date().getTime());
                        }
                    }
                }
            }
        }
    }
}
function action5(e, d, c) {
    if (status == 0 && e == 0) {
        cm.dispose();
        return;
    }
    e == 1 ? status++ : status--;
    selectionLog[status] = c;
    var a = -1;
    if (status <= a++) {
        cm.dispose();
    } else {
        if (status === a++) {
            cm.sendNormalTalk_Bottom(' #p' + (9111000 + cm.getNpc()) + '#，今天你能不能为我做件事？', 57, 0, false, true);
        } else {
            if (status === a++) {
                todo1();
            } else {
                if (status === a++) {
                    todo2();
                } else {
                    if (status === a++) {
                        var b = cm.rand(1, 3);
                        switch (b) {
                        case 1:
                            cm.sendNormalTalk_Bottom('#face2#你是故意想用这任务刁难我吗？那我可得好好让你开开眼界。', 37, 9111005, true, true);
                            break;
                        case 2:
                            cm.sendNormalTalk_Bottom('#face0#你这委托让我有点尴尬啊？不过我还是亮亮身手吧。', 37, 9111005, true, true);
                            break;
                        case 3:
                            cm.sendNormalTalk_Bottom('#face1#做这样的事最需要细心。', 37, 9111005, true, true);
                            break;
                        case 4:
                            cm.sendNormalTalk_Bottom('#face2#唉，你干嘛每次都叫我做这个？总之你过30分钟再看吧。', 37, 9111005, true, true);
                            break;
                        }
                    } else {
                        if (status === a++) {
                            cm.forceStartQuest(58714, '');
                            cm.dispose();
                            cm.setNumberForQuestInfo(58715, 'ing', 1);
                            cm.setNumberForQuestInfo(58715, 'npc', 9111000 + cm.getNpc());
                            cm.setNumberForQuestInfo(58715, 'last', new Date().getTime());
                        }
                    }
                }
            }
        }
    }
}
function action6(e, d, c) {
    if (status == 0 && e == 0) {
        cm.dispose();
        return;
    }
    e == 1 ? status++ : status--;
    selectionLog[status] = c;
    var a = -1;
    if (status <= a++) {
        cm.dispose();
    } else {
        if (status === a++) {
            cm.sendNormalTalk_Bottom(' #p' + (9111000 + cm.getNpc()) + '#，今天你能不能为我做件事？', 57, 0, false, true);
        } else {
            if (status === a++) {
                todo1();
            } else {
                if (status === a++) {
                    todo2();
                } else {
                    if (status === a++) {
                        var b = cm.rand(1, 3);
                        switch (b) {
                        case 1:
                            cm.sendNormalTalk_Bottom('#face1#不……不要……唉……我去去就来……。', 37, 9111006, true, true);
                            break;
                        case 2:
                            cm.sendNormalTalk_Bottom('#face0#我真的很喜欢做这个呢！', 37, 9111006, true, true);
                            break;
                        case 3:
                            cm.sendNormalTalk_Bottom('#face2#好……好难为情的委托啊。我这就去做。', 37, 9111006, true, true);
                            break;
                        }
                    } else {
                        if (status === a++) {
                            cm.forceStartQuest(58714, '');
                            cm.dispose();
                            cm.setNumberForQuestInfo(58715, 'ing', 1);
                            cm.setNumberForQuestInfo(58715, 'npc', 9111000 + cm.getNpc());
                            cm.setNumberForQuestInfo(58715, 'last', new Date().getTime());
                        }
                    }
                }
            }
        }
    }
}
function action7(e, d, c) {
    if (status == 0 && e == 0) {
        cm.dispose();
        return;
    }
    e == 1 ? status++ : status--;
    selectionLog[status] = c;
    var a = -1;
    if (status <= a++) {
        cm.dispose();
    } else {
        if (status === a++) {
            cm.sendNormalTalk_Bottom(' #p' + (9111000 + cm.getNpc()) + '#，今天你能不能为我做件事？', 57, 0, false, true);
        } else {
            if (status === a++) {
                todo1();
            } else {
                if (status === a++) {
                    todo2();
                } else {
                    if (status === a++) {
                        var b = cm.rand(1, 5);
                        switch (b) {
                        case 1:
                            cm.sendNormalTalk_Bottom('#face1#哎呀，人家的衣服可能会被搞脏耶……洗衣费你出哦？', 37, 9111007, true, true);
                            break;
                        case 2:
                            cm.sendNormalTalk_Bottom('#face1#这事就交给我吧，呵呵。', 37, 9111007, true, true);
                            break;
                        case 3:
                            cm.sendNormalTalk_Bottom('#face0#呵呵，这种事你该私下拜托我嘛。我去去就回。', 37, 9111007, true, true);
                            break;
                        case 4:
                            cm.sendNormalTalk_Bottom('#face2#呜喔，好像很难办到耶……我试试吧。', 37, 9111007, true, true);
                            break;
                        case 5:
                            cm.sendNormalTalk_Bottom('#face2#哎呀，你怎么叫我做这个……人们这下有好戏看了。', 37, 9111007, true, true);
                            break;
                        }
                    } else {
                        if (status === a++) {
                            cm.forceStartQuest(58714, '');
                            cm.dispose();
                            cm.setNumberForQuestInfo(58715, 'ing', 1);
                            cm.setNumberForQuestInfo(58715, 'npc', 9111000 + cm.getNpc());
                            cm.setNumberForQuestInfo(58715, 'last', new Date().getTime());
                        }
                    }
                }
            }
        }
    }
}
function action8(e, d, c) {
    if (status == 0 && e == 0) {
        cm.dispose();
        return;
    }
    e == 1 ? status++ : status--;
    selectionLog[status] = c;
    var a = -1;
    if (status <= a++) {
        cm.dispose();
    } else {
        if (status === a++) {
            cm.sendNormalTalk_Bottom(' #p' + (9111000 + cm.getNpc()) + '#，今天你能不能为我做件事？', 57, 0, false, true);
        } else {
            if (status === a++) {
                todo1();
            } else {
                if (status === a++) {
                    todo2();
                } else {
                    if (status === a++) {
                        var b = cm.rand(1, 3);
                        switch (b) {
                        case 1:
                            cm.sendNormalTalk_Bottom('#face1#你到底为什么叫我做这事哦？', 37, 9111008, true, true);
                            break;
                        case 2:
                            cm.sendNormalTalk_Bottom('#face2#话说你为什么每次都是空手来找我办事啊？偶尔也要带点礼物来嘛？', 37, 9111008, true, true);
                            break;
                        case 3:
                            cm.sendNormalTalk_Bottom('#face0#……。（啪啦）。', 37, 9111008, true, true);
                            break;
                        }
                    } else {
                        if (status === a++) {
                            cm.forceStartQuest(58714, '');
                            cm.dispose();
                            cm.setNumberForQuestInfo(58715, 'ing', 1);
                            cm.setNumberForQuestInfo(58715, 'npc', 9111000 + cm.getNpc());
                            cm.setNumberForQuestInfo(58715, 'last', new Date().getTime());
                        }
                    }
                }
            }
        }
    }
}
function action9(e, d, c) {
    if (status == 0 && e == 0) {
        cm.dispose();
        return;
    }
    e == 1 ? status++ : status--;
    selectionLog[status] = c;
    var a = -1;
    if (status <= a++) {
        cm.dispose();
    } else {
        if (status === a++) {
            cm.sendNormalTalk_Bottom(' #p' + (9111000 + cm.getNpc()) + '#，今天你能不能为我做件事？', 57, 0, false, true);
        } else {
            if (status === a++) {
                todo1();
            } else {
                if (status === a++) {
                    todo2();
                } else {
                    if (status === a++) {
                        var b = cm.rand(1, 3);
                        switch (b) {
                        case 1:
                            cm.sendNormalTalk_Bottom('#face1#嘿嘿，这点小事啊！我只需开动我的机器就能搞定。', 37, 9111009, true, true);
                            break;
                        case 2:
                            cm.sendNormalTalk_Bottom('#face0#必须由我来做吗？你去拜托其他人不行吗？唉，我这就去。', 37, 9111009, true, true);
                            break;
                        case 3:
                            cm.sendNormalTalk_Bottom('#face2#是！我马上就去～', 37, 9111009, true, true);
                            break;
                        }
                    } else {
                        if (status === a++) {
                            cm.forceStartQuest(58714, '');
                            cm.dispose();
                            cm.setNumberForQuestInfo(58715, 'ing', 1);
                            cm.setNumberForQuestInfo(58715, 'npc', 9111000 + cm.getNpc());
                            cm.setNumberForQuestInfo(58715, 'last', new Date().getTime());
                        }
                    }
                }
            }
        }
    }
}
var npcs = [
    '木野子',
    '竹野子',
    '棘鬼',
    '镰鼬',
    '鵺',
    '无头鬼',
    '暗',
    '泉奈',
    '天狗',
    '万事屋'
];
var maps = [
    300000000,
    270000000,
    102000000,
    120000100,
    140000000,
    101000000,
    260000000,
    103000000,
    240000000,
    104000000
];
var acts = [
    '什么都不做',
    '制作便当',
    '采矿',
    '唱歌',
    '消灭999只怪物',
    '消灭999只怪物',
    '采药',
    '跳舞',
    '连续翻滚18次',
    '砍树',
    '送餐',
    '送餐',
    '探索',
    '捡空瓶',
    '看风景',
    '寻找食物',
    '打扫卫生',
    '挖地'
];
function todo1() {
    var b = '我要拜托的事情是……';
    var a = cm.rand(0, acts.length - 1);
    b += '\r\n请到 #r#L' + a + '##m' + maps[cm.rand(0, maps.length - 1)] + '#去' + acts[a] + '。#l';
    cm.askMenu_Bottom(b, 56, 0);
}
function todo2() {
    var a = 0;
    if (selection[status] == a++) {
        cm.sendNormalTalk_Bottom('静静地什么都不做的话，可能会发生什么事呢。', 57, 0, false, true);
    } else {
        if (selection[status] == a++) {
            cm.sendNormalTalk_Bottom('我喜欢吃肉，肉肉最美味啦。', 57, 0, false, true);
        } else {
            if (selection[status] == a++) {
                cm.sendNormalTalk_Bottom('我想用矿石制作装备。', 57, 0, false, true);
            } else {
                if (selection[status] == a++) {
                    cm.sendNormalTalk_Bottom('唱首动听的歌曲，也许能让冒险岛世界的人们感到幸福哦。', 57, 0, false, true);
                } else {
                    if (selection[status] == a++) {
                        cm.sendNormalTalk_Bottom('你去体验一下999只怪物到底是多庞大的数量吧。', 57, 0, false, true);
                    } else {
                        if (selection[status] == a++) {
                            cm.sendNormalTalk_Bottom('这是我常做的任务，相信你会做得很好的。', 57, 0, false, true);
                        } else {
                            if (selection[status] == a++) {
                                cm.sendNormalTalk_Bottom('我想用药草制作药水。', 57, 0, false, true);
                            } else {
                                if (selection[status] == a++) {
                                    cm.sendNormalTalk_Bottom('跳支最新的流行舞蹈吧……', 57, 0, false, true);
                                } else {
                                    if (selection[status] == a++) {
                                        cm.sendNormalTalk_Bottom('听说常常翻滚对健康有益哦？', 57, 0, false, true);
                                    } else {
                                        if (selection[status] == a++) {
                                            cm.sendNormalTalk_Bottom('木材是十分有用的材料，无论在哪里都能派上用场。', 57, 0, false, true);
                                        } else {
                                            if (selection[status] == a++) {
                                                cm.sendNormalTalk_Bottom('我偶尔也想实践下与人分享的美德。帮我送餐吧。', 57, 0, false, true);
                                            } else {
                                                if (selection[status] == a++) {
                                                    cm.sendNormalTalk_Bottom('为了不让冒险岛世界的街坊们饿肚子，给他们送餐吧。', 57, 0, false, true);
                                                } else {
                                                    if (selection[status] == a++) {
                                                        cm.sendNormalTalk_Bottom('在探索过程中，可能会有意外发现！', 57, 0, false, true);
                                                    } else {
                                                        if (selection[status] == a++) {
                                                            cm.sendNormalTalk_Bottom('空瓶可以拿来卖，也是个赚金币的路子。', 57, 0, false, true);
                                                        } else {
                                                            if (selection[status] == a++) {
                                                                cm.sendNormalTalk_Bottom('偶尔欣赏下周围的风景也是蛮好的。', 57, 0, false, true);
                                                            } else {
                                                                if (selection[status] == a++) {
                                                                    cm.sendNormalTalk_Bottom('我肚子有点饿……', 57, 0, false, true);
                                                                } else {
                                                                    if (selection[status] == a++) {
                                                                        cm.sendNormalTalk_Bottom('为了保持冒险岛世界的环境清洁，请打扫卫生。', 57, 0, false, true);
                                                                    } else {
                                                                        if (selection[status] == a++) {
                                                                            cm.sendNormalTalk_Bottom('我听说最近从地下挖出了各种宝贝。', 57, 0, false, true);
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
                    }
                }
            }
        }
    }
}