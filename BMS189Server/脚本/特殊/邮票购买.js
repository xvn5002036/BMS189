var status;
var temp;
var cast;
var intype;
function start() {
    status = -1;
    action(1, 0, 0);
}
function action(e, b, a) {
    if (e == 1) {
        status++;
    } else {
        cm.dispose();
        return;
    }
    if (cm.getzhizunvip() != 2) {
        cm.dispose();
        cm.playerMessage(1, '该菜单是至尊版专享。');
        return;
    }
    if (cm.getSpace(1) < 5 || cm.getSpace(2) < 5 || cm.getSpace(3) < 5 || cm.getSpace(4) < 5 || cm.getSpace(5) < 5) {
        cm.sendOk('你的背包满了，每一栏都要留5个位置。');
        cm.dispose();
        return;
    }
    switch (status) {
    case 0:
        var d = '这边可以购买特殊的邮票。\r\n#b#L0#购买#r#v4002000##t4002000##k 1100点卷#k\r\n#b#L1#购买#r#v4002001##t4002001##k 2200点卷#k\r\n#b#L2#购买#r#v4002002##t4002002##k 5300点卷#k\r\n#b#L3#购买#r#v4002003##t4002003##k 10400点卷#k';
        cm.askMenu(d);
        break;
    case 1:
        intype = 4002000 + a;
        var d = '那么你现在想用购买多少张#v' + intype + '##t' + intype + '#？(本次最大可以输入:999个)\r\n\r\n';
        cm.askNumber(d, 0, 0, 999);
        break;
    case 2:
        if (a == 0) {
            cm.sendOk('我不能和你兑换0张#b#v' + intype + '##t' + intype + '#k.');
            cm.dispose();
        } else {
            temp = a;
            var c;
            switch (intype) {
            case 4002000:
                c = 1100;
                break;
            case 4002001:
                c = 2200;
                break;
            case 4002002:
                c = 5300;
                break;
            case 4002003:
                c = 10400;
                break;
            }
            cost = temp * c;
            cm.askYesNo('你想使用 #b' + cost + ' 点卷#k 来兑换#b ' + temp + ' 个#v' + intype + '##t' + intype + '##k吗?');
        }
        break;
    case 3:
        if (cm.getPlayer().getCSPoints(1) < cost || !cm.canHold(intype)) {
            cm.sendOk('请确认你有足够多的点卷或者其他物品栏有足够的空间.');
        } else {
            cm.gainItem(intype, temp);
            cm.getPlayer().modifyCSPoints(1, -cost);
            cm.sendOk('兑换好啦！欢迎下次在来');
        }
        cm.dispose();
        break;
    }
}