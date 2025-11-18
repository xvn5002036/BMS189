var status = -1;
var selectionLog = [];
var QuestID = 16267;
var Level = 64;
var Questcoon = QuestID - 16260;
function start() {
    action(1, 0, 0);
}
function action(c, b, a) {
    if (cm.getLevel() < Level) {
        cm.dispose();
        cm.sendNext_Bottom('需要达到' + Level + '级才能参与活动！', 2400010);
        return;
    }
    if (cm.getQuestStatus(QuestID) == 0) {
        开始任务(c, b, a);
    } else {
        if (cm.getQuestStatus(QuestID) == 1) {
            已接受任务(c, b, a);
        } else {
            if (cm.getQuestStatus(QuestID) == 2) {
                奖励结算(c, b, a);
            } else {
                cm.dispose();
            }
        }
    }
}
function 开始任务(mode, type, selection) {
    if (status == 0 && mode == 0) {
        cm.dispose();
        return;
    }
    status++;
    selectionLog[status] = selection;
    var i = -1;
    if (status <= i++) {
        cm.dispose();
    } else {
        var reactor = 'action任务说明';
        eval(reactor)(mode, type, selection, i);
    }
}
function 已接受任务(mode, type, selection) {
    if (status == 0 && mode == 0) {
        cm.dispose();
        return;
    }
    status++;
    selectionLog[status] = selection;
    var i = -1;
    if (status <= i++) {
        cm.dispose();
    } else {
        if (status === i++) {
            cm.askMenu('#e#r<步步高>#n\r\n\r\n#b查看步数：#r3\r\n#b完成条件：#r<星之力强化>\r\n#b任务奖励：#r#i5044002:# x 1(有效期10080分钟)、#i2434268:# x 1、#i2450062:# x 1、#i4001832:# x 100、#i4001839:# x 100、#i2000019:# x 200\r\n\r\n#r#L0#再次听取任务说明#l\r\n', 0, 9001194);
        } else {
            var reactor = 'action分支' + selectionLog[1];
            eval(reactor)(mode, type, selection, i);
        }
    }
}
function 奖励结算(d, c, b) {
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
            cm.updateInfoQuest(500060, 'reward=0100000000000000000000000000000000000000000000000000000');
            cm.setNumberForQuestInfo(16260, 'step', Questcoon);
            cm.setNumberForQuestInfo(16260, 'state', 3);
            cm.gainItem(2000019, 1);
            cm.gainItem(2434267, 1);
            cm.gainItem(2450062, 1);
            cm.gainItem(4001832, 100);
            cm.gainItem(4001839, 100);
            cm.gainItem(2000019, 300);
            cm.setNumberForQuestInfo(16260, 'step', Questcoon + 1);
            cm.setNumberForQuestInfo(16260, 'state', 0);
            cm.sendNormalTalk('#e#r<步步高>#n\r\n\r\n#b40级步步高任务#k - 奖励内容已经发放#k！\r\n\r\n#fUI/UIWindow2.img/Quest/quest_info/summary_icon/reward#\r\n#r#r#i2000019:# x 300、#i2434267:# x 1、#i2450062:# x 1、#i4001832:# x 100、#i4001839:# x 100', 0, 9001194, false, false);
            cm.dispose();
        }
    }
}
function action任务说明(d, c, b, a) {
    if (status <= a++) {
        cm.sendNormalTalk('\r\n本次要了解的内容是\r\n#b#e<星之力强化>#n#k。', 0, 9001194, false, true);
    } else {
        if (status === a++) {
            cm.sendNormalTalk('      #fUI/UIWindow6.img/novaStepUp/pic/7_0#\r\n\r\n消耗了全部#b可升级次数#k的装备可以通过#b星之力强化#k再升一级。\r\n\r\n感觉就像#b发射2段加速#k一样？', 0, 9001194, true, true);
        } else {
            if (status === a++) {
                cm.sendNormalTalk('如果装备的#b升级强化次数#k已经全部用完，可以将其添加至#b装备强化UI#k进行星之力强化，\r\n然后点击#b<强化>#k按钮，就可以消耗#b星星#k进行#b星之力强化#k了。', 0, 9001194, true, true);
            } else {
                if (status === a++) {
                    cm.sendNormalTalk('强化阶段越高，#r成功率#k越低，#r强化费用#k也越多。不过，每达到特定强化阶段后，#b强化效果#k就会大幅增强。', 0, 9001194, true, true);
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk('      #fUI/UIWindow6.img/novaStepUp/pic/7_1#\r\n\r\n说起#b强化阶段#k，你看到装备道具提示条的道具名称上方#b空着的星星#k了吗？', 0, 9001194, true, true);
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk('      #fUI/UIWindow6.img/novaStepUp/pic/7_1#\r\n\r\n这里的星星表示#b星之力强化#k可以达到的程度。\r\n该装备可以强化至#b最高5星#k。', 0, 9001194, true, true);
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk('      #fUI/UIWindow6.img/novaStepUp/pic/7_2#\r\n\r\n现在的装备虽然有最高5星的限制，但是如果获得#b高等级#k的装备，就可以强化至#b最高25星#k。', 0, 9001194, true, true);
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk('#b[64级升级任务]#k是\r\n#b#e<装备5星星之力强化武器>#n#k。\r\n请在装备5星以上星之力强化武器的状态下，\r\n点击#b<任务进行中！>按钮#k。', 0, 9001194, true, true);
                                } else {
                                    if (status === a++) {
                                        if (cm.getQuestStatus(QuestID) == 0) {
                                            cm.updateInfoQuest(QuestID, '');
                                            cm.forceStartQuest(QuestID, '');
                                            cm.setNumberForQuestInfo(16260, 'step', Questcoon);
                                            cm.setNumberForQuestInfo(16260, 'state', 1);
                                        }
                                        cm.sendNormalTalk('那任务结束后见喽。\r\n祝你好运！', 0, 9001194, false, false);
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
function action分支0(mode, type, selection, i) {
    var reactor = 'action任务说明';
    eval(reactor)(mode, type, selection, i);
}
function action分支100(d, c, b, a) {
    if (status <= a++) {
        cm.warp(240030102, 0, false);
        cm.dispose();
    }
}