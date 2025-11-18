var 购买神秘徽章价格 = 10000;
var 强化神秘徽章价格 = 10000;
var 升级神秘徽章价格 = 10000;
var 开启神秘6格价格 = 100000;
var 选择的神秘徽章ID;
var status = -1;
var selectionLog = [];
function start() {
    action(1, 0, 0);
}
function action(d, h, k) {
    var j = cm.getConstantScriptContent('菜单_NPC立绘');
    var e = Math.floor(Math.random() * j.length);
    var b = j[e][0];
    var g = randomNum(0, j[e][1]);
    if (cm.getzhizunvip() != 2) {
        cm.dispose();
        cm.playerMessage(1, '该菜单是至尊版专享。');
        return;
    }
    if (status == 0 && d == 0) {
        cm.dispose();
        return;
    }
    d == 1 ? status++ : status--;
    selectionLog[status] = k;
    var c = -1;
    if (status <= c++) {
        cm.dispose();
    } else {
        if (status === c++) {
            var a = '#face' + g + '##fn方正粗黑宋简体#';
            a += '  亲爱的 #r#h ##k 欢迎光临BMS神秘中心#k\r\n#fs15#';
            a += '   #g【购买徽章】#k想买哪个徽章：\r\n';
            a += ' #b#L1##v1712001##l ';
            a += ' #b#L2##v1712002##l ';
            a += ' #b#L3##v1712003##l ';
            a += ' #b#L4##v1712004##l ';
            a += ' #b#L5##v1712005##l ';
            a += ' #b#L6##v1712006##l \r\n\r\n#k';
            a += '   #g【栏位强化】#b  #L9#[1]#l#L10#[2]#l#L11#[3]#l#L12#[4]#l#L13#[5]#l#L14#[6]#l#k\r\n';
            a += '   #g【等级提升】#b  #L15#[1]#l#L16#[2]#l#L17#[3]#l#L18#[4]#l#L19#[5]#l#L20#[6]#l#k\r\n';
            a += '   #g【调试操作】#b  #L7#一键神秘6格#l  #L8#增幅神秘徽章#l#k\r\n';
            cm.askMenu_Bottom(a, 204, b);
        } else {
            if (status === c++) {
                switch (k) {
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                case 6:
                    选择的神秘徽章ID = 1712000 + k;
                    cm.askNumber_Bottom('#face' + g + '#请输入你购买#v' + 选择的神秘徽章ID + '##z' + 选择的神秘徽章ID + '#的数量。', 1, 1, 66);
                    对话 = 1;
                    break;
                case 7:
                    对话 = 2;
                    cm.askAcceptDecline_Bottom('#face' + g + '#一键开始神秘徽章6个格子\r\n需要消费10,0000点券，你想清楚了吗？');
                    break;
                case 8:
                    cm.dispose();
                    cm.openNpc(1022003, 1);
                    break;
                case 9:
                    对话 = 3;
                    强化徽章位置 = -1600;
                    cm.askNumber_Bottom('#face' + g + '##g栏位[1]#k 请输入你想要强化的次数(' + 强化神秘徽章价格 + '点券/次)：', 1, 1, 20);
                    break;
                case 10:
                    对话 = 3;
                    强化徽章位置 = -1601;
                    cm.askNumber_Bottom('#face' + g + '##g栏位[2]#k 请输入你想要强化的次数(' + 强化神秘徽章价格 + '点券/次)：', 1, 1, 20);
                    break;
                case 11:
                    对话 = 3;
                    强化徽章位置 = -1602;
                    cm.askNumber_Bottom('#face' + g + '##g栏位[3]#k 请输入你想要强化的次数(' + 强化神秘徽章价格 + '点券/次)：', 1, 1, 20);
                    break;
                case 12:
                    对话 = 3;
                    强化徽章位置 = -1603;
                    cm.askNumber_Bottom('#face' + g + '##g栏位[4]#k 请输入你想要强化的次数(' + 强化神秘徽章价格 + '点券/次)：', 1, 1, 20);
                    break;
                case 13:
                    对话 = 3;
                    强化徽章位置 = -1604;
                    cm.askNumber_Bottom('#face' + g + '##g栏位[5]#k 请输入你想要强化的次数(' + 强化神秘徽章价格 + '点券/次)：', 1, 1, 20);
                    break;
                case 14:
                    对话 = 3;
                    强化徽章位置 = -1605;
                    cm.askNumber_Bottom('#face' + g + '##g栏位[6]#k 请输入你想要强化的次数(' + 强化神秘徽章价格 + '点券/次)：', 1, 1, 20);
                    break;
                case 15:
                    对话 = 4;
                    升级徽章位置 = -1600;
                    cm.askNumber_Bottom('#face' + g + '##g栏位[1]#k 请输入你想要提升的级数(' + 升级神秘徽章价格 + '点券/次)：', 1, 1, 20);
                    break;
                case 16:
                    对话 = 4;
                    升级徽章位置 = -1601;
                    cm.askNumber_Bottom('#face' + g + '##g栏位[2]#k 请输入你想要提升的级数(' + 升级神秘徽章价格 + '点券/次)：', 1, 1, 20);
                    break;
                case 17:
                    对话 = 4;
                    升级徽章位置 = -1602;
                    cm.askNumber_Bottom('#face' + g + '##g栏位[3]#k 请输入你想要提升的级数(' + 升级神秘徽章价格 + '点券/次)：', 1, 1, 20);
                    break;
                case 18:
                    对话 = 4;
                    升级徽章位置 = -1603;
                    cm.askNumber_Bottom('#face' + g + '##g栏位[4]#k 请输入你想要提升的级数(' + 升级神秘徽章价格 + '点券/次)：', 1, 1, 20);
                    break;
                case 19:
                    对话 = 4;
                    升级徽章位置 = -1604;
                    cm.askNumber_Bottom('#face' + g + '##g栏位[5]#k 请输入你想要提升的级数(' + 升级神秘徽章价格 + '点券/次)：', 1, 1, 20);
                    break;
                case 20:
                    对话 = 4;
                    升级徽章位置 = -1605;
                    cm.askNumber_Bottom('#face' + g + '##g栏位[6]#k 请输入你想要提升的级数(' + 升级神秘徽章价格 + '点券/次)：', 1, 1, 20);
                    break;
                }
            } else {
                if (status === c++) {
                    if (对话 == 1) {
                        if (cm.getSpace(1) < k) {
                            cm.getTopMsgFont('背包空间不足。', 3, 20, 4, 0, 0);
                            cm.dispose();
                            return;
                        }
                        if (cm.getPlayer().getCSPoints(1) < 购买神秘徽章价格 * k) {
                            cm.getTopMsgFont('抱歉，你没足够的点卷！本次需要点卷' + 购买神秘徽章价格 * k, 3, 20, 4, 0, 0);
                            cm.dispose();
                            return;
                        } else {
                            cm.getPlayer().modifyCSPoints(1, -购买神秘徽章价格 * k);
                            for (var c = 0; c < k; c++) {
                                cm.gainItem(选择的神秘徽章ID, 1);
                            }
                            cm.getTopMsgFont('成功购买:' + k + '个', 3, 20, 20, 0);
                            cm.dispose();
                            cm.openNpc(9110002, '神秘力量_至尊版');
                        }
                    } else {
                        if (对话 == 2) {
                            if (cm.getPlayer().getCSPoints(1) < 开启神秘6格价格) {
                                cm.dispose();
                                cm.getTopMsgFont('点券不足' + 开启神秘6格价格 + '', 3, 20, 4, 0, 0);
                                return;
                            }
                            cm.getPlayer().forceCompleteQuest(34478);
                            cm.getPlayer().modifyCSPoints(1, -开启神秘6格价格);
                            cm.getTopMsgFont('成功开启神秘徽章6格背包', 3, 20, 20, 0);
                            status = -1;
                        } else {
                            if (对话 == 3) {
                                if (cm.getPlayer().getCSPoints(1) < 强化神秘徽章价格 * k) {
                                    cm.getTopMsgFont('抱歉，你没足够的点卷！本次需要点卷' + 强化神秘徽章价格 * k, 3, 20, 4, 0, 0);
                                    cm.dispose();
                                    return;
                                }
                                if (cm.getPlayer().isGM()) {
                                    cm.playerMessage(5, ' ' + 强化徽章位置 + ' ');
                                }
                                for (var c = 0; c < k; c++) {
                                    点卷强化神秘徽章(强化徽章位置);
                                }
                                cm.getPlayer().modifyCSPoints(1, -强化神秘徽章价格 * k);
                                cm.addPopupSay(b, 2200, '#face' + g + '#强化了' + k + '次\r\n扣除费用 ' + 强化神秘徽章价格 * k + ' 点券');
                                cm.dispose();
                            } else {
                                if (对话 == 4) {
                                    if (cm.getPlayer().getCSPoints(1) < 升级神秘徽章价格 * k) {
                                        cm.getTopMsgFont('抱歉，你没足够的点卷！本次需要点卷' + 升级神秘徽章价格 * k, 3, 20, 4, 0, 0);
                                        cm.dispose();
                                        return;
                                    }
                                    if (cm.getPlayer().isGM()) {
                                        cm.playerMessage(5, ' ' + 升级神秘徽章价格 + ' ');
                                    }
                                    var f = cm.getItemByPosition(升级徽章位置);
                                    if (f.getArc().getLevel() >= 20) {
                                        cm.dispose();
                                        cm.getTopMsgFont('已经是最大等级了亲', 3, 20, 4, 0, 0);
                                        return;
                                    }
                                    for (var c = 0; c < k; c++) {
                                        神秘徽章提升等级(升级徽章位置);
                                    }
                                    cm.getPlayer().modifyCSPoints(1, -升级神秘徽章价格 * k);
                                    cm.addPopupSay(b, 2200, '#face' + g + '#升级了' + k + '次\r\n扣除费用 ' + 升级神秘徽章价格 * k + ' 点券');
                                    cm.dispose();
                                } else {
                                    cm.dispose();
                                    cm.playerMessage(-1, '出现错误联系管理员' + 对话);
                                    return;
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
function 点卷强化神秘徽章(a) {
    var b = cm.getItemByPosition(a);
    if (b != null) {
        b.getArc().setPower(b.getArc().getPower() + 100);
        cm.getPlayer().forceUpdateItem(b);
        cm.getPlayer().modifyCSPoints(1, -10000);
        cm.getTopMsgFont('神秘力量增加到' + b.getArc().getPower(), 3, 20, 20, 0);
        status = -1;
    } else {
        cm.getTopMsgFont('请先装备你的神秘徽章', 3, 20, 4, 0, 0);
        cm.dispose();
    }
}
function 神秘徽章提升等级(a) {
    if (cm.getPlayer().getCSPoints(1) < 10000) {
        cm.dispose();
        cm.sendOk('您的点卷不足10000');
        return;
    }
    var b = cm.getItemByPosition(a);
    if (b != null) {
        b.getArc().forceUpgrade(cm.getPlayer().getClient());
        cm.getPlayer().modifyCSPoints(1, -10000);
        cm.dispose();
    } else {
        cm.getTopMsgFont('请先装备你的神秘徽章', 3, 20, 4, 0, 0);
        cm.dispose();
    }
}
function randomNum(b, a) {
    switch (arguments.length) {
    case 1:
        return parseInt(Math.random() * b + 1, 10);
        break;
    case 2:
        return parseInt(Math.random() * (a - b + 1) + b, 10);
        break;
    default:
        return 0;
        break;
    }
}