var status = -1;
var selectionLog = [];
function start() {
    action(1, 0, 0);
}
function action(f, j, k) {
    if (status == 0 && f == 0) {
        cm.dispose();
        return;
    }
    f == 1 ? status++ : status--;
    selectionLog[status] = k;
    var m = cm.get角色卡等级总和();
    var g = cm.get角色卡数量总和();
    var n = cm.get已装备角色卡数量总和();
    var a = cm.getNumberFromQuestInfo(18771, 'rank');
    var b;
    var c;
    var h;
    var l = '';
    var e;
    if (a < 100) {
        cm.updateInfoQuest(18771, 'rank=101');
    }
    if (a > 100 && a <= 105) {
        if (a == 105) {
            e = 200;
        } else {
            e = a;
        }
        l = '新手联盟';
        a = a - 100;
        h = 9;
        b = 500;
        c = 100;
        c += a * 10;
        b += a * 500;
        h += a - 1;
    }
    if (a > 105 && a <= 205) {
        if (a == 205) {
            e = 300;
        } else {
            e = a;
        }
        l = '资深联盟';
        a = a - 200;
        h = 9 * 2;
        b = 3000;
        c = 150;
        c += a * 10;
        b += a * 500;
        h += a - 1;
    }
    if (a > 205 && a <= 305) {
        if (a == 305) {
            e = 400;
        } else {
            e = a;
        }
        l = '大师联盟';
        a = a - 300;
        h = 9 * 2;
        b = 5000;
        c = 150;
        c += a * 10;
        b += a * 500;
        h += a - 1;
    }
    if (a > 305 && a <= 405) {
        e = a;
        l = '大宗师联盟';
        a = a - 400;
        h = 9 * 2;
        b = 8000;
        c = 150;
        c += a * 10;
        b += a * 500;
        h += a - 1;
    }
    var d = -1;
    if (status <= d++) {
        cm.dispose();
    } else {
        if (status === d++) {
            cm.askMenu('今天真是个猎龙的好天气！\r\n关于#b冒险岛联盟#k业务有什么可以帮你？\r\n\r\n#L0##b<查看我的冒险岛联盟信息。>#l\r\n#L1##b<提高冒险岛联盟级别。>#l\r\n#L2##b<听取关于冒险岛联盟的介绍。>#k#l\r\n#L3##b<一周获得纪念币排名>#k#l\r\n\r\n#L4##b<进入联盟突袭_参战>#k#l\r\n\r\n#L5##b<还原联盟等级>#k#l\r\n#L6##b<一键最高联盟等级>#b#e#v4310229##t4310229# 一次扣除 3000个', 4, 9010106);
        } else {
            if (status === d++) {
                switch (k) {
                case 0:
                    cm.sendNormalTalk('那我就来告诉勇士你的#e冒险岛联盟#n信息吧？\r\n\r\n#e冒险岛联盟级别：#n#b#e<' + l + '第' + a + '阶段>#n#k\r\n#e联盟等级：#n#b#e<' + m + '>#n#k\r\n#e持有联盟角色：#n#b#e<' + g + '>#n#k\r\n#e攻击队队员：#n#b#e<' + (n == 0 ? '打开联盟后计算' : n) + ' / ' + h + '人>#n#k', 4, 9010106, false, true);
                    status = -1;
                    break;
                case 1:
                    cm.askYesNo('你要进行#e冒险岛联盟升级#n吗？\r\n\r\n#e当前级别：#n#b#e<' + l + '第' + a + '阶段>#n#k\r\n#e下一级别：#n#b#e<' + l + '第' + (a + 1) + '阶段>#n#k\r\n#e升级后可投入的攻击队队员增加：#n #b#e<' + h + '→' + (h + 1) + ' 名>#n#k\r\n\r\n要想升级必须满足以下条件。\r\n\r\n#e<联盟等级> #r#e' + b + '以上#n#k #n\r\n#e<支付币> #b#e#v4310229##t4310229# ' + c + '个#n#k\r\n\r\n要立即#e升级#n联盟吗？', 4, 9010106);
                    break;
                case 2:
                    cm.dispose();
                    cm.openNpc(1530040, '冒险岛联盟_帮助');
                    break;
                case 3:
                    cm.dispose();
                    cm.sendOk('暂无排名!');
                    break;
                case 4:
                    cm.gainItem(4310229, 30000);
                    cm.sendOk('参战有BUG,已赠送3万联盟币');
                    cm.dispose();
                    break;
                case 5:
                    cm.updateInfoQuest(18771, 'rank=101');
                    cm.dispose();
                    cm.sendOk('联盟等级修改为1级别!');
                    break;
                case 6:
                    if (cm.haveItem(4310229, 3000)) {
                        cm.updateInfoQuest(18771, 'rank=405');
                        cm.gainItem(4310229, -3000);
                        cm.dispose();
                        cm.sendOk('联盟等级修改为最高级别!');
                    } else {
                        cm.dispose();
                        cm.sendOk('#b#e#v4310229##t4310229# 3000个#n不够哦!');
                    }
                    break;
                default:
                    cm.dispose();
                }
            } else {
                if (status === d++) {
                    if (e >= 405) {
                        cm.dispose();
                        cm.sendOk('联盟等级为最高级别!无法升级.');
                        return;
                    }
                    if (m < b) {
                        cm.dispose();
                        cm.sendOk('升级需要的联盟内角色等级总和不够!');
                        return;
                    }
                    if (cm.haveItem(4310229, c)) {
                        cm.gainItem(4310229, -c);
                        cm.updateInfoQuest(18771, 'rank=' + (e + 1));
                        cm.sendNormalTalk('啪啪啪！\r\n#e冒险岛联盟级别#n提升了！现在就可以和更多的攻击队队员一起，实现更加快速的成长了！\r\n\r\n#e全新级别：#n#b#e<' + l + '第' + (a + 1) + '阶段>#n#k\r\n#e可以投入的攻击队队员：#n #b#e' + (h + 1) + '#n#k\r\n\r\n那就赶紧快速~成长到下一个级别吧！', 4, 9010106, false, true);
                    } else {
                        cm.dispose();
                        cm.sendOk('#b#e#v4310229##t4310229# 120个#n不够哦!');
                    }
                } else {
                    cm.dispose();
                }
            }
        }
    }
}