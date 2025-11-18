var status = -1;
var selectionLog = [];
var QuestID = 16266;
var Level = 60;
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
            cm.askMenu('#e#r<步步高>#n\r\n\r\n#b查看步数：#r3\r\n#b完成条件：#r<卷轴强化>\r\n#b任务奖励：#r#i5044002:# x 1(有效期10080分钟)、#i2434268:# x 1、#i2450062:# x 1、#i4001832:# x 100、#i4001839:# x 100、#i2000019:# x 200\r\n\r\n#r#L0#再次听取任务说明#l\r\n', 0, 9001194);
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
        cm.sendNormalTalk('\r\n本次要了解的内容是\r\n#b#e<卷轴强化>#n#k。', 0, 9001194, false, true);
    } else {
        if (status === a++) {
            cm.sendNormalTalk('\r\n\r\n你不会一直在#r原封不动#k地使用获得的#b装备#k吧？', 0, 9001194, true, true);
        } else {
            if (status === a++) {
                cm.sendNormalTalk('\r\n获得的装备可以通过各种#b强化#k\r\n进行#b升级#k，发挥更大的威力。\r\n\r\n不进行强化的装备就只是#r铁块#k而已，#r铁块#k。', 0, 9001194, true, true);
            } else {
                if (status === a++) {
                    cm.sendNormalTalk('\r\n首先，我来给你介绍当前阶段的多种强化方法中\r\n最为基础的一种，即#b卷轴强化#k。', 0, 9001194, true, true);
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk('      #fUI/UIWindow6.img/novaStepUp/pic/6_0#\r\n\r\n在装备道具提示条中看到一个叫做#b可升级次数#k的项目了吗？', 0, 9001194, true, true);
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk('      #fUI/UIWindow6.img/novaStepUp/pic/6_0#\r\n\r\n#b卷轴强化#k的允许次数与#b可升级次数#k一致。', 0, 9001194, true, true);
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk('\r\n#e装备强化快捷键#b(基本快捷键:O按钮)#k\r\n背包UI下方的#b#i03801213#装备强化按钮#k\r\n#k双击#n通过狩猎获得的#b#i4001832:# #t4001832:#，\r\n\r\n进行#b卷轴强化#k的#b装备强化UI#k可以通过与前面相同的方法打开。', 0, 9001194, true, true);
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk('打开#b装备强化UI#k后，添加你想要强化的装备，选择用于强化的#b卷轴#k。\r\n然后点击#b<强化>#k按钮，就会消耗#b#i4001832:##t4001832:##k，进行#b卷轴强化#k了。', 0, 9001194, true, true);
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk('\r\n每个卷轴的#b强化效果#k、#b成功率#k和所需的#b咒语痕迹数量#k都不同，所以请仔细考虑后再做决定。\r\n\r\n如果强化#b成功#k，会得到更强的装备，但是一旦#r失败#k，就白白浪费可升级次数了。', 0, 9001194, true, true);
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk('#b[60级升级任务]#k需\r\n在#e可升级次数#n达到#e0#n前\r\n#b#e<卷轴强化>#n#k#b一个装备#k。\r\n\r\n不如来强化一下先前任务奖励中\r\n获得的60级武器吧？', 0, 9001194, true, true);
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