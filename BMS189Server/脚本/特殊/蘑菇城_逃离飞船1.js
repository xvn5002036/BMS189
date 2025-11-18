var status = -1;
function start() {
    action(1, 0, 0);
}
function action(d, c, b) {
    status++;
    var a = -1;
    if (status <= a++) {
        cm.dispose();
    } else {
        if (status === a++) {
            cm.npc_ChangeController(1302009, 'oid=4392', -345, 308, 2, -395, -295, 1, false, false);
            cm.npc_ChangeController(1302009, 'oid=4393', 111, 308, 4, 61, 161, 1, false, false);
            cm.curNodeEventEnd(true);
            cm.eventSKill(0);
            cm.setInGameDirectionMode(true, true, true);
            cm.inGameDirectionEvent_MoveAction(0);
            cm.inGameDirectionEvent_AskAnswerTime(500);
        } else {
            if (status === a++) {
                cm.fieldEffect_PlayFieldSound('flowervioleta/suprise', 100);
                cm.inGameDirectionEvent_AskAnswerTime(1500);
                cm.effect_NormalSpeechBalloon('这个蘑菇怎么这么可怕? ！', 1, 0, 1, 1500, 0, 9897148);
                cm.effect_Direction('Effect/Direction2.img/flowervioleta/face', 0, 0, 0);
            } else {
                if (status === a++) {
                    cm.inGameDirectionEvent_AskAnswerTime(1500);
                    cm.effect_NormalSpeechBalloon('你是在嘲笑我太轻吗? ', 1, 1, 0, 1500, 0, 9897148);
                } else {
                    if (status === a++) {
                        cm.inGameDirectionEvent_AskAnswerTime(1500);
                        cm.effect_NormalSpeechBalloon('所以父王一直很担心.', 1, 1, 0, 1500, 0, 9897148);
                    } else {
                        if (status === a++) {
                            cm.inGameDirectionEvent_AskAnswerTime(1500);
                            cm.effect_NormalSpeechBalloon('……怎么可能? ', 1, 0, 1, 1500, 0, 9897148);
                        } else {
                            if (status === a++) {
                                cm.inGameDirectionEvent_AskAnswerTime(1500);
                                cm.effect_NormalSpeechBalloon('嗯? 你说什么? ', 1, 1, 0, 1500, 0, 9897148);
                            } else {
                                if (status === a++) {
                                    cm.inGameDirectionEvent_AskAnswerTime(1500);
                                    cm.effect_NormalSpeechBalloon('没, 没什么.走吧.', 1, 0, 0, 1500, 0, 9897148);
                                } else {
                                    if (status === a++) {
                                        cm.updateInfoQuest(30085, 'portal=1');
                                        cm.eventSKill(0);
                                        cm.setInGameDirectionMode(false, true, false);
                                        cm.updateInfoQuest(30067, 'clear');
                                        cm.dispose();
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