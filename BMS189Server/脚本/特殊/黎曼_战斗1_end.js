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
        if (a == 993070100) {
            action0(d, c, b);
        } else {
            if (a == 993070200) {
                action1(d, c, b);
            } else {
                if (a == 993070300) {
                    action2(d, c, b);
                } else {
                    cm.dispose();
                }
            }
        }
    }
}
function action0(c, b, a) {
    if (status == 0) {
        cm.onTeleport(1, cm.getPlayer().getId(), 1910, -517);
        cm.updateInfoQuest(35834, 'm1_1=1');
        cm.sendNormalTalk_Bottom('对了，奥尔卡怎么样了？找回的力量到底是什么，为什么能毁掉迷宫之核呢？', 57, 0, false, true);
    } else {
        if (status == 1) {
            cm.sendNormalTalk_Bottom('#face0#不是毁掉，而是飞到了异界。', 37, 3003903, true, true);
        } else {
            if (status == 2) {
                cm.sendNormalTalk_Bottom('飞到了？', 57, 0, true, true);
            } else {
                if (status == 3) {
                    cm.sendNormalTalk_Bottom('#face0#就是集中重力，撕开空间，打开通往虚空的缝隙。', 37, 3003903, true, true);
                } else {
                    if (status == 4) {
                        cm.sendNormalTalk_Bottom('那真的可能吗？\r\n奥尔卡不是没有斯乌，就无法发挥出力量吗？', 57, 0, true, true);
                    } else {
                        if (status == 5) {
                            cm.sendNormalTalk_Bottom('#face0#没错。所以他付出了残酷的代价。', 37, 3003903, true, true);
                        } else {
                            if (status == 6) {
                                cm.sendNormalTalk_Bottom('代价……？', 57, 0, true, true);
                            } else {
                                if (status == 7) {
                                    cm.sendNormalTalk_Bottom('#face0#那就是寿命。', 37, 3003903, true, true);
                                } else {
                                    if (status == 8) {
                                        cm.sendNormalTalk_Bottom('……', 57, 0, true, true);
                                    } else {
                                        if (status == 9) {
                                            cm.dispose();
                                            cm.warp(993070200, 0, false);
                                            cm.sendNormalTalk('再这样下去，一切都会凋零的，不管是我，是你，还是我们所有人。\r\n　　　　　　　　　　　　　　　？悲观的精灵', 4, 3003337, false, true);
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
function action1(c, b, a) {
    if (status == 0) {
        cm.onTeleport(1, cm.getPlayer().getId(), 1910, -517);
        cm.updateInfoQuest(35834, 'm1_2=1');
        cm.sendNormalTalk_Bottom('那样的话，就算不是对抗者，也能打败黑魔法师吗？就像奥尔卡把迷宫之核打飞一样。', 57, 0, false, true);
    } else {
        if (status == 1) {
            cm.sendNormalTalk_Bottom('#face0#那是不可能的。虽然她不相信……\r\n但真的动手的话，她会明白的。', 37, 3003903, true, true);
        } else {
            if (status == 2) {
                cm.dispose();
                cm.warp(993070300, 0, false);
            }
        }
    }
}
function action2(c, b, a) {
    if (status == 0) {
        cm.onTeleport(1, cm.getPlayer().getId(), 1833, -777);
        cm.updateInfoQuest(35834, 'm1_3=1');
        cm.sendNormalTalk_Bottom('到底会发生什么事呢？', 57, 0, false, true);
    } else {
        if (status == 1) {
            cm.sendNormalTalk_Bottom('#face0#黑魔法师会孵化出#r创世之卵#k。', 37, 3003903, true, true);
        } else {
            if (status == 2) {
                cm.sendNormalTalk_Bottom('创世之卵？', 57, 0, true, true);
            } else {
                if (status == 3) {
                    cm.sendNormalTalk_Bottom('#face0#那是生长出新的世界的某种种子。\r\n清除现在的世界，在那个位置诞生出新的世界来。', 37, 3003903, true, true);
                } else {
                    if (status == 4) {
                        cm.sendNormalTalk_Bottom('#face0#毁掉创世之卵。否则创世仪式就不会停止。', 37, 3003903, true, true);
                    } else {
                        if (status == 5) {
                            cm.sendNormalTalk_Bottom('嗯……', 57, 0, true, true);
                        } else {
                            if (status == 6) {
                                cm.sendNormalTalk_Bottom('#face0#现在面具的力量也快用光了。对话好像只能到此为止了。', 37, 3003903, true, true);
                            } else {
                                if (status == 7) {
                                    cm.sendNormalTalk_Bottom('#face0#记住，对抗者。只有你可以摆脱既定之路。', 37, 3003903, true, true);
                                } else {
                                    if (status == 8) {
                                        cm.sendNormalTalk_Bottom('摆脱既定之路？', 57, 0, true, true);
                                    } else {
                                        if (status == 9) {
                                            cm.forceCompleteQuest(35802);
                                            cm.gainExp(721799016);
                                            cm.updateInfoQuest(35831, '52=h1;53=h1;55=h0');
                                            cm.dispose();
                                            cm.warp(450012100, 1, false);
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