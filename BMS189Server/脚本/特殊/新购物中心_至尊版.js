var 品客缤图标 = '#fUI/UIWindow2.img/StagedGachapon/Creature/0/normal/2#';
var 心形图标 = '#fUI/UIWindow2.img/Megaphone/0#';
var 选择物品图标 = '#fUI/UIWindow2.img/QuestIcon/3/0#';
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
var wn8 = '#fUI/CashShop.img/CSBeauty/hairColor/Enable/7#';
var shop = '';
var 进行搜索了 = false;
var choice, choices, selects;
var status = 0, 购买数量 = 0, 条目分类 = 0, 条目计数 = 0;
var 统计道具列表 = null, 统计最终道具列表 = null, 道具列表 = null, 搜索结果 = null, 最终道具列表 = null;
var 装备分类 = [
    [
        0,
        '帽子'
    ],
    [
        1,
        '上衣'
    ],
    [
        2,
        '套服'
    ],
    [
        3,
        '裤裙'
    ],
    [
        4,
        '鞋子'
    ],
    [
        5,
        '手套'
    ],
    [
        6,
        '披风'
    ],
    [
        7,
        '武器'
    ],
    [
        8,
        '戒指'
    ],
    [
        12,
        '饰品'
    ],
    [
        13,
        '椅子'
    ],
    [
        14,
        '安卓'
    ],
    [
        15,
        '星岩'
    ],
    [
        500,
        '宠物'
    ],
    [
        16,
        '骑宠'
    ],
    [
        17,
        '消耗'
    ],
    [
        18,
        '卷轴'
    ],
    [
        999,
        '道具'
    ]
];
function start() {
    status = -1;
    action(1, 0, 0);
}
function action(d, k, m) {
    var l = cm.getConstantScriptContent('菜单_NPC立绘');
    var f = Math.floor(Math.random() * l.length);
    var a = l[f][0];
    var h = cm.rand(0, l[f][1]);
    if (d == 0 && status == 0) {
        cm.dispose();
        return;
    }
    if (d <= 0 && status > 0) {
        cm.dispose();
        cm.openNpc(0, '新购物中心_至尊版');
        return;
    }
    if (d == 1) {
        status++;
    } else {
        status--;
    }
    if (cm.getzhizunvip() != 2) {
        cm.dispose();
        cm.playerMessage(1, '该菜单是至尊版专享。');
        return;
    }
    if (status == -1) {
        cm.dispose();
    } else {
        if (status == 0) {
            统计道具列表 = 获取商店列表();
            统计最终道具列表 = 统计道具列表;
            for (var j = 0; j < 统计最终道具列表.length; j++) {
            }
            text = '#face' + h + '##fn方正粗黑宋简体#';
            text += '     #fs17##r欢迎使用 ' + cm.getServerName() + ' 购物中心#fs15#\r\n';
            text += '      服务器时间：#b' + year + '年' + month + '月' + day + '日 ' + hour + '点' + min + '分' + sec + '秒 #r星期' + weekName[weekday] + '#k\r\n';
            text += '  #fs17##L2014##r进行搜索#k（商品' + j + '件）#l#k   #L10086##r购买礼包#k（组合套装）#k#l\r\n\r\n#fs15#';
            for (var b = 0; b < 装备分类.length; b++) {
                text += ' #b#L' + b + '#' + 装备分类[b][1] + '#l	';
                if (!((b + 1) % 6)) {
                    text += '\r\n';
                }
            }
            cm.askMenu_Bottom(text, 204, a);
        } else {
            if (status == 1) {
                if (m == 10086) {
                    cm.dispose();
                    cm.openNpc(0, '购买礼包_至尊版');
                    return;
                }
                if (m == 2014) {
                    status = 0;
                    cm.askText_Bottom('#face' + h + '##fn方正粗黑宋简体# 请输入您要搜索的商品名称，支持模糊查询。', a);
                    进行搜索了 = true;
                } else {
                    条目分类 = m;
                    if (进行搜索了) {
                        if (cm.getText() == '') {
                            cm.playerMessage(-1, '请输入关键字！');
                            cm.effect_NormalSpeechBalloon('请输入关键字', 1, 0, 0, 3000, 0, 0);
                            cm.dispose();
                            return;
                        }
                        搜索结果 = 获取搜索关键字(cm.getText());
                        最终道具列表 = 搜索结果;
                        条目分类 = 9;
                        text = '#face' + h + '##fn方正粗黑宋简体#';
                        text += ' ' + cm.getPlayer().getName() + ',您搜索的【#r' + cm.getText() + '#k】物品如下：\r\n\r\n#b';
                    } else {
                        if (道具列表 == null) {
                            道具列表 = 获取商店列表();
                        }
                        最终道具列表 = 道具列表;
                        text = '#fs13##face' + h + '##fnConsolas#' + 选择物品图标 + shop + '\r\n';
                    }
                    if (最终道具列表.length <= 0) {
                        status = -1;
                        text += ' 未找到您要找的物品，请联系管理员进行添加。';
                        cm.askYesNo_Bottom(text, 204, a);
                    }
                    for (var b = 0; b < 最终道具列表.length; b++) {
                        if (获取装备类型(最终道具列表[b][0]) != 装备分类[条目分类][0] && !进行搜索了) {
                            continue;
                        }
                        条目计数++;
                        if (获取装备类型(最终道具列表[b][0]) == 16) {
                            text += '#L' + b + '##s' + 最终道具列表[b][0] + '# ';
                            text += '#b' + 最终道具列表[b][2] + '#k';
                            字符填充(8, 最终道具列表[b][2]);
                            text += '#l';
                        } else {
                            if (获取装备类型(最终道具列表[b][0]) == 17) {
                                text += '#L' + b + '##v' + 最终道具列表[b][0] + '# ';
                                text += '#b' + 最终道具列表[b][2] + '#k';
                                字符填充(8, 最终道具列表[b][2]);
                                text += '#l';
                            } else {
                                text += '#L' + b + '##i' + 最终道具列表[b][0] + '# ';
                                text += '#b' + 最终道具列表[b][2] + '#k';
                                if (cm.getPlayer().isGM()) {
                                }
                                try {
                                    字符填充(8, cm.getItemName(最终道具列表[b][0]));
                                } catch (g) {
                                    cm.playerMessage(5, ' 出现错误！道具[' + 最终道具列表[b][0] + ']属性为空！\r\n ' + g);
                                }
                                text += '#l';
                            }
                        }
                        if (获取装备类型(最终道具列表[b][0]) == 18 || 获取装备类型(最终道具列表[b][0]) == 999) {
                            if (b != 0 && (b + 1) % 1 == 0) {
                                text += ' \r\n';
                            }
                        } else {
                            if (b != 0 && (b + 1) % 3 <= 0) {
                                text += '\r\n';
                            }
                        }
                    }
                    进行搜索了 = false;
                    if (条目计数 == 0) {
                        cm.sendNext_Bottom('#face' + h + '##fn方正粗黑宋简体# 请联系管理员添加装备！', a);
                        status = -1;
                        return;
                    } else {
                        cm.askMenu_Bottom(text, 204, a);
                    }
                    cm.getTopMsgFont(' 条目计件：' + 条目计数 + ' 个 ', 3, 20, 4, 0, 0);
                }
            } else {
                if (status == 2) {
                    selects = m;
                    if (cm.getPlayer().isGM()) {
                        cm.playerMessage(6, ' Debug：玩家选择：[' + 获取装备类型(最终道具列表[selects][0]) + '] 返回值：[' + 获取装备类型(最终道具列表[selects][1]) + '] ');
                        cm.playerMessage(-1, ' Debug：玩家选择：[' + 获取装备类型(最终道具列表[selects][0]) + '] 返回值：[' + 获取装备类型(最终道具列表[selects][1]) + '] ');
                    }
                    if (获取装备类型(最终道具列表[selects][0]) != 17 && 获取装备类型(最终道具列表[selects][0]) != 18 && 获取装备类型(最终道具列表[selects][0]) != 999) {
                        购买数量 = 1;
                        status = 3;
                        结账UI();
                    } else {
                        cm.askNumber_Bottom('#face' + h + '##fnConsolas##r >>> 商品详情：#k\r\n#b商品简介：#k#v' + 最终道具列表[selects][0] + '# #r#z' + 最终道具列表[selects][0] + '##k  请输入购买数量：\r\n', a, 1, 1, 9999);
                    }
                } else {
                    if (status == 3) {
                        购买数量 = m;
                        结账UI();
                    } else {
                        if (status == 4) {
                            if (获取装备类型(最终道具列表[selects][0]) != 16) {
                                if (!cm.canHold(最终道具列表[selects][0], 购买数量)) {
                                    cm.sendOkS('哎呀呀！！\r\n选择了' + 购买数量 + '个#r#v' + 最终道具列表[selects][0] + '##z' + 最终道具列表[selects][0] + '##k但背包没空位啊。');
                                    cm.dispose();
                                    return;
                                }
                            }
                            if (cm.getPlayer().getCSPoints(1) >= 购买数量 * 最终道具列表[selects][1]) {
                                cm.getPlayer().modifyCSPoints(1, -购买数量 * 最终道具列表[selects][1], true);
                                if (获取装备类型(最终道具列表[selects][0]) == 500) {
                                    cm.gainPet(最终道具列表[selects][0], 购买数量, 最终道具列表[selects][2]);
                                    cm.effect_NormalSpeechBalloon('本次购物成功！\r\n获得物品：' + 最终道具列表[selects][2] + ' x' + 购买数量 + '\r\n继续购物或[ESC]退出菜单', 1, 0, 0, 5000, 0, 0);
                                    cm.getTopMsgFont('获得物品：' + 最终道具列表[selects][2] + ' x' + 购买数量 + '', 3, 20, 20, 0);
                                } else {
                                    if (获取装备类型(最终道具列表[selects][0]) == 16) {
                                        cm.teachSkill(最终道具列表[selects][0], 1, 0);
                                        cm.effect_NormalSpeechBalloon('本次购物成功！\r\n学会技能：[' + 最终道具列表[selects][2] + '] \r\n继续购物或[ESC]退出菜单', 1, 0, 0, 5000, 0, 0);
                                        cm.getTopMsgFont('学会技能：[' + 最终道具列表[selects][2] + '] ', 3, 20, 20, 0);
                                    } else {
                                        cm.gainItem(最终道具列表[selects][0], 购买数量);
                                        cm.effect_NormalSpeechBalloon('本次购物成功！\r\n获得物品：' + 最终道具列表[selects][2] + ' x' + 购买数量 + '\r\n继续购物或[ESC]退出菜单', 1, 0, 0, 5000, 0, 0);
                                        cm.getTopMsgFont('获得物品：' + 最终道具列表[selects][2] + ' x' + 购买数量 + '', 3, 20, 20, 0);
                                    }
                                }
                                cm.worldSpouseMessage(25, '[本服商城]  : 真是豪爽！玩家“' + cm.getPlayer().getName() + '”在商场购买' + 装备分类[条目分类][1] + '：' + 最终道具列表[selects][2] + ' x' + 购买数量 + '');
                                cm.dispose();
                                cm.openNpc(0, '新购物中心_至尊版');
                            } else {
                                cm.sendOk('#fs23##b【#v4002003##z4002003#】#k\r\n \r\n#fs13#应付金额：' + 购买数量 * 最终道具列表[selects][1] + '点券\r\n对不起，你没有足够的点券。');
                                cm.playerMessage(-1, '我没有足够的钱！');
                                cm.dispose();
                            }
                        }
                    }
                }
            }
        }
    }
}
function 字符填充(b, g) {
    var c = b;
    var i = g.length;
    var h = i;
    for (var f = 0; f < i; f++) {
        if (g.charCodeAt(f) < 0 || g.charCodeAt(f) > 255) {
            h++;
        }
    }
    var a = c - h / 2;
    if (h > 0) {
        for (var e = 0; e < a; e++) {
            text += '　';
        }
    } else {
        text += '　';
    }
}
function 结账UI() {
    var c = cm.getConstantScriptContent('菜单_NPC立绘');
    var b = Math.floor(Math.random() * c.length);
    var a = c[b][0];
    var d = cm.rand(0, c[b][1]);
    Ttext = '#face' + d + '##fnConsolas#';
    Ttext += '  #fs16##r>>> 订单详情：#k\r\n';
    Ttext += '  #fs15#	#b商品图标：#k#v' + 最终道具列表[selects][0] + '#	#b购买数量：#r' + 购买数量 + '#k\r\n';
    Ttext += '  #fs15#	#b商品名称：#r#z' + 最终道具列表[selects][0] + '##k	#b使用期限：#r无限制#k\r\n';
    Ttext += '  #fs16##r>>> 商品价格：#k\r\n';
    Ttext += '  #fs15#	#b商品原价：#r' + 最终道具列表[selects][1] + ' #b点券#k';
    Ttext += '  #fs15#	#b本次总价：#r' + 购买数量 * 最终道具列表[selects][1] + ' #b点券#k\r\n';
    Ttext += '  #fs16##r>>> 支付方式：#k\r\n';
    Ttext += '  #fs15#	#b支付方式：#r点券 #b支付#l#k\r\n';
    cm.askAcceptDecline_Bottom(Ttext, 204, a);
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
    case 111:
        return 8;
    case 301:
        return 13;
    case 306:
        return 15;
    case 500:
        return 500;
    default:
        if (a == 101 || a == 102 || a == 103) {
            return 12;
        }
        if (a == 166 || a == 167) {
            return 14;
        }
        if (a == 8000 || a == 8001) {
            return 16;
        }
        if (a == 243 || a == 263) {
            return 17;
        }
        if (a == 261 || a == 204 || a == 234) {
            return 18;
        }
        if (a == 120) {
            return 999;
        }
        if (a == 135) {
            return 999;
        }
        if (a == 506) {
            return 999;
        }
        if (a == 553) {
            return 999;
        }
        var a = Math.floor(a / 10);
        if (a == 12 || a == 13 || a == 14 || a == 15 || a == 17) {
            return 7;
        }
        return 999;
    }
}
function 获取商店列表() {
    var b = [];
    var a = 'select itemid, itemname, itemprice from npccashshop order by id desc, itemprice asc';
    cm.queryForAllResults(a).forEach(function (c) {
        b.push([
            c.getInt('itemid'),
            c.getInt('itemprice'),
            c.getString('itemname')
        ]);
    });
    return b;
}
function 获取搜索关键字(a) {
    a = a.replaceAll('.*([\';]+|(--)+).*', ' ');
    var c = [];
    var b = 'select itemid, itemname, itemprice from npccashshop where itemname like \'%' + a + '%\' order by id desc, itemprice asc';
    cm.queryForAllResults(b).forEach(function (d) {
        c.push([
            d.getInt('itemid'),
            d.getInt('itemprice'),
            d.getString('itemname')
        ]);
    });
    return c;
}