var status = -1;
function start() {
    status = -1;
    action(1, 0, 0);
}
function action(d, c, b) {
    if (status == 0 && d == 0) {
        cm.dispose();
        return;
    }
    d == 1 ? status++ : status--;
    var a = -1;
    if (status <= a++) {
        cm.dispose();
    } else {
        if (status === a++) {
            cm.getMap().setSpawn(false);
            cm.getMap().killAllMonsters(true);
            cm.curNodeEventEnd(true);
            cm.eventSKill(0);
            cm.setInGameDirectionMode(true, false, true);
            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
            cm.fieldEffect_Hero9(0, 1000);
            cm.userSetFieldFloating(306050600, 0, 0, 0);
            cm.onTeleport(0, 3, cm.getPlayer().getId(), -25, -57);
            cm.inGameDirectionEvent_ForcedFlip(-1);
            cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 0, -30, -25);
        } else {
            if (status === a++) {
                cm.fieldEffect_PlayBGM('Ambience.img/snowwave2', 0, 0);
                cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
                cm.inGameDirectionEvent_AskAnswerTime(1200);
            } else {
                if (status === a++) {
                    cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                    cm.inGameDirectionEvent_AskAnswerTime(1400);
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom('呵呵……真是无穷无尽啊。哈哈。', 57, 0, false, true);
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom('队长！你看半山腰！！', 37, 2550007, true, true);
                        } else {
                            if (status === a++) {
                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                            } else {
                                if (status === a++) {
                                    cm.onSetMapTagedObjectVisible(1, 'DLep4_bomb', 0);
                                    cm.inGameDirectionEvent_AskAnswerTime(500);
                                } else {
                                    if (status === a++) {
                                        cm.fieldEffect_PlayFieldSound('Sound/SoundEff.img/DLep4/blow', 100);
                                        cm.inGameDirectionEvent_AskAnswerTime(2500);
                                    } else {
                                        if (status === a++) {
                                            cm.playSoundEffDirectly('SoundEff.img/DLep4/war2');
                                            cm.sendNormalTalk_Bottom('海姿……（咳咳，咳咳！！）', 57, 0, false, true);
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk_Bottom('成功了啊。', 57, 0, true, true);
                                            } else {
                                                if (status === a++) {
                                                    cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                } else {
                                                    if (status === a++) {
                                                        cm.userSetFieldFloating(306050600, 1, 1, 1);
                                                        cm.fieldEffect_Hero9(100, 5000);
                                                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                    } else {
                                                        if (status === a++) {
                                                            cm.userSetFieldFloating(306050600, 2, 2, 2);
                                                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                        } else {
                                                            if (status === a++) {
                                                                cm.userSetFieldFloating(306050600, 3, 3, 3);
                                                                cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                    cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                } else {
                                                                    if (status === a++) {
                                                                        cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                    } else {
                                                                        if (status === a++) {
                                                                            cm.eventSKill(0);
                                                                            cm.setInGameDirectionMode(false, true, false);
                                                                            cm.dispose();
                                                                            cm.warp(306090100, 0, true);
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