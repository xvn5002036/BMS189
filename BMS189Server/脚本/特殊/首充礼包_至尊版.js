var 草地特效 = '#fItem/Cash/0501.img/05010056/effect/walk1/5#';
var 箭头特效 = '#fUI/UIWindow.img/Quest/icon2/0#';
var 档位 = [
    1000,
    3000,
    6000,
    10000,
    20000
];
var 礼包内容 = [
    [
        1,
        2430976,
        1
    ],
    [
        1,
        2431938,
        1
    ],
    [
        1,
        2432341,
        3
    ],
    [
        1,
        1113055,
        1
    ],
    [
        1,
        1112918,
        1
    ],
    [
        1,
        1113073,
        1
    ],
    [
        1,
        1132244,
        1
    ],
    [
        1,
        1122265,
        1
    ],
    [
        1,
        1032221,
        1
    ],
    [
        1,
        2430499,
        5
    ],
    [
        1,
        3014026,
        1
    ],
    [
        1,
        5064000,
        8
    ],
    [
        1,
        2340000,
        8
    ],
    [
        1,
        2049124,
        8
    ],
    [
        1,
        5062500,
        20
    ],
    [
        1,
        5062024,
        5
    ],
    [
        1,
        2048306,
        2
    ],
    [
        1,
        2049750,
        2
    ],
    [
        1,
        4001715,
        1
    ],
    [
        1,
        2430683,
        2
    ],
    [
        2,
        2434281,
        1
    ],
    [
        2,
        2434340,
        1
    ],
    [
        2,
        2437534,
        6
    ],
    [
        2,
        2432341,
        3
    ],
    [
        2,
        1032222,
        1
    ],
    [
        2,
        1132245,
        1
    ],
    [
        2,
        1113074,
        1
    ],
    [
        2,
        1122266,
        2
    ],
    [
        2,
        2430069,
        20
    ],
    [
        2,
        2340000,
        10
    ],
    [
        2,
        2049124,
        10
    ],
    [
        2,
        5062500,
        30
    ],
    [
        2,
        5062024,
        10
    ],
    [
        2,
        2048306,
        2
    ],
    [
        2,
        2049750,
        3
    ],
    [
        2,
        4001715,
        3
    ],
    [
        2,
        2430683,
        5
    ],
    [
        2,
        4310029,
        500
    ],
    [
        2,
        3994745,
        7
    ],
    [
        3,
        2435740,
        1
    ],
    [
        3,
        2430029,
        1
    ],
    [
        3,
        2433442,
        5
    ],
    [
        3,
        2437534,
        6
    ],
    [
        3,
        2431938,
        2
    ],
    [
        3,
        2432069,
        3
    ],
    [
        2,
        1032223,
        1
    ],
    [
        2,
        1132246,
        1
    ],
    [
        2,
        1113075,
        1
    ],
    [
        2,
        1122267,
        2
    ],
    [
        3,
        2430069,
        50
    ],
    [
        3,
        2340000,
        10
    ],
    [
        3,
        2049124,
        10
    ],
    [
        3,
        5062500,
        30
    ],
    [
        3,
        5062024,
        10
    ],
    [
        3,
        4001715,
        10
    ],
    [
        3,
        2430683,
        10
    ],
    [
        3,
        3994745,
        10
    ],
    [
        4,
        2433512,
        1
    ],
    [
        4,
        2432306,
        1
    ],
    [
        4,
        2430029,
        3
    ],
    [
        4,
        2433442,
        3
    ],
    [
        4,
        2437534,
        6
    ],
    [
        4,
        2432069,
        10
    ],
    [
        4,
        2340000,
        20
    ],
    [
        4,
        2049124,
        25
    ],
    [
        4,
        5062500,
        50
    ],
    [
        4,
        5062024,
        30
    ],
    [
        4,
        4001715,
        8
    ],
    [
        4,
        2430683,
        20
    ],
    [
        4,
        3994745,
        20
    ]
];
var sel, text, 累计充值元, 累计充值余额;
var status = -1;
function start() {
    action(1, 0, 0);
}
function action(d, h, k) {
    var j = cm.getConstantScriptContent('菜单_NPC立绘');
    var e = Math.floor(Math.random() * j.length);
    var b = j[e][0];
    var g = randomNum(0, j[e][1]);
    if (status == 0 && d == 0) {
        cm.dispose();
        cm.openNpc(0, '拍卖菜单_至尊版');
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
    if (status == 0) {
        累计充值元 = cm.getPlayer().getRMB();
        累计充值余额 = cm.getPlayer().getHyPay(1);
        text = ' #face' + g + '##fs18##r#fn方正粗黑宋简体#欢迎使用 ' + cm.getServerName() + ' 首充礼包#fs15#\r\n';
        text += '  #b数字账号：' + cm.getClient().getAccountName() + '  ';
        text += '  累计充值：' + 累计充值元 + '元（' + 累计充值余额 + '余额）#k\r\n';
        text += '  首充礼包账号限领1次，每阶段赠送超强漆黑套装一件，共5件。\r\n#k';
        for (var c = 1; c <= 档位.length; c++) {
            if (累计充值元 >= 档位[c - 1]) {
                var f = ' #g可领取#k';
            } else {
                var f = '#r未达标#k';
            }
            if (cm.getEventCount('首充礼包' + c, 1) == 1) {
                f = '';
                空格符 = '';
                text += '#L' + c + '#' + 箭头特效 + ' ' + f + ' 首充礼包 ' + 档位[c - 1] + '元[已领取]#l\r\n';
            } else {
                空格符 = '  				';
                text += '#L' + c + '#' + 箭头特效 + ' ' + f + ' #r首充礼包 ' + 档位[c - 1] + '元  				[#r未领取]#l\r\n';
            }
        }
        text += '#k';
        cm.askMenu_Bottom(text, 204, b);
    } else {
        if (status == 1) {
            sel = k;
            text = '#face' + g + '#			#r- 累计充值' + 档位[k - 1] + '余额福利 -#k#n\r\n\r\n';
            for (var c = 0; c < 礼包内容.length; c++) {
                if (礼包内容[c][0] == k) {
                    text += '			#i' + 礼包内容[c][1] + '# #z' + 礼包内容[c][1] + '#[' + 礼包内容[c][2] + '个]\r\n';
                }
            }
            cm.askAcceptDecline_Bottom(text, 204, b);
        } else {
            if (status == 2) {
                if (累计充值元 < 档位[sel - 1]) {
                    cm.getTopMsgFont('累计金额未达标', 3, 20, 4, 0, 0);
                    cm.dispose();
                    return;
                }
                if (cm.getEventCount('首充礼包' + sel, 1) == 1) {
                    cm.getTopMsgFont('每个账号只能领取一次', 3, 20, 4, 0, 0);
                    status = -1;
                    return;
                }
                var a = [];
                for (var c = 0; c < 礼包内容.length; c++) {
                    if (礼包内容[c][0] == sel) {
                        if (礼包内容[c][3] == null) {
                            礼包内容[c][3] = -1;
                        }
                        a.push([
                            礼包内容[c][1],
                            礼包内容[c][2],
                            礼包内容[c][3]
                        ]);
                    }
                }
                if (!cm.canHoldSlots(a.length)) {
                    cm.getTopMsgFont('包裹空间不足，请确保包裹每个栏位有至少 ' + a.length + ' 格空间', 3, 20, 4, 0, 0);
                    cm.dispose();
                    return;
                }
                for (var c = 0; c < a.length; c++) {
                    cm.gainItem(a[c][0], a[c][1]);
                }
                cm.setEventCount('首充礼包' + sel, 1);
                cm.getTopMsgFont('领取成功', 3, 20, 20, 0);
                cm.worldSpouseMessage(23, '≡首充礼包≡　　恭喜玩家 ' + cm.getPlayer().getName() + ' 领取了首充奖励 ' + 档位[sel - 1] + ' 元的福利礼包！！！');
                cm.worldSpouseMessage(23, '≡首充礼包≡　　恭喜玩家 ' + cm.getPlayer().getName() + ' 领取了首充奖励 ' + 档位[sel - 1] + ' 元的福利礼包！！！');
                cm.worldSpouseMessage(23, '≡首充礼包≡　　恭喜玩家 ' + cm.getPlayer().getName() + ' 领取了首充奖励 ' + 档位[sel - 1] + ' 元的福利礼包！！！');
                cm.dispose();
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
Number.prototype.formatMoney = function (d, g, h, a) {
    d = !isNaN(d = Math.abs(d)) ? d : 2;
    g = g !== undefined ? g : '　';
    h = h || ',';
    a = a || '.';
    var f = this, c = f < 0 ? '-' : '', e = parseInt(f = Math.abs(+f || 0).toFixed(d), 10) + '', b = (b = e.length) > 3 ? b % 3 : 0;
    return g + c + (b ? e.substr(0, b) + h : '') + e.substr(b).replace(/(\d{3})(?=\d)/g, '$1' + h) + (d ? a + Math.abs(f - e).toFixed(d).slice(2) : '');
};