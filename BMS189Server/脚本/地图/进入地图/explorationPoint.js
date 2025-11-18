var status = -1;
var selectionLog = [];
function start() {
    status = -1;
    action(1, 0, 0);
}
function action(c, b, a) {
    cm.cancelItem(2210217);
    if (cm.getMapId() == 230010201 && cm.getPlayer().getLevel() <= 5) {
        action默认出生地(c, b, a);
        return;
    }
    if (cm.isQuestActive(40050)) {
        action40050(c, b, a);
    } else {
        if (cm.isQuestActive(3320) || cm.isQuestActive(3353)) {
            cm.warp(926120200, 0, true);
            cm.dispose();
            return;
        } else {
            if (cm.isQuestActive(39543)) {
                action39543(c, b, a);
            } else {
                if (cm.isQuestFinished(38058) && !cm.isQuestFinished(38060)) {
                    action38060(c, b, a);
                } else {
                    if (cm.isQuestActive(24046)) {
                        action24046(c, b, a);
                    } else {
                        if (cm.isQuestFinished(34953) && cm.getQuestStatus(34954) == 0) {
                            action34954(c, b, a);
                        } else {
                            if (cm.isQuestActive(34823)) {
                                if (cm.getMapId() == 104020000) {
                                    action34823(c, b, a);
                                } else {
                                    cm.dispose();
                                    return;
                                }
                            } else {
                                if (!cm.isQuestFinished(17901)) {
                                    cm.forceCompleteQuest(17901);
                                    cm.dispose();
                                    return;
                                } else {
                                    if (cm.isQuestFinished(32243) && !cm.isQuestFinished(32245)) {
                                        if (cm.getMapId() != 105000000) {
                                            cm.warp(910400200, 6, true);
                                        }
                                        cm.dispose();
                                        return;
                                    } else {
                                        if (cm.isQuestFinished(21753) && cm.getQuestStatus(21754) == 0) {
                                            cm.addPopupSay(0, 4000, '前往射手训练中心找郝丽娜');
                                            cm.dispose();
                                            return;
                                        } else {
                                            if (cm.isQuestFinished(22579) && cm.getQuestStatus(22580) == 0) {
                                                cm.addPopupSay(0, 4000, '去明珠港找坤，应该就能前往龙沉睡的岛了吧？');
                                                cm.dispose();
                                                return;
                                            } else {
                                                if (cm.isQuestFinished(22580) && cm.isQuestFinished(22588) && cm.getQuestStatus(22590) == 0) {
                                                    cm.addPopupSay(0, 4000, '去明珠港找坤，再次前往龙沉睡的岛吧！');
                                                    if (!cm.isQuestActive(22589)) {
                                                        cm.forceStartQuest(22589, '');
                                                    }
                                                    cm.dispose();
                                                    return;
                                                } else {
                                                    if (cm.isQuestFinished(20795) && !cm.isQuestFinished(20796)) {
                                                        cm.addPopupSay(0, 4000, '见过了新朋友，接下来回圣地找希纳斯吧！');
                                                        cm.dispose();
                                                        return;
                                                    } else {
                                                        if (cm.isQuestFinished(20797) && !cm.isQuestFinished(20798)) {
                                                            cm.addPopupSay(0, 4000, '去射手村找情报员洛卡吧！');
                                                            cm.dispose();
                                                            return;
                                                        } else {
                                                            cm.checkMedalQuest();
                                                            cm.resetForcedStat();
                                                            if (cm.getMapId() == 104000000) {
                                                                cm.fieldEffect_ScreenMsg('maplemap/enter/104000000');
                                                                if (cm.isQuestActive(500765) || cm.isQuestFinished(500765) && !cm.isQuestFinished(64627)) {
                                                                    cm.setPartner(1, 9400944, 80011836, 0);
                                                                    cm.setPartner(1, 9400945, 80011837, 0);
                                                                }
                                                                if (!cm.isQuestFinished(3814)) {
                                                                    cm.forceCompleteQuest(3814);
                                                                }
                                                            } else {
                                                                if (cm.getMapId() == 104020000) {
                                                                    if (cm.getQuestStatus(32253) == 1 || cm.getQuestStatus(32263) == 1) {
                                                                        cm.warp(910400200, 0, false);
                                                                    }
                                                                } else {
                                                                    if (cm.getMapId() == 101000000) {
                                                                        if (cm.getJob() == 2300 && cm.getQuestStatus(24046) == 1) {
                                                                            cm.forceCompleteQuest(24046);
                                                                        }
                                                                        if (!cm.isQuestFinished(2443) || !cm.isQuestFinished(2444) || !cm.isQuestFinished(2445)) {
                                                                            cm.forceCompleteQuest(2443);
                                                                            cm.forceCompleteQuest(2444);
                                                                            cm.forceCompleteQuest(2445);
                                                                        }
                                                                    } else {
                                                                        if (cm.getMapId() == 200000000) {
                                                                            if (!cm.isQuestFinished(3045) || !cm.isQuestFinished(3042) || !cm.isQuestFinished(3043) || !cm.isQuestFinished(3046)) {
                                                                                cm.forceCompleteQuest(3045);
                                                                                cm.forceCompleteQuest(3042);
                                                                                cm.forceCompleteQuest(3043);
                                                                                cm.forceCompleteQuest(3046);
                                                                            }
                                                                        } else {
                                                                            if (cm.getMapId() == 270000000) {
                                                                                if (!cm.isQuestFinished(3507) || !cm.isQuestFinished(3546)) {
                                                                                    cm.forceCompleteQuest(3507);
                                                                                    cm.forceCompleteQuest(3546);
                                                                                }
                                                                            } else {
                                                                                if (cm.getMapId() == 120040000) {
                                                                                    if (cm.isQuestFinished(64628) && !cm.isQuestFinished(64631)) {
                                                                                        cm.setPartner(1, 9400944, 80011836, 0);
                                                                                        cm.setPartner(1, 9400945, 80011837, 0);
                                                                                    }
                                                                                    if (cm.isQuestActive(38039)) {
                                                                                        cm.forceCompleteQuest(38039);
                                                                                    }
                                                                                } else {
                                                                                    if (cm.getMapId() == 221000000) {
                                                                                        if (cm.getQuestStatus(3478) > 0 && !cm.isQuestFinished(3487)) {
                                                                                            cm.setPartner(1, 2052032, 80002245, 0);
                                                                                        }
                                                                                    } else {
                                                                                        if (cm.getMapId() == 100000000) {
                                                                                            if (!cm.isQuestFinished(8545) || !cm.isQuestFinished(8546) || !cm.isQuestFinished(8547)) {
                                                                                                cm.forceCompleteQuest(8545);
                                                                                                cm.forceCompleteQuest(8546);
                                                                                                cm.forceCompleteQuest(8547);
                                                                                            }
                                                                                        } else {
                                                                                            if (cm.getMapId() == 103000000) {
                                                                                                cm.npc_ChangeController(9020000, 'oid=2062', 1034, 66, 92, 984, 1084, 0, false, 0, false);
                                                                                                if (!cm.isQuestFinished(2868)) {
                                                                                                    cm.forceCompleteQuest(2868);
                                                                                                }
                                                                                            } else {
                                                                                                if (cm.getMapId() == 924000200) {
                                                                                                    cm.killAllMob();
                                                                                                    cm.spawnMobLimit(2600022, 1, -638, 452, 10);
                                                                                                } else {
                                                                                                    if (cm.getMapId() == 924000201) {
                                                                                                        cm.killAllMob();
                                                                                                        cm.spawnMobLimit(2600007, 1, 250, 452, 10);
                                                                                                    } else {
                                                                                                        if (cm.getMapId() == 211040300) {
                                                                                                            if (cm.isQuestActive(39561)) {
                                                                                                                cm.spawnNpc(3001683);
                                                                                                                cm.setPartner(1, 3001683, 80002800, 0);
                                                                                                            }
                                                                                                        } else {
                                                                                                            if (cm.getMapId() == 240040400) {
                                                                                                                if (cm.isQuestActive(39563)) {
                                                                                                                    cm.spawnNpc(3001683);
                                                                                                                    cm.setPartner(1, 3001683, 80002800, 0);
                                                                                                                }
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
function action默认出生地(e, d, c) {
    status++;
    selectionLog[status] = c;
    var b = -1;
    if (status <= b++) {
        cm.dispose();
    } else {
        if (status === b++) {
            cm.curNodeEventEnd(true);
            cm.setInGameDirectionMode(true, false, false);
            cm.setStandAloneMode(true);
            cm.inGameDirectionEvent_SetHideEffect(1);
            cm.fieldEffect_InsertCanvas(1, 200, 0, 0, 0, 1500, 0);
            cm.inGameDirectionEvent_头顶图片(['Effect/Direction3.img/effect/tuto/key/0'], [
                3000000,
                -300,
                0,
                1,
                0,
                1,
                1,
                0
            ]);
            cm.inGameDirectionEvent_头顶图片(['Effect/Direction3.img/effect/tuto/key/0'], [
                3000000,
                0,
                0,
                1,
                0,
                1,
                1,
                0
            ]);
            cm.inGameDirectionEvent_头顶图片(['Effect/Direction3.img/effect/tuto/key/0'], [
                3000000,
                300,
                0,
                1,
                0,
                1,
                1,
                0
            ]);
            cm.inGameDirectionEvent_AskAnswerTime(500);
        } else {
            if (status === b++) {
                var a = '#r#e#fnConsolas##fs37#欢迎体验' + cm.getServerName() + '\r\n\r\n#n#k';
                a += ' #fs27#解卡命令#r@ea#k 回程命令#r@fm#k\r\n\r\n';
                a += ' #fs27#菜单命令#r@pm#k 复活命令#r@fh#k\r\n\r\n';
                a += ' #fs27#更多命令#r@help#k\r\n\r\n';
                a += '#fs30#点击背包内的#g#e「#v2432022#」#n#k解锁更多功能与玩法。\r\n';
                cm.inGameDirectionEvent_Monologue(a, 1);
            } else {
                if (status === b++) {
                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                } else {
                    if (status === b++) {
                        cm.inGameDirectionEvent_SetHideEffect(0);
                        cm.fieldEffect_InsertCanvas(1, 0, 0, 0, 0, 1500, 0);
                        cm.curNodeEventEnd(true);
                        cm.setInGameDirectionMode(false, true);
                        cm.setStandAloneMode(false);
                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                        cm.dispose();
                        cm.warp(50000, 0, true);
                    }
                }
            }
        }
    }
}
function action34823(d, c, b) {
    if (status == 0 && d == 0) {
        cm.dispose();
        return;
    }
    status++;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose();
    } else {
        if (status === a++) {
            cm.curNodeEventEnd(true);
            cm.setInGameDirectionMode(true, false, false);
            cm.setStandAloneMode(true);
            cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection2();
            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
            cm.onTeleport(0, 3, cm.getPlayer().getId(), -670, -944);
            cm.npc_ChangeController(3001310, 'oid=669439', -825, -910, 244, -875, -775, 0, true, 0, false);
            cm.npc_SetSpecialAction('oid=669439', 'summon', 0, 0);
            cm.npc_ChangeController(3001311, 'oid=669440', -776, -910, 244, -826, -726, 0, true, 0, false);
            cm.npc_SetSpecialAction('oid=669440', 'summon', 0, 0);
            cm.npc_ChangeController(3001307, 'oid=669441', -740, -910, 244, -790, -690, 0, true, 0, false);
            cm.npc_SetSpecialAction('oid=669441', 'summon', 0, 0);
            cm.npc_ChangeController(3001308, 'oid=669442', -700, -910, 244, -750, -650, 0, true, 0, false);
            cm.npc_SetSpecialAction('oid=669442', 'summon', 0, 0);
            cm.npc_ChangeController(3001300, 'oid=669443', -615, -975, 245, -665, -565, 1, true, 0, false);
            cm.npc_SetSpecialAction('oid=669443', 'summon', 0, 0);
            cm.inGameDirectionEvent_AskAnswerTime(1400);
        } else {
            if (status === a++) {
                cm.curNodeEventEnd(true);
                cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                cm.inGameDirectionEvent_AskAnswerTime(2500);
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom('#face0#这里是……‘异次元’？', 37, 3001354, false, true, 1);
                } else {
                    if (status === a++) {
                        cm.inGameDirectionEvent_PushScaleInfo(1000, 0, 1000, 1000, -530, -670);
                    } else {
                        if (status === a++) {
                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom('#face0#呃！那边有人！我们去问问那位爷爷吧？', 37, 3001310, false, true, 1);
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom('#face0#那个，我有个问题。', 37, 3001354, true, true, 1);
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom('你想前往美丽的地上乐园金海滩吗？', 37, 1540704, true, true, 1);
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom('#face0#地上乐园？嗯！我要去！', 37, 3001307, true, true, 1);
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk_Bottom('#face3#现在不是四处闲逛的时候！', 37, 3001311, true, true, 1);
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk_Bottom('#face0#抱歉，我能问你几个问题吗？', 37, 3001308, true, true, 1);
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk_Bottom('嗯？问题？你又想问些什么啊？', 37, 1540704, true, true, 1);
                                                    } else {
                                                        if (status === a++) {
                                                            cm.sendNormalTalk_Bottom('我现在忙得很！不是什么要紧事就去问#b射手村#k的#b长老斯坦#k吧。', 37, 1540704, true, true, 1);
                                                        } else {
                                                            if (status === a++) {
                                                                cm.sendNormalTalk_Bottom('#face0##b射手村#k的#b长老斯坦#k……谢谢。', 37, 3001354, true, true, 1);
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.sendNormalTalk_Bottom('#face0#马上为你引路。', 37, 3001300, true, true, 1);
                                                                } else {
                                                                    if (status === a++) {
                                                                        cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                                                                        cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 2147483647, 2147483647, 2147483647);
                                                                    } else {
                                                                        if (status === a++) {
                                                                            cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                                                                        } else {
                                                                            if (status === a++) {
                                                                                cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                            } else {
                                                                                if (status === a++) {
                                                                                    cm.npc_LeaveField('oid=669439');
                                                                                    cm.npc_LeaveField('oid=669440');
                                                                                    cm.npc_LeaveField('oid=669441');
                                                                                    cm.npc_LeaveField('oid=669442');
                                                                                    cm.npc_LeaveField('oid=669443');
                                                                                    cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                                                                                    cm.setStandAloneMode(false);
                                                                                    cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                                                                                    cm.setInGameDirectionMode(false, true, false);
                                                                                    cm.OnStartNavigation(100000000, 1, '1012003', 0);
                                                                                    cm.forceStartQuest(29005, '');
                                                                                    cm.updateInfoQuest(27000, 'enter=00000000000000000000');
                                                                                    cm.forceStartQuest(27010, '0');
                                                                                    cm.updateInfoQuest(27000, 'enter=01000000000000000000');
                                                                                    cm.forceStartQuest(27010, '1');
                                                                                    cm.updateInfoQuest(34823, 'maple=1');
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
function action40050(d, c, b) {
    if (status == 0 && d == 0) {
        cm.dispose();
        return;
    }
    status++;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose();
    } else {
        if (status === a++) {
            cm.curNodeEventEnd(true);
            cm.setInGameDirectionMode(true, true, true);
            cm.sendNormalTalk('这里就是冒险岛世界吗？看来的确是……和镜世界相比，这里的空气都快让人窒息了。很不舒服。', 41, 2411025, false, true);
            cm.curNodeEventEnd(true);
        } else {
            if (status === a++) {
                cm.sendNormalTalk('身体看上去透明了……', 41, 2411026, true, true);
            } else {
                if (status === a++) {
                    cm.sendNormalTalk('好像是因为……被束缚在镜世界中的缘故。可恶，不用在这里浪费时间，回去吧。', 41, 2411025, true, true);
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk('打开技能窗，使用#b神殿的召唤#k技能，可以重新前往神殿。这次由我来使用技能。', 41, 2411025, true, true);
                        cm.effect_REPEAT('Effect/Direction13.img/effect/zero/skilltuto/0', 1, 1, 1, 0, -60);
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk('#b(点头)', 41, 2411026, true, true);
                        } else {
                            if (status === a++) {
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
function action39543(d, c, b) {
    if (status == 0 && d == 0) {
        cm.dispose();
        return;
    }
    status++;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose();
    } else {
        if (status === a++) {
            cm.sendNormalTalk_Bottom('#face7#这里是冒险岛世界！？', 37, 3001674 + cm.getPlayer().getGender(), false, true);
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom('#face0#这里的气氛要比格兰蒂斯幽静啊，\r\n甚至让人开始怀疑是否真的有危机降临。', 37, 3001651, true, true);
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom('#face9#哟……这么说现在起这里就是我的舞台了吧？', 37, 3001674 + cm.getPlayer().getGender(), true, true);
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom('#face0#唔……没想到这种地方还会有怪物……', 37, 3001651, true, true);
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom('#face5#饕餮，那些怪物搞不好已经四散到很远的地方去了啊！\r\n你就别废话了，集中精神吧！', 37, 3001674 + cm.getPlayer().getGender(), true, true);
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom('#face0#找、找到不就行了吗！？', 37, 3001651, true, true);
                            } else {
                                if (status === a++) {
                                    cm.forceCompleteQuest(39543);
                                    cm.updateInfoQuest(39543, 'see=1');
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
function action38060(d, c, b) {
    if (status == 0 && d == 0) {
        cm.dispose();
        return;
    }
    status++;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose();
    } else {
        if (status === a++) {
            cm.sendNormalTalk('过去的我已经完全消失在冒险岛世界了。任何人都不会记得我，对大家来说我只是个来历不明的危险人物而已。', 2, 0, false, true);
        } else {
            if (status === a++) {
                cm.askAcceptDecline('那么…………如果这个世界将我完全遗忘的话，我也没必要非得待在这里。我可以去需要我的地方，能记住我的地方，不是吗？\r\n\r\n#r(接受任务后将马上移动到相关地图。)#k', 2, 0);
            } else {
                if (status === a++) {
                    cm.updateInfoQuest(38060, '');
                    cm.forceStartQuest(38060, '');
                    cm.forceStartQuest(38906, '101000000');
                    cm.dispose();
                    cm.warp(410000000, 7, false);
                }
            }
        }
    }
}
function action24046(d, c, b) {
    if (status == 0 && d == 0) {
        cm.dispose();
        return;
    }
    status++;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose();
    } else {
        if (status === a++) {
            cm.forceCompleteQuest(24046);
            cm.dispose();
        }
    }
}
function action34954(d, c, b) {
    if (status == 0 && d == 0) {
        cm.dispose();
        return;
    }
    status++;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose();
    } else {
        if (status === a++) {
            cm.updateInfoQuest(34954, 'see=1');
            cm.curNodeEventEnd(true);
            cm.eventSKill(0);
            cm.setInGameDirectionMode(true, false, false);
            cm.setStandAloneMode(true);
            cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
            cm.sendNormalTalk_Bottom('#face0#看来这里就是六岔路口了。那人让我去找一个叫射手村的地方。射手村……', 37, 3001500 + cm.getPlayer().getGender(), 0, 1);
            cm.curNodeEventEnd(true);
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom('#face0#怎么又突然冒出来了？', 37, 1540704, 1, 1);
            } else {
                if (status === a++) {
                    cm.inGameDirectionEvent_PushScaleInfo(1000, 0, 1000, 1000, -530, -670);
                } else {
                    if (status === a++) {
                        cm.inGameDirectionEvent_AskAnswerTime(1500);
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom('#face0#我现在很忙。想问问题就去找长老斯坦。', 37, 1540704, 0, 1);
                        } else {
                            if (status === a++) {
                                cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                            } else {
                                if (status === a++) {
                                    cm.inGameDirectionEvent_AskAnswerTime(500);
                                } else {
                                    if (status === a++) {
                                        cm.setStandAloneMode(false);
                                        cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                                        cm.eventSKill(0);
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
function action6(c, b, a) {
    if (status == 0 && c == 0) {
        cm.dispose();
        return;
    }
}