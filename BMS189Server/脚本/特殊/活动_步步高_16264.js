var status = -1;
var selectionLog = [];
var QuestID = 16264;
var Level = 50;
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
            cm.askMenu('#e#r<步步高>#n\r\n\r\n#b查看步数：#r3\r\n#b完成条件：#r发动1次<向导>\r\n#b任务奖励：#r#i5044002:# x 1(有效期10080分钟)、#i2434268:# x 1、#i2450062:# x 1、#i4001832:# x 100、#i4001839:# x 100、#i2000019:# x 200\r\n\r\n#r#L0#再次听取任务说明#l\r\n', 0, 9001194);
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
            cm.setNumberForQuestInfo(16260, 'step', 4);
            cm.setNumberForQuestInfo(16260, 'state', 3);
            cm.gainItem(2000019, 1);
            cm.gainItem(2434267, 1);
            cm.gainItem(2450062, 1);
            cm.gainItem(4001832, 100);
            cm.gainItem(4001839, 100);
            cm.gainItem(2000019, 300);
            cm.setNumberForQuestInfo(16260, 'step', 5);
            cm.setNumberForQuestInfo(16260, 'state', 0);
            cm.sendNormalTalk('#e#r<步步高>#n\r\n\r\n#b40级步步高任务#k - 奖励内容已经发放#k！\r\n\r\n#fUI/UIWindow2.img/Quest/quest_info/summary_icon/reward#\r\n#r#r#i2000019:# x 300、#i2434267:# x 1、#i2450062:# x 1、#i4001832:# x 100、#i4001839:# x 100', 0, 9001194, false, false);
        } else {
            if (status === a++) {
                cm.dispose();
            }
        }
    }
}
function action任务说明(d, c, b, a) {
    if (status <= a++) {
        cm.sendNormalTalk('\r\n这次要了解的内容是\r\n#b#e<向导>#n#k。', 0, 9001194, false, true);
    } else {
        if (status === a++) {
            cm.sendNormalTalk('\r\n#b#e<向导>#n#k是\r\n为你#b推荐冒险岛世界存在的各种内容#k的UI。', 0, 9001194, true, true);
        } else {
            if (status === a++) {
                cm.sendNormalTalk('\r\n#b向导#k的使用方法很简单。\r\n#b输入向导快捷键#k后#e（基本快捷键：U键）#n，\r\n\r\n              #fUI/UIWindow6.img/novaStepUp/pic/4_2#\r\n\r\n点击画面上显示的向导UI的按钮时，可以查看该内容的详细信息。\r\n\r\n                   #fUI/UIWindow6.img/novaStepUp/pic/4_3#\r\n\r\n只要在这里点击#r移动按钮#k，就能移动到指定的地区。', 0, 9001194, true, true);
            } else {
                if (status === a++) {
                    cm.sendNormalTalk('\r\n#b不满足#k该内容要求的等级或任务条件时，\r\n#r移动按钮#k将无法使用。\r\n\r\n#r这一点请一定要注意。', 0, 9001194, true, true);
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk('\r\n在向导UI打开的状态下，\r\n#b再按一次快捷键#k或点击右上方的#b[+]按钮#k时，\r\n还可以查看显示各等级推荐地区和内容的\r\n#r内容地图#k。', 0, 9001194, true, true);
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk('\r\n#b[步步高任务：Lv.50]#k\r\n是#b#e<通过向导移动到目标地区>#n#k。\r\n为了方便勇士执行任务，\r\n我来帮你打开#b向导#kUI。\r\n\r\n做好移动到#e#b向导#kUI的准备了吗？#n', 0, 9001194, true, true);
                        } else {
                            if (status === a++) {
                                if (cm.getQuestStatus(QuestID) == 0) {
                                    cm.updateInfoQuest(QuestID, '');
                                    cm.forceStartQuest(QuestID, '');
                                    cm.setNumberForQuestInfo(16260, 'step', 4);
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