var status = 0;
var totAp = 0;
var statup;
var p;
var needMeso = 2000000;
var needLevel = 250;
var targetLevel = 10;
var count = 0;
var current;
var retap = 0;
function start() {
    p = cm.getPlayer();
    totAp = p.getRemainingAp() + p.getStats().getStr() + p.getStats().getDex() + p.getStats().getInt() + p.getStats().getLuk();
    if (p.getVip() <= 100) {
        retap = 50;
        count = 99;
    }
    retap = (cm.getRepairquency() + 1) * retap;
    status = -1;
    action(1, 0, 0);
}
function action(e, g, h) {
    if (e == -1) {
        cm.dispose();
    } else {
        if (e == 0) {
            cm.sendOk('好的, 请告诉我你确定需要 #b投胎转世#k.');
            cm.dispose();
        } else {
            if (e == 1) {
                status++;
            } else {
                status--;
            }
            if (status == 0) {
                var d = count - cm.getBossLog('转生');
                text = '转生需要 ' + needMeso + ' 金币 \r\n';
                text += '这是今天第 #d' + cm.getBossLog('转生') + '#k 次转生，您将成为 #b' + targetLevel + '#k 级的 #b新手#k。\r\n';
                text += '累积属性奖励 #r' + cm.getRepairquency() * 50 + '#k 点，你是否想#r转生#k?\r\n\r\n';
                cm.askYesNo(text);
            } else {
                if (status == 1) {
                    if (cm.getPlayer().getLevel() < needLevel) {
                        cm.sendOk('很抱歉，您需要' + needLevel + '级，才可以投胎转世.');
                        cm.dispose();
                    } else {
                        if (cm.getMeso() < needMeso) {
                            cm.sendOk('你没有' + needMeso + '金币,我不能帮你的忙哦.');
                            cm.dispose();
                        } else {
                            if (cm.getPlayer().getBossLog('转生') == count) {
                                cm.sendOk('今天您已经无法转生了。');
                                cm.dispose();
                            } else {
                                var k = cm.getItemByPosition(-10);
                                var f = cm.getItemByPosition(-11);
                                if (k || f != null) {
                                    if (cm.getSpace(1) >= 8) {
                                        cm.脱掉装备(-10);
                                        cm.脱掉装备(-11);
                                    } else {
                                        cm.sendOk('你因为带有副手装备,但是装备栏没有空位,无法为你提供转生服务!\r\n请保持8格以上的装备空位');
                                        cm.dispose();
                                        return;
                                    }
                                }
                                var c = cm.getInventory(0).getItem(-12);
                                var b = cm.getInventory(0).getItem(-13);
                                var a = cm.getInventory(0).getItem(-15);
                                var l = cm.getInventory(0).getItem(-16);
                                var j = cm.getInventory(0).getItem(-27);
                                var i = cm.getInventory(0).getItem(-28);
                                if (c != null && checkRingMessage(12)) {
                                    cm.sendOk('你带有天使祝福戒指,和恶魔戒指，请取下后再进行转生!');
                                    cm.dispose();
                                    return;
                                } else {
                                    if (b != null && checkRingMessage(13)) {
                                        cm.sendOk('你带有天使祝福戒指,和恶魔戒指，请取下后再进行转生!');
                                        cm.dispose();
                                        return;
                                    } else {
                                        if (a != null && checkRingMessage(15)) {
                                            cm.sendOk('你带有天使祝福戒指,和恶魔戒指，请取下后再进行转生!');
                                            cm.dispose();
                                            return;
                                        } else {
                                            if (l != null && checkRingMessage(16)) {
                                                cm.sendOk('你带有天使祝福戒指,和恶魔戒指，请取下后再进行转生!');
                                                cm.dispose();
                                                return;
                                            } else {
                                                if (j != null && checkRingMessage(27)) {
                                                    cm.sendOk('你带有天使祝福戒指,和恶魔戒指，请取下后再进行转生!');
                                                    cm.dispose();
                                                    return;
                                                } else {
                                                    if (i != null && checkRingMessage(28)) {
                                                        cm.sendOk('你带有天使祝福戒指,和恶魔戒指，请取下后再进行转生!');
                                                        cm.dispose();
                                                        return;
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                                cm.gainMeso(-needMeso);
                                cm.gainItem(4310003, 1);
                                cm.getPlayer().modifyCSPoints(2, 1000, true);
                                p.setLevel(targetLevel);
                                cm.getPlayer().resetStats(30, 30, 30, 30);
                                cm.getPlayer().resetAPSP();
                                cm.gainAp(cm.getRepairquency() * 50);
                                cm.gainRepairquency();
                                cm.setRepairXW(cm.getRepairXW() + 50);
                                cm.getPlayer().setBossLog('转生');
                                p.levelUp();
                                cm.worldMessage('『转生系统』 : 恭喜' + cm.getPlayer().getName() + ',转生了' + cm.getRepairquency() + '轮回,我又变强大了,快羡慕我吧!');
                                cm.dispose();
                                cm.openNpc(9300010, '转生剧情');
                            }
                        }
                    }
                }
            }
        }
    }
}
function checkRingMessage(b) {
    var a = cm.getInventory(0).getItem(-b);
    if (a.getItemId() == 1112585 || a.getItemId() == 1112586 || a.getItemId() == 1112594 || a.getItemId() == 1112663 || a.getItemId() == 1113010 || a.getItemId() == 1113009 || a.getItemId() == 1113008 || a.getItemId() == 1113003) {
        return true;
    }
}