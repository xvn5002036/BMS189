var status = 0;
var select = 0;
var 套装 = '';
var 战士套装 = Array(1082695, 1073158, 1004808, 1152196, 1053063, 1102940);
var 法师套装 = Array(1053064, 1073159, 1004809, 1152197, 1082696, 1102941);
var 弓箭手套装 = Array(1053065, 1073160, 1004810, 1152198, 1082697, 1102942);
var 飞侠套装 = Array(1053066, 1073161, 1004811, 1152199, 1082698, 1102943);
var 海盗套装 = Array(1053067, 1073162, 1004812, 1152200, 1082699, 1102944);
var grade = Array(1082695, 1004809, 1004808, 1004811, 1442274, 1004810, 1082697, 1004812, 1082696, 1332279, 1082699, 1082698, 1102944, 1342104, 1232113, 1362140, 1242122, 1242121, 1302343, 1053065, 1053064, 1053067, 1053066, 1582023, 1252098, 1152200, 1492235, 1152198, 1152199, 1152196, 1552119, 1152197, 1102943, 1102942, 1102941, 1053063, 1102940, 1302219, 1402259, 1412181, 1452257, 1312203, 1362063, 1432218, 1222113, 1322255, 1073159, 1073158, 1522143, 1532150, 1073161, 1073160, 1142505, 1073162, 1472265, 1382265, 1322156, 1262039, 1422189, 1462243, 1482221, 1542117, 1372228, 1212120, 1213018);
function start() {
    status = -1;
    action(1, 0, 0);
}
function action(h, e, d) {
    if (h == 1) {
        status++;
    } else {
        status--;
        cm.dispose();
        return;
    }
    switch (status) {
    case 0:
        var f = '#fn微软雅黑##fs16##e满属性神装（送天然一套）#k#n\r\n#fs12#';
        f += '#b#L1#来一套<<#v1053063#战士神秘套装>>(10000点卷)#l\r\n';
        f += '#b#L2#来一套<<#v1053064#法师神秘套装>>(10000点卷)#l\r\n';
        f += '#b#L3#来一套<<#v1053065#弓手神秘套装>>(10000点卷)#l\r\n';
        f += '#b#L4#来一套<<#v1053066#飞侠神秘套装>>(10000点卷)#l\r\n';
        f += '#b#L5#来一套<<#v1053067#海盗神秘套装>>(10000点卷)#l\r\n';
        f += '#b#L6#来一枚<<#v1482234#曼妙神级武器>>(10000点卷)#l\r\n\r\n';
        cm.askMenu(f);
        break;
    case 1:
        switch (d) {
        case 1:
            var g = '你将获得一套战士套装<神级>如下:\r\n';
            for (var b = 0; b < 战士套装.length; b++) {
                g += '#v' + 战士套装[b] + '##z' + 战士套装[b] + '#         x1个\r\n';
            }
            套装 = 战士套装;
            select = 1;
            cm.askMenu(g);
            break;
        case 2:
            var g = '你将获得一套法师套装<神级>如下:\r\n';
            for (var b = 0; b < 法师套装.length; b++) {
                g += '#v' + 法师套装[b] + '##z' + 法师套装[b] + '#         x1个\r\n';
            }
            套装 = 法师套装;
            select = 1;
            cm.askMenu(g);
            break;
        case 3:
            var g = '你将获得一套弓箭手套装<神级>如下:\r\n';
            for (var b = 0; b < 弓箭手套装.length; b++) {
                g += '#v' + 弓箭手套装[b] + '##z' + 弓箭手套装[b] + '#         x1个\r\n';
            }
            套装 = 弓箭手套装;
            select = 1;
            cm.askMenu(g);
            break;
        case 4:
            var g = '你将获得一飞侠套装<神级>如下:\r\n';
            for (var b = 0; b < 飞侠套装.length; b++) {
                g += '#v' + 飞侠套装[b] + '##z' + 飞侠套装[b] + '#         x1个\r\n';
            }
            套装 = 飞侠套装;
            select = 1;
            cm.askMenu(g);
            break;
        case 5:
            var g = '你将获得一海盗套装<神级>如下:\r\n';
            for (var b = 0; b < 海盗套装.length; b++) {
                g += '#v' + 海盗套装[b] + '##z' + 海盗套装[b] + '#         x1个\r\n';
            }
            套装 = 海盗套装;
            select = 1;
            cm.askMenu(g);
            break;
        case 6:
            cm.dispose();
            cm.openNpc(9001000, '武器神装');
            break;
        default:
            cm.sendOk('信息 ' + d);
        }
        break;
    case 2:
        switch (select) {
        case 1:
            for (var b = 0; b < 套装.length; b++) {
                var c = cm.getItemInfo();
                var a = c.randomizeStats(c.getEquipById(套装[b])).copy();
                a.setStr(6666);
                a.setDex(6666);
                a.setInt(6666);
                a.setLuk(6666);
                a.setSpeed(99);
                a.setJump(99);
                a.setIuc(2);
                a.setOption(40603, 1, false);
                a.setOption(40603, 2, false);
                a.setOption(40603, 3, false);
                a.setOption(40603, 1, true);
                a.setOption(40603, 2, true);
                a.setOption(40603, 3, true);
                a.setEnhanceLevel(25);
                a.setUpgradeLevel(15);
                a.setUpgradeAvailable(0);
                a.setBdr(99);
                a.setImdr(99);
                a.setDamR(99);
                a.setStatR(99);
                a.setTitle('神级');
                cm.addFromDrop(cm.getClient(), a, false);
                cm.gainItem(套装[b], 1);
            }
            cm.getPlayer().modifyCSPoints(1, -10000);
            cm.dispose();
            cm.sendOk('成功领取神装。');
            break;
        default:
            cm.dispose();
            cm.sendOk('信息 ' + select);
        }
    default:
        cm.dispose();
    }
}