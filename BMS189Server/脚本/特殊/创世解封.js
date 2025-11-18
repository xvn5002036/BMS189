var status = -1;
var selectionLog = [];
var 创世武器 = [
    1212128,
    1212129,
    1213021,
    1213022,
    1222121,
    1222122,
    1232121,
    1232122,
    1242138,
    1242139,
    1242140,
    1242141,
    1252105,
    1252106,
    1262050,
    1262051,
    1272039,
    1272040,
    1282039,
    1282040,
    1292021,
    1292022,
    1302354,
    1302355,
    1312212,
    1312213,
    1322263,
    1322264,
    1332288,
    1332289,
    1362012,
    1362028,
    1362031,
    1362039,
    1362042,
    1362077,
    1362080,
    1362108,
    1362148,
    1362149,
    1372236,
    1372237,
    1382273,
    1382274,
    1402267,
    1402268,
    1412188,
    1412189,
    1422196,
    1422197,
    1432226,
    1432227,
    1442284,
    1442285,
    1452265,
    1452266,
    1462251,
    1462252,
    1472274,
    1472275,
    1482231,
    1482232,
    1492244,
    1492245,
    1522151,
    1522152,
    1532156,
    1532157,
    1542127,
    1542128,
    1552129,
    1552130,
    1582043,
    1582044,
    1592021,
    1592022
];
var SS潜能通用 = [
    40601,
    40602,
    40603,
    40291,
    40292,
    40041,
    40042,
    40043,
    40044,
    40086,
    42087,
    40055,
    40070,
    40056,
    40057
];
var S潜能通用 = [
    30291,
    30041,
    30042,
    30043,
    30044,
    30070
];
var SS潜能主 = [
    60001,
    60002,
    60008,
    60012,
    60020,
    60021
];
var SS潜能攻击 = [
    30051,
    40051
];
var SS潜能魔攻 = [
    30052,
    40052
];
var 通用强化材料 = 4001878;
var 升星材料 = 4036084;
var 超星强化材料 = [
    4001889,
    4036457,
    4001895,
    4036458
];
var 潜能魔方材料 = [
    5062010,
    5062500
];
var 潜能附加材料 = [
    2049705,
    2048306
];
var 卷轴材料 = [
    2613050,
    2613051,
    2612061,
    2612062,
    2613064,
    2613065,
    2612076,
    2612077,
    2613066,
    2613067,
    2612078,
    2612079
];
var z = '#fEffect/ItemEff/1112811/0/0#';
var tz12 = '#fEffect/CharacterEff/1112924/0/0#';
var tz13 = '#fEffect/CharacterEff/1112925/0/0#';
var itemIcon = '#fUI/Basic.img/Cursor/32/0#';
function start() {
    action(1, 0, 0);
}
function action(c, b, a) {
    if (status == 0 && c == 0) {
        cm.dispose();
        return;
    }
    if (c == 1) {
        status++;
    } else {
        status--;
    }
    selectionLog[status] = a;
    if (status == 0) {
        对话首页();
    } else {
        switch (selectionLog[1]) {
        case 1:
        case 4:
            星力注入();
            break;
        case 2:
            卷轴附魔();
            break;
        case 3:
            模拟魔方();
            break;
        case 5:
            领取创世武器技能();
            break;
        default:
            cm.askMenu('啊你说什么？没听清楚。');
            cm.dispose();
            break;
        }
    }
}
function 对话首页() {
    text = '#k创世武器上拥有的力量太过强大，一般的强化手段已经无法对它们生效。我可以帮助你为它们附加更强大的力量，但是代价也比常规途径要大。\r\n';
    text += '#k#e┌		         ─ 创世强化 ─   			┐#n\r\n\r\n';
    var a = cm.getInventory(1).getItem(1);
    if (a != null && 创世武器.indexOf(a.getItemId()) > -1) {
        text += '             目前装备着  #i' + a.getItemId() + '##e#r#z' + a.getItemId() + '##n#k\r\n';
        text += '#L1##v4001839##b星力注入#l          ';
        text += '#L2##v2612076##b卷轴附魔\r\n#l';
        text += '#L3##v5062103##b潜能激活#l          ';
        text += '#L4##v4031515##b超星强化\r\n#l';
        text += '#L5##k#e领取创世武器技能#n\r\n\r\n';
    } else {
        text += '#k将#b创世武器#k放在#r装备栏第一位#k，我可以帮你看看如何进一步强化。';
        cm.dispose();
    }
    text += '#e\r\n└											┘#n';
    cm.askMenu(text);
}
function 领取创世武器技能() {
    var a = cm.getInventory(1).getItem(1);
    var b = a.getEnhanceLevel() + 1;
    if (b >= 25) {
        cm.teachSkill(80002632, 1);
        cm.teachSkill(80002633, 1);
        cm.playerMessage(1, '恭喜,这把武器强已注入技能。\r\n');
    } else {
        cm.playerMessage(1, '亲,这把武器强化等级未满,无法注入技能。\r\n');
    }
    cm.dispose();
}
function 星力注入() {
    var l = cm.getInventory(1).getItem(1);
    var b = l.getEnhanceLevel() + 1;
    var j = Math.max(1, l.getEnhanceLevel() - 5);
    var g = Math.max(1, Math.floor((l.getEnhanceLevel() - 5) / 2));
    var i = l.getPAD(true) > l.getMAD(true);
    var f = selectionLog[1] == 4;
    var e = Math.max(1, Math.floor(((l.getEnhanceLevel() + 1) * 3108 - 3000) / 1000));
    var k = l.getEnhanceLevel() + 1;
    var h = cm.getItemQuantity(升星材料);
    var a = Math.floor(cm.getItemQuantity(4001839) / 1000);
    if (status == 1) {
        text = '#k我可以帮助你一次性注入星之力到达下一个等级，最高可以达到#r' + (f ? 127 : 25) + '阶星之力#k。但是作为代价，你需要付出比一般装备所需更浓缩的星之力。\r\n\r\n';
        text += '#k只有由#b1000份#b#v4001839##k星星浓缩而成的#b#v' + 升星材料 + '#闪亮星星#k可以满足创世武器的要求。如果你还没来得及转换，我也可以帮你一并将背包里的星星浓缩成闪亮星星。\r\n\r\n';
        if (f) {
            text += '#k#e┌		       ─ #v4031515##b超星强化 ─   		  ┐#n\r\n\r\n';
        } else {
            text += '#k#e┌		       ─ #v4001839#星力注入 ─   		  ┐#n\r\n\r\n';
        }
        if (!f && b > 25) {
            endTalk(text, '#k#i' + l.getItemId() + '#这把武器已经强化到' + tz12 + '#r25阶星之力#k了。需要进行#r超星强化#k才能继续为它注入能量。\r\n');
            return;
        }
        if (f && b <= 25) {
            endTalk(text, '#k#i' + l.getItemId() + '#这把武器现在只能进行标准的星力注入，还无法承受超星强化的力量。提升到#r25阶星之力#k之后再来找我吧。\r\n');
            return;
        }
        if (f && b > 127) {
            endTalk(text, '#k#i' + l.getItemId() + '#这把武器已经强化到' + tz13 + '#r127阶星之力#k了。我无法再给它注入更强大的力量。\r\n');
            return;
        }
        text += '#k提升 #i' + l.getItemId() + '##e#r#z' + l.getItemId() + '##n#k 为 ' + (f ? tz13 : tz12) + '#d' + (b - 1) + '#e->' + b + '#n星#e#g ↑1#n#k 需要材料：\r\n';
        text += '#v' + 升星材料 + '##b#z' + 升星材料 + '##e #k× ' + e + ' / #n现有 ' + h + ' + ' + a + ' 个\r\n';
        text += '#v' + 通用强化材料 + '##b#z' + 通用强化材料 + '##e #k× ' + k + ' / #n现有 #c' + 通用强化材料 + '# 个\r\n';
        if (b > 25) {
            text += '#v' + 超星强化材料[0] + '##d#z' + 超星强化材料[0] + '##e #k× ' + (k - 25) + ' / #n现有 #c' + 超星强化材料[0] + '# 个\r\n';
        }
        if (b > 50) {
            text += '#v' + 超星强化材料[1] + '##d#z' + 超星强化材料[1] + '##e #k× ' + (k - 50) + ' / #n现有 #c' + 超星强化材料[1] + '# 个\r\n';
        }
        if (b > 75) {
            text += '#v' + 超星强化材料[2] + '##r#z' + 超星强化材料[2] + '##e #k× ' + (k - 75) + ' / #n现有 #c' + 超星强化材料[2] + '# 个\r\n';
        }
        if (b > 100) {
            text += '#v' + 超星强化材料[3] + '##r#z' + 超星强化材料[3] + '##e #k× ' + (k - 100) + ' / #n现有 #c' + 超星强化材料[3] + '# 个\r\n';
        }
        text += '#e\r\n└											┘#n';
        cm.askMenu(text);
    } else {
        if (status == 2) {
            if (h + a >= e && cm.haveItem(通用强化材料, k) && (b <= 25 || cm.haveItem(超星强化材料[0], k - 25)) && (b <= 50 || cm.haveItem(超星强化材料[1], k - 50)) && (b <= 75 || cm.haveItem(超星强化材料[2], k - 75)) && (b <= 100 || cm.haveItem(超星强化材料[3], k - 100))) {
                if (h >= e) {
                    cm.gainItem(升星材料, -e);
                } else {
                    浓缩星星(e, h);
                }
                cm.gainItem(通用强化材料, -k);
                if (b > 25) {
                    cm.gainItem(超星强化材料[0], -k + 25);
                }
                if (b > 50) {
                    cm.gainItem(超星强化材料[1], -k + 50);
                }
                if (b > 75) {
                    cm.gainItem(超星强化材料[2], -k + 75);
                }
                if (b > 100) {
                    cm.gainItem(超星强化材料[3], -k + 100);
                }
                text = '#k升星成功了！查看一下你的武器吧。\r\n\r\n';
                text += '#i' + l.getItemId() + '##e#r#z' + l.getItemId() + '##n#k的属性得到如下强化：\r\n';
                if (i) {
                    text += '#r◆攻击力 #k- ' + l.getPAD(true) + '#e -> ' + (l.getPAD(true) + j) + '#g	↑' + j + '#n#k\r\n';
                } else {
                    text += '#r◆魔法力 #k- ' + l.getMAD(true) + '#e -> ' + (l.getMAD(true) + j) + '#g	↑' + j + '#n#k\r\n';
                }
                text += '#b◇ 力量  #k- ' + l.getStr(true) + '#e -> ' + (l.getStr(true) + g) + '#g	↑' + g + '#n#k\r\n';
                text += '#b◇ 敏捷  #k- ' + l.getDex(true) + '#e -> ' + (l.getDex(true) + g) + '#g	↑' + g + '#n#k\r\n';
                text += '#b◇ 智力  #k- ' + l.getInt(true) + '#e -> ' + (l.getInt(true) + g) + '#g	↑' + g + '#n#k\r\n';
                text += '#b◇ 幸运  #k- ' + l.getLuk(true) + '#e -> ' + (l.getLuk(true) + g) + '#g	↑' + g + '#n#k\r\n';
                var c = l.copy();
                c.setEnhanceLevel(b);
                c.setItemState(17);
                if (i) {
                    c.setPad(c.getPAD(true) + j);
                } else {
                    c.setMad(c.getMAD(true) + j);
                }
                c.setStr(c.getStr(true) + g);
                c.setDex(c.getDex(true) + g);
                c.setInt(c.getInt(true) + g);
                c.setLuk(c.getLuk(true) + g);
                var d;
                if (b > 100) {
                    d = '★★';
                    text += '#b◇全体伤害 #k- ' + l.getDamR(true) + '#e -> ' + (l.getDamR(true) + 1) + '#g	↑1#n#k\r\n';
                    c.setDamR(c.getDamR(true) + 1);
                } else {
                    if (b > 75) {
                        d = '★☆';
                        text += '#b◇所有属性 #k- ' + l.getStatR(true) + '#e -> ' + (l.getStatR(true) + 1) + '#g	↑1#n#k\r\n';
                        c.setStatR(c.getStatR(true) + 1);
                    } else {
                        if (b > 50) {
                            d = '★';
                            text += '#b◇无视防御 #k- ' + l.getIMDR(true) + '#e -> ' + (l.getIMDR(true) + 1) + '#g	↑1#n#k\r\n';
                            c.setImdr(c.getIMDR(true) + 1);
                        } else {
                            if (b > 25) {
                                d = '☆';
                                text += '#b◇首领伤害 #k- ' + l.getBDR(true) + '#e -> ' + (l.getBDR(true) + 1) + '#g	↑1#n#k\r\n';
                                c.setBdr(c.getBDR(true) + 1);
                            }
                        }
                    }
                }
                if (f) {
                    c.setTitle(d + b + '阶');
                    c.setItemState(0);
                }
                cm.removeSlot(1, 1, 1);
                cm.addFromDrop(cm.getClient(), c, false);
            } else {
                text = '#k你的材料不够啊。再去收集一些吧，强化武器可是非常重要的事情。\r\n\r\n';
            }
            cm.askMenu(text);
            cm.dispose();
        } else {
            cm.dispose();
            cm.openNpc(0, '创世解封');
        }
    }
}
function 浓缩星星(c, b) {
    cm.gainItem(升星材料, -b);
    var d = c - b, a = 30;
    while (d > 0) {
        while (d >= a) {
            cm.gainItem(4001839, -1000 * a);
            d -= a;
        }
        a = Math.max(1, Math.floor(a / 2));
    }
}
function 卷轴附魔() {
    var c = cm.getInventory(1).getItem(1);
    var e = c.getPAD(true) > c.getMAD(true);
    var b = c.getUpgradeLevel() + 1;
    var d = Math.max(1, Math.floor(b / 10));
    if (status == 1) {
        text = '#k注入了星之力后，就可以将卷轴附魔到创世武器里了。每提高一阶星之力，都可以再附魔一次卷轴。\r\n';
        text += '#k只有足够强大的卷轴才能附魔到创世武器之上。但随着附魔次数的增加，对卷轴的要求也越高。\r\n';
        text += '#k#v2613064#系列的卷轴可以用于#r1~25级#k的附魔。\r\n';
        text += '#k#v2613050#系列的卷轴可以用于#r1~50级#k的附魔。\r\n';
        text += '#k#v2612078#系列的卷轴可以用于#r所有等级#k的附魔。\r\n';
        text += '另外，已使用卷轴附魔的次数越高，需要的材料也更多。\r\n';
        text += '把符合资助的卷轴放在#b消耗栏第一格#k，我们就可以开工了。\r\n';
        text += '#k#e┌		     ─ #v2612076#卷轴附魔 ─   		  ┐#n\r\n\r\n';
        if (b > 127) {
            endTalk(text, '#k已经达到武器卷轴附魔次数的上限了。');
            return;
        }
        if (b >= c.getEnhanceLevel()) {
            endTalk(text, '#k已经达到现阶段可以进行卷轴附魔次数的上限。需要进一步提升武器的星之力等级才行。');
            return;
        }
        if (b <= 25) {
            text += '#L1#使用#v2613064##l	#L2#使用#v2613050##l	#L3#使用#v2612078##l	';
        } else {
            if (b <= 50) {
                text += '不再适用#rV卷轴#k	#L2#使用#v2613050##l	#L3#使用#v2612078##l	';
            } else {
                text += '不再适用#rV卷轴#k	不再适用#rX卷轴#k	#L3#使用#v2612078##l	';
            }
        }
        text += '#e\r\n└											┘#n';
        cm.askMenu(text);
    } else {
        if (status == 2) {
            var f = selectionLog[2] * 4 - 4;
            text = '#k#e┌		     ─ #v2612076#卷轴附魔 ─   		  ┐#n\r\n\r\n';
            text += '#k为 #i' + c.getItemId() + '##e#r#z' + c.getItemId() + '##n#k 进行#r第 ' + b + ' #e/ ' + c.getEnhanceLevel() + ' #n次#k卷轴附魔需要材料：\r\n';
            text += '#v' + 通用强化材料 + '##b#z' + 通用强化材料 + '##e #k× ' + b + ' / #n现有 #c' + 通用强化材料 + '# 个\r\n';
            text += '#v' + 卷轴材料[f + (e ? 0 : 1)] + '##b#z' + 卷轴材料[f + (e ? 0 : 1)] + '##e #k× ' + d + ' / #n现有 #c' + 卷轴材料[f + (e ? 0 : 1)] + '# 个\r\n';
            text += '#v' + 卷轴材料[f + (e ? 0 : 1) + 2] + '##b#z' + 卷轴材料[f + (e ? 0 : 1) + 2] + '##e #k× ' + d + ' / #n现有 #c' + 卷轴材料[f + (e ? 0 : 1) + 2] + '# 个\r\n';
            text += '#e\r\n└											┘#n';
            cm.askMenu(text);
        } else {
            if (status == 3) {
                var f = selectionLog[2] * 4 - 4;
                var g = selectionLog[2] == 1 ? [
                    Math.random() * 3 + 9,
                    8,
                    8,
                    8,
                    8
                ] : selectionLog[2] == 2 ? [
                    12,
                    10,
                    10,
                    10,
                    10
                ] : [
                    13,
                    11,
                    11,
                    11,
                    11
                ];
                if (cm.haveItem(通用强化材料, b) && cm.haveItem(卷轴材料[f + (e ? 0 : 1)], d) && cm.haveItem(卷轴材料[f + (e ? 0 : 1) + 2], d)) {
                    cm.gainItem(通用强化材料, -b);
                    cm.gainItem(卷轴材料[f + (e ? 0 : 1)], -d);
                    cm.gainItem(卷轴材料[f + (e ? 0 : 1) + 2], -d);
                    text = '#k卷轴附魔成功了！查看一下你的武器吧。\r\n\r\n';
                    text += '#i' + c.getItemId() + '##e#r#z' + c.getItemId() + '##n#k的属性得到如下强化：\r\n';
                    if (e) {
                        text += '#r◆攻击力 #k- ' + c.getPAD(true) + '#e -> ' + (c.getPAD(true) + g[0]) + '#g	↑' + g[0] + '#n#k\r\n';
                    } else {
                        text += '#r◆魔法力 #k- ' + c.getMAD(true) + '#e -> ' + (c.getMAD(true) + g[0]) + '#g	↑' + g[0] + '#n#k\r\n';
                    }
                    text += '#b◇ 力量  #k- ' + c.getStr(true) + '#e -> ' + (c.getStr(true) + g[1]) + '#g	↑' + g[1] + '#n#k\r\n';
                    text += '#b◇ 敏捷  #k- ' + c.getDex(true) + '#e -> ' + (c.getDex(true) + g[2]) + '#g	↑' + g[2] + '#n#k\r\n';
                    text += '#b◇ 智力  #k- ' + c.getInt(true) + '#e -> ' + (c.getInt(true) + g[3]) + '#g	↑' + g[3] + '#n#k\r\n';
                    text += '#b◇ 幸运  #k- ' + c.getLuk(true) + '#e -> ' + (c.getLuk(true) + g[4]) + '#g	↑' + g[4] + '#n#k\r\n';
                    var a = c.copy();
                    a.setUpgradeLevel(b);
                    if (e) {
                        a.setPad(a.getPAD(true) + g[0]);
                    } else {
                        a.setMad(a.getMAD(true) + g[0]);
                    }
                    a.setStr(a.getStr(true) + g[1]);
                    a.setDex(a.getDex(true) + g[2]);
                    a.setInt(a.getInt(true) + g[3]);
                    a.setLuk(a.getLuk(true) + g[4]);
                    cm.removeSlot(1, 1, 1);
                    cm.addFromDrop(cm.getClient(), a, false);
                } else {
                    text = '#k你的材料不够啊。再去收集一些吧，强化武器可是非常重要的事情。\r\n\r\n';
                }
                cm.askMenu(text);
                cm.dispose();
            } else {
                cm.dispose();
            }
        }
    }
}
function 模拟魔方() {
    var e = cm.getInventory(1).getItem(1);
    var d = e.getEnhanceLevel() + 1;
    if (status == 1) {
        text = '#k只有足够强大的魔方#v' + 潜能魔方材料[0] + '#或#v' + 潜能魔方材料[1] + '#才能激活创世武器的潜能，因此激活后也必定会拥有S级至SS级的潜在能力。\r\n';
        text += '星之力强化阶数越高，激活SS级潜能的可能性越高，但是需要的材料也更多。\r\n';
        text += '#k#e┌		      ─ #v5062103#潜能激活 ─  		  ┐#n\r\n\r\n';
        text += '#k激活 #i' + e.getItemId() + '##e#r#z' + e.getItemId() + '##n#k 的潜在能力需要材料：\r\n';
        text += '#v' + 通用强化材料 + '##b#z' + 通用强化材料 + '##e #k× ' + d + ' / #n现有 #c' + 通用强化材料 + '# 个\r\n';
        text += '#L101##v' + 潜能魔方材料[0] + '##b『激活潜在能力』#l\r\n';
        text += '#b#z' + 潜能魔方材料[0] + '##e #k× ' + d + ' / #n现有 #c' + 潜能魔方材料[0] + '# 个\r\n';
        text += '#L102##v' + 潜能魔方材料[1] + '##d『激活附加潜能』#l\r\n';
        text += '#d#z' + 潜能魔方材料[1] + '##e #k× ' + d + ' / #n现有 #c' + 潜能魔方材料[1] + '# 个\r\n';
        text += '#e\r\n└											┘#n';
        cm.askMenu(text);
    } else {
        if (status == 2) {
            var c = selectionLog[2] == 102;
            var a = c ? 潜能魔方材料[1] : 潜能魔方材料[0];
            if (cm.haveItem(a, d) && cm.haveItem(通用强化材料, d)) {
                cm.gainItem(a, -d);
                cm.gainItem(通用强化材料, -d);
                text = '#k潜能激活成功了！查看一下你的武器吧。\r\n\r\n';
                var b = e.copy();
                b.resetPotential(cm.rand(0, Math.min(0, d)) > cm.randInt(100) ? 4 : 3, true, c);
                cm.removeSlot(1, 1, 1);
                cm.addFromDrop(cm.getClient(), b, false);
            } else {
                text = '#k你的材料不够啊。再去收集一些吧，强化武器可是非常重要的事情。\r\n\r\n';
            }
            cm.askMenu(text);
            cm.dispose();
        } else {
            cm.dispose();
        }
    }
}
function endTalk(b, a) {
    b += a;
    b += '#e\r\n└											┘#n';
    cm.askMenu(b);
    cm.dispose();
}