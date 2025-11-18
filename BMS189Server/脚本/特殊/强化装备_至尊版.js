var status = 0;
var selectedList = Array();
var newItemList = Array();
var 材料UI = '#fUI/UIWindow.img/Item/New/inventory/0#';
var 主武器UI = '#fUI/UIWindow.img/Item/activeExpChairIcon#';
var itemIcon = '#fUI/Basic.img/Cursor/32/0#';
var 数字UI = [
    '#fUI/Basic.img/LevelNo/0#',
    '#fUI/Basic.img/LevelNo/1#',
    '#fUI/Basic.img/LevelNo/2#',
    '#fUI/Basic.img/LevelNo/3#',
    '#fUI/Basic.img/LevelNo/4#',
    '#fUI/Basic.img/LevelNo/5#',
    '#fUI/Basic.img/LevelNo/6#',
    '#fUI/Basic.img/LevelNo/7#',
    '#fUI/Basic.img/LevelNo/8#',
    '#fUI/Basic.img/LevelNo/9#'
];
var startIcon = '#fUI/Basic.img/icon/arrow#';
var selectedPosition = 0;
var step = 0;
var 成功率 = 0;
var 强化费用 = 100;
var haveLuck = false;
var useLuck = false;
var sflag = false;
var 可强化装备等级下限 = 101;
var grade = [
    '★普通★',
    '★打磨★',
    '★华丽★',
    '★精致★',
    '★稀有★',
    '★传承★',
    '★传说★',
    '★旷世★',
    '★神圣★',
    '★史诗★',
    '★毁灭★',
    '★永恒★'
];
function start() {
    status = -1;
    action(1, 0, 0);
}
function action(s, f, I) {
    var d = cm.getConstantScriptContent('菜单_NPC立绘');
    var m = Math.floor(Math.random() * d.length);
    var F = d[m][0];
    var o = randomNum(0, d[m][1]);
    if (s == -1) {
        cm.dispose();
    } else {
        if (haveLuck && s == 0) {
            useLuck = false;
            status = 0;
            s = 1;
        } else {
            if (haveLuck && s == 1) {
                useLuck = true;
            }
        }
        if (s == 0 && status == 0) {
            cm.dispose();
            return;
        }
        if (s == 0 && status == -1) {
            cm.dispose();
            return;
        }
        if (s == 1) {
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
            if (step == 1) {
                if (selectedPosition == 0) {
                    selectedList.splice(0, 4);
                }
                if (I != -1) {
                    selectedList[selectedPosition] = Array(I, newItemList[I]);
                }
                step = 0;
                成功率 = 计算成功率();
                强化费用 = 计算费用() * 50;
            }
            var r = '  #face' + o + '##fs18##r#fn方正粗黑宋简体#欢迎使用 ' + cm.getServerName() + ' 装备强化#fs15#\r\n';
            for (var A = 0; A < 5; A++) {
                if (selectedList[A] != null) {
                    r += '#L' + A + '##v' + selectedList[A][1] + '##l';
                } else {
                    if (A == 0) {
                        r += '#L' + A + '#' + 主武器UI + '#l';
                    } else {
                        r += '#L' + A + '#' + 材料UI + '#l';
                    }
                }
            }
            r += '\r\n\r\n';
            if (selectedList.length >= 1) {
                for (var H in selectedList) {
                    var C = cm.getInventory(1).getItem(selectedList[H][0]);
                    var a = C.getTitle();
                    var z = 0;
                    for (var A = 0; A < grade.length; A++) {
                        if (a == grade[A]) {
                            break;
                        }
                        z++;
                    }
                    if (z >= grade.length) {
                        a = grade[0];
                    }
                    var p = '#g主';
                    if (H >= 1) {
                        p = '副';
                    }
                    var u = C.getLevel();
                    var l = '';
                    if (u != 0) {
                        l = ' (+' + u + ')';
                    }
                    r += '	' + p + ': [' + a + '] Lv.' + cm.getReqLevel(C.getItemId()) + ' ' + cm.getItemName(C.getItemId()) + '' + l + '\r\n';
                }
                r += '';
            }
            r += '    #b强化成功率：' + 成功率 + '%   所需费用：' + 强化费用 + '点卷\r\n';
            var g = '#d先确定主副装备才能强化#k';
            if (selectedList.length >= 2) {
                g = '#r我现在就要强化#k';
            }
            r += '#k#L999#' + g + '#l\r\n\r\n';
            r += '   【装备强化】功能说明：\r\n';
            r += '   在栏位[1]选择主装备，等级+10 -50的装备作为其他材料；\r\n';
            r += '   比如选择了50级的 #v1402013# 则可以使用1~60级的装备当做材料。\r\n';
            r += '   强化收益开始很低，然后越来越高如：-10 13 17 27 57 107 307 507 807\r\n';
            r += '   使用#v4000517#道具可以增加15%成功率\r\n ';
            cm.askMenu_Bottom(r, 204, F);
        } else {
            if (status == 1) {
                if (sflag) {
                    I = 999;
                }
                if (I == 999) {
                    sflag = true;
                    if (selectedList.length < 2) {
                        cm.getTopMsgFont('选择装备后才可以强化', 3, 20, 4, 0, 0);
                    } else {
                        if (cm.haveItem(4000517) && !haveLuck) {
                            status = 0;
                            haveLuck = true;
                            cm.askYesNo_Bottom('#face' + o + '#您的背包中拥有#v4000517##b黄金鱼#k道具，是否使用#b黄金鱼#k将成功率提升至#b' + (成功率 + 15) + '%#k？\r\n\r\n选择否则以#r' + 成功率 + '%的成功率继续强化。#k', F);
                        } else {
                            if (cm.getPlayer().getCSPoints(1) < 强化费用) {
                                cm.getTopMsgFont('点卷不足', 3, 20, 4, 0, 0);
                                cm.dispose();
                                return;
                            }
                            var h = selectedList[0][1];
                            var x = selectedList[0][0];
                            var E = cm.getReqLevel(h);
                            var e = Math.floor(获取装备品级(x)) + 1;
                            if (e >= grade.length) {
                                cm.getTopMsgFont('已经是最高品级了', 3, 20, 4, 0, 0);
                                cm.dispose();
                                return;
                            }
                            cm.getPlayer().modifyCSPoints(1, -强化费用);
                            cm.playerMessage(5, '您消耗了 ' + 强化费用 + '点券。');
                            var c = Math.floor(Math.random() * 100);
                            成功率 = useLuck ? 成功率 + 15 : 成功率;
                            if (useLuck) {
                                cm.gainItem(4000517, -1);
                            }
                            if (c > 成功率) {
                                var G = 0;
                                for (var H in selectedList) {
                                    if (H == 0) {
                                        continue;
                                    }
                                    var t = Math.floor(Math.random() * 100);
                                    if (t <= 50) {
                                        G++;
                                        cm.removeSlot(1, selectedList[H][0], 1);
                                    }
                                }
                                var r = '庆幸的是，副装备都还在~继续努力吧！';
                                if (G > 0) {
                                    r = '#r' + G + '#k件副装备消失了，别灰心，后面的日子还长呢！';
                                }
                                cm.askAcceptDecline_Bottom('#face' + o + '#真不辛，合成失败了。' + r, 204, F);
                                cm.dispose();
                                return;
                            }
                            var C = cm.getInventory(1).getItem(x);
                            var q = cm.getItemInfo();
                            var n = C.copy();
                            var D = e * Math.round(E / 35);
                            n.setTitle(grade[e]);
                            n.setStr(C.getStr() + e);
                            n.setDex(C.getDex() + e);
                            n.setInt(C.getInt() + e);
                            n.setLuk(C.getLuk() + e);
                            n.setPad(C.getPAD() + D);
                            n.setMad(C.getMAD() + D);
                            for (var H in selectedList) {
                                cm.removeSlot(1, selectedList[H][0], 1);
                            }
                            n.setTitle(grade[e]);
                            cm.addFromDrop(cm.getClient(), n, false);
                            var r = '			 #b力量：#r+' + e + ' 	 #b敏捷：#r+' + e + '\r\n \r\n';
                            r += '			 #b智力：#r+' + e + ' 	 #b运气：#r+' + e + '\r\n \r\n';
                            r += '			 #b攻击：#r+' + D + ' 	#b魔力：#r+' + D + '\r\n \r\n \r\n';
                            cm.askAcceptDecline_Bottom('#face' + o + '##v' + h + '##t' + h + ' ##k  \r\n' + r, 204, F);
                            sflag = false;
                            if (e > 3) {
                                cm.worldSpouseMessage(21, '『装备合成』：恭喜玩家【' + cm.getPlayer().getName() + '】合成出 ' + grade[e] + '的 ' + cm.getItemName(h));
                            }
                            cm.dispose();
                        }
                    }
                } else {
                    selectedPosition = I;
                    if (selectedPosition != 0 && selectedList[0] == null) {
                        cm.getTopMsgFont('先确定主武器 再选择材料', 3, 20, 4, 0, 0);
                    } else {
                        inventoryType = 1;
                        var B = cm.getInventory(inventoryType).list();
                        var v = B.iterator();
                        r = '  #face' + o + '#经过筛选，以下为所有符合强化合成条件的#r副装备\r\n\r\n#b';
                        if (selectedPosition == 0) {
                            r = '  #face' + o + '#选择一个#r【主装备】#k进行强化：\r\n\r\n#b';
                        }
                        var G = 1;
                        newItemList = new Array();
                        while (v.hasNext()) {
                            var C = v.next();
                            cm.getPlayer().dropMessage(0, C);
                            if (cm.isCash(C.getItemId())) {
                                continue;
                            }
                            if (获取装备类型(C.getItemId()) == -1) {
                                continue;
                            }
                            var y = cm.getReqLevel(C.getItemId());
                            if (y < 可强化装备等级下限) {
                                continue;
                            }
                            if (selectedPosition != 0) {
                                var E = cm.getReqLevel(selectedList[0][1]);
                                var k = 获取装备品级(selectedList[0][0]);
                                var w = 获取装备品级(C.getPosition());
                                var b = E - y;
                                if (b > 50 || b < -10) {
                                    continue;
                                }
                            }
                            var z = 0;
                            for (var H in selectedList) {
                                if (C.getPosition() == selectedList[H][0]) {
                                    z = 1;
                                    break;
                                }
                            }
                            if (z == 1) {
                                continue;
                            }
                            newItemList[C.getPosition()] = C.getItemId();
                        }
                        var j = 0;
                        for (var H in newItemList) {
                            j++;
                            r += '#L' + H + '##v' + newItemList[H] + '#';
                            if (G > 1 && G % 5 == 0) {
                                r += '\r\n';
                            }
                            G++;
                        }
                        status = -1;
                        step = 1;
                        if (j <= 0) {
                            cm.getTopMsgFont('缺少材料副装', 3, 20, 4, 0, 0);
                            cm.dispose();
                            return;
                        }
                        cm.askMenu_Bottom(r, 204, F);
                    }
                }
            }
        }
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
function 获取装备类型(b) {
    var a = Math.floor(b / 10000);
    switch (a) {
    case 100:
        return 0;
    case 104:
        return 1;
    case 105:
        return 2;
    case 106:
        return 3;
    case 107:
        return 4;
    case 108:
        return 5;
    case 110:
        return 6;
    default:
        if (a == 120) {
            return -1;
        }
        if (a == 135) {
            return -1;
        }
        var a = Math.floor(a / 10);
        if (a == 12 || a == 13 || a == 14 || a == 15 || a == 17) {
            return 7;
        }
        return -1;
    }
}
function 计算成功率() {
    var b = 0;
    for (var a in selectedList) {
        if (selectedList[a] != null && selectedList[a] != '') {
            b++;
        }
    }
    switch (b) {
    case 2:
        return 15;
    case 3:
        return 30;
    case 4:
        return 60;
    case 5:
        return 92;
    default:
        return 0;
    }
}
function 计算费用() {
    var c = 0;
    for (var b in selectedList) {
        c += cm.getReqLevel(selectedList[b][1]) * 1;
    }
    var a = c + cm.getReqLevel(selectedList[0][1]) * (parseInt(获取装备品级(selectedList[0][0])) + 1) * 2;
    return a;
}
function 获取装备品级(b) {
    if (b != null) {
        var c = cm.getInventory(1).getItem(b);
        var d = c.getTitle();
        if (d == null || d == '') {
            return 0;
        }
        for (var a in grade) {
            if (d == grade[a]) {
                return a;
            }
        }
    }
    return 0;
}