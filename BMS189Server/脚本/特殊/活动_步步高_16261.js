var status = -1;
var selectionLog = [];
function start() {
    action(1, 0, 0);
}
function action(mode, type, selection) {
    var reactor = 'action' + cm.getNpc();
    eval(reactor)(mode, type, selection);
}
function action(mode, type, selection) {
    if (status == 0 && mode == 0) {
        cm.dispose();
        return;
    }
    mode == 1 ? status++ : status--;
    selectionLog[status] = selection;
    var i = -1;
    if (status <= i++) {
        cm.dispose();
    } else {
        if (status === i++) {
            if (cm.getQuestStatus(16261) == 2) {
                cm.askMenu('#e#r<步步高>#n\r\n\r\n#b当前步数：#r1\r\n#b完成条件：#r狩猎<等级范围怪物> #a162611# 只\r\n#b任务奖励：#r#i2435851:# x 1、#i2630493:# x 1、#i2434266:# x 1、#i2450062:# x 1、#i4001832:# x 100、#i4001839:# x 100、#i2000019:# x 200\r\n#k恭喜你完成了#b[33级步步高任务]#k！\r\n\r\n#b#L3#立刻领取任务奖励#l', 0, 9001194);
            } else {
                cm.askMenu('#e#r<步步高>#n\r\n\r\n#b查看步数：#r1\r\n#b完成条件：#r狩猎<等级范围怪物> #a162611# 只\r\n#b任务奖励：#r#i2435851:# x 1、#i2630493:# x 1、#i2434266:# x 1、#i2450062:# x 1、#i4001832:# x 100、#i4001839:# x 100、#i2000019:# x 200\r\n\r\n#r#L0#听取任务说明#l\r\n#b#L1#传送到 - #m101070100##l', 0, 9001194);
            }
        } else {
            var reactor = 'action分支' + selectionLog[1];
            eval(reactor)(mode, type, selection, i);
        }
    }
}
function action分支3(d, c, b, a) {
    if (status <= a++) {
        cm.updateInfoQuest(500060, 'reward=0100000000000000000000000000000000000000000000000000000');
        cm.updateInfoQuest(16260, 'reward=0100000000000000000000000000000000000000000000000000000;step=1;state=3;sTime=19/09/15/05/33');
        cm.gainItem(2435851, 1);
        cm.gainItem(2630493, 1);
        cm.gainItem(2434266, 1);
        cm.gainItem(2450062, 1);
        cm.gainItem(4001832, 100);
        cm.gainItem(4001839, 100);
        cm.gainItem(2000019, 200);
        cm.updateInfoQuest(16260, 'reward=0100000000000000000000000000000000000000000000000000000;step=2;state=0;sTime=19/09/15/05/33');
        cm.sendNormalTalk('#e#r<步步高>#n\r\n\r\n#b33级步步高任务#k - 奖励内容已经发放#k！\r\n\r\n#fUI/UIWindow2.img/Quest/quest_info/summary_icon/reward#\r\n#r#i2435851:# x 1、#i2630493:# x 1、#i2434266:# x 1、#i2450062:# x 1、#i4001832:# x 100、#i4001839:# x 100、#i2000019:# x 200', 0, 9001194, false, false);
    } else {
        if (status === a++) {
            cm.dispose();
        }
    }
}
function action分支1(d, c, b, a) {
    if (status <= a++) {
        if (cm.getQuestStatus(16261) == 0) {
            cm.sendNormalTalk('#b请先阅读任务说明。', 0, 9001194, false, false);
            cm.dispose();
            return;
        }
        cm.warp(101070100, 0, false);
        cm.dispose();
    } else {
        if (status === a++) {
            cm.dispose();
        }
    }
}
function action分支0(d, c, b, a) {
    if (status <= a++) {
        cm.sendNormalTalk('#b#h0##k，我是帮助你参加#b步步高#k活动#b<步步高得分>#k。\r\n\r\n从名字就能知道，我负责管理步步高最重要的\r\n#b<GOAL>栏#k。', 0, 9001194, false, true);
    } else {
        if (status === a++) {
            cm.sendNormalTalk('#b我的任务#k是让#b#h0##k#b一步步#k成长，最终成为#b#t3700388:##k勇士。\r\n在#b步步高#k活动期间，请多多关照。', 0, 9001194, true, true);
        } else {
            if (status === a++) {
                cm.sendNormalTalk('第一步马上开始喽。\r\n第一步要了解的内容是\r\n#b#e<等级范围怪物>#n#k。', 0, 9001194, true, true);
            } else {
                if (status === a++) {
                    cm.sendNormalTalk('成长的基础毋庸置疑，正是#b怪物狩猎#k。\r\n但是，为了获得高经验值就一味挑战#r高等级的怪物#k\r\n，并不是好方法。', 0, 9001194, true, true);
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk('狩猎等级差距#b不满10级#k的怪物。\r\n可以根据等级差值，获得#b经验值奖励#k。\r\n\r\n相反，狩猎差距#r超过10级#k的怪物时，\r\n则会根据等级差值，受到少许#r经验值惩罚#k。', 0, 9001194, true, true);
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk('如果等级差距在#r20级以上#k，不仅狩猎起来非常困难，也会受到#r大幅的经验值惩罚#k，\r\n\r\n这样反而会降低#b狩猎效率#k。\n', 0, 9001194, true, true);
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk('因此可以说，适合狩猎的怪物就是\r\n和自己的等级差距在#b20级以下#k的怪物。\r\n\r\n而这种怪物就是#b<等级范围怪物>#k。', 0, 9001194, true, true);
                            } else {
                                if (status === a++) {
                                    if (cm.getQuestStatus(16261) == 0) {
                                        cm.updateInfoQuest(16261, '');
                                        cm.forceStartQuest(16261, '');
                                        cm.updateInfoQuest(16260, 'reward=0000000000000000000000000000000000000000000000000000000;step=1;state=1;sTime=19/09/15/05/33');
                                    }
                                    cm.sendNormalTalk('#b[第一项升级任务]#k需\r\n#b#e<狩猎300只等级范围怪物>#n#k。\r\n\r\n请在等级差距不超过20级的怪物\r\n狩猎场，狩猎300只怪物。', 0, 9001194, false, false);
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