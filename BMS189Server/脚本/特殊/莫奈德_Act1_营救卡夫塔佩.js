var status = -1;
function action(mode, type, selection) {
    var reactor = 'action' + cm.getNpc();
    eval(reactor)(mode, type, selection);
}
function action2(d, c, b) {
    status++;
    var a = -1;
    if (status <= a++) {
        cm.dispose();
    } else {
        if (status === a++) {
            cm.spawnMob(9402242, 1, 1588, 248);
            cm.addPopupSay(9400587, 2000, '#face0#就是现在，全体发射！', '', 0);
            cm.spawnMob(9402242, 1, 1897, 295);
            cm.spawnMob(9402242, 1, 2056, 306);
            cm.setNumberForQuestInfo(64015, 'chk6', 1);
            cm.onTeleport(0, 3, cm.getPlayer().getId(), 1800, 320);
            cm.curNodeEventEnd(true);
            cm.setInGameDirectionMode(true, false, true);
            cm.npc_ChangeController(9400588, 'oid=2279976', 1353, 85, 57, 1303, 1403, 1, true, false);
            cm.npc_SetSpecialAction('oid=2279976', 'summon', 0, 0);
            cm.npc_ChangeController(9400582, 'oid=2279977', 1230, 85, 57, 1180, 1280, 1, true, false);
            cm.npc_SetSpecialAction('oid=2279977', 'summon', 0, 0);
            cm.npc_ChangeController(9400642, 'oid=2279978', 1160, 85, 57, 1110, 1210, 1, true, false);
            cm.npc_SetSpecialAction('oid=2279978', 'summon', 0, 0);
            cm.npc_setForceFlip('oid=2279976', -1);
            cm.npc_setForceFlip('oid=2279977', -1);
            cm.npc_setForceFlip('oid=2279978', 1);
            cm.npc_ChangeController(9400666, 'oid=2279979', 3000, 400, 34, 2950, 3050, 1, true, false);
            cm.npc_SetSpecialAction('oid=2279979', 'summon', 0, 0);
            cm.npc_ChangeController(9400596, 'oid=2279980', 3100, 400, 35, 3050, 3150, 1, true, false);
            cm.npc_SetSpecialAction('oid=2279980', 'summon', 0, 0);
            cm.npc_setForceFlip('oid=2279979', 1);
            cm.npc_setForceFlip('oid=2279980', -1);
            cm.npc_SetSpecialAction('oid=2279977', 'attack1', -1, 1);
            cm.npc_SetSpecialAction('oid=2279976', 'attack1', 360, 1);
            cm.inGameDirectionEvent_AskAnswerTime(500);
        } else {
            if (status === a++) {
                cm.fieldEffect_ScreenMsg('Map/EffectPL.img/MainStream/Skuas/screenEff/kaftafellSkill');
                cm.inGameDirectionEvent_AskAnswerTime(3000);
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
                            cm.killAllMob();
                            cm.inGameDirectionEvent_ForcedFlip(-1);
                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                        } else {
                            if (status === a++) {
                                cm.sendNewEffects(12, [
                                    1000,
                                    1219,
                                    20,
                                    0,
                                    0
                                ]);
                            } else {
                                if (status === a++) {
                                    cm.inGameDirectionEvent_AskAnswerTime(5000);
                                } else {
                                    if (status === a++) {
                                        cm.sendNewEffects(12, [
                                            2000,
                                            2800,
                                            260,
                                            0,
                                            0
                                        ]);
                                    } else {
                                        if (status === a++) {
                                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                                        } else {
                                            if (status === a++) {
                                                cm.inGameDirectionEvent_ForcedFlip(1);
                                                cm.npc_LeaveField('oid=2279976');
                                                cm.npc_LeaveField('oid=2279976');
                                                cm.npc_LeaveField('oid=2279977');
                                                cm.npc_LeaveField('oid=2279977');
                                                cm.npc_LeaveField('oid=2279978');
                                                cm.npc_LeaveField('oid=2279978');
                                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                                            } else {
                                                if (status === a++) {
                                                    cm.npc_SetSpecialAction('oid=2279979', 'claw', 2160, 1);
                                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                } else {
                                                    if (status === a++) {
                                                        cm.npc_setForceFlip('oid=2279980', 1);
                                                        cm.npc_SetForceMove('oid=2279980', 1, 300, 250);
                                                        cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                    } else {
                                                        if (status === a++) {
                                                            cm.npc_LeaveField('oid=2279980');
                                                            cm.playerMessage(-1, '阻止纵火的芬里斯。');
                                                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                        } else {
                                                            if (status === a++) {
                                                                cm.sendNewEffects(19, [0]);
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.npc_setForceFlip('oid=2279979', -1);
                                                                    cm.inGameDirectionEvent_ForcedFlip10(2, 700);
                                                                    cm.inGameDirectionEvent_AskAnswerTime(2500);
                                                                } else {
                                                                    if (status === a++) {
                                                                        cm.npc_SetSpecialAction('oid=2279979', 'breathe', 3210, 1);
                                                                        cm.npc_ChangeController(9400582, 'oid=2280041', 2400, 400, 34, 2350, 2450, 1, true, false);
                                                                        cm.npc_SetSpecialAction('oid=2280041', 'summon', 0, 0);
                                                                        cm.forceStartQuest(64164, 'fight');
                                                                        cm.npc_SetForceMove('oid=2280041', 1, 300, 200);
                                                                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                    } else {
                                                                        if (status === a++) {
                                                                            cm.addPopupSay(9400582, 2000, '#face0#我来喽！不想受伤就躲到我身后去！', '', 0);
                                                                            cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                        } else {
                                                                            if (status === a++) {
                                                                                cm.addPopupSay(9400582, 2000, '#face0#天下第一帅凯恩的特技3.光明闪耀神之盾！', '', 0);
                                                                                cm.npc_SetSpecialAction('oid=2280041', 'skill', 0, 0);
                                                                                cm.fieldEffect_PlayFieldSound('Sound/Mob.img/9402301/Skill1', 128);
                                                                                cm.inGameDirectionEvent_AskAnswerTime(600);
                                                                            } else {
                                                                                if (status === a++) {
                                                                                    cm.setNpcSpecialActionReset('oid=2279979');
                                                                                    cm.npc_SetSpecialAction('oid=2279979', 'flame', 0, 0);
                                                                                    cm.inGameDirectionEvent_AskAnswerTime(4000);
                                                                                } else {
                                                                                    if (status === a++) {
                                                                                        cm.warp(867200350, 1, true);
                                                                                        cm.setInGameDirectionMode(false, true, false);
                                                                                        cm.npc_LeaveField('oid=2280041');
                                                                                        cm.npc_LeaveField('oid=2280041');
                                                                                        cm.npc_LeaveField('oid=2279979');
                                                                                        cm.npc_LeaveField('oid=2279979');
                                                                                        cm.npc_LeaveField('oid=2279980');
                                                                                        cm.npc_LeaveField('oid=2279980');
                                                                                        cm.npc_LeaveField('oid=2278136');
                                                                                        cm.npc_LeaveField('oid=2278136');
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
    status++;
    var a = -1;
    if (status <= a++) {
        cm.dispose();
    } else {
        if (status === a++) {
            if (cm.getNumberFromQuestInfo(64015, 'chk7') == 1) {
                cm.dispose();
                return;
            }
            cm.killAllMob();
            cm.setNumberForQuestInfo(64015, 'chk7', 1);
            cm.onTeleport(0, 3, cm.getPlayer().getId(), 2720, 420);
            cm.curNodeEventEnd(true);
            cm.setInGameDirectionMode(true, false, true);
            cm.npc_ChangeController(9400666, 'oid=2280182', 2215, 410, 2, 2165, 2265, 0, true, false);
            cm.npc_SetSpecialAction('oid=2280182', 'summon', 0, 0);
            cm.npc_ChangeController(9400582, 'oid=2280183', 1745, 380, 1, 1695, 1795, 0, true, false);
            cm.npc_SetSpecialAction('oid=2280183', 'summon', 0, 0);
            cm.inGameDirectionEvent_ForcedFlip(-1);
            cm.npc_SetSpecialAction('oid=2280182', 'breathe', 3000, 1);
            cm.npc_SetForceMove('oid=2280183', 1, 350, 300);
            cm.inGameDirectionEvent_AskAnswerTime(2500);
        } else {
            if (status === a++) {
                cm.fieldEffect_PlayFieldSound('Sound/Mob.img/9402301/Attack1', 128);
                cm.npc_SetSpecialAction('oid=2280183', 'attack1', 0, 0);
                cm.inGameDirectionEvent_AskAnswerTime(500);
            } else {
                if (status === a++) {
                    cm.npc_SetSpecialAction('oid=2280182', 'hit1', -1, 1);
                    cm.sendNormalTalk_Bottom('#face0#就是现在！', 37, 9400582, false, true);
                } else {
                    if (status === a++) {
                        cm.inGameDirectionEvent_ForcedFlip10(1, 420);
                        cm.inGameDirectionEvent_AskAnswerTime(2000);
                    } else {
                        if (status === a++) {
                            cm.inGameDirectionEvent_QTE(4);
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom('#face0#干得漂亮！', 37, 9400582, false, true);
                            } else {
                                if (status === a++) {
                                    cm.inGameDirectionEvent_OneTimeAction(7, 0);
                                    cm.setNpcSpecialActionReset('oid=2280182');
                                    cm.npc_SetSpecialAction('oid=2280182', 'die1', 0, 0);
                                    cm.inGameDirectionEvent_AskAnswerTime(2200);
                                } else {
                                    if (status === a++) {
                                        cm.npc_LeaveField('oid=2280182');
                                        cm.npc_LeaveField('oid=2280182');
                                        cm.sendNormalTalk_Bottom('#face0#噢噢-不错哦？辛苦啦！', 37, 9400582, false, true);
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom('#face0#啊！又有人陷入危险了！', 37, 9400582, true, true);
                                        } else {
                                            if (status === a++) {
                                                cm.npc_SetForceMove('oid=2280183', -1, 1000, 300);
                                                cm.inGameDirectionEvent_AskAnswerTime(3000);
                                            } else {
                                                if (status === a++) {
                                                    cm.npc_LeaveField('oid=2280183');
                                                    cm.npc_LeaveField('oid=2280183');
                                                    cm.inGameDirectionEvent_ForcedFlip(1);
                                                    cm.inGameDirectionEvent_ForcedFlip10(2, 833);
                                                    cm.inGameDirectionEvent_AskAnswerTime(501);
                                                } else {
                                                    if (status === a++) {
                                                        cm.fieldEffect_PlayFieldSound('Sound/PL_MONAD.img/EP1/ACT1/burning1', 128);
                                                        cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                    } else {
                                                        if (status === a++) {
                                                            cm.effect_OnUserEff('Effect/OnUserEff.img/PL_MONAD1/drop');
                                                            cm.sendNormalTalk_Bottom('哇啊啊啊！呜哇！', 37, 9400593, false, true);
                                                        } else {
                                                            if (status === a++) {
                                                                cm.fieldEffect_PlayFieldSound('Sound/PL_MONAD.img/EP1/ACT1/hawaru1', 128);
                                                                cm.sendNormalTalk_Bottom('#face3#没事-没事，你闭上眼睛，过一会儿就结束了，别哭了！', 37, 9400580, true, true);
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.sendNewEffects(0, [
                                                                        0,
                                                                        0,
                                                                        0,
                                                                        0,
                                                                        0
                                                                    ]);
                                                                } else {
                                                                    if (status === a++) {
                                                                        cm.sendNewEffects(12, [
                                                                            2000,
                                                                            3590,
                                                                            -1360,
                                                                            0,
                                                                            0
                                                                        ]);
                                                                    } else {
                                                                        if (status === a++) {
                                                                            cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                        } else {
                                                                            if (status === a++) {
                                                                                cm.sendNormalTalk_Bottom('#b喂，上面有人吗？', 57, 0, false, true);
                                                                            } else {
                                                                                if (status === a++) {
                                                                                    cm.sendNormalTalk_Bottom('#face4#哎，这里有人！帮帮我们！我们在警卫岗哨楼上！', 37, 9400580, true, true);
                                                                                } else {
                                                                                    if (status === a++) {
                                                                                        cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                    } else {
                                                                                        if (status === a++) {
                                                                                            cm.sendNewEffects(19, [0]);
                                                                                        } else {
                                                                                            if (status === a++) {
                                                                                                cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                                                cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                            } else {
                                                                                                if (status === a++) {
                                                                                                    cm.setInGameDirectionMode(false, true, false);
                                                                                                    cm.dispose();
                                                                                                    cm.warp(867200330, 1, true);
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