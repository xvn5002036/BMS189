var status = -1;
function start() {
    action(1, 0, 0);
}
function action(g, d, c) {
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