var status = -1;
function start() {
    action(1, 0, 0);
}
var endX = [
    400,
    1600,
    2600
];
var endY = [
    200,
    150,
    150
];
var tabs = [
    [
        0,
        11
    ],
    [
        12,
        18
    ],
    [
        19,
        29
    ]
];
function action(f, h, k) {
    var b = cm.getNpc();
    if (b < 0 || b > 2) {
        cm.dispose();
        return;
    }
    var c = cm.getEventManager('副本_起源之塔');
    var a = c.getMapFactoryMap(cm.getMapId());
    var j = parseInt(c.getProperty('stage23_help_' + b));
    if (j >= 3) {
        cm.sendOk('这个地方的道路已经给你显示过3次了。为了留机会给其他人，这里我没法再帮你了。', 2540000);
        cm.dispose();
        return;
    }
    status++;
    var e = -1;
    if (status < 0) {
        cm.dispose();
    } else {
        if (status === 0) {
            cm.curNodeEventEnd(true);
            cm.setInGameDirectionMode(true, true);
            cm.setStandAloneMode(true);
            cm.inGameDirectionEvent_AskAnswerTime(500);
        } else {
            if (status === 1) {
                cm.sendNextNoESC('现在我会在很短的时间内为你显示被毁坏的道路，因为次数有限，一定要看仔细了！', 2540000);
            } else {
                if (status === 2) {
                    cm.inGameDirectionEvent_PushMoveInfo(0, 600, endX[b], endY[b]);
                } else {
                    if (status === 3) {
                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                    } else {
                        if (status >= 4 && status <= 4 + tabs[b][1] - tabs[b][0]) {
                            var d = a.getReactorByName(tabs[b][0] + status - 4);
                            d.forceHitReactor(cm.getPlayer(), 1);
                            cm.inGameDirectionEvent_AskAnswerTime(500);
                        } else {
                            if (status === 5 + tabs[b][1] - tabs[b][0]) {
                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                            } else {
                                if (status === 6 + tabs[b][1] - tabs[b][0]) {
                                    cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                                } else {
                                    if (status === 7 + tabs[b][1] - tabs[b][0]) {
                                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                                    } else {
                                        if (status === 8 + tabs[b][1] - tabs[b][0]) {
                                            cm.curNodeEventEnd(true);
                                            cm.setInGameDirectionMode(false, true);
                                            cm.setStandAloneMode(false);
                                            cm.dispose();
                                            var g = parseInt(c.getProperty('stage23_stage'));
                                            c.setProperty('stage23_stage', Math.max(g, b + 1));
                                            c.setProperty('stage23_help_' + b, j + 1);
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