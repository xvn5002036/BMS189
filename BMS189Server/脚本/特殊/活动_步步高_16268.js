var status = -1;
var selectionLog = [];
var QuestID = 16268;
var Level = 68;
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
        cm.sendNormalTalk('\r\n本次要了解的内容是\r\n#b#e<精英怪物>#n#k。', 0, 9001194, false, true);
    } else {
        if (status === a++) {
            cm.sendNormalTalk('\r\n在猎场狩猎一定量以上的怪物时，\r\n#e精英首领怪#n的部下#b#e<精英怪物>#n#k就会出现了。', 0, 9001194, true, true);
        } else {
            if (status === a++) {
                cm.sendNormalTalk('\r\n#b精英怪物#k的外形和普通怪物相同，\r\n#r但是体积要更大几倍#k，相应的#r攻击力#k、#r体力#k、#b经验值#k也更高。不仅如此，精英怪物还可以使用特有#b技能#k。', 0, 9001194, true, true);
            } else {
                if (status === a++) {
                    cm.sendNormalTalk('\r\n看#b怪物名称#k之前的前缀，就可以知道#b精英怪物#k使用的特有技能了。\r\n\r\n例如，#b<无敌～>#k代表无敌技能，\r\n#b<反射～>#k代表反射技能。', 0, 9001194, true, true);
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk('\r\n#b精英怪物#k虽然很不好对付，但是狩猎它时有机会获得在普通怪物身上难以得到的#b稀有奖励#k。\r\n\r\n正因为这样，许多勇士才会特别期待精英怪物的出现吧？', 0, 9001194, true, true);
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk('\r\n#b[68级升级任务]#k需\r\n#b#e<狩猎1只精英怪物>#n#k。\r\n\r\n在当前猎场狩猎怪物数量累积到一定程度时，才会召唤出精英怪物，所以重要的是要坚持在一个地方狩猎', 0, 9001194, true, true);
                        } else {
                            if (status === a++) {
                                cm.askYesNo('你现在需要我帮你传送到相应地点吗？\r\n\r\n#b(接受后自动传送到 - #r#m105010100##b)', 0, 9001194);
                            } else {
                                if (status === a++) {
                                    if (cm.getQuestStatus(QuestID) == 0) {
                                        cm.updateInfoQuest(QuestID, '');
                                        cm.forceStartQuest(QuestID, '');
                                        cm.setNumberForQuestInfo(16260, 'step', Questcoon);
                                        cm.setNumberForQuestInfo(16260, 'state', 1);
                                    }
                                    cm.dispose();
                                    cm.warp(105010100, 4, false);
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
        cm.warp(105010100, 4, false);
        cm.dispose();
    }
}