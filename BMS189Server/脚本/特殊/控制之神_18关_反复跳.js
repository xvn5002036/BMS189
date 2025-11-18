var status = -1;
function start() {
    action(1, 0, 0);
}
function action(g, c, b) {
    var a = cm.getEventManager('小游戏_控制之神');
    var d = parseInt(a.getProperty('level18_count')) + 1;
    if (d >= 30) {
        cm.addPopupSay(9070203, 2000, '三十！很好！做得好！成功了！');
        actionFinish(g, c, b);
    } else {
        var h = cm.getNpc();
        var e = parseInt(a.getProperty('level18_switch'));
        if (e != h) {
            a.setProperty('level18_switch', h);
            a.setProperty('level18_count', d);
            var f = '';
            if (d == 1) {
                f += '这是一个好的开始！';
            }
            f += NumberToChinese(d) + '！';
            if (d == 5) {
                f += '比光还要快！';
            } else {
                if (d == 10) {
                    f += '我的名字是闪电箭！';
                } else {
                    if (d == 15) {
                        f += '就算辛苦也要坚持！';
                    } else {
                        if (d == 20) {
                            f += '想妈妈了吧？！';
                        } else {
                            if (d == 25) {
                                f += '现在就剩下五个了！';
                            } else {
                                if (d == 29) {
                                    f += '最后一个！';
                                }
                            }
                        }
                    }
                }
            }
            cm.addPopupSay(9070203, 2000, f);
        }
        cm.dispose();
    }
}
function actionFinish(g, d, c) {
    status++;
    var b = -1;
    if (status <= b++) {
        cm.dispose();
    } else {
        if (status === b++) {
            cm.curNodeEventEnd(true);
            cm.setInGameDirectionMode(true, true);
            cm.setStandAloneMode(true);
            cm.fieldEffect_PlayFieldSound('Sound/MiniGame.img/prize');
            cm.fieldEffect_ScreenMsg('UI/UIWindowPL.img/HiddenCatch/StageImg/clear');
            cm.getWeatherEffectNotice('已通关，前往大厅。', 212, 2000, 1);
            cm.emotion(10, 3000);
            cm.fieldEffect_PlayFieldSound('Sound/MiniGame.img/Catch');
            cm.effect_Direction('Effect/CharacterEff.img/12thMiniGame/getMesso3');
            var f = Math.round((10 * 60 * 1000 - eim.getTimeLeft()) / 1000);
            eim.stopEventTimer();
            var h = Math.round((cm.getMapId() - 993001000) / 10);
            cm.setNumberForQuestInfo(18838 + h, 'isClear', 1);
            cm.setNumberForQuestInfo(18838 + h, 'br', f);
            var a = cm.getNumberFromQuestInfo(18838 + h, 'cs');
            var e = 3 - timeLevel(h, f);
            cm.setNumberForQuestInfo(18838 + h, 'cs', e);
            cm.playerMessage(-1, cm.getPlayer().getName() + '以' + e + '颗星通关！');
            cm.addNumberForQuestInfo(100161, 'point', h * e);
            cm.setNumberForQuestInfo(18838, 'stage', Math.max(cm.getNumberFromQuestInfo(18838, 'stage'), h));
            cm.addNumberForQuestInfo(18870, 'timeSum', f);
            cm.setNumberForQuestInfo(18870, 'timeSumT', new Date().getTime());
            if (a < e) {
                cm.setNumberForQuestInfo(18869, 'starSumT', new Date().getTime());
                cm.addNumberForQuestInfo(18869, 'starSum', e - a);
            }
            cm.inGameDirectionEvent_AskAnswerTime(2000);
        } else {
            if (status === b++) {
                cm.curNodeEventEnd(true);
                cm.setInGameDirectionMode(false, true);
                cm.setStandAloneMode(false);
                cm.warp(993001000);
                cm.dispose();
            } else {
                cm.dispose();
            }
        }
    }
}
var medalTime = [
    [
        20,
        30,
        50
    ],
    [
        20,
        30,
        50
    ],
    [
        20,
        30,
        50
    ],
    [
        10,
        30,
        50
    ],
    [
        20,
        60,
        100
    ],
    [
        15,
        45,
        75
    ],
    [
        30,
        90,
        180
    ],
    [
        15,
        45,
        75
    ],
    [
        20,
        60,
        100
    ],
    [
        35,
        105,
        175
    ],
    [
        30,
        90,
        150
    ],
    [
        20,
        60,
        100
    ],
    [
        25,
        75,
        125
    ],
    [
        15,
        45,
        75
    ],
    [
        15,
        45,
        75
    ],
    [
        20,
        60,
        100
    ],
    [
        20,
        60,
        100
    ],
    [
        120,
        200,
        300
    ],
    [
        40,
        120,
        200
    ],
    [
        50,
        150,
        250
    ],
    [
        30,
        90,
        150
    ],
    [
        30,
        90,
        150
    ],
    [
        30,
        90,
        150
    ],
    [
        30,
        90,
        150
    ],
    [
        40,
        120,
        200
    ],
    [
        40,
        120,
        200
    ],
    [
        60,
        180,
        300
    ],
    [
        60,
        180,
        300
    ],
    [
        35,
        105,
        175
    ],
    [
        30,
        90,
        150
    ],
    [
        30,
        90,
        150
    ],
    [
        15,
        45,
        75
    ],
    [
        60,
        180,
        300
    ],
    [
        15,
        45,
        75
    ],
    [
        60,
        180,
        300
    ],
    [
        40,
        120,
        200
    ],
    [
        40,
        120,
        200
    ],
    [
        45,
        135,
        225
    ],
    [
        35,
        105,
        175
    ],
    [
        540,
        570,
        600
    ]
];
function timeLevel(b, a) {
    if (a < medalTime[b][0]) {
        return 0;
    } else {
        if (a < medalTime[b][1]) {
            return 1;
        } else {
            if (a < medalTime[b][2]) {
                return 2;
            } else {
                return 3;
            }
        }
    }
}
function NumberToChinese(b) {
    var d = 0;
    var f = '', c = '';
    var a = false;
    if (b === 0) {
        return chnNumChar[0];
    }
    while (b > 0) {
        var e = b % 10000;
        if (a) {
            c = chnNumChar[0] + c;
        }
        f = SectionToChinese(e);
        f += e !== 0 ? chnUnitSection[d] : chnUnitSection[0];
        c = f + c;
        a = e < 1000 && e > 0;
        b = Math.floor(b / 10000);
        d++;
    }
    return c;
}
function SectionToChinese(e) {
    var f = '', c = '';
    var b = 0;
    var d = true;
    while (e > 0) {
        var a = e % 10;
        if (a === 0) {
            if (!d) {
                d = true;
                c = chnNumChar[a] + c;
            }
        } else {
            d = false;
            f = chnNumChar[a];
            f += chnUnitChar[b];
            c = f + c;
        }
        b++;
        e = Math.floor(e / 10);
    }
    return c;
}
var chnUnitSection = [
    '',
    '万',
    '亿',
    '万亿',
    '亿亿'
];
var chnNumChar = [
    '零',
    '一',
    '二',
    '三',
    '四',
    '五',
    '六',
    '七',
    '八',
    '九'
];
var chnUnitChar = [
    '',
    '十',
    '百',
    '千',
    '万',
    '十',
    '百',
    '千',
    '亿',
    '十',
    '百',
    '千'
];