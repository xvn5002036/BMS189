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
    switch (status) {
    case 0:
        var d = '这边可以对收集到的邮票进行兑换。\r\n#b#L0#兑换#r#v4002000##t4002000##k 每张1000点卷#k\r\n#b#L1#兑换#r#v4002001##t4002001##k 每张2000点卷#k\r\n#b#L2#兑换#r#v4002002##t4002002##k 每张5000点卷#k\r\n#b#L3#兑换#r#v4002003##t4002003##k 每张10000点卷#k';
        cm.askMenu(d);
        break;
    case 1:
        intype = 4002000 + a;
        var c;
        switch (intype) {
        case 4002000:
            c = 1000;
            break;
        case 4002001:
            c = 2000;
            break;
        case 4002002:
            c = 5000;
            break;
        case 4002003:
            c = 10000;
            break;
        }
        temp = cm.getItemQuantity(intype);
        if (temp > 0) {
            cost = temp * c;
            cm.askYesNo('是否要兑换 ' + temp + '张#b#v' + intype + '##t' + intype + '##k.');
        } else {
            cm.sendOk('你并没有#b#v' + intype + '##t' + intype + '##k...');
            cm.safeDispose();
        }
        break;
    case 2:
        cm.gainItem(intype, -temp);
        cm.getPlayer().modifyCSPoints(1, cost);
        cm.sendOk('兑换好啦！欢迎下次在来');
        cm.dispose();
        break;
    }
}