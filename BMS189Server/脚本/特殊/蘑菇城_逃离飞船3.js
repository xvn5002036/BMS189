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
            cm.curNodeEventEnd(true);
            cm.eventSKill(0);
            cm.setInGameDirectionMode(true, true, true);
            cm.inGameDirectionEvent_MoveAction(0);
            cm.inGameDirectionEvent_AskAnswerTime(500);
        } else {
            if (status === a++) {
                cm.inGameDirectionEvent_AskAnswerTime(1500);
                cm.effect_NormalSpeechBalloon('宫殿马上就要到了！', 1, 0, 1, 1500, 0, 9897148);
            } else {
                if (status === a++) {
                    cm.inGameDirectionEvent_AskAnswerTime(1500);
                    cm.effect_NormalSpeechBalloon('哎呀, 勇士, 你是在故意放慢脚步吗? ', 1, 1, 0, 1500, 0, 9897148);
                } else {
                    if (status === a++) {
                        cm.inGameDirectionEvent_AskAnswerTime(1500);
                        cm.effect_NormalSpeechBalloon('碧欧蕾塔公主.', 1, 0, 0, 1500, 0, 9897148);
                    } else {
                        if (status === a++) {
                            cm.inGameDirectionEvent_AskAnswerTime(1500);
                            cm.effect_NormalSpeechBalloon('嗯? ', 1, 1, 0, 1500, 0, 9897148);
                        } else {
                            if (status === a++) {
                                cm.inGameDirectionEvent_AskAnswerTime(1500);
                                cm.effect_NormalSpeechBalloon('要是你再不闭嘴的话, 我真的要把你丢下了.', 1, 0, 0, 1500, 0, 9897148);
                            } else {
                                if (status === a++) {
                                    cm.updateInfoQuest(30085, 'portal=3');
                                    cm.eventSKill(0);
                                    cm.setInGameDirectionMode(false, true, false);
                                    cm.dispose();
                                    cm.updateInfoQuest(30067, 'clear3');
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}