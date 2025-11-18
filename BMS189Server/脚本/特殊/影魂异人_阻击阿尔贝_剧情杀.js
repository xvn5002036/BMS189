var status = -1;
var selectionLog = [];
function start() {
    action(1, 0, 0);
}
function action(d, c, b) {
    if (status == 0 && d == 0) {
        cm.dispose();
        return;
    }
    d == 1 ? status++ : status--;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose();
    } else {
        if (status === a++) {
            cm.curNodeEventEnd(true);
            cm.eventSKill(0);
            cm.setInGameDirectionMode(true, false, false);
            cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
            cm.setStandAloneMode(true);
            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
            cm.fieldEffect_PlayBGM('Bgm00.img/Silence', 0, 0);
            cm.getMap().killAllMonsters(false);
            cm.playVideoByScript('ark2.avi');
        } else {
            if (status === a++) {
                cm.inGameDirectionEvent_AskAnswerTime(1000);
            } else {
                if (status === a++) {
                    cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 0, -450, 200);
                } else {
                    if (status === a++) {
                        cm.inGameDirectionEvent_ForcedFlip(1);
                        cm.onTeleport(0, 3, cm.getPlayer().getId(), -700, 208);
                        cm.npc_ChangeController(3001504, 'oid=144419218', -325, 202, 2, -375, -275, 1, true, 0, false);
                        cm.npc_SetSpecialAction('oid=144419218', 'summon', 0, 0);
                        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
                        cm.inGameDirectionEvent_AskAnswerTime(1200);
                    } else {
                        if (status === a++) {
                            cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                            cm.inGameDirectionEvent_AskAnswerTime(1400);
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom('#face0#好像没什么可看的了。让我来为这场愚蠢的战斗画上句号吧。', 37, 3001504, 0, 1);
                            } else {
                                if (status === a++) {
                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                } else {
                                    if (status === a++) {
                                        cm.npc_SetSpecialAction('oid=144419218', 'attack1', 0, 1);
                                        cm.inGameDirectionEvent_AskAnswerTime(1500);
                                    } else {
                                        if (status === a++) {
                                            cm.fieldEffect_ProcessOnOffLayer('d0', 'Effect/Direction17.img/effect/ark/ball/0', 0, 300, 300, 80, -1, 4, 1, -1, 0, 0, 0);
                                            cm.fieldEffect_ProcessOnOffLayer('d0', '', 1, 2000, -583, 0, 0, 0, 0, 0, 0, 0, 0);
                                            cm.inGameDirectionEvent_AskAnswerTime(500);
                                        } else {
                                            if (status === a++) {
                                                cm.fieldEffect_ProcessOnOffLayer('d0', '', 2, 500, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                                                cm.fieldEffect_InsertCanvas(1, 255, 240, 240, 240, 1300, 0);
                                                cm.inGameDirectionEvent_AskAnswerTime(1600);
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk_Bottom('#face7#呃啊啊啊啊啊啊啊啊啊啊！！！！！！！', 37, 3001500 + cm.getPlayer().getGender(), 0, 1);
                                                    cm.effect_Voice('Voice4.img/Ark/Back/F/' + (cm.getPlayer().getGender() == 0 ? 'Male' : 'Female') + '/12', 100);
                                                } else {
                                                    if (status === a++) {
                                                        cm.forceStartQuest(34944, '');
                                                        cm.forceCompleteQuest(34944);
                                                        cm.updateInfoQuest(34996, '402=h1');
                                                        cm.gainExp(8523);
                                                        cm.updateInfoQuest(34944, 'exp=1');
                                                        cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                                                        cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 2147483647, 2147483647, 2147483647);
                                                    } else {
                                                        if (status === a++) {
                                                            cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                                                        } else {
                                                            if (status === a++) {
                                                                cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                cm.forceStartQuest(14431, '');
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.forceStartQuest(18938, '');
                                                                    cm.forceStartQuest(33189, '');
                                                                    cm.forceStartQuest(33190, '');
                                                                    cm.forceStartQuest(33243, '');
                                                                    cm.forceStartQuest(33265, '');
                                                                    cm.forceStartQuest(33267, '');
                                                                    cm.forceStartQuest(39346, '');
                                                                    cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                                                                    cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                                                                } else {
                                                                    if (status === a++) {
                                                                        cm.setStandAloneMode(false);
                                                                        cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                                                                        cm.warp(402090009, 0, false);
                                                                        cm.eventSKill(0);
                                                                        cm.setInGameDirectionMode(false, true, false);
                                                                        cm.npc_LeaveField('oid=144419218');
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