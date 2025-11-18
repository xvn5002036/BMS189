var status = 0;
var eff = '#fUI/UIWindow2.img/ToolTip/Equip/Star/Star2#';
var kkk = '#fEffect/CharacterEff/1051296/1/0#';
var eff1 = '#fEffect/CharacterEff/1112905/0/1#';
var icon = '#fUI/Basic.img/BtMin2/normal/0#';
var iconEvent = '#fUI/UIToolTip.img/Item/Equip/Star/Star#';
var tt = '#fEffect/ItemEff/1112811/0/0#';
var wn4 = '#fUI/CashShop.img/CSBeauty/hairColor/Enable/3#';
var wn5 = '#fUI/CashShop.img/CSBeauty/hairColor/Enable/4#';
var wn6 = '#fUI/CashShop.img/CSBeauty/hairColor/Enable/5#';
var wn7 = '#fUI/CashShop.img/CSBeauty/hairColor/Enable/6#';
var wn8 = '#fUI/CashShop.img/CSBeauty/hairColor/Enable/7#';
var cal = java.util.Calendar.getInstance();
var year = cal.get(java.util.Calendar.YEAR);
var month = cal.get(java.util.Calendar.MONTH) + 1;
var day = cal.get(java.util.Calendar.DATE);
var hour = cal.get(java.util.Calendar.HOUR_OF_DAY);
var min = cal.get(java.util.Calendar.MINUTE);
var sec = cal.get(java.util.Calendar.SECOND);
var weekday = cal.get(java.util.Calendar.DAY_OF_WEEK) - 1;
var weekName = [
    '日',
    '一',
    '二',
    '三',
    '四',
    '五',
    '六'
];
function start() {
    status = -1;
    action(1, 0, 0);
}
function action(h, e, d) {
    var c = cm.getConstantScriptContent('菜单_NPC立绘');
    var b = Math.floor(Math.random() * c.length);
    var a = c[b][0];
    var f = randomNum(0, c[b][1]);
    if (status == 0 && h == 0) {
        cm.dispose();
        cm.openNpc(0, '拍卖菜单_至尊版');
        return;
    }
    if (h == 1) {
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
        var g = '#face' + f + '##fn方正粗黑宋简体#';
        g += '     #fs17##r欢迎使用 ' + cm.getServerName() + ' 交易中心#fs15#\r\n';
        g += '      服务器时间：#b' + year + '年' + month + '月' + day + '日 ' + hour + '点' + min + '分' + sec + '秒 #r星期' + weekName[weekday] + '#k\r\n';
        g += '#b\r\n';
        g += ' #L5#余额换点#l ';
        g += ' #L3#五转核心#l \r\n';
        cm.askMenu_Bottom(g, 204, a);
    } else {
        if (status == 1) {
            switch (d) {
            case 1:
                cm.dispose();
                cm.openNpc(1540310, '邮票换点');
                break;
            case 2:
                cm.dispose();
                cm.openNpc(1540310, '邮票购买');
                break;
            case 3:
                cm.dispose();
                cm.openNpc(1540310, '积分兑换');
                break;
            case 4:
                cm.dispose();
                cm.openNpc(1540310, '枫叶换冒险币');
                break;
            case 5:
                cm.dispose();
                cm.openNpc(1540310, '余额兑换点券_至尊版');
                break;
            case 6:
                cm.dispose();
                cm.openNpc(9100000, '兑换彩虹枫叶');
                break;
            default:
                cm.sendOk('该功能正在紧张进行制作中，请耐心等待。');
                cm.dispose();
                break;
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