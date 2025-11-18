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
                cm.effect_NormalSpeechBalloon('腿, 腿在发抖.', 1, 0, 1, 1500, 0, 9897148);
            } else {
                if (status === a++) {
                    cm.inGameDirectionEvent_AskAnswerTime(1500);
                    cm.effect_NormalSpeechBalloon('勇士, 你为什么不说话? ', 1, 1, 0, 1500, 0, 9897148);
                } else {
                    if (status === a++) {
                        cm.inGameDirectionEvent_AskAnswerTime(1500);
                        cm.effect_NormalSpeechBalloon('……因为没力气说话.', 1, 0, 0, 1500, 0, 9897148);
                    } else {
                        if (status === a++) {
                            cm.inGameDirectionEvent_AskAnswerTime(1500);
                            cm.effect_NormalSpeechBalloon('哎呀, 和我在一起这么紧张吗? ', 1, 1, 0, 1500, 0, 9897148);
                        } else {
                            if (status === a++) {
                                cm.inGameDirectionEvent_AskAnswerTime(1500);
                                cm.effect_NormalSpeechBalloon('是你的体重太让人紧张了, 你的体重！', 1, 0, 1, 1500, 0, 9897148);
                            } else {
                                if (status === a++) {
                                    cm.updateInfoQuest(30085, 'portal=2');
                                    cm.eventSKill(0);
                                    cm.setInGameDirectionMode(false, true, false);
                                    cm.updateInfoQuest(30067, 'clear2');
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