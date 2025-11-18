var status = -1;
function action(d, c, b) {
    status++;
    var a = -1;
    if (status <= a++) {
        cm.dispose();
    } else {
        if (status === a++) {
            cm.spawnMobLimit(8240037, 1, 1704, -452, 100);
            cm.curNodeEventEnd(true);
            cm.setInGameDirectionMode(true, false, true);
            cm.effect_Voice('Field.img/masteryBook/EnchantSuccess', 100);
            cm.fieldEffect_KinesisEXP(Math.pow(cm.getLevel(), 3) / 5);
            cm.forceCompleteQuest(33139);
            cm.gainExp(Math.pow(cm.getLevel(), 3) / 5);
            cm.inGameDirectionEvent_AskAnswerTime(2000);
            cm.spawnMobLimit(8240037, 1, 1613, -632, 100);
            cm.spawnMobLimit(8240036, 1, 1836, -212, 100);
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom('为什么怪物们会拥有兔子玩偶？\r\n那当然是因为兔子玩偶非常可爱喽！你看到我还没发现吗？\r\n……你这是什么表情啊？', 37, 1540500, false, true);
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom('嗯嗯…… \r\n更重要的是，我们现在能看到其他记忆了。\r\n你好好看看这次是不是你要找的记忆。', 37, 1540500, true, true);
                } else {
                    if (status === a++) {
                        cm.inGameDirectionEvent_AskAnswerTime(600);
                    } else {
                        if (status === a++) {
                            cm.npc_ChangeController(1540523, 'oid=13007201', 4500, 200, 104, 4450, 4550, 0, true, 0, false);
                            cm.npc_SetSpecialAction('oid=13007201', 'summon', 0, 0);
                            cm.npc_ChangeController(1540481, 'oid=13007202', 4600, 200, 108, 4550, 4650, 1, false, 0, false);
                            cm.npc_SetSpecialAction('oid=13007202', 'summon', 0, 0);
                            cm.inGameDirectionEvent_AskAnswerTime(600);
                        } else {
                            if (status === a++) {
                                cm.inGameDirectionEvent_PushMoveInfo(0, 900, 4500, 200);
                            } else {
                                if (status === a++) {
                                    cm.inGameDirectionEvent_AskAnswerTime(1438);
                                } else {
                                    if (status === a++) {
                                        cm.inGameDirectionEvent_PushMoveInfo(0, 900, 4500, 350);
                                        cm.effect_Text(['#fn黑体##fs26#女皇阿莉亚之死'], [
                                            100,
                                            2800,
                                            4,
                                            -50,
                                            -50,
                                            1,
                                            4,
                                            0,
                                            0,
                                            0
                                        ]);
                                    } else {
                                        if (status === a++) {
                                            cm.inGameDirectionEvent_AskAnswerTime(3000);
                                            cm.spawnMobLimit(8240036, 1, 1752, -212, 100);
                                            cm.spawnMobLimit(8240037, 1, 1613, -632, 100);
                                        } else {
                                            if (status === a++) {
                                                cm.inGameDirectionEvent_SetHideEffect(1);
                                                cm.sendNormalTalk_Bottom('果然……人类太懦弱了。', 37, 1540523, false, true);
                                            } else {
                                                if (status === a++) {
                                                    cm.npc_ChangeController(1540522, 'oid=13007558', 4100, 200, 102, 4050, 4150, 0, true, 1000, false);
                                                    cm.npc_SetSpecialAction('oid=13007558', 'summon', 0, 0);
                                                    cm.npc_SetForceMove('oid=13007558', 1, 240, 100);
                                                    cm.inGameDirectionEvent_AskAnswerTime(4000);
                                                } else {
                                                    if (status === a++) {
                                                        cm.inGameDirectionEvent_PushScaleInfo(900, 2000, 1000, 4530, 220);
                                                    } else {
                                                        if (status === a++) {
                                                            cm.sendNormalTalk_Bottom('斯乌？你不是保证不杀女皇的吗？', 37, 1540522, false, true);
                                                        } else {
                                                            if (status === a++) {
                                                                cm.npc_setForceFlip('oid=13007201', -1);
                                                                cm.inGameDirectionEvent_AskAnswerTime(600);
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.spawnMobLimit(8240037, 1, 1613, -632, 100);
                                                                    cm.sendNormalTalk_Bottom('奥尔卡，你是在同情这个玩具吗？', 37, 1540523, false, true);
                                                                } else {
                                                                    if (status === a++) {
                                                                        cm.sendNormalTalk_Bottom('不是的，但……\r\n如果她死了，我们就不能跟她继续玩了。', 37, 1540522, true, true);
                                                                    } else {
                                                                        if (status === a++) {
                                                                            cm.sendNormalTalk_Bottom('奥尔卡，我已经对她厌倦了。\r\n人类太懦弱了，而且很容易死。', 37, 1540523, true, true);
                                                                        } else {
                                                                            if (status === a++) {
                                                                                cm.sendNormalTalk_Bottom('军团长…… 斯乌，奥尔卡…… \r\n……你们曾是纯洁的精灵……为什么要帮助黑魔法师呢？', 37, 1540481, true, true);
                                                                            } else {
                                                                                if (status === a++) {
                                                                                    cm.npc_setForceFlip('oid=13007201', 1);
                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                } else {
                                                                                    if (status === a++) {
                                                                                        cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                        cm.effect_NormalSpeechBalloon('!!!', 1, 0, 0, 2000, 1, 0, 0, 0, 4, 1540523, cm.getPlayer().getId());
                                                                                        cm.effect_NormalSpeechBalloon('!!!', 1, 0, 0, 2000, 1, 0, 0, 0, 4, 1540522, cm.getPlayer().getId());
                                                                                    } else {
                                                                                        if (status === a++) {
                                                                                            cm.sendNormalTalk_Bottom('……现在……还不晚。\r\n请不要再闹了。请好好……珍惜……这个世界。', 37, 1540481, false, true);
                                                                                        } else {
                                                                                            if (status === a++) {
                                                                                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                            } else {
                                                                                                if (status === a++) {
                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                                    cm.effect_NormalSpeechBalloon('......', 1, 0, 0, 2000, 1, 0, 0, 0, 4, 1540523, cm.getPlayer().getId());
                                                                                                } else {
                                                                                                    if (status === a++) {
                                                                                                        cm.sendNormalTalk_Bottom('……好神奇。\r\n她好像还有开口说话的力气。', 37, 1540523, false, true);
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
                                                                                                                        cm.sendNormalTalk_Bottom('最终斯乌做了无法挽回的事。\r\n他以协商为借口召唤出女皇阿莉亚之后，残忍地将其杀害了。', 37, 1540500, false, true);
                                                                                                                    } else {
                                                                                                                        if (status === a++) {
                                                                                                                            cm.sendNormalTalk_Bottom('你要继续看接下来的记忆吗？\r\n接下来的记忆让奥尔卡非常痛苦。\r\n她对这记忆非常敏感，说不定你会陷入危险呢。\r\n你确定要继续看吗？', 37, 1540500, true, true);
                                                                                                                        } else {
                                                                                                                            if (status === a++) {
                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(600);
                                                                                                                            } else {
                                                                                                                                if (status === a++) {
                                                                                                                                    cm.inGameDirectionEvent_SetHideEffect(0);
                                                                                                                                    cm.dispose();
                                                                                                                                    cm.warp(350013300, 0, true);
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