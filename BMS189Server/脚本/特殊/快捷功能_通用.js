var vvv4 = '#fUI/UIWindow4/PQRank/rank/gold#';
var status = -1;
var selectionLog = [];
function start() {
    action(1, 0, 0);
}
function action(l, d, t) {
    var c = cm.getConstantScriptContent('菜单_NPC立绘');
    var h = Math.floor(Math.random() * c.length);
    var r = c[h][0];
    var j = randomNum(0, c[h][1]);
    if (!cm.getPlayer().isGM()) {
        cm.getTopMsgFont('GM才可以使用', 3, 20, 4, 0, 0);
        cm.effect_NormalSpeechBalloon('#e[GM才可以使用]\r\n GM权限获取方法:\r\n 1、聊天框里[全体/对所有人]输入:我爱BMS\r\n 2、后台角色管理器里设置GM等级', 1, 0, 0, 10000, 0, 0);
        return;
    }
    if (status == 0 && l == 0) {
        cm.dispose();
        return;
    }
    l == 1 ? status++ : status--;
    selectionLog[status] = t;
    var o = -1;
    if (status <= o++) {
        cm.dispose();
    } else {
        if (status === o++) {
            var k = '   #face' + j + '##fs18##r#fn微软雅黑#欢迎使用 ' + cm.getServerName() + ' 快捷功能#fs15##k\r\n';
            k += '  #L1#' + vvv4 + ' 一秒暴富#l #L2#' + vvv4 + ' 提升等级#l #L3#' + vvv4 + ' 领取神装#l #L4#' + vvv4 + ' 技能管理#l\r\n';
            k += '  #L5#' + vvv4 + ' 修改属性#l #L6#' + vvv4 + ' 制作道具#l #L7#' + vvv4 + ' 任意转职#l #L8#' + vvv4 + ' 开启无敌#l\r\n';
            k += '  #L100#' + vvv4 + ' 转品克缤#l #L9#' + vvv4 + ' 召唤怪物#l #L10#' + vvv4 + ' 任务管理#l #L11#' + vvv4 + ' 去任意地#l\r\n';
            k += '  #L101#' + vvv4 + ' 定点瞬移#l';
            cm.askMenu_Bottom(k, 204, r);
        } else {
            if (status === o++) {
                switch (t) {
                case 101:
                    if (cm.getPlayer().getCSPoints(1) < 1000000) {
                        cm.playerMessage(1, '抱歉，你没足够的100W点卷！');
                        cm.dispose();
                    } else {
                        cm.getPlayer().modifyCSPoints(1, -1000000);
                        cm.gainItem(2431729, 1);
                        cm.playerMessage(1, '恭喜,瞬移功能已购买成功,请查看消耗栏.');
                        cm.dispose();
                    }
                    break;
                case 1:
                    cm.getPlayer().getStorage().setSlots(96);
                    cm.getPlayer().getStorage().saveToDB();
                    cm.一键扩充项链();
                    cm.getPlayer().forceCompleteQuest(6500);
                    var q = 10000000;
                    var a = 10000000;
                    var n = 210000000;
                    var m = 1000000;
                    var g = 9999;
                    var p = -999999;
                    var s = 9999;
                    var f = 999999;
                    var e = 9999;
                    cm.getPlayer().modifyCSPoints(1, q);
                    cm.getPlayer().modifyCSPoints(2, a);
                    cm.gainMeso(n);
                    cm.gainPlayerPoints(m);
                    cm.getPlayer().addFame(g);
                    cm.addHyPay(p, true);
                    cm.gainItem(2435770, s);
                    cm.getPlayer().gainvCorePiece(100000);
                    cm.getPlayer().gainHonorExp(f, true);
                    cm.getPlayer().gainGamePoints(e);
                    var b = ' #face' + j + '##fs18##r#fn微软雅黑#你获得了：#fs18##k\r\n';
                    b += '   #b点券#g ' + q + ' ';
                    b += '   #b抵用#g ' + a + ' ';
                    b += '   #b金币#g ' + n + ' \r\n';
                    b += '   #b积分#g ' + m + ' ';
                    b += '   #b人气#g ' + g + ' ';
                    b += '   #b余额#g ' + Math.abs(p) + ' \r\n';
                    b += '   #b核心#g ' + s + ' ';
                    b += '   #b声望#g ' + f + ' ';
                    b += '   #b在线#g ' + e + ' \r\n';
                    cm.effect_NormalSpeechBalloon('#e[突然暴富]：\r\n' + b, 1, 0, 0, 4000, 0, 0);
                    cm.dispose();
                    break;
                case 2:
                    if (cm.getLevel() < 999) {
                        cm.askNumber_Bottom('#face' + j + '#请输入目标等级，最高999级。');
                        ttype = 2;
                    } else {
                        cm.playerMessage(-1, '已经是最高等级.');
                    }
                    break;
                case 3:
                    cm.dispose();
                    cm.openNpc(9110002, '一键神装');
                    break;
                case 4:
                    cm.dispose();
                    cm.openNpc(9110002, '技能管理_通用');
                    break;
                case 5:
                    cm.dispose();
                    cm.openNpc(9110002, '修改属性_通用');
                    break;
                case 6:
                    cm.dispose();
                    cm.openNpc(9110002, '制作道具_通用');
                    break;
                case 7:
                    cm.dispose();
                    cm.openNpc(9110002, '任意转职_通用');
                    break;
                case 8:
                    if (cm.getPlayer().isInvincible()) {
                        cm.getPlayer().setInvincible1(false);
                        cm.addPopupSay(9110002, 3000, '无敌关闭。');
                        cm.dispose();
                    } else {
                        cm.getPlayer().setInvincible1(true);
                        cm.addPopupSay(9110002, 3000, '无敌已开启！再次使用关闭。');
                        cm.dispose();
                    }
                    break;
                case 9:
                    cm.dispose();
                    cm.openNpc(9110002, '召唤怪物_通用');
                    break;
                case 10:
                    cm.dispose();
                    cm.openNpc(9110002, '任务管理_通用');
                    break;
                case 11:
                    cm.dispose();
                    cm.openNpc(9110002, '去任意地');
                    break;
                case 100:
                    cm.dispose();
                    cm.openNpc(9310376, '体验品克缤职业');
                    break;
                case 23:
                    if (cm.getPlayer().isInvincible()) {
                        cm.getPlayer().setInvincible(false);
                        cm.dispose();
                        cm.sendOk('\r\n\r\n			#e#r无敌模式关闭');
                    } else {
                        cm.getPlayer().setInvincible(true);
                        cm.dispose();
                        cm.sendOk('\r\n\r\n			#e#无敌模式开启!');
                    }
                    break;
                case 7:
                    cm.gainExp(1000000000);
                    cm.dispose();
                    cm.sendOk('\r\n\r\n			#e#r恭喜你获得了10E经验!');
                    break;
                case 13:
                    cm.dispose();
                    cm.openNpc(9310376, '作弊器');
                    break;
                case 16:
                    cm.gainItem(4001839, 30000);
                    cm.dispose();
                    cm.sendOk('#r恭喜您获得#i4001839##z4001839#!');
                    break;
                case 17:
                    cm.unequipEverything();
                    cm.dispose();
                    break;
                case 18:
                    cm.gainItem(2431093, 1);
                    cm.dispose();
                    cm.sendOk('\r\n\r\n			#r#v2431093# 可设置键盘上快捷升级!');
                    break;
                }
            } else {
                if (status === o++) {
                    if (ttype == 2) {
                        while (cm.getLevel() < t) {
                            if (cm.getLevel() < 999) {
                                cm.getPlayer().levelUp();
                            }
                            cm.effect_NormalSpeechBalloon('\r\n#fs30#正在刷级,当前等级:<' + cm.getLevel() + '>', 1, 1, 0, 2000, 0, 0);
                        }
                    }
                    cm.dispose();
                } else {
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
Number.prototype.formatMoney = function (d, g, h, a) {
    d = !isNaN(d = Math.abs(d)) ? d : 2;
    g = g !== undefined ? g : '　';
    h = h || ',';
    a = a || '.';
    var f = this, c = f < 0 ? '-' : '', e = parseInt(f = Math.abs(+f || 0).toFixed(d), 10) + '', b = (b = e.length) > 3 ? b % 3 : 0;
    return g + c + (b ? e.substr(0, b) + h : '') + e.substr(b).replace(/(\d{3})(?=\d)/g, '$1' + h) + (d ? a + Math.abs(f - e).toFixed(d).slice(2) : '');
};