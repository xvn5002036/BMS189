var status = -1;
var selectionLog = [];
var maps = [
    100020200,
    102020300,
    101030000,
    400010400,
    103030100,
    105030400,
    200020000,
    211040100,
    230010300,
    260010400,
    261010101,
    221023100,
    401020400,
    240020100,
    220010000,
    211041100,
    250010400,
    224000120,
    240040520,
    251010100
];
function start() {
    status = -1;
    action(1, 0, 0);
}
function action(mode, type, selection) {
    var reactor = 'action' + cm.getNumberFromQuestInfo(500799, 'state');
    eval(reactor)(mode, type, selection);
}
function action0(d, c, b) {
    if (status == 0 && d == 0) {
        cm.dispose();
        return;
    }
    d == 1 ? status++ : status--;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose();
    } else {
        if (status == a++) {
            cm.sendNormalTalk('\r\n#b#h0##k，时空裂缝出现了。\r\n时空裂缝出现位置为#b#e#m' + maps[cm.getNumberFromQuestInfo(500799, 'index')] + '##n#k。', 4, 3004203, false, true);
        } else {
            if (status === a++) {
                cm.askYesNo('好，立即开始调查吧？\r\n\r\n#b', 4, 3004203);
            } else {
                if (status === a++) {
                    cm.setNumberForQuestInfo(500799, 'state', 1);
                    cm.sendNormalTalk('\r\n请立刻出发吧。\r\n\r\n（点击查看位置按钮，可以使用导航）', 4, 3004203, false, false);
                } else {
                    if (status === a++) {
                        cm.dispose();
                    }
                }
            }
        }
    }
}
function action1(d, c, b) {
    if (status == 0 && d == 0) {
        cm.dispose();
        return;
    }
    d == 1 ? status++ : status--;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose();
    } else {
        if (status == a++) {
            cm.sendNormalTalk('\r\n#b#h0##k，时空裂缝出现位置为#b#e#m' + maps[cm.getNumberFromQuestInfo(500799, 'index')] + '##n#k。', 4, 3004203, false, true);
        } else {
            if (status == a++) {
                cm.dispose();
            }
        }
    }
}
function action2(e, d, c) {
    if (status == 0 && e == 0) {
        cm.dispose();
        return;
    }
    e == 1 ? status++ : status--;
    selectionLog[status] = c;
    var a = -1;
    if (status <= a++) {
        cm.dispose();
    } else {
        if (status == a++) {
            cm.askYesNo('时空裂缝消失了啊。\r\n这是调查完成奖励，请收下吧。\r\n\r\n#r※ 每个世界仅限领取1次每周任务奖励。', 4, 3004203);
        } else {
            if (status === a++) {
                var f = cm.getNumberFromQuestInfo(500799, 'type') > 0 ? 5 : 1;
                cm.gainGloryEventPoint(2500 * f);
                cm.gainExp(15022500 * f);
                var b = cm.rand(0, 19);
                var d = cm.rand(1, 100) < 10 ? 1 : 0;
                cm.addNumberForQuestInfo(500799, 'complete', 1);
                cm.setNumberForQuestInfo(500799, 'state', 0);
                cm.setNumberForQuestInfo(500799, 'index', b);
                cm.setNumberForQuestInfo(500799, 'type', d);
                cm.addNumberForQuestInfo(500801, '' + b, 1);
                cm.playerMessage(5, '获得了' + 25 * f + '个荣耀币。');
                cm.sendNormalTalk('\r\n请你再去调查一下这次出现的时空裂缝吧。', 4, 3004203, false, false);
            } else {
                if (status === a++) {
                    cm.dispose();
                }
            }
        }
    }
}