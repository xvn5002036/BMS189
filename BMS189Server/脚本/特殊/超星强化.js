var status = -1;
var selectionLog = [];
var 创世武器 = [
    1212129,
    1222122,
    1232122,
    1242139,
    1242141,
    1252106,
    1262051,
    1272040,
    1282040,
    1302355,
    1312213,
    1322264,
    1332289,
    1362149,
    1372237,
    1382274,
    1402268,
    1412189,
    1422197,
    1432227,
    1442285,
    1452266,
    1462252,
    1472275,
    1482232,
    1492245,
    1522152,
    1532157,
    1542128,
    1552130,
    1582044,
    1592022
];
var 超越证明 = [
    1113056,
    1032201,
    1122259,
    1012414,
    1022195
];
var 通用强化材料 = 4001878;
var 升星材料 = 4036084;
var 超星强化材料 = [
    4036518,
    4031466,
    4001879,
    4001890
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
    星力注入();
}
function 星力注入() {
    var k = cm.getInventory(1).getItem(1);
    var b = k.getCHUC() + 1;
    var j = 超越证明.indexOf(k.getItemId()) > -1 || 创世武器.indexOf(k.getItemId()) > -1 ? 127 : cm.getReqLevel(k.getItemId());
    var i = Math.max(1, (k.getCHUC() - 5) / equipTypeMult(k.getItemId()));
    var f = Math.max(1, Math.floor((k.getCHUC() - 5) / 2 / equipTypeMult(k.getItemId())));
    var h = k.getPAD() > k.getMAD();
    var e = Math.max(1, Math.floor(((k.getCHUC() + 1) * 3108 - 3000) / 1000));
    var g = cm.getItemQuantity(升星材料);
    var a = Math.floor(cm.getItemQuantity(4001839) / 1000);
    if (status == 0) {
        text = '#k我可以帮助你一次性注入星之力到达下一个等级，突破#r25阶星之力#k的极限。\r\n\r\n';
        text += '#e#r#z' + k.getItemId() + '##n#k最高可以强化到#r' + j + '阶星之力#k。但是作为代价，你需要付出比一般装备所需更浓缩的星之力。\r\n\r\n';
        text += '#k只有由#b1000份#b#v4001839##k星星浓缩而成的#b#v' + 升星材料 + '#闪亮星星#k可以满足创世武器的要求。如果你还没来得及转换，我也可以帮你一并将背包里的星星浓缩成闪亮星星。\r\n\r\n';
        text += '#k#e┌		       ─ #v4031515##b超星强化 ─   		  ┐#n\r\n\r\n';
        if (cm.isCash(k.getItemId())) {
            endTalk(text, '#k我无法为现金道具注入星力。\r\n');
            return;
        }
        if (创世武器.indexOf(k.getItemId()) > -1) {
            endTalk(text, '#k为#i' + k.getItemId() + '##r创世武器#k进行强化实在是超出我能力了。去神秘河的#b前哨基地#k那里找#b贝尔德#k问问吧。\r\n');
            return;
        }
        if (b > j) {
            endTalk(text, '#k#i' + k.getItemId() + '#这把武器已经强化到' + tz13 + '#r' + j + '阶星之力#k了。我无法再给它注入更强大的力量。\r\n');
            return;
        }
        if (b <= 25) {
            endTalk(text, '#k#i' + k.getItemId() + '#这把武器现在只能进行标准的星力注入，还无法承受超星强化的力量。提升到#r25阶星之力#k之后再来找我吧。\r\n');
            return;
        }
        text += '#k提升 #i' + k.getItemId() + '##e#r#z' + k.getItemId() + '##n#k 为 ' + tz13 + '#d' + (b - 1) + '#e->' + b + '#n星#e#g ↑1#n#k 需要材料：\r\n';
        text += '#v' + 升星材料 + '##b#z' + 升星材料 + '##e #k× ' + e + ' / #n现有 ' + g + ' + ' + a + ' 个\r\n';
        text += '#v' + 通用强化材料 + '##b#z' + 通用强化材料 + '##e #k× ' + b + ' / #n现有 #c' + 通用强化材料 + '# 个\r\n';
        if (b > 25) {
            text += '#v' + 超星强化材料[0] + '##d#z' + 超星强化材料[0] + '##e #k× ' + (b - 25) + ' / #n现有 #c' + 超星强化材料[0] + '# 个\r\n';
        }
        if (b > 50) {
            text += '#v' + 超星强化材料[1] + '##d#z' + 超星强化材料[1] + '##e #k× ' + (b - 50) + ' / #n现有 #c' + 超星强化材料[1] + '# 个\r\n';
        }
        if (b > 75) {
            text += '#v' + 超星强化材料[2] + '##r#z' + 超星强化材料[2] + '##e #k× ' + (b - 75) + ' / #n现有 #c' + 超星强化材料[2] + '# 个\r\n';
        }
        if (b > 100) {
            text += '#v' + 超星强化材料[3] + '##r#z' + 超星强化材料[3] + '##e #k× ' + (b - 100) + ' / #n现有 #c' + 超星强化材料[3] + '# 个\r\n';
        }
        text += '#e\r\n└											┘#n';
        cm.askMenu(text);
    } else {
        if (status == 1) {
            if (g + a >= e && cm.haveItem(通用强化材料, b) && (b <= 25 || cm.haveItem(超星强化材料[0], b - 25)) && (b <= 50 || cm.haveItem(超星强化材料[1], b - 50)) && (b <= 75 || cm.haveItem(超星强化材料[2], b - 75)) && (b <= 100 || cm.haveItem(超星强化材料[3], b - 100))) {
                if (g >= e) {
                    cm.gainItem(升星材料, -e);
                } else {
                    浓缩星星(e, g);
                }
                cm.gainItem(通用强化材料, -b);
                if (b > 25) {
                    cm.gainItem(超星强化材料[0], -b + 25);
                }
                if (b > 50) {
                    cm.gainItem(超星强化材料[1], -b + 50);
                }
                if (b > 75) {
                    cm.gainItem(超星强化材料[2], -b + 75);
                }
                if (b > 100) {
                    cm.gainItem(超星强化材料[3], -b + 100);
                }
                text = '#k升星成功了！查看一下你的武器吧。\r\n\r\n';
                text += '#i' + k.getItemId() + '##e#r#z' + k.getItemId() + '##n#k的属性得到如下强化：\r\n';
                if (h) {
                    text += '#r◆攻击力 #k- ' + k.getPAD() + '#e -> ' + (k.getPAD() + i) + '#g	↑' + i + '#n#k\r\n';
                } else {
                    text += '#r◆魔法力 #k- ' + k.getMAD() + '#e -> ' + (k.getMAD() + i) + '#g	↑' + i + '#n#k\r\n';
                }
                text += '#b◇ 力量  #k- ' + k.getStr() + '#e -> ' + (k.getStr() + f) + '#g	↑' + f + '#n#k\r\n';
                text += '#b◇ 敏捷  #k- ' + k.getDex() + '#e -> ' + (k.getDex() + f) + '#g	↑' + f + '#n#k\r\n';
                text += '#b◇ 智力  #k- ' + k.getInt() + '#e -> ' + (k.getInt() + f) + '#g	↑' + f + '#n#k\r\n';
                text += '#b◇ 幸运  #k- ' + k.getLuk() + '#e -> ' + (k.getLuk() + f) + '#g	↑' + f + '#n#k\r\n';
                var c = k.copy();
                c.setEnhanceLevel(b);
                if (h) {
                    c.setPad(c.getPAD() + i);
                } else {
                    c.setMad(c.getMAD() + i);
                }
                c.setStr(c.getStr() + f);
                c.setDex(c.getDex() + f);
                c.setInt(c.getInt() + f);
                c.setLuk(c.getLuk() + f);
                var d;
                if (b > 100) {
                    d = '★★';
                    text += '#b◇全体伤害 #k- ' + k.getDamR() + '#e -> ' + (k.getDamR() + 1) + '#g	↑1#n#k\r\n';
                    c.setDamR(c.getDamR() + 1);
                } else {
                    if (b > 75) {
                        d = '★☆';
                        text += '#b◇所有属性 #k- ' + k.getStatR() + '#e -> ' + (k.getStatR() + 1) + '#g	↑1#n#k\r\n';
                        c.setStatR(c.getStatR() + 1);
                    } else {
                        if (b > 50) {
                            d = '★';
                            text += '#b◇无视防御 #k- ' + k.getImdr() + '#e -> ' + (k.getImdr() + 1) + '#g	↑1#n#k\r\n';
                            c.setImdr(c.getImdr() + 1);
                        } else {
                            if (b > 25) {
                                d = '☆';
                                text += '#b◇首领伤害 #k- ' + k.getBdr() + '#e -> ' + (k.getBdr() + 1) + '#g	↑1#n#k\r\n';
                                c.setBdr(c.getBdr() + 1);
                            }
                        }
                    }
                }
                c.setTitle(d + b + '阶');
                c.setItemState(0);
                cm.removeSlot(1, 1, 1);
                cm.addFromDrop(cm.getClient(), c, false);
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
function endTalk(b, a) {
    b += a;
    b += '#e\r\n└											┘#n';
    cm.askMenu(b);
    cm.dispose();
}
function equipTypeMult(a) {
    if (a >= 1210000 && a < 1600000) {
        return 1;
    } else {
        if (a >= 1040000 && a < 1110000) {
            return 3;
        } else {
            return 4;
        }
    }
}