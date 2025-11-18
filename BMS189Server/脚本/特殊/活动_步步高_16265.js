var status = -1;
var selectionLog = [];
var QuestID = 16265;
var Level = 55;
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
    if (cm.getLevel() >= 70 && cm.isjob3h()) {
        cm.forceCompleteQuest(QuestID);
        cm.setNumberForQuestInfo(16260, 'state', 2);
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
            cm.askMenu('#e#r<步步高>#n\r\n\r\n#b查看步数：#r3\r\n#b完成条件：#r<第3次转职>\r\n#b任务奖励：#r#i5044002:# x 1(有效期10080分钟)、#i2434268:# x 1、#i2450062:# x 1、#i4001832:# x 100、#i4001839:# x 100、#i2000019:# x 200\r\n\r\n#r#L0#再次听取任务说明#l\r\n', 0, 9001194);
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
        cm.sendNormalTalk('\r\n本次要了解的内容是\r\n#b#e<第3次转职>#n#k。', 0, 9001194, false, true);
    } else {
        if (status === a++) {
            cm.sendNormalTalk('\r\n升至#b60级#k后，\r\n#r可以通过[转职]#k任务进行#b#e<3转>#n#k。\r\n\r\n完成转职后就可以\r\n额外使用更加强大的#b3转技能#k了。', 0, 9001194, true, true);
        } else {
            if (status === a++) {
                cm.sendNormalTalk('\r\n#b[55级升级任务]#k需\r\n#b#e<达成第3次转职>#n#k。\r\n按照刚刚我所说明的那样，达成#b60级#k后\r\n#r完成[转职]#k任务。', 0, 9001194, true, true);
            } else {
                if (status === a++) {
                    if (cm.getQuestStatus(QuestID) == 0) {
                        cm.updateInfoQuest(QuestID, '');
                        cm.forceStartQuest(QuestID, '');
                        cm.setNumberForQuestInfo(16260, 'step', Questcoon);
                        cm.setNumberForQuestInfo(16260, 'state', 1);
                    }
                    cm.sendNormalTalk('那任务结束后见喽。\r\n祝你好运！', 0, 9001194, false, false);
                    if (cm.getLevel() >= 70 && cm.isjob3h()) {
                        cm.forceCompleteQuest(QuestID);
                        cm.setNumberForQuestInfo(16260, 'state', 2);
                    }
                    cm.dispose();
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