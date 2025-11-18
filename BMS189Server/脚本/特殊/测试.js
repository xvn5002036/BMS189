var status = -1;
var selectionLog = [];
function start() {
    action(1, 0, 0);
}
function action(c, b, a) {
    cm.genMapScript(993186000, 993187001);
    cm.genQuestScript(100650, 100665);
    cm.dispose();
}
function action测试包头(c, b, a) {
    cm.dispose();
    cm.mplewPacket('3b2', '07 00 00 00 00 00 D0 07 00 00 00 00 00 00 8D 02 00 00 64 00 00 00');
}
function action深渊远征队(c, b, a) {
}
function action莫奈德(d, c, b) {
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
            cm.setInGameDirectionMode(true, false, true);
            cm.monadEndingScene(135 * Math.pow(cm.getLevel(), 3), 50 * Math.pow(cm.getLevel(), 2), [
                2439159,
                2439150,
                0,
                0,
                0,
                0
            ]);
            cm.sendNormalTalk_Bottom('#h0#！真是由衷的感谢你，这是我的小小心意。\r\n感谢你来到了这里，也感谢你帮助了阿布鲁的人民…', 37, 9400586, false, true);
        } else {
            if (status === a++) {
                cm.curNodeEventEnd(true);
                cm.setInGameDirectionMode(false, true, false);
                cm.monadEndingScene(-1, -1, null);
                cm.dispose();
            }
        }
    }
}
function 乌鲁斯() {
    cm.updateInfoQuest(33552, 'count=1');
    cm.updateInfoQuest(33554, 'time=00:02:17;assist=333');
    cm.updateInfoQuest(33555, 'a=2;ppl=2;rank=5;dam=123456789');
    cm.updateInfoQuest(33556, 'score=1111;grade=SSS');
    cm.updateInfoQuest(33561, 'dealKing=无名的绅士;rescueKing=无名的绅士;assistKing=无名的绅士');
    cm.updateInfoQuest(33562, 'assistKing=无名的绅士');
    cm.updateInfoQuest(33563, 'helpKing=无名的绅士;assistKing=无名的绅士');
    cm.updateInfoQuest(33564, 'Time=20/04/22/22/46;Value=2');
    cm.updateInfoQuest(33589, 'exp=6666');
    cm.updateInfoQuest(33591, '0=无名的绅士:0;1=第一行:1');
    cm.forceStartQuest(33859, '320');
    cm.forceStartQuest(33811, '320');
    cm.forceStartQuest(33800, '99');
}
function goEvent() {
    var a = '';
    cm.getEventManager(a).startInstance(cm.getPlayer());
}
function actAPORD() {
    cm.warp(cm.getNumberFromQuestInfo(59744, 'map'), 0);
    cm.forceCompleteQuest(59653);
    cm.updateInfoQuest(63864, 'expCountEv=0');
    cm.updateInfoQuest(63863, 'r=1');
    cm.updateInfoQuest(59793, 'count=4');
    cm.updateInfoQuest(59792, 'killCount=0;expCount=0;score=0');
    cm.updateInfoQuest(59791, 'NewbieBonus=0;bCount=0;nGoalType=0;nMobType=2;nElite=4;clear=0');
    cm.updateInfoQuest(59790, 'stComplete=1;shop=1;ClearCount=4;enterLv=221;lastDate=19/10/13');
    cm.updateInfoQuest(59785, 'c=93;stage=1;f=1;shop=0;h=69;ac=1;af=1;ah=23;at=1');
    cm.updateInfoQuest(59786, '10=0;11=1;12=1;13=1;14=1;15=0;16=0;0=0;1=0;2=1;3=1;4=0;5=0;6=0;7=1;8=1;9=1');
    cm.updateInfoQuest(59600, '59600_1=1;59600_2=1');
    cm.updateInfoQuest(59620, '59620_ex1=1;59620_1=1;59620_2=3;59620_3=1');
    cm.updateInfoQuest(59640, '59640_ex1=0;59640_1=1;59640_2=1');
}
function action我的小屋(d, c, b) {
    for (var a = 64590; a <= 64610; a++) {
        cm.forceCompleteQuest(a);
    }
    cm.updateInfoQuest(64610, 'hide=1');
    cm.updateInfoQuest(500763, 'end=1;name=' + cm.getName());
    cm.forceStartQuest(500818, '');
    cm.forceStartQuest(500823, '');
    cm.updateInfoQuest(500767, '1=1;2=1;3=1;type=1;entrance=0;4=1;5=1;6=1;7=1;managerXpos=100;managerYpos=100');
    cm.dispose();
}
function action日冕升级(d, b, a) {
    var c = 4;
    cm.setNumberForQuestInfo(500834, 'grade', c);
    cm.setNumberForQuestInfo(500833, '' + (c - 1), 1);
    if (c > 1) {
        cm.forceCompleteQuest(500833 + c);
    }
    cm.coronaSkillMenu(6, c - 1, c - 1, 1);
    cm.dispose();
}
function actionHD(c, b, a) {
    updateInfoQuest(3 - 20015, Long.toString(new Date().getTime()));
    cm.updateInfoQuest(-200114, 'time=123-200;reward=1;finished=1');
    cm.updateInfoQuest(-200168, '123');
    cm.updateInfoQuest(500651, 'clear=1');
    cm.updateInfoQuest(-200188, '123');
    cm.updateInfoQuest(18837, 'visit=1');
    cm.updateInfoQuest(18838, 'count=99;stageT=190824142712;hack=0;stage=5;mode=1');
    cm.updateInfoQuest(18839, 'isClear=1;br=14;cs=3;first=1');
    cm.updateInfoQuest(18869, 'starSumT=190824142712;starSum=3');
    cm.updateInfoQuest(18870, 'timeSum=14;timeSumT=190824142712');
    cm.updateInfoQuest(18877, 'trap=6;trapSum=8;T=190824143554936');
    cm.updateInfoQuest(3 - 20000, 'time=-20000000;type=1');
    cm.updateInfoQuest(500650, 'uW=3;3=6');
    cm.updateInfoQuest(500651, '3=1');
    cm.updateInfoQuest(-200161, 'lv=1');
    cm.updateInfoQuest(500617, 'lv=1');
    cm.teachSkill(80000582, 1);
    cm.teachSkill(80000584, 1);
    cm.dispose();
}
function actionStage(c, b, a) {
    if (mapId == 16) {
        cm.fieldEffect_ScreenMsg('Map/Effect.img/MapleHighSchool/stageEff/final');
    } else {
        cm.fieldEffect_ScreenMsg('Map/Effect.img/MapleHighSchool/stageEff/stage');
        cm.fieldEffect_ScreenMsg('Map/Effect.img/MapleHighSchool/stageEff/number_00/' + state % 10);
        if (state > 10) {
            cm.fieldEffect_ScreenMsg('Map/Effect.img/MapleHighSchool/stageEff/number_00/' + state % 10);
            cm.fieldEffect_ScreenMsg('Map/Effect.img/MapleHighSchool/stageEff/number_0/' + Math.floor(state / 10));
        } else {
            cm.fieldEffect_ScreenMsg('Map/Effect.img/MapleHighSchool/stageEff/number_0/' + state % 10);
        }
    }
    cm.dispose();
}
function actionPos(c, b, a) {
    cm.playerMessage(5, cm.getPlayer().getPosition());
    cm.dispose();
}
function actionMovie(d, c, b) {
    status++;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose();
    } else {
        if (status === a++) {
            cm.curNodeEventEnd(true);
            cm.setInGameDirectionMode(true, true);
            cm.setStandAloneMode(true);
            cm.inGameDirectionEvent_QTE(1000);
        } else {
            if (status === a++) {
                cm.curNodeEventEnd(true);
                cm.setInGameDirectionMode(false, true);
                cm.setStandAloneMode(false);
                cm.dispose();
            } else {
                cm.dispose();
            }
        }
    }
}
function action缩放(d, c, b) {
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
            cm.curNodeEventEnd(true);
            cm.setInGameDirectionMode(true, false);
            cm.setStandAloneMode(true);
            cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
            cm.inGameDirectionEvent_AskAnswerTime(500);
        } else {
            if (status === a++) {
                cm.inGameDirectionEvent_PushScaleInfo(-2000, 500, -2000, -2000, -620);
            } else {
                if (status === a++) {
                    cm.inGameDirectionEvent_AskAnswerTime(2000);
                } else {
                    if (status === a++) {
                        cm.inGameDirectionEvent_PushScaleInfo(3000, -2000, 3000, -162, 264);
                    } else {
                        if (status === a++) {
                            cm.inGameDirectionEvent_AskAnswerTime(3000);
                        } else {
                            if (status === a++) {
                                cm.setInGameDirectionMode(false, true);
                                cm.setStandAloneMode(false);
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
function actionQuest(e, c, b) {
    var d = 37169;
    var a = cm.getQuestRecord(d);
    a.setCustomData('9');
    cm.getPlayer().updateQuest(a, true);
    cm.playerMessage(5, 'getQuest - ' + cm.getQuest(d));
    cm.playerMessage(5, 'getQuestRecord - ' + cm.getQuestRecord(d));
    cm.playerMessage(5, 'getQuestCustomData - ' + cm.getQuestCustomData(d));
    cm.playerMessage(5, 'getQuestStatus - ' + cm.getQuestStatus(d));
    cm.playerMessage(5, 'getInfoQuest - ' + cm.getInfoQuest(d));
    cm.dispose();
}
function spawnMob(c, d, b, a, f, i, g, e) {
    var h = c.getMonster(9400036);
    h.changeLevel(newLevel);
    h.setOverrideStats();
    h.getChangedStats().hp *= 1000;
    h.getChangedStats().level = 666;
    h.heal();
    h.setSize(500);
    cm.getMap().spawnMonsterOnGroundBelow(h, new java.awt.Point(200, -148));
}
function actionMapEffect(c, b, a) {
    c == 1 ? status++ : status--;
    if (status < 0) {
        cm.dispose();
    } else {
        if (status < end) {
            cm.getMap().getWeatherEffectNotice('getWeatherEffectNotice ' + (start + status), start + status, 2000, 1);
            cm.askMenu('NEXT CODE : ' + now);
        } else {
            cm.dispose();
        }
    }
}
function start黑屏放动画(d, c, b) {
    status++;
    var a = -1;
    if (status <= a++) {
        cm.dispose();
    } else {
        if (status === a++) {
            cm.curNodeEventEnd(true);
            cm.setInGameDirectionMode(true, true);
            cm.setStandAloneMode(true);
            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, -2000, 0);
            cm.inGameDirectionEvent_AskAnswerTime(3000);
        } else {
            if (status === a++) {
                cm.fieldEffect_ProcessOnOffLayer('b0', 'Effect/Direction21.img/Elodin/birdgrow/0', 0, 2000, 0, 0, 0, 4, 1);
                cm.inGameDirectionEvent_AskAnswerTime(3000);
            } else {
                if (status === a++) {
                    cm.fieldEffect_ProcessOnOffLayer('b0', 'Effect/Direction21.img/Elodin/birdgrow/0', 2, -2000, 0, 0, 0, 4, 1);
                    cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 2000, 0);
                    cm.inGameDirectionEvent_AskAnswerTime(2000);
                } else {
                    if (status === a++) {
                        cm.curNodeEventEnd(true);
                        cm.setInGameDirectionMode(false, true);
                        cm.setStandAloneMode(false);
                        cm.dispose();
                    }
                }
            }
        }
    }
}
function action动作(d, c, b) {
    status++;
    var a = -1;
    if (status <= a++) {
        cm.dispose();
    } else {
        if (status === a++) {
            cm.curNodeEventEnd(true);
            cm.setInGameDirectionMode(true, false, true);
            cm.inGameDirectionEvent_OneTimeAction(1576, 0);
            cm.inGameDirectionEvent_AskAnswerTime(2000);
        } else {
            if (status === a++) {
                cm.curNodeEventEnd(true);
                cm.setInGameDirectionMode(false, true);
                cm.setStandAloneMode(false);
                cm.dispose();
            }
        }
    }
}
var skins = [
    30,
    33,
    40,
    55,
    56,
    57,
    58,
    59,
    117,
    135,
    136,
    137,
    172,
    221,
    1006,
    1009,
    1013,
    1014,
    1029,
    1052,
    1058,
    1075,
    1076,
    1078,
    1083,
    1084,
    1085,
    1131,
    1160,
    1161,
    1230,
    1249,
    1338,
    1344,
    1404,
    1405
];
function actionSkinOld(f, d, c) {
    status++;
    selectionLog[status] = c;
    if (status < 0) {
        cm.dispose();
    } else {
        if (status === 0) {
            cm.curNodeEventEnd(true);
            cm.setInGameDirectionMode(true, false, true);
            cm.setStandAloneMode(true);
            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, -200, 0);
            cm.inGameDirectionEvent_AskAnswerTime(0);
        } else {
            if (status <= skins.length) {
                cm.threadSleep(500);
                var e = '#fn黑体##fs32#伤害皮肤素材 ID=' + skins[status - 1] + '\r\n';
                var d = [
                    'NoRed0',
                    'NoRed1',
                    'NoCri0',
                    'NoCri1'
                ];
                for (var b = 0; b < d.length; b++) {
                    for (var a = 0; a < 10; a++) {
                        e += '#fEffect/DamageSkin.img/' + skins[status - 1] + '/' + d[b] + '/' + a + '#';
                    }
                    e += '\r\n';
                }
                cm.inGameDirectionEvent_Monologue(e, 1);
            } else {
                cm.curNodeEventEnd(true);
                cm.setInGameDirectionMode(false, true);
                cm.setStandAloneMode(false);
                cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, -200, 0);
                cm.dispose();
            }
        }
    }
}
function action分支(mode, type, selection) {
    if (status == 0 && mode == 0) {
        cm.dispose();
        return;
    }
    mode == 1 ? status++ : status--;
    selectionLog[status] = selection;
    var i = -1;
    if (status <= i++) {
        cm.dispose();
    } else {
        if (status === i++) {
            cm.askMenu('你？', 0, 9400965);
        } else {
            var reactor = 'action分支' + selectionLog[1];
            eval(reactor)(mode, type, selection, i);
        }
    }
}
function action分支1(d, c, b, a) {
    if (status <= a++) {
        cm.sendNormalTalk('嗯？', 0, 9400965, false, false);
    } else {
        if (status === a++) {
            cm.dispose();
        }
    }
}
function 控制中心(mode, type, selection) {
    var reactor = 'action' + cm.getNpc();
    eval(reactor)(mode, type, selection);
}
function 特效图标() {
    var h = '#fEffect/CharacterEff/1112926/0/0#';
    var j = '#fUI/UIPVP.img/MiniMapIcon/star#';
    var u = '#fEffect/CharacterEff/1082565/4/0#';
    var a = '#fUI/CashShop.img/CSEffect/event/0#';
    var r = '#fUI/CashShop.img/CSEffect/hot/0#';
    var q = '#fUI/CashShop.img/CSEffect/mileage/0#';
    var p = '#fUI/CashShop.img/CSEffect/new/0#';
    var o = '#fUI/CashShop.img/CSEffect/sale/0#';
    var n = '#fUI/CashShop.img/CSEffect/time/0#';
    var v = '#fUI/CashShop.img/CSEffect/number/0#';
    var t = '#fUI/CashShop.img/CSIcon/0#';
    var s = '#fUI/CashShop.img/CSStatus/BtCharge/mouseOver/0#';
    var c = '#fUI/CashShop.img/CSSubTabBar/Tab/4/Disable/10#';
    var m = '#fUI/StarCityUI.img/Board_Friend/list/0/5/selected#';
    var l = '#fUI/StarCityUI.img/Board_GameRank/tab/enabled/0#';
    var w = '#fUI/UIWindow.img/Shop/meso#';
    var i = '#fUI/UIWindow.img/UtilDlgEx/list0#';
    var g = '#fUI/UIWindow.img/UtilDlgEx/list1#';
    var f = '#fUI/UIWindow.img/UtilDlgEx/list2#';
    var e = '#fUI/UIWindow.img/UtilDlgEx/list3#';
    var d = '#fUI/UIWindow.img/UtilDlgEx/list4#';
    var b = '#fUI/UIWindow.img/UtilDlgEx/list5#';
    var k = '#fEffect/ItemEff/1112811/0/0#';
}