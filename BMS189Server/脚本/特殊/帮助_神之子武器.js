var status = -1;
var selectionLog = [];
var rand;
function start() {
    rand = cm.rand(1, 22);
    action(1, 0, 0);
}
function action(mode, type, selection) {
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
        cm.updateInfoQuest(41902, 'number=' + rand);
        var reactor = 'action分支' + rand;
        eval(reactor)(mode, type, selection, i);
    }
}
function action分支1(d, c, b, a) {
    if (status <= a++) {
        cm.sendNormalTalk('魔量药水一点都不好喝，不用吃魔量药水可真是万幸啊。', 36, 2400009, false, true);
    } else {
        if (status === a++) {
            cm.sendNormalTalk('这世上竟然还存在你不喜欢的食品啊？', 44, 2400010, true, true);
        } else {
            if (status === a++) {
                cm.sendNormalTalk('#face2#必须的！你把我当成什么了？', 36, 2400009, true, true);
            } else {
                if (status === a++) {
                    cm.sendNormalTalk('贪嘴的傻子。', 44, 2400010, true, true);
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk('#face2#你，是不是有点太过直率了！', 36, 2400009, true, true);
                    } else {
                        if (status === a++) {
                            cm.dispose();
                        }
                    }
                }
            }
        }
    }
}
function action分支2(d, c, b, a) {
    if (status <= a++) {
        cm.sendNormalTalk('听说使用幸运道具卷轴就可以产生套装效果。不过，我其实并不喜欢隶属于哪里。', 36, 2400010, false, true);
    } else {
        if (status === a++) {
            cm.dispose();
        }
    }
}
function action分支3(d, c, b, a) {
    if (status <= a++) {
        cm.sendNormalTalk('喜欢看书吗？我一翻书就会犯困……不知道神殿的书架上有没有漫画书？', 36, 2400009, false, true);
    } else {
        if (status === a++) {
            cm.dispose();
        }
    }
}
function action分支4(d, c, b, a) {
    if (status <= a++) {
        cm.sendNormalTalk('有没有点过潜能变更按钮？不知道会变成什么样，让我非常紧张啊！', 36, 2400009, false, true);
    } else {
        if (status === a++) {
            cm.sendNormalTalk('万一潜能不好怎么办？', 44, 2400010, true, true);
        } else {
            if (status === a++) {
                cm.sendNormalTalk('没关系，我向来对任何事情都信心十足！只要点出来好属性为止！', 36, 2400009, true, true);
            } else {
                if (status === a++) {
                    cm.sendNormalTalk('#face7#你那不是破罐子破摔嘛……', 44, 2400005, true, true);
                } else {
                    if (status === a++) {
                        cm.dispose();
                    }
                }
            }
        }
    }
}
function action分支5(d, c, b, a) {
    if (status <= a++) {
        cm.sendNormalTalk('选择贝塔的理由？那肯定是因为她……漂亮呗！既然要找个主人，何不找个漂亮的女人呢？哈哈。', 36, 2400009, false, true);
    } else {
        if (status === a++) {
            cm.sendNormalTalk('我漂亮吗？', 44, 2400006, true, true);
        } else {
            if (status === a++) {
                cm.sendNormalTalk('那当然！拉兹丽也是因为阿尔法长得帅才选择他的嘛。', 36, 2400009, true, true);
            } else {
                if (status === a++) {
                    cm.sendNormalTalk('#face1#不，不是！绝对不是那样子！', 44, 2400010, true, true);
                } else {
                    if (status === a++) {
                        cm.dispose();
                    }
                }
            }
        }
    }
}
function action分支6(d, c, b, a) {
    if (status <= a++) {
        cm.sendNormalTalk('我最喜欢的……？嗯……我最喜欢草莓蛋糕了。想跟我一起吃的话……如果是你我可以考虑。', 36, 2400010, false, true);
    } else {
        if (status === a++) {
            cm.sendNormalTalk('我也要，我也要！我也很喜欢草莓蛋糕！', 44, 2400009, true, true);
        } else {
            if (status === a++) {
                cm.sendNormalTalk('#face0#不要！除非是和阿尔法两个人……不，不然我就不去。', 36, 2400010, true, true);
            } else {
                if (status === a++) {
                    cm.dispose();
                }
            }
        }
    }
}
function action分支7(d, c, b, a) {
    if (status <= a++) {
        cm.sendNormalTalk('当达到110、120、130、140、150、170、180级时，可以提升武器等级。当然，如果你不愿意，可以以后再选择。', 36, 2400009, false, true);
    } else {
        if (status === a++) {
            cm.sendNormalTalk('你好像跟以前有点不一样啊？', 44, 2400010, true, true);
        } else {
            if (status === a++) {
                cm.sendNormalTalk('你好像在诱导我听取你的说明啊？', 36, 2400009, true, true);
            } else {
                if (status === a++) {
                    cm.sendNormalTalk('……', 44, 2400006, true, true);
                } else {
                    if (status === a++) {
                        cm.dispose();
                    }
                }
            }
        }
    }
}
function action分支8(d, c, b, a) {
    if (status <= a++) {
        cm.sendNormalTalk('#face0#我不是因为喜欢你所以才跟你在一起的。我只是尽我的义务而已，所以不要来烦我。', 36, 2400010, false, true);
    } else {
        if (status === a++) {
            cm.dispose();
        }
    }
}
function action分支9(d, c, b, a) {
    if (status <= a++) {
        cm.sendNormalTalk('多攒些硬币交给神官们，他们会很高兴的。对于穷人来说这可是一笔财富啊。', 36, 2400010, false, true);
    } else {
        if (status === a++) {
            cm.sendNormalTalk('#face11#你说话太过分了？', 44, 2400005, true, true);
        } else {
            if (status === a++) {
                cm.sendNormalTalk('#face2#我，我不是那个意思……', 36, 2400010, true, true);
            } else {
                if (status === a++) {
                    cm.sendNormalTalk('#face10#也对，你说的没错。我的确是个穷鬼。', 44, 2400005, true, true);
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk('#face2#不，不是那样的……我不管啦，傻瓜！', 36, 2400010, true, true);
                    } else {
                        if (status === a++) {
                            cm.dispose();
                        }
                    }
                }
            }
        }
    }
}
function action分支10(d, c, b, a) {
    if (status <= a++) {
        cm.sendNormalTalk('你成长了我们也才能进化，所以要多吃点肉，味道又好对身体也好……啊，不是这个吗？', 36, 2400009, false, true);
    } else {
        if (status === a++) {
            cm.dispose();
        }
    }
}
function action分支11(d, c, b, a) {
    if (status <= a++) {
        cm.sendNormalTalk('心情不好的时候还是吃东西最爽。吧唧吧唧！', 36, 2400009, false, true);
    } else {
        if (status === a++) {
            cm.sendNormalTalk('那么心情好的时候呢？', 44, 2400006, true, true);
        } else {
            if (status === a++) {
                cm.sendNormalTalk('心情好的时候，也还是吃东西最爽。吧唧吧唧！', 36, 2400009, true, true);
            } else {
                if (status === a++) {
                    cm.sendNormalTalk('那么心情不好呢？', 44, 2400006, true, true);
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk('心情不好的时候也是吃东西……', 36, 2400009, true, true);
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk('那就是说一天到晚都是吃啊！', 44, 2400010, true, true);
                        } else {
                            if (status === a++) {
                                cm.dispose();
                            }
                        }
                    }
                }
            }
        }
    }
}
function action分支12(d, c, b, a) {
    if (status <= a++) {
        cm.sendNormalTalk('为什么选择阿尔法？那是……没，没有为什么，只是随便挑的而已。不是因为喜欢你才那样做的，不要误会！', 36, 2400010, false, true);
    } else {
        if (status === a++) {
            cm.dispose();
        }
    }
}
function action分支13(d, c, b, a) {
    if (status <= a++) {
        cm.sendNormalTalk('你们长得倒挺像，不过还是有很多不同点。虽然美发和美容谁都可以做，但是每个人都追求一下自己的个性，岂不是更好？', 36, 2400010, false, true);
    } else {
        if (status === a++) {
            cm.dispose();
        }
    }
}
function action分支14(d, c, b, a) {
    if (status <= a++) {
        cm.sendNormalTalk('#face1#咦？你说我和拉兹丽的关系不好？没有啊，我觉得我们是很要好的关系，不是吗？', 36, 2400009, false, true);
    } else {
        if (status === a++) {
            cm.sendNormalTalk('我才不愿和傻子一起玩呢。', 44, 2400010, true, true);
        } else {
            if (status === a++) {
                cm.sendNormalTalk('#face0#你看，说过我们很要好吧。', 36, 2400009, true, true);
            } else {
                if (status === a++) {
                    cm.sendNormalTalk('#face7#不是这意思吧。', 44, 2400005, true, true);
                } else {
                    if (status === a++) {
                        cm.dispose();
                    }
                }
            }
        }
    }
}
function action分支15(d, c, b, a) {
    if (status <= a++) {
        cm.sendNormalTalk('你问我对阿尔法怎么看啊？什么怎么看？啊，阿尔法什么的我一点都不喜欢！', 36, 2400010, false, true);
    } else {
        if (status === a++) {
            cm.sendNormalTalk('嗯哼？', 44, 2400005, true, true);
        } else {
            if (status === a++) {
                cm.sendNormalTalk('#face1#那，那也并不代表我讨厌……', 36, 2400010, true, true);
            } else {
                if (status === a++) {
                    cm.dispose();
                }
            }
        }
    }
}
function action分支16(d, c, b, a) {
    if (status <= a++) {
        cm.sendNormalTalk('在武器界面上只能强化武器。这里原本就是武器的空间，其他防具啊饰品啊什么的，照原来的方法在装备栏上强化去吧。', 36, 2400010, false, true);
    } else {
        if (status === a++) {
            cm.dispose();
        }
    }
}
function action分支17(d, c, b, a) {
    if (status <= a++) {
        cm.sendNormalTalk('对拉比斯怎么看啊？嗯……块头大的傻子？', 36, 2400010, false, true);
    } else {
        if (status === a++) {
            cm.sendNormalTalk('#face2#拉兹丽，你太过分了。你让我心碎。', 44, 2400009, true, true);
        } else {
            if (status === a++) {
                cm.sendNormalTalk('啊，那边有看起来非常可口的肉！', 36, 2400010, true, true);
            } else {
                if (status === a++) {
                    cm.sendNormalTalk('肉？！哪里？哪里？', 44, 2400009, true, true);
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk('哼，还真是个傻瓜。', 36, 2400010, true, true);
                    } else {
                        if (status === a++) {
                            cm.dispose();
                        }
                    }
                }
            }
        }
    }
}
function action分支18(d, c, b, a) {
    if (status <= a++) {
        cm.sendNormalTalk('#face0#你说我在生气？不不，只是对天气不满意而已。不是因为你好久没跟我搭话我才这样的！', 36, 2400010, false, true);
    } else {
        if (status === a++) {
            cm.dispose();
        }
    }
}
function action分支19(d, c, b, a) {
    if (status <= a++) {
        cm.sendNormalTalk('收集女神的眼泪就可以学到新的技能。……不过，我不太想和他们在一起。', 36, 2400010, false, true);
    } else {
        if (status === a++) {
            cm.dispose();
        }
    }
}
function action分支20(d, c, b, a) {
    if (status <= a++) {
        cm.sendNormalTalk('因为大家都太安静，我就来活跃一下气氛吧，作为活跃分子我也有自己的使命感！不是单纯的因为无聊。……是真的！', 36, 2400009, false, true);
    } else {
        if (status === a++) {
            cm.dispose();
        }
    }
}
function action分支21(d, c, b, a) {
    if (status <= a++) {
        cm.sendNormalTalk('你问我对拉兹丽怎么看啊？拉兹丽……太可怕了，一发火就像魔女一样。你看你看，现在……嘻！', 36, 2400009, false, true);
    } else {
        if (status === a++) {
            cm.dispose();
        }
    }
}
function action分支22(d, c, b, a) {
    if (status <= a++) {
        cm.sendNormalTalk('拉兹丽这家伙，好像蛮喜欢你！我怎么知道的？因为我们曾经是一个人，所以不说我也能知道。', 36, 2400009, false, true);
    } else {
        if (status === a++) {
            cm.sendNormalTalk('#face1#别瞎说，没有这回事！', 44, 2400010, true, true);
        } else {
            if (status === a++) {
                cm.dispose();
            }
        }
    }
}