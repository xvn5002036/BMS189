var 武器副手潜能 = [
    [
        40603,
        '攻击BOSS时伤害：+40%',
        1
    ],
    [
        40292,
        '无视怪物40%的防御率',
        1
    ],
    [
        40051,
        '攻击力：+12%',
        1
    ],
    [
        40052,
        '魔法力：+12%',
        1
    ],
    [
        60001,
        '总伤害：+12%',
        1
    ],
    [
        60002,
        '所有属性：+20%',
        1
    ],
    [
        40045,
        'MaxHP : +12%',
        1
    ],
    [
        40055,
        '爆击率 12%',
        1
    ]
];
var 手套潜能 = [
    [
        60002,
        '所有属性：+20%',
        1
    ],
    [
        40045,
        'MaxHP : +12%',
        1
    ],
    [
        40057,
        '暴击伤害 8%',
        1
    ]
];
var 潜能列表 = [
    [
        60002,
        '所有属性：+20%',
        1
    ],
    [
        40045,
        'MaxHP : +12%',
        1
    ]
];
var P = [
    帽子 = -1,
    前额 = -2,
    眼饰 = -3,
    耳环 = -4,
    上衣 = -5,
    裤子 = -6,
    鞋子 = -7,
    手套 = -8,
    披风 = -9,
    副手 = -10,
    武器 = -11,
    戒指1 = -16,
    戒指2 = -15,
    戒指3 = -13,
    戒指4 = -12,
    戒指5 = -27,
    戒指6 = -28,
    项链 = -17,
    奖牌 = -26,
    腰带 = -29,
    护肩 = -30,
    口袋 = -33,
    安卓 = -34,
    心脏 = -35,
    徽章 = -36,
    符号 = -37,
    现金帽子 = -101,
    现金前额 = -102,
    现金眼饰 = -103,
    现金耳环 = -104,
    现金上衣 = -105,
    现金裤子 = -106,
    现金鞋子 = -107,
    现金手套 = -108,
    现金披风 = -109,
    现金副手 = -110,
    现金武器 = -111,
    现金戒指1 = -116,
    现金戒指2 = -115,
    现金戒指3 = -113,
    现金戒指4 = -112,
    现金戒指5 = -127,
    现金戒指6 = -128,
    宠物饰品1 = -114,
    宠物项圈1 = -121,
    宠物饰品2 = -122,
    宠物项圈2 = -123,
    宠物饰品3 = -124,
    宠物项圈3 = -125,
    未知 = -135,
    龙面罩 = -1000,
    龙吊坠 = -1001,
    龙翅膀 = -1002,
    龙尾巴 = -1003,
    机甲引擎 = -1100,
    机甲机械臂 = -1101,
    机甲机械腿 = -1102,
    机甲框架 = -1103,
    机甲晶体管 = -1104,
    安卓帽子栏 = -1200,
    安卓披风栏 = -1201,
    安卓前额栏 = -1202,
    安卓衣服栏 = -1203,
    安卓裤子栏 = -1204,
    安卓鞋子栏 = -1205,
    安卓手套栏 = -1206,
    天使帽子 = -1300,
    天使发型 = -1300,
    天使前额 = -1300,
    天使脸饰 = -1300,
    天使上衣 = -1300,
    天使披风 = -1300,
    天使手套 = -1300,
    贝塔眼饰 = -1500,
    贝塔帽子 = -1501,
    贝塔前额 = -1502,
    贝塔耳环 = -1503,
    贝塔披风 = -1504,
    贝塔上衣 = -1505,
    贝塔手套 = -1506,
    贝塔武器 = -1507,
    贝塔裤子 = -1508,
    贝塔鞋子 = -1509,
    贝塔戒指1 = -1510,
    贝塔戒指2 = -1511,
    贝塔戒指3 = -1512,
    神秘1 = -1600,
    神秘2 = -1601,
    神秘3 = -1602,
    神秘4 = -1603,
    神秘5 = -1604,
    神秘6 = -1605,
    图腾1 = -5000,
    图腾2 = -5001,
    图腾3 = -5002,
    小白 = -5200
];
function 获取装备类型(b) {
    var a = Math.floor(b / 10000);
    switch (a) {
    case 100:
        return '帽子';
    case 104:
        return '衣服';
    case 105:
        return '套装';
    case 106:
        return '裤裙';
    case 107:
        return '鞋子';
    case 108:
        return '手套';
    case 110:
        return '披风';
    case 111:
        return '戒指';
    case 301:
        return '椅子';
    case 306:
        return '星岩';
    case 500:
        return '宠物';
    default:
        if (a == 101 || a == 102 || a == 103) {
            return '饰品';
        }
        if (a == 166 || a == 167) {
            return '安卓';
        }
        if (a == 8000 || a == 8001) {
            return '骑宠';
        }
        if (a == 243 || a == 263) {
            return '消耗';
        }
        if (a == 261 || a == 204 || a == 234) {
            return '卷轴';
        }
        if (a == 120) {
            return 999;
        }
        if (a == 135) {
            return '副手';
        }
        if (a == 506) {
            return 999;
        }
        if (a == 553) {
            return 999;
        }
        var a = Math.floor(a / 10);
        if (a == 12 || a == 13 || a == 14 || a == 15 || a == 17) {
            return '武器';
        }
        return 999;
    }
}
var 装备图标 = 0;
var status = -1;
var selectionLog = [];
function start() {
    action(1, 0, 0);
}
function action(mode, type, selection) {
    var NPC立绘组 = cm.getConstantScriptContent('菜单_NPC立绘');
    var index = Math.floor(Math.random() * NPC立绘组.length);
    var NPC = NPC立绘组[index][0];
    var face = randomNum(0, NPC立绘组[index][1]);
    if (cm.getzhizunvip() != 2) {
        cm.dispose();
        cm.playerMessage(1, '该菜单是至尊版专享。');
        return;
    }
    var 装备栏1格 = cm.getEquipBySlot(1);
    if (装备栏1格 == null) {
        cm.dispose();
        cm.getTopMsgFont('装备栏第1格为空？', 3, 20, 4, 0, 0);
        return;
    } else {
        var 装备图标 = cm.getInventory(1).getItem(1).getItemId();
    }
    if (status <= 0 && mode == 0) {
        cm.dispose();
        return;
    }
    if (status >= 0 && mode == 0) {
        cm.dispose();
        cm.openNpc(9110002, '蜡笔潜能_至尊版');
        return;
    }
    mode == 1 ? status++ : status--;
    selectionLog[status] = selection;
    var i = -1;
    if (status <= i++) {
        cm.dispose();
    } else {
        if (status === i++) {
            var text = '#face' + face + '##fn方正粗黑宋简体#';
            text += '     #fs17##r欢迎使用 ' + cm.getServerName() + ' 蜡笔潜能#fs15##k\r\n';
            text += '      #g#v' + 装备图标 + '##z' + 装备图标 + '##e（' + 获取装备类型(装备图标) + '）#n#k 请选择想要调整的潜能：\r\n#b';
            text += '   #L1##v' + 3994417 + '#基本潜能[1]#l  #L2##v' + 3994418 + '#基本潜能[2]#l  #L3##v' + 3994419 + '#基本潜能[3]#l\r\n';
            text += '   #L4##v' + 3994420 + '#附加潜能[1]#l  #L5##v' + 3994421 + '#附加潜能[2]#l  #L6##v' + 3994422 + '#附加潜能[3]#l\r\n';
            cm.askMenu_Bottom(text, 204, NPC);
        } else {
            var reactor = 'action' + selectionLog[1];
            eval(reactor)(mode, type, selection, i);
        }
    }
}
function action0(d, c, b, a) {
    if (status <= a++) {
        cm.dispose();
    }
}
function action1(g, l, o, e) {
    var m = cm.getConstantScriptContent('菜单_NPC立绘');
    var h = Math.floor(Math.random() * m.length);
    var b = m[h][0];
    var k = randomNum(0, m[h][1]);
    var j = 1;
    var n = 1;
    var c = 3994417;
    var p = cm.getEquipBySlot(n);
    var d = cm.getInventory(1).getItem(1).getItemId();
    if (status <= e++) {
        if (p == null || p.getGrade(false) != 20) {
            cm.askAcceptDecline_Bottom('#face' + k + '出现错误: \r\n\r\n1、请把#b材料#k放在装备栏#r1#k号位。\r\n2、装备的#b潜能等级#k必须为#rSS#k级。' + p.getGrade(false) + '', 204, b);
            cm.dispose();
            return;
        }
        var a = '#face' + k + '##fn方正粗黑宋简体#';
        a += '  #r基本潜能[1]  #z' + c + '#[' + cm.getItemQuantity(c) + ']#k#fs15#';
        if (获取装备类型(d) == '武器' || 获取装备类型(d) == '副手') {
            for (var e = 0; e < 武器副手潜能.length; e++) {
                a += '\r\n#L' + e + '#' + 武器副手潜能[e][1] + '#k  (消耗： #r' + 武器副手潜能[e][2] + '#k #k 蜡笔)#l';
            }
        } else {
            if (获取装备类型(d).equals('手套')) {
                for (var e = 0; e < 手套潜能.length; e++) {
                    a += '\r\n#L' + e + '#' + 手套潜能[e][1] + '#k  (消耗： #r' + 手套潜能[e][2] + '#k #k 蜡笔)#l';
                }
            } else {
                for (var e = 0; e < 潜能列表.length; e++) {
                    a += '\r\n#L' + e + '#' + 潜能列表[e][1] + '#k  (消耗： #r' + 潜能列表[e][2] + '#k #k 蜡笔)#l';
                }
            }
        }
        cm.addPopupSay(9110002, 5000, '『' + cm.getPlayer().getName() + '』\r\n「' + 获取装备类型(d) + '」潜能');
        cm.askMenu_Bottom(a + ' \r\n ', 204, b);
    } else {
        if (status === e++) {
            if (获取装备类型(d).equals('武器') || 获取装备类型(d).equals('副手')) {
                var f = 武器副手潜能[o];
            } else {
                if (获取装备类型(d).equals('手套')) {
                    var f = 手套潜能[o];
                } else {
                    var f = 潜能列表[o];
                }
            }
            if (f != null) {
                潜能ID = f[0];
                潜能描述 = f[1];
                费用 = f[2];
                Gitem = cm.getInventory(1).getItem(1);
                cm.askYesNo_Bottom('#face' + k + '#当前选择：#g#v' + Gitem.getItemId() + '##z' + Gitem.getItemId() + '##k \r\n\r\n第#r' + j + '#k条潜能改为：#b[' + 潜能描述 + '#k] 吗？', 204, b);
            } else {
                cm.getTopMsgFont('出现错误联系管理员', 3, 20, 4, 0, 0);
                cm.dispose();
                return;
            }
        } else {
            if (status === e++) {
                if (cm.getItemQuantity(c) < 1) {
                    cm.getTopMsgFont('缺少货币无法使用服务。', 3, 20, 4, 0, 0);
                    cm.dispose();
                    return;
                }
                if (潜能ID <= 0 || 潜能描述 == '' || 费用 <= 0) {
                    cm.getTopMsgFont('出现错误联系管理员', 3, 20, 4, 0, 0);
                    cm.dispose();
                    return;
                }
                if (cm.changePotential(n, j, 潜能ID, false)) {
                    Gitem = cm.getInventory(1).getItem(1);
                    GID = Gitem.getItemId();
                    ii = cm.getItemInfo();
                    cm.gainItem(c, -1);
                    cm.worldSpouseMessage(37, '【蜡笔潜能】：土豪“' + cm.getPlayer().getName() + '”将『' + cm.getItemName(GID) + '』第[' + j + ']条潜能修改为：' + 潜能描述 + ' ');
                    cm.getTopMsgFont('系统提示：修改潜能成功!', 3, 20, 20, 0);
                    cm.effect_NormalSpeechBalloon('修改潜能完毕!', 1, 0, 0, 3000, 0, 0);
                    cm.dispose();
                    return;
                } else {
                    cm.getTopMsgFont('出现错误联系管理员', 3, 20, 4, 0, 0);
                    cm.dispose();
                    return;
                }
            }
        }
    }
}
function action2(g, l, o, e) {
    var m = cm.getConstantScriptContent('菜单_NPC立绘');
    var h = Math.floor(Math.random() * m.length);
    var b = m[h][0];
    var k = randomNum(0, m[h][1]);
    var j = 2;
    var n = 1;
    var c = 3994418;
    var p = cm.getEquipBySlot(n);
    var d = cm.getInventory(1).getItem(1).getItemId();
    if (status <= e++) {
        if (p == null || p.getGrade(false) != 20) {
            cm.askAcceptDecline_Bottom('#face' + k + '出现错误: \r\n\r\n1、请把#b材料#k放在装备栏#r1#k号位。\r\n2、装备的#b潜能等级#k必须为#rSS#k级。', 204, b);
            cm.dispose();
            return;
        }
        var a = '#face' + k + '##fn方正粗黑宋简体#';
        a += '  #r基本潜能[1]  #z' + c + '#[' + cm.getItemQuantity(c) + ']#k#fs15#';
        if (获取装备类型(d).equals('武器') || 获取装备类型(d).equals('副手')) {
            for (var e = 0; e < 武器副手潜能.length; e++) {
                a += '\r\n#L' + e + '#' + 武器副手潜能[e][1] + '#k  (消耗： #r' + 武器副手潜能[e][2] + '#k #k 蜡笔)#l';
            }
        } else {
            if (获取装备类型(d).equals('手套')) {
                for (var e = 0; e < 手套潜能.length; e++) {
                    a += '\r\n#L' + e + '#' + 手套潜能[e][1] + '#k  (消耗： #r' + 手套潜能[e][2] + '#k #k 蜡笔)#l';
                }
            } else {
                for (var e = 0; e < 潜能列表.length; e++) {
                    a += '\r\n#L' + e + '#' + 潜能列表[e][1] + '#k  (消耗： #r' + 潜能列表[e][2] + '#k #k 蜡笔)#l';
                }
            }
        }
        cm.addPopupSay(9110002, 5000, '『' + cm.getPlayer().getName() + '』\r\n「' + 获取装备类型(d) + '」潜能');
        cm.askMenu_Bottom(a + ' \r\n ', 204, b);
    } else {
        if (status === e++) {
            if (获取装备类型(d).equals('武器') || 获取装备类型(d).equals('副手')) {
                var f = 武器副手潜能[o];
            } else {
                if (获取装备类型(d).equals('手套')) {
                    var f = 手套潜能[o];
                } else {
                    var f = 潜能列表[o];
                }
            }
            if (f != null) {
                潜能ID = f[0];
                潜能描述 = f[1];
                费用 = f[2];
                Gitem = cm.getInventory(1).getItem(1);
                cm.askYesNo_Bottom('#face' + k + '#当前选择：#g#v' + Gitem.getItemId() + '##z' + Gitem.getItemId() + '##k \r\n\r\n第#r' + j + '#k条潜能改为：#b[' + 潜能描述 + '#k] 吗？', 204, b);
            } else {
                cm.getTopMsgFont('出现错误联系管理员', 3, 20, 4, 0, 0);
                cm.dispose();
                return;
            }
        } else {
            if (status === e++) {
                if (cm.getItemQuantity(c) < 1) {
                    cm.getTopMsgFont('缺少货币无法使用服务。', 3, 20, 4, 0, 0);
                    cm.dispose();
                    return;
                }
                if (潜能ID <= 0 || 潜能描述 == '' || 费用 <= 0) {
                    cm.getTopMsgFont('出现错误联系管理员', 3, 20, 4, 0, 0);
                    cm.dispose();
                    return;
                }
                if (cm.changePotential(n, j, 潜能ID, false)) {
                    Gitem = cm.getInventory(1).getItem(1);
                    GID = Gitem.getItemId();
                    ii = cm.getItemInfo();
                    cm.gainItem(c, -1);
                    cm.worldSpouseMessage(37, '【蜡笔潜能】：土豪“' + cm.getPlayer().getName() + '”将『' + cm.getItemName(GID) + '』第[' + j + ']条潜能修改为：' + 潜能描述 + ' ');
                    cm.getTopMsgFont('系统提示：修改潜能成功!', 3, 20, 20, 0);
                    cm.effect_NormalSpeechBalloon('修改潜能完毕!', 1, 0, 0, 3000, 0, 0);
                    cm.dispose();
                    return;
                } else {
                    cm.getTopMsgFont('出现错误联系管理员', 3, 20, 4, 0, 0);
                    cm.dispose();
                    return;
                }
            }
        }
    }
}
function action3(g, l, o, e) {
    var m = cm.getConstantScriptContent('菜单_NPC立绘');
    var h = Math.floor(Math.random() * m.length);
    var b = m[h][0];
    var k = randomNum(0, m[h][1]);
    var j = 3;
    var n = 1;
    var c = 3994419;
    var p = cm.getEquipBySlot(n);
    var d = cm.getInventory(1).getItem(1).getItemId();
    if (status <= e++) {
        if (p == null || p.getGrade(false) != 20) {
            cm.askAcceptDecline_Bottom('#face' + k + '出现错误: \r\n\r\n1、请把#b材料#k放在装备栏#r1#k号位。\r\n2、装备的#b潜能等级#k必须为#rSS#k级。', 204, b);
            cm.dispose();
            return;
        }
        var a = '#face' + k + '##fn方正粗黑宋简体#';
        a += '  #r基本潜能[1]  #z' + c + '#[' + cm.getItemQuantity(c) + ']#k#fs15#';
        if (获取装备类型(d).equals('武器') || 获取装备类型(d).equals('副手')) {
            for (var e = 0; e < 武器副手潜能.length; e++) {
                a += '\r\n#L' + e + '#' + 武器副手潜能[e][1] + '#k  (消耗： #r' + 武器副手潜能[e][2] + '#k #k 蜡笔)#l';
            }
        } else {
            if (获取装备类型(d).equals('手套')) {
                for (var e = 0; e < 手套潜能.length; e++) {
                    a += '\r\n#L' + e + '#' + 手套潜能[e][1] + '#k  (消耗： #r' + 手套潜能[e][2] + '#k #k 蜡笔)#l';
                }
            } else {
                for (var e = 0; e < 潜能列表.length; e++) {
                    a += '\r\n#L' + e + '#' + 潜能列表[e][1] + '#k  (消耗： #r' + 潜能列表[e][2] + '#k #k 蜡笔)#l';
                }
            }
        }
        cm.addPopupSay(9110002, 5000, '『' + cm.getPlayer().getName() + '』\r\n「' + 获取装备类型(d) + '」潜能');
        cm.askMenu_Bottom(a + ' \r\n ', 204, b);
    } else {
        if (status === e++) {
            if (获取装备类型(d).equals('武器') || 获取装备类型(d).equals('副手')) {
                var f = 武器副手潜能[o];
            } else {
                if (获取装备类型(d).equals('手套')) {
                    var f = 手套潜能[o];
                } else {
                    var f = 潜能列表[o];
                }
            }
            if (f != null) {
                潜能ID = f[0];
                潜能描述 = f[1];
                费用 = f[2];
                Gitem = cm.getInventory(1).getItem(1);
                cm.askYesNo_Bottom('#face' + k + '#当前选择：#g#v' + Gitem.getItemId() + '##z' + Gitem.getItemId() + '##k \r\n\r\n第#r' + j + '#k条潜能改为：#b[' + 潜能描述 + '#k] 吗？', 204, b);
            } else {
                cm.getTopMsgFont('出现错误联系管理员', 3, 20, 4, 0, 0);
                cm.dispose();
                return;
            }
        } else {
            if (status === e++) {
                if (cm.getItemQuantity(c) < 1) {
                    cm.getTopMsgFont('缺少货币无法使用服务。', 3, 20, 4, 0, 0);
                    cm.dispose();
                    return;
                }
                if (潜能ID <= 0 || 潜能描述 == '' || 费用 <= 0) {
                    cm.getTopMsgFont('出现错误联系管理员', 3, 20, 4, 0, 0);
                    cm.dispose();
                    return;
                }
                if (cm.changePotential(n, j, 潜能ID, false)) {
                    Gitem = cm.getInventory(1).getItem(1);
                    GID = Gitem.getItemId();
                    ii = cm.getItemInfo();
                    cm.gainItem(c, -1);
                    cm.worldSpouseMessage(37, '【蜡笔潜能】：土豪“' + cm.getPlayer().getName() + '”将『' + cm.getItemName(GID) + '』第[' + j + ']条潜能修改为：' + 潜能描述 + ' ');
                    cm.getTopMsgFont('系统提示：修改潜能成功!', 3, 20, 20, 0);
                    cm.effect_NormalSpeechBalloon('修改潜能完毕!', 1, 0, 0, 3000, 0, 0);
                    cm.dispose();
                    return;
                } else {
                    cm.getTopMsgFont('出现错误联系管理员', 3, 20, 4, 0, 0);
                    cm.dispose();
                    return;
                }
            }
        }
    }
}
function action4(g, l, o, e) {
    var m = cm.getConstantScriptContent('菜单_NPC立绘');
    var h = Math.floor(Math.random() * m.length);
    var b = m[h][0];
    var k = randomNum(0, m[h][1]);
    var j = 4;
    var n = 1;
    var c = 3994420;
    var p = cm.getEquipBySlot(n);
    var d = cm.getInventory(1).getItem(1).getItemId();
    if (status <= e++) {
        if (p == null || p.getGrade(false) != 20) {
            cm.askAcceptDecline_Bottom('#face' + k + '出现错误: \r\n\r\n1、请把#b材料#k放在装备栏#r1#k号位。\r\n2、装备的#b潜能等级#k必须为#rSS#k级。', 204, b);
            cm.dispose();
            return;
        }
        var a = '#face' + k + '##fn方正粗黑宋简体#';
        a += '  #r基本潜能[1]  #z' + c + '#[' + cm.getItemQuantity(c) + ']#k#fs15#';
        if (获取装备类型(d).equals('武器') || 获取装备类型(d).equals('副手')) {
            for (var e = 0; e < 武器副手潜能.length; e++) {
                a += '\r\n#L' + e + '#' + 武器副手潜能[e][1] + '#k  (消耗： #r' + 武器副手潜能[e][2] + '#k #k 蜡笔)#l';
            }
        } else {
            if (获取装备类型(d).equals('手套')) {
                for (var e = 0; e < 手套潜能.length; e++) {
                    a += '\r\n#L' + e + '#' + 手套潜能[e][1] + '#k  (消耗： #r' + 手套潜能[e][2] + '#k #k 蜡笔)#l';
                }
            } else {
                for (var e = 0; e < 潜能列表.length; e++) {
                    a += '\r\n#L' + e + '#' + 潜能列表[e][1] + '#k  (消耗： #r' + 潜能列表[e][2] + '#k #k 蜡笔)#l';
                }
            }
        }
        cm.addPopupSay(9110002, 5000, '『' + cm.getPlayer().getName() + '』\r\n「' + 获取装备类型(d) + '」潜能');
        cm.askMenu_Bottom(a + ' \r\n ', 204, b);
    } else {
        if (status === e++) {
            if (获取装备类型(d).equals('武器') || 获取装备类型(d).equals('副手')) {
                var f = 武器副手潜能[o];
            } else {
                if (获取装备类型(d).equals('手套')) {
                    var f = 手套潜能[o];
                } else {
                    var f = 潜能列表[o];
                }
            }
            if (f != null) {
                潜能ID = f[0];
                潜能描述 = f[1];
                费用 = f[2];
                Gitem = cm.getInventory(1).getItem(1);
                cm.askYesNo_Bottom('#face' + k + '#当前选择：#g#v' + Gitem.getItemId() + '##z' + Gitem.getItemId() + '##k \r\n\r\n第#r' + j + '#k条潜能改为：#b[' + 潜能描述 + '#k] 吗？', 204, b);
            } else {
                cm.getTopMsgFont('出现错误联系管理员', 3, 20, 4, 0, 0);
                cm.dispose();
                return;
            }
        } else {
            if (status === e++) {
                if (cm.getItemQuantity(c) < 1) {
                    cm.getTopMsgFont('缺少货币无法使用服务。', 3, 20, 4, 0, 0);
                    cm.dispose();
                    return;
                }
                if (潜能ID <= 0 || 潜能描述 == '' || 费用 <= 0) {
                    cm.getTopMsgFont('出现错误联系管理员', 3, 20, 4, 0, 0);
                    cm.dispose();
                    return;
                }
                if (cm.changePotential(n, j, 潜能ID, false)) {
                    Gitem = cm.getInventory(1).getItem(1);
                    GID = Gitem.getItemId();
                    ii = cm.getItemInfo();
                    cm.gainItem(c, -1);
                    cm.worldSpouseMessage(37, '【蜡笔潜能】：土豪“' + cm.getPlayer().getName() + '”将『' + cm.getItemName(GID) + '』第[' + j + ']条潜能修改为：' + 潜能描述 + ' ');
                    cm.getTopMsgFont('系统提示：修改潜能成功!', 3, 20, 20, 0);
                    cm.effect_NormalSpeechBalloon('修改潜能完毕!', 1, 0, 0, 3000, 0, 0);
                    cm.dispose();
                    return;
                } else {
                    cm.getTopMsgFont('出现错误联系管理员', 3, 20, 4, 0, 0);
                    cm.dispose();
                    return;
                }
            }
        }
    }
}
function action5(g, l, o, e) {
    var m = cm.getConstantScriptContent('菜单_NPC立绘');
    var h = Math.floor(Math.random() * m.length);
    var b = m[h][0];
    var k = randomNum(0, m[h][1]);
    var j = 5;
    var n = 1;
    var c = 3994421;
    var p = cm.getEquipBySlot(n);
    var d = cm.getInventory(1).getItem(1).getItemId();
    if (status <= e++) {
        if (p == null || p.getGrade(false) != 20) {
            cm.askAcceptDecline_Bottom('#face' + k + '出现错误: \r\n\r\n1、请把#b材料#k放在装备栏#r1#k号位。\r\n2、装备的#b潜能等级#k必须为#rSS#k级。', 204, b);
            cm.dispose();
            return;
        }
        var a = '#face' + k + '##fn方正粗黑宋简体#';
        a += '  #r基本潜能[1]  #z' + c + '#[' + cm.getItemQuantity(c) + ']#k#fs15#';
        if (获取装备类型(d).equals('武器') || 获取装备类型(d).equals('副手')) {
            for (var e = 0; e < 武器副手潜能.length; e++) {
                a += '\r\n#L' + e + '#' + 武器副手潜能[e][1] + '#k  (消耗： #r' + 武器副手潜能[e][2] + '#k #k 蜡笔)#l';
            }
        } else {
            if (获取装备类型(d).equals('手套')) {
                for (var e = 0; e < 手套潜能.length; e++) {
                    a += '\r\n#L' + e + '#' + 手套潜能[e][1] + '#k  (消耗： #r' + 手套潜能[e][2] + '#k #k 蜡笔)#l';
                }
            } else {
                for (var e = 0; e < 潜能列表.length; e++) {
                    a += '\r\n#L' + e + '#' + 潜能列表[e][1] + '#k  (消耗： #r' + 潜能列表[e][2] + '#k #k 蜡笔)#l';
                }
            }
        }
        cm.addPopupSay(9110002, 5000, '『' + cm.getPlayer().getName() + '』\r\n「' + 获取装备类型(d) + '」潜能');
        cm.askMenu_Bottom(a + ' \r\n ', 204, b);
    } else {
        if (status === e++) {
            if (获取装备类型(d).equals('武器') || 获取装备类型(d).equals('副手')) {
                var f = 武器副手潜能[o];
            } else {
                if (获取装备类型(d).equals('手套')) {
                    var f = 手套潜能[o];
                } else {
                    var f = 潜能列表[o];
                }
            }
            if (f != null) {
                潜能ID = f[0];
                潜能描述 = f[1];
                费用 = f[2];
                Gitem = cm.getInventory(1).getItem(1);
                cm.askYesNo_Bottom('#face' + k + '#当前选择：#g#v' + Gitem.getItemId() + '##z' + Gitem.getItemId() + '##k \r\n\r\n第#r' + j + '#k条潜能改为：#b[' + 潜能描述 + '#k] 吗？', 204, b);
            } else {
                cm.getTopMsgFont('出现错误联系管理员', 3, 20, 4, 0, 0);
                cm.dispose();
                return;
            }
        } else {
            if (status === e++) {
                if (cm.getItemQuantity(c) < 1) {
                    cm.getTopMsgFont('缺少货币无法使用服务。', 3, 20, 4, 0, 0);
                    cm.dispose();
                    return;
                }
                if (潜能ID <= 0 || 潜能描述 == '' || 费用 <= 0) {
                    cm.getTopMsgFont('出现错误联系管理员', 3, 20, 4, 0, 0);
                    cm.dispose();
                    return;
                }
                if (cm.changePotential(n, j, 潜能ID, false)) {
                    Gitem = cm.getInventory(1).getItem(1);
                    GID = Gitem.getItemId();
                    ii = cm.getItemInfo();
                    cm.gainItem(c, -1);
                    cm.worldSpouseMessage(37, '【蜡笔潜能】：土豪“' + cm.getPlayer().getName() + '”将『' + cm.getItemName(GID) + '』第[' + j + ']条潜能修改为：' + 潜能描述 + ' ');
                    cm.getTopMsgFont('系统提示：修改潜能成功!', 3, 20, 20, 0);
                    cm.effect_NormalSpeechBalloon('修改潜能完毕!', 1, 0, 0, 3000, 0, 0);
                    cm.dispose();
                    return;
                } else {
                    cm.getTopMsgFont('出现错误联系管理员', 3, 20, 4, 0, 0);
                    cm.dispose();
                    return;
                }
            }
        }
    }
}
function action6(g, l, o, e) {
    var m = cm.getConstantScriptContent('菜单_NPC立绘');
    var h = Math.floor(Math.random() * m.length);
    var b = m[h][0];
    var k = randomNum(0, m[h][1]);
    var j = 6;
    var n = 1;
    var c = 3994422;
    var p = cm.getEquipBySlot(n);
    var d = cm.getInventory(1).getItem(1).getItemId();
    if (status <= e++) {
        if (p == null || p.getGrade(false) != 20) {
            cm.askAcceptDecline_Bottom('#face' + k + '出现错误: \r\n\r\n1、请把#b材料#k放在装备栏#r1#k号位。\r\n2、装备的#b潜能等级#k必须为#rSS#k级。', 204, b);
            cm.dispose();
            return;
        }
        var a = '#face' + k + '##fn方正粗黑宋简体#';
        a += '  #r基本潜能[1]  #z' + c + '#[' + cm.getItemQuantity(c) + ']#k#fs15#';
        if (获取装备类型(d).equals('武器') || 获取装备类型(d).equals('副手')) {
            for (var e = 0; e < 武器副手潜能.length; e++) {
                a += '\r\n#L' + e + '#' + 武器副手潜能[e][1] + '#k  (消耗： #r' + 武器副手潜能[e][2] + '#k #k 蜡笔)#l';
            }
        } else {
            if (获取装备类型(d).equals('手套')) {
                for (var e = 0; e < 手套潜能.length; e++) {
                    a += '\r\n#L' + e + '#' + 手套潜能[e][1] + '#k  (消耗： #r' + 手套潜能[e][2] + '#k #k 蜡笔)#l';
                }
            } else {
                for (var e = 0; e < 潜能列表.length; e++) {
                    a += '\r\n#L' + e + '#' + 潜能列表[e][1] + '#k  (消耗： #r' + 潜能列表[e][2] + '#k #k 蜡笔)#l';
                }
            }
        }
        cm.addPopupSay(9110002, 5000, '『' + cm.getPlayer().getName() + '』\r\n「' + 获取装备类型(d) + '」潜能');
        cm.askMenu_Bottom(a + ' \r\n ', 204, b);
    } else {
        if (status === e++) {
            if (获取装备类型(d).equals('武器') || 获取装备类型(d).equals('副手')) {
                var f = 武器副手潜能[o];
            } else {
                if (获取装备类型(d).equals('手套')) {
                    var f = 手套潜能[o];
                } else {
                    var f = 潜能列表[o];
                }
            }
            if (f != null) {
                潜能ID = f[0];
                潜能描述 = f[1];
                费用 = f[2];
                Gitem = cm.getInventory(1).getItem(1);
                cm.askYesNo_Bottom('#face' + k + '#当前选择：#g#v' + Gitem.getItemId() + '##z' + Gitem.getItemId() + '##k \r\n\r\n第#r' + j + '#k条潜能改为：#b[' + 潜能描述 + '#k] 吗？', 204, b);
            } else {
                cm.getTopMsgFont('出现错误联系管理员', 3, 20, 4, 0, 0);
                cm.dispose();
                return;
            }
        } else {
            if (status === e++) {
                if (cm.getItemQuantity(c) < 1) {
                    cm.getTopMsgFont('缺少货币无法使用服务。', 3, 20, 4, 0, 0);
                    cm.dispose();
                    return;
                }
                if (潜能ID <= 0 || 潜能描述 == '' || 费用 <= 0) {
                    cm.getTopMsgFont('出现错误联系管理员', 3, 20, 4, 0, 0);
                    cm.dispose();
                    return;
                }
                if (cm.changePotential(n, j, 潜能ID, false)) {
                    Gitem = cm.getInventory(1).getItem(1);
                    GID = Gitem.getItemId();
                    ii = cm.getItemInfo();
                    cm.gainItem(c, -1);
                    cm.worldSpouseMessage(37, '【蜡笔潜能】：土豪“' + cm.getPlayer().getName() + '”将『' + cm.getItemName(GID) + '』第[' + j + ']条潜能修改为：' + 潜能描述 + ' ');
                    cm.getTopMsgFont('系统提示：修改潜能成功!', 3, 20, 20, 0);
                    cm.effect_NormalSpeechBalloon('修改潜能完毕!', 1, 0, 0, 3000, 0, 0);
                    cm.dispose();
                    return;
                } else {
                    cm.getTopMsgFont('出现错误联系管理员', 3, 20, 4, 0, 0);
                    cm.dispose();
                    return;
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