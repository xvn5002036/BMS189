var status = -1;
function action(d, c, b) {
    status++;
    var a = -1;
    if (status <= a++) {
        cm.dispose();
    } else {
        if (status === a++) {
            cm.curNodeEventEnd(true);
            cm.setInGameDirectionMode(true, false, true);
            cm.effect_Voice('Field.img/masteryBook/EnchantSuccess', 100);
            cm.fieldEffect_KinesisEXP(Math.pow(cm.getLevel(), 3) / 5);
            cm.forceCompleteQuest(33138);
            cm.gainExp(Math.pow(cm.getLevel(), 3) / 5);
            cm.sendNormalTalk_Bottom('噢，没想到你这么有风度……嗯？我什么都没说。\r\n话说，现在能够看到奥尔卡的记忆了。\r\n我们先从以前的记忆开始吧。希望这是你想看到的记忆。', 37, 1540500, false, true);
        } else {
            if (status === a++) {
                cm.inGameDirectionEvent_AskAnswerTime(600);
            } else {
                if (status === a++) {
                    cm.npc_ChangeController(1540524, 'oid=12998302', 4300, -302, 46, 4250, 4350, 1, false, 0, false);
                    cm.npc_SetSpecialAction('oid=12998302', 'summon', 0, 0);
                    cm.npc_ChangeController(1540519, 'oid=12998303', 4180, -302, 45, 4130, 4230, 0, false, 0, false);
                    cm.npc_SetSpecialAction('oid=12998303', 'summon', 0, 0);
                    cm.npc_ChangeController(1540520, 'oid=12998304', 4100, -302, 45, 4050, 4150, 0, false, 0, false);
                    cm.npc_SetSpecialAction('oid=12998304', 'summon', 0, 0);
                    cm.inGameDirectionEvent_AskAnswerTime(600);
                } else {
                    if (status === a++) {
                        cm.inGameDirectionEvent_PushMoveInfo(0, 900, 4250, -292);
                    } else {
                        if (status === a++) {
                            cm.inGameDirectionEvent_AskAnswerTime(2063);
                        } else {
                            if (status === a++) {
                                cm.inGameDirectionEvent_SetHideEffect(1);
                                cm.inGameDirectionEvent_PushMoveInfo(0, 300, 4250, 508);
                                cm.effect_Text(['#fn黑体##fs26#精灵的记忆'], [
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
                            } else {
                                if (status === a++) {
                                    cm.inGameDirectionEvent_AskAnswerTime(4000);
                                } else {
                                    if (status === a++) {
                                        cm.npc_SetSpecialAction('oid=12998303', 'pung1', 1500, 0);
                                        cm.inGameDirectionEvent_AskAnswerTime(1200);
                                    } else {
                                        if (status === a++) {
                                            cm.npc_SetSpecialAction('oid=12998304', 'pung1', 1500, 0);
                                            cm.inGameDirectionEvent_AskAnswerTime(300);
                                        } else {
                                            if (status === a++) {
                                                cm.setNpcSpecialActionReset('oid=12998303');
                                                cm.npc_SetSpecialAction('oid=12998303', 'basic', -1, 0);
                                                cm.inGameDirectionEvent_AskAnswerTime(1200);
                                            } else {
                                                if (status === a++) {
                                                    cm.setNpcSpecialActionReset('oid=12998304');
                                                    cm.npc_SetSpecialAction('oid=12998304', 'basic', -1, 0);
                                                    cm.inGameDirectionEvent_AskAnswerTime(300);
                                                } else {
                                                    if (status === a++) {
                                                        cm.inGameDirectionEvent_PushScaleInfo(600, 2000, 1000, 4230, 200);
                                                    } else {
                                                        if (status === a++) {
                                                            cm.sendNormalTalk_Bottom('原来是你们啊。', 37, 1540524, false, true);
                                                        } else {
                                                            if (status === a++) {
                                                                cm.sendNormalTalk_Bottom('什么啊，真是有趣的人类。\r\n我们本来还想吓吓你呢……', 37, 1540519, true, true);
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.sendNormalTalk_Bottom('普通人见到我们，都会吓一跳呢。', 37, 1540520, true, true);
                                                                } else {
                                                                    if (status === a++) {
                                                                        cm.sendNormalTalk_Bottom('哈哈，因为我不是普通人。', 37, 1540521, true, true);
                                                                    } else {
                                                                        if (status === a++) {
                                                                            cm.sendNormalTalk_Bottom('嘁……你为什么总到这里来？\r\n这里可是我们的地盘。', 37, 1540519, true, true);
                                                                        } else {
                                                                            if (status === a++) {
                                                                                cm.sendNormalTalk_Bottom('黑暗不属于任何人。\r\n它公平地存在于所有地方。', 37, 1540521, true, true);
                                                                            } else {
                                                                                if (status === a++) {
                                                                                    cm.sendNormalTalk_Bottom('………… \r\n真是奇怪的人类。', 37, 1540520, true, true);
                                                                                } else {
                                                                                    if (status === a++) {
                                                                                        cm.sendNormalTalk_Bottom('哈哈……你也很奇特啊。', 37, 1540521, true, true);
                                                                                    } else {
                                                                                        if (status === a++) {
                                                                                            cm.sendNormalTalk_Bottom('那个，存在是什么意思啊？', 37, 1540519, true, true);
                                                                                        } else {
                                                                                            if (status === a++) {
                                                                                                cm.sendNormalTalk_Bottom('存在就是能感受到。\r\n能够踩到地面，能感知这个世界。', 37, 1540524, true, true);
                                                                                            } else {
                                                                                                if (status === a++) {
                                                                                                    cm.sendNormalTalk_Bottom('踩地……？\r\n我们没有脚。', 37, 1540520, true, true);
                                                                                                } else {
                                                                                                    if (status === a++) {
                                                                                                        cm.sendNormalTalk_Bottom('没有手，也没有脸。', 37, 1540519, true, true);
                                                                                                    } else {
                                                                                                        if (status === a++) {
                                                                                                            cm.sendNormalTalk_Bottom('哈哈……你们想拥有人类的身体吗？', 37, 1540521, true, true);
                                                                                                        } else {
                                                                                                            if (status === a++) {
                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(600);
                                                                                                            } else {
                                                                                                                if (status === a++) {
                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                    cm.effect_NormalSpeechBalloon('!!!', 1, 0, 0, 1500, 1, 0, 0, 0, 4, 1540519, cm.getPlayer().getId());
                                                                                                                } else {
                                                                                                                    if (status === a++) {
                                                                                                                        cm.sendNormalTalk_Bottom('那肯定很有趣！我们要怎么做呢？', 37, 1540519, false, true);
                                                                                                                    } else {
                                                                                                                        if (status === a++) {
                                                                                                                            cm.sendNormalTalk_Bottom('如果你们愿意，我可以给你们人类的身躯。\r\n只要你们帮我进行#r关于黑暗的研究#k。', 37, 1540524, true, true);
                                                                                                                        } else {
                                                                                                                            if (status === a++) {
                                                                                                                                cm.sendNormalTalk_Bottom('好的，那你把我们俩变成长相一模一样的人类吧。\r\n我们俩必须要在一起。', 37, 1540519, true, true);
                                                                                                                            } else {
                                                                                                                                if (status === a++) {
                                                                                                                                    cm.sendNormalTalk_Bottom('我先给你们起名字吧。\r\n你们一个叫奥尔卡，另一个叫斯乌。\r\n这两个名字怎么样？', 37, 1540524, true, true);
                                                                                                                                } else {
                                                                                                                                    if (status === a++) {
                                                                                                                                        cm.sendNormalTalk_Bottom('嗯！我很喜欢。', 37, 1540519, true, true);
                                                                                                                                    } else {
                                                                                                                                        if (status === a++) {
                                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(600);
                                                                                                                                        } else {
                                                                                                                                            if (status === a++) {
                                                                                                                                                cm.sendNormalTalk_Bottom('…………', 37, 1540520, false, true);
                                                                                                                                            } else {
                                                                                                                                                if (status === a++) {
                                                                                                                                                    cm.effect_NormalSpeechBalloon('......', 1, 0, 0, 1500, 1, 0, 0, 0, 4, 1540520, cm.getPlayer().getId());
                                                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                                                                                } else {
                                                                                                                                                    if (status === a++) {
                                                                                                                                                        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                                                    } else {
                                                                                                                                                        if (status === a++) {
                                                                                                                                                            cm.inGameDirectionEvent_PushScaleInfo(0, 1000, 2147483647, 2147483647, 2147483647);
                                                                                                                                                        } else {
                                                                                                                                                            if (status === a++) {
                                                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                                            } else {
                                                                                                                                                                if (status === a++) {
                                                                                                                                                                    cm.sendNormalTalk_Bottom('……于是奥尔卡和斯乌就获得了双胞胎的身体。\r\n说不定这是所有悲剧的开始……', 37, 1540500, false, true);
                                                                                                                                                                } else {
                                                                                                                                                                    if (status === a++) {
                                                                                                                                                                        cm.sendNormalTalk_Bottom('不知是哪里出了错……\r\n自从获得人类的身体后，斯乌开始变得越来越残忍。', 37, 1540500, true, true);
                                                                                                                                                                    } else {
                                                                                                                                                                        if (status === a++) {
                                                                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(600);
                                                                                                                                                                        } else {
                                                                                                                                                                            if (status === a++) {
                                                                                                                                                                                cm.inGameDirectionEvent_SetHideEffect(0);
                                                                                                                                                                                cm.dispose();
                                                                                                                                                                                cm.warp(350013200, 0, true);
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
            }
        }
    }
}
function start() {
    status = -1;
    action(1, 0, 0);
}