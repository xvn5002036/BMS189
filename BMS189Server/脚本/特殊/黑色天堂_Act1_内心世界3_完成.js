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
            cm.forceCompleteQuest(33140);
            cm.gainExp(Math.pow(cm.getLevel(), 3) / 5);
            cm.inGameDirectionEvent_AskAnswerTime(2000);
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom('被晶莹果冻怪染色的碎片已经全部拼好了。\r\n你比我想象的还要厉害。', 37, 1540500, false, true);
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom('不过……这记忆是令奥尔卡痛苦的记忆。\r\n我有些担心……', 37, 1540500, true, true);
                } else {
                    if (status === a++) {
                        cm.inGameDirectionEvent_AskAnswerTime(600);
                    } else {
                        if (status === a++) {
                            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                            cm.inGameDirectionEvent_AskAnswerTime(500);
                        } else {
                            if (status === a++) {
                                cm.inGameDirectionEvent_PushScaleInfo(3000, 2000, 1000, 3260, 100);
                            } else {
                                if (status === a++) {
                                    cm.npc_ChangeController(1540523, 'oid=13014085', 3340, 69, 52, 3290, 3390, 1, true, 0, false);
                                    cm.npc_SetSpecialAction('oid=13014085', 'summon', 0, 0);
                                    cm.npc_ChangeController(1540522, 'oid=13014086', 3340, 69, 52, 3290, 3390, 1, true, 0, false);
                                    cm.npc_SetSpecialAction('oid=13014086', 'summon', 0, 0);
                                    cm.npc_ChangeController(1540482, 'oid=13014087', 3150, 69, 51, 3100, 3200, 0, false, 0, false);
                                    cm.npc_SetSpecialAction('oid=13014087', 'summon', 0, 0);
                                    cm.npc_SetSpecialAction('oid=13014085', 'gone', -1, 0);
                                    cm.npc_SetSpecialAction('oid=13014086', 'down', -1, 0);
                                    cm.inGameDirectionEvent_AskAnswerTime(600);
                                } else {
                                    if (status === a++) {
                                        cm.fieldEffect_PlayBGM('Ambience.img/secretmissionbase', 0, 0);
                                        cm.inGameDirectionEvent_AskAnswerTime(4000);
                                        cm.effect_Text(['#fn黑体##fs26#斯乌之死'], [
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
                                            cm.inGameDirectionEvent_SetHideEffect(1);
                                            cm.fieldEffect_InsertCanvas(1, 55, 0, 0, 0, 2500, 0);
                                            cm.sendNormalTalk_Bottom('斯乌……斯乌？！', 37, 1540527, false, true);
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk_Bottom('这家伙杀了阿莉亚。\r\n他要为此付出代价。', 37, 1540482, true, true);
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk_Bottom('你杀了斯乌……！我绝不原谅你！！', 37, 1540527, true, true);
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk_Bottom('很抱歉，但是我没有时间对付你。\r\n现在大家都在和黑魔法师作战。', 37, 1540482, true, true);
                                                    } else {
                                                        if (status === a++) {
                                                            cm.sendNormalTalk_Bottom('你给我仔细听好。这个世界不是你们的游乐场。\r\n这个世界上没有你们的立足之地。', 37, 1540482, true, true);
                                                        } else {
                                                            if (status === a++) {
                                                                cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.npc_SetSpecialAction('oid=13014087', 'gone', 3000, 0);
                                                                    cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                                } else {
                                                                    if (status === a++) {
                                                                        cm.npc_LeaveField('oid=13014087');
                                                                        cm.sendNormalTalk_Bottom('斯乌……快起来，斯乌……\r\n难道出了故障？我现在再也见不到你了吗？', 37, 1540527, false, true);
                                                                    } else {
                                                                        if (status === a++) {
                                                                            cm.inGameDirectionEvent_PushScaleInfo(3000, 1000, 2147483647, 2147483647, 2147483647);
                                                                            cm.effect_NormalSpeechBalloon('......', 1, 0, 0, 3000, 1, 0, 0, 0, 4, 1540522, cm.getPlayer().getId());
                                                                        } else {
                                                                            if (status === a++) {
                                                                                cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                                            } else {
                                                                                if (status === a++) {
                                                                                    cm.fieldEffect_InsertCanvas(1, 200, 0, 0, 0, 1300, 0);
                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1600);
                                                                                } else {
                                                                                    if (status === a++) {
                                                                                        cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                                    } else {
                                                                                        if (status === a++) {
                                                                                            cm.inGameDirectionEvent_Monologue('斯乌……我们俩要永远在一起. ', 0);
                                                                                        } else {
                                                                                            if (status === a++) {
                                                                                                cm.inGameDirectionEvent_Monologue('就算需要花上几百年的时间, 我也一定要救活你. ', 0);
                                                                                            } else {
                                                                                                if (status === a++) {
                                                                                                    cm.inGameDirectionEvent_Monologue('……我保证. ', 1);
                                                                                                } else {
                                                                                                    if (status === a++) {
                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                                    } else {
                                                                                                        if (status === a++) {
                                                                                                            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                        } else {
                                                                                                            if (status === a++) {
                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                            } else {
                                                                                                                if (status === a++) {
                                                                                                                    cm.sendNormalTalk_Bottom('啊。我感受到了奥尔卡的痛苦。\r\n危险！危险！', 37, 1540500, false, true);
                                                                                                                } else {
                                                                                                                    if (status === a++) {
                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(600);
                                                                                                                    } else {
                                                                                                                        if (status === a++) {
                                                                                                                            cm.inGameDirectionEvent_SetHideEffect(0);
                                                                                                                            cm.dispose();
                                                                                                                            cm.warp(350013400, 0, true);
                                                                                                                            eim.setProperty('phase', '5');
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