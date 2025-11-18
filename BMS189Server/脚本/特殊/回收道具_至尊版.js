var 奖励_僵尸丢弃的金齿 = 4000082;
var 奖励_咒语痕迹 = 4001832;
var 金币奖励基数 = 40000;
function 得到装备等级并返回奖励基数(a) {
    if (a < 20) {
        return 0;
    } else {
        if (a >= 16 && a < 129) {
            return 3;
        } else {
            if (a >= 130 && a < 139) {
                return 5;
            } else {
                if (a >= 140 && a < 249) {
                    return 10;
                } else {
                    return 0;
                }
            }
        }
    }
}
function start() {
    status = -1;
    action(1, 0, 0);
}
function action(c, j, l) {
    var k = cm.getConstantScriptContent('菜单_NPC立绘');
    var f = Math.floor(Math.random() * k.length);
    var a = k[f][0];
    var i = randomNum(0, k[f][1]);
    if (status <= 0 && c == 0) {
        cm.dispose();
        cm.openNpc(0, '所有功能_至尊版');
        return;
    }
    if (status > 0 && c == 0) {
        cm.dispose();
        cm.openNpc(0, '回收道具_至尊版');
        return;
    }
    if (c == 1) {
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
        var n = '#face' + i + '##fn方正粗黑宋简体#';
        n += '     #fs17##r欢迎使用 ' + cm.getServerName() + ' 回收道具#fs15#\r\n';
        n += '      服务器时间：#b' + year + '年' + month + '月' + day + '日 ' + hour + '点' + min + '分' + sec + '秒 #r星期' + weekName[weekday] + '#n#k\r\n';
        n += '   #fs16##L0#查看回购说明#l\r\n#fs17#';
        n += '  #L1##b[道具] 自选回收#k #l ';
        n += '  #L2##b[道具] 一键回收#k #l\r\n';
        cm.askMenu_Bottom(n, 204, a);
    } else {
        if (status == 1) {
            switch (l) {
            case 0:
                var n = '#face' + i + '##fn方正粗黑宋简体#';
                n += '   #fs17##b回收说明 -  仔细阅读#k#fs15#\r\n';
                n += '   奖励分数个档次，装备等级越高奖励越好。\r\n';
                n += '   #fs16##r当前奖励道具为：#k#fs15#\r\n';
                n += '   #v' + 奖励_僵尸丢弃的金齿 + '# #z' + 奖励_僵尸丢弃的金齿 + '#\r\n';
                n += '   #v' + 奖励_咒语痕迹 + '# #z' + 奖励_咒语痕迹 + '#\r\n';
                n += '   金币奖励(基数)：' + 金币奖励基数 + ' x倍率 x数量\r\n';
                n += '\r\n';
                cm.askAcceptDecline_Bottom(n, 204, a);
                status = -1;
                break;
            case 1:
                var n = '#face' + i + '##fn方正粗黑宋简体#';
                inventoryType = 1;
                var h = cm.getInventory(inventoryType).list();
                itemList = h.iterator();
                n += '  #r #fs17#[ 自选 ]#fs16# 请选择需回购的道具：#n\r\n#b';
                var g = 1;
                var e = Array();
                while (itemList.hasNext()) {
                    var o = itemList.next();
                    if (cm.isCash(o.getItemId())) {
                        continue;
                    }
                    var b = cm.getReqLevel(o.getItemId());
                    if (b < 40 || b > 250) {
                        continue;
                    }
                    e[o.getPosition()] = o.getItemId();
                }
                for (var m in e) {
                    n += '#L' + m + '##v' + e[m] + '#';
                    if (g > 1 && g % 9 == 0) {
                        n += '\r\n';
                    }
                    g++;
                }
                typed = 1;
                if (g > 1) {
                    cm.askMenu_Bottom(n, 204, a);
                } else {
                    cm.dispose();
                    cm.openNpc(0, '回收道具_至尊版');
                    cm.getTopMsgFont('背包内无可回收道具', 3, 20, 4, 0, 0);
                }
                break;
            case 2:
                var n = '#face' + i + '##fn方正粗黑宋简体#';
                inventoryType = 1;
                var h = cm.getInventory(inventoryType).list();
                itemList = h.iterator();
                n += '  #r #fs17#[ 一键 ]#fs16# 是否将这些道具进行回购： #n\r\n\r\n#b';
                var g = 1;
                var e = Array();
                while (itemList.hasNext()) {
                    var o = itemList.next();
                    if (cm.isCash(o.getItemId())) {
                        continue;
                    }
                    var b = cm.getReqLevel(o.getItemId());
                    if (b >= 100 && b < 250) {
                        e[o.getPosition()] = o.getItemId();
                        beDeletedArr.push(o.getPosition());
                    }
                }
                for (var m in e) {
                    n += ' #v' + e[m] + '#';
                    if (g > 1 && g % 13 == 0) {
                        n += '\r\n';
                    }
                    g++;
                }
                n += '\r\n\r\n#r  回购操作不可逆　请确认是否要回购这些道具 ？#n#k';
                typed = 2;
                if (g > 1) {
                    cm.askYesNo_Bottom(n, 204, a);
                } else {
                    cm.dispose();
                    cm.openNpc(0, '回收道具_至尊版');
                    cm.getTopMsgFont('背包内无可回收道具', 3, 20, 4, 0, 0);
                }
                break;
            }
        } else {
            if (status == 2) {
                if (typed == 1) {
                    var o = cm.getInventory(inventoryType).getItem(l);
                    deleteSlot = l;
                    deleteQuantity = o.getQuantity();
                    var b = cm.getReqLevel(o.getItemId());
                    itemq = 得到装备等级并返回奖励基数(b);
                    if (cm.getSpace(4) < 2) {
                        cm.sendOk('其他栏格子不足，请整理后回购。');
                        cm.dispose();
                        return;
                    }
                    var n = '#face' + i + '##fn方正粗黑宋简体#';
                    n += ' #r#v' + o.getItemId() + '# #z' + o.getItemId() + '# [ ' + deleteQuantity + ' ] 个#k \r\n  确定对选择的道具进行回收吗？#k';
                    cm.askAcceptDecline_Bottom(n, a);
                } else {
                    if (typed == 2) {
                        itemq = 得到装备等级并返回奖励基数(150);
                        var d = beDeletedArr.length * itemq;
                        for (var m in beDeletedArr) {
                            cm.removeSlot(1, beDeletedArr[m], 1);
                        }
                        cm.gainItem(奖励_僵尸丢弃的金齿, d);
                        cm.gainItem(奖励_咒语痕迹, d * 5);
                        cm.gainMeso(金币奖励基数 * d);
                        cm.getTopMsgFont('获取物品：' + cm.getItemName(奖励_僵尸丢弃的金齿) + ' ' + d + '个', 3, 20, 4, 0, 0);
                        cm.getTopMsgFont('获取物品：' + cm.getItemName(奖励_咒语痕迹) + ' ' + d * 5 + '个', 3, 20, 4, 0, 0);
                        cm.getTopMsgFont('获取金币：' + 金币奖励基数 * d + '', 3, 20, 4, 0, 0);
                        cm.dispose();
                    }
                }
            } else {
                if (status == 3) {
                    if (typed == 1) {
                        cm.removeSlot(inventoryType, deleteSlot, deleteQuantity);
                        cm.gainItem(奖励_僵尸丢弃的金齿, itemq);
                        cm.gainItem(奖励_咒语痕迹, itemq * 5);
                        cm.gainMeso(金币奖励基数 * itemq);
                        cm.getTopMsgFont('获取物品：' + cm.getItemName(奖励_僵尸丢弃的金齿) + ' ' + itemq + '个', 3, 20, 4, 0, 0);
                        cm.getTopMsgFont('获取物品：' + cm.getItemName(奖励_咒语痕迹) + ' ' + itemq * 5 + '个', 3, 20, 4, 0, 0);
                        cm.getTopMsgFont('获取金币：' + 金币奖励基数 * itemq + '', 3, 20, 4, 0, 0);
                        cm.dispose();
                        cm.openNpc(0, '回收道具_至尊版');
                    }
                }
            }
        }
    }
}
var cal = java.util.Calendar.getInstance();
var year = cal.get(java.util.Calendar.YEAR);
var month = cal.get(java.util.Calendar.MONTH) + 1;
var day = cal.get(java.util.Calendar.DATE);
var hour = cal.get(java.util.Calendar.HOUR_OF_DAY);
var min = cal.get(java.util.Calendar.MINUTE);
var sec = cal.get(java.util.Calendar.SECOND);
var weekday = cal.get(java.util.Calendar.DAY_OF_WEEK) - 1;
var weekName = [
    '日',
    '一',
    '二',
    '三',
    '四',
    '五',
    '六'
];
var status, text, inventoryType, deleteSlot, deleteQuantity;
var itemList = new Array();
var typed = 0;
var beDeletedArr = new Array();
var 奖励基数 = 0;
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