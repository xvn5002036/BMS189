var status = -1;
function action(d, c, b) {
    status++;
    var a = -1;
    if (status <= a++) {
        cm.dispose();
    } else {
        if (status === a++) {
            cm.curNodeEventEnd(true);
            cm.eventSKill(0);
            cm.setInGameDirectionMode(true, false, true);
            cm.setStandAloneMode(true);
            cm.sendNormalTalk_Bottom('#fs25#抓住它们！！', 37, 1540459, false, true);
        } else {
            if (status === a++) {
                cm.inGameDirectionEvent_头顶图片(['Effect/OnUserEff.img/emotion/oh'], [
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0
                ]);
                cm.inGameDirectionEvent_AskAnswerTime(2000);
            } else {
                if (status === a++) {
                    cm.npc_ChangeController(1540483, 'oid=23642197', -1092, -118, 17, -1142, -1042, 0, true, false);
                    cm.npc_SetSpecialAction('oid=23642197', 'summon', 0, 0);
                    cm.npc_ChangeController(1540483, 'oid=23642198', -1172, -118, 18, -1222, -1122, 0, true, false);
                    cm.npc_SetSpecialAction('oid=23642198', 'summon', 0, 0);
                    cm.npc_ChangeController(1540483, 'oid=23642199', -1252, -118, 18, -1302, -1202, 0, true, false);
                    cm.npc_SetSpecialAction('oid=23642199', 'summon', 0, 0);
                    cm.npc_ChangeController(1540483, 'oid=23642200', -1332, -118, 19, -1382, -1282, 0, true, false);
                    cm.npc_SetSpecialAction('oid=23642200', 'summon', 0, 0);
                    cm.npc_SetForceMove('oid=23642197', 1, 1000, 200);
                    cm.npc_SetForceMove('oid=23642198', 1, 1000, 200);
                    cm.npc_SetForceMove('oid=23642199', 1, 1000, 200);
                    cm.npc_SetForceMove('oid=23642200', 1, 1000, 200);
                    cm.inGameDirectionEvent_AskAnswerTime(2500);
                } else {
                    if (status === a++) {
                        cm.npc_ChangeController(1540483, 'oid=23642224', -1142, -118, 18, -1192, -1092, 0, true, false);
                        cm.npc_SetSpecialAction('oid=23642224', 'summon', 0, 0);
                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                    } else {
                        if (status === a++) {
                            cm.npc_setForceFlip('oid=23642224', -1);
                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                        } else {
                            if (status === a++) {
                                cm.npc_setForceFlip('oid=23642224', 1);
                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                            } else {
                                if (status === a++) {
                                    cm.npc_SetForceMove('oid=23642224', 1, 70, 200);
                                    cm.inGameDirectionEvent_AskAnswerTime(1500);
                                } else {
                                    if (status === a++) {
                                        cm.npc_SetSpecialAction('oid=23642224', 'freeze', -1, 0);
                                        cm.sendNormalTalk_Bottom('#h0#，请抓住那些小偷麻雀！', 37, 1540459, false, true);
                                    } else {
                                        if (status === a++) {
                                            cm.inGameDirectionEvent_AskAnswerTime(500);
                                        } else {
                                            if (status === a++) {
                                                cm.npc_LeaveField('oid=23642197');
                                                cm.npc_LeaveField('oid=23642198');
                                                cm.npc_LeaveField('oid=23642199');
                                                cm.npc_LeaveField('oid=23642200');
                                                cm.npc_LeaveField('oid=23642224');
                                                cm.npc_ChangeController(1540483, 'oid=23642248', -1022, -118, 17, -1072, -972, 0, true, false);
                                                cm.npc_SetSpecialAction('oid=23642248', 'summon', 0, 0);
                                                cm.npc_SetSpecialAction('oid=23642248', 'freeze', -1, 0);
                                                cm.inGameDirectionEvent_AskAnswerTime(500);
                                            } else {
                                                if (status === a++) {
                                                    cm.inGameDirectionEvent_PushScaleInfo(0, 2000, 0, -892, -38);
                                                } else {
                                                    if (status === a++) {
                                                        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                                                        cm.inGameDirectionEvent_AskAnswerTime(1400);
                                                    } else {
                                                        if (status === a++) {
                                                            cm.inGameDirectionEvent_QTE(2);
                                                        } else {
                                                            if (status === a++) {
                                                                cm.inGameDirectionEvent_PushScaleInfo(200, 2100, 200, -892, -38);
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.inGameDirectionEvent_PushScaleInfo(200, 1950, 200, -892, -38);
                                                                } else {
                                                                    if (status === a++) {
                                                                        cm.inGameDirectionEvent_PushScaleInfo(200, 2000, 200, -892, -38);
                                                                    } else {
                                                                        if (status === a++) {
                                                                            cm.inGameDirectionEvent_头顶图片([
                                                                                'Effect/BasicEff.img/pang',
                                                                                'oid=23642248'
                                                                            ], [
                                                                                0,
                                                                                0,
                                                                                0,
                                                                                1,
                                                                                0,
                                                                                1,
                                                                                0,
                                                                                0
                                                                            ]);
                                                                            cm.setNpcSpecialActionReset('oid=23642248');
                                                                            cm.npc_SetSpecialAction('oid=23642248', 'dying', -1, 1);
                                                                            cm.inGameDirectionEvent_OneTimeAction('黑色天堂_后空翻攻击', 0);
                                                                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                        } else {
                                                                            if (status === a++) {
                                                                                cm.effect_Voice('Skill.img/0000100/Hit', 100);
                                                                                cm.npc_LeaveField('oid=23642248');
                                                                                cm.sendNormalTalk_Bottom('麻雀全部被解决了，我真不愧是叱咤风云的名将！', 37, 1540459, false, true);
                                                                            } else {
                                                                                if (status === a++) {
                                                                                    cm.setStandAloneMode(false);
                                                                                    cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                                    cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                } else {
                                                                                    if (status === a++) {
                                                                                        cm.inGameDirectionEvent_PushScaleInfo(0, 1000, 0, -892, -118);
                                                                                    } else {
                                                                                        if (status === a++) {
                                                                                            cm.inGameDirectionEvent_AskAnswerTime(200);
                                                                                        } else {
                                                                                            if (status === a++) {
                                                                                                cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                                                                                            } else {
                                                                                                if (status === a++) {
                                                                                                    cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                                                } else {
                                                                                                    if (status === a++) {
                                                                                                        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(1400);
                                                                                                    } else {
                                                                                                        if (status === a++) {
                                                                                                            cm.eventSKill(0);
                                                                                                            cm.setInGameDirectionMode(false, true, false);
                                                                                                            cm.forceCompleteQuest(33164);
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
                }
            }
        }
    }
}
function start() {
    status = -1;
    action(1, 0, 0);
}