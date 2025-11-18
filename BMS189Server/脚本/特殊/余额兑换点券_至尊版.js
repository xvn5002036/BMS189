var status;
var text;
var payurl = 'http://baidu.com';
var num, cash;
var head = '#fUI/UIWindow2.img/Quest/quest_info/summary_icon/summary#\r\n';
var icon = '#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#';
var icon2 = '#fUI/UIToolTip.img/Item/Equip/Star/Star#';
function start() {
    status = -1;
    action(1, 0, 0);
}
function action(d, c, b) {
    if (d == -1) {
        cm.dispose();
        return;
    } else {
        if (d == 0 && status == 0) {
            cm.dispose();
            cm.openNpc(0, '兑换中心');
            return;
        }
        if (d == 1) {
            status++;
        } else {
            cm.dispose();
            return;
        }
    }
    var a = cm.getHyPay(1);
    if (cm.getzhizunvip() != 2) {
        cm.dispose();
        cm.playerMessage(1, '该菜单是至尊版专享。');
        return;
    }
    if (status == 0) {
        text = head + '- ' + cm.getServerName() + ' -\r\n\r\n';
        text += '#r余额为充值后直接获得的个数，1余额 = 3000点卷。\r\n兑换的点券可用于购买游戏商城道具。\r\n';
        text += '#k	' + icon2 + '当前余额为：' + a + '个\r\n';
        text += '	' + icon2 + '当前点券余额：' + cm.getPlayer().getCSPoints(1) + '点\r\n\r\n';
        text += '#b#L0#' + icon + '余额兑换点券(1余额=3000点券)#l\r\n';
        cm.askMenu(text);
    } else {
        if (status == 1) {
            if (b == 0) {
                cm.askNumber('当前余额：' + a + '\r\n比率：1:3000\r\n那么你想要兑换多少余额？', 1, 1, 3000);
            } else {
                if (b == 1) {
                    cm.openWeb(payurl);
                    cm.askMenu('正在跳转充值页面，充值完毕后点击下一步……');
                    status = -1;
                } else {
                    if (b == 2) {
                        cm.dispose();
                        cm.openNpc(9010057, 609);
                    } else {
                        if (b == 3) {
                            cm.dispose();
                            cm.openNpc(9010057, '办理理财');
                        }
                    }
                }
            }
        } else {
            if (status == 2) {
                num = b;
                cash = num * 3000;
                if (num < 1 || num > 10000) {
                    cm.sendOk('输入的点数范围有误，请重新输入。');
                    cm.dispose();
                    return;
                }
                if (a < num) {
                    cm.sendOk('您当前可兑换的余额为' + a + '，请重新输入');
                    cm.dispose();
                    return;
                }
                cm.askYesNo('是否使用#r' + num + '余额#k兑换#r' + cash + '#k点券？');
            } else {
                if (status == 3) {
                    cm.addHyPay(num, true);
                    cm.getPlayer().modifyCSPoints(1, cash);
                    cm.sendOk('兑换成功！');
                    cm.dispose();
                }
            }
        }
    }
}