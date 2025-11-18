var status = -1;
var selectionLog = [];
function start() {
    action(1, 0, 0);
}
function action(mode, type, selection) {
    var reactor = 'action' + cm.getNpc();
    eval(reactor)(mode, type, selection);
}
function action0(d, c, b) {
    status++;
    var a = -1;
    if (status <= a++) {
        cm.dispose();
    } else {
        if (status === a++) {
            cm.sendNormalTalk('为达到#b日冕3级#k的人准备的特别福利，就是#r1个#e#i2534000:# #t2534000##k#n！', 4, 9400965, false, true);
        } else {
            if (status === a++) {
                cm.sendNormalTalk('你应该很了解#r#i2534000:# #t2534000##k的使用方法吧？\r\n什么？你不知道？居然……！', 4, 9400965, true, true);
            } else {
                if (status === a++) {
                    cm.sendNormalTalk('如果对世界内的任意角色使用#r#i2534000:# #t2534000##k，相应角色就将成为#r斗燃角色#k！\r\n难道你不知道#b升1级时能够额外成长2级#k的斗燃角色效果吗？', 4, 9400965, true, true);
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk('如果你能达到#b日冕3级#k，我就会给你我准备好的#b斗燃加速器#k，如果你感兴趣，就来参加一下庆典吧！\r\n#r※ 需要日冕积分累积到600积分才能达到日冕3级。', 4, 9400965, true, false);
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
function action1(d, c, b) {
    status++;
    var a = -1;
    if (status <= a++) {
        cm.dispose();
    } else {
        if (status === a++) {
            cm.sendNormalTalk('为达到#b日冕2级#k的人准备的特别福利，就是#b#e日月圣所#k#n！\r\n你看到我背后的这个帐篷了吗？这就是为了尽量吸收日蚀之力而特别准备的圣地！', 4, 9400965, false, true);
        } else {
            if (status === a++) {
                cm.sendNormalTalk('在#b日月圣所#k中强化星之力，#b13星为止（不含13星升14星）的装备的破损率变为0%#k！\r\n抓住这个机会，强化你平时想强化又舍不得的装备吧！', 4, 9400965, true, true);
            } else {
                if (status === a++) {
                    cm.sendNormalTalk('但是，看来你还没达到#b日冕2级#k啊？哎……！\r\n你还没有资格使用#b日月圣所#k呢！\r\n#r※ 需要日冕积分累积到1200积分才能达到日冕2级。', 4, 9400965, true, false);
                } else {
                    if (status === a++) {
                        cm.dispose();
                    }
                }
            }
        }
    }
}
function action2(d, c, b) {
    status++;
    var a = -1;
    if (status <= a++) {
        cm.dispose();
    } else {
        if (status === a++) {
            cm.sendNormalTalk('为达到#b日冕1级#k的人准备的特别福利，就是#b#e装备传授#k#n功能！\r\n你想知道#b装备传授#k功能是什么吗？你可别太惊讶哦！', 4, 9400965, false, true);
        } else {
            if (status === a++) {
                cm.sendNormalTalk('#b装备传授#k是能够将我的角色的特定装备道具转移到相同世界的其他角色身上的功能。\r\n如果使用#b装备传授#k功能，不仅能移动#r#e无法交换的道具#k#n，还能体验#r#e按照接收传授的角色需求来变换装备的种类和能力值#k#n的神秘力量！', 4, 9400965, true, true);
            } else {
                if (status === a++) {
                    cm.sendNormalTalk('但不是所有装备都能传授，只有一部分指定的装备才能传授，你最好慎重选择要转移的装备哦！#b\r\n可传授的装备目录\r\n - 埃苏莱布斯武器\r\n - 法弗纳武器', 4, 9400965, true, true);
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk('如果在庆典结束前达到#b日冕1级#k，就能体验#r充满日蚀之力的这个时候#k才会出现的神秘功能，请不要错过这个机会！\r\n#r※需要日冕积分累积2200积分后才能达到日冕1级。', 4, 9400965, true, false);
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
function action3(d, c, b) {
    status++;
    var a = -1;
    if (status <= a++) {
        cm.dispose();
    } else {
        if (status === a++) {
            cm.sendNormalTalk('体验了#b日冕庆典#k精髓的人才能获得的专属福利就是#b#e骑宠技能移动#k#n功能！', 4, 9400965, false, true);
        } else {
            if (status === a++) {
                cm.sendNormalTalk('这是能够将原本无法自由移动的骑宠技能#b交给世界内其他角色#k的特别福利，你应该能尽情享受庆典的氛围吧？', 4, 9400965, true, true);
            } else {
                if (status === a++) {
                    cm.sendNormalTalk('这是只有在#r充满日蚀之力的此刻#k才能进行的特别体验，等你的#b日冕积分累积到3000积分#k后再来找我吧！', 4, 9400965, true, false);
                } else {
                    if (status === a++) {
                        cm.dispose();
                    }
                }
            }
        }
    }
}
function action4(f, c, b) {
    if (status == 0 && f == 0) {
        cm.dispose();
        return;
    }
    f == 1 ? status++ : status--;
    var a = -1;
    if (status <= a++) {
        cm.dispose();
    } else {
        if (status === a++) {
            cm.sendNormalTalk('#b#e[日冕风暴]#k#n活动\r\n获得每次使用时都能#b叠加经验值提高增益#k的#b日冕风暴#k技能\r\n 1)通过消灭等级范围怪物等能够补充技能值\r\n 2)消耗一定的技能值就能#b对周围的怪物进行范围攻击#k还能#b自己产生可以叠加的经验值增益#k\r\n 3)经验值增益效果将#b随着日冕等级而强化#k\r\n 4)每次使用技能时都能获得#b5日冕积分#k', 4, 9400960, false, true);
        } else {
            if (status === a++) {
                cm.sendNormalTalk('你选择了我准备的强大力量--#b日冕风暴#啊k，真是明智的选择。#b越叠加越强大的#k经验值增益，甚至还会随着你的#b日冕等级#k而增强效果，这实在是太具有诱惑力了！当然，你也得#r注意不要失去叠加的层数#k才行，呵呵……', 4, 9400960, true, true);
                var d = cm.getNumberFromQuestInfo(500831, 'event');
                if (d > 0) {
                    cm.dispose();
                }
            } else {
                if (status === a++) {
                    cm.sendNormalTalk('#b每使用一次，增益的持续时间增加5分钟#k，最多可以#b叠加50次#k。能发挥出多大的效果，就取决于你怎么使用了。', 4, 9400960, true, true);
                } else {
                    if (status === a++) {
                        cm.askYesNo('来，你要选择我的#b#e[日冕风暴]#k#n活动作为本周的活动吗？\r\n虽然之前我也说过，但你别忘记了，#r主要活动每周只能选择一次且无法变更#k哦。', 4, 9400960);
                    } else {
                        if (status === a++) {
                            cm.setNumberForQuestInfo(500831, 'event', 1);
                            cm.setNumberForQuestInfo(64689, 'event', 1);
                            cm.forceCompleteQuest(64681);
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk('正确的选择！\r\n希望你能在一周期间熟悉日冕和沙漠的热情吧！', 4, 9400960, true, true);
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
}
function action5(f, c, b) {
    if (status == 0 && f == 0) {
        cm.dispose();
        return;
    }
    f == 1 ? status++ : status--;
    var a = -1;
    if (status <= a++) {
        cm.dispose();
    } else {
        if (status === a++) {
            cm.sendNormalTalk('#b#e[日蚀地带]#k#n活动\r\n可进入#b高经验值怪物所在的#k#b日蚀地带#k\r\n 1) #b每个角色每天只能使用一段时间#k\r\n 2)获得的经验值与消灭的怪物数量无关\r\n 3)经验值得获得量和可使用时间随着#b日冕等级#k而增加\r\n 4)在地区内可以按照一定周期获得#b日冕积分#k\r\n#r#e※ 注意：200级以上角色获得经验值的比例将大幅减少。#k#n', 4, 9400961, false, true);
        } else {
            if (status === a++) {
                cm.sendNormalTalk('哈哈哈！你这家伙，果然很有眼光啊？我准备的火热#b日蚀地带#k才能称得上是这个日冕庆典的精髓啊！\r\n被日蚀炎热气息所支配的沙漠怪物将带来#e巨大的经验值#n，你是不是已经开始期待了呢？', 4, 9400961, true, true);
                var d = cm.getNumberFromQuestInfo(500831, 'event');
                if (d > 0) {
                    cm.dispose();
                }
            } else {
                if (status === a++) {
                    cm.sendNormalTalk('#b世界内所有每个角色每天可以在一定时间内#k自由使用#b日蚀地带#k，经验值获得量和可使用时间将随着#b日冕等级#k的提升而增加！', 4, 9400961, true, true);
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk('但是，如果角色的等级在#r#e200级以上，获得的经验值将大幅减少#k#n，请注意这一点哦！你得寻找符合你的水平的更强大的敌人！', 4, 9400961, true, true);
                    } else {
                        if (status === a++) {
                            cm.askYesNo('当然了，你应该知道#r主要活动每周只能选择一次且无法变更#k吧？\r\n如果你做好了决定，那就向充满了沙漠热气的#b#e[日蚀地带]#k#n突击吧！！！！#fs24#哈哈哈！！！！', 4, 9400961);
                        } else {
                            if (status === a++) {
                                cm.setNumberForQuestInfo(500831, 'event', 2);
                                cm.setNumberForQuestInfo(64689, 'event', 2);
                                cm.forceCompleteQuest(64681);
                                cm.sendNormalTalk('#fs18#向前突击！！！！', 2, 0, false, true);
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk('你的气势不错！看来说不定你也有一天能够成为像我一样跨越种族界限的强者啊。\r\n那就希望你能在一周期间熟悉日冕和沙漠的热情吧！！', 4, 9400961, true, true);
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
    }
}
function action6(f, c, b) {
    if (status == 0 && f == 0) {
        cm.dispose();
        return;
    }
    f == 1 ? status++ : status--;
    var a = -1;
    if (status <= a++) {
        cm.dispose();
    } else {
        if (status === a++) {
            cm.sendNormalTalk('#b#e[昼夜1+1]#k#n活动\r\n提高#b神秘河#k内容的#b每日任务奖励#k\r\n 1)对#b世界内所有角色#k产生效果\r\n 2) 奖励提高量随着#b日冕等级#k而增加\r\n 3)完成每日任务时，获得地区#b日冕积分#k', 4, 9400962, false, true);
        } else {
            if (status === a++) {
                cm.sendNormalTalk('……比起盛大的活动……还是实惠比较重要……#b[昼夜1+1]#k活动的要求并不多。只要和平常一样进行每日任务……奖励就能增加#b2倍以上#k……', 4, 9400962, true, true);
                var d = cm.getNumberFromQuestInfo(500831, 'event');
                if (d > 0) {
                    cm.dispose();
                }
            } else {
                if (status === a++) {
                    cm.sendNormalTalk('……什么原理……？很简单……如果你选择#b[昼夜1+1]#k活动……你就能获得蕴含日蚀之力的#b#s80011911# #q80011911##k技能……\r\n如果你拥有这个技能，你每次进行#b神秘河#k内容的每日任务时，就能#b自动提高获得的奖励#k……', 4, 9400962, true, true);
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk('……获得的奖励量#b至少是2倍#k……但是如果你的#b日冕等级#k够高，就能获得更多的奖励哦……？具体的情况等你亲自体验下就知道了……', 4, 9400962, true, true);
                    } else {
                        if (status === a++) {
                            cm.askYesNo('那就和我一起进行#b[昼夜1+1]#k活动吧……？\r\n当然了，#r主要活动每周只能选择一种，并且无法变更，#k请慎重选择……', 4, 9400962);
                        } else {
                            if (status === a++) {
                                cm.setNumberForQuestInfo(500831, 'event', 3);
                                cm.setNumberForQuestInfo(64689, 'event', 3);
                                cm.forceCompleteQuest(64681);
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk('好的……希望你能在一周期间熟悉日冕和沙漠的热情……', 4, 9400962, true, true);
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
    }
}
function action7(mode, type, selection) {
    status++;
    selectionLog[status] = selection;
    var i = -1;
    if (status <= i++) {
        cm.dispose();
    } else {
        if (status === i++) {
            cm.askMenu('你想仔细了解与太阳同辉的#b#e[日冕庆典]#k#n吗？呵呵呵……\r\n\r\n#b#L0#什么是#e[日冕庆典]#n？#l#k\r\n#b#L1#关于3种#e[主要活动]#n#l#k\r\n#b#L2#什么是#e[日冕技能]#n？#l#k\r\n#b#L3##e[日冕等级]#n和#e[特殊福利]#k#l#k\r\n#b#L4#什么是#e[日冕积分]#n？#l#k\r\n\r\n#r#L5#没有其他问题了#l#k', 4, 9400960);
        } else {
            var reactor = 'action7' + selectionLog[1];
            eval(reactor)(mode, type, selection, i);
        }
    }
}
function action70(d, c, b, a) {
    if (status <= a++) {
        cm.sendNormalTalk('#b日冕庆典#k是冒险岛世界真正的庆典。它同时拥有灼热的沙漠气息和魅力的日冕光辉，将为你注入惊人的太阳之力，提供#b丰富多样的福利#k。', 4, 9400960, false, true);
    } else {
        if (status === a++) {
            cm.sendNormalTalk('庆典主要由#b3个主要活动#k和#b各种辅助活动#k组成，每个活动都有相应的效果，参与活动即可获得效果和#b日冕积分#k。', 4, 9400960, true, true);
        } else {
            if (status === a++) {
                cm.sendNormalTalk('你的 #b日冕等级#k越高，#b主要活动#k的效果就越强。越是尽情享受庆典，就会离日冕的精髓越近。', 4, 9400960, true, true);
            } else {
                if (status === a++) {
                    cm.sendNormalTalk('哎呀呀，有件事我差点忘了跟你说。\r\n#r主要活动每周只能选择一次#k！\r\n你要选择几次，才能选中最适合你的活动呢？呵呵呵……', 4, 9400960, true, true);
                } else {
                    if (status === a++) {
                        cm.dispose();
                    }
                }
            }
        }
    }
}
function action71(d, c, b, a) {
    if (status <= a++) {
        cm.sendNormalTalk('日冕庆典的真正价值，在于我们准备的3个#b主要活动#k！\r\n#b#e[日冕风暴]#k#n：强大的攻击与可叠加的经验值增益\r\n#b#e[日蚀地带]#k#n：提供大量经验值的专用区域\r\n#b#e[昼夜1+1]#k#n：大幅增加每日任务奖励', 4, 9400961, false, true);
    } else {
        if (status === a++) {
            cm.sendNormalTalk('#b选择[日冕风暴]#k活动，将获得可在狩猎等级范围怪物时使用的强大技能。每次使用技能，都会向#b周围怪物发动范围攻击#k，并获得#b可叠加的经验值增加增益#k！\r\n你要是感兴趣，就去找我旁边的#b黑暗王子#k吧。', 4, 9400961, true, true);
        } else {
            if (status === a++) {
                cm.sendNormalTalk('要说效果最为惊人的活动，那必须是#b[日蚀地带]#k呀！因为它是由我负责的！哈哈哈哈……！\r\n世界内的所有角色均可#b进入活动专用区域狩猎怪物，获得大量经验值#k！', 4, 9400961, true, true);
            } else {
                if (status === a++) {
                    cm.sendNormalTalk('想了解#b[昼夜1+1]#k活动……就去找一旁的#b猫头鹰#k吧。可惜#b猫头鹰#k那家伙的力量还没有觉醒，所以它可能没法切身体会到庆典的火热气氛了……唉……\r\n对了，听说#b每日任务的奖励大幅增加#k了？', 4, 9400961, true, true);
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk('还有，不知道你听说了没有，#r每周只能选择一个主要活动#k，呵呵……\r\n要是不喜欢这周的活动，就等到下一周，选择其他活动吧？我当然知道哪个活动最好，但是，我不告诉你……呵哈哈哈哈！！', 4, 9400961, true, true);
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
function action72(d, c, b, a) {
    if (status <= a++) {
        cm.sendNormalTalk('……蕴含冒险岛世界日冕气息的技能……就是#b[日冕技能]#k……\r\n这些技能拥有强大而又神秘的效果，但只在#b日冕庆典#k期间有效……', 4, 9400962, false, true);
    } else {
        if (status === a++) {
            cm.sendNormalTalk('……冒险岛世界无处不在的日冕之力，会根据你选择的#b日冕技能#k赋予你不同的效果。可能是强大的力量，也可能是神秘的体验……\r\n还有，庆典的外观也会根据所选技能发生变化……', 4, 9400962, true, true);
        } else {
            if (status === a++) {
                cm.sendNormalTalk('……至于都有哪些#b日冕技能#k，你就自己去看看吧……庆典现场的#b莫哈莫德#k爷爷会教给你如何使用日冕技能……', 4, 9400962, true, true);
            } else {
                if (status === a++) {
                    cm.sendNormalTalk('…… 对了……要想使用#b日冕技能#k，你还需要关注#b日冕等级#k和#b日冕积分#k……', 4, 9400962, true, true);
                } else {
                    if (status === a++) {
                        cm.dispose();
                    }
                }
            }
        }
    }
}
function action73(d, c, b, a) {
    if (status <= a++) {
        cm.sendNormalTalk('你就是参与日冕庆典的年轻朋友吧？是否了解庆典的真正意义，在参与庆典活动时获得的效果可是天差地别！', 4, 9400965, false, true);
    } else {
        if (status === a++) {
            cm.sendNormalTalk('冒险岛世界随处可见的日冕气息充盈着庆典现场，参与庆典就能更好地运用日冕气息……这就是#b日冕等级#k的真正功效！', 4, 9400965, true, true);
        } else {
            if (status === a++) {
                cm.sendNormalTalk('为了帮助你更好地享受#b日冕庆典#k的各项活动，我决定赋予你提升#b日冕等级#k的资格！随着#b日冕等级#k的提升，你将获得#b更加特别的福利#k！\r\n#b#e[斗燃加速器]#k#n福利：使用后，斗燃角色效果生效\r\n#b#e[日月圣所]#k#n福利：星之力强化时避免破损\r\n#b#e[传授装备]#k#n福利：传授装备，并根据接受装备的角色改变种类和能力值\r\n#b#e[骑宠技能移动]#k#n福利：骑宠技能转移给世界内的其他角色 ', 4, 9400965, true, true);
            } else {
                if (status === a++) {
                    cm.sendNormalTalk('想要提升#b日冕等级#k，必须证明你具备相应的资格！积极参与庆典，收集#b日冕积分#k吧！', 4, 9400965, true, true);
                } else {
                    if (status === a++) {
                        cm.dispose();
                    }
                }
            }
        }
    }
}
function action74(d, c, b, a) {
    if (status <= a++) {
        cm.sendNormalTalk('#b日冕庆典#k即是庆典，也是力量与光荣的象征。只要参与其中，就能获得#b运用日冕之力的资格#k。', 4, 9400960, false, true);
    } else {
        if (status === a++) {
            cm.sendNormalTalk('#b日冕积分#k是一种衡量标准，通过积分的多少，可以看出你有怎样的资格，能获得多少#b日冕庆典#k所提供的福利……呵呵。', 4, 9400960, true, true);
        } else {
            if (status === a++) {
                cm.sendNormalTalk('很简单。在庆典现场参与各项#b主要活动#k或#b辅助活动#k，都可以获得#b日冕积分#k。积分足够多时，就可以用来交换更加伟大的能力和资格了。', 4, 9400960, true, true);
            } else {
                if (status === a++) {
                    cm.sendNormalTalk('你累积的#b日冕积分#k越多，#b日冕等级#k就越高，可以使用的#b日冕技能#k也就越多。积极参与庆典，获取积分吧。哈哈哈……', 4, 9400960, true, true);
                } else {
                    if (status === a++) {
                        cm.dispose();
                    }
                }
            }
        }
    }
}
function action75(d, c, b, a) {
    if (status <= a++) {
        cm.dispose();
    }
}
function action8(d, c, b) {
    status++;
    var a = -1;
    if (status <= a++) {
        cm.dispose();
    } else {
        if (status === a++) {
            cm.coronaSkillMenu(6, 0, 99, 1);
            cm.dispose();
        }
    }
}
function action100(d, c, b, a) {
    status++;
    var a = -1;
    if (status <= a++) {
        cm.dispose();
    } else {
        if (status === a++) {
            cm.sendNormalTalk('……蕴含冒险岛世界日冕气息的技能……就是#b[日冕技能]#k……\r\n这些技能拥有强大而又神秘的效果，但只在#b日冕庆典#k期间有效……', 4, 9400962, false, true);
        } else {
            if (status === a++) {
                cm.sendNormalTalk('……冒险岛世界无处不在的日冕之力，会根据你选择的#b日冕技能#k赋予你不同的效果。可能是强大的力量，也可能是神秘的体验……\r\n还有，庆典的外观也会根据所选技能发生变化……', 4, 9400962, true, true);
            } else {
                if (status === a++) {
                    cm.sendNormalTalk('……至于都有哪些#b日冕技能#k，你就自己去看看吧……庆典现场的#b莫哈莫德#k爷爷会教给你如何使用日冕技能……', 4, 9400962, true, true);
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk('…… 对了……要想使用#b日冕技能#k，你还需要关注#b日冕等级#k和#b日冕积分#k……', 4, 9400962, true, true);
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