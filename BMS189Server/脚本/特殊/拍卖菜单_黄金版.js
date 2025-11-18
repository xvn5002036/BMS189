var status = 0;
function start() {
    status = -1;
    action(1, 0, 0);
}
function action(g, m, o) {
    var h = cm.rand(0, NPCid.length - 1);
    var e = NPCid[h][0];
    var j = NPCid[h][cm.rand(1, NPCid[h].length - 1)];
    if (cm.getzhizunvip() == 2) {
        var k = '至尊版';
    } else {
        if (cm.getzhizunvip() == 1) {
            var k = '黄金版';
        } else {
            if (cm.getzhizunvip() == 0) {
                var k = '普通版';
            }
        }
    }
    if (status == 0 && g == 0) {
        cm.dispose();
        return;
    }
    if (g == 1) {
        status++;
    } else {
        status--;
    }
    if (status == 0) {
        var p = '\r\n';
        if (cm.getNumberFromQuestCustomData(99997) == 1) {
            tz14 = wi14;
            p = p;
        }
        var a = j < 0 ? '' : '#face' + j + '#';
        a += ' #r#fs17#欢迎使用 ' + cm.getServerName() + ' 单机菜单（' + k + '）：#k #fs15#';
        a += p;
        a += ' #r#fs13#（BMS没有商业版、破解版，贪图便宜上当后果自负）#fs15#';
        a += p;
        a += '#L1018##k' + tz14 + '单机攻略#l#b#L0#' + tz14 + '万能传送#l#L56#' + tz14 + '' + (cm.isQuestFinished(1465) ? '五转中心#l' : '快速转职#l') + '#l#L555#' + tz14 + '剧情任务#l';
        a += p;
        a += '#L307#' + tz14 + '个人信息#l#L225#' + tz14 + '在线奖励#l#L222#' + tz14 + '等级奖励#l#L300#' + tz14 + '快捷功能#l ';
        a += p;
        a += '#L200#' + tz14 + '进入商城#l#L7#' + tz14 + '所有商店#l#L9#' + tz14 + '删除道具#l#L85#' + tz14 + '怪怪图鉴#l';
        a += p;
        a += '#L303#' + tz14 + '在线商城#l#L304#' + tz14 + '在线时装#l#L301#' + tz14 + '美容美发#l#L302#' + tz14 + '印章魔方#l';
        a += p;
        a += '#L800#' + tz14 + '萌新签到#l#L20#' + tz14 + '更多服务#l#L1##b' + tz14 + '返回市场#l';
        a += '#r#L501#' + tz14 + '切换菜单风格#l#k\r\n';
        a += '#L503#' + tz14 + '模拟召唤玩家#l';
        if (cm.getzhizunvip() == 1) {
            a += '#L504#' + tz14 + '智能AI#l';
        }
        if (cm.getNumberFromQuestCustomData(99997) == 0) {
            cm.askMenu_Bottom(a, 204, e);
        } else {
            cm.askMenuS(a);
        }
    } else {
        if (status == 1) {
            switch (o) {
            case 504:
                cm.dispose();
                cm.openNpc(9110002, '智能AI');
                break;
            case 503:
                cm.dispose();
                cm.openNpc(9110002, '模拟召唤玩家');
                break;
            case 1018:
                cm.dispose();
                cm.openNpc(9110002, 'BMS_单机攻略');
                break;
            case 502:
                cm.dispose();
                cm.openNpc(9900004, '伤害道具测试');
                break;
            case 800:
                cm.dispose();
                cm.openNpc(9900004, '七天签到');
                break;
            case 501:
                if (cm.getNumberFromQuestCustomData(99997) == 0) {
                    cm.getPlayer().getQuestNAdd(cm.getQuestById(99997)).setCustomData('1');
                } else {
                    cm.getPlayer().getQuestNAdd(cm.getQuestById(99997)).setCustomData('0');
                }
                cm.dispose();
                cm.openNpc(9900004);
                break;
            case 308:
                cm.dispose();
                var l = cm.getUpdateLog();
                var b = l.split('\n');
                var d = '';
                for (var f = 0; f < b.length; f++) {
                    d = d + b[f] + '\r\n';
                }
                cm.sendOk(d);
                break;
            case 307:
                var n = '#fUI/UIWindow2.img/StagedGachapon/Creature/0/normal/2#';
                status = -1;
                var c = '#face' + j + '#';
                c += '  ' + n + ' #fUI/UIWindow2.img/Megaphone/0# #b' + cm.getServerName() + ' #k个人信息 #fUI/UIWindow2.img/Megaphone/0#  ' + n + '\r\n';
                c += '#b   今天在线：#r' + cm.getGamePoints() + ' 分钟 #k';
                c += '#b   VIP等级：#r' + cm.getVip() + '#k #b';
                c += '#b   已签到：#r' + cm.getBossLog('总计签到', 1) + '#k#b\r\n';
                c += '#b   点卷 ：#r' + cm.getPlayer().getCSPoints(1) + '#k#b';
                c += '#b   抵用卷：#r' + cm.getPlayer().getCSPoints(2) + '#k#b';
                c += '#b   消费币：#r' + cm.getHyPay(1) + '#k #b\r\n';
                cm.sendNextNoESC_Bottom(c, e);
                break;
            case 306:
                cm.dispose();
                cm.openNpc(9400373, '会员功能_黄金版');
                break;
            case 304:
                cm.dispose();
                cm.openNpc(9000330, '在线时装_黄金版');
                break;
            case 303:
                cm.dispose();
                cm.openNpc(1052014, '在线商城_黄金版');
                break;
            case 302:
                cm.dispose();
                cm.openNpc(9310074);
                break;
            case 301:
                cm.dispose();
                cm.openNpc(9310072, '美容美发_通用');
                break;
            case 300:
                cm.dispose();
                cm.openNpc(9110002, '快捷功能_通用');
                break;
            case 0:
                cm.dispose();
                cm.openNpc(9900003, '万能传送_黄金版');
                break;
            case 85:
                if (cm.getMapId() >= 867147000 && cm.getMapId() < 867148000) {
                    cm.playerMessage(-1, '这里无法使用怪怪。');
                    cm.playerMessage(5, '这里无法使用怪怪。');
                    break;
                }
                cm.dispose();
                cm.openUI(596);
                break;
            case 225:
                cm.dispose();
                cm.openNpc(0, '在线奖励_黄金版');
                break;
            case 222:
                cm.dispose();
                cm.openNpc(9300011, '等级奖励_黄金版');
                break;
            case 1:
                if (eim == null) {
                    if (cm.getMapId() == 910000000) {
                        cm.dispose();
                        cm.sendOk('您已经在自由市场了。');
                    } else {
                        cm.dispose();
                        cm.warp(910000000, 0);
                    }
                } else {
                    cm.dispose();
                    cm.getTopMsgFont('这里无法进行传送', 3, 20, 4, 0, 0);
                }
                break;
            case 56:
                cm.dispose();
                cm.openNpc(0, '快速转职_通用');
                break;
            case 555:
                cm.dispose();
                cm.openNpc(9900003, '剧情任务');
                break;
            case 7:
                cm.dispose();
                cm.openNpc(0, '所有商店_黄金版');
                break;
            case 9:
                cm.dispose();
                cm.openNpc(9000132, '删除道具_黄金版');
                break;
            case 20:
                cm.dispose();
                cm.openNpc(9001014, '更多服务_黄金版');
                break;
            case 200:
                m = 1;
                cm.askYesNo_Bottom('#face0#  - 误操作提示：\r\n 您确定进入商城吗？', 9111000);
            }
        } else {
            if (status == 2) {
                cm.dispose();
                cm.enter商城();
            }
        }
    }
}
var NPCid = Array(Array(1013358, 1), Array(1052230, 0, 3), Array(1052231, 0, 2), Array(1052232, 0), Array(1052233, 1), Array(1052234, 0), Array(1530060, 0), Array(1530110, -1, 0), Array(1530115, 0), Array(1530120, -1, 0), Array(1530160, -1, 0), Array(1530180, -1), Array(1530220, 0), Array(1530570, 0, 3, 6, 7), Array(1530574, -1), Array(1530604, 2), Array(1530619, -1), Array(9400806, -1), Array(1531003, 1), Array(1540450, -1, 2), Array(1540453, 3), Array(1540471, 0), Array(1540488, 0), Array(1540499, 3), Array(1540658, 0), Array(1540801, -1), Array(1540802, 0), Array(1540810, 2), Array(1540878, 1, 10), Array(9063157, 0), Array(1540932, -1), Array(2052004, 0), Array(2052027, 0), Array(3001270, 1, 7), Array(3001301, 1), Array(3001308, 0, 1), Array(3001503, 2), Array(3001652, 2, 4), Array(3001653, 1), Array(3001675, 1), Array(3002120, 0, 1), Array(3003250, 5), Array(3003270, 0), Array(3003274, 1), Array(3003400, 3, 13), Array(3003507, 0), Array(3003672, 4), Array(3003673, 0), Array(3003676, -1), Array(3003750, 10), Array(3002117, 0), Array(3003902, 3, 5), Array(3004001, 0, 1, 2, 3), Array(3004142, -1), Array(3004323, 1, 5), Array(3004430, 1, 7, 9), Array(9112019, 1), Array(9130106, -1), Array(9201539, 3), Array(9400800, 2), Array(3003769, 0), Array(9400924, 1), Array(3003275, -1));
var tz14 = '#fEffect/CharacterEff/1112926/0/0#';
var wi14 = '#fUI/UIPVP.img/MiniMapIcon/star#';
var tz = '#fEffect/CharacterEff/1082565/4/0#';
var wn19 = '#fUI/CashShop.img/CSEffect/event/0#';
var wn20 = '#fUI/CashShop.img/CSEffect/hot/0#';
var wn21 = '#fUI/CashShop.img/CSEffect/mileage/0#';
var wn22 = '#fUI/CashShop.img/CSEffect/new/0#';
var wn23 = '#fUI/CashShop.img/CSEffect/sale/0#';
var wn24 = '#fUI/CashShop.img/CSEffect/time/0#';
var wp1 = '#fUI/CashShop.img/CSEffect/number/0#';
var wp2 = '#fUI/CashShop.img/CSIcon/0#';
var wp3 = '#fUI/CashShop.img/CSStatus/BtCharge/mouseOver/0#';
var wp14 = '#fUI/CashShop.img/CSSubTabBar/Tab/4/Disable/10#';
var wi6 = '#fUI/StarCityUI.img/Board_Friend/list/0/5/selected#';
var wi7 = '#fUI/StarCityUI.img/Board_GameRank/tab/enabled/0#';
var d10 = '#fUI/UIWindow.img/Shop/meso#';
var ca = java.util.Calendar.getInstance();
var year = ca.get(java.util.Calendar.YEAR);
var month = ca.get(java.util.Calendar.MONTH) + 1;
var day = ca.get(java.util.Calendar.DATE);
var hour = ca.get(java.util.Calendar.HOUR_OF_DAY);
var minute = ca.get(java.util.Calendar.MINUTE);
var second = ca.get(java.util.Calendar.SECOND);
var weekday = ca.get(java.util.Calendar.DAY_OF_WEEK);