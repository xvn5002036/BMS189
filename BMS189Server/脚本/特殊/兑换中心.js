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
function start() {
    status = -1;
    action(1, 0, 0);
}
function action(d, b, a) {
    if (status == 0 && d == 0) {
        cm.dispose();
        cm.openNpc(0, '拍卖菜单_至尊版');
        return;
    }
    if (d == 1) {
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
        var c = '';
        c += '#e#d		' + eff + '' + cm.getServerName() + ' 兑换所 ' + eff + '#n#k\r\n \r\n';
        c += '		 #r#L5#' + wn8 + ' 用余额 #e>>>#n 购买点券#e;#n#l#k \r\n';
        c += '		 #b#L1#' + wn4 + ' 用邮票 #e>>>#n 购买点券#e;#n#l#k \r\n';
        c += '		 #L2#' + wn5 + ' 用点券 #e>>>#n 购买邮票#e;#n#l \r\n';
        c += '		 #L3#' + wn6 + ' 用点券 #e>>>#n 购买核心#e;#n#l \r\n';
        c += '		 #L6#' + wn6 + ' 用枫叶 #e>>>#n 购买#v4032733##e;#n#l \r\n \r\n';
        cm.askMenuS(c);
    } else {
        if (status == 1) {
            switch (a) {
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