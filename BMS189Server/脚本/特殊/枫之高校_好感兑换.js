var status = -1;
var selectionLog = [];
var 好感材料 = 3800452;
var 灰好感图标 = 3800453;
var 金币图标 = 3801305;
var z = '#fEffect/ItemEff/1112811/0/0#';
var tz12 = '#fEffect/CharacterEff/1112924/0/0#';
var tz13 = '#fEffect/CharacterEff/1112925/0/0#';
var itemIcon = '#fUI/Basic.img/Cursor/32/0#';
var itemBorder = '#fUI/UIWindow.img/Item/New/inventory/0#';
var name = [
    '乔',
    '海丽蜜',
    '小龙',
    '李卡司'
];
var totem = [
    [
        1202026,
        1202025,
        1202024,
        1202023
    ],
    [
        1202030,
        1202029,
        1202028,
        1202027
    ],
    [
        1202034,
        1202033,
        1202032,
        1202031
    ],
    [
        1202038,
        1202037,
        1202036,
        1202035
    ]
];
var likeReq = [
    500,
    1000,
    2000,
    3000,
    4000
];
var shop = [
    [
        [
            1202026,
            500,
            500000
        ],
        [
            1202025,
            1000,
            1000000
        ],
        [
            1202024,
            2000,
            10000000
        ],
        [
            1202023,
            3000,
            100000000
        ],
        [
            1202042,
            4000,
            150000000
        ],
        [
            1202086,
            5000,
            200000000
        ]
    ],
    [
        [
            1202030,
            500,
            500000
        ],
        [
            1202029,
            1000,
            1000000
        ],
        [
            1202028,
            2000,
            10000000
        ],
        [
            1202027,
            3000,
            100000000
        ],
        [
            1202041,
            4000,
            150000000
        ],
        [
            1202085,
            5000,
            200000000
        ]
    ],
    [
        [
            1202034,
            500,
            500000
        ],
        [
            1202033,
            1000,
            1000000
        ],
        [
            1202032,
            2000,
            10000000
        ],
        [
            1202031,
            3000,
            100000000
        ],
        [
            1202040,
            4000,
            150000000
        ],
        [
            1202084,
            5000,
            200000000
        ]
    ],
    [
        [
            1202038,
            500,
            500000
        ],
        [
            1202037,
            1000,
            1000000
        ],
        [
            1202036,
            2000,
            10000000
        ],
        [
            1202035,
            3000,
            100000000
        ],
        [
            1202039,
            4000,
            150000000
        ],
        [
            1202083,
            5000,
            200000000
        ]
    ]
];
function start() {
    action(1, 0, 0);
}
function action(c, b, a) {
    if (status == 0 && c == 0) {
        cm.dispose();
        return;
    }
    c == 1 ? status++ : status--;
    selectionLog[status] = a;
    if (status == 0) {
        好感菜单();
    } else {
        if (selectionLog[1] < 4) {
            提升好感();
        } else {
            兑换收藏();
        }
    }
}
function 好感菜单() {
    var e = cm.getInfoQuest(52367);
    var a = e ? e.split(';').map(function (f) {
        return parseInt(f, 10);
    }) : [
        0,
        0,
        0,
        0
    ];
    var d = getLikeLevel(a, likeReq);
    text = '这里存放着四大天王珍藏的绝版图腾。但是只要与他们好感度提升到一定程度，就可以以巨资说服他们忍痛割爱了。\r\n\r\n如何提升#r#i' + 好感材料 + '#好感#k呢？自然是战斗了！友谊只有在对决中才能得到提升。\r\n\r\n';
    text += '#k#e┌		        ─ #b枫之高校 ─     		     ┐#n\r\n\r\n';
    text += '    ';
    for (var c = 0; c < 4; c++) {
        text += '#i' + totem[c][Math.min(3, Math.max(0, d[c] - 1))] + '#		';
    }
    text += '\r\n	  ';
    text += '乔		 海丽蜜		   小龙		    李卡司';
    text += '\r\n#r';
    var b = [
        a[0].toString().length,
        a[1].toString().length,
        a[2].toString().length,
        a[3].toString().length
    ];
    for (var c = 0; c < Math.max(0, 4 - Math.floor(b[0] / 2)); c++) {
        text += ' ';
    }
    text += '#i' + 好感材料 + '# ' + a[0];
    for (var c = 0; c < 10 - Math.floor(b[0] / 2) - b[0] % 2 - Math.floor(b[1] / 2); c++) {
        text += ' ';
    }
    text += '#i' + 好感材料 + '# ' + a[1];
    for (var c = 0; c < 10 - Math.floor(b[1] / 2) - b[1] % 2 - Math.floor(b[2] / 2); c++) {
        text += ' ';
    }
    text += '#i' + 好感材料 + '# ' + a[2];
    for (var c = 0; c < 10 - Math.floor(b[2] / 2) - b[2] % 2 - Math.floor(b[3] / 2); c++) {
        text += ' ';
    }
    text += '#i' + 好感材料 + '# ' + a[3];
    text += '#k\r\n';
    for (var c = 0; c < 4; c++) {
        text += '#b#L' + c + '#提升好感#l  ';
    }
    text += '\r\n';
    for (var c = 4; c < 8; c++) {
        text += '#r#L' + c + '#兑换收藏#l  ';
    }
    text += '#k#e\r\n\r\n└											┘#n';
    cm.askMenu(text);
}
function 提升好感() {
    var g = cm.getInfoQuest(52367);
    var a = g ? g.split(';').map(function (h) {
        return parseInt(h, 10);
    }) : [
        0,
        0,
        0,
        0
    ];
    var f = getLikeLevel(a, likeReq);
    var c = selectionLog[1];
    if (status == 1) {
        text = '\r\n';
        text += '#k#e┌		        ─ #b提升好感 ─     		     ┐#n\r\n\r\n';
        text += '   ';
        for (var d = 0; d < 4; d++) {
            if (d == c) {
                text += '#i' + totem[d][Math.min(3, Math.max(0, f[d] - 1))] + '#		';
            } else {
                text += itemBorder + '		';
            }
        }
        text += '\r\n	  ';
        text += '乔		 海丽蜜		   小龙		    李卡司';
        text += '\r\n#r';
        var b = [
            a[0].toString().length,
            a[1].toString().length,
            a[2].toString().length,
            a[3].toString().length
        ];
        for (var d = 0; d < Math.max(0, 4 - Math.floor(b[0] / 2)); d++) {
            text += ' ';
        }
        text += '#i' + (0 == c ? 好感材料 : 灰好感图标) + '# ' + a[0];
        for (var d = 0; d < 10 - Math.floor(b[0] / 2) - b[0] % 2 - Math.floor(b[1] / 2); d++) {
            text += ' ';
        }
        text += '#i' + (1 == c ? 好感材料 : 灰好感图标) + '# ' + a[1];
        for (var d = 0; d < 10 - Math.floor(b[1] / 2) - b[1] % 2 - Math.floor(b[2] / 2); d++) {
            text += ' ';
        }
        text += '#i' + (2 == c ? 好感材料 : 灰好感图标) + '# ' + a[2];
        for (var d = 0; d < 10 - Math.floor(b[2] / 2) - b[2] % 2 - Math.floor(b[3] / 2); d++) {
            text += ' ';
        }
        text += '#i' + (3 == c ? 好感材料 : 灰好感图标) + '# ' + a[3];
        text += '#k#e\r\n\r\n└											┘#n';
        var e = cm.getItemQuantity(好感材料);
        if (e > 0) {
            text += '\r\n要提升多少#r#i' + 好感材料 + '#好感#k呢？';
            cm.askNumber(text, 1, 1, e);
        } else {
            text += '\r\n但是身上没有任何的#r#i' + 好感材料 + '#好感#k，无法提升好感度。';
            cm.sendOk(text);
            cm.dispose();
        }
    } else {
        if (status == 2) {
            text = '\r\n\r\n#r#i' + 好感材料 + '#好感#k提升成功了！';
            cm.sendOk(text);
        } else {
            cm.gainItem(好感材料, -selectionLog[2]);
            a[c] += selectionLog[2];
            cm.updateInfoQuest(52367, a[0] + ';' + a[1] + ';' + a[2] + ';' + a[3]);
            cm.dispose();
        }
    }
}
function 兑换收藏() {
    var a = cm.getInfoQuest(52367);
    var c = a ? a.split(';').map(function (i) {
        return parseInt(i, 10);
    }) : [
        0,
        0,
        0,
        0
    ];
    var g = getLikeLevel(c, likeReq);
    var f = selectionLog[1] - 4;
    if (status == 1) {
        j = '\r\n';
        j += '#k#e┌		        ─ #b兑换收藏 ─     		     ┐#n\r\n\r\n';
        j += '   ';
        for (var d = 0; d < 4; d++) {
            if (d == f) {
                j += '#i' + totem[d][Math.min(3, Math.max(0, g[d] - 1))] + '#		';
            } else {
                j += itemBorder + '		';
            }
        }
        j += '\r\n	  ';
        j += '乔		 海丽蜜		   小龙		    李卡司';
        j += '\r\n#r';
        var e = [
            c[0].toString().length,
            c[1].toString().length,
            c[2].toString().length,
            c[3].toString().length
        ];
        for (var d = 0; d < Math.max(0, 4 - Math.floor(e[0] / 2)); d++) {
            j += ' ';
        }
        j += '#i' + (0 == f ? 好感材料 : 灰好感图标) + '# ' + c[0];
        for (var d = 0; d < 10 - Math.floor(e[0] / 2) - e[0] % 2 - Math.floor(e[1] / 2); d++) {
            j += ' ';
        }
        j += '#i' + (1 == f ? 好感材料 : 灰好感图标) + '# ' + c[1];
        for (var d = 0; d < 10 - Math.floor(e[1] / 2) - e[1] % 2 - Math.floor(e[2] / 2); d++) {
            j += ' ';
        }
        j += '#i' + (2 == f ? 好感材料 : 灰好感图标) + '# ' + c[2];
        for (var d = 0; d < 10 - Math.floor(e[2] / 2) - e[2] % 2 - Math.floor(e[3] / 2); d++) {
            j += ' ';
        }
        j += '#i' + (3 == f ? 好感材料 : 灰好感图标) + '# ' + c[3];
        j += '#k\r\n\r\n我们已经是这么熟悉的好朋友了，想必换取这些珍贵的图腾收藏，他们也一定会同意的吧？\r\n';
        shop[f].forEach(function (m, l) {
            if (c[f] > m[1]) {
                j += '#L' + l + '##b#i' + m[0] + '# #z' + m[0] + '##k · #r#i' + 好感材料 + '#' + m[1] + '#k #i' + 金币图标 + '# #e' + thousandBitSeparator(m[2]) + '#l#n\r\n';
            } else {
                j += '   #b#i' + m[0] + '# #z' + m[0] + '##k #i' + 灰好感图标 + '#' + m[1] + '#k #i' + 金币图标 + '# #e' + thousandBitSeparator(m[2]) + '#n\r\n';
            }
        });
        j += '#k#e\r\n└											┘#n';
        cm.askMenu(j);
    } else {
        if (status == 2) {
            if (selectionLog[2] < 0) {
                cm.dispose();
                return;
            }
            var b = shop[f][selectionLog[2]][2];
            var k = shop[f][selectionLog[2]][0];
            var h = cm.getPlayer().getMeso();
            if (h >= b) {
                cm.gainMeso(-b);
                cm.sendOk('成功入手了 #b#i' + k + '##z' + k + '##k！\r\n\r\n虽然拿走了#b' + name[f] + '#k的珍贵收藏图腾，但看在这么多金币的份上，想必一定会很乐意接受的吧……？');
                cm.gainItem(k, 1);
            } else {
                var j = '即使是这么熟悉的伙伴，不留下足够的金币想必也是无法交换成功的吧。还是再多积攒一些金币好了。';
                j += '\r\n\r\n#i' + 金币图标 + '# ' + parseInt(h).toLocaleString() + '#e / ' + b + ' #n';
                cm.sendOk(j);
            }
        } else {
            cm.dispose();
        }
    }
}
function getLikeLevel(c, a) {
    var b = new Array();
    c.forEach(function (f) {
        for (var d = 0; d < a.length; d++) {
            if (f < a[d]) {
                b.push(Math.max(0, d));
                return;
            }
        }
        b.push(a.length - 1);
    });
    return b;
}
function thousandBitSeparator(a) {
    return a && a.toString().replace(/\d+/, function (b) {
        return b.replace(/(\d)(?=(\d{3})+$)/g, '$1,');
    });
}