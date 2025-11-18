var status = 0;
var wi15 = '#fUI/UIToolTip.img/Item/Equip/Star/Star1#';
var ca = java.util.Calendar.getInstance();
var year = ca.get(java.util.Calendar.YEAR);
var month = ca.get(java.util.Calendar.MONTH) + 1;
var day = ca.get(java.util.Calendar.DATE);
var hour = ca.get(java.util.Calendar.HOUR_OF_DAY);
var minute = ca.get(java.util.Calendar.MINUTE);
var second = ca.get(java.util.Calendar.SECOND);
var weekday = ca.get(java.util.Calendar.DAY_OF_WEEK);
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
        cm.openNpc(9900004);
    }
    if (h == 1) {
        status++;
    } else {
        status--;
    }
    if (status == 0) {
        var g = '#face' + f + '#欢迎使用bms单机版商店#e：#n\r\n';
        g += '#L0#' + wi15 + '杂货商店#l #L202#' + wi15 + '装备副手#l #L301#' + wi15 + '道具卷轴#l\r\n';
        g += '#L21#' + wi15 + '稀有椅子#l #L16#' + wi15 + '伤害皮肤#l\r\n';
        cm.askMenu_Bottom(g, 204, a);
    } else {
        if (status == 1) {
            switch (d) {
            case 301:
                cm.dispose();
                cm.openNpc(9310144, '道具卷轴');
                break;
            case 300:
                cm.dispose();
                cm.openNpc(9310144, '突破石店');
                break;
            case 202:
                cm.dispose();
                cm.openNpc(9310144, '装备副手');
                break;
            case 201:
                cm.dispose();
                cm.openNpc(9310144, '武器非神装');
                break;
            case 0:
                cm.dispose();
                cm.openShop(1012123);
                break;
            case 3:
                cm.dispose();
                cm.openShop(1033003);
                break;
            case 16:
                cm.dispose();
                cm.openNpc(1540660);
                break;
            case 20:
                cm.dispose();
                cm.openNpc(9000069, 1);
                break;
            case 21:
                cm.dispose();
                cm.openNpc(9000069, 2);
                break;
            case 22:
                cm.dispose();
                cm.openNpc(9000069, 4);
                break;
            case 24:
                cm.dispose();
                cm.openNpc(9310144, 999);
                break;
            case 26:
                cm.dispose();
                cm.openNpc(9900004, 8);
                break;
            case 28:
                cm.dispose();
                cm.openNpc(9900004, 10);
                break;
            case 29:
                cm.dispose();
                cm.openNpc(9900004, 11);
                break;
            case 35:
                cm.dispose();
                cm.openNpc(9900004, 1001);
                break;
            case 100:
                cm.dispose();
                cm.openNpc(9900004, '蜡笔专卖');
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