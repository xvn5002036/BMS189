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
            cm.setInGameDirectionMode(true, false, false);
            cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
            cm.OverlapScreenDetail19(0, 1000, 3000, 1);
            cm.sendNewEffects(17, [
                0,
                1000,
                1500,
                235,
                340
            ]);
        } else {
            if (status === a++) {
                cm.inGameDirectionEvent_AskAnswerTime(300);
            } else {
                if (status === a++) {
                    cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                    cm.fieldEffect_PlayFieldSound('Sound/SoundEffWz2.img/Mukhyun/groaning', 100);
                    cm.inGameDirectionEvent_AskAnswerTime(300);
                } else {
                    if (status === a++) {
                        cm.inGameDirectionEvent_ForcedFlip(1);
                        cm.inGameDirectionEvent_头顶图片(['Effect/OnUserEff.img/emotion/oh'], [
                            0,
                            0,
                            0,
                            1,
                            0,
                            0,
                            0,
                            0,
                            0
                        ]);
                        cm.inGameDirectionEvent_AskAnswerTime(300);
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom('#face8##b有人！', 37, 9401276, false, true, 1);
                        } else {
                            if (status === a++) {
                                cm.inGameDirectionEvent_ForcedFlip10(2, 200);
                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                            } else {
                                if (status === a++) {
                                    cm.inGameDirectionEvent_ForcedFlip(-1);
                                    cm.sendNormalTalk_Bottom('#face4##b（现在不追的话，就会让他跑掉……但是……）', 37, 9401276, false, true, 1);
                                } else {
                                    if (status === a++) {
                                        cm.inGameDirectionEvent_ForcedFlip(1);
                                        cm.inGameDirectionEvent_AskAnswerTime(300);
                                    } else {
                                        if (status === a++) {
                                            cm.inGameDirectionEvent_ForcedFlip10(2, 2000);
                                            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 600, 0);
                                            cm.inGameDirectionEvent_AskAnswerTime(900);
                                        } else {
                                            if (status === a++) {
                                                cm.sendNewEffects(14, [
                                                    0,
                                                    2000,
                                                    1000
                                                ]);
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNewEffects(19, [0]);
                                                } else {
                                                    if (status === a++) {
                                                        cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                                                        cm.setInGameDirectionMode(false, true, false);
                                                        cm.dispose();
                                                        cm.warp(875004800, 1, false);
                                                    } else {
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