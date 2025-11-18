var status;
var selstatus = -1;
var itemList = new Array();
var inventoryType;
var deleteSlot;
var deleteQuantity;
var FY = '#fMap/MapHelper.img/weather/cn10th/0#';
var wn1 = '#fMap/MapHelper.img/weather/snowbear/0#';
var wn2 = '#fMap/MapHelper.img/weather/snowbear/1#';
var wn3 = '#fMap/MapHelper.img/weather/snowbear/2#';
var wn5 = '#fMap/MapHelper.img/weather/5000days/1#';
var wn6 = '#fMap/MapHelper.img/weather/5000days/3#';
var icon = Array(wn1, wn2, wn3, wn5, wn6);
var ic = icon[Math.floor(Math.random() * icon.length)];
function start() {
    status = -1;
    action(1, 0, 0);
}
function action(d, b, a) {
    if (status == 3 && d == 0) {
        cm.sendOk('保留成功！请继续选择要保留的物品...');
        status = 1;
        return;
    } else {
        if (d <= 0) {
            cm.dispose();
            return;
        } else {
            if (d == 1) {
                status++;
            } else {
                status--;
            }
            if (status == 0) {
                var c = '';
                c += '	   ' + FY + '  #d#e' + cm.getServerName() + ' 背包清理#n#k' + FY + '\r\n \r\n#b';
                c += ' #L0# ' + ic + '#b 指定清理#k（#d仅仅删除,#e所指定#n的物品）#k#l\r\n';
                c += ' #L1# ' + ic + '#b 一键清理#k（#r一键删除#e该栏目全部#n物品）#k#l\r\n \r\n';
                cm.askMenu(c);
            } else {
                if (selstatus == -1) {
                    selstatus = a;
                }
                switch (selstatus) {
                case 0:
                    deleteItemBySlot(a);
                    break;
                case 1:
                    deleteItemBySlot1(a);
                    break;
                case 2:
                    deleteItemBySlot2(a);
                    break;
                }
            }
        }
    }
}
function deleteItemBySlot(e) {
    if (status == 1) {
        text = '		#e- 请选择要清理的道具类型 -#n\r\n#b';
        text += '				#L1#装备栏#l\r\n';
        text += '				#L2#消耗栏#l\r\n';
        text += '				#L4#其它栏#l\r\n';
        text += '				#L3#设置栏#l\r\n';
        text += '				#L5#特殊栏#l\r\n';
        cm.askMenu(text);
    } else {
        if (status == 2) {
            inventoryType = e;
            var d = false;
            var a = 1;
            inv = cm.getInventory(inventoryType);
            text = '			  #e- 请选择要清理的道具 -#n\r\n\r\n#b';
            for (var b = 1; b <= inv.getSlotLimit(); b++) {
                var c = inv.getItem(b);
                if (c == null) {
                    continue;
                }
                var g = c.getItemId();
                d = true;
                text += '#L' + b + '##v' + g + '##l';
                if (a > 1 && a % 6 == 0) {
                    text += '\r\n';
                }
                a++;
            }
            if (!d) {
                cm.playerMessage(1, '该栏中没有道具');
                cm.dispose();
                return;
            }
            cm.askMenu(text + '#k');
        } else {
            if (status == 3) {
                var f = cm.getInventory(inventoryType).getItem(e);
                deleteSlot = e;
                deleteQuantity = f.getQuantity();
                text = '#e确定要清理#r#v' + f.getItemId() + '##z' + f.getItemId() + '# ' + deleteQuantity + '个 #k吗？';
                cm.sendNextPrev(text);
            } else {
                if (status == 4) {
                    cm.removeSlot(inventoryType, deleteSlot, deleteQuantity);
                    cm.sendOk('清理成功，祝你游戏愉快~');
                    cm.playerMessage(-1, '您执行了删除操作!!');
                    status = 0;
                }
            }
        }
    }
}
function deleteItemBySlot1(d) {
    if (status == 1) {
        text = '		#e- 请选择要清理的道具类型 -#n\r\n#b';
        text += '				#L1#装备栏#l\r\n';
        text += '				#L2#消耗栏#l\r\n';
        text += '				#L4#其它栏#l\r\n';
        text += '				#L3#设置栏#l\r\n';
        text += '				#L5#特殊栏#l\r\n';
        cm.askMenu(text);
    } else {
        if (status == 2) {
            inventoryType = d;
            if (d == 1) {
                var f = '装备栏';
            } else {
                if (d == 2) {
                    var f = '消耗栏';
                } else {
                    if (d == 4) {
                        var f = '其他栏';
                    } else {
                        if (d == 3) {
                            var f = '设置栏';
                        } else {
                            if (d == 5) {
                                var f = '特殊栏';
                            }
                        }
                    }
                }
            }
            var c = false;
            inv = cm.getInventory(inventoryType);
            text = '#r' + f + '#b 内有以下道具，你确定都要清理吗？#k\r\n';
            for (var a = 1; a <= inv.getSlotLimit(); a++) {
                var b = inv.getItem(a);
                if (b == null) {
                    continue;
                }
                var e = b.getItemId();
                c = true;
                text += '#e名称：#n#v' + e + '##b#z' + e + '##k，#e数量：#n#r' + b.getQuantity() + '#k 个。\r\n';
            }
            if (!c) {
                cm.playerMessage(1, '该栏中没有道具');
                cm.dispose();
                return;
            }
            cm.askYesNo(text);
        } else {
            if (status == 3) {
                inv = cm.getInventory(inventoryType);
                text = '您成功清理了以下道具，祝您游戏愉快！~\r\n';
                for (var a = 1; a <= inv.getSlotLimit(); a++) {
                    var b = inv.getItem(a);
                    if (b == null) {
                        continue;
                    }
                    var e = b.getItemId();
                    cm.removeSlot(inventoryType, a, b.getQuantity());
                }
                cm.sendOk('您成功清理了道具，祝您游戏愉快！');
                cm.playerMessage(-1, '您执行了删除操作!!');
                status = 0;
            }
        }
    }
}