var text;
var pass = true;
var doubles = false;
var textND;
var selects;
var gifts = Array(Array(2630152, 1), Array(2439913, 1), Array(2439486, 1), Array(2630300, 1), Array(2434515, 1), Array(2432518, 1), Array(2435205, 1), Array(2434618, 1), Array(2435517, 1), Array(2435476, 1), Array(2435441, 1), Array(2434127, 1), Array(2439331, 1), Array(2630232, 1), Array(2439933, 1), Array(2439915, 1), Array(2439909, 1), Array(2630585, 1), Array(2630240, 1), Array(2431950, 1), Array(2437497, 1), Array(2439127, 1), Array(2438882, 1), Array(2438638, 1), Array(2430908, 1), Array(2436524, 1), Array(2438340, 1), Array(2438486, 1), Array(2434236, 2), Array(2630399, 2), Array(2439329, 2), Array(2630234, 2), Array(2439808, 2), Array(2439675, 2), Array(2438549, 2), Array(2439295, 2), Array(2438373, 2), Array(3994592, 300));
var skillbook = Array();
var item;
var points;
function start() {
    status = -1;
    action(1, 0, 0);
}
function action(f, e, d) {
    if (status >= 0 && f == 0) {
        cm.dispose();
        return;
    }
    if (f == 1) {
        status++;
    } else {
        status--;
    }
    if (cm.getzhizunvip() != 2) {
        cm.dispose();
        cm.playerMessage(1, '该菜单是至尊版专享。');
        return;
    }
    if (status == 0) {
        if (cm.MissionStatus(cm.getPlayer().getId(), 202, 0, 4) == false) {
            cm.MissionMake(cm.getPlayer().getId(), 202, 1, 1000 * 60 * 60 * 12, 0, 0);
        }
        if (cm.MissionStatus(cm.getPlayer().getId(), 203, 0, 4) == false) {
            cm.MissionMake(cm.getPlayer().getId(), 203, 0, 0, 0, 201);
        }
        if (cm.MissionStatus(cm.getPlayer().getId(), 204, 0, 4) == false) {
            cm.MissionMake(cm.getPlayer().getId(), 204, 0, 0, 0, 202);
        }
        cm.askMenu('欢迎使用#r' + cm.getServerName() + '#k签到系统！\r\nID：#h0#\r\n数字账号：' + cm.getClient().getAccountName() + '\r\n#L0# #fUI/UIToolTip.img/Item/Equip/Star/Star# 我想进行每日报到。\r\n#L1# #fUI/UIToolTip.img/Item/Equip/Star/Star# 查询积分&兑换物品');
    } else {
        if (status == 1) {
            if (d == 0) {
                text = '#h0#，你确定要记录今天的生活吗？\r\n#r记录成功后，你会获得点数1点。\r\n获得的点数可以获得很多宝贝哦！';
                cm.askYesNo(text);
            } else {
                if (d == 1) {
                    textND = '累计签到：' + cm.MissionGetMinNum(cm.getPlayer().getId(), 203, 201) + '天  签到点数：' + cm.MissionGetMinNum(cm.getPlayer().getId(), 204, 202) + '点\r\n请问你想获取什么宝贝？\r\n#b';
                    for (var b = 0; b < gifts.length; b++) {
                        textND += '#L' + b + '# #v' + gifts[b][0] + '##z' + gifts[b][0] + '# ' + gifts[b][1] + '积分\r\n';
                    }
                    cm.askMenu(textND);
                    status = 3;
                }
            }
        } else {
            if (status == 2) {
                if (cm.MissionStatus(cm.getPlayer().getId(), 202, 0, 2)) {
                    if (doubles) {
                        cm.MissionAddMinNum(cm.getPlayer().getId(), 204, 1);
                    }
                    cm.MissionAddMinNum(cm.getPlayer().getId(), 204, 1);
                    cm.MissionAddMinNum(cm.getPlayer().getId(), 203, 1);
                    cm.gainItem(4031454, 10);
                    cm.worldMessage('[每日签到] ' + cm.getPlayer().getName() + '玩家通过拍卖小助手进行了每日签到，获得了积分。');
                    cm.playerMessage(-1, '今日通过每日报到获取到了点数！共报到了 ' + cm.MissionGetMinNum(cm.getPlayer().getId(), 204, 202) + ' 次！');
                    cm.MissionFinish(cm.getPlayer().getId(), 202);
                    status = 6;
                    cm.finishActivity(120101);
                    cm.askMenu('报到成功了，目前你一共报到了' + cm.MissionGetMinNum(cm.getPlayer().getId(), 204, 202) + '次。\r\n\r\n - 现在新增了人品测试功能，想进行人品测试吗？\r\n#b#L0# 人品测试。');
                } else {
                    cm.sendNext('你今日已经报到过了，不能再报到了哦~');
                    cm.dispose();
                }
            } else {
                if (status == 4) {
                    selects = d;
                    points = gifts[selects][1];
                    item = gifts[selects][0];
                    cm.askYesNo('现在要用' + points + '点数换取#b#z' + item + '##k吗？');
                } else {
                    if (status == 5) {
                        pass = true;
                        if (cm.MissionGetMinNum(cm.getPlayer().getId(), 204, 202) >= points) {
                            for (var b = 1; b < 5; b++) {
                                if (cm.getSpace(b) < 1) {
                                    pass = false;
                                }
                            }
                            if (pass) {
                                if (item == 2022100) {
                                    cm.gainItem(item, 5);
                                } else {
                                    cm.gainItem(item, 1);
                                }
                                cm.MissionAddMinNum(cm.getPlayer().getId(), 204, -points);
                                cm.sendOk('换取成功！获得了#z' + item + '#.');
                            } else {
                                cm.sendOk('已经获取了道具，或者所有背包栏目是否都有一个以上的空格？');
                            }
                            cm.dispose();
                        } else {
                            status = -1;
                            cm.sendOk('你的点数不够，不能获取哦~');
                            cm.dispose();
                        }
                    } else {
                        if (status == 6) {
                            selects = d;
                            item = skillbook[selects];
                            points = 2;
                            status = 4;
                            cm.askYesNo('现在要用' + points + '点数换取#b#z' + item + '##k吗？');
                        } else {
                            if (status == 7) {
                                var c = Math.floor(Math.random() * 1);
                                var a = '什么事情都没发生。';
                                switch (c) {
                                case 0:
                                    cm.gainItem(5840006, 1);
                                    a = '获得了特殊道具 伤害皮肤万花筒钥匙x1';
                                    break;
                                case 1:
                                    cm.gainItem(5840006, 1);
                                    a = '获得了特殊道具 伤害皮肤万花筒钥匙x1';
                                    break;
                                }
                                cm.sendOk('通过人品测试获取到了下面的信息：#b\r\n' + a);
                                cm.worldMessage('[每日签到-人品测试] ' + cm.getPlayer().getName() + '玩家' + a);
                                cm.dispose();
                            }
                        }
                    }
                }
            }
        }
    }
}