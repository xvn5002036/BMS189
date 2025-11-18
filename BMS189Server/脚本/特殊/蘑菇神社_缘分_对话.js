var status = -1;
var selectionLog = [];
function start() {
    action(1, 0, 0);
}
function action(mode, type, selection) {
    if (mode <= 0) {
        cm.dispose();
    } else {
        var reactor = 'action' + cm.getNpc();
        eval(reactor)(mode, type, selection);
    }
}
function action0(mode, type, selection) {
    if (inTalkCD()) {
        cm.sendNormalTalk_Bottom('#face0#我现在只想休息，不想说话。', 37, 9111000, false, false);
        cm.dispose();
        return;
    }
    if (status == 0 && mode == 0) {
        cm.dispose();
        return;
    }
    mode == 1 ? status++ : status--;
    selectionLog[status] = selection;
    var i = -1;
    if (status <= i++) {
        cm.dispose();
    } else {
        if (status === i++) {
            var value = cm.getNumberFromQuestInfo(58710, '' + cm.getNpc());
            if (value >= 70) {
                cm.sendNormalTalk_Bottom('#face0#很高兴见到你，勇士。', 37, 9111000, false, true);
            } else {
                if (value >= 50) {
                    cm.sendNormalTalk_Bottom('#face0#我今天心情好，就跟你聊聊吧', 37, 9111000, false, true);
                } else {
                    cm.sendNormalTalk_Bottom('#face2#你有话跟我说吗……？', 37, 9111000, false, true);
                }
            }
        } else {
            if (status === i++) {
                cm.askMenu_Bottom('\r\n#L0#谈论竹野子的事。#l\r\n#L1#谈论妖怪的事。#l\r\n#L2#谈论蘑菇神社的事。#l', 56, 0);
            } else {
                if (status === i++) {
                    if (selectionLog[2] == 0) {
                        cm.sendNormalTalk_Bottom('请跟我说说竹野子的事。', 57, 0, false, true);
                    } else {
                        if (selectionLog[2] == 1) {
                            cm.sendNormalTalk_Bottom('我们聊聊妖怪怎么样？', 57, 0, false, true);
                        } else {
                            cm.sendNormalTalk_Bottom('请跟我说说蘑菇神社的事。', 57, 0, false, true);
                        }
                    }
                } else {
                    if (status === i++) {
                        if (selectionLog[2] == 0) {
                            cm.askMenu_Bottom('\r\n#L0#木野子好像非常爱护竹野子。#l\r\n#L1#木野子好像对竹野子有点保护过头了。#l\r\n#L2#我知道你对竹野子保护过度都是为她好。#l', 56, 0);
                        } else {
                            if (selectionLog[2] == 1) {
                                cm.askMenu_Bottom('\r\n#L0#请给我说说狸猫妖怪的事吧……#l\r\n#L1#请给我说说半人半妖的事吧。#l\r\n#L2#妖怪和人类为什么关系不好？#l', 56, 0);
                            } else {
                                cm.askMenu_Bottom('\r\n#L0#健二大叔……#l\r\n#L1#被藏起来的妹妹。#l\r\n#L2#蘑菇神社的其他巫女#l', 56, 0);
                            }
                        }
                    } else {
                        var reactor = 'action分支' + cm.getNpc() + '_' + selectionLog[2] + '_' + selectionLog[4];
                        eval(reactor)(mode, type, selection, i);
                    }
                }
            }
        }
    }
}
function action分支0_0_0(d, c, b, a) {
    if (status <= a++) {
        cm.sendNormalTalk_Bottom('#face0#。……她是我唯一的血亲。即使是在我们搬来蘑菇神社之前那段艰难的时期，她也总是不顾自己的病体，尽力想照顾我。', 37, 9110002, false, true);
    } else {
        if (status === a++) {
            cm.sendNormalTalk_Bottom('#face1#在我们忍饥挨饿的时候，她偶然遇到健二大叔，她把大叔给她的面包带回来，就先给我吃。', 37, 9110002, true, true);
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom('#face3#当时我就握着竹野子的小手发过誓，这辈子我要为她而活。', 37, 9110002, true, true);
            } else {
                if (status === a++) {
                    cm.askMenu_Bottom('\r\n#L0#……我也要一起守护竹野子。#l\r\n#L1#竹野子真是个心地善良的孩子。#l\r\n#L2#会不会是因为面包不好吃？#l', 56, 0);
                } else {
                    if (status === a++) {
                        if (selectionLog[status] == 0) {
                            cm.sendNormalTalk_Bottom('#face0#要想获得守护竹野子的资格，你还差得很远。', 37, 9110002, false, true);
                            gain(1);
                        } else {
                            if (selectionLog[status] == 1) {
                                cm.sendNormalTalk_Bottom('#face0#在日本这片土地上，没有人能比竹野子更善良。谢谢你这样看重她。', 37, 9110002, false, true);
                                gain(2);
                            } else {
                                cm.sendNormalTalk_Bottom('#face1#呵，你的想法也有道理。对于喜欢甜食的竹野子来说，面包的味道太淡了。', 37, 9110002, false, true);
                                gain(3);
                            }
                        }
                    }
                }
            }
        }
    }
}
function action分支0_0_1(d, c, b, a) {
    if (status <= a++) {
        cm.sendNormalTalk_Bottom('#face0#你真的觉得我对她保护过度了吗？……在我眼中她还只是个小女孩。', 37, 9110002, false, true);
    } else {
        if (status === a++) {
            cm.sendNormalTalk_Bottom('#face2#而且她很容易被人利用……', 37, 9110002, true, true);
        } else {
            if (status === a++) {
                cm.askMenu_Bottom('\r\n#L0#竹野子有时候……显得很郁闷呢。#l\r\n#L1#这样一想，就能理解木野子的心情了。#l\r\n#L2#真正被利用的，是木野子吧？#l', 56, 0);
            } else {
                if (status === a++) {
                    if (selectionLog[status] == 0) {
                        cm.sendNormalTalk_Bottom('#face0#这事不是你可以过问的。这话以后不要再提。', 37, 9110002, false, true);
                        gain(1);
                    } else {
                        if (selectionLog[status] == 1) {
                            cm.sendNormalTalk_Bottom('#face0#……如果竹野子也这么想就好了。', 37, 9110002, false, true);
                            gain(3);
                        } else {
                            cm.sendNormalTalk_Bottom('#face0#……是啊……因为我的幼稚，让竹野子受苦了……', 37, 9110002, false, true);
                            gain(2);
                        }
                    }
                }
            }
        }
    }
}
function action分支0_0_2(d, c, b, a) {
    if (status <= a++) {
        cm.sendNormalTalk_Bottom('#face0#……然而，有些妖怪却对我指指点点。', 37, 9110002, false, true);
    } else {
        if (status === a++) {
            cm.sendNormalTalk_Bottom('#face2#我心里很清楚，他们那样做的目的，只是为了利用竹野子。', 37, 9110002, true, true);
        } else {
            if (status === a++) {
                cm.askMenu_Bottom('\r\n#L0#妖怪们真的是那么想的吗？#l\r\n#L1#不是的，妖怪们真的很担心竹野子。#l\r\n#L2#没错。我一想到像魔僧那样的坏蛋……#l', 56, 0);
            } else {
                if (status === a++) {
                    if (selectionLog[status] == 0) {
                        cm.sendNormalTalk_Bottom('#face0#也许，不知道妖怪们的想法反而更好。', 37, 9110002, false, true);
                        gain(1);
                    } else {
                        if (selectionLog[status] == 1) {
                            cm.sendNormalTalk_Bottom('#face0#哼，如果你要这样说，那我们没什么可谈的。', 37, 9110002, false, true);
                            gain(0);
                        } else {
                            cm.sendNormalTalk_Bottom('#face0#虽然我很感激你站在我这边，但想起那些记忆让我心里不舒服……', 37, 9110002, false, true);
                            gain(1);
                        }
                    }
                }
            }
        }
    }
}
function action分支0_1_0(d, c, b, a) {
    if (status <= a++) {
        cm.sendNormalTalk_Bottom('#face0#。狸猫妖怪……就住在狸猫山丘。', 37, 9110002, false, true);
    } else {
        if (status === a++) {
            cm.sendNormalTalk_Bottom('#face1#在寻找火之五行之前，我早听说过它们因人类的迫害，几乎要灭绝了。', 37, 9110002, true, true);
        } else {
            if (status === a++) {
                cm.askMenu_Bottom('\r\n#L0#这么说，人类很坏啊！#l\r\n#L1#回想起来，我最后见到的那只狸猫妖怪好可怜。#l\r\n#L2#我们帮助狸猫妖怪重新回到附近定居怎么样？#l', 56, 0);
            } else {
                if (status === a++) {
                    if (selectionLog[status] == 0) {
                        cm.sendNormalTalk_Bottom('#face0#谁也不知道事情是怎么开始的。现在随着人类的势力占了上风，它们就消失了……', 37, 9110002, false, true);
                    } else {
                        if (selectionLog[status] == 1) {
                            cm.sendNormalTalk_Bottom('#face0#那狸猫妖怪既然已下决心报仇，现在估计跑到哪里去变身为人类生活了吧。', 37, 9110002, false, true);
                            gain(2);
                        } else {
                            cm.sendNormalTalk_Bottom('#face1#你这么做是没用的。狸猫妖怪们的命运最终仍是逃不开大太法师的旨意。', 37, 9110002, false, true);
                            gain(0);
                        }
                    }
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom('#face0#以前狸猫妖怪们常常跑到村里来捣乱……', 37, 9110002, true, true);
                        gain(1);
                    }
                }
            }
        }
    }
}
function action分支0_1_1(d, c, b, a) {
    if (status <= a++) {
        cm.sendNormalTalk_Bottom('#face0#半人半妖……像竹野子这样的孩子是十分特别的。', 37, 9110002, false, true);
    } else {
        if (status === a++) {
            cm.sendNormalTalk_Bottom('#face2#当妖气凝聚在人类的躯体中时……一般人身都会因为无法抵抗妖气的侵蚀而死亡。', 37, 9110002, true, true);
        } else {
            if (status === a++) {
                cm.askMenu_Bottom('\r\n#L0#那竹野子为什么还活着呢？#l\r\n#L1#所以竹野子才会生病啊。#l\r\n#L2#看来最后大太法师将她复活是上天注定的。#l', 56, 0);
            } else {
                if (status === a++) {
                    if (selectionLog[status] == 0) {
                        cm.sendNormalTalk_Bottom('#face0#我说你，对竹野子还活着有意见吗？你这话让人听着有点刺耳哦……', 37, 9110002, false, true);
                        gain(0);
                    } else {
                        if (selectionLog[status] == 1) {
                            cm.sendNormalTalk_Bottom('#face0#是的。而且奇怪的是，她的妖力被封印起来了。', 37, 9110002, false, true);
                            gain(1);
                        } else {
                            cm.sendNormalTalk_Bottom('#face0#是啊，看见竹野子不再受病痛折磨，我真的很高兴……', 37, 9110002, false, true);
                            gain(3);
                        }
                    }
                }
            }
        }
    }
}
function action分支0_1_2(d, c, b, a) {
    if (status <= a++) {
        cm.sendNormalTalk_Bottom('#face0#毕竟无论是人类，还是妖怪，都存在私心。', 37, 9110002, false, true);
    } else {
        if (status === a++) {
            cm.sendNormalTalk_Bottom('#face2#两者各自追求不同，当然会发生冲突……', 37, 9110002, true, true);
        } else {
            if (status === a++) {
                cm.askMenu_Bottom('\r\n#L0#也许竹野子以半人半妖之体诞生，是为了促进人类与妖怪之间的和睦。#l\r\n#L1#竹野子既能理解妖怪们的心，又能理解人类的心，太帅了。#l\r\n#L2#但是我认为妖怪和人类的生活方式完全不一样，不应该一起生活。#l', 56, 0);
            } else {
                if (status === a++) {
                    if (selectionLog[status] == 0) {
                        cm.sendNormalTalk_Bottom('#face0#虽然我不希望是这样，但既然是命中注定的，我也只好接受。', 37, 9110002, false, true);
                        gain(0);
                    } else {
                        if (selectionLog[status] == 1) {
                            cm.sendNormalTalk_Bottom('#face0#……呵，你说这个是故意讨我开心吗。', 37, 9110002, false, true);
                            gain(3);
                        } else {
                            cm.sendNormalTalk_Bottom('#face0#……呵，你说这个是故意讨我开心吗。', 37, 9110002, false, true);
                            gain(3);
                        }
                    }
                }
            }
        }
    }
}
function action分支0_2_0(d, c, b, a) {
    if (status <= a++) {
        cm.sendNormalTalk_Bottom('#face0#健二大叔……他从很久以前开始就一直很照顾我们姐妹俩。', 37, 9110002, false, true);
    } else {
        if (status === a++) {
            cm.sendNormalTalk_Bottom('#face1#我们之所以能离开村庄来到蘑菇神社定居，也是多亏了健二大叔。', 37, 9110002, true, true);
        } else {
            if (status === a++) {
                cm.askMenu_Bottom('\r\n#L0#健二大叔做的食物真的很美味。#l\r\n#L1#你不觉得有点可疑吗？#l\r\n#L2#大叔为什么叫健二呢？#l', 56, 0);
            } else {
                if (status === a++) {
                    if (selectionLog[status] == 0) {
                        cm.sendNormalTalk_Bottom('#face0#	健二大叔的做菜手艺全日本第一……', 37, 9110002, false, true);
                    } else {
                        if (selectionLog[status] == 1) {
                            cm.sendNormalTalk_Bottom('#face0#这种话不能随便说。', 37, 9110002, false, true);
                        } else {
                            cm.sendNormalTalk_Bottom('#face1#有传言说因为他皮肤是古铜色的，所以叫健二。', 37, 9110002, false, true);
                        }
                    }
                } else {
                    if (status === a++) {
                        if (selectionLog[status - 1] == 0) {
                            cm.sendNormalTalk_Bottom('#face0#我听说，就没有他做不出来的食物。', 37, 9110002, true, true);
                            gain(1);
                        } else {
                            if (selectionLog[status - 1] == 1) {
                                cm.sendNormalTalk_Bottom('#face0#他是在我们最无助的时候帮助过我们的人。', 37, 9110002, true, true);
                                gain(0);
                            } else {
                                cm.sendNormalTalk_Bottom('#face1#还有的传言说，其实健二不是个名字，而是个世代相传的称号。', 37, 9110002, true, true);
                                gain(2);
                            }
                        }
                    }
                }
            }
        }
    }
}
function action分支0_2_1(d, c, b, a) {
    if (status <= a++) {
        cm.sendNormalTalk_Bottom('#face0#我们俩来到蘑菇神社后，有一段时间都无法外出。', 37, 9110002, false, true);
    } else {
        if (status === a++) {
            cm.sendNormalTalk_Bottom('#face2#因为竹野子病得很重，那也是无奈之举。', 37, 9110002, true, true);
        } else {
            if (status === a++) {
                cm.askMenu_Bottom('\r\n#L0#我听说外面有传言怀疑竹野子是否真的是你的妹妹！#l\r\n#L1#木野子你也躲起来了？#l\r\n#L2#身体健康才是最重要的。#l', 56, 0);
            } else {
                if (status === a++) {
                    if (selectionLog[status] == 0) {
                        cm.sendNormalTalk_Bottom('#face0#有没有人说过你有时候真的很不会看眼色？……', 37, 9110002, false, true);
                        gain(1);
                    } else {
                        if (selectionLog[status] == 1) {
                            cm.sendNormalTalk_Bottom('#face0#有段时间因为受不了村民们的逼迫，我曾躲起来过。说起在村里的往事，心里真不是滋味。', 37, 9110002, false, true);
                            gain(1);
                        } else {
                            cm.sendNormalTalk_Bottom('#face0#有没有人说过你有时候真的很不会看眼色？……', 37, 9110002, false, true);
                            gain(1);
                        }
                    }
                }
            }
        }
    }
}
function action分支0_2_2(d, c, b, a) {
    if (status <= a++) {
        cm.sendNormalTalk_Bottom('#face0#蘑菇神社里除了我和竹野子之外，还有其他很多巫女。', 37, 9110002, false, true);
    } else {
        if (status === a++) {
            cm.sendNormalTalk_Bottom('#face2#所以这么大的神社才能一直维持下来。', 37, 9110002, true, true);
        } else {
            if (status === a++) {
                cm.askMenu_Bottom('\r\n#L0#谁才是第一美女呢？#l\r\n#L1#真想瞧瞧其他巫女呢。#l\r\n#L2#巫女其实很常见的。#l', 56, 0);
            } else {
                if (status === a++) {
                    if (selectionLog[status] == 0) {
                        cm.sendNormalTalk_Bottom('#face0#这个嘛……当然是我们竹野子咯。', 37, 9110002, false, true);
                        gain(3);
                    } else {
                        if (selectionLog[status] == 1) {
                            cm.sendNormalTalk_Bottom('#face0#呵呵，以后有机会应该可以见到。', 37, 9110002, false, true);
                            gain(2);
                        } else {
                            cm.sendNormalTalk_Bottom('#face0#巫女确实挺常见，但是很难找到具有特殊力量，可以帮助人们的巫女。', 37, 9110002, false, true);
                            gain(1);
                        }
                    }
                }
            }
        }
    }
}
function action1(mode, type, selection) {
    if (inTalkCD()) {
        cm.sendNormalTalk_Bottom('#face0#你稍后再跟我对话好吗？', 37, 9111001, false, false);
        cm.dispose();
        return;
    }
    if (status == 0 && mode == 0) {
        cm.dispose();
        return;
    }
    mode == 1 ? status++ : status--;
    selectionLog[status] = selection;
    var i = -1;
    if (status <= i++) {
        cm.dispose();
    } else {
        if (status === i++) {
            var value = cm.getNumberFromQuestInfo(58710, '' + cm.getNpc());
            if (value >= 70) {
                cm.sendNormalTalk_Bottom('#face1#每次跟你聊天都很开心。', 37, 9111001, false, true);
            } else {
                if (value >= 50) {
                    cm.sendNormalTalk_Bottom('#face0#看样子你有话要对我说。', 37, 9111001, false, true);
                } else {
                    cm.sendNormalTalk_Bottom('#face2#你好！', 37, 9111001, false, true);
                }
            }
        } else {
            if (status === i++) {
                cm.askMenu_Bottom('\r\n#L0#谈论缘分之力。#l\r\n#L1#谈论木野子的事。#l\r\n#L2#谈论爱好。#l', 56, 0);
            } else {
                if (status === i++) {
                    if (selectionLog[2] == 0) {
                        cm.sendNormalTalk_Bottom('我们聊聊缘分之力吧。', 57, 0, false, true);
                    } else {
                        if (selectionLog[2] == 1) {
                            cm.sendNormalTalk_Bottom('我们聊聊木野子吧。', 57, 0, false, true);
                        } else {
                            cm.sendNormalTalk_Bottom('我们聊聊兴趣爱好吧。', 57, 0, false, true);
                        }
                    }
                } else {
                    if (status === i++) {
                        if (selectionLog[2] == 0) {
                            cm.askMenu_Bottom('\r\n#L0#谈论缘分之力。#l\r\n#L1#谈论消灭魔僧时获得的缘分。#l\r\n#L2#谈论大太法师。#l', 56, 0);
                        } else {
                            if (selectionLog[2] == 1) {
                                cm.askMenu_Bottom('\r\n#L0#我觉得木野子太约束竹野子了#l\r\n#L1#木野子好像非常讨厌妖怪。#l\r\n#L2#木野子的内心好像很孤独。#l', 56, 0);
                            } else {
                                cm.askMenu_Bottom('\r\n#L0#独自一人时做的事#l\r\n#L1#无聊时做的事。#l\r\n#L2#郁闷时做的事#l', 56, 0);
                            }
                        }
                    } else {
                        var reactor = 'action分支' + cm.getNpc() + '_' + selectionLog[2] + '_' + selectionLog[4];
                        eval(reactor)(mode, type, selection, i);
                    }
                }
            }
        }
    }
}
function action分支1_0_0(d, c, b, a) {
    if (status <= a++) {
        cm.sendNormalTalk_Bottom('#face0#利用缘分的特殊力量，可以进一步强化日本披风。', 37, 9111001, false, true);
    } else {
        if (status === a++) {
            cm.askMenu_Bottom('\r\n#L0#如果想获得某种力量，该怎么做？#l\r\n#L1#如果想获得更强大的力量，该怎么做？#l\r\n#L2#缘分之力有什么了不起的……#l', 56, 0);
        } else {
            if (status === a++) {
                if (selectionLog[status] == 0) {
                    cm.sendNormalTalk_Bottom('#face0#你努力获得所有缘分吧。', 37, 9111001, false, true);
                } else {
                    if (selectionLog[status] == 1) {
                        cm.sendNormalTalk_Bottom('#face0#缘分之力会受到你与大家的亲密度的影响，你要多加留意。', 37, 9111001, false, true);
                        gain(1);
                    } else {
                        cm.sendNormalTalk_Bottom('#face1#你已经很厉害了，也许并不需要。', 37, 9111001, false, true);
                        gain(0);
                    }
                }
            } else {
                if (status === a++) {
                    if (selectionLog[status - 1] == 0) {
                        cm.sendNormalTalk_Bottom('#face0#有些妖怪会很难跟你成为同伴。', 37, 9111001, true, true);
                        gain(1);
                    }
                }
            }
        }
    }
}
function action分支1_0_1(d, c, b, a) {
    if (status <= a++) {
        cm.sendNormalTalk_Bottom('#face0#我能待在这里，都要多亏了他们的帮助。当然……这其中也包括你。', 37, 9111001, false, true);
    } else {
        if (status === a++) {
            cm.askMenu_Bottom('\r\n#L0#不不，我没帮上什么忙#l\r\n#L1#嗯，呵呵……我也很开心多了几位好同伴。#l\r\n#L2#没错，我是出力最多的。#l', 56, 0);
        } else {
            if (status === a++) {
                if (selectionLog[status] == 0) {
                    cm.sendNormalTalk_Bottom('#face0#你用不着那么谦虚。', 37, 9111001, false, true);
                } else {
                    if (selectionLog[status] == 1) {
                        cm.sendNormalTalk_Bottom('#face1#很高兴得知你跟他们成了好同伴，祝贺你。', 37, 9111001, false, true);
                        gain(2);
                    } else {
                        cm.sendNormalTalk_Bottom('#face0#今后也请你多多帮忙了，勇士', 37, 9111001, false, true);
                        gain(1);
                    }
                }
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom('#face0#不过，这也是你的优点之一呢。', 37, 9111001, true, true);
                    gain(3);
                }
            }
        }
    }
}
function action分支1_0_2(d, c, b, a) {
    if (status <= a++) {
        cm.sendNormalTalk_Bottom('#face0#我有时候会想。', 37, 9111001, false, true);
    } else {
        if (status === a++) {
            cm.sendNormalTalk_Bottom('#face2#这一切是否是大太法师的安排？', 37, 9111001, true, true);
        } else {
            if (status === a++) {
                cm.askMenu_Bottom('\r\n#L0#你忘了上次差点死掉？#l\r\n#L1#我觉得这也是有可能的。#l\r\n#L2#这个嘛，也许大太法师也是被信徒们创造出来的偶像。#l', 56, 0);
            } else {
                if (status === a++) {
                    if (selectionLog[status] == 0) {
                        cm.sendNormalTalk_Bottom('#face0#不过也正因此，我才恢复了健康。再也不会生病了。', 37, 9111001, false, true);
                        gain(1);
                    } else {
                        if (selectionLog[status] == 1) {
                            cm.sendNormalTalk_Bottom('#face2#你有时候给人的回应有点敷衍。', 37, 9111001, false, true);
                            gain(0);
                        } else {
                            cm.sendNormalTalk_Bottom('#face0#虽然也有人那么说，但是我亲自感受过他的力量。', 37, 9111001, false, true);
                            gain(1);
                        }
                    }
                }
            }
        }
    }
}
function action分支1_1_0(d, c, b, a) {
    if (status <= a++) {
        cm.sendNormalTalk_Bottom('#face2#不不，绝对不是的。姐姐总是想要尽可能地保护我。', 37, 9111001, false, true);
    } else {
        if (status === a++) {
            cm.askMenu_Bottom('\r\n#L0#保护过头就变成溺爱了！#l\r\n#L1#既然你那么想，就是那样咯。#l\r\n#L2#回想起来，我觉得木野子那样做是对的。#l', 56, 0);
        } else {
            if (status === a++) {
                if (selectionLog[status] == 0) {
                    cm.sendNormalTalk_Bottom('#face0#有时候……我也会觉得累。', 37, 9111001, false, true);
                } else {
                    if (selectionLog[status] == 1) {
                        cm.sendNormalTalk_Bottom('#face0#谢谢你总是尊重我的意见。', 37, 9111001, false, true);
                        gain(2);
                    } else {
                        cm.sendNormalTalk_Bottom('#face1#诶……？你说这话是什么意思？', 37, 9111001, false, true);
                        gain(0);
                    }
                }
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom('#face0#但是，只要一想到那都是为我好，我就什么都能忍受。', 37, 9111001, true, true);
                    gain(2);
                }
            }
        }
    }
}
function action分支1_1_1(d, c, b, a) {
    if (status <= a++) {
        cm.sendNormalTalk_Bottom('#face0#毕竟妖怪也是有善恶之分的。', 37, 9111001, false, true);
    } else {
        if (status === a++) {
            cm.askMenu_Bottom('\r\n#L0#坏妖怪？比如魔僧那样的？#l\r\n#L1#为什么那么想，跟我们一起的妖怪们不是都很善良嘛。#l\r\n#L2#没错。妖怪坏起来比人类更坏。#l', 56, 0);
        } else {
            if (status === a++) {
                if (selectionLog[status] == 0) {
                    cm.sendNormalTalk_Bottom('#face0#魔僧真是个令人恨得咬牙切齿的邪恶妖怪。', 37, 9111001, false, true);
                    gain(2);
                } else {
                    if (selectionLog[status] == 1) {
                        cm.sendNormalTalk_Bottom('#face0#是啊。呵呵。你真是精力充沛呢。', 37, 9111001, false, true);
                        gain(1);
                    } else {
                        cm.sendNormalTalk_Bottom('#face0#尽管如此，妖怪并不只有坏的，你不要抱有偏见。', 37, 9111001, false, true);
                        gain(3);
                    }
                }
            }
        }
    }
}
function action分支1_1_2(d, c, b, a) {
    if (status <= a++) {
        cm.sendNormalTalk_Bottom('#face0#说的没错。老实说，姐姐需要的，并不是像我这样体弱多病的人，', 37, 9111001, false, true);
    } else {
        if (status === a++) {
            cm.sendNormalTalk_Bottom('#face2#而是像爸爸妈妈那样坚实的支撑者。', 37, 9111001, true, true);
        } else {
            if (status === a++) {
                cm.askMenu_Bottom('\r\n#L0#不是的，竹野子也给了我很大支持哦。#l\r\n#L1#唔，木野子的性格好像很独立。#l\r\n#L2#嗯，要是父母亲们还活着就更好了。#l', 56, 0);
            } else {
                if (status === a++) {
                    if (selectionLog[status] == 0) {
                        cm.sendNormalTalk_Bottom('#face1#……你这么说，让我心里舒服多了。', 37, 9111001, false, true);
                        gain(3);
                    } else {
                        if (selectionLog[status] == 1) {
                            cm.sendNormalTalk_Bottom('#face0#说的没错。以姐姐的性格，她最讨厌欠别人人情，或者依赖别人。', 37, 9111001, false, true);
                            gain(1);
                        } else {
                            cm.sendNormalTalk_Bottom('#face0#一想到我和姐姐在这世上无依无靠，我就觉得伤心。', 37, 9111001, false, true);
                            gain(0);
                        }
                    }
                }
            }
        }
    }
}
function action分支1_2_0(d, c, b, a) {
    if (status <= a++) {
        cm.sendNormalTalk_Bottom('#face0#独自一人时……我最喜欢梳头发。', 37, 9111001, false, true);
    } else {
        if (status === a++) {
            cm.askMenu_Bottom('\r\n#L0#我听说梳头太频繁的话会变秃顶哦？#l\r\n#L1#木野子的头发也是你帮她梳的吗？#l\r\n#L2#能不能也帮我梳梳头？#l', 56, 0);
        } else {
            if (status === a++) {
                if (selectionLog[status] == 0) {
                    cm.sendNormalTalk_Bottom('#face2#诶……？真的吗……？啊……那样不行啊……', 37, 9111001, false, true);
                    gain(0);
                } else {
                    if (selectionLog[status] == 1) {
                        cm.sendNormalTalk_Bottom('#face0#嗯。呵呵，从小就只有我帮她梳头的时候她不会唠叨我。', 37, 9111001, false, true);
                        gain(3);
                    } else {
                        cm.sendNormalTalk_Bottom('#face1#当然可以。我随时愿意为你效劳。不过姐姐可能会不太高兴呢。', 37, 9111001, false, true);
                        gain(1);
                    }
                }
            }
        }
    }
}
function action分支1_2_1(d, c, b, a) {
    if (status <= a++) {
        cm.sendNormalTalk_Bottom('#face0#无聊的时候吗？', 37, 9111001, false, true);
    } else {
        if (status === a++) {
            cm.sendNormalTalk_Bottom('#face1#唔，我一般不会有无聊的时候，无聊时我喜欢看书。', 37, 9111001, true, true);
        } else {
            if (status === a++) {
                cm.askMenu_Bottom('\r\n#L0#你在看什么种类的书？#l\r\n#L1#我也喜欢看书。#l\r\n#L2#没想到你有这么无聊的爱好。#l', 56, 0);
            } else {
                if (status === a++) {
                    if (selectionLog[status] == 0) {
                        cm.sendNormalTalk_Bottom('#face0#最近我正在看从泉奈那里借的《冰山美男全盛时代》。', 37, 9111001, false, true);
                        gain(1);
                    } else {
                        if (selectionLog[status] == 1) {
                            cm.sendNormalTalk_Bottom('#face0#我觉得书籍对每个人都是很好的精神食粮。', 37, 9111001, false, true);
                            gain(1);
                        } else {
                            cm.sendNormalTalk_Bottom('#face0#一点都不无聊。对于生病的我来说，书本是唯一能让我了解外面世界的途径。', 37, 9111001, false, true);
                            gain(3);
                        }
                    }
                }
            }
        }
    }
}
function action分支1_2_2(d, c, b, a) {
    if (status <= a++) {
        cm.sendNormalTalk_Bottom('#face0#郁闷时，我最喜欢泡杯热茶喝喝。', 37, 9111001, false, true);
    } else {
        if (status === a++) {
            cm.askMenu_Bottom('\r\n#L0#不要老喝热茶，偶尔也尝尝凉茶吧。#l\r\n#L1#茶道？我也可以学不？#l\r\n#L2#我光想想就感觉腿发麻。#l', 56, 0);
        } else {
            if (status === a++) {
                if (selectionLog[status] == 0) {
                    cm.sendNormalTalk_Bottom('#face0#在炎热的夏天来一杯的话，真的很凉爽呢。', 37, 9111001, false, true);
                    gain(2);
                } else {
                    if (selectionLog[status] == 1) {
                        cm.sendNormalTalk_Bottom('#face0#当然可以。一开始需要有点耐心，不过很快就能熟练起来哦。', 37, 9111001, false, true);
                        gain(1);
                    } else {
                        cm.sendNormalTalk_Bottom('#face0#只要你摒弃那样的想法去尝试一下，很快就会明白那真的是有益修养身心的爱好。', 37, 9111001, false, true);
                        gain(2);
                    }
                }
            }
        }
    }
}
function action2(mode, type, selection) {
    if (inTalkCD()) {
        cm.sendNormalTalk_Bottom('#face0#你稍后再找我聊好吗？', 37, 9111002, false, false);
        cm.dispose();
        return;
    }
    if (status == 0 && mode == 0) {
        cm.dispose();
        return;
    }
    mode == 1 ? status++ : status--;
    selectionLog[status] = selection;
    var i = -1;
    if (status <= i++) {
        cm.dispose();
    } else {
        if (status === i++) {
            var value = cm.getNumberFromQuestInfo(58710, '' + cm.getNpc());
            if (value >= 70) {
                cm.sendNormalTalk_Bottom('#face0#哈哈，每次跟你聊天都很开心。', 37, 9111002, false, true);
            } else {
                if (value >= 50) {
                    cm.sendNormalTalk_Bottom('#face0#正好我挺无聊的，我们聊聊吧。', 37, 9111002, false, true);
                } else {
                    cm.sendNormalTalk_Bottom('#face2#嗯？什么事？', 37, 9111002, false, true);
                }
            }
        } else {
            if (status === i++) {
                cm.askMenu_Bottom('\r\n#L0#谈论牛鬼的事。#l\r\n#L1#谈论人类世界的事。#l\r\n#L2#谈论镰鼬的事。#l', 56, 0);
            } else {
                if (status === i++) {
                    if (selectionLog[2] == 0) {
                        cm.sendNormalTalk_Bottom('打听牛鬼的事。', 57, 0, false, true);
                    } else {
                        if (selectionLog[2] == 1) {
                            cm.sendNormalTalk_Bottom('我们聊聊人类世界的事吧', 57, 0, false, true);
                        } else {
                            cm.sendNormalTalk_Bottom('谈论镰鼬的事。', 57, 0, false, true);
                        }
                    }
                } else {
                    if (status === i++) {
                        if (selectionLog[2] == 0) {
                            cm.askMenu_Bottom('\r\n#L0#谈论与牛鬼的过去。#l\r\n#L1#谈论牛鬼的性格。#l\r\n#L2#谈论想对牛鬼说的话。#l', 56, 0);
                        } else {
                            if (selectionLog[2] == 1) {
                                cm.askMenu_Bottom('\r\n#L0#谈论人类世界中美好的事情。#l\r\n#L1#谈论人类世界中不好的事情。#l\r\n#L2#喜欢人类的理由？#l', 56, 0);
                            } else {
                                cm.askMenu_Bottom('\r\n#L0#镰鼬的性格#l\r\n#L1#镰鼬的过去#l\r\n#L2#镰鼬的秘密#l', 56, 0);
                            }
                        }
                    } else {
                        var reactor = 'action分支' + cm.getNpc() + '_' + selectionLog[2] + '_' + selectionLog[4];
                        eval(reactor)(mode, type, selection, i);
                    }
                }
            }
        }
    }
}
function action分支2_0_0(d, c, b, a) {
    if (status <= a++) {
        cm.sendNormalTalk_Bottom('#face0#你想了解牛鬼哥帮我做过的事？', 37, 9111002, false, true);
    } else {
        if (status === a++) {
            cm.sendNormalTalk_Bottom('#face0#他曾经故意恐吓一个过路的商人，好让我可以去帮助那个人。', 37, 9111002, true, true);
        } else {
            if (status === a++) {
                cm.askMenu_Bottom('\r\n#L0#什么嘛，你们简直是诈骗？#l\r\n#L1#牛鬼真的很爱护你。#l\r\n#L2#所以后来结果怎么样？#l', 56, 0);
            } else {
                if (status === a++) {
                    if (selectionLog[status] == 0) {
                        cm.sendNormalTalk_Bottom('#face0#哎～那个算不上诈骗。', 37, 9111002, false, true);
                    } else {
                        if (selectionLog[status] == 1) {
                            cm.sendNormalTalk_Bottom('#face0#……。他明明知道把我送走后就剩他自己了，却还那样做了。', 37, 9111002, false, true);
                        } else {
                            cm.sendNormalTalk_Bottom('#face1#那个商人雇佣我当了他的保镖，之后我就一直跟他一起生活在人类世界里。', 37, 9111002, false, true);
                            gain(1);
                        }
                    }
                } else {
                    if (status === a++) {
                        if (selectionLog[status - 1] == 0) {
                            cm.sendNormalTalk_Bottom('#face0#那个商人确实需要个保镖。嘿嘿', 37, 9111002, true, true);
                            gain(2);
                        } else {
                            if (selectionLog[status - 1] == 1) {
                                cm.sendNormalTalk_Bottom('#face0#是我太不懂事了……', 37, 9111002, true, true);
                                gain(0);
                            }
                        }
                    }
                }
            }
        }
    }
}
function action分支2_0_1(d, c, b, a) {
    if (status <= a++) {
        cm.sendNormalTalk_Bottom('#face0#在牛鬼哥吸收五行性格大变之前，他原本是个性格耿直端正的妖鬼。', 37, 9111002, false, true);
    } else {
        if (status === a++) {
            cm.askMenu_Bottom('\r\n#L0#他明明知道那样会毁了自己，还吸收了五行。#l\r\n#L1#真是位了不起的兄长。#l\r\n#L2#他不该吸收五行的……#l', 56, 0);
        } else {
            if (status === a++) {
                if (selectionLog[status] == 0) {
                    cm.sendNormalTalk_Bottom('#face0#……。是的，哥就是那样的人……', 37, 9111002, false, true);
                } else {
                    if (selectionLog[status] == 1) {
                        cm.sendNormalTalk_Bottom('#face0#嗯，他从小就把我当亲弟弟一样疼爱。', 37, 9111002, false, true);
                        gain(1);
                    } else {
                        cm.sendNormalTalk_Bottom('#face0#我很后悔。我不该离开牛鬼哥的。要是我在他身边，他也不会做出那样危险的事', 37, 9111002, false, true);
                        gain(0);
                    }
                }
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom('#face0#虽然结果是个悲剧。但他为了不牺牲其他妖鬼，宁愿选择牺牲自己。', 37, 9111002, true, true);
                    gain(3);
                }
            }
        }
    }
}
function action分支2_0_2(d, c, b, a) {
    if (status <= a++) {
        cm.sendNormalTalk_Bottom('#face0#我想对牛鬼哥说的话……？', 37, 9111002, false, true);
    } else {
        if (status === a++) {
            cm.sendNormalTalk_Bottom('#face2#我很想念你。', 37, 9111002, true, true);
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom('#face2#我很想念你。', 37, 9111002, true, true);
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom('#face2#我很想念你。', 37, 9111002, true, true);
                } else {
                    if (status === a++) {
                        cm.askMenu_Bottom('\r\n#L0#还有呢？#l\r\n#L1#现在后悔有什么用。#l\r\n#L2#他如果不是那副德性该多好#l', 56, 0);
                    } else {
                        if (status === a++) {
                            if (selectionLog[status] == 0) {
                                cm.sendNormalTalk_Bottom('#face0#我希望哥在天上过得更幸福快乐。', 37, 9111002, false, true);
                                gain(2);
                            } else {
                                if (selectionLog[status] == 1) {
                                    cm.sendNormalTalk_Bottom('#face0#没错。不管我多么后悔，牛鬼哥也不会复活了。所以，我要加把劲，替他好好地活下去。', 37, 9111002, false, true);
                                    gain(3);
                                } else {
                                    cm.sendNormalTalk_Bottom('#face0#不，那也是牛鬼哥的其中一面。', 37, 9111002, false, true);
                                    gain(0);
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
function action分支2_1_0(d, c, b, a) {
    if (status <= a++) {
        cm.sendNormalTalk_Bottom('#face0#人类世界里美好的事？当然是喝酒啦！', 37, 9111002, false, true);
    } else {
        if (status === a++) {
            cm.sendNormalTalk_Bottom('#face0#哈，下班后喝一杯，简直是人生一大乐事。', 37, 9111002, true, true);
        } else {
            if (status === a++) {
                cm.askMenu_Bottom('\r\n#L0#喝太多酒很容易得肝癌……#l\r\n#L1#妖怪还会喝酒吗？#l\r\n#L2#你比人类还像人类啊#l', 56, 0);
            } else {
                if (status === a++) {
                    if (selectionLog[status] == 0) {
                        cm.sendNormalTalk_Bottom('#face0#……妖鬼不可能患上人类的疾病。', 37, 9111002, false, true);
                        gain(1);
                    } else {
                        if (selectionLog[status] == 1) {
                            cm.sendNormalTalk_Bottom('#face0#当然！我虽然尝不出食物的味道，却可以体会醉酒的感觉。', 37, 9111002, false, true);
                            gain(2);
                        } else {
                            cm.sendNormalTalk_Bottom('#face1#哈哈哈哈哈，这话听着让我开心。', 37, 9111002, false, true);
                            gain(3);
                        }
                    }
                }
            }
        }
    }
}
function action分支2_1_1(d, c, b, a) {
    if (status <= a++) {
        cm.sendNormalTalk_Bottom('#face0#不好的事……唔。比如有时候人们会以为我不谙世事，给我下达些不像话的指令？', 37, 9111002, false, true);
    } else {
        if (status === a++) {
            cm.askMenu_Bottom('\r\n#L0#为了成为人类，这是必须忍受的……#l\r\n#L1#坏人真是太多了…… #l\r\n#L2#即使这样你也喜欢人类吗？#l', 56, 0);
        } else {
            if (status === a++) {
                if (selectionLog[status] == 0) {
                    cm.sendNormalTalk_Bottom('#face0#……是吗。也对，人类也一样可能遭到那样的对待。', 37, 9111002, false, true);
                    gain(1);
                } else {
                    if (selectionLog[status] == 1) {
                        cm.sendNormalTalk_Bottom('#face0#但是好人还是更多。嘿嘿。所以我喜欢人类世界，因为能感受到人性之美。', 37, 9111002, false, true);
                        gain(2);
                    } else {
                        cm.sendNormalTalk_Bottom('#face0#嗯，我还是喜欢。我常常会想自己是不是投错胎了', 37, 9111002, false, true);
                        gain(0);
                    }
                }
            }
        }
    }
}
function action分支2_1_2(d, c, b, a) {
    if (status <= a++) {
        cm.sendNormalTalk_Bottom('#face0#我小的时候，有个孩子常会跑来妖鬼居住的森林里跟我玩。', 37, 9111002, false, true);
    } else {
        if (status === a++) {
            cm.sendNormalTalk_Bottom('#face2#那个孩子对我非常好。', 37, 9111002, true, true);
        } else {
            if (status === a++) {
                cm.askMenu_Bottom('\r\n#L0#估计他不太了解妖怪……#l\r\n#L1#因为是小孩子……#l\r\n#L2#对，那是人类纯真的一面。#l', 56, 0);
            } else {
                if (status === a++) {
                    if (selectionLog[status] == 0) {
                        cm.sendNormalTalk_Bottom('#face0#随着年龄的增长，人们对我也不再那么友善，但那份温情我一直都很珍惜。', 37, 9111002, false, true);
                        gain(1);
                    } else {
                        if (selectionLog[status] == 1) {
                            cm.sendNormalTalk_Bottom('#face0#不仅是小孩子，在成年人中也有许多人对我很和蔼。', 37, 9111002, false, true);
                            gain(1);
                        } else {
                            cm.sendNormalTalk_Bottom('#face0#随着年龄的增长，人们对我也不再那么友善，但那份温情我一直都很珍惜。', 37, 9111002, false, true);
                            gain(1);
                        }
                    }
                }
            }
        }
    }
}
function action分支2_2_0(d, c, b, a) {
    if (status <= a++) {
        cm.sendNormalTalk_Bottom('#face0#镰鼬大叔的性格吗？他性子很爽快！不过有时候比较一根筋……', 37, 9111002, false, true);
    } else {
        if (status === a++) {
            cm.askMenu_Bottom('\r\n#L0#不是有时候，他一直都很一根筋……#l\r\n#L1#手起刀落就把无头鬼的脖子……#l\r\n#L2#这跟他的长相差异很大啊。#l', 56, 0);
        } else {
            if (status === a++) {
                if (selectionLog[status] == 0) {
                    cm.sendNormalTalk_Bottom('#face0#哈哈，没错没错。', 37, 9111002, false, true);
                    gain(2);
                } else {
                    if (selectionLog[status] == 1) {
                        cm.sendNormalTalk_Bottom('#face0#嘘，话题就此打住。无头鬼好像要来了，我感觉有点毛骨悚然。', 37, 9111002, false, true);
                        gain(1);
                    } else {
                        cm.sendNormalTalk_Bottom('#face1#呃呃。我有时候看见镰鼬的脸也不禁会吓一跳。', 37, 9111002, false, true);
                        gain(2);
                    }
                }
            }
        }
    }
}
function action分支2_2_1(d, c, b, a) {
    if (status <= a++) {
        cm.sendNormalTalk_Bottom('#face0#他的过去吗，老实说我不太清楚。', 37, 9111002, false, true);
    } else {
        if (status === a++) {
            cm.sendNormalTalk_Bottom('#face2#因为他在这待的时间比我长得多。我是跟牛鬼哥交往后才来到这里的。', 37, 9111002, true, true);
        } else {
            if (status === a++) {
                cm.askMenu_Bottom('\r\n#L0#他该不会有几百岁吧？#l\r\n#L1#他本来就是那样的性格吗？#l\r\n#L2#可是他的脸为什么会变成那样。#l', 56, 0);
            } else {
                if (status === a++) {
                    if (selectionLog[status] == 0) {
                        cm.sendNormalTalk_Bottom('#face0#……可能吧……', 37, 9111002, false, true);
                    } else {
                        if (selectionLog[status] == 1) {
                            cm.sendNormalTalk_Bottom('#face0#嗯，听说他原来就是那样的。', 37, 9111002, false, true);
                            gain(1);
                        } else {
                            cm.sendNormalTalk_Bottom('#face0#有传闻说，他是小时候被诅咒了，所以在不会变老的状态下成了妖怪。', 37, 9111002, false, true);
                            gain(0);
                        }
                    }
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom('#face0#事实上，在众妖怪中，镰鼬的年纪最大。', 37, 9111002, true, true);
                        gain(2);
                    }
                }
            }
        }
    }
}
function action分支2_2_2(d, c, b, a) {
    if (status <= a++) {
        cm.sendNormalTalk_Bottom('#face0#我听说镰鼬对整顿妖怪间的秩序做了很大贡献。', 37, 9111002, false, true);
    } else {
        if (status === a++) {
            cm.askMenu_Bottom('\r\n#L0#秩序？妖怪也讲秩序吗？#l\r\n#L1#嘿嘿，镰鼬真令人意外。#l\r\n#L2#其他妖怪也有关联吗？#l', 56, 0);
        } else {
            if (status === a++) {
                if (selectionLog[status] == 0) {
                    cm.sendNormalTalk_Bottom('#face0#你怎么可以贬低妖怪。要知道每个妖怪也都有自己的个性。', 37, 9111002, false, true);
                    gain(0);
                } else {
                    if (selectionLog[status] == 1) {
                        cm.sendNormalTalk_Bottom('#face0#是吧？是吧？哈，不过镰鼬偶尔也会展现出很帅气的一面。', 37, 9111002, false, true);
                        gain(2);
                    } else {
                        cm.sendNormalTalk_Bottom('#face0#……嗯，从他跟天狗的活动路线有重合这点来看，天狗也可能有点关联。', 37, 9111002, false, true);
                        gain(3);
                    }
                }
            }
        }
    }
}
function action3(mode, type, selection) {
    if (inTalkCD()) {
        cm.sendNormalTalk_Bottom('#face0#你等会儿再跟我对话吧？？', 37, 9111003, false, false);
        cm.dispose();
        return;
    }
    if (status == 0 && mode == 0) {
        cm.dispose();
        return;
    }
    mode == 1 ? status++ : status--;
    selectionLog[status] = selection;
    var i = -1;
    if (status <= i++) {
        cm.dispose();
    } else {
        if (status === i++) {
            var value = cm.getNumberFromQuestInfo(58710, '' + cm.getNpc());
            if (value >= 70) {
                cm.sendNormalTalk_Bottom('#face0#嘿嘿，每次跟你聊天都挺开心的。', 37, 9111003, false, true);
            } else {
                if (value >= 50) {
                    cm.sendNormalTalk_Bottom('#face0#只能跟你简短地聊几句哦。', 37, 9111003, false, true);
                } else {
                    cm.sendNormalTalk_Bottom('#face2#诶，我现在有点忙。', 37, 9111003, false, true);
                }
            }
        } else {
            if (status === i++) {
                cm.askMenu_Bottom('\r\n#L0#谈论天狗的事。#l\r\n#L1#谈论喜欢的东西。#l\r\n#L2#询问过去的事。#l', 56, 0);
            } else {
                if (status === i++) {
                    if (selectionLog[2] == 0) {
                        cm.sendNormalTalk_Bottom('打听天狗的事。', 57, 0, false, true);
                    } else {
                        if (selectionLog[2] == 1) {
                            cm.sendNormalTalk_Bottom('问问他喜欢的东西吧。', 57, 0, false, true);
                        } else {
                            cm.sendNormalTalk_Bottom('打听过去的事。', 57, 0, false, true);
                        }
                    }
                } else {
                    if (status === i++) {
                        if (selectionLog[2] == 0) {
                            cm.askMenu_Bottom('\r\n#L0#与天狗的过去#l\r\n#L1#最近的天狗#l\r\n#L2#天狗的性格#l', 56, 0);
                        } else {
                            if (selectionLog[2] == 1) {
                                cm.askMenu_Bottom('\r\n#L0#谈论樱之岛国的美女。#l\r\n#L1#谈论镰鼬的唠叨。#l\r\n#L2#谈论睡觉时间。#l', 56, 0);
                            } else {
                                cm.askMenu_Bottom('\r\n#L0#未长大的原因#l\r\n#L1#年龄#l\r\n#L2#过去做过的事#l', 56, 0);
                            }
                        }
                    } else {
                        var reactor = 'action分支' + cm.getNpc() + '_' + selectionLog[2] + '_' + selectionLog[4];
                        eval(reactor)(mode, type, selection, i);
                    }
                }
            }
        }
    }
}
function action分支3_0_0(d, c, b, a) {
    if (status <= a++) {
        cm.sendNormalTalk_Bottom('#face0#天狗～？我为什么要知道那只漆黑妖怪的过去？', 37, 9111003, false, true);
    } else {
        if (status === a++) {
            cm.askMenu_Bottom('\r\n#L0#因为你是年纪最大的长辈。#l\r\n#L1#镰鼬还有不知道的事啊……#l\r\n#L2#不不，不知道也没关系。#l', 56, 0);
        } else {
            if (status === a++) {
                if (selectionLog[status] == 0) {
                    cm.sendNormalTalk_Bottom('#face0#呵呵，你说的话没错是没错，不过估计会把天狗气得突然蹦出来。', 37, 9111003, false, true);
                    gain(2);
                } else {
                    if (selectionLog[status] == 1) {
                        cm.sendNormalTalk_Bottom('#face0#呃呃……哼。我不是不知道，是不想知道。', 37, 9111003, false, true);
                        gain(0);
                    } else {
                        cm.sendNormalTalk_Bottom('#face2#啧，你也跟最近那些年轻人一样吗？干嘛这么无聊？', 37, 9111003, false, true);
                        gain(1);
                    }
                }
            }
        }
    }
}
function action分支3_0_1(d, c, b, a) {
    if (status <= a++) {
        cm.sendNormalTalk_Bottom('#face0#啊，话说回来，我最近总是跟他偶遇。是我的错觉吗？', 37, 9111003, false, true);
    } else {
        if (status === a++) {
            cm.sendNormalTalk_Bottom('#face0#咳咳，也许他是想偷学我镰鼬大人出色的搜查能力。', 37, 9111003, true, true);
        } else {
            if (status === a++) {
                cm.askMenu_Bottom('\r\n#L0#搜查实力还是天狗更……#l\r\n#L1#你是不是对她有别的意思哦#l\r\n#L2#好像只是碰巧。#l', 56, 0);
            } else {
                if (status === a++) {
                    if (selectionLog[status] == 0) {
                        cm.sendNormalTalk_Bottom('#face0#天狗更什么！你该不是想说他比我更厉害？', 37, 9111003, false, true);
                    } else {
                        if (selectionLog[status] == 1) {
                            cm.sendNormalTalk_Bottom('#face0#什么叫对她有别的意思。难道我最近太过于关心万事屋了吗。', 37, 9111003, false, true);
                        } else {
                            cm.sendNormalTalk_Bottom('#face0#也是，日本这地方不像冒险岛世界那么疆域广阔，应该是碰巧的。', 37, 9111003, false, true);
                            gain(2);
                        }
                    }
                } else {
                    if (status === a++) {
                        if (selectionLog[status - 1] == 0) {
                            cm.sendNormalTalk_Bottom('#face2#如果你是想说这种话，就别说了。', 37, 9111003, true, true);
                            gain(0);
                        } else {
                            cm.sendNormalTalk_Bottom('#face0#我得好好反省反省了。', 37, 9111003, true, true);
                            gain(3);
                        }
                    }
                }
            }
        }
    }
}
function action分支3_0_2(d, c, b, a) {
    if (status <= a++) {
        cm.sendNormalTalk_Bottom('#face0#他的性格是相～当地阴沉啊，一句话都不说。', 37, 9111003, false, true);
    } else {
        if (status === a++) {
            cm.sendNormalTalk_Bottom('#face2#让人根本猜不出他心里的想法。', 37, 9111003, true, true);
        } else {
            if (status === a++) {
                cm.askMenu_Bottom('\r\n#L0#不是阴沉，只是比较沉默……。#l\r\n#L1#他好像很受女孩子们欢迎……#l\r\n#L2#总比吊儿郎当的要好……#l', 56, 0);
            } else {
                if (status === a++) {
                    if (selectionLog[status] == 0) {
                        cm.sendNormalTalk_Bottom('#face0#沉默？……你们把这叫沉默吗。他就是段不说话的木头，咳咳。', 37, 9111003, false, true);
                        gain(2);
                    } else {
                        if (selectionLog[status] == 1) {
                            cm.sendNormalTalk_Bottom('#face0#什……什么？真的吗。你说的是真的？那不可能……', 37, 9111003, false, true);
                            gain(1);
                        } else {
                            cm.sendNormalTalk_Bottom('#face0#你说吊儿郎当这话好像在针对谁哦，不过我是有肚量的人，就当你没说吧。', 37, 9111003, false, true);
                            gain(1);
                        }
                    }
                }
            }
        }
    }
}
function action分支3_1_0(d, c, b, a) {
    if (status <= a++) {
        cm.sendNormalTalk_Bottom('#face0#呵呵，这个话题我非常感兴趣。', 37, 9111003, false, true);
    } else {
        if (status === a++) {
            cm.sendNormalTalk_Bottom('#face0#你觉得谁最漂亮？', 37, 9111003, true, true);
        } else {
            if (status === a++) {
                cm.askMenu_Bottom('\r\n#L0#这个嘛，镰鼬你觉得谁最漂亮。#l\r\n#L1#你凭那样的长相……#l\r\n#L2#我不发表意见。#l', 56, 0);
            } else {
                if (status === a++) {
                    if (selectionLog[status] == 0) {
                        cm.sendNormalTalk_Bottom('#face0#根本难分高下嘛。用这种事来评判别人很幼稚。呵呵', 37, 9111003, false, true);
                        gain(1);
                    } else {
                        if (selectionLog[status] == 1) {
                            cm.sendNormalTalk_Bottom('#face0#你对我的长相有什么意见吗。每次我照镜子的时候总是很感慨啊……', 37, 9111003, false, true);
                            gain(3);
                        } else {
                            cm.sendNormalTalk_Bottom('#face1#话题明明是你挑起来的，你居然说不发表意见？真卑鄙', 37, 9111003, false, true);
                            gain(0);
                        }
                    }
                }
            }
        }
    }
}
function action分支3_1_1(d, c, b, a) {
    if (status <= a++) {
        cm.sendNormalTalk_Bottom('#face0#你居然把我说的话当成是唠叨。', 37, 9111003, false, true);
    } else {
        if (status === a++) {
            cm.sendNormalTalk_Bottom('#face0#唉，现在的年轻人啊，一点不懂得忠言逆耳利于行的道理。', 37, 9111003, true, true);
        } else {
            if (status === a++) {
                cm.askMenu_Bottom('\r\n#L0#我觉得确实是很啰嗦没错。#l\r\n#L1#你说的是好话吧？#l\r\n#L2#我仔细想了想，是夸奖呢。#l', 56, 0);
            } else {
                if (status === a++) {
                    if (selectionLog[status] == 0) {
                        cm.sendNormalTalk_Bottom('#face0#可恶，我才不是老头子！', 37, 9111003, false, true);
                        gain(1);
                    } else {
                        if (selectionLog[status] == 1) {
                            cm.sendNormalTalk_Bottom('#face0#你有问题吗？但我是日本的精神支柱这一点是不会改变的。', 37, 9111003, false, true);
                            gain(2);
                        } else {
                            cm.sendNormalTalk_Bottom('#face0#呵呵，现在总算来了个精神正常的年轻人。', 37, 9111003, false, true);
                            gain(3);
                        }
                    }
                }
            }
        }
    }
}
function action分支3_1_2(d, c, b, a) {
    if (status <= a++) {
        cm.sendNormalTalk_Bottom('#face0#虽不知道你是从哪里听说的，不过事实确实如此。', 37, 9111003, false, true);
    } else {
        if (status === a++) {
            cm.sendNormalTalk_Bottom('#face2#我最喜欢睡觉啦！！！', 37, 9111003, true, true);
        } else {
            if (status === a++) {
                cm.askMenu_Bottom('\r\n#L0#我也很喜欢睡觉。#l\r\n#L1#是护肤秘诀吗？#l\r\n#L2#睡觉跟成长没什么关系吧。#l', 56, 0);
            } else {
                if (status === a++) {
                    if (selectionLog[status] == 0) {
                        cm.sendNormalTalk_Bottom('#face0#所以说你要我怎样？我既不想提问也不好奇。', 37, 9111003, false, true);
                        gain(0);
                    } else {
                        if (selectionLog[status] == 1) {
                            cm.sendNormalTalk_Bottom('#face0#嗬，没想到你的眼神还挺敏锐的。你想不想做我的继承人呀？', 37, 9111003, false, true);
                            gain(2);
                        } else {
                            cm.sendNormalTalk_Bottom('#face0#从一开始我的成长就不受任何因素影响。你还不明白吗？哼', 37, 9111003, false, true);
                            gain(1);
                        }
                    }
                }
            }
        }
    }
}
function action分支3_2_0(d, c, b, a) {
    if (status <= a++) {
        cm.sendNormalTalk_Bottom('#face0#咳，我不是很想谈这个。我们换个话题。', 37, 9111003, false, true);
    } else {
        if (status === a++) {
            cm.askMenu_Bottom('\r\n#L0#为什么会那样？#l\r\n#L1#我听说是种诅咒。#l\r\n#L2#我明白了。是有原因的。#l', 56, 0);
        } else {
            if (status === a++) {
                if (selectionLog[status] == 0) {
                    cm.sendNormalTalk_Bottom('#face0#你这年轻人一点没礼貌。长辈既然拒绝了，你就该乖乖闭嘴。', 37, 9111003, false, true);
                    gain(0);
                } else {
                    if (selectionLog[status] == 1) {
                        cm.sendNormalTalk_Bottom('#face0#……。总之，我有不可说的理由。这话到此为止。', 37, 9111003, false, true);
                        gain(1);
                    } else {
                        cm.sendNormalTalk_Bottom('#face1#呵呵，你还有点懂得社会生活的游戏规则嘛？要塞有更多像你这样的年轻人就好了。', 37, 9111003, false, true);
                        gain(2);
                    }
                }
            }
        }
    }
}
function action分支3_2_1(d, c, b, a) {
    if (status <= a++) {
        cm.sendNormalTalk_Bottom('#face0#所谓年龄，也得数得清才叫年龄啊。', 37, 9111003, false, true);
    } else {
        if (status === a++) {
            cm.sendNormalTalk_Bottom('#face2#我已经不记得自己多少岁了。基本上从日本诞生之始，我也出生了。', 37, 9111003, true, true);
        } else {
            if (status === a++) {
                cm.askMenu_Bottom('\r\n#L0#呃咿，你完全是个老头子啊。#l\r\n#L1#你快要死了吗？#l\r\n#L2#你确实资历丰富。#l', 56, 0);
            } else {
                if (status === a++) {
                    if (selectionLog[status] == 0) {
                        cm.sendNormalTalk_Bottom('#face0#没礼貌。怎么能随便叫人老头子！', 37, 9111003, false, true);
                    } else {
                        if (selectionLog[status] == 1) {
                            cm.sendNormalTalk_Bottom('#face0#哦嗬，我度过的岁月都多如牛毛了，怎么可能活不长。我还会继续长长久久地活下去的。', 37, 9111003, false, true);
                            gain(1);
                        } else {
                            cm.sendNormalTalk_Bottom('#face0#我的搜查实力那么优秀，都来源于我丰富的资历。', 37, 9111003, false, true);
                            gain(1);
                        }
                    }
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom('#face0#你还是跟之前一样叫我大叔就行。', 37, 9111003, true, true);
                        gain(0);
                    }
                }
            }
        }
    }
}
function action分支3_2_2(d, c, b, a) {
    if (status <= a++) {
        cm.sendNormalTalk_Bottom('#face0#因为我爱多管闲事，所以跑过很多地方。但我做过最了不起的大事就是消灭了魔僧。', 37, 9111003, false, true);
    } else {
        if (status === a++) {
            cm.sendNormalTalk_Bottom('#face0#当时妖怪们差点儿就全成了那家伙的盘中餐。', 37, 9111003, true, true);
        } else {
            if (status === a++) {
                cm.askMenu_Bottom('\r\n#L0#魔僧为什么发狂？#l\r\n#L1#魔僧原本就是那样的妖怪吗？#l\r\n#L2#他为什么偏偏挑中了竹野子？#l', 56, 0);
            } else {
                if (status === a++) {
                    if (selectionLog[status] == 0) {
                        cm.sendNormalTalk_Bottom('#face0#因为他太贪心了。一点没有自知之明，非要追求过分的欲望，所以疯掉了，啧啧。', 37, 9111003, false, true);
                        gain(3);
                    } else {
                        if (selectionLog[status] == 1) {
                            cm.sendNormalTalk_Bottom('#face0#听说他原本也是个满腹贪欲的和尚。世上既然有我们这样的善良妖怪，自然也有邪恶的坏妖怪。', 37, 9111003, false, true);
                            gain(1);
                        } else {
                            cm.sendNormalTalk_Bottom('#face0#因为她漂亮……？……我开玩笑的。我之前也说过，因为她是半人半妖，所以选中了她。', 37, 9111003, false, true);
                            gain(1);
                        }
                    }
                }
            }
        }
    }
}
function action4(mode, type, selection) {
    if (inTalkCD()) {
        cm.sendNormalTalk_Bottom('#face0#你稍后再跟我对话。', 37, 9111004, false, false);
        cm.dispose();
        return;
    }
    if (status == 0 && mode == 0) {
        cm.dispose();
        return;
    }
    mode == 1 ? status++ : status--;
    selectionLog[status] = selection;
    var i = -1;
    if (status <= i++) {
        cm.dispose();
    } else {
        if (status === i++) {
            var value = cm.getNumberFromQuestInfo(58710, '' + cm.getNpc());
            if (value >= 70) {
                cm.sendNormalTalk_Bottom('#face0#哼哼，我感觉跟你聊得特别投缘。', 37, 9111004, false, true);
            } else {
                if (value >= 50) {
                    cm.sendNormalTalk_Bottom('#face0#呵呵，我现在比较闲，就跟你聊两句。', 37, 9111004, false, true);
                } else {
                    cm.sendNormalTalk_Bottom('#face2#我的时间可是很宝贵的！', 37, 9111004, false, true);
                }
            }
        } else {
            if (status === i++) {
                cm.askMenu_Bottom('\r\n#L0#询问喜欢的东西。#l\r\n#L1#谈论无头鬼。#l\r\n#L2#谈论征服宇宙的竞争者。#l', 56, 0);
            } else {
                if (status === i++) {
                    if (selectionLog[2] == 0) {
                        cm.sendNormalTalk_Bottom('打听他喜欢的东西。', 57, 0, false, true);
                    } else {
                        if (selectionLog[2] == 1) {
                            cm.sendNormalTalk_Bottom('聊聊无头鬼的事吧……', 57, 0, false, true);
                        } else {
                            cm.sendNormalTalk_Bottom('谈论征服宇宙的竞争者。', 57, 0, false, true);
                        }
                    }
                } else {
                    if (status === i++) {
                        if (selectionLog[2] == 0) {
                            cm.askMenu_Bottom('\r\n#L0#谈论竹野子的事。#l\r\n#L1#谈论追随者们的事。#l\r\n#L2#谈论香喷喷的东西。#l', 56, 0);
                        } else {
                            if (selectionLog[2] == 1) {
                                cm.askMenu_Bottom('\r\n#L0#谈论脖子上的缎带。#l\r\n#L1#谈论无头鬼的性格。#l\r\n#L2#谈论无头鬼的过去。#l', 56, 0);
                            } else {
                                cm.askMenu_Bottom('\r\n#L0#你知道黑魔法师吗？#l\r\n#L1#你知道格里梅尔吗？#l\r\n#L2#你知道白魔法师吗？#l', 56, 0);
                            }
                        }
                    } else {
                        var reactor = 'action分支' + cm.getNpc() + '_' + selectionLog[2] + '_' + selectionLog[4];
                        eval(reactor)(mode, type, selection, i);
                    }
                }
            }
        }
    }
}
function action分支4_0_0(d, c, b, a) {
    if (status <= a++) {
        cm.sendNormalTalk_Bottom('#face0#竹……竹野子是我见过的妖怪中最美丽，最善良的。', 37, 9111004, false, true);
    } else {
        if (status === a++) {
            cm.askMenu_Bottom('\r\n#L0#你对她是一见钟情吗？#l\r\n#L1#如果竹野子拒绝你，你要怎么办？#l\r\n#L2#木野子应该会强烈反对。#l', 56, 0);
        } else {
            if (status === a++) {
                if (selectionLog[status] == 0) {
                    cm.sendNormalTalk_Bottom('#face0#呵，因为我一眼就看出她是最适合我的女人。', 37, 9111004, false, true);
                } else {
                    if (selectionLog[status] == 1) {
                        cm.sendNormalTalk_Bottom('#face0#不可能。她不可能抗拒得了我的魅力！', 37, 9111004, false, true);
                        gain(1);
                    } else {
                        cm.sendNormalTalk_Bottom('#face1#唔，我有想过这一点……但我不会轻易屈服的。', 37, 9111004, false, true);
                        gain(2);
                    }
                }
            } else {
                if (status === a++) {
                    if (selectionLog[status] == 0) {
                        cm.sendNormalTalk_Bottom('#face0#这也是我能力的一种体现。', 37, 9111004, true, true);
                        gain(3);
                    }
                }
            }
        }
    }
}
function action分支4_0_1(d, c, b, a) {
    if (status <= a++) {
        cm.sendNormalTalk_Bottom('#face0#能跟伟大的我说话，是妖怪们的荣幸。', 37, 9111004, false, true);
    } else {
        if (status === a++) {
            cm.askMenu_Bottom('\r\n#L0#你好像偶像明星一样……#l\r\n#L1#她为什么要喜欢你？#l\r\n#L2#那些妖怪也这么想吗。#l', 56, 0);
        } else {
            if (status === a++) {
                if (selectionLog[status] == 0) {
                    cm.sendNormalTalk_Bottom('#face0#你居然拿肤浅的人类跟我比较，我天生就比他们高贵多了。', 37, 9111004, false, true);
                    gain(0);
                } else {
                    if (selectionLog[status] == 1) {
                        cm.sendNormalTalk_Bottom('#face0#喜欢我还需要理由吗～凡事干嘛讲究原因', 37, 9111004, false, true);
                    } else {
                        cm.sendNormalTalk_Bottom('#face0#当然啦。不过之前我确实出了点丑。', 37, 9111004, false, true);
                        gain(2);
                    }
                }
            } else {
                if (status === a++) {
                    if (selectionLog[status] == 1) {
                        cm.sendNormalTalk_Bottom('#face0#正如人类从出生之始，就会仰慕高贵的事物一样。', 37, 9111004, true, true);
                        gain(3);
                    }
                }
            }
        }
    }
}
function action分支4_0_2(d, c, b, a) {
    if (status <= a++) {
        cm.sendNormalTalk_Bottom('#face0#我最近有吃过香喷喷的东西。', 37, 9111004, false, true);
    } else {
        if (status === a++) {
            cm.sendNormalTalk_Bottom('#face2#但只是味道香罢了，人类为什么要吃那些东西呢？', 37, 9111004, true, true);
        } else {
            if (status === a++) {
                cm.askMenu_Bottom('\r\n#L0#因为人类会从食物中获取营养。#l\r\n#L1#虽然能闻到香味，却尝不出味道吗。#l\r\n#L2#那妖怪们吃什么呢？#l', 56, 0);
            } else {
                if (status === a++) {
                    if (selectionLog[status] == 0) {
                        gain(2);
                    } else {
                        if (selectionLog[status] == 1) {
                            cm.sendNormalTalk_Bottom('#face0#我们妖怪比人类更擅长嗅味道不是很正常的吗？', 37, 9111004, false, true);
                            gain(0);
                        } else {
                            cm.sendNormalTalk_Bottom('#face0#每个妖怪都不一样啦。', 37, 9111004, false, true);
                        }
                    }
                } else {
                    if (status === a++) {
                        if (selectionLog[status] == 0) {
                            gain(2);
                        } else {
                            if (selectionLog[status] == 1) {
                                cm.sendNormalTalk_Bottom('#face0#我们妖怪比人类更擅长嗅味道不是很正常的吗？', 37, 9111004, false, true);
                                gain(0);
                            } else {
                                cm.sendNormalTalk_Bottom('#face0#有的妖怪像人类一样从树木的果实或黄瓜等食物中摄取营养，而像我们这类妖怪则是靠吸取阴气为生。', 37, 9111004, true, true);
                                gain(1);
                            }
                        }
                    }
                }
            }
        }
    }
}
function action分支4_1_0(d, c, b, a) {
    if (status <= a++) {
        cm.sendNormalTalk_Bottom('#face0#每当无头鬼心情不好或者状态不佳的时候，她常常会抚摸她脖子上的缎带。', 37, 9111004, false, true);
    } else {
        if (status === a++) {
            cm.askMenu_Bottom('\r\n#L0#是为了遮掩伤口吗。#l\r\n#L1#看样子她还是很在意。#l\r\n#L2#没想到你还挺注意观察的。#l', 56, 0);
        } else {
            if (status === a++) {
                if (selectionLog[status] == 0) {
                    cm.sendNormalTalk_Bottom('#face0#那伤口是镰鼬在无头鬼作为人类时砍了她脖子造成的。', 37, 9111004, false, true);
                    gain(0);
                } else {
                    if (selectionLog[status] == 1) {
                        cm.sendNormalTalk_Bottom('#face0#我估计直到无头鬼的妖怪生活终结为止她都会很在意的。', 37, 9111004, false, true);
                        gain(2);
                    } else {
                        cm.sendNormalTalk_Bottom('#face2#无头鬼抚摸缎带的话，就说明她可能要开始唠叨我了，要么就是因为我指使她去做她讨厌的事。', 37, 9111004, false, true);
                        gain(3);
                    }
                }
            }
        }
    }
}
function action分支4_1_1(d, c, b, a) {
    if (status <= a++) {
        cm.sendNormalTalk_Bottom('#face0#首先，她很聪明。虽说要辅佐我必须得有点脑子，但她是我见过的妖怪中除了我之外最聪明的。', 37, 9111004, false, true);
    } else {
        if (status === a++) {
            cm.sendNormalTalk_Bottom('#face0#而且她很细心。', 37, 9111004, true, true);
        } else {
            if (status === a++) {
                cm.askMenu_Bottom('\r\n#L0#聪明的妖怪吗。也对，有万事屋在……#l\r\n#L1#她填补了你的很多不足之处。#l\r\n#L2#你们是很合适的组合。#l', 56, 0);
            } else {
                if (status === a++) {
                    if (selectionLog[status] == 0) {
                        cm.sendNormalTalk_Bottom('#face0#你居然拿我跟那个小鬼作比较。', 37, 9111004, false, true);
                    } else {
                        if (selectionLog[status] == 1) {
                            cm.sendNormalTalk_Bottom('#face2#哼，我才没有什么不足之处！！', 37, 9111004, false, true);
                        } else {
                            cm.sendNormalTalk_Bottom('#face0#嗯，很合适，必须合适啊。', 37, 9111004, false, true);
                        }
                    }
                } else {
                    if (status === a++) {
                        if (selectionLog[status] == 0) {
                            cm.sendNormalTalk_Bottom('#face0#你要知道无头鬼活的时间可比她长得多了！', 37, 9111004, true, true);
                            gain(1);
                        } else {
                            if (selectionLog[status] == 1) {
                                cm.sendNormalTalk_Bottom('#face0#我将来也是要征服宇宙的，所以我无比完美！', 37, 9111004, true, true);
                                gain(0);
                            } else {
                                cm.sendNormalTalk_Bottom('#face0#要想辅佐我的话，至少得像无头鬼那么优秀才行', 37, 9111004, true, true);
                                gain(2);
                            }
                        }
                    }
                }
            }
        }
    }
}
function action分支4_1_2(d, c, b, a) {
    if (status <= a++) {
        cm.sendNormalTalk_Bottom('#face0#她不跟我说。我们之间只会聊些对未来的打算。', 37, 9111004, false, true);
    } else {
        if (status === a++) {
            cm.sendNormalTalk_Bottom('#face0#绝对不会回顾过去。', 37, 9111004, true, true);
        } else {
            if (status === a++) {
                cm.askMenu_Bottom('\r\n#L0#唔，是不是因为不相信你？#l\r\n#L1#看来她非常看重未来的发展。#l\r\n#L2#听说她原先是位将领。#l', 56, 0);
            } else {
                if (status === a++) {
                    if (selectionLog[status] == 0) {
                        cm.sendNormalTalk_Bottom('#face0#不可能！', 37, 9111004, false, true);
                    } else {
                        if (selectionLog[status] == 1) {
                            cm.sendNormalTalk_Bottom('#face0#呵，这不是理所当然的吗。', 37, 9111004, false, true);
                        } else {
                            cm.sendNormalTalk_Bottom('#face2#呃呃……你从哪里听说这种话的。', 37, 9111004, false, true);
                        }
                    }
                } else {
                    if (status === a++) {
                        if (selectionLog[status] == 0) {
                            cm.sendNormalTalk_Bottom('#face0#因为我们一直在向前冲，所以没空回忆过去。', 37, 9111004, true, true);
                            gain(1);
                        } else {
                            if (selectionLog[status] == 1) {
                                cm.sendNormalTalk_Bottom('#face0#当妖怪力气耗尽即将消亡时，也需要有个可以静养的地方。如果现在不努力去准备的话……', 37, 9111004, true, true);
                                gain(2);
                            } else {
                                cm.sendNormalTalk_Bottom('#face0#无头鬼为什么不跟我说呢。', 37, 9111004, true, true);
                                gain(1);
                            }
                        }
                    }
                }
            }
        }
    }
}
function action分支4_2_0(d, c, b, a) {
    if (status <= a++) {
        cm.sendNormalTalk_Bottom('#face0#哼，黑魔法师吗，这名字好土，他是中世纪的人吗。', 37, 9111004, false, true);
    } else {
        if (status === a++) {
            cm.askMenu_Bottom('\r\n#L0#黑魔法师真的很厉害。#l\r\n#L1#他统治了冒险岛10多年。#l\r\n#L2#听说他有个被称作军团长的部下。#l', 56, 0);
        } else {
            if (status === a++) {
                if (selectionLog[status] == 0) {
                    cm.sendNormalTalk_Bottom('#face0#人类再怎么变强，也休想赶上我的实力。', 37, 9111004, false, true);
                    gain(1);
                } else {
                    if (selectionLog[status] == 1) {
                        cm.sendNormalTalk_Bottom('#face0#冒险岛在哪里？你帮我叫无头鬼来一下，我要看看地图。', 37, 9111004, false, true);
                        gain(2);
                    } else {
                        cm.sendNormalTalk_Bottom('#face1#我也有恶灵队长和无头鬼辅佐。我不可能比不过他，他根本没资格跟我比较！', 37, 9111004, false, true);
                        gain(2);
                    }
                }
            }
        }
    }
}
function action分支4_2_1(d, c, b, a) {
    if (status <= a++) {
        cm.sendNormalTalk_Bottom('#face0#格里梅尔？他是谁？我应该要知道他吗？', 37, 9111004, false, true);
    } else {
        if (status === a++) {
            cm.askMenu_Bottom('\r\n#L0#他是个疯狂科学家。#l\r\n#L1#据说他连克隆人都能造出来。#l\r\n#L2#不过比你长得丑……#l', 56, 0);
        } else {
            if (status === a++) {
                if (selectionLog[status] == 0) {
                    cm.sendNormalTalk_Bottom('#face0#你到底在说什么？', 37, 9111004, false, true);
                } else {
                    if (selectionLog[status] == 1) {
                        cm.sendNormalTalk_Bottom('#face0#克隆人？切，你看见从我体内复制出的这无数亡灵没？屁大点事有什么好惊讶的。', 37, 9111004, false, true);
                        gain(0);
                    } else {
                        cm.sendNormalTalk_Bottom('#face0#你在这天底下找找有哪个比我鵺长得更俊美的。估计找不到哦。', 37, 9111004, false, true);
                    }
                }
            } else {
                if (status === a++) {
                    if (selectionLog[status] == 0) {
                        cm.sendNormalTalk_Bottom('#face0#我实在听不懂你在说哪国话。你说清楚点。', 37, 9111004, true, true);
                        gain(1);
                    } else {
                        cm.sendNormalTalk_Bottom('#face0#世间万物都要对我的美貌赞不绝口，都要为我倾倒！', 37, 9111004, true, true);
                        gain(3);
                    }
                }
            }
        }
    }
}
function action分支4_2_2(d, c, b, a) {
    if (status <= a++) {
        cm.sendNormalTalk_Bottom('#face0#白魔法师……？这名字我听着就不喜欢。', 37, 9111004, false, true);
    } else {
        if (status === a++) {
            cm.askMenu_Bottom('\r\n#L0#据说他长得比你好看哦。#l\r\n#L1#听说他比你更邪恶。#l\r\n#L2#听说他比你更有钱。#l', 56, 0);
        } else {
            if (status === a++) {
                if (selectionLog[status] == 0) {
                    cm.sendNormalTalk_Bottom('#face0#这种无稽之谈我无法忍受。', 37, 9111004, false, true);
                } else {
                    if (selectionLog[status] == 1) {
                        cm.sendNormalTalk_Bottom('#face0#我晕，他真的是人类吗。我才是邪恶与黑暗的集合体好不好。', 37, 9111004, false, true);
                    } else {
                        cm.sendNormalTalk_Bottom('#face0#……………………咳咳……人类世界的钱财，不能成为评判我生活的标尺。', 37, 9111004, false, true);
                        gain(0);
                    }
                }
            } else {
                if (status === a++) {
                    if (selectionLog[status] == 0) {
                        cm.sendNormalTalk_Bottom('#face0#区区人类，怎么可能比我长得好看。', 37, 9111004, true, true);
                        gain(1);
                    } else {
                        if (selectionLog[status] == 1) {
                            cm.sendNormalTalk_Bottom('#face0#如果人类比我更邪恶，那肯定有问题。', 37, 9111004, true, true);
                            gain(1);
                        }
                    }
                }
            }
        }
    }
}
function action5(mode, type, selection) {
    if (inTalkCD()) {
        cm.sendNormalTalk_Bottom('#face0#我现在很忙。', 37, 9111005, false, false);
        cm.dispose();
        return;
    }
    if (status == 0 && mode == 0) {
        cm.dispose();
        return;
    }
    mode == 1 ? status++ : status--;
    selectionLog[status] = selection;
    var i = -1;
    if (status <= i++) {
        cm.dispose();
    } else {
        if (status === i++) {
            var value = cm.getNumberFromQuestInfo(58710, '' + cm.getNpc());
            if (value >= 70) {
                cm.sendNormalTalk_Bottom('#face0#很荣幸见到你，勇士。', 37, 9111005, false, true);
            } else {
                if (value >= 50) {
                    cm.sendNormalTalk_Bottom('#face0#你的话也许能帮上点忙，我就暂且听听吧。', 37, 9111005, false, true);
                } else {
                    cm.sendNormalTalk_Bottom('#face2#我光操心鵺大人就够忙的了……。', 37, 9111005, false, true);
                }
            }
        } else {
            if (status === i++) {
                cm.askMenu_Bottom('\r\n#L0#谈论鵺的事。#l\r\n#L1#谈论人类的生活。#l\r\n#L2#谈论爱好。#l', 56, 0);
            } else {
                if (status === i++) {
                    if (selectionLog[2] == 0) {
                        cm.sendNormalTalk_Bottom('谈论鵺的事。', 57, 0, false, true);
                    } else {
                        if (selectionLog[2] == 1) {
                            cm.sendNormalTalk_Bottom('聊聊人类的生活吧……', 57, 0, false, true);
                        } else {
                            cm.sendNormalTalk_Bottom('谈论爱好。', 57, 0, false, true);
                        }
                    }
                } else {
                    if (status === i++) {
                        if (selectionLog[2] == 0) {
                            cm.askMenu_Bottom('\r\n#L0#谈论与鵺相识的契机。#l\r\n#L1#谈论鵺提供的待遇。#l\r\n#L2#谈论鵺的性格。#l', 56, 0);
                        } else {
                            if (selectionLog[2] == 1) {
                                cm.askMenu_Bottom('\r\n#L0#你作为人类时经历的最伤心的事情是什么？#l\r\n#L1#你作为人类时经历的最开心的事情是什么？#l\r\n#L2#如果你重新变成人类，最想做什么？#l', 56, 0);
                            } else {
                                cm.askMenu_Bottom('\r\n#L0#无聊时做的事#l\r\n#L1#鵺的爱好#l\r\n#L2#作为人类时的爱好#l', 56, 0);
                            }
                        }
                    } else {
                        var reactor = 'action分支' + cm.getNpc() + '_' + selectionLog[2] + '_' + selectionLog[4];
                        eval(reactor)(mode, type, selection, i);
                    }
                }
            }
        }
    }
}
function action分支5_0_0(d, c, b, a) {
    if (status <= a++) {
        cm.sendNormalTalk_Bottom('#face0#鵺吗？……是他向我展示了亡者的诞生。', 37, 9111005, false, true);
    } else {
        if (status === a++) {
            cm.sendNormalTalk_Bottom('#face0#当时满心绝望的我，能生动地感受到亡者的那种黑暗。', 37, 9111005, true, true);
        } else {
            if (status === a++) {
                cm.askMenu_Bottom('\r\n#L0#鵺有多少岁啊？#l\r\n#L1#你们在亡者窟里相遇的吗？#l\r\n#L2#是你抚养鵺长大的吗？#l', 56, 0);
            } else {
                if (status === a++) {
                    if (selectionLog[status] == 0) {
                        cm.sendNormalTalk_Bottom('#face0#哼，你用不着知道。你只要记住他是个伟大的人物就行，管他多少岁。', 37, 9111005, false, true);
                        gain(0);
                    } else {
                        if (selectionLog[status] == 1) {
                            cm.sendNormalTalk_Bottom('#face0#像我这样怨恨深重的亡者全都聚集在那个地方。', 37, 9111005, false, true);
                        } else {
                            cm.sendNormalTalk_Bottom('#face1#我没有抚养他。他是自己成长起来的，我只是个旁观者。', 37, 9111005, false, true);
                        }
                    }
                } else {
                    if (status === a++) {
                        if (selectionLog[status] == 1) {
                            cm.sendNormalTalk_Bottom('#face1#鵺很特别，他不是在人间诞生的，而是从黑暗中诞生的。', 37, 9111005, true, true);
                            gain(2);
                        } else {
                            cm.sendNormalTalk_Bottom('#face1#以我的身份，怎么可能抚养他。', 37, 9111005, true, true);
                            gain(1);
                        }
                    }
                }
            }
        }
    }
}
function action分支5_0_1(d, c, b, a) {
    if (status <= a++) {
        cm.sendNormalTalk_Bottom('#face0#他还是个孩子。所以我不太在意他对我做的举动。', 37, 9111005, false, true);
    } else {
        if (status === a++) {
            cm.askMenu_Bottom('\r\n#L0#你比鵺更聪明啊。#l\r\n#L1#鵺对你好吗？#l\r\n#L2#你还是去找个对你好的人吧……#l', 56, 0);
        } else {
            if (status === a++) {
                if (selectionLog[status] == 0) {
                    cm.sendNormalTalk_Bottom('#face0#学识的丰富与否我并不在乎。', 37, 9111005, false, true);
                } else {
                    if (selectionLog[status] == 1) {
                        cm.sendNormalTalk_Bottom('#face1#只要他在我身边，就是对我好。', 37, 9111005, false, true);
                    } else {
                        cm.sendNormalTalk_Bottom('#face0#你的话太放肆了……希望你能明白那对我来说并无意义。', 37, 9111005, false, true);
                        gain(0);
                    }
                }
            } else {
                if (status === a++) {
                    if (selectionLog[status - 1] == 0) {
                        cm.sendNormalTalk_Bottom('#face0#鵺大人自出生起就比我地位高。', 37, 9111005, true, true);
                        gain(2);
                    } else {
                        if (selectionLog[status] == 1) {
                            cm.sendNormalTalk_Bottom('#face0#还有，我很感激他在有需要的时候会找我。', 37, 9111005, true, true);
                            gain(1);
                        }
                    }
                }
            }
        }
    }
}
function action分支5_0_2(d, c, b, a) {
    if (status <= a++) {
        cm.sendNormalTalk_Bottom('#face0#那是十分纯粹的黑暗。哪怕一粒尘埃掉下去都会被瞬间埋没的黑暗。', 37, 9111005, false, true);
    } else {
        if (status === a++) {
            cm.askMenu_Bottom('\r\n#L0#你的话好难懂。#l\r\n#L1#你的意思是黑暗面……？#l\r\n#L2#你是想形容脾气臭吧？#l', 56, 0);
        } else {
            if (status === a++) {
                if (selectionLog[status] == 0) {
                    cm.sendNormalTalk_Bottom('#face0#你记住，纯净的边缘，即是黑暗。', 37, 9111005, false, true);
                    gain(3);
                } else {
                    if (selectionLog[status] == 1) {
                        cm.sendNormalTalk_Bottom('#face0#那是什么？我不能随便谈论我不知道的东西，你给我解释一下。', 37, 9111005, false, true);
                        gain(1);
                    } else {
                        cm.sendNormalTalk_Bottom('#face0#……嗯……', 37, 9111005, false, true);
                        gain(0);
                    }
                }
            }
        }
    }
}
function action分支5_1_0(d, c, b, a) {
    if (status <= a++) {
        cm.sendNormalTalk_Bottom('#face0#我无需费心去想，那画面都能立即在我脑海里蹦出来。', 37, 9111005, false, true);
    } else {
        if (status === a++) {
            cm.sendNormalTalk_Bottom('#face0#镰鼬在我眼前砍杀我的部下时，我感到无比地绝望和悲伤。', 37, 9111005, true, true);
        } else {
            if (status === a++) {
                cm.askMenu_Bottom('\r\n#L0#你还恨镰鼬吗？#l\r\n#L1#是镰鼬对不起你啊#l\r\n#L2#你还是忘了吧……#l', 56, 0);
            } else {
                if (status === a++) {
                    if (selectionLog[status] == 0) {
                        cm.sendNormalTalk_Bottom('#face0#哼，至今我只要一想到镰鼬，就觉得脖子火辣辣地疼。', 37, 9111005, false, true);
                    } else {
                        if (selectionLog[status] == 1) {
                            cm.sendNormalTalk_Bottom('#face2#……可是那该死的镰鼬只说他是一时失手，不认为是他做错了……', 37, 9111005, false, true);
                            gain(1);
                        } else {
                            cm.sendNormalTalk_Bottom('#face1#我的部下们，他们对我来说不仅仅只是部下啊。在战场上，他们就是我的家人。如果换做是你，你忘得了吗？', 37, 9111005, false, true);
                            gain(0);
                        }
                    }
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom('#face0#那种疼痛常常使我在睡梦中惊醒。', 37, 9111005, true, true);
                        gain(1);
                    }
                }
            }
        }
    }
}
function action分支5_1_1(d, c, b, a) {
    if (status <= a++) {
        cm.sendNormalTalk_Bottom('#face0#是被任命为最年轻将领的时候。那是我一辈子最感到自豪的事。', 37, 9111005, false, true);
    } else {
        if (status === a++) {
            cm.askMenu_Bottom('\r\n#L0#你当时多少岁？#l\r\n#L1#你能当上将领，肯定很聪明。#l\r\n#L2#除了这个之外呢？#l', 56, 0);
        } else {
            if (status === a++) {
                if (selectionLog[status] == 0) {
                    gain(1);
                } else {
                    if (selectionLog[status] == 1) {
                        cm.sendNormalTalk_Bottom('#face0#为了在战场上获得胜利，不光光需要剑术实力，还需要在战略上有过人的头脑。', 37, 9111005, false, true);
                    } else {
                        cm.sendNormalTalk_Bottom('#face0#……。现在回想起来，我以前只为战争而活了。', 37, 9111005, false, true);
                    }
                }
            } else {
                if (status === a++) {
                    if (selectionLog[status] == 0) {
                        gain(1);
                    } else {
                        if (selectionLog[status] == 1) {
                            cm.sendNormalTalk_Bottom('#face0#而我，正是在所有方面都领先于他人。', 37, 9111005, true, true);
                            gain(2);
                        } else {
                            cm.sendNormalTalk_Bottom('#face0#也许我如今的下场，正是那些在我剑下死去的亡魂们的诅咒。', 37, 9111005, true, true);
                            gain(3);
                        }
                    }
                }
            }
        }
    }
}
function action分支5_1_2(d, c, b, a) {
    if (status <= a++) {
        cm.sendNormalTalk_Bottom('#face0#如果能重新变成人类，我想做什么？', 37, 9111005, false, true);
    } else {
        if (status === a++) {
            cm.sendNormalTalk_Bottom('#face1#我希望在结束一场战争后，脱下沉重的盔甲，和部下们一起坐在篝火旁烤兔肉吃。', 37, 9111005, true, true);
        } else {
            if (status === a++) {
                cm.askMenu_Bottom('\r\n#L0#你是个好战的人啊。#l\r\n#L1#你现在也可以吃兔肉啊。#l\r\n#L2#你的部下们没有变成亡者吗。#l', 56, 0);
            } else {
                if (status === a++) {
                    if (selectionLog[status] == 0) {
                        cm.sendNormalTalk_Bottom('#face0#只有战争，才能让我感到活着的意义。', 37, 9111005, false, true);
                    } else {
                        if (selectionLog[status] == 1) {
                            cm.sendNormalTalk_Bottom('#face0#不行。自从我死后，就再也没有感觉到食欲，也尝不出味道了。', 37, 9111005, false, true);
                        } else {
                            cm.sendNormalTalk_Bottom('#face2#因为当年他们还来不及抱憾，就被斩了头。', 37, 9111005, false, true);
                        }
                    }
                } else {
                    if (status === a++) {
                        if (selectionLog[status] == 0) {
                            cm.sendNormalTalk_Bottom('#face0#从剑尖传来的触感，那是我活着的证明。', 37, 9111005, true, true);
                            gain(2);
                        } else {
                            if (selectionLog[status] == 1) {
                                cm.sendNormalTalk_Bottom('#face0#现在，我甚至已经不太记得兔肉是什么滋味了。', 37, 9111005, true, true);
                                gain(0);
                            } else {
                                cm.sendNormalTalk_Bottom('#face0#人类死后，必须要有像我一样，或者比我更深的怨恨，才会变成亡者。', 37, 9111005, true, true);
                                gain(1);
                            }
                        }
                    }
                }
            }
        }
    }
}
function action分支5_2_0(d, c, b, a) {
    if (status <= a++) {
        cm.sendNormalTalk_Bottom('#face0#我辅佐鵺大人的期间，根本不可能无聊。我总是在为他东奔西走。', 37, 9111005, false, true);
    } else {
        if (status === a++) {
            cm.askMenu_Bottom('\r\n#L0#你主要做些什么呢？#l\r\n#L1#为什么要那么做？#l\r\n#L2#除了这个之外呢？#l', 56, 0);
        } else {
            if (status === a++) {
                if (selectionLog[status] == 0) {
                    cm.sendNormalTalk_Bottom('#face0#我一般帮鵺大人传话，或者主要做些铲除异己的工作。', 37, 9111005, false, true);
                    gain(1);
                } else {
                    if (selectionLog[status] == 1) {
                        cm.sendNormalTalk_Bottom('#face0#呵，你就当那是我存在的理由吧。', 37, 9111005, false, true);
                    } else {
                        cm.sendNormalTalk_Bottom('#face1#自从成为亡者后，我对一切事情都失去了兴趣。', 37, 9111005, false, true);
                    }
                }
            } else {
                if (status === a++) {
                    if (selectionLog[status] == 1) {
                        cm.sendNormalTalk_Bottom('#face0#我还为那些绝望的亡者送去信仰，帮助他们以亡者的身份开始新生活。', 37, 9111005, true, true);
                        gain(2);
                    } else {
                        cm.sendNormalTalk_Bottom('#face1#对亡者来说，那无边无际的时间是让一切事情失去乐趣的罪魁祸首。', 37, 9111005, true, true);
                        gain(0);
                    }
                }
            }
        }
    }
}
function action分支5_2_1(d, c, b, a) {
    if (status <= a++) {
        cm.sendNormalTalk_Bottom('#face0#呃……他原本不是那样的人。但最近他为了追竹野子，培养出了怪癖。', 37, 9111005, false, true);
    } else {
        if (status === a++) {
            cm.askMenu_Bottom('\r\n#L0#怪癖？#l\r\n#L1#难不成你在嫉妒竹野子。#l\r\n#L2#除了那个之外，还有其他的吗？#l', 56, 0);
        } else {
            if (status === a++) {
                if (selectionLog[status] == 0) {
                    cm.sendNormalTalk_Bottom('#face2#比如看些关于恋爱关系的书等等。我一看他那样就来气。', 37, 9111005, false, true);
                    gain(0);
                } else {
                    if (selectionLog[status] == 1) {
                        cm.sendNormalTalk_Bottom('#face0#嫉妒？我与鵺大人的关系更甚于父母家人，不适合用这个词语。', 37, 9111005, false, true);
                    } else {
                        cm.sendNormalTalk_Bottom('#face0#我希望你不要对鵺大人的私生活打探太多。你知道那么多干嘛？……难不成……？', 37, 9111005, false, true);
                        gain(0);
                    }
                }
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom('#face0#我只是担心他罢了。', 37, 9111005, true, true);
                    gain(2);
                }
            }
        }
    }
}
function action分支5_2_2(d, c, b, a) {
    if (status <= a++) {
        cm.sendNormalTalk_Bottom('#face0#剑术修炼。我每天的起始和结束都有剑相伴。我现在也偶尔会修炼下剑术……', 37, 9111005, false, true);
    } else {
        if (status === a++) {
            cm.sendNormalTalk_Bottom('#face0#我还养过一只猫。', 37, 9111005, true, true);
        } else {
            if (status === a++) {
                cm.askMenu_Bottom('\r\n#L0#你这不像女孩子的爱好啊。#l\r\n#L1#猫咪？#l\r\n#L2#难怪你的剑术实力那么出色。#l', 56, 0);
            } else {
                if (status === a++) {
                    if (selectionLog[status] == 0) {
                        cm.sendNormalTalk_Bottom('#face0#哼，不管是在我活着的时候，还是我死后，女人这个性别对我来说都是种累赘。没有任何意义。', 37, 9111005, false, true);
                        gain(1);
                    } else {
                        if (selectionLog[status] == 1) {
                            cm.sendNormalTalk_Bottom('#face0#它是战场上鞍前马后陪伴我的好伙伴。我死后就不知道它去哪儿了……', 37, 9111005, false, true);
                            gain(1);
                        } else {
                            cm.sendNormalTalk_Bottom('#face0#我当年可是织田军里最优秀的剑客和将领。', 37, 9111005, false, true);
                        }
                    }
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom('#face0#如果我还活着，还不知道会有多少将领要死在我的剑下。', 37, 9111005, true, true);
                        gain(3);
                    }
                }
            }
        }
    }
}
function action6(mode, type, selection) {
    if (inTalkCD()) {
        cm.sendNormalTalk_Bottom('#face0#稍等～', 37, 9111006, false, false);
        cm.dispose();
        return;
    }
    if (status == 0 && mode == 0) {
        cm.dispose();
        return;
    }
    mode == 1 ? status++ : status--;
    selectionLog[status] = selection;
    var i = -1;
    if (status <= i++) {
        cm.dispose();
    } else {
        if (status === i++) {
            var value = cm.getNumberFromQuestInfo(58710, '' + cm.getNpc());
            if (value >= 70) {
                cm.sendNormalTalk_Bottom('#face2#哇！！勇士，很高兴见到你！！', 37, 9111006, false, true);
            } else {
                if (value >= 50) {
                    cm.sendNormalTalk_Bottom('#face0#有时候我也想找人说说话。', 37, 9111006, false, true);
                } else {
                    cm.sendNormalTalk_Bottom('#face1#……呼呼……', 37, 9111006, false, true);
                }
            }
        } else {
            if (status === i++) {
                cm.askMenu_Bottom('\r\n#L0#谈论喜欢的东西#l\r\n#L1#谈论九尾狐的事。#l\r\n#L2#谈论讨厌的东西。#l', 56, 0);
            } else {
                if (status === i++) {
                    if (selectionLog[2] == 0) {
                        cm.sendNormalTalk_Bottom('说说你喜欢的东西吧。', 57, 0, false, true);
                    } else {
                        if (selectionLog[2] == 1) {
                            cm.sendNormalTalk_Bottom('要不要聊聊九尾狐的事？', 57, 0, false, true);
                        } else {
                            cm.sendNormalTalk_Bottom('说说你讨厌的东西吧。', 57, 0, false, true);
                        }
                    }
                } else {
                    if (status === i++) {
                        if (selectionLog[2] == 0) {
                            cm.askMenu_Bottom('\r\n#L0#你是吃货吗？#l\r\n#L1#你喜欢泉奈吗？#l\r\n#L2#你喜欢动物吗？#l', 56, 0);
                        } else {
                            if (selectionLog[2] == 1) {
                                cm.askMenu_Bottom('\r\n#L0#九尾狐的梦#l\r\n#L1#九尾狐的私语#l\r\n#L2#九尾狐的封印#l', 56, 0);
                            } else {
                                cm.askMenu_Bottom('\r\n#L0#谈论最讨厌的东西。#l\r\n#L1#谈论第二讨厌的东西。#l\r\n#L2#谈论被人讨厌的事。#l', 56, 0);
                            }
                        }
                    } else {
                        var reactor = 'action分支' + cm.getNpc() + '_' + selectionLog[2] + '_' + selectionLog[4];
                        eval(reactor)(mode, type, selection, i);
                    }
                }
            }
        }
    }
}
function action分支6_0_0(d, c, b, a) {
    if (status <= a++) {
        cm.sendNormalTalk_Bottom('#face0#狐狸只吃肉是个误会。我们也会吃些美味的水果。', 37, 9111006, false, true);
    } else {
        if (status === a++) {
            cm.askMenu_Bottom('\r\n#L0#你一般吃什么水果。#l\r\n#L1#你最喜欢什么水果#l\r\n#L2#你为什么吃水果？#l', 56, 0);
        } else {
            if (status === a++) {
                if (selectionLog[status] == 0) {
                    cm.sendNormalTalk_Bottom('#face0#一般只要是树上长的果实我都吃。', 37, 9111006, false, true);
                } else {
                    if (selectionLog[status] == 1) {
                        cm.sendNormalTalk_Bottom('#face2#当然是樱桃……嘿嘿……樱桃又香又甜真好吃。', 37, 9111006, false, true);
                        gain(2);
                    } else {
                        cm.sendNormalTalk_Bottom('#face1#嗯，因为吃了很多肉之后，腥味会很重，导致我常常被其他野兽追赶。', 37, 9111006, false, true);
                        gain(1);
                    }
                }
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom('#face0#啊对了，妈妈说过绿色的果实不能吃。', 37, 9111006, true, true);
                    gain(0);
                }
            }
        }
    }
}
function action分支6_0_1(d, c, b, a) {
    if (status <= a++) {
        cm.sendNormalTalk_Bottom('#face0#嗯，我喜欢泉奈。', 37, 9111006, false, true);
    } else {
        if (status === a++) {
            cm.askMenu_Bottom('\r\n#L0#你以前暗恋过她吧？#l\r\n#L1#现在还喜欢她吗？#l\r\n#L2#你以后打算怎么办？#l', 56, 0);
        } else {
            if (status === a++) {
                if (selectionLog[status] == 0) {
                    cm.sendNormalTalk_Bottom('#face2#……嘻嘻……泉奈好像并不知情，但我以前非常喜欢泉奈。', 37, 9111006, false, true);
                } else {
                    if (selectionLog[status] == 1) {
                        cm.sendNormalTalk_Bottom('#face0#老实说现在没从前那么喜欢她了。', 37, 9111006, false, true);
                    } else {
                        cm.sendNormalTalk_Bottom('#face2#我现在也很喜欢泉奈，以后也会一直喜欢下去。', 37, 9111006, false, true);
                    }
                }
            } else {
                if (status === a++) {
                    if (selectionLog[status - 1] == 0) {
                        cm.sendNormalTalk_Bottom('#face0#我有时候看着泉奈的眼睛，会觉得心动。', 37, 9111006, true, true);
                        gain(2);
                    } else {
                        if (selectionLog[status - 1] == 1) {
                            cm.sendNormalTalk_Bottom('#face0#但比起其他原因，我觉得可能是受了九尾狐的影响。我估计九尾狐会对我的感情造成影响。', 37, 9111006, true, true);
                            gain(1);
                        } else {
                            cm.sendNormalTalk_Bottom('#face0#但我还不知道自己今后该怎么做。', 37, 9111006, true, true);
                            gain(0);
                        }
                    }
                }
            }
        }
    }
}
function action分支6_0_2(d, c, b, a) {
    if (status <= a++) {
        cm.sendNormalTalk_Bottom('#face1#动……动物吗……？……呃呃……好可怕。', 37, 9111006, false, true);
    } else {
        if (status === a++) {
            cm.askMenu_Bottom('\r\n#L0#老鼠不是很小吗，老鼠怎么样？#l\r\n#L1#可爱的小狗呢？猫咪呢？#l\r\n#L2#嗷呜～老虎呢？#l', 56, 0);
        } else {
            if (status === a++) {
                if (selectionLog[status] == 0) {
                    cm.sendNormalTalk_Bottom('#face1#老鼠好恶心！尤其是那长长的尾巴，实在太恶心了。我讨厌老鼠。', 37, 9111006, false, true);
                    gain(3);
                } else {
                    if (selectionLog[status] == 1) {
                        cm.sendNormalTalk_Bottom('#face0#小狗和猫咪嘛……它们有时候会散发出令我垂涎的味道，很危险。我不能太靠近它们。', 37, 9111006, false, true);
                        gain(2);
                    } else {
                        cm.sendNormalTalk_Bottom('#face0#我接近老虎时，我体内的九尾狐就会开始骚动……', 37, 9111006, false, true);
                    }
                }
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom('#face0#那样我可能会受到严重的伤害……所以我也害怕老虎。', 37, 9111006, true, true);
                    gain(0);
                }
            }
        }
    }
}
function action分支6_1_0(d, c, b, a) {
    if (status <= a++) {
        cm.sendNormalTalk_Bottom('#face0#九尾狐的梦吗？嗯……我现在偶尔还是会梦见九尾狐。不过没以前那么害怕了。', 37, 9111006, false, true);
    } else {
        if (status === a++) {
            cm.askMenu_Bottom('\r\n#L0#询问不害怕的原因。#l\r\n#L1#询问梦的内容#l\r\n#L2#为他解梦。#l', 56, 0);
        } else {
            if (status === a++) {
                if (selectionLog[status] == 0) {
                    cm.sendNormalTalk_Bottom('#face0#因为我见过更可怕的东西。那时候小伙伴们不是帮了我很多忙嘛。', 37, 9111006, false, true);
                } else {
                    if (selectionLog[status] == 1) {
                        cm.sendNormalTalk_Bottom('#face0#梦里九尾狐静静地盯着我看的时候比较多。', 37, 9111006, false, true);
                    } else {
                        cm.sendNormalTalk_Bottom('#face1#哈？你说那梦境代表我会赚很多钱？……。我可以信你吗。', 37, 9111006, false, true);
                        gain(0);
                    }
                }
            } else {
                if (status === a++) {
                    if (selectionLog[status - 1] == 0) {
                        cm.sendNormalTalk_Bottom('#face0#也可能是因为我不再持有五行了……？', 37, 9111006, true, true);
                        gain(1);
                    } else {
                        if (selectionLog[status - 1] == 1) {
                            cm.sendNormalTalk_Bottom('#face0#从前我都不敢看它的眼睛，但最近我可以跟它对视了。', 37, 9111006, true, true);
                            gain(2);
                        }
                    }
                }
            }
        }
    }
}
function action分支6_1_1(d, c, b, a) {
    if (status <= a++) {
        cm.sendNormalTalk_Bottom('#face0#我很～少听见九尾狐的私语。而且声音很小，必须仔细听才能听见。', 37, 9111006, false, true);
    } else {
        if (status === a++) {
            cm.askMenu_Bottom('\r\n#L0#询问私语的内容。#l\r\n#L1#询问声音的性别。#l\r\n#L2#对私语的真实性表示疑问。#l', 56, 0);
        } else {
            if (status === a++) {
                if (selectionLog[status] == 0) {
                    cm.sendNormalTalk_Bottom('#face0#除了它嘶吼着渴血的时候之外，平时其实声音很小，我也不太清楚。', 37, 9111006, false, true);
                } else {
                    if (selectionLog[status] == 1) {
                        cm.sendNormalTalk_Bottom('#face0#那声音是什么性别有什么关系？是女人的声音。这个很重要吗？', 37, 9111006, false, true);
                        gain(1);
                    } else {
                        cm.sendNormalTalk_Bottom('#face0#你到底想说什么。你觉得我是有幻听的神经病吗！哼。', 37, 9111006, false, true);
                        gain(0);
                    }
                }
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom('#face0#那私语声非常微弱，等我梦醒后，就全忘光了。', 37, 9111006, true, true);
                    gain(1);
                }
            }
        }
    }
}
function action分支6_1_2(d, c, b, a) {
    if (status <= a++) {
        cm.sendNormalTalk_Bottom('#face0#我想，也许在上次你战胜我心中的恐惧时，九尾狐就被封印了。', 37, 9111006, false, true);
    } else {
        if (status === a++) {
            cm.sendNormalTalk_Bottom('#face2#虽然不是实际上的封印，但效果差不多。', 37, 9111006, true, true);
        } else {
            if (status === a++) {
                cm.askMenu_Bottom('\r\n#L0#你现在不再害怕了吧？#l\r\n#L1#告诉我你战胜恐惧的方法吧。#l\r\n#L2#如果真的能操控九尾狐该多好……#l', 56, 0);
            } else {
                if (status === a++) {
                    if (selectionLog[status] == 0) {
                        cm.sendNormalTalk_Bottom('#face0#嗯。现在我觉得自己当时在内心深处感觉到的那种恐惧简直不像是真的。', 37, 9111006, false, true);
                        gain(1);
                    } else {
                        if (selectionLog[status] == 1) {
                            cm.sendNormalTalk_Bottom('#face0#我觉得这要从我敢于正视自己内心恐惧时开始。', 37, 9111006, false, true);
                            gain(1);
                        } else {
                            cm.sendNormalTalk_Bottom('#face0#嘿嘿，等以后吧……等以后我长大了，或许有这个可能性哦。', 37, 9111006, false, true);
                        }
                    }
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom('#face0#我现在不太想洗澡。', 37, 9111006, true, true);
                        gain(3);
                    }
                }
            }
        }
    }
}
function action分支6_2_0(d, c, b, a) {
    if (status <= a++) {
        cm.sendNormalTalk_Bottom('#face0#我以前最讨厌的就是九尾狐，但现在已经改了。现在我最讨厌洗澡。', 37, 9111006, false, true);
    } else {
        if (status === a++) {
            cm.askMenu_Bottom('\r\n#L0#你一天洗几次澡？#l\r\n#L1#为什么讨厌洗澡？#l\r\n#L2#你在哪里洗澡？#l', 56, 0);
        } else {
            if (status === a++) {
                if (selectionLog[status] == 0) {
                    cm.sendNormalTalk_Bottom('#face1#我自己觉得已经很用心洗澡了，没法回答你的问题。', 37, 9111006, false, true);
                    gain(0);
                } else {
                    if (selectionLog[status] == 1) {
                        cm.sendNormalTalk_Bottom('#face1#因为老是会掉很多毛啊。我的毛本来很厚实的……我的毛哇……呜呜呜', 37, 9111006, false, true);
                        gain(1);
                    } else {
                        cm.sendNormalTalk_Bottom('#face1#在狐狸山附近有一个非常非常清澈的湖。我们都是在那里洗澡的。', 37, 9111006, false, true);
                    }
                }
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom('#face1#你去那边也能见到泉……呃，她不许我说出去的……', 37, 9111006, true, true);
                    gain(2);
                }
            }
        }
    }
}
function action分支6_2_1(d, c, b, a) {
    if (status <= a++) {
        cm.sendNormalTalk_Bottom('#face0#第二讨厌的嘛，就是被强迫吃东西。', 37, 9111006, false, true);
    } else {
        if (status === a++) {
            cm.askMenu_Bottom('\r\n#L0#询问是谁强制喂食他。#l\r\n#L1#询问他被强制吃了什么。#l\r\n#L2#说他身在福中不知福。#l', 56, 0);
        } else {
            if (status === a++) {
                if (selectionLog[status] == 0) {
                    cm.sendNormalTalk_Bottom('#face0#呃呃，不光泉奈，我身边的其他狐妖小伙伴都这样，老是给我东西吃……我只有自己想吃的时候才吃东西。', 37, 9111006, false, true);
                    gain(2);
                } else {
                    if (selectionLog[status] == 1) {
                        cm.sendNormalTalk_Bottom('#face0#总之有很多种啦。大部分都是肉类，但我最近消化不良，主要还是吃素。', 37, 9111006, false, true);
                        gain(1);
                    } else {
                        cm.sendNormalTalk_Bottom('#face1#呃，我都说我不想吃额。为什么要强迫我啊。', 37, 9111006, false, true);
                        gain(0);
                    }
                }
            }
        }
    }
}
function action分支6_2_2(d, c, b, a) {
    if (status <= a++) {
        cm.sendNormalTalk_Bottom('#face2#我希望其他人不要讨厌我。', 37, 9111006, false, true);
    } else {
        if (status === a++) {
            cm.askMenu_Bottom('\r\n#L0#身负大家厚爱的话，会不会觉得有负担呢……？#l\r\n#L1#你觉得谁最讨厌你？#l\r\n#L2#你必须付出许多努力，才能获得爱#l', 56, 0);
        } else {
            if (status === a++) {
                if (selectionLog[status] == 0) {
                    cm.sendNormalTalk_Bottom('#face0#唔唔，我爸爸妈妈不是这样说的。他们说我长得很可爱，大家都会喜欢我的。难道不是吗？', 37, 9111006, false, true);
                    gain(3);
                } else {
                    if (selectionLog[status] == 1) {
                        cm.sendNormalTalk_Bottom('#face0#万事屋，要么就是木野子？', 37, 9111006, false, true);
                        gain(1);
                    } else {
                        cm.sendNormalTalk_Bottom('#face0#嗯，那我该做出哪些努力呢，嘿嘿', 37, 9111006, false, true);
                    }
                }
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom('#face0#要是我换个更可爱的发型，大家会不会更喜欢我。', 37, 9111006, true, true);
                    gain(2);
                }
            }
        }
    }
}
function action7(mode, type, selection) {
    if (inTalkCD()) {
        cm.sendNormalTalk_Bottom('#face0#请稍后再跟我对话好吗？', 37, 9111007, false, false);
        cm.dispose();
        return;
    }
    if (status == 0 && mode == 0) {
        cm.dispose();
        return;
    }
    mode == 1 ? status++ : status--;
    selectionLog[status] = selection;
    var i = -1;
    if (status <= i++) {
        cm.dispose();
    } else {
        if (status === i++) {
            var value = cm.getNumberFromQuestInfo(58710, '' + cm.getNpc());
            if (value >= 70) {
                cm.sendNormalTalk_Bottom('#face1#哈，很荣幸你来找我聊天！', 37, 9111007, false, true);
            } else {
                if (value >= 50) {
                    cm.sendNormalTalk_Bottom('#face0#虽说我不是非得跟你说话，但反正嘴巴闲着也是闲着。', 37, 9111007, false, true);
                } else {
                    cm.sendNormalTalk_Bottom('#face2#啊，我今天有点疲倦呢。', 37, 9111007, false, true);
                }
            }
        } else {
            if (status === i++) {
                cm.askMenu_Bottom('\r\n#L0#谈论暗的事。#l\r\n#L1#谈论爱好。#l\r\n#L2#谈论做梦。#l', 56, 0);
            } else {
                if (status === i++) {
                    if (selectionLog[2] == 0) {
                        cm.sendNormalTalk_Bottom('聊聊暗的事情吧？', 57, 0, false, true);
                    } else {
                        if (selectionLog[2] == 1) {
                            cm.sendNormalTalk_Bottom('我们聊聊兴趣爱好吧。', 57, 0, false, true);
                        } else {
                            cm.sendNormalTalk_Bottom('聊聊做梦的事吧。', 57, 0, false, true);
                        }
                    }
                } else {
                    if (status === i++) {
                        if (selectionLog[2] == 0) {
                            cm.askMenu_Bottom('\r\n#L0#询问她与暗的关系。#l\r\n#L1#询问暗的儿时佚事。#l\r\n#L2#询问暗体内九尾狐的事。#l', 56, 0);
                        } else {
                            if (selectionLog[2] == 1) {
                                cm.askMenu_Bottom('\r\n#L0#谈论最近沉迷的爱好。#l\r\n#L1#谈论最喜欢的爱好。#l\r\n#L2#谈论妖怪们的爱好。#l', 56, 0);
                            } else {
                                cm.askMenu_Bottom('\r\n#L0#泉奈，你的梦想是什么？#l\r\n#L1#你常常做梦吗？#l\r\n#L2#你相信梦境是反的吗？#l', 56, 0);
                            }
                        }
                    } else {
                        var reactor = 'action分支' + cm.getNpc() + '_' + selectionLog[2] + '_' + selectionLog[4];
                        eval(reactor)(mode, type, selection, i);
                    }
                }
            }
        }
    }
}
function action分支7_0_0(d, c, b, a) {
    if (status <= a++) {
        cm.sendNormalTalk_Bottom('#face0#我和暗的关系吗？唔，我觉得我俩的关系现在既不好也不坏。', 37, 9111007, false, true);
    } else {
        if (status === a++) {
            cm.askMenu_Bottom('\r\n#L0#暗没有重新向你告白吗？#l\r\n#L1#暗好像还很喜欢你哦。#l\r\n#L2#你对暗是怎么想的？#l', 56, 0);
        } else {
            if (status === a++) {
                if (selectionLog[status] == 0) {
                    cm.sendNormalTalk_Bottom('#face0#哼，就算暗向我告白，我也不打算接受他。', 37, 9111007, false, true);
                    gain(0);
                } else {
                    if (selectionLog[status] == 1) {
                        cm.sendNormalTalk_Bottom('#face2#诶……我不知道你是从哪儿听说的这种话……这……这种事情你让他亲自来跟我说！', 37, 9111007, false, true);
                        gain(1);
                    } else {
                        cm.sendNormalTalk_Bottom('#face1#上次暗说他喜欢我本性流露的模样时……我有点被感动了。', 37, 9111007, false, true);
                        gain(3);
                    }
                }
            }
        }
    }
}
function action分支7_0_1(d, c, b, a) {
    if (status <= a++) {
        cm.sendNormalTalk_Bottom('#face0#暗从小就是个路痴。', 37, 9111007, false, true);
    } else {
        if (status === a++) {
            cm.sendNormalTalk_Bottom('#face0#小时候他常常因为跑进狐狸窟深处后找不到路出来，独自哇哇大哭。', 37, 9111007, true, true);
        } else {
            if (status === a++) {
                cm.askMenu_Bottom('\r\n#L0#寻路真难啊，尤其是在冒险岛世界里……#l\r\n#L1#暗真是个胆小鬼。#l\r\n#L2#你该多关照关照他。#l', 56, 0);
            } else {
                if (status === a++) {
                    if (selectionLog[status] == 0) {
                        cm.sendNormalTalk_Bottom('#face0#看样子你还不太熟悉路线啊？', 37, 9111007, false, true);
                        gain(1);
                    } else {
                        if (selectionLog[status] == 1) {
                            cm.sendNormalTalk_Bottom('#face2#你会这么说是因为你不清楚情况。位于深山中的狐狸窟不知道多可怕……', 37, 9111007, false, true);
                            gain(1);
                        } else {
                            cm.sendNormalTalk_Bottom('#face0#虽然暗现在也好不到哪里去，不过从前的他简直就是个事儿精。', 37, 9111007, false, true);
                        }
                    }
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom('#face0#啊，我不是故意丢下他走掉的。', 37, 9111007, true, true);
                        gain(0);
                    }
                }
            }
        }
    }
}
function action分支7_0_2(d, c, b, a) {
    if (status <= a++) {
        cm.sendNormalTalk_Bottom('#face0#暗体内的九尾狐嘛……唔，不瞒你说，我也曾稍稍感知过他体内的九尾狐存在。', 37, 9111007, false, true);
    } else {
        if (status === a++) {
            cm.askMenu_Bottom('\r\n#L0#跟我说说那是什么感觉。#l\r\n#L1#你什么时候感觉到的？#l\r\n#L2#你不害怕吗？#l', 56, 0);
        } else {
            if (status === a++) {
                if (selectionLog[status] == 0) {
                    cm.sendNormalTalk_Bottom('#face2#我想我能明白暗为什么害怕。那窟里非常……潮湿，又阴森。', 37, 9111007, false, true);
                    gain(1);
                } else {
                    if (selectionLog[status] == 1) {
                        cm.sendNormalTalk_Bottom('#face0#我小时候曾和暗一起被关在窟里过。暗哭得稀～里哗啦的，我怎么安慰都没用，后来我俩累得睡着了……', 37, 9111007, false, true);
                    } else {
                        cm.sendNormalTalk_Bottom('#face0#那九尾狐的气息让我不太舒服，有点害怕，但对方是暗啊。', 37, 9111007, false, true);
                    }
                }
            } else {
                if (status === a++) {
                    if (selectionLog[status] == 1) {
                        cm.sendNormalTalk_Bottom('#face0#半睡半醒中我隐隐约约地看见了那只九尾狐。当时我还以为是做梦……', 37, 9111007, true, true);
                        gain(2);
                    } else {
                        cm.sendNormalTalk_Bottom('#face0#我宁愿相信九尾狐是暗的一部分。', 37, 9111007, true, true);
                        gain(1);
                    }
                }
            }
        }
    }
}
function action分支7_1_0(d, c, b, a) {
    if (status <= a++) {
        cm.sendNormalTalk_Bottom('#face0#我最近很喜欢跟蘑菇神社的几位朋友一起体验茶道的乐趣。', 37, 9111007, false, true);
    } else {
        if (status === a++) {
            cm.askMenu_Bottom('\r\n#L0#你说的那几个人是谁？#l\r\n#L1#妖怪也懂茶道吗？#l\r\n#L2#木野子也跟你们一起吗？#l', 56, 0);
        } else {
            if (status === a++) {
                if (selectionLog[status] == 0) {
                    cm.sendNormalTalk_Bottom('#face0#有竹野子和我，还有……嗯，有时候健二大叔也来……我们一边喝茶一边聊天。呵呵。', 37, 9111007, false, true);
                    gain(2);
                } else {
                    if (selectionLog[status] == 1) {
                        cm.sendNormalTalk_Bottom('#face0#一边闻着清淡的茶香一边聊天的话，不知不觉间身心都会安定下来，心情也会变好呢。', 37, 9111007, false, true);
                    } else {
                        cm.sendNormalTalk_Bottom('#face1#木野子嘛……唔，你知道哒，她不喜欢跟妖怪混在一起。', 37, 9111007, false, true);
                    }
                }
            } else {
                if (status === a++) {
                    if (selectionLog[status - 1] == 1) {
                        cm.sendNormalTalk_Bottom('#face1#有机会你也尝试一下吧。', 37, 9111007, true, true);
                        gain(2);
                    } else {
                        cm.sendNormalTalk_Bottom('#face1#总有一天她也会愿意跟我们一起喝茶吧？', 37, 9111007, true, true);
                        gain(1);
                    }
                }
            }
        }
    }
}
function action分支7_1_1(d, c, b, a) {
    if (status <= a++) {
        cm.sendNormalTalk_Bottom('#face0#我最喜欢的爱好吗？', 37, 9111007, false, true);
    } else {
        if (status === a++) {
            cm.sendNormalTalk_Bottom('#face0#唔。虽然我有很多爱好，不过我最喜欢做的，就是变身成人类跑出去玩！', 37, 9111007, true, true);
        } else {
            if (status === a++) {
                cm.askMenu_Bottom('\r\n#L0#你跟竹野子也是那么认识的吧？#l\r\n#L1#你会不会故意变身去给人类捣乱？#l\r\n#L2#你擅长变身吗？#l', 56, 0);
            } else {
                if (status === a++) {
                    if (selectionLog[status] == 0) {
                        cm.sendNormalTalk_Bottom('#face0#是的！她总是笑嘻嘻地欢迎我。', 37, 9111007, false, true);
                    } else {
                        if (selectionLog[status] == 1) {
                            cm.sendNormalTalk_Bottom('#face0#我不会做这种事。不过我有些小伙伴很喜欢这么干。', 37, 9111007, false, true);
                        } else {
                            cm.sendNormalTalk_Bottom('#face0#现在我已经很熟练了，不会出丑。但小时候不是很会变身时，我曾经在变身后拖着条尾巴到处逛，呵呵。', 37, 9111007, false, true);
                            gain(2);
                        }
                    }
                } else {
                    if (status === a++) {
                        if (selectionLog[status - 1] == 0) {
                            cm.sendNormalTalk_Bottom('#face1#自从她消失后，我找了她好久……现在能和她一起玩耍，真是太好了。', 37, 9111007, true, true);
                            gain(3);
                        } else {
                            if (selectionLog[status - 1] == 1) {
                                cm.sendNormalTalk_Bottom('#face0#我跟你说个秘密，我有的朋友真的跟人类相爱，并生活在一起了。', 37, 9111007, true, true);
                                gain(2);
                            }
                        }
                    }
                }
            }
        }
    }
}
function action分支7_1_2(d, c, b, a) {
    if (status <= a++) {
        cm.sendNormalTalk_Bottom('#face0#妖怪的爱好吗？每个妖怪都不一样吧……', 37, 9111007, false, true);
    } else {
        if (status === a++) {
            cm.askMenu_Bottom('\r\n#L0#像天狗那样的妖怪有什么爱好呢？#l\r\n#L1#像镰鼬那样的妖怪有什么爱好呢？#l\r\n#L2#像鵺那样的妖怪有什么爱好呢？#l', 56, 0);
        } else {
            if (status === a++) {
                if (selectionLog[status] == 0) {
                    cm.sendNormalTalk_Bottom('#face0#我听说天狗会偷偷收集闪闪发亮的物品。', 37, 9111007, false, true);
                } else {
                    if (selectionLog[status] == 1) {
                        cm.sendNormalTalk_Bottom('#face0#我觉得镰鼬很喜欢到处唠叨人……', 37, 9111007, false, true);
                    } else {
                        cm.sendNormalTalk_Bottom('#face0#鵺的话我就不清楚了。也许他的爱好是整天追着竹野子跑前跑后？……', 37, 9111007, false, true);
                        gain(1);
                    }
                }
            } else {
                if (status === a++) {
                    if (selectionLog[status] == 0) {
                        cm.sendNormalTalk_Bottom('#face0#……据说有次他被人发现私藏发夹，脸都红了……', 37, 9111007, true, true);
                        gain(2);
                    } else {
                        if (selectionLog[status] == 1) {
                            cm.sendNormalTalk_Bottom('#face0#我每次看见他唠叨暗就觉得有趣……', 37, 9111007, true, true);
                            gain(1);
                        }
                    }
                }
            }
        }
    }
}
function action分支7_2_0(d, c, b, a) {
    if (status <= a++) {
        cm.sendNormalTalk_Bottom('#face0#我吗？我希望狐妖和人类能够和睦相处。', 37, 9111007, false, true);
    } else {
        if (status === a++) {
            cm.sendNormalTalk_Bottom('#face0#我觉得竹野子所构想的那种大同世界是最理想的世界。', 37, 9111007, true, true);
        } else {
            if (status === a++) {
                cm.askMenu_Bottom('\r\n#L0#我听说有的狐妖会害人，是真的吗？#l\r\n#L1#我估计木野子不是很愿意吧……#l\r\n#L2#不管怎样，妖怪们能在蘑菇神社定居下来，也算向你的梦想迈进了一步。#l', 56, 0);
            } else {
                if (status === a++) {
                    if (selectionLog[status] == 0) {
                        cm.sendNormalTalk_Bottom('#face0#我听说以前真的有那种妖怪……但现在已经没有那种狐妖了。', 37, 9111007, false, true);
                        gain(0);
                    } else {
                        if (selectionLog[status] == 1) {
                            cm.sendNormalTalk_Bottom('#face0#老实说我不能理解她。毕竟竹野子也是半妖啊。', 37, 9111007, false, true);
                        } else {
                            cm.sendNormalTalk_Bottom('#face1#呵呵，我觉得蘑菇神社里的小伙伴们都非常好。', 37, 9111007, false, true);
                        }
                    }
                } else {
                    if (status === a++) {
                        if (selectionLog[status] == 1) {
                            cm.sendNormalTalk_Bottom('#face1#我觉得她在逃避现实。', 37, 9111007, true, true);
                            gain(2);
                        } else {
                            cm.sendNormalTalk_Bottom('#face1#这其中当然也包括你。', 37, 9111007, true, true);
                            gain(3);
                        }
                    }
                }
            }
        }
    }
}
function action分支7_2_1(d, c, b, a) {
    if (status <= a++) {
        cm.sendNormalTalk_Bottom('#face0#这个不一定吧……最近我好像常常做梦。', 37, 9111007, false, true);
    } else {
        if (status === a++) {
            cm.askMenu_Bottom('\r\n#L0#你最近记忆最深刻的梦是什么？#l\r\n#L1#你做过噩梦吗？#l\r\n#L2#据说做梦是说明你还没陷入沉睡。#l', 56, 0);
        } else {
            if (status === a++) {
                if (selectionLog[status] == 0) {
                    cm.sendNormalTalk_Bottom('#face0#我梦见我正在前往某个散发出极好闻香味的地方。', 37, 9111007, false, true);
                } else {
                    if (selectionLog[status] == 1) {
                        cm.sendNormalTalk_Bottom('#face0#当然啦。我最近做过的噩梦就是……唔……被一个非常非常恐怖的怪物追赶。', 37, 9111007, false, true);
                    } else {
                        cm.sendNormalTalk_Bottom('#face0#呼，是啊……那样对皮肤也不好呢。我得找找能让我睡着的方法。', 37, 9111007, false, true);
                        gain(0);
                    }
                }
            } else {
                if (status === a++) {
                    if (selectionLog[status] == 0) {
                        cm.sendNormalTalk_Bottom('#face0#我现在还记得那股香味……但我实在不知道那是什么香味！真可惜……', 37, 9111007, true, true);
                        gain(2);
                    } else {
                        if (selectionLog[status] == 1) {
                            cm.sendNormalTalk_Bottom('#face0#唉，还好那只是个梦。', 37, 9111007, true, true);
                            gain(1);
                        }
                    }
                }
            }
        }
    }
}
function action分支7_2_2(d, c, b, a) {
    if (status <= a++) {
        cm.sendNormalTalk_Bottom('#face0#你指的是什么程度的相反呢？呵呵，上次我有件非常想要实现的事，而前一天晚上我梦见我死了……', 37, 9111007, false, true);
    } else {
        if (status === a++) {
            cm.sendNormalTalk_Bottom('#face0#然后那天所有事情都按照我希望的那样发生了！', 37, 9111007, true, true);
        } else {
            if (status === a++) {
                cm.askMenu_Bottom('\r\n#L0#你最巴望的事情是什么？#l\r\n#L1#会不会是偶然？#l\r\n#L2#我也希望能梦见金币彩票中奖号码。#l', 56, 0);
            } else {
                if (status === a++) {
                    if (selectionLog[status] == 0) {
                        cm.sendNormalTalk_Bottom('#face2#…………这……这是秘密……', 37, 9111007, false, true);
                        gain(3);
                    } else {
                        if (selectionLog[status] == 1) {
                            cm.sendNormalTalk_Bottom('#face0#现在想起来，觉得也可能是偶然……但说是偶然嘛，这事发生得又太频繁了。真是很神奇呢。', 37, 9111007, false, true);
                            gain(1);
                        } else {
                            cm.sendNormalTalk_Bottom('#face2#我觉得整天盼望着发生这种无意义的事，简直浪费时间。', 37, 9111007, false, true);
                            gain(0);
                        }
                    }
                }
            }
        }
    }
}
function action8(mode, type, selection) {
    if (inTalkCD()) {
        cm.sendNormalTalk_Bottom('#face0#你稍后再跟我对话。', 37, 9111008, false, false);
        cm.dispose();
        return;
    }
    if (status == 0 && mode == 0) {
        cm.dispose();
        return;
    }
    mode == 1 ? status++ : status--;
    selectionLog[status] = selection;
    var i = -1;
    if (status <= i++) {
        cm.dispose();
    } else {
        if (status === i++) {
            var value = cm.getNumberFromQuestInfo(58710, '' + cm.getNpc());
            if (value >= 70) {
                cm.sendNormalTalk_Bottom('#face0#跟你聊天时，一点儿不觉得浪费时间。', 37, 9111008, false, true);
            } else {
                if (value >= 50) {
                    cm.sendNormalTalk_Bottom('#face1#现在我正有空跟别人聊天。', 37, 9111008, false, true);
                } else {
                    cm.sendNormalTalk_Bottom('#face2#什么事？', 37, 9111008, false, true);
                }
            }
        } else {
            if (status === i++) {
                cm.askMenu_Bottom('\r\n#L0#谈论蘑菇神社的姐妹俩。#l\r\n#L1#谈论过去的事。#l\r\n#L2#谈论喜欢的东西。#l', 56, 0);
            } else {
                if (status === i++) {
                    if (selectionLog[2] == 0) {
                        cm.sendNormalTalk_Bottom('打听下蘑菇神社两姐妹的事吧。', 57, 0, false, true);
                    } else {
                        if (selectionLog[2] == 1) {
                            cm.sendNormalTalk_Bottom('聊聊过去的事吧。', 57, 0, false, true);
                        } else {
                            cm.sendNormalTalk_Bottom('说说你喜欢的东西吧。', 57, 0, false, true);
                        }
                    }
                } else {
                    if (status === i++) {
                        if (selectionLog[2] == 0) {
                            cm.askMenu_Bottom('\r\n#L0#打听竹野子的事。#l\r\n#L1#打听木野子的事。#l\r\n#L2#询问他照顾两姐妹的原因。#l', 56, 0);
                        } else {
                            if (selectionLog[2] == 1) {
                                cm.askMenu_Bottom('\r\n#L0#你也有过童年吗？#l\r\n#L1#你原本就是乌鸦吗？#l\r\n#L2#给我说说日本的古老历史吧。#l', 56, 0);
                            } else {
                                cm.askMenu_Bottom('\r\n#L0#我听说你喜欢闪闪发亮的东西，是真的吗？#l\r\n#L1#蘑菇神社里有谁让你挂心吗？#l\r\n#L2#万事屋喜欢什么？#l', 56, 0);
                            }
                        }
                    } else {
                        var reactor = 'action分支' + cm.getNpc() + '_' + selectionLog[2] + '_' + selectionLog[4];
                        eval(reactor)(mode, type, selection, i);
                    }
                }
            }
        }
    }
}
function action分支8_0_0(d, c, b, a) {
    if (status <= a++) {
        cm.sendNormalTalk_Bottom('#face1#竹野子是个非常柔弱的女孩子，但她纯净又常为别人着想的内心却非常强大。', 37, 9111008, false, true);
    } else {
        if (status === a++) {
            cm.askMenu_Bottom('\r\n#L0#我希望竹野子能好好照顾自己。#l\r\n#L1#我觉得木野子太约束竹野子了。#l\r\n#L2#最近鵺整天追着竹野子跑。#l', 56, 0);
        } else {
            if (status === a++) {
                if (selectionLog[status] == 0) {
                    cm.sendNormalTalk_Bottom('#face1#我跟你想法一样。只希望以后她能过得幸福。', 37, 9111008, false, true);
                    gain(2);
                } else {
                    if (selectionLog[status] == 1) {
                        cm.sendNormalTalk_Bottom('#face1#呵呵，她只是希望妹妹纯净无暇的心灵不要受到伤害，我能理解她。', 37, 9111008, false, true);
                        gain(1);
                    } else {
                        cm.sendNormalTalk_Bottom('#face1#他只是追着她跑前跑后罢了，其实也没干嘛。我一点也不担心。', 37, 9111008, false, true);
                        gain(0);
                    }
                }
            }
        }
    }
}
function action分支8_0_1(d, c, b, a) {
    if (status <= a++) {
        cm.sendNormalTalk_Bottom('#face1#木野子……是个令人疼惜的孩子。', 37, 9111008, false, true);
    } else {
        if (status === a++) {
            cm.askMenu_Bottom('\r\n#L0#木野子不是讨厌你吗？#l\r\n#L1#怜惜？你说木野子吗？#l\r\n#L2#要怎么做才能改善木野子和妖怪之间的关系呢？#l', 56, 0);
        } else {
            if (status === a++) {
                if (selectionLog[status] == 0) {
                    cm.sendNormalTalk_Bottom('#face1#她之所以讨厌妖怪，跟她的经历有关……但是你没发现她最近渐渐显露出自己隐藏的善良一面。', 37, 9111008, false, true);
                    gain(2);
                } else {
                    if (selectionLog[status] == 1) {
                        cm.sendNormalTalk_Bottom('#face1#是的。她是个内心有很多伤痛的孩子。', 37, 9111008, false, true);
                    } else {
                        cm.sendNormalTalk_Bottom('#face1#她之所以讨厌妖怪，跟她的经历有关……但是你没发现她最近渐渐显露出自己隐藏的善良一面。', 37, 9111008, false, true);
                        gain(1);
                    }
                }
            } else {
                if (status === a++) {
                    if (selectionLog[status - 1] == 1) {
                        cm.sendNormalTalk_Bottom('#face1#那些伤痛使她不得不变得刻薄，来保护自己……', 37, 9111008, true, true);
                        gain(3);
                    }
                }
            }
        }
    }
}
function action分支8_0_2(d, c, b, a) {
    if (status <= a++) {
        cm.sendNormalTalk_Bottom('#face1#这都是我的业报。业报是没什么确切理由的', 37, 9111008, false, true);
    } else {
        if (status === a++) {
            cm.askMenu_Bottom('\r\n#L0#你说的是什么业报？#l\r\n#L1#你收到什么启示了吗？#l\r\n#L2#我也会有业报吗？#l', 56, 0);
        } else {
            if (status === a++) {
                if (selectionLog[status] == 0) {
                    cm.sendNormalTalk_Bottom('#face1#那都是过去的事了。虽然我从未忘却，但也没必要再去提起。', 37, 9111008, false, true);
                    gain(1);
                } else {
                    if (selectionLog[status] == 1) {
                        cm.sendNormalTalk_Bottom('#face1#我不会为启示之类的言语所动。我最讨厌别人给我下命令。', 37, 9111008, false, true);
                        gain(0);
                    } else {
                        cm.sendNormalTalk_Bottom('#face1#这个嘛……我对你并不很了解。而且业报这种东西，时有时无，很难说。', 37, 9111008, false, true);
                        gain(1);
                    }
                }
            }
        }
    }
}
function action分支8_1_0(d, c, b, a) {
    if (status <= a++) {
        cm.sendNormalTalk_Bottom('#face1#呵呵，我还作为人类时有过吧……但我已经不记得了。', 37, 9111008, false, true);
    } else {
        if (status === a++) {
            cm.askMenu_Bottom('\r\n#L0#你作为人类时，是什么样的人呢？#l\r\n#L1#你对你的妖怪生活满意吗？#l\r\n#L2#你想变回人类吗？#l', 56, 0);
        } else {
            if (status === a++) {
                if (selectionLog[status] == 0) {
                    cm.sendNormalTalk_Bottom('#face1#我曾经是伤害别人的人……用人类的标准来衡量的话，我不是个好人。', 37, 9111008, false, true);
                    gain(0);
                } else {
                    if (selectionLog[status] == 1) {
                        cm.sendNormalTalk_Bottom('#face1#……估计这世上没有哪个人是因为想当妖怪才变成妖怪的吧…… ', 37, 9111008, false, true);
                    } else {
                        cm.sendNormalTalk_Bottom('#face1#与其说我想变回人类，更确切地说，我只是偶尔想回到过去。', 37, 9111008, false, true);
                        gain(2);
                    }
                }
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom('#face1#我没什么满意不满意的。', 37, 9111008, true, true);
                    gain(1);
                }
            }
        }
    }
}
function action分支8_1_1(d, c, b, a) {
    if (status <= a++) {
        cm.sendNormalTalk_Bottom('#face1#你觉得有我这么大只的乌鸦吗？', 37, 9111008, false, true);
    } else {
        if (status === a++) {
            cm.askMenu_Bottom('\r\n#L0#哦……那么你是乌鸦首领吗？#l\r\n#L1#你是受到了乌鸦的诅咒吗？#l\r\n#L2#那你是什么？#l', 56, 0);
        } else {
            if (status === a++) {
                if (selectionLog[status] == 0) {
                    cm.sendNormalTalk_Bottom('#face1#你提的问题很没有水平啊。', 37, 9111008, false, true);
                    gain(0);
                } else {
                    if (selectionLog[status] == 1) {
                        cm.sendNormalTalk_Bottom('#face1#诅咒吗。就算不是乌鸦，我也可能受到诅咒啊。', 37, 9111008, false, true);
                        gain(2);
                    } else {
                        cm.sendNormalTalk_Bottom('#face1#我的面貌只是人类随心塑造出来的。你只要接受就好。', 37, 9111008, false, true);
                        gain(1);
                    }
                }
            }
        }
    }
}
function action分支8_1_2(d, c, b, a) {
    if (status <= a++) {
        cm.sendNormalTalk_Bottom('#face1#我在日本待的时间还没长到可以说出这地方的古老历史。', 37, 9111008, false, true);
    } else {
        if (status === a++) {
            cm.askMenu_Bottom('\r\n#L0#我去问别人的话，会不会知道呢？#l\r\n#L1#据我所知，日本是与冒险岛世界一同诞生的……#l\r\n#L2#嗯，我也不太清楚，不过我觉得日本是个好地方。#l', 56, 0);
        } else {
            if (status === a++) {
                if (selectionLog[status] == 0) {
                    cm.sendNormalTalk_Bottom('#face0#镰鼬在这地方生活的时间比较长，那你去问他吧。', 37, 9111008, false, true);
                    gain(2);
                } else {
                    if (selectionLog[status] == 1) {
                        cm.sendNormalTalk_Bottom('#face1#我有点好奇你来自的那个名叫冒险岛世界的地方。以后我该去瞧瞧……', 37, 9111008, false, true);
                        gain(1);
                    } else {
                        cm.sendNormalTalk_Bottom('#face1#不分青红皂白就乱下结论是你的一个坏习惯啊……', 37, 9111008, false, true);
                        gain(0);
                    }
                }
            }
        }
    }
}
function action分支8_2_0(d, c, b, a) {
    if (status <= a++) {
        cm.sendNormalTalk_Bottom('#face1#咳，我不知道你是听谁瞎说的……人类才最喜欢闪闪发亮的东西吧？', 37, 9111008, false, true);
    } else {
        if (status === a++) {
            cm.askMenu_Bottom('\r\n#L0#我不是很喜欢闪闪发亮的东西。#l\r\n#L1#我听说有人看见你拿着发夹？#l\r\n#L2#乌鸦不是本来就喜欢闪闪发亮的东西吗？#l', 56, 0);
        } else {
            if (status === a++) {
                if (selectionLog[status] == 0) {
                    cm.sendNormalTalk_Bottom('#face1#如果我给你1亿金币，你也不收吗？', 37, 9111008, false, true);
                } else {
                    if (selectionLog[status] == 1) {
                        cm.sendNormalTalk_Bottom('#face1#那是我打算送给竹野子的。不是我的收藏品。', 37, 9111008, false, true);
                        gain(2);
                    } else {
                        cm.sendNormalTalk_Bottom('#face1#那只是别人瞎猜的。我只是有乌鸦的外形，又不是乌鸦。', 37, 9111008, false, true);
                        gain(0);
                    }
                }
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom('刚才的话当我没说……', 57, 0, true, true);
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom('#face1#你也当我刚才的话没说……', 37, 9111008, true, true);
                        gain(1);
                    }
                }
            }
        }
    }
}
function action分支8_2_1(d, c, b, a) {
    if (status <= a++) {
        cm.sendNormalTalk_Bottom('#face1#让我挂心的……我想应该是巫女姐妹俩吧。', 37, 9111008, false, true);
    } else {
        if (status === a++) {
            cm.askMenu_Bottom('\r\n#L0#我听说你最近整天追着镰鼬屁股跑？#l\r\n#L1#我说的不是那些操心事……说说其他方面令你挂心的？#l\r\n#L2#你觉得谁是你的情敌？#l', 56, 0);
        } else {
            if (status === a++) {
                if (selectionLog[status] == 0) {
                    cm.sendNormalTalk_Bottom('#face1#那只不过是因为我喜欢光线映照在他镰刀上的景象。', 37, 9111008, false, true);
                    gain(2);
                } else {
                    if (selectionLog[status] == 1) {
                        cm.sendNormalTalk_Bottom('#face1#没有。我没那么清闲，没空关注其他事情。', 37, 9111008, false, true);
                        gain(0);
                    } else {
                        cm.sendNormalTalk_Bottom('#face1#没有。不过好像有很多人把我当成情敌……', 37, 9111008, false, true);
                    }
                }
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom('#face1#我觉得所谓情敌，只不过是那些差劲的家伙为了让自己变得更优秀而假想出来的目标。', 37, 9111008, true, true);
                    gain(1);
                }
            }
        }
    }
}
function action分支8_2_2(d, c, b, a) {
    if (status <= a++) {
        cm.sendNormalTalk_Bottom('#face1#万事屋？唔，那孩子的话……她最喜欢做解说。', 37, 9111008, false, true);
    } else {
        if (status === a++) {
            cm.askMenu_Bottom('\r\n#L0#她有没有喜欢的物品？#l\r\n#L1#你就知道这么多吗？你还真不关心她。#l\r\n#L2#没错，她做解说时看起来最神采飞扬。#l', 56, 0);
        } else {
            if (status === a++) {
                if (selectionLog[status] == 0) {
                    cm.sendNormalTalk_Bottom('#face1#那孩子好像最喜欢背包。', 37, 9111008, false, true);
                    gain(1);
                } else {
                    if (selectionLog[status] == 1) {
                        cm.sendNormalTalk_Bottom('#face0#……唔。听了你的话，我开始重新反思自己是不是对万事屋太不关心了。', 37, 9111008, false, true);
                        gain(2);
                    } else {
                        cm.sendNormalTalk_Bottom('#face0#和万事屋在一起时，绝不会感到无聊……她是个很可爱的孩子。', 37, 9111008, false, true);
                        gain(3);
                    }
                }
            }
        }
    }
}
function action9(mode, type, selection) {
    if (inTalkCD()) {
        cm.sendNormalTalk_Bottom('#face0#请稍后再跟我对话好吗？', 37, 9111009, false, false);
        cm.dispose();
        return;
    }
    if (status == 0 && mode == 0) {
        cm.dispose();
        return;
    }
    mode == 1 ? status++ : status--;
    selectionLog[status] = selection;
    var i = -1;
    if (status <= i++) {
        cm.dispose();
    } else {
        if (status === i++) {
            var value = cm.getNumberFromQuestInfo(58710, '' + cm.getNpc());
            if (value >= 70) {
                cm.sendNormalTalk_Bottom('#face0#你好啊，勇士！', 37, 9111009, false, true);
            } else {
                if (value >= 50) {
                    cm.sendNormalTalk_Bottom('#face0#我就陪你闲聊一会儿吧。', 37, 9111009, false, true);
                } else {
                    cm.sendNormalTalk_Bottom('#face2#你有要事找我吗？', 37, 9111009, false, true);
                }
            }
        } else {
            if (status === i++) {
                cm.askMenu_Bottom('\r\n#L0#谈论昭和村的事。#l\r\n#L1#谈论天狗的事。#l\r\n#L2#询问她的喜恶。#l', 56, 0);
            } else {
                if (status === i++) {
                    if (selectionLog[2] == 0) {
                        cm.sendNormalTalk_Bottom('谈论昭和村的事。', 57, 0, false, true);
                    } else {
                        if (selectionLog[2] == 1) {
                            cm.sendNormalTalk_Bottom('谈论天狗的事。', 57, 0, false, true);
                        } else {
                            cm.sendNormalTalk_Bottom('询问她的喜恶。', 57, 0, false, true);
                        }
                    }
                } else {
                    if (status === i++) {
                        if (selectionLog[2] == 0) {
                            cm.askMenu_Bottom('\r\n#L0#你之前在昭和村是做什么的？#l\r\n#L1#昭和村的人们好相处吗？#l\r\n#L2#给我说一件你在昭和村印象深刻的事吧。#l', 56, 0);
                        } else {
                            if (selectionLog[2] == 1) {
                                cm.askMenu_Bottom('\r\n#L0#你跟天狗是什么关系？#l\r\n#L1#天狗对你好吗？#l\r\n#L2#天狗平时都干什么？#l', 56, 0);
                            } else {
                                cm.askMenu_Bottom('\r\n#L0#你最喜欢什么东西？#l\r\n#L1#你讨厌在这里生活吗？#l\r\n#L2#你不讨厌人类吗？#l', 56, 0);
                            }
                        }
                    } else {
                        var reactor = 'action分支' + cm.getNpc() + '_' + selectionLog[2] + '_' + selectionLog[4];
                        eval(reactor)(mode, type, selection, i);
                    }
                }
            }
        }
    }
}
function action分支9_0_0(d, c, b, a) {
    if (status <= a++) {
        cm.sendNormalTalk_Bottom('#face0#我在那里上学，也学习了人类的各种文化。', 37, 9111009, false, true);
    } else {
        if (status === a++) {
            cm.askMenu_Bottom('\r\n#L0#那个包也是从昭和带过来的吗？#l\r\n#L1#那顶帽子也是从昭和带过来的吗？#l\r\n#L2#那副眼镜也是从昭和带过来的吗？#l', 56, 0);
        } else {
            if (status === a++) {
                if (selectionLog[status] == 0) {
                    cm.sendNormalTalk_Bottom('#face0#背包可是个非常实用的物品啊。', 37, 9111009, false, true);
                } else {
                    if (selectionLog[status] == 1) {
                        cm.sendNormalTalk_Bottom('#face0#哎呀，你别碰！', 37, 9111009, false, true);
                        gain(0);
                    } else {
                        cm.sendNormalTalk_Bottom('#face1#这是我的老师送给我的礼物。', 37, 9111009, false, true);
                    }
                }
            } else {
                if (status === a++) {
                    if (selectionLog[status] == 0) {
                        cm.sendNormalTalk_Bottom('#face0#那是我从刚去昭和村时就一直戴到现在的帽子。', 37, 9111009, true, true);
                        gain(1);
                    } else {
                        cm.sendNormalTalk_Bottom('#face1#我的视力不差，但是我看那些聪明的人好像都会戴眼镜，所以我也戴。', 37, 9111009, true, true);
                        gain(2);
                    }
                }
            }
        }
    }
}
function action分支9_0_1(d, c, b, a) {
    if (status <= a++) {
        cm.sendNormalTalk_Bottom('#face0#昭和村里既有坏阿姨，也有好大叔。还有很多有趣的地方。', 37, 9111009, false, true);
    } else {
        if (status === a++) {
            cm.askMenu_Bottom('\r\n#L0#坏阿姨是谁？#l\r\n#L1#好大叔是谁？#l\r\n#L2#你觉得什么地方比较有趣？#l', 56, 0);
        } else {
            if (status === a++) {
                if (selectionLog[status] == 0) {
                    cm.sendNormalTalk_Bottom('#face2#有个阿姨天天让我帮她搜集狐狸毛皮。那个阿姨最坏了。', 37, 9111009, false, true);
                    gain(1);
                } else {
                    if (selectionLog[status] == 1) {
                        cm.sendNormalTalk_Bottom('#face1#是蔬菜店的大叔！他会给我很多新鲜的黄瓜。', 37, 9111009, false, true);
                        gain(2);
                    } else {
                        cm.sendNormalTalk_Bottom('#face1#有老奶奶的浴池最有趣。嘻嘻，洗完澡出来超级舒爽的。', 37, 9111009, false, true);
                        gain(3);
                    }
                }
            }
        }
    }
}
function action分支9_0_2(d, c, b, a) {
    if (status <= a++) {
        cm.sendNormalTalk_Bottom('#face0#昭和村里有很浓的狸猫味道。那里不是有个火狸金融的建筑物嘛，味道就是从那里散发出来的。', 37, 9111009, false, true);
    } else {
        if (status === a++) {
            cm.askMenu_Bottom('\r\n#L0#狸猫的味道？#l\r\n#L1#火狸金融？#l\r\n#L2#你说的是有很多流氓团伙的那个地方？#l', 56, 0);
        } else {
            if (status === a++) {
                if (selectionLog[status] == 0) {
                    cm.sendNormalTalk_Bottom('#face0#嗯。人类可能闻不出来……呃……那味道浓得不得了。', 37, 9111009, false, true);
                    gain(1);
                } else {
                    if (selectionLog[status] == 1) {
                        cm.sendNormalTalk_Bottom('#face0#是的。也不知道是不是因为名字起得不好，总之那地方让我感觉不舒服。', 37, 9111009, false, true);
                        gain(0);
                    } else {
                        cm.sendNormalTalk_Bottom('#face0#嗯。那里有很多拿着枪走来走去的大叔。', 37, 9111009, false, true);
                    }
                }
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom('#face0#近来有传言说那里的人会抓妖怪。', 37, 9111009, true, true);
                    gain(1);
                }
            }
        }
    }
}
function action分支9_1_0(d, c, b, a) {
    if (status <= a++) {
        cm.sendNormalTalk_Bottom('#face0#天狗收留了我。他就像我的父亲一样。', 37, 9111009, false, true);
    } else {
        if (status === a++) {
            cm.askMenu_Bottom('\r\n#L0#你父亲去哪里了？#l\r\n#L1#你们在哪里遇到的？#l\r\n#L2#没想到他是个热心肠#l', 56, 0);
        } else {
            if (status === a++) {
                if (selectionLog[status] == 0) {
                    cm.sendNormalTalk_Bottom('#face0#我不记得了。我很小的时候就跟他分离了。有时候我也好奇他去哪里了。', 37, 9111009, false, true);
                    gain(0);
                } else {
                    if (selectionLog[status] == 1) {
                        cm.sendNormalTalk_Bottom('#face0#听说是天狗在渔村附近发现了正在哭泣的我。多亏了他的培养，我成了很优秀的孩子！', 37, 9111009, false, true);
                        gain(2);
                    } else {
                        cm.sendNormalTalk_Bottom('#face1#你别看天狗说话冷冰冰的，其实他比蘑菇神社里的任何妖怪都更了不起！', 37, 9111009, false, true);
                        gain(1);
                    }
                }
            }
        }
    }
}
function action分支9_1_1(d, c, b, a) {
    if (status <= a++) {
        cm.sendNormalTalk_Bottom('#face0#你得先给我指定个明确的标准，我才能说出他对我好不好，是吧？不然你还是问问他的优点和缺点吧？', 37, 9111009, false, true);
    } else {
        if (status === a++) {
            cm.askMenu_Bottom('\r\n#L0#打听天狗的缺点。#l\r\n#L1#询问她对天狗有什么不满。#l\r\n#L2#打听天狗的优点。#l', 56, 0);
        } else {
            if (status === a++) {
                if (selectionLog[status] == 0) {
                    cm.sendNormalTalk_Bottom('#face0#天狗只有一个缺点！那就是他老是把事情全都推给我做。但是这证明了他对我非常信赖！', 37, 9111009, false, true);
                    gain(3);
                } else {
                    if (selectionLog[status] == 1) {
                        cm.sendNormalTalk_Bottom('#face2#要说我对天狗的不满，就是他对那麻烦的姐妹俩太宽容了。哼，也不知道是什么原因。', 37, 9111009, false, true);
                        gain(0);
                    } else {
                        cm.sendNormalTalk_Bottom('#face0#天狗的优点嘛，当然是他比我更聪明这一点啦！要不然我怎么会甘心辅佐他？', 37, 9111009, false, true);
                        gain(2);
                    }
                }
            }
        }
    }
}
function action分支9_1_2(d, c, b, a) {
    if (status <= a++) {
        cm.sendNormalTalk_Bottom('#face0#天狗平时要么在蘑菇神社附近转悠，要么喜欢看书。', 37, 9111009, false, true);
    } else {
        if (status === a++) {
            cm.askMenu_Bottom('\r\n#L0#他看什么书？#l\r\n#L1#他是去蘑菇神社附近巡逻吗。#l\r\n#L2#他有没有什么特别的兴趣爱好？#l', 56, 0);
        } else {
            if (status === a++) {
                if (selectionLog[status] == 0) {
                    gain(2);
                } else {
                    if (selectionLog[status] == 1) {
                        cm.sendNormalTalk_Bottom('#face0#他是跟着镰鼬去巡逻。', 37, 9111009, false, true);
                    } else {
                        cm.sendNormalTalk_Bottom('#face0#……关于这个我不能告诉你。我得保护天狗的隐私。', 37, 9111009, false, true);
                        gain(1);
                    }
                }
            } else {
                if (status === a++) {
                    if (selectionLog[status - 1] == 0) {
                    } else {
                        if (selectionLog[status - 1] == 1) {
                            cm.sendNormalTalk_Bottom('#face0#他总是牵挂着蘑菇神社的安危。唉，一点也不懂得休息一下。', 37, 9111009, true, true);
                            gain(2);
                        }
                    }
                }
            }
        }
    }
}
function action分支9_2_0(d, c, b, a) {
    if (status <= a++) {
        cm.sendNormalTalk_Bottom('#face0#当然是黄瓜啦！黄瓜最棒啦！', 37, 9111009, false, true);
    } else {
        if (status === a++) {
            cm.sendNormalTalk_Bottom('#face0#还有年糕！刚吃完年糕的时候啃一口黄瓜，简直不要太美妙！我也很喜欢洗澡。', 37, 9111009, true, true);
        } else {
            if (status === a++) {
                cm.askMenu_Bottom('\r\n#L0#没想到你喜欢洗澡。#l\r\n#L1#你觉得沐浴之后吃根黄瓜怎么样。#l\r\n#L2#你喜欢什么口味的年糕？#l', 56, 0);
            } else {
                if (status === a++) {
                    if (selectionLog[status] == 0) {
                        cm.sendNormalTalk_Bottom('#face0#什么叫没想到，人家可是爱干净的孩子。', 37, 9111009, false, true);
                    } else {
                        if (selectionLog[status] == 1) {
                            cm.sendNormalTalk_Bottom('#face1#哈……你蛮懂得享受的嘛。出了一身大汗后，吃根黄瓜！超爽～ ', 37, 9111009, false, true);
                            gain(2);
                        } else {
                            cm.sendNormalTalk_Bottom('#face1#我喜欢涂了甜甜蜂蜜的年糕。你要不要给我买一块呀？', 37, 9111009, false, true);
                            gain(1);
                        }
                    }
                } else {
                    if (status === a++) {
                        if (selectionLog[status] == 0) {
                            cm.sendNormalTalk_Bottom('#face0#我喜欢热腾腾的露天温泉，也喜欢在清澈的小溪里洗澡。', 37, 9111009, true, true);
                            gain(3);
                        }
                    }
                }
            }
        }
    }
}
function action分支9_2_1(d, c, b, a) {
    if (status <= a++) {
        cm.sendNormalTalk_Bottom('#face0#诶？不是的！绝对不是！你为什么这么想？', 37, 9111009, false, true);
    } else {
        if (status === a++) {
            cm.askMenu_Bottom('\r\n#L0#我觉得你好像不愿意做我的同伴……#l\r\n#L1#我只是觉得你好像讨厌其他妖怪。#l\r\n#L2#不是吗？你喜欢待在这里？#l', 56, 0);
        } else {
            if (status === a++) {
                if (selectionLog[status] == 0) {
                    cm.sendNormalTalk_Bottom('#face2#哼，我那样子不是因为我讨厌待在这里，是因为你之前质疑天狗。', 37, 9111009, false, true);
                } else {
                    if (selectionLog[status] == 1) {
                        cm.sendNormalTalk_Bottom('#face0#我不是讨厌其他妖怪，我只是讨厌那些又蠢又爱惹事的家伙！', 37, 9111009, false, true);
                        gain(0);
                    } else {
                        cm.sendNormalTalk_Bottom('#face1#当然咯。在这里我可以给那些愚蠢的人类做解说，超开心的。', 37, 9111009, false, true);
                        gain(3);
                    }
                }
            } else {
                if (status === a++) {
                    if (selectionLog[status - 1] == 0) {
                        cm.sendNormalTalk_Bottom('#face2#我现在想起来都还是好心塞。', 37, 9111009, true, true);
                        gain(1);
                    }
                }
            }
        }
    }
}
function action分支9_2_2(d, c, b, a) {
    if (status <= a++) {
        cm.sendNormalTalk_Bottom('#face0#刚开始的时候确实很讨厌。因为正是由于人类的破坏，河童的聚居地才会消失。', 37, 9111009, false, true);
    } else {
        if (status === a++) {
            cm.askMenu_Bottom('\r\n#L0#那现在你怎么想？#l\r\n#L1#是人类把河童赶走的吗？#l\r\n#L2#现在河童的聚居地在哪里？#l', 56, 0);
        } else {
            if (status === a++) {
                if (selectionLog[status] == 0) {
                    cm.sendNormalTalk_Bottom('#face0#现在我已经能理解人类的野心了。虽然我依然不喜欢人类，但我会把那当作是人类的特性之一。', 37, 9111009, false, true);
                    gain(1);
                } else {
                    if (selectionLog[status] == 1) {
                        cm.sendNormalTalk_Bottom('#face0#他们常常跑来渔村，不但打伤河童，还抢走我们的东西。', 37, 9111009, false, true);
                    } else {
                        cm.sendNormalTalk_Bottom('#face0#因为大家都四处逃难去了，现在唯一剩下的聚居地就是废弃渔村。但那里现在也不适合我们居住了……', 37, 9111009, false, true);
                        gain(2);
                    }
                }
            } else {
                if (status === a++) {
                    if (selectionLog[status] == 1) {
                        cm.sendNormalTalk_Bottom('#face0#所以许多河童都不得已离开了日本国。几乎是被赶出去的。', 37, 9111009, true, true);
                        gain(0);
                    } else {
                        cm.sendNormalTalk_Bottom('#face0#因为大家都四处逃难去了，现在唯一剩下的聚居地就是废弃渔村。但那里现在也不适合我们居住了……', 37, 9111009, false, true);
                        gain(2);
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
function gain(b) {
    cm.dispose();
    var a = cm.getNumberFromQuestInfo(58710, '' + cm.getNpc());
    if (a >= 50) {
        cm.playerMessage(5, '通过对话无法增加50点以上的亲密度。');
    } else {
        if (b > 0) {
            cm.addNumberForQuestInfo(58710, '' + cm.getNpc(), b);
        }
        cm.setNumberForQuestInfo(58710, 'lastTalk' + cm.getNpc(), new Date().getTime());
        cm.getTopMsgFont('你与' + npcs[cm.getNpc()] + '的亲密度增加了' + b + '点。', 3, 20, 8, 0, 0);
    }
}
function inTalkCD() {
    return new Date().getTime() - cm.getNumberFromQuestInfo(58710, 'lastTalk' + cm.getNpc()) < 3600 * 1000;
}