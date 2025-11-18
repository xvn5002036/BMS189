var status = -1;
var selectionLog = [];
var 通用强化材料 = 3800747;
var 吸收材料 = 3800747;
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
            勋章吸收();
            break;
        case 2:
            勋章注灵();
            break;
        case 3:
            勋章记录();
            break;
        default:
            cm.askMenu('啊你说什么？没听清楚。');
            cm.dispose();
            break;
        }
    }
}
function 对话首页() {
    text = '#k勋章是独一无二的成就的象征。不过我有一些独特的技巧，可以教你将勋章的力量完美地融合在一起。\r\n\r\n';
    text += '#L1##v1142483##b勋章吸收\r\n#l';
    text += '#L2##v3800747##b勋章注灵\r\n#l';
    text += '#L3##v1142477##b勋章记录\r\n#l';
    cm.askMenu(text);
}
function 勋章吸收() {
    var c = cm.getInventory(1).getItem(1);
    text = '#k将勋章放在#r装备栏第一格#k，我就可以帮助你吸收它的力量。\r\n';
    text += '#k勋章的力量会继续存留在你的身体里，直到你将它们注入到#b另一枚勋章上#k才会发挥效力。\r\n';
    if (c != null && c.getItemId() >= 1140000 && c.getItemId() < 1150000) {
        var e = c.getItemId();
        var a = cm.getItemInfo().getEquipById(e);
        var b = getMedalCount();
        if (status == 1) {
            if (findMedal(c) > 0) {
                text += '\r\n#k看上去你已经吸收过#i' + a.getItemId() + '##e#r#z' + a.getItemId() + '##n#k的力量了。每一枚勋章只能吸收一次。\r\n';
                cm.askMenu(text);
                cm.dispose();
                return;
            }
            var d = getAttrSum();
            text += '\r\n#k你已经吸收了 #b#e' + b + '枚 #k#n勋章的力量。吸收新的一枚勋章需要材料：\r\n';
            text += '#v' + 吸收材料 + '##b空白的奖牌#e #k× ' + b + ' / #n现有 #c' + 吸收材料 + '# 个\r\n\r\n';
            text += '吸收#i' + a.getItemId() + '##e#r#z' + a.getItemId() + '##n#k的力量可以为你带来这些额外力量：\r\n';
            if (a.getPAD() > 0) {
                text += '#r◆攻击力 #k- ' + d[7] + '#e -> ' + (a.getPAD() + d[7]) + '#g	↑' + a.getPAD() + '#n#k\r\n';
            }
            if (a.getMAD() > 0) {
                text += '#r◆魔法力 #k- ' + d[8] + '#e -> ' + (a.getMAD() + d[8]) + '#g	↑' + a.getMAD() + '#n#k\r\n';
            }
            if (a.getStr() > 0) {
                text += '#b◇ 力量  #k- ' + d[1] + '#e -> ' + (a.getStr() + d[1]) + '#g	↑' + a.getStr() + '#n#k\r\n';
            }
            if (a.getDex() > 0) {
                text += '#b◇ 敏捷  #k- ' + d[2] + '#e -> ' + (a.getDex() + d[2]) + '#g	↑' + a.getDex() + '#n#k\r\n';
            }
            if (a.getInt() > 0) {
                text += '#b◇ 智力  #k- ' + d[3] + '#e -> ' + (a.getInt() + d[3]) + '#g	↑' + a.getInt() + '#n#k\r\n';
            }
            if (a.getLuk() > 0) {
                text += '#b◇ 幸运  #k- ' + d[4] + '#e -> ' + (a.getLuk() + d[4]) + '#g	↑' + a.getLuk() + '#n#k\r\n';
            }
            if (a.getMaxHP() > 0) {
                text += '#b◇ 生命值 #k- ' + d[5] + '#e -> ' + (a.getMaxHP() + d[5]) + '#g	↑' + a.getMaxHP() + '#n#k\r\n';
            }
            if (a.getMaxMP() > 0) {
                text += '#b◇ 魔法值 #k- ' + d[6] + '#e -> ' + (a.getMaxMP() + d[6]) + '#g	↑' + a.getMaxMP() + '#n#k\r\n';
            }
            if (a.getPDD() > 0) {
                text += '#b◇ 防御  #k- ' + d[9] + '#e -> ' + (a.getPDD() + d[9]) + '#g	↑' + a.getPDD() + '#n#k\r\n';
            }
            if (a.getSpeed() > 0) {
                text += '#b◇ 速度  #k- ' + d[10] + '#e -> ' + (a.getSpeed() + d[10]) + '#g	↑' + a.getSpeed() + '#n#k\r\n';
            }
            if (a.getJump() > 0) {
                text += '#b◇ 跳跃  #k- ' + d[11] + '#e -> ' + (a.getJump() + d[11]) + '#g	↑' + a.getJump() + '#n#k\r\n';
            }
            if (a.getBdr() > 0) {
                text += '#b◇首领伤害#k- ' + d[12] + '#e -> ' + (a.getBdr() + d[12]) + '#g	↑' + a.getBdr() + '#n#k\r\n';
            }
            if (a.getImdr() > 0) {
                text += '#b◇无视防御#k- ' + d[13] + '#e -> ' + (a.getImdr() + d[13]) + '#g	↑' + a.getImdr() + '#n#k\r\n';
            }
            if (a.getDamR() > 0) {
                text += '#b◇整体伤害#k- ' + d[14] + '#e -> ' + (a.getDamR() + d[14]) + '#g	↑' + a.getDamR() + '#n#k\r\n';
            }
            if (a.getStatR() > 0) {
                text += '#b◇所有属性#k- ' + d[15] + '#e -> ' + (a.getStatR() + d[15]) + '#g	↑' + a.getStatR() + '#n#k\r\n';
            }
            cm.askMenu(text);
        } else {
            if (status == 2) {
                if (cm.haveItem(吸收材料, b)) {
                    cm.gainItem(吸收材料, -b);
                    addMedal(a);
                    updateMedalRecord(a);
                    cm.removeSlot(1, 1, 1);
                    var b = getMedalCount();
                    text = '#k勋章吸收成功了！现在你已经吸收了 #b#e' + b + '枚 #k#n勋章的力量。\r\n';
                } else {
                    text = '#k你的材料不够啊。再去收集一些吧，强化武器可是非常重要的事情。\r\n\r\n';
                }
                cm.askMenu(text);
                cm.dispose();
            }
        }
    } else {
        cm.askMenu(text);
        cm.dispose();
    }
}
function 勋章注灵() {
    var c = cm.getInventory(1).getItem(1);
    text = '#k我可以帮你把你所吸收过的勋章的力量可以注入到#b任意一枚勋章#k上，让它拥有额外的属性。\r\n';
    text += '#k将准备注灵的勋章放在#r装备栏第一格#k，我就可以帮助你注入力量。\r\n';
    if (c != null && c.getItemId() >= 1140000 && c.getItemId() < 1150000) {
        var e = c.getItemId();
        var b = getMedalCount();
        var d = getAttrSum();
        if (status == 1) {
            text += '\r\n#k你已经吸收了 #b#e' + b + '枚 #k#n勋章的力量。#r注灵「' + b + '」重#k需要材料：\r\n';
            text += '#v' + 通用强化材料 + '##b空白的奖牌#e #k× ' + b + ' / #n现有 #c' + 通用强化材料 + '# 个\r\n\r\n';
            text += '为#i' + c.getItemId() + '##e#r#z' + c.getItemId() + '##n#k注灵后将获得这些额外属性：\r\n';
            if (c.getPAD() < d[7]) {
                text += '#r◆攻击力 #k- ' + c.getPAD() + '#e -> ' + d[7] + '#g	↑' + (d[7] - c.getPAD()) + '#n#k\r\n';
            }
            if (c.getMAD() < d[8]) {
                text += '#r◆魔法力 #k- ' + c.getMAD() + '#e -> ' + d[8] + '#g	↑' + (d[8] - c.getMAD()) + '#n#k\r\n';
            }
            if (c.getStr() < d[1]) {
                text += '#b◇ 力量  #k- ' + c.getStr() + '#e -> ' + d[1] + '#g	↑' + (d[1] - c.getStr()) + '#n#k\r\n';
            }
            if (c.getDex() < d[2]) {
                text += '#b◇ 敏捷  #k- ' + c.getDex() + '#e -> ' + d[2] + '#g	↑' + (d[2] - c.getDex()) + '#n#k\r\n';
            }
            if (c.getInt() < d[3]) {
                text += '#b◇ 智力  #k- ' + c.getInt() + '#e -> ' + d[3] + '#g	↑' + (d[3] - c.getInt()) + '#n#k\r\n';
            }
            if (c.getLuk() < d[4]) {
                text += '#b◇ 幸运  #k- ' + c.getLuk() + '#e -> ' + d[4] + '#g	↑' + (d[4] - c.getLuk()) + '#n#k\r\n';
            }
            if (c.getMaxHP() < d[5]) {
                text += '#b◇ 生命值 #k- ' + c.getMaxHP() + '#e -> ' + d[5] + '#g	↑' + (d[5] - c.getMaxHP()) + '#n#k\r\n';
            }
            if (c.getMaxMP() < d[6]) {
                text += '#b◇ 魔法值 #k- ' + c.getMaxMP() + '#e -> ' + d[6] + '#g	↑' + (d[6] - c.getMaxMP()) + '#n#k\r\n';
            }
            if (c.getPDD() < d[9]) {
                text += '#b◇ 防御  #k- ' + c.getPDD() + '#e -> ' + d[9] + '#g	↑' + (d[9] - c.getPDD()) + '#n#k\r\n';
            }
            if (c.getSpeed() < d[10]) {
                text += '#b◇ 速度  #k- ' + c.getSpeed() + '#e -> ' + d[10] + '#g	↑' + (d[10] - c.getSpeed()) + '#n#k\r\n';
            }
            if (c.getJump() < d[14]) {
                text += '#b◇ 跳跃  #k- ' + c.getJump() + '#e -> ' + d[11] + '#g	↑' + (d[11] - c.getJump()) + '#n#k\r\n';
            }
            if (c.getBdr() < d[12]) {
                text += '#b◇首领伤害#k- ' + c.getBdr() + '#e -> ' + d[12] + '#g	↑' + (d[12] - c.getBdr()) + '#n#k\r\n';
            }
            if (c.getImdr() < d[13]) {
                text += '#b◇无视防御#k- ' + c.getImdr() + '#e -> ' + d[13] + '#g	↑' + (d[13] - c.getImdr()) + '#n#k\r\n';
            }
            if (c.getDamR() < d[14]) {
                text += '#b◇整体伤害#k- ' + c.getDamR() + '#e -> ' + d[14] + '#g	↑' + (d[14] - c.getDamR()) + '#n#k\r\n';
            }
            if (c.getStatR() < d[15]) {
                text += '#b◇所有属性#k- ' + c.getStatR() + '#e -> ' + d[15] + '#g	↑' + (d[15] - c.getStatR()) + '#n#k\r\n';
            }
            cm.askMenu(text);
        } else {
            if (status == 2) {
                if (cm.haveItem(通用强化材料, b)) {
                    cm.gainItem(通用强化材料, -b);
                    var a = c.copy();
                    a.setTitle('注灵「' + b + '」重');
                    a.setPad(Math.max(c.getPAD(), d[7]));
                    a.setMad(Math.max(c.getMAD(), d[8]));
                    a.setStr(Math.max(c.getStr(), d[1]));
                    a.setDex(Math.max(c.getDex(), d[2]));
                    a.setInt(Math.max(c.getInt(), d[3]));
                    a.setLuk(Math.max(c.getLuk(), d[4]));
                    a.setMaxHp(Math.max(c.getMaxHP(), d[5]));
                    a.setMaxMp(Math.max(c.getMaxMP(), d[6]));
                    a.setPdd(Math.max(c.getPDD(), d[9]));
                    a.setSpeed(Math.max(c.getSpeed(), d[10]));
                    a.setJump(Math.max(c.getJump(), d[11]));
                    a.setBdr(Math.max(c.getBdr(), d[12]));
                    a.setImdr(Math.max(c.getImdr(), d[13]));
                    a.setDamR(Math.max(c.getDamR(), d[14]));
                    a.setStatR(Math.max(c.getStatR(), d[15]));
                    cm.removeSlot(1, 1, 1);
                    cm.addFromDrop(cm.getClient(), a, false);
                    text = '#k为#i' + a.getItemId() + '#注灵成功了！查看一下它的新力量吧。\r\n';
                } else {
                    text = '#k你的材料不够啊。再去收集一些吧，强化武器可是非常重要的事情。\r\n\r\n';
                }
                cm.askMenu(text);
                cm.dispose();
            }
        }
    } else {
        cm.askMenu(text);
        cm.dispose();
    }
}
function 勋章记录() {
    var a = 2;
    var b = getMedalList();
    if (b.length <= 0) {
        text = '#k你还没有吸收任何一枚勋章的力量。快去收集吧！\r\n';
    } else {
        text = '#k你已经吸收了 #b#e' + (b.length - 1) + '枚 #k#n勋章的力量。下面是所有的勋章记录：\r\n';
        b.forEach(function (d, c) {
            text += '#k#e[' + c + '] #n#i' + d + '##b#z' + d + '##k\r\n';
        });
    }
    cm.askMenu(text);
    cm.dispose();
}
function getAttrSum() {
    var b = 'SELECT SUM(str) as n1, SUM(dex) as n2, SUM(`int`) as n3, SUM(luk) as n4, SUM(hp) as n5, SUM(mp) as n6, SUM(PAD) as n7, SUM(MAD) as n8, SUM(PDD) as n9, SUM(speed) as n10, SUM(jump) as n11, SUM(Bdr) as n12, SUM(Imdr) as n13, SUM(Imdr) as n14, SUM(DamR) as n15 FROM `combine_medal` WHERE `characterid`=?';
    var a = cm.queryForOneResult(b, cm.getPlayer().getId());
    if (a.isEmpty()) {
        for (i = 1; i <= 15; i++) {
            attrSum[i] = 0;
        }
    } else {
        for (i = 1; i <= 15; i++) {
            attrSum[i] = a.getInt('n' + i);
        }
    }
    return attrSum;
}
function getMedalCount() {
    var b = 'SELECT count(*) FROM`combine_medal` WHERE `characterid`=?';
    var a = cm.queryForOneResult(b, cm.getPlayer().getId());
    return a.isEmpty() ? 0 : a.getInt('num');
}
function findMedal(b) {
    var c = 'SELECT count(*) AS num FROM `combine_medal` WHERE `characterid`=? AND `medalid`=?';
    var a = cm.queryForOneResult(c, cm.getPlayer().getId(), b.getItemId());
    return a.isEmpty() ? 0 : a.getInt('num');
}
function addMedal(a) {
    var b = 'INSERT INTO `combine_medal` (`characterid`,`medalid`,`str`,`dex`,`int`,`luk`,`hp`,`mp`,`PAD`,`MAD`,`PDD`,`speed`,`jump`,`Bdr`,`Imdr`,`DamR`,`StatR`) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)';
    cm.updateSQL(b, cm.getPlayer().getId(), a.getItemId(), a.getStr(), a.getDex(), a.getInt(), a.getLuk(), a.getMaxHP(), a.getMaxMP(), a.getPAD(), a.getMAD(), a.getPDD(), a.getSpeed(), a.getJump(), a.getBdr(), a.getImdr(), a.getDamR(), a.getStatR());
}
function getMedalList() {
    var a = [];
    var b = 'SELECT `medalid` FROM `combine_medal` WHERE `characterid`=? order by `medalid` asc';
    cm.queryForAllResults(b, cm.getPlayer().getId()).forEach(function (c) {
        a.push(c.getInt('medalid'));
    });
    return a;
}
function updateMedalRecord(a) {
    var b = 'SELECT `questid` FROM `wz_questdata` WHERE `viewMedalItem`=? order by `questid` asc';
    cm.queryForAllResults(b, a.getItemId()).forEach(function (c) {
        cm.startQuest(c.getInt('questid'));
        cm.completeQuest(c.getInt('questid'));
    });
}