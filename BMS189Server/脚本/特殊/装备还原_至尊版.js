var icon = '#fUI/UIToolTip.img/Item/Equip/Star/Star#';
var icon2 = '#fUI/Basic.img/BtMin2/normal/0#';
var typed = 1;
var cost = 10;
var inventoryType = 1;
var item = null;
var status = -1;
var selectionLog = [];
function start() {
    action(1, 0, 0);
}
function action(e, h, k) {
    var j = cm.getConstantScriptContent('菜单_NPC立绘');
    var f = Math.floor(Math.random() * j.length);
    var a = j[f][0];
    var g = randomNum(0, j[f][1]);
    if (cm.getzhizunvip() != 2) {
        cm.dispose();
        cm.playerMessage(1, '该菜单是至尊版专享。');
        return;
    }
    if (status == 0 && e == 0) {
        cm.dispose();
        cm.openNpc(9310476, '所有功能_至尊版');
        return;
    }
    e == 1 ? status++ : status--;
    selectionLog[status] = k;
    var c = -1;
    if (status <= c++) {
        cm.dispose();
    } else {
        if (status === c++) {
            var m = '#face' + g + '##fn方正粗黑宋简体#';
            m += '装备还原：\r\n\r\n1、重置装备所有的属性（包括潜能星之力）。\r\n2、获取装备栏的第一格。\r\n#b';
            m += ' #L1# ' + icon2 + ' 使用说明. #l\r\n';
            m += ' #L2# ' + icon2 + ' 开始还原. #l\r\n \r\n';
            cm.askMenu_Bottom(m, 204, a);
        } else {
            if (status === c++) {
                if (k == 1) {
                    typed = 1;
                    status = -1;
                    var m = '#face' + g + '# \r\n该功能将装备还原成天然，需要放在装备栏第1格;\r\n强化过的装备不可还原，不同等级的装备费用不同;';
                    cm.askAcceptDecline_Bottom(m, a);
                } else {
                    if (k == 2) {
                        typed = 2;
                        item = cm.getInventory(1).getItem(1);
                        if (item == null) {
                            cm.sendOk('你确认你包裹的第一栏有装备存在？');
                            cm.dispose();
                            return;
                        }
                        if (item.getTitle().indexOf('★') >= 0) {
                            cm.sendOk('提升过品级的装备无法还原。');
                            cm.dispose();
                            return;
                        }
                        cost = cost * cm.getReqLevel(item.getItemId()) * 50;
                        var m = '#face' + g + '##fn方正粗黑宋简体#';
                        m += '#face' + g + '  #《装备还原》\r\n  #fs15##b装备: #v' + item.getItemId() + '##z' + item.getItemId() + '##k 的还原费用为 #r' + cost + '#k 点卷!\r\n\r\n  #r1.请确保该装备无误!\r\n  2.不可逆操作，造成失误不予赔偿!\r\n\r\n#k  现在是否继续？#n\r\n \r\n';
                        cm.askAcceptDecline_Bottom(m, 204, a);
                    }
                }
            } else {
                if (status === c++) {
                    if (cm.getPlayer().getCSPoints(1) < cost) {
                        cm.effect_NormalSpeechBalloon('身上没有[#r' + cost + '#k]点卷', 1, 0, 0, 5000, 0, 0);
                        cm.playerMessage(-1, '持有点券不足!!');
                        cm.dispose();
                        return;
                    }
                    if (cm.isCash(item.getItemId())) {
                        cm.sendOk('只有非现金道具才能进行还原');
                        cm.dispose();
                        return;
                    }
                    var b = item.getQuantity();
                    var l = cm.getItemInfo();
                    var d = l.randomizeStats(l.getEquipById(item.getItemId())).copy();
                    cm.removeSlot(1, 1, b);
                    cm.addFromDrop(cm.getClient(), d, false);
                    cm.getPlayer().modifyCSPoints(1, -cost);
                    cm.playerMessage(-1, '还原成功了');
                    cm.effect_NormalSpeechBalloon('装备还原成功了', 1, 0, 0, 3000, 0, 0);
                    cm.dispose();
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