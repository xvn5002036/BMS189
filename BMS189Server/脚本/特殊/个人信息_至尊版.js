var status = -1;
var wn1 = '#fUI/CashShop.img/CSBeauty/hairColor/Enable/0#';
var wn2 = '#fUI/CashShop.img/CSBeauty/hairColor/Enable/1#';
var wn3 = '#fUI/CashShop.img/CSBeauty/hairColor/Enable/2#';
var wn4 = '#fUI/CashShop.img/CSBeauty/hairColor/Enable/3#';
var wn5 = '#fUI/CashShop.img/CSBeauty/hairColor/Enable/4#';
var wn6 = '#fUI/CashShop.img/CSBeauty/hairColor/Enable/5#';
var wn7 = '#fUI/CashShop.img/CSBeauty/hairColor/Enable/6#';
var wn8 = '#fUI/CashShop.img/CSBeauty/hairColor/Enable/7#';
var tz3 = '#fEffect/CharacterEff/1082588/0/0#';
var tz4 = '#fEffect/CharacterEff/1082588/3/0#';
var t = '#fEffect/CharacterEff/1112905/0/1#';
var 箭头特效 = '#fUI/UIWindow.img/Quest/icon2/0#';
var 草地合集 = Array('#fItem/Cash/0501.img/05010056/effect/walk1/1#', '#fItem/Cash/0501.img/05010056/effect/walk1/2#', '#fItem/Cash/0501.img/05010056/effect/walk1/5#', '#fItem/Cash/0501.img/05010056/effect/walk1/6#');
function start() {
    action(1, 0, 0);
}
function action(h, e, d) {
    var c = cm.getConstantScriptContent('菜单_NPC立绘');
    var b = Math.floor(Math.random() * c.length);
    var a = c[b][0];
    var g = randomNum(0, c[b][1]);
    if ((status == 0 || status > 2) && h == 0) {
        cm.dispose();
        cm.openNpc(0, '拍卖菜单_至尊版');
    }
    if (h == 1) {
        status++;
    } else {
        status--;
    }
    var f = 草地合集[Math.floor(Math.random() * 草地合集.length)];
    if (cm.getzhizunvip() != 2) {
        cm.dispose();
        cm.playerMessage(1, '该菜单是至尊版专享。');
        return;
    }
    if (status == 0) {
        text = '#face' + g + '##fs18##r#fn方正粗黑宋简体#';
        text += '   欢迎查看 ' + cm.getServerName() + ' 个人信息#fs12##fn宋体#\r\n';
        text += '  #L10086##b' + 箭头特效 + ' 在线时间  #r' + cm.getGamePoints() + ' #l\r\n';
        text += '  #L10090##b' + 箭头特效 + ' 累充统计  #r' + cm.getPlayer().getRMB() + ' #l\r\n';
        text += '  #L10087##b' + 箭头特效 + ' 当前余额  #r' + cm.getHyPay(1) + ' #l\r\n';
        text += '  #L10088##b' + 箭头特效 + ' 当前点券  #r' + cm.getPlayer().getCSPoints(1) + ' #l\r\n';
        text += '  #L10089##b' + 箭头特效 + ' 是否会员  #r' + (cm.isVip() == true ? 'Yes' : 'No') + ' #l\r\n';
        text += '\r\n  #b#v4032459#柠檬:请查收您的资产#r！';
        cm.askMenu_Bottom(text, 204, a);
    } else {
        if (status == 1) {
            if (d == 10086) {
                cm.dispose();
                cm.openNpc(0, '拍卖菜单_至尊版');
            } else {
                if (d == 10087) {
                    cm.dispose();
                    cm.openNpc(0, '拍卖菜单_至尊版');
                } else {
                    if (d == 10088) {
                        cm.dispose();
                        cm.openNpc(0, '拍卖菜单_至尊版');
                    } else {
                        if (d == 10089) {
                            cm.dispose();
                            cm.openNpc(0, '拍卖菜单_至尊版');
                        } else {
                            cm.dispose();
                            cm.openNpc(0, '拍卖菜单_至尊版');
                        }
                    }
                }
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