var status = -1;
function action(c, b, a) {
    if (c == 1) {
        status++;
    } else {
        status--;
    }
    if (status == 0) {
        cm.NPCPool_ChangeController(9131005, 187, 51);
        cm.curNodeEventEnd(true);
        cm.setInGameDirectionMode(true);
        cm.setStandAloneMode(true);
        cm.inGameDirectionEvent_AskAnswerTime(4000);
        cm.inGameDirectionEvent_MoveAction(1);
        cm.inGameDirectionEvent_AskAnswerTime(1000);
        cm.inGameDirectionEvent_MoveAction(0);
    } else {
        if (status == 1) {
            cm.sendNextSNoESC_Bottom('我无意对女性兵戎相向，速速退开吧。');
        } else {
            if (status == 2) {
                cm.sendNextNoESC_Bottom('哼，真是个没有礼貌的毛头小子。你知不知道我是什么人？我可是斋藤道三的女儿，第六天魔王织田信长的正室妻子——浓姬。', 9131005);
            } else {
                if (status == 3) {
                    cm.sendNextSNoESC_Bottom('不要让我再次重复这句话，我无意对女性兵戎相向，快点给我退开。');
                } else {
                    if (status == 4) {
                        cm.sendNextNoESC_Bottom('你还挺狂妄的嘛，那就让我来试试看，你的本事是不是和你的态度一样拽上天！', 9131005);
                    } else {
                        if (status == 5) {
                            cm.NPC_SetSpecialAction(9131005, 'step');
                            cm.inGameDirectionEvent_AskAnswerTime(1080);
                        } else {
                            if (status == 6) {
                                cm.inGameDirectionEvent_头顶图片(['Effect/DirectionJP3.img/effect/kenjiTuto/balloonMsg/14'], [
                                    0,
                                    -100,
                                    -100,
                                    0,
                                    0
                                ]);
                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                            } else {
                                if (status == 7) {
                                    cm.inGameDirectionEvent_头顶图片(['Effect/DirectionJP3.img/effect/kenjiTuto/balloonMsg/15'], [
                                        0,
                                        -150,
                                        -150,
                                        0,
                                        0
                                    ]);
                                    cm.inGameDirectionEvent_AskAnswerTime(2000);
                                } else {
                                    if (status == 8) {
                                        cm.inGameDirectionEvent_头顶图片(['Effect/DirectionJP3.img/effect/kenjiTuto/balloonMsg/16'], [
                                            0,
                                            -150,
                                            -150,
                                            0,
                                            0
                                        ]);
                                        cm.inGameDirectionEvent_AskAnswerTime(2000);
                                    } else {
                                        if (status == 9) {
                                            cm.inGameDirectionEvent_头顶图片(['Effect/DirectionJP3.img/effect/kenjiTuto/balloonMsg/17'], [
                                                0,
                                                0,
                                                -120,
                                                0,
                                                0
                                            ]);
                                            cm.inGameDirectionEvent_AskAnswerTime(2000);
                                        } else {
                                            if (status == 10) {
                                                cm.inGameDirectionEvent_MoveAction(1);
                                                cm.inGameDirectionEvent_AskAnswerTime(1800);
                                            } else {
                                                if (status == 11) {
                                                    cm.inGameDirectionEvent_MoveAction(5);
                                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                } else {
                                                    if (status == 12) {
                                                        cm.inGameDirectionEvent_MoveAction(0);
                                                        cm.inGameDirectionEvent_AskAnswerTime(500);
                                                    } else {
                                                        cm.setInGameDirectionMode(false);
                                                        cm.NPCPool_LeaveField(9131005);
                                                        cm.dispose();
                                                        cm.warp(807100005, 0);
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