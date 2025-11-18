var status = -1;
var selectionLog = [];
function start() {
    action(1, 0, 0);
}
function action(d, c, b) {
    if (status == 0 && d == 0) {
        cm.dispose();
        return;
    }
    if (cm.isQuestFinished(16401)) {
        check();
        cm.dispose();
        return;
    }
    d == 1 ? status++ : status--;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose();
    } else {
        if (status === a++) {
            cm.sendNormalTalk('\r\n呀吼噢噢~！\r\n今年万圣节我#e#fc0xFF662D91#万圣猫#k#n又回来了~~！', 4, 9010095, false, true);
        } else {
            if (status === a++) {
                cm.sendNormalTalk('\r\n和万圣猫一起~！\r\n#e狩猎加速！#fc0xFF662D91#<万圣节x加速>#k#n回来了！', 4, 9010095, true, true);
            } else {
                if (status === a++) {
                    cm.sendNormalTalk('\r\n#b#e<加速>#n#k从#b2019年10月23日维护后#k至#b11月05日晚11时59分#k发生#b很多变化#k是名副其实能够#b令狩猎加速#k的活动！', 4, 9010095, true, true);
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk('\r\n\r\n都有哪些变化呢~！', 4, 9010095, true, true);
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk('\r\n#b- #e精英怪物#n出现的#e更加#n频繁！\r\n- #e符文#n出现概率#e更高#n而且能够#e更加#n经常使用！\r\n- #e符文#n经验值效果变为双倍#e更加#n有效果！\r\n- #e突发任务#n每天通关次数#e更多#n变为双倍！\r\n- #e保罗&普利托#n出现频率#e更高#n！\r\n- #e火焰狼#n经验值变为1。5倍#e更加#n强大！\r\n- #eBOSS组队组建增益#n变为3倍，#e更加#n强大！', 4, 9010095, true, true);
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk('\r\n怎么样？是不是听着都觉得狩猎速度会变得更快？\r\n\r\n不仅如此！\r\n活动时间期间，还能进行#b#e9个每日任务#n#k，\r\n每次完成任务时都能获得#b#e<加速箱>#n#k！', 4, 9010095, true, true);
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk('\r\n9个#b<加速箱>#k中有丰厚的#b经验值#k和#b奖励#\r\n在等着你，每天都不要错过~！\r\n\r\n那就在#e狩猎加速！#fc0xFF662D91#<万圣节x加速>#k#n中\r\n体验狩猎和成长，享受万圣节的氛围吧~！', 4, 9010095, true, true);
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk('\r\n还有！\r\n\r\n每天完成所有#e#b9个<加速每日任务>#n#k后\r\n还有隐！藏！任！务！在等着你呢~？', 4, 9010095, true, true);
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk('\r\n#e#fc0xFF662D91#<万圣节x加速>#k#n专属特别隐藏任务礼物！\r\n我已经准备好了，你可以期待一下~！', 4, 9010095, true, true);
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk('\r\n想知道礼物是什么吗~？\r\n完成隐藏任务就知道了~！加油！嘿嘿！', 4, 9010095, true, true);
                                            } else {
                                                if (status === a++) {
                                                    cm.updateInfoQuest(16401, 'season=2018/10;str=正在挑战第1阶段箱子！请完成1个每日任务！');
                                                    cm.updateInfoQuest(16402, 'openBox=0;unlockBox=0');
                                                    cm.forceCompleteQuest(16401);
                                                    cm.openUI(1117);
                                                    cm.forceStartQuest(16403, '');
                                                    cm.forceStartQuest(16404, '');
                                                    cm.forceStartQuest(16405, '');
                                                    cm.updateInfoQuest(16406, '');
                                                    cm.forceStartQuest(16406, '');
                                                    cm.updateInfoQuest(16407, '');
                                                    cm.forceStartQuest(16407, '');
                                                    cm.updateInfoQuest(16408, '');
                                                    cm.forceStartQuest(16408, '');
                                                    cm.updateInfoQuest(16409, '');
                                                    cm.forceStartQuest(16409, '');
                                                    cm.updateInfoQuest(16410, '');
                                                    cm.forceStartQuest(16410, '');
                                                    cm.updateInfoQuest(16411, '');
                                                    cm.forceStartQuest(16411, '');
                                                    cm.forceStartQuest(16412, '');
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
}
function check() {
    var b = 0;
    var a = cm.getQuestRecord(16403);
    var d = parseInt(a.getCustomData());
    if (d >= 999) {
        b++;
    }
    var a = cm.getQuestRecord(16404);
    var d = parseInt(a.getCustomData());
    if (d >= 20) {
        b++;
    }
    var a = cm.getQuestRecord(16405);
    var d = parseInt(a.getCustomData());
    if (d >= 1) {
        b++;
    }
    var c = cm.getNumberFromQuestInfo(16406, 'count');
    if (c >= 3) {
        b++;
    }
    var c = cm.getNumberFromQuestInfo(16407, 'count');
    if (c >= 1) {
        b++;
    }
    var c = cm.getNumberFromQuestInfo(16408, 'RunAct');
    if (c >= 5) {
        b++;
    }
    var c = cm.getNumberFromQuestInfo(16409, 'suddenMissionCC');
    if (c >= 3) {
        b++;
    }
    var c = cm.getNumberFromQuestInfo(16410, 'ComboK');
    if (c >= 500) {
        b++;
    }
    var c = cm.getNumberFromQuestInfo(16411, 'MultiKC');
    if (c >= 100) {
        b++;
    }
    cm.setNumberForQuestInfo(16402, 'unlockBox', b);
    cm.forceStartQuest(16403);
    cm.forceStartQuest(16404);
    cm.forceStartQuest(16405);
    cm.forceStartQuest(16406);
    cm.forceStartQuest(16407);
    cm.forceStartQuest(16408);
    cm.forceStartQuest(16409);
    cm.forceStartQuest(16410);
    cm.forceStartQuest(16411);
    cm.forceStartQuest(16412);
    cm.openUI(1117);
}