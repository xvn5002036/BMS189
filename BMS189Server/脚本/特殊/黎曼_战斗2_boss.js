var status = 0;
var sel = -1;
function start() {
    status = -1;
    action(1, 0, 0);
}
function action(d, c, b) {
    var a = cm.getMapId();
    if (d == -1) {
        cm.dispose();
    } else {
        if (d == 0) {
            cm.dispose();
            return;
        }
        if (d == 1) {
            status++;
        } else {
            status--;
        }
        if (a == 993071300) {
            action0(d, c, b);
        } else {
            if (a == 993071400) {
                action1(d, c, b);
            } else {
                if (a == 993071500) {
                    action2(d, c, b);
                } else {
                    cm.dispose();
                }
            }
        }
    }
}
function action0(g, f, e) {
    var d;
    var c = cm.getEventInstance();
    var b = cm.getEventManager('黎曼_战斗2');
    if (status == 0) {
        cm.updateInfoQuest(35838, 'clear=1');
        cm.updateInfoQuest(35838, 'clear=0');
        cm.curNodeEventEnd(true);
        cm.setInGameDirectionMode(true, false, true);
        cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
        cm.inGameDirectionEvent_AskAnswerTime(1000);
    } else {
        if (status == 1) {
            cm.inGameDirectionEvent_AskAnswerTime(1000);
        } else {
            if (status == 2) {
                cm.fieldEffect_PlayBGM('Bgm36/RoyalGuard', 0, 0);
                cm.inGameDirectionEvent_AskAnswerTime(500);
            } else {
                if (status == 3) {
                    cm.onTeleport(0, 3, cm.getPlayer().getId(), -165, -1972);
                    cm.inGameDirectionEvent_ForcedFlip(1);
                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                } else {
                    if (status == 4) {
                        cm.getWeatherEffectNotice('一定很好玩！这次让我们好好玩玩吧？', 143, 10000, 1);
                        cm.inGameDirectionEvent_AskAnswerTime(500);
                    } else {
                        if (status == 5) {
                            cm.inGameDirectionEvent_AskAnswerTime(500);
                        } else {
                            if (status == 6) {
                                cm.effect_Voice('MobVoice.img/8645038/Regen/0', 128);
                                cm.npc_ChangeController(3003912, 'oid=2179866', 224, -2133, 29, 174, 274, 1, false, 0, false);
                                cm.npc_SetSpecialAction('oid=2179866', 'summon', 0, 0);
                                cm.npc_SetSpecialAction('oid=2179866', 'regen', 1, 1);
                                cm.inGameDirectionEvent_AskAnswerTime(3900);
                            } else {
                                if (status == 7) {
                                    cm.getTopMsgFont('必须击败猎人弗雷德，移动到下一地图。', 3, 20, 4, 0, 0);
                                    cm.playerMessage(5, '猎人弗雷德出现了。必须击败猎人弗雷德，移动到下一地图。');
                                    cm.inGameDirectionEvent_AskAnswerTime(500);
                                } else {
                                    if (status == 8) {
                                        cm.npc_LeaveField('oid=2179866');
                                        cm.npc_LeaveField('oid=2179866');
                                        d = 8645038;
                                        mob = b.getMonster(d);
                                        mob.setOverrideStats();
                                        mob.getChangedStats().hp = 10000000000;
                                        var a = c.getMapInstance(cm.getMapId());
                                        a.spawnMonsterOnGroundBelow(mob, new java.awt.Point(224, -2075));
                                        cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                                        cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 2147483647, 2147483647, 2147483647);
                                    } else {
                                        if (status == 9) {
                                            cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                                        } else {
                                            if (status == 10) {
                                                cm.inGameDirectionEvent_AskAnswerTime(300);
                                            } else {
                                                if (status == 11) {
                                                    cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                                                    cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                                                } else {
                                                    if (status == 12) {
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
                }
            }
        }
    }
}
function action1(g, f, e) {
    var d;
    var c = cm.getEventInstance();
    var b = cm.getEventManager('黎曼_战斗2');
    if (status == 0) {
        cm.updateInfoQuest(35838, 'clear2=1;clear=0');
        cm.updateInfoQuest(35838, 'clear2=0;clear=0');
        cm.curNodeEventEnd(true);
        cm.setInGameDirectionMode(true, false, true);
        cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
        cm.inGameDirectionEvent_AskAnswerTime(1000);
    } else {
        if (status == 1) {
            cm.inGameDirectionEvent_AskAnswerTime(1000);
        } else {
            if (status == 2) {
                cm.fieldEffect_PlayBGM('Bgm36/RoyalGuard', 0, 0);
                cm.inGameDirectionEvent_AskAnswerTime(500);
            } else {
                if (status == 3) {
                    cm.onTeleport(0, 3, cm.getPlayer().getId(), -165, -1972);
                    cm.inGameDirectionEvent_ForcedFlip(1);
                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                } else {
                    if (status == 4) {
                        cm.getWeatherEffectNotice('还在那里不知死活地蹦达吗？在这伟大的力量面前屈服吧！哈哈哈哈！', 140, 10000, 1);
                        cm.inGameDirectionEvent_AskAnswerTime(500);
                    } else {
                        if (status == 5) {
                            cm.inGameDirectionEvent_AskAnswerTime(500);
                        } else {
                            if (status == 6) {
                                cm.effect_Voice('MobVoice.img/8645035/Regen/0', 128);
                                cm.npc_ChangeController(3003909, 'oid=2180032', 224, -2133, 29, 174, 274, 1, false, 0, false);
                                cm.npc_SetSpecialAction('oid=2180032', 'summon', 0, 0);
                                cm.npc_SetSpecialAction('oid=2180032', 'regen', 1, 1);
                                cm.inGameDirectionEvent_AskAnswerTime(3900);
                            } else {
                                if (status == 7) {
                                    cm.getTopMsgFont('必须击败疯狂魔法师卡里亚恩，移动到下一地图。', 3, 20, 4, 0, 0);
                                    cm.playerMessage(5, '疯狂魔法师卡里亚恩出现了。必须击败疯狂魔法师卡里亚恩，移动到下一地图。');
                                    cm.inGameDirectionEvent_AskAnswerTime(500);
                                } else {
                                    if (status == 8) {
                                        cm.npc_LeaveField('oid=2180032');
                                        cm.npc_LeaveField('oid=2180032');
                                        d = 8645035;
                                        mob = b.getMonster(d);
                                        mob.setOverrideStats();
                                        mob.getChangedStats().hp = 10000000000;
                                        var a = c.getMapInstance(cm.getMapId());
                                        a.spawnMonsterOnGroundBelow(mob, new java.awt.Point(224, -2075));
                                        cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                                        cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 2147483647, 2147483647, 2147483647);
                                    } else {
                                        if (status == 9) {
                                            cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                                        } else {
                                            if (status == 10) {
                                                cm.inGameDirectionEvent_AskAnswerTime(300);
                                            } else {
                                                if (status == 11) {
                                                    cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                                                    cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                                                } else {
                                                    if (status == 12) {
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
                }
            }
        }
    }
}
function action2(e, d, c) {
    var b;
    if (status == 0) {
        cm.updateInfoQuest(35838, 'clear2=0;clear3=1;clear=0');
        cm.updateInfoQuest(35838, 'clear2=0;clear3=0;clear=0');
        cm.curNodeEventEnd(true);
        cm.setInGameDirectionMode(true, false, true);
        cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
        cm.inGameDirectionEvent_AskAnswerTime(1000);
    } else {
        if (status == 1) {
            cm.inGameDirectionEvent_AskAnswerTime(1000);
        } else {
            if (status == 2) {
                cm.fieldEffect_PlayBGM('Bgm36/RoyalGuard', 0, 0);
                cm.onTeleport(0, 3, cm.getPlayer().getId(), -165, -1972);
                cm.inGameDirectionEvent_ForcedFlip(1);
                cm.inGameDirectionEvent_AskAnswerTime(1000);
            } else {
                if (status == 3) {
                    cm.getWeatherEffectNotice('感受伟大的力量吧！', 139, 10000, 1);
                    cm.inGameDirectionEvent_AskAnswerTime(500);
                } else {
                    if (status == 4) {
                        cm.inGameDirectionEvent_AskAnswerTime(500);
                    } else {
                        if (status == 5) {
                            cm.effect_Voice('MobVoice.img/8645034/Regen/0', 128);
                            cm.npc_ChangeController(3003908, 'oid=2180295', 224, -2133, 29, 174, 274, 1, false, 0, false);
                            cm.npc_SetSpecialAction('oid=2180295', 'summon', 0, 0);
                            cm.npc_SetSpecialAction('oid=2180295', 'regen', 1, 1);
                            cm.inGameDirectionEvent_AskAnswerTime(3900);
                        } else {
                            if (status == 6) {
                                cm.getTopMsgFont('必须击败黑骑士莫卡丁，移动到下一地图。', 3, 20, 4, 0, 0);
                                cm.playerMessage(5, '黑骑士莫卡丁出现了。必须击败黑骑士莫卡丁，移动到下一地图。');
                                cm.inGameDirectionEvent_AskAnswerTime(500);
                            } else {
                                if (status == 7) {
                                    cm.npc_LeaveField('oid=2180295');
                                    cm.npc_LeaveField('oid=2180295');
                                    b = 8645034;
                                    mob = em.getMonster(b);
                                    mob.setOverrideStats();
                                    mob.getChangedStats().hp = 10000000000;
                                    var a = eim.getMapInstance(cm.getMapId());
                                    a.spawnMonsterOnGroundBelow(mob, new java.awt.Point(224, -2075));
                                    cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                                    cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 2147483647, 2147483647, 2147483647);
                                } else {
                                    if (status == 8) {
                                        cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                                    } else {
                                        if (status == 9) {
                                            cm.inGameDirectionEvent_AskAnswerTime(300);
                                        } else {
                                            if (status == 10) {
                                                cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                                                cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                                            } else {
                                                if (status == 11) {
                                                    cm.setInGameDirectionMode(false, true, false);
                                                    cm.dispose();
                                                    cm.updateInfoQuest(35834, 'm4_3=1');
                                                    cm.forceCompleteQuest(35805);
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