var status = -1;
var selectionLog = [];
function start() {
    action(1, 0, 0);
}
function action(c, b, a) {
    if (cm.getLevel() < 33) {
        cm.dispose();
        cm.sendNext_Bottom('需要达到33级才能参与活动！', 2400010);
        return;
    }
    if (cm.getQuestStatus(16262) == 0) {
        action0(c, b, a);
    } else {
        if (cm.getQuestStatus(16262) == 1) {
            action1(c, b, a);
        } else {
            if (cm.getQuestStatus(16262) == 2) {
                action2(c, b, a);
            } else {
                cm.dispose();
            }
        }
    }
}
function action0(mode, type, selection) {
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
function action1(mode, type, selection) {
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
            cm.askMenu('#e#r<步步高>#n\r\n\r\n#b查看步数：#r2\r\n#b完成条件：#r获得1次<连续击杀>宝珠\r\n#b任务奖励：#r#i2000019:# x 300、#i2434267:# x 1、#i2450062:# x 1、#i4001832:# x 100、#i4001839:# x 100\r\n\r\n#r#L0#再次听取任务说明#l\r\n#b#L100#传送到 - #m103030000##l', 0, 9001194);
        } else {
            var reactor = 'action分支' + selectionLog[1];
            eval(reactor)(mode, type, selection, i);
        }
    }
}
function action2(d, c, b) {
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
            cm.updateInfoQuest(16260, 'reward=0100000000000000000000000000000000000000000000000000000;step=2;state=3;sTime=19/09/15/05/33');
            cm.gainItem(2000019, 1);
            cm.gainItem(2434267, 1);
            cm.gainItem(2450062, 1);
            cm.gainItem(4001832, 100);
            cm.gainItem(4001839, 100);
            cm.gainItem(2000019, 300);
            cm.updateInfoQuest(16260, 'reward=0100000000000000000000000000000000000000000000000000000;step=3;state=0;sTime=19/09/15/05/33');
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
        cm.sendNormalTalk('本次要了解的内容是\r\n#b#e<连续击杀>#n#k。\r\n\r\n\r\n\r\n\r\n                           #fUI/UIWindow6.img/novaStepUp/pic/2_0#\r\n在狩猎怪物时，你看到过像#b2COMBO，3COMBO……#k\r\n这样的特效吗？', 0, 9001194, false, true);
    } else {
        if (status === a++) {
            cm.sendNormalTalk('\r\n\r\n\r\n\r\n                           #fUI/UIWindow6.img/novaStepUp/pic/2_1#\r\n#每累积#b50连击#k时，可以获得#b经验值#k和#b移动速度提高#k增益的#b连杀珠#k。', 0, 9001194, true, true);
        } else {
            if (status === a++) {
                cm.sendNormalTalk('#e50～300连击:蓝色珠(经验值x5)\r\n350～700连击:紫色珠(经验值x7)\r\n750～999连击:红色珠(经验值x10)\r\n2000连击～:黄色珠(经验值x11)#n\r\n\r\n累积连击的同时，#b连杀珠#k也会随之升级，\r\n可以获得#b更高的经验值#k。', 0, 9001194, true, true);
            } else {
                if (status === a++) {
                    cm.sendNormalTalk('所以，在狩猎时如果能不间断地#b连续击杀#k，\r\n持续获得#b额外经验值#k当然是再好不过了。', 0, 9001194, true, true);
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk('补充一点，连续击杀不是消灭怪物的数量，\r\n#b而是#b1次消灭怪物的攻击累积1连击#k。\r\n也就是说，使用1次技能消灭3只怪物时，不是累积#r3连击#k，而是#b1连击#k。', 0, 9001194, true, true);
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk('#b[40级升级任务]#k需\r\n#b#e<获得1次连续击杀宝珠>#n#k。\r\n累积连击50生成连续击杀宝珠后\r\n令宝珠触碰身体即可获得。', 0, 9001194, true, true);
                        } else {
                            if (status === a++) {
                                if (cm.getQuestStatus(16262) == 0) {
                                    cm.updateInfoQuest(16262, '');
                                    cm.forceStartQuest(16262, '');
                                    cm.updateInfoQuest(16260, 'reward=0100000000000000000000000000000000000000000000000000000;step=2;state=1;sTime=19/09/15/05/33');
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
        cm.warp(103030000, 2, false);
        cm.dispose();
    }
}