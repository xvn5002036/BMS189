var status = -1;
function action(d, c, b) {
    status++;
    var a = -1;
    if (status <= a++) {
        cm.dispose();
    } else {
        if (status === a++) {
            cm.killAllMob();
            cm.curNodeEventEnd(true);
            cm.setInGameDirectionMode(true, false, true);
            cm.inGameDirectionEvent_AskAnswerTime(1000);
        } else {
            if (status === a++) {
                cm.getMap().getReactorByName('box1').forceHitReactor(null, 3, 1488, -42, 0);
                cm.getMap().getReactorByName('box2').forceHitReactor(null, 4, 1948, -41, 0);
                cm.getMap().getReactorByName('box3').forceHitReactor(null, 5, 1244, -40, 0);
                cm.getMap().getReactorByName('box4').forceHitReactor(null, 3, 1831, -278, 0);
                cm.getMap().getReactorByName('box5').forceHitReactor(null, 4, 1456, -335, 0);
                cm.getMap().getReactorByName('box6').forceHitReactor(cm.getPlayer(), 5, 1171, -334, 0);
                cm.getMap().getReactorByName('box7').forceHitReactor(cm.getPlayer(), 3, 1657, -83, 0);
                cm.inGameDirectionEvent_AskAnswerTime(5000);
            } else {
                if (status === a++) {
                    cm.setInGameDirectionMode(false, true, false);
                    cm.fieldEffect_KinesisEXP(Math.pow(cm.getLevel(), 3) / 4);
                    cm.forceCompleteQuest(33141);
                    cm.gainExp(Math.pow(cm.getLevel(), 3) / 4);
                    cm.curNodeEventEnd(true);
                    cm.setInGameDirectionMode(true, false, true);
                    cm.sendNormalTalk_Bottom('我刚刚也跟你说过了，这次好像是最后的机会了。\r\n那我现在也走啦……', 37, 1540500, false, true);
                    cm.effect_Voice('Field.img/masteryBook/EnchantSuccess', 100);
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom('呃……晶莹果冻怪也很烦，所以我不会无聊。\r\n只是……我担心你会想我。\r\n希望这最后的记忆是你想找的记忆。', 37, 1540500, true, true);
                    } else {
                        if (status === a++) {
                            cm.inGameDirectionEvent_AskAnswerTime(600);
                        } else {
                            if (status === a++) {
                                cm.inGameDirectionEvent_SetHideEffect(1);
                                cm.npc_ChangeController(1540522, 'oid=13022748', 3495, -8, 97, 3445, 3545, 0, true, 0, false);
                                cm.npc_SetSpecialAction('oid=13022748', 'summon', 0, 0);
                                cm.npc_ChangeController(1540523, 'oid=13022749', 3744, -234, 192, 3694, 3794, 1, true, 0, false);
                                cm.npc_SetSpecialAction('oid=13022749', 'summon', 0, 0);
                                cm.inGameDirectionEvent_AskAnswerTime(600);
                            } else {
                                if (status === a++) {
                                    cm.npc_SetSpecialAction('oid=13022749', 'zombi', -1, 0);
                                    cm.inGameDirectionEvent_PushMoveInfo(0, 900, 3500, -108);
                                } else {
                                    if (status === a++) {
                                        cm.inGameDirectionEvent_AskAnswerTime(2149);
                                    } else {
                                        if (status === a++) {
                                            cm.inGameDirectionEvent_PushMoveInfo(0, 900, 3500, 42);
                                        } else {
                                            if (status === a++) {
                                                cm.effect_Text(['#fn黑体##fs26#格里梅尔研究所'], [
                                                    100,
                                                    2800,
                                                    4,
                                                    0,
                                                    0,
                                                    1,
                                                    4,
                                                    0,
                                                    0,
                                                    0
                                                ]);
                                                cm.inGameDirectionEvent_AskAnswerTime(3000);
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk_Bottom('斯乌，你没有忘记吧？\r\n我们俩必须在一起。\r\n现在我要遵守那个约定了。', 37, 1540522, false, true);
                                                } else {
                                                    if (status === a++) {
                                                        cm.npc_ChangeController(1540470, 'oid=13023015', 3165, -84, 189, 3115, 3215, 0, true, 1000, false);
                                                        cm.npc_SetSpecialAction('oid=13023015', 'summon', 0, 0);
                                                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                    } else {
                                                        if (status === a++) {
                                                            cm.npc_SetForceMove('oid=13023015', 1, 80, 50);
                                                            cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                        } else {
                                                            if (status === a++) {
                                                                cm.npc_setForceFlip('oid=13022748', -1);
                                                                cm.npc_SetForceMove('oid=13022748', -1, 50, 50);
                                                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.sendNormalTalk_Bottom('秃头！\r\n这么做真的就能救活斯乌了吗？', 37, 1540522, false, true);
                                                                } else {
                                                                    if (status === a++) {
                                                                        cm.sendNormalTalk_Bottom('请不要担心。\r\n这对我这个天才科学家来说根本不算什么……嘻嘻嘻！', 37, 1540470, true, true);
                                                                    } else {
                                                                        if (status === a++) {
                                                                            cm.sendNormalTalk_Bottom('我对此很怀疑……你该不会欺骗我奥尔卡吧？', 37, 1540522, true, true);
                                                                        } else {
                                                                            if (status === a++) {
                                                                                cm.sendNormalTalk_Bottom('这怎么可能。斯乌即将复活。\r\n而且是以#r完美的面貌#k。嘻嘻嘻……', 37, 1540470, true, true);
                                                                            } else {
                                                                                if (status === a++) {
                                                                                    cm.sendNormalTalk_Bottom('哼……如果你敢说谎，我就把你剩下的头发全部拔光。', 37, 1540522, true, true);
                                                                                } else {
                                                                                    if (status === a++) {
                                                                                        cm.sendNormalTalk_Bottom('哎呦，看来我得努力工作了。嘻嘻嘻……\r\n话说，我有个提议。', 37, 1540470, true, true);
                                                                                    } else {
                                                                                        if (status === a++) {
                                                                                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                            cm.effect_NormalSpeechBalloon('??', 1, 0, 0, 2000, 1, 0, 0, 0, 4, 1540522, cm.getPlayer().getId());
                                                                                        } else {
                                                                                            if (status === a++) {
                                                                                                cm.sendNormalTalk_Bottom('不是什么大事。\r\n我只是想要建造一个#r小飞船#k而已。', 37, 1540470, false, true);
                                                                                            } else {
                                                                                                if (status === a++) {
                                                                                                    cm.sendNormalTalk_Bottom('飞船？奥尔卡不需要什么飞船。\r\n我能够在空中飞来飞去。', 37, 1540522, true, true);
                                                                                                } else {
                                                                                                    if (status === a++) {
                                                                                                        cm.sendNormalTalk_Bottom('这飞船不是只能飞来飞去。\r\n它非常强大，能让这个世界变为人间地狱。', 37, 1540470, true, true);
                                                                                                    } else {
                                                                                                        if (status === a++) {
                                                                                                            cm.sendNormalTalk_Bottom('请想象一下。\r\n如果有了这样的玩具，斯乌醒来该有多开心啊？', 37, 1540470, true, true);
                                                                                                        } else {
                                                                                                            if (status === a++) {
                                                                                                                cm.sendNormalTalk_Bottom('嗯……按你所说的做吧。\r\n只要能救活斯乌，其他什么都行。', 37, 1540522, true, true);
                                                                                                            } else {
                                                                                                                if (status === a++) {
                                                                                                                    cm.sendNormalTalk_Bottom('那么，请你确认一下这份文件吧。', 37, 1540470, true, true);
                                                                                                                } else {
                                                                                                                    if (status === a++) {
                                                                                                                        cm.inGameDirectionEvent_PushScaleInfo(900, 2000, 1000, 3350, 0);
                                                                                                                    } else {
                                                                                                                        if (status === a++) {
                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                                                                                        } else {
                                                                                                                            if (status === a++) {
                                                                                                                                cm.npc_SetSpecialAction('oid=13023015', 'docu', 3000, 0);
                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                                                                                            } else {
                                                                                                                                if (status === a++) {
                                                                                                                                    cm.sendNormalTalk_Bottom('这设计图是什么……？黑色天堂计划？', 37, 1540522, false, true);
                                                                                                                                } else {
                                                                                                                                    if (status === a++) {
                                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                                                                    } else {
                                                                                                                                        if (status === a++) {
                                                                                                                                            cm.npc_SetSpecialAction('oid=13023015', 'laugh', -1, 0);
                                                                                                                                            cm.sendNormalTalk_Bottom('是的。\r\n将要毁灭冒险岛世界的飞船的名字……就是黑色天堂。', 37, 1540470, false, true);
                                                                                                                                        } else {
                                                                                                                                            if (status === a++) {
                                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                                                                                                            } else {
                                                                                                                                                if (status === a++) {
                                                                                                                                                    cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                                                } else {
                                                                                                                                                    if (status === a++) {
                                                                                                                                                        cm.inGameDirectionEvent_PushScaleInfo(0, 1000, 2147483647, 2147483647, 2147483647);
                                                                                                                                                    } else {
                                                                                                                                                        if (status === a++) {
                                                                                                                                                            cm.forceCompleteQuest(33158);
                                                                                                                                                            cm.forceCompleteQuest(33120);
                                                                                                                                                            cm.finishAchievement(1188);
                                                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                                                                                        } else {
                                                                                                                                                            if (status === a++) {
                                                                                                                                                                cm.inGameDirectionEvent_SetHideEffect(0);
                                                                                                                                                                cm.dispose();
                                                                                                                                                                cm.warp(350013600, 0, true);
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
    }
}
function start() {
    status = -1;
    action(1, 0, 0);
}