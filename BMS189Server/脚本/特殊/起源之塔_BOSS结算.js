var status = -1;
var validLevel = [
    10,
    20,
    30,
    40,
    50
];
var dialogue = [
    [
        '好样的！终于击败了这只大蜘蛛。还是挺顺利的嘛。',
        '我要送你一份礼物！',
        '希望你能继续加油，我们的目标还在更深处呢。'
    ],
    [
        '你真了不起！居然能击败铁皮人。相信后面的楼层也难不住你了。',
        '我要送你一份礼物！',
        '希望你能继续发挥出色，我们的目标还在更深处呢。'
    ],
    [
        '太棒了！居然能击败胆小的狮子。我们的进度已经超过一半了！',
        '我要送你一份礼物！',
        '希望你能继续保持水平，我们的目标还在更深处呢。'
    ],
    [
        '你真了不起！居然已经通过到第40层！你真是一名能力远超我想象的冒险者！',
        '你击败了一个强大的对手。我要送你一份礼物！',
        '希望你能继续发挥这样的气势，我们的目标还在更深处呢。'
    ],
    [
        '莫非……真没想到你会来这里，你真的很了不起！',
        '为纪念你通关最高层，我要送你一枚比较特殊的勋章！',
        '你真的完成啦！祝贺你！！'
    ]
];
function start() {
    status = -1;
    action(1, 0, 0);
}
function action(g, f, e) {
    status++;
    var h = cm.getNpc();
    if (validLevel.indexOf(h) < 0) {
        cm.dispose();
        return;
    }
    var c = 32024 + h / 5;
    var b = 1142685 + h / 5;
    if (cm.isQuestFinished(c)) {
        cm.fieldEffect_ScreenMsg('UI/UIWindowPL.img/HiddenCatch/StageImg/clear');
        cm.dispose();
        return;
    }
    var a = h / 10 - 1;
    var d = -1;
    if (status <= d++) {
        cm.dispose();
    } else {
        if (status === d++) {
            cm.curNodeEventEnd(true);
            cm.setInGameDirectionMode(true, true, true);
            cm.setStandAloneMode(true);
            cm.inGameDirectionEvent_AskAnswerTime(500);
        } else {
            if (status === d++) {
                cm.sendNextNoESC(dialogue[a][status - 1], 2540000);
            } else {
                if (status === d++) {
                    cm.sendNextNoESC(dialogue[a][status - 1], 2540000);
                } else {
                    if (status === d++) {
                        cm.sendNextNoESC(dialogue[a][status - 1], 2540000);
                    } else {
                        if (status === d++) {
                            cm.forceCompleteQuest(c);
                            cm.gainItem(b, 1);
                            cm.curNodeEventEnd(true);
                            cm.setInGameDirectionMode(false, true);
                            cm.setStandAloneMode(false);
                            cm.fieldEffect_ScreenMsg('UI/UIWindowPL.img/HiddenCatch/StageImg/clear');
                            cm.finishAchievement(1260 + h / 10);
                            cm.forceStartQuest(c);
                            cm.dispose();
                        }
                    }
                }
            }
        }
    }
}