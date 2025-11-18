var status = -1;
var selectionLog = [];
function start() {
    action(1, 0, 0);
}
var quests = [
    '狩猎等级范围怪物300只',
    '连续击杀达到100次',
    '击败每日首领怪物',
    '狩猎星之力怪物300只',
    '通关怪物公园1次',
    '发动1次在野外地区生成的符文',
    '狩猎精英怪物3只',
    '三连杀达到100次',
    '狩猎神秘河怪物300只'
];
var jobReqs = [
    [
        5,
        1,
        2,
        3,
        4,
        5,
        1,
        2,
        3,
        4,
        5,
        1,
        2,
        3
    ],
    [
        1,
        2,
        3,
        4,
        5,
        1,
        2,
        3,
        4,
        5,
        1,
        2,
        3,
        4
    ],
    [
        2,
        3,
        4,
        5,
        1,
        2,
        3,
        4,
        5,
        1,
        2,
        3,
        4,
        5
    ],
    [
        3,
        4,
        5,
        1,
        2,
        3,
        4,
        5,
        1,
        2,
        3,
        4,
        5,
        1
    ],
    [
        4,
        5,
        1,
        2,
        3,
        4,
        5,
        1,
        2,
        3,
        4,
        5,
        1,
        2
    ],
    [
        5,
        1,
        2,
        3,
        4,
        5,
        1,
        2,
        3,
        4,
        5,
        1,
        2,
        3
    ],
    [
        1,
        2,
        3,
        4,
        5,
        1,
        2,
        3,
        4,
        5,
        1,
        2,
        3,
        4
    ],
    [
        2,
        3,
        4,
        5,
        1,
        2,
        3,
        4,
        5,
        1,
        2,
        3,
        4,
        5
    ],
    [
        3,
        4,
        5,
        1,
        2,
        3,
        4,
        5,
        1,
        2,
        3,
        4,
        5,
        1
    ]
];
var rewardScores = [
    1000,
    2000,
    3000,
    4000,
    5000,
    6000,
    7000,
    8000,
    9000,
    10000
];
var rewardScoreStage;
function action(mode, type, selection) {
    var reactor = 'action' + cm.getNpc();
    eval(reactor)(mode, type, selection);
}
function action1(e, k, m) {
    if (status == 0 && e == 0) {
        cm.dispose();
        return;
    }
    e == 1 ? status++ : status--;
    selectionLog[status] = m;
    var d = -1;
    var h = cm.getNumberFromQuestInfo(500885, 'current');
    var j = new Date();
    var f = new Date('2020-06-10');
    var l = Math.floor((j - f) / (1000 * 60 * 60 * 24)) % jobReqs[0].length;
    var a = jobReqs[h - 1][l];
    var b = Math.floor(cm.getJob() % 1000 / 100);
    var c = 50 + (b == a ? 10 : 0) + (cm.getLevel() >= 200 ? 20 : 0);
    if (status <= d++) {
        cm.dispose();
    } else {
        if (status === d++) {
            cm.setNumberForQuestInfo(500886, 's' + h, cm.getPlayer().getId());
            for (var d = 1; d < h; d++) {
                if (cm.getNumberFromQuestInfo(500886, 's' + d) == cm.getPlayer().getId()) {
                    cm.sendNormalTalk('这个角色已经有参与战术性接力关卡的记录!\r\n单个角色 #r#e每天只能参与1个关卡#n#k!', 4, 9010010, false, false);
                    cm.dispose();
                    return;
                }
            }
            var g = '#e#fs15##b#h0##k#n#fs12# 要用这个角色来挑战战术性接力吗？';
            g += '\r\n\r\n#e<战术性接力 ' + h + ' 关>#n';
            g += '\r\n\r\n - 任务 : #b#e' + quests[h] + '#n#k';
            g += '\r\n - 达成职业奖励 : #e#r' + (b == a ? 'O (10分)' : 'X (0分)') + '#n#k';
            g += '\r\n - 达成等级奖励 : #e#r' + (cm.getLevel() >= 200 ? 'O (20分)' : 'X (0分)') + '#n#k';
            cm.askYesNo(g, 4, 9010010);
        } else {
            if (status === d++) {
                cm.setStringForQuestInfo(500885, 'date', cm.getNowTimeString('yyMMdd'));
                cm.forceStartQuest(100418 + h - 1, '');
                cm.updateInfoQuest(500904, 'cName=' + cm.getPlayer().getName() + ';CID=' + cm.getPlayer().getId());
                cm.setNumberForQuestInfo(500885, 'state', 1);
                cm.sendNormalTalk('好的！任务进展可在#e#b任务栏中确认#n#k！\r\n\r\n完成任务后一定要点击#r#e完成任务按钮#n#k确认，\r\n然后进入下一个任务，不要忘记！', 4, 9010010, false, false);
            } else {
                if (status === d++) {
                    cm.dispose();
                }
            }
        }
    }
}
function action2(e, j, l) {
    if (status == 0 && e == 0) {
        cm.dispose();
        return;
    }
    e == 1 ? status++ : status--;
    selectionLog[status] = l;
    var d = -1;
    var g = cm.getNumberFromQuestInfo(500885, 'current');
    var h = new Date();
    var f = new Date('2020-06-10');
    var k = Math.floor((h - f) / (1000 * 60 * 60 * 24)) % jobReqs[0].length;
    var a = jobReqs[g - 1][k];
    var b = Math.floor(cm.getJob() % 1000 / 100);
    var c = 50 + (b == a ? 10 : 0) + (cm.getLevel() >= 200 ? 20 : 0);
    if (status <= d++) {
        cm.dispose();
    } else {
        if (status === d++) {
            if (cm.getNumberFromQuestInfo(500904, 'CID') == cm.getPlayer().getId()) {
                cm.askMenu('要放弃关卡，使用其它角色执行吗？\r\n#L0# 什么都不做#l\r\n#L1# #r#e放弃#k#n正在进行的关卡。#l\r\n', 4, 9010010);
            } else {
                cm.sendNormalTalk('#e#fs15##b' + cm.getStringFromQuestInfo(500904, 'cName') + '#k#n#fs12# 已经在执行当前关卡了！', 4, 9010010, false, false);
                cm.dispose();
            }
        } else {
            if (status === d++) {
                if (l == 0) {
                    cm.dispose();
                } else {
                    cm.askYesNo('真的要放弃用 #e#fs15##b#h0##k#n#fs12# 来进行当前关卡吗？\r\n\r\n#b※ 单个角色每天只能完成1个关卡 \r\n.', 4, 9010010);
                }
            } else {
                if (status === d++) {
                    cm.setNumberForQuestInfo(500885, 'state', 0);
                    cm.forceForfeitQuest(100418 + g - 1);
                    cm.updateInfoQuest(500904, 'cName=0;CID=0');
                    cm.sendNormalTalk('要换成谁上阵呢？一定要想好了哦！', 4, 9010010, false, false);
                    cm.dispose();
                }
            }
        }
    }
}
function action3(e, k, n) {
    if (status == 0 && e == 0) {
        cm.dispose();
        return;
    }
    e == 1 ? status++ : status--;
    selectionLog[status] = n;
    var d = -1;
    var h = cm.getNumberFromQuestInfo(500885, 'current');
    var j = new Date();
    var f = new Date('2020-06-10');
    var m = Math.floor((j - f) / (1000 * 60 * 60 * 24)) % jobReqs[0].length;
    var a = jobReqs[h - 1][m];
    var b = Math.floor(cm.getJob() % 1000 / 100);
    var c = 50 + (b == a ? 10 : 0) + (cm.getLevel() >= 200 ? 20 : 0);
    if (status <= d++) {
        cm.dispose();
    } else {
        if (status === d++) {
            var g = '要使用#e#fs15##b#h0##k#n#fs12#角色完成任务吗？';
            g += '\r\n\r\n#e<战术性接力 ' + h + ' 关>#n';
            g += '\r\n\r\n - 任务 : #b#e' + quests[h] + '#n#k';
            g += '\r\n - 达成职业奖励 : #e#r' + (b == a ? 'O (10分)' : 'X (0分)') + '#n#k';
            g += '\r\n - 达成等级奖励 : #e#r' + (cm.getLevel() >= 200 ? 'O (20分)' : 'X (0分)') + '#n#k';
            cm.askYesNo(g, 4, 9010010);
        } else {
            if (status === d++) {
                cm.askYesNo('真的要用 #e#fs15##b#h0##k#n#fs12# 来完成任务吗?\r\n\r\n - 可获得的分数 : #r#e#fs15#' + c + '#n#k#fs12#\r\n\r\n#b※ 单个角色每天只能完成1个关卡 \r\n.', 4, 9010010);
            } else {
                if (status === d++) {
                    if (b == a) {
                        cm.setNumberForQuestInfo(500889, 's' + h, 1);
                    }
                    if (cm.getLevel() >= 200) {
                        cm.setNumberForQuestInfo(500890, 's' + h, 1);
                    }
                    cm.setNumberForQuestInfo(500886 + Math.floor((h - 1) / 3), 's' + h, cm.getPlayer().getId());
                    cm.setNumberForQuestInfo(500885, 'state', 0);
                    var l = cm.addNumberForQuestInfo(500885, 'total', c);
                    cm.addNumberForQuestInfo(500885, 'current', 1);
                    cm.addNumberForQuestInfo(100417, 'participate', 1);
                    cm.updateInfoQuest(500904, 'cName=0;CID=0');
                    if (h == 3) {
                        cm.sendNormalTalk('很好！完成关卡！\r\n这是完成第3关的特别奖励：\r\n  #i2438644:# #t2438644:# 1个\r\n  #i2450167:# #t2450167:# 2个', 4, 9010010, false, false);
                        cm.gainItem(2438644, 1);
                        cm.gainItem(2450167, 2);
                    } else {
                        if (h == 6) {
                            cm.sendNormalTalk('很好！完成关卡！\r\n这是完成第6关的特别奖励：\r\n  #i2630571:# #t2630571:# 1个\r\n  #i2450167:# #t2450167:# 2个', 4, 9010010, false, false);
                            cm.gainItem(2630571, 1);
                            cm.gainItem(2450167, 2);
                        } else {
                            if (h == 9) {
                                cm.sendNormalTalk('太好了！今天所有的关卡都完成了！\r\n这是完成第9关的特别奖励：\r\n  #i2631180:# #t2631180:# 1个\r\n  #i2450167:# #t2450167:# 2个', 4, 9010010, false, false);
                                cm.gainItem(2631180, 1);
                                cm.gainItem(2450167, 2);
                            } else {
                                cm.sendNormalTalk('很好！完成关卡！\r\n也去挑战看看下一个关卡吧！', 4, 9010010, false, false);
                            }
                        }
                    }
                    for (var d = 0; d < rewardScores.length; d++) {
                        if (l > rewardScores[d] && l - c < rewardScores[d]) {
                            rewardScoreStage = d;
                            return;
                        }
                    }
                    cm.dispose();
                } else {
                    if (status === d++) {
                        var g = '另外，这是达成了 #b' + rewardScores[rewardScoreStage] + '分#k的额外奖励！\r\n  ';
                        switch (rewardScoreStage) {
                        case 0:
                            g += '#i2630017:# #t2630017:# 1个';
                            cm.gainItem(2630017, 1);
                            break;
                        case 1:
                            g += '#i2631181:# #t2631181:# 1个';
                            cm.gainItem(2631181, 1);
                            break;
                        case 2:
                            g += '#i3018463:# #t3018463:# 1个';
                            cm.gainItem(3018463, 1);
                            break;
                        case 3:
                            g += '#i2439869:# #t2439869:# 5个';
                            cm.gainItem(2439869, 5);
                            break;
                        case 4:
                            g += '#i2730004:# #t2730004:# 10个';
                            cm.gainItem(2730004, 10);
                            break;
                        case 5:
                            g += '#i2630512:# #t2630512:# 20个';
                            cm.gainItem(2630512, 20);
                            break;
                        case 6:
                            g += '#i2439660:# #t2439660:# 1个';
                            cm.gainItem(2439660, 1);
                            break;
                        case 7:
                            g += '#i2439869:# #t2439869:# 15个';
                            cm.gainItem(2439869, 15);
                            break;
                        case 8:
                            g += '#i2439869:# #t2439869:# 25个';
                            cm.gainItem(2439869, 25);
                            break;
                        case 9:
                            g += '#i2048724:# #t2048724:# 1个 \r\n #i3018464:# #t3018464:# 1个';
                            g += '\r\n恭喜你#r#e完美通关#n#k了所有关卡！';
                            cm.gainItem(2048724, 1);
                            cm.gainItem(3018464, 1);
                            break;
                        }
                        cm.sendNormalTalk(g, 4, 9010010, false, false);
                    }
                }
            }
        }
    }
}