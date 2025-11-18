var status = -1;
var selectionLog = [];
function action(mode, type, selection) {
    var reactor = 'action' + cm.getNpc();
    eval(reactor)(mode, type, selection);
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
            cm.curNodeEventEnd(true);
            cm.setInGameDirectionMode(true, false, true);
            cm.inGameDirectionEvent_PushMoveInfo(0, 2100, -197, 128);
        } else {
            if (status === a++) {
                cm.inGameDirectionEvent_AskAnswerTime(133);
            } else {
                if (status === a++) {
                    cm.inGameDirectionEvent_PushMoveInfo(0, 1000, -197, -682);
                } else {
                    if (status === a++) {
                        cm.inGameDirectionEvent_AskAnswerTime(810);
                    } else {
                        if (status === a++) {
                            cm.onTeleport(0, 3, cm.getPlayer().getId(), -207, -710);
                            cm.inGameDirectionEvent_AskAnswerTime(1);
                        } else {
                            if (status === a++) {
                                cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                            } else {
                                if (status === a++) {
                                    cm.setInGameDirectionMode(false, true, false);
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
            cm.curNodeEventEnd(true);
            cm.setInGameDirectionMode(true, false, true);
            cm.inGameDirectionEvent_PushMoveInfo(0, 2100, -207, -639);
        } else {
            if (status === a++) {
                cm.inGameDirectionEvent_AskAnswerTime(19);
            } else {
                if (status === a++) {
                    cm.inGameDirectionEvent_PushMoveInfo(0, 1000, -207, -1449);
                } else {
                    if (status === a++) {
                        cm.inGameDirectionEvent_AskAnswerTime(810);
                    } else {
                        if (status === a++) {
                            cm.onTeleport(0, 3, cm.getPlayer().getId(), -207, -1483);
                            cm.inGameDirectionEvent_AskAnswerTime(1);
                        } else {
                            if (status === a++) {
                                cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                            } else {
                                if (status === a++) {
                                    cm.setInGameDirectionMode(false, true, false);
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
            cm.curNodeEventEnd(true);
            cm.setInGameDirectionMode(true, false, true);
            cm.inGameDirectionEvent_PushMoveInfo(0, 2100, -207, -1406);
        } else {
            if (status === a++) {
                cm.inGameDirectionEvent_AskAnswerTime(19);
            } else {
                if (status === a++) {
                    cm.inGameDirectionEvent_PushMoveInfo(0, 1000, -207, -2216);
                } else {
                    if (status === a++) {
                        cm.inGameDirectionEvent_AskAnswerTime(810);
                    } else {
                        if (status === a++) {
                            cm.onTeleport(0, 3, cm.getPlayer().getId(), -207, -2250);
                            cm.inGameDirectionEvent_AskAnswerTime(1);
                        } else {
                            if (status === a++) {
                                cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                            } else {
                                if (status === a++) {
                                    cm.setInGameDirectionMode(false, true, false);
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
function action13(d, c, b) {
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
            cm.curNodeEventEnd(true);
            cm.setInGameDirectionMode(true, false, true);
            cm.inGameDirectionEvent_PushMoveInfo(0, 2100, -469, -1975);
        } else {
            if (status === a++) {
                cm.inGameDirectionEvent_AskAnswerTime(22);
            } else {
                if (status === a++) {
                    cm.inGameDirectionEvent_PushMoveInfo(0, 1000, -469, -1245);
                } else {
                    if (status === a++) {
                        cm.inGameDirectionEvent_AskAnswerTime(731);
                    } else {
                        if (status === a++) {
                            cm.onTeleport(0, 3, cm.getPlayer().getId(), -469, -1282);
                            cm.inGameDirectionEvent_AskAnswerTime(1);
                        } else {
                            if (status === a++) {
                                cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                            } else {
                                if (status === a++) {
                                    cm.setInGameDirectionMode(false, true, false);
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
function action12(d, c, b) {
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
            cm.curNodeEventEnd(true);
            cm.setInGameDirectionMode(true, false, true);
            cm.inGameDirectionEvent_PushMoveInfo(0, 2100, -469, -1208);
        } else {
            if (status === a++) {
                cm.inGameDirectionEvent_AskAnswerTime(19);
            } else {
                if (status === a++) {
                    cm.inGameDirectionEvent_PushMoveInfo(0, 1000, -469, -478);
                } else {
                    if (status === a++) {
                        cm.inGameDirectionEvent_AskAnswerTime(731);
                    } else {
                        if (status === a++) {
                            cm.onTeleport(0, 3, cm.getPlayer().getId(), -470, -513);
                            cm.inGameDirectionEvent_AskAnswerTime(1);
                        } else {
                            if (status === a++) {
                                cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                            } else {
                                if (status === a++) {
                                    cm.setInGameDirectionMode(false, true, false);
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
function action11(d, c, b) {
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
            cm.curNodeEventEnd(true);
            cm.setInGameDirectionMode(true, false, true);
            cm.inGameDirectionEvent_PushMoveInfo(0, 2100, -470, -440);
        } else {
            if (status === a++) {
                cm.inGameDirectionEvent_AskAnswerTime(19);
            } else {
                if (status === a++) {
                    cm.inGameDirectionEvent_PushMoveInfo(0, 1000, -470, 290);
                } else {
                    if (status === a++) {
                        cm.inGameDirectionEvent_AskAnswerTime(731);
                    } else {
                        if (status === a++) {
                            cm.onTeleport(0, 3, cm.getPlayer().getId(), -400, 280);
                            cm.inGameDirectionEvent_AskAnswerTime(1);
                        } else {
                            if (status === a++) {
                                cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                            } else {
                                if (status === a++) {
                                    cm.setInGameDirectionMode(false, true, false);
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
function action100(d, c, b) {
    if (cm.isQuestActive(33501)) {
        cm.effect_NormalSpeechBalloon('#fn黑体##fs18##rRock！！！', 0, 0, 0, 3000, 1530660, cm.getPlayer().getId());
        cm.dispose();
        return;
    }
    if (cm.isQuestFinished(32723)) {
        cm.dispose();
        return;
    }
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
            cm.sendNormalTalk_Bottom('嗬……那就是传闻中的转校生吧。', 37, 1530270, false, true);
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom('长得也有些不太寻常？最近传得沸沸扬扬的那个传说是真的吗？', 37, 1530280, true, true);
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom('……？', 57, 0, true, true);
                } else {
                    if (status === a++) {
                        cm.forceCompleteQuest(32723);
                        cm.gainExp(Math.pow(cm.getLevel(), 3));
                        cm.dispose();
                    }
                }
            }
        }
    }
}
function action101(d, c, b) {
    if (cm.isQuestActive(33501)) {
        cm.effect_NormalSpeechBalloon('#fn黑体##fs18##r尖叫吧！！！', 0, 0, 0, 3000, 1530659, cm.getPlayer().getId());
        cm.dispose();
        return;
    }
    if (cm.isQuestFinished(32725)) {
        cm.dispose();
        return;
    }
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
            cm.sendNormalTalk_Bottom('那就是传闻中的转校生。\r\n想要接手这所学校的……', 37, 1530300, false, true);
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom('听说他来的第一天就和人打起来了？\r\n真可怕……还是别看他了。', 37, 1530310, true, true);
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom('……？！#b（路过的学生好像在对自己议论纷纷。）#k', 57, 0, true, true);
                } else {
                    if (status === a++) {
                        cm.forceCompleteQuest(32725);
                        cm.gainExp(Math.pow(cm.getLevel(), 3));
                        cm.dispose();
                    }
                }
            }
        }
    }
}
function action201(d, c, b) {
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
            cm.sendNormalTalk_Bottom('这里真是没一点像样的。要是约到这儿来的话，肯定会被误会成是叫出来打架的。这里不行，去别的地方看看吧。', 57, 0, false, true);
        } else {
            if (status === a++) {
                cm.dispose();
                cm.warp(330002314, 0);
            }
        }
    }
}
function action202(d, c, b) {
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
            cm.sendNormalTalk_Bottom('真是个氛围不错的地方，还很适合散步。不过是不是人为的感觉太重了？先把这里当做备选，再去别的地方看看吧。', 57, 0, false, true);
        } else {
            if (status === a++) {
                cm.dispose();
                cm.warp(330002315, 0);
            }
        }
    }
}
function action203(d, c, b) {
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
            cm.sendNormalTalk_Bottom('喷泉……这里如果好好利用的话，应该可以打造一场不错的惊喜。还是这里最好。联系一下其他队员……哦不，是其他伙伴们吧。', 57, 0, false, true);
        } else {
            if (status === a++) {
                cm.gainExp(Math.pow(cm.getLevel(), 3));
                cm.forceCompleteQuest(32821);
                cm.dispose();
                cm.warp(330001700, 0);
            }
        }
    }
}
function action301(d, c, b) {
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
            cm.setAmbience('Ambience.img/horrorpiano', 100, 60);
            cm.effect_NormalSpeechBalloon('……嗯? 什么声音? 我得快点拿着书包离开这里. ', 1, 0, 0, 3000, 0, cm.getPlayer().getId());
            cm.dispose();
        }
    }
}
function action302(d, c, b) {
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
            cm.effect_Voice('SoundEff.img/pianoEnd', 100);
            cm.effect_NormalSpeechBalloon(' ……那边有人吗? ', 1, 0, 0, 3000, 0, cm.getPlayer().getId());
            cm.dispose();
            cm.getPlayer().scheduleWarpTask(3, 330002402, 0, false);
        }
    }
}
function action303(d, c, b) {
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
            cm.curNodeEventEnd(true);
            cm.setInGameDirectionMode(true, false, true);
            cm.inGameDirectionEvent_AskAnswerTime(500);
        } else {
            if (status === a++) {
                cm.inGameDirectionEvent_AskAnswerTime(3000);
                cm.effect_NormalSpeechBalloon('呼, 我得快点拿着书包离开. ', 1, 0, 0, 3000, 0, cm.getPlayer().getId());
            } else {
                if (status === a++) {
                    cm.inGameDirectionEvent_AskAnswerTime(3000);
                    cm.effect_Voice('SoundEff.img/girlLaughter', 100);
                } else {
                    if (status === a++) {
                        cm.fieldEffect_InsertCanvas(1, 200, 0, 0, 0, 1300, 0);
                        cm.inGameDirectionEvent_AskAnswerTime(1600);
                    } else {
                        if (status === a++) {
                            cm.inGameDirectionEvent_Monologue('#fn黑体##r 不要走—— 不要走——', 1);
                            cm.effect_Voice('Voice2.img/Friends/GHOST/1', 100);
                        } else {
                            if (status === a++) {
                                cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1300, 0);
                                cm.inGameDirectionEvent_AskAnswerTime(1600);
                            } else {
                                if (status === a++) {
                                    cm.inGameDirectionEvent_AskAnswerTime(2500);
                                    cm.effect_OnUserEff('Effect/OnUserEff.img/emotion/oh');
                                } else {
                                    if (status === a++) {
                                        cm.inGameDirectionEvent_ForcedFlip(-1);
                                        cm.inGameDirectionEvent_AskAnswerTime(500);
                                    } else {
                                        if (status === a++) {
                                            cm.inGameDirectionEvent_ForcedFlip(1);
                                            cm.inGameDirectionEvent_AskAnswerTime(500);
                                        } else {
                                            if (status === a++) {
                                                cm.inGameDirectionEvent_ForcedFlip(0);
                                                cm.sendNormalTalk_Bottom('是……是谁？！？！', 37, 1530270, false, true);
                                            } else {
                                                if (status === a++) {
                                                    cm.setAmbience('Ambience.img/horrorpiano', 100, 60);
                                                    cm.npc_ChangeController(1530553, 'oid=37403656', 1024, 20, 3, 974, 1074, 1, false, false);
                                                    cm.npc_SetSpecialAction('oid=37403656', 'summon', 0, 0);
                                                    cm.npc_SetSpecialAction('oid=37403656', 'playmusic', -1, 1);
                                                    cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                } else {
                                                    if (status === a++) {
                                                        cm.fieldEffect_InsertCanvas(1, 200, 0, 0, 0, 1300, 0);
                                                        cm.inGameDirectionEvent_AskAnswerTime(1600);
                                                    } else {
                                                        if (status === a++) {
                                                            cm.inGameDirectionEvent_Monologue('#fn黑体##r——不要走——', 0);
                                                            cm.effect_Voice('Voice2.img/Friends/GHOST/1', 100);
                                                        } else {
                                                            if (status === a++) {
                                                                cm.inGameDirectionEvent_Monologue('#fn黑体##r 我来为你弹钢琴——不要走——', 1);
                                                                cm.effect_Voice('Voice2.img/Friends/GHOST/2', 100);
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1300, 0);
                                                                    cm.inGameDirectionEvent_AskAnswerTime(1600);
                                                                } else {
                                                                    if (status === a++) {
                                                                        cm.sendNormalTalk_Bottom('此时，那个孩子想起了一件事。', 37, 1530180, false, true);
                                                                        cm.effect_Voice('Voice2.img/Friends/CH4_00/6', 100);
                                                                    } else {
                                                                        if (status === a++) {
                                                                            cm.sendNormalTalk_Bottom('那就是有关钢琴室的鬼故事。', 37, 1530180, true, true);
                                                                            cm.effect_Voice('Voice2.img/Friends/CH4_00/7', 100);
                                                                        } else {
                                                                            if (status === a++) {
                                                                                cm.sendNormalTalk_Bottom('据说有个鬼每晚都会在那里弹钢琴，直到手上流血……', 37, 1530180, true, true);
                                                                                cm.effect_Voice('Voice2.img/Friends/CH4_00/8', 100);
                                                                            } else {
                                                                                if (status === a++) {
                                                                                    cm.fieldEffect_InsertCanvas(1, 200, 0, 0, 0, 1300, 0);
                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1600);
                                                                                } else {
                                                                                    if (status === a++) {
                                                                                        cm.inGameDirectionEvent_Monologue('#fn黑体##r ——不要走——', 0);
                                                                                        cm.effect_Voice('Voice2.img/Friends/GHOST/1', 100);
                                                                                    } else {
                                                                                        if (status === a++) {
                                                                                            cm.inGameDirectionEvent_Monologue('#fn黑体##r 我来为你弹钢琴——不要走——', 1);
                                                                                            cm.effect_Voice('Voice2.img/Friends/GHOST/2', 100);
                                                                                        } else {
                                                                                            if (status === a++) {
                                                                                                cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1300, 0);
                                                                                                cm.inGameDirectionEvent_AskAnswerTime(1600);
                                                                                            } else {
                                                                                                if (status === a++) {
                                                                                                    cm.sendNormalTalk_Bottom('他感觉如果听完那首曲子，肯定会发生很糟糕的事情。', 37, 1530180, false, true);
                                                                                                    cm.effect_Voice('Voice2.img/Friends/CH4_00/9', 100);
                                                                                                } else {
                                                                                                    if (status === a++) {
                                                                                                        cm.sendNormalTalk_Bottom('他双腿颤抖，只想尽快逃跑。', 37, 1530180, true, true);
                                                                                                        cm.effect_Voice('Voice2.img/Friends/CH4_00/10', 100);
                                                                                                    } else {
                                                                                                        if (status === a++) {
                                                                                                            cm.dispose();
                                                                                                            cm.warp(330002403, 0);
                                                                                                            cm.setInGameDirectionMode(false, true, false);
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
function action304(d, c, b) {
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
            cm.curNodeEventEnd(true);
            cm.setInGameDirectionMode(true, false, true);
            cm.fieldEffect_InsertCanvas(1, 200, 0, 0, 0, 1300, 0);
            cm.inGameDirectionEvent_AskAnswerTime(1600);
        } else {
            if (status === a++) {
                cm.inGameDirectionEvent_Monologue('#fn黑体##r走开——好痛——#k', 1);
                cm.effect_Voice('Voice2.img/Friends/GHOST/5', 100);
            } else {
                if (status === a++) {
                    cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1300, 0);
                    cm.inGameDirectionEvent_AskAnswerTime(1600);
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom('那个孩子被吓了一跳，他环顾四周，但却什么都没有看见。', 37, 1530180, false, true);
                        cm.effect_NormalSpeechBalloon(' !!!!', 1, 0, 0, 3000, 0, cm.getPlayer().getId());
                        cm.effect_Voice('Voice2.img/Friends/CH4_02/6', 100);
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom('这声音究竟是哪里传来的呢……？', 37, 1530180, true, true);
                            cm.effect_Voice('Voice2.img/Friends/CH4_02/7', 100);
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom('这个声音离他越来越近。', 37, 1530180, true, true);
                                cm.effect_Voice('Voice2.img/Friends/CH4_02/8', 100);
                            } else {
                                if (status === a++) {
                                    cm.fieldEffect_InsertCanvas(1, 200, 0, 0, 0, 1300, 0);
                                    cm.inGameDirectionEvent_AskAnswerTime(1600);
                                } else {
                                    if (status === a++) {
                                        cm.inGameDirectionEvent_Monologue('#fn黑体##r好痛——走开——#k ', 1);
                                        cm.effect_Voice('Voice2.img/Friends/GHOST/6', 100);
                                    } else {
                                        if (status === a++) {
                                            cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1300, 0);
                                            cm.inGameDirectionEvent_AskAnswerTime(1600);
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk_Bottom('如果继续听到这个声音，他感觉自己会精神失常。', 37, 1530180, false, true);
                                                cm.effect_Voice('Voice2.img/Friends/CH4_02/9', 100);
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk_Bottom('他一心想要尽快回到家。', 37, 1530180, true, true);
                                                    cm.effect_Voice('Voice2.img/Friends/CH4_02/10', 100);
                                                } else {
                                                    if (status === a++) {
                                                        cm.inGameDirectionEvent_MoveAction(1);
                                                        cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                        cm.effect_Voice('SoundEff.img/girlLaughter', 100);
                                                    } else {
                                                        if (status === a++) {
                                                            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                            cm.inGameDirectionEvent_AskAnswerTime(500);
                                                        } else {
                                                            if (status === a++) {
                                                                cm.inGameDirectionEvent_MoveAction(0);
                                                                cm.sendNormalTalk_Bottom('在回家途中，那孩子始终有种毛骨悚然的感觉。', 37, 1530180, false, true);
                                                                cm.effect_Voice('Voice2.img/Friends/CH4_02/11', 100);
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.sendNormalTalk_Bottom('刚刚真的是我的幻听吗？肯定是幻听吧。肯定是幻听……', 37, 1530180, true, true);
                                                                    cm.effect_Voice('Voice2.img/Friends/CH4_02/12', 100);
                                                                } else {
                                                                    if (status === a++) {
                                                                        cm.sendNormalTalk_Bottom('他努力说服自己。', 37, 1530180, true, true);
                                                                        cm.effect_Voice('Voice2.img/Friends/CH4_02/13', 100);
                                                                    } else {
                                                                        if (status === a++) {
                                                                            cm.sendNormalTalk_Bottom('然后他回到家中，脱下自己的鞋子……', 37, 1530180, true, true);
                                                                            cm.effect_Voice('Voice2.img/Friends/CH4_02/14', 100);
                                                                        } else {
                                                                            if (status === a++) {
                                                                                cm.sendNormalTalk_Bottom('发现鞋底沾满黏糊糊的血液……！！！', 37, 1530180, true, true);
                                                                                cm.effect_Voice('SoundEff.img/bell', 100);
                                                                                cm.effect_Voice('Voice2.img/Friends/CH4_02/15', 100);
                                                                            } else {
                                                                                if (status === a++) {
                                                                                    cm.effect_Voice('Voice2.img/Friends/CH2_06/17', 100);
                                                                                    cm.dispose();
                                                                                    cm.warp(330002409, 0);
                                                                                    cm.setInGameDirectionMode(false, true, false);
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
function action305(d, c, b) {
    if (status == 0 && d == 0) {
        cm.dispose();
        return;
    }
    if (cm.isQuestActive(32866)) {
        cm.warp(330003003, 0);
        cm.dispose();
        return;
    } else {
        if (cm.isQuestFinished(32866) && !cm.isQuestFinished(32868)) {
            cm.warp(330004100, 0);
            cm.dispose();
            return;
        } else {
            if (cm.isQuestFinished(32868)) {
                cm.warp(330004200, 0);
                cm.dispose();
                return;
            }
        }
    }
    status++;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose();
    } else {
        if (status === a++) {
            cm.sendNormalTalk_Bottom('没打探清楚情况，还是不要乱走的好。', 57, 0, false, true);
        } else {
            if (status === a++) {
                cm.dispose();
            }
        }
    }
}
function action401(d, c, b) {
    if (status == 0 && d == 0) {
        cm.dispose();
        return;
    }
    if (cm.isQuestActive(32866)) {
        cm.warp(330003003, 0);
        cm.dispose();
        return;
    } else {
        if (cm.isQuestFinished(32866) && !cm.isQuestFinished(32868)) {
            cm.warp(330004100, 0);
            cm.dispose();
            return;
        } else {
            if (cm.isQuestFinished(32868)) {
                cm.warp(330004200, 0);
                cm.dispose();
                return;
            }
        }
    }
    status++;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose();
    } else {
        if (status === a++) {
            cm.askYesNo_Bottom('如果中途离开，就得重新开始游戏！你确定要现在退出吗？\r\n#b（游戏结束后，稍等一会儿后会自动退场。）#k', 37, 1530511);
            cm.updateInfoQuest(33039, 'stay=1;result=0');
        } else {
            if (status === a++) {
                cm.dispose();
                cm.warp(330000300, 0);
            }
        }
    }
}
function action601(d, c, b) {
    status++;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose();
    } else {
        if (status === a++) {
            cm.askYesNo_Bottom('真了不起！多亏了#e#ho##n你，黑暗气息减弱了很多！你现在要离开吗？', 37, 1530050);
        } else {
            if (status === a++) {
                cm.dispose();
                cm.warp(330003000, 3);
            }
        }
    }
}
function start() {
    status = -1;
    action(1, 0, 0);
}