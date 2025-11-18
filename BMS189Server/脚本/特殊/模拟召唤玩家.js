var vvv4 = '#fUI/UIWindow4/PQRank/rank/gold#';
var status = -1;
var selectionLog = [];
function start() {
    action(1, 0, 0);
}
function action(d, g, j) {
    var h = cm.getConstantScriptContent('菜单_NPC立绘');
    var e = Math.floor(Math.random() * h.length);
    var b = h[e][0];
    var f = randomNum(0, h[e][1]);
    if (!cm.getPlayer().isGM()) {
        cm.getTopMsgFont('GM才可以使用', 3, 20, 4, 0, 0);
        cm.effect_NormalSpeechBalloon('#e[GM才可以使用]\r\n GM权限获取方法:\r\n 1、聊天框里[全体/对所有人]输入:我爱BMS\r\n 2、后台角色管理器里设置GM等级', 1, 0, 0, 10000, 0, 0);
        cm.dispose();
        return;
    }
    if (!cm.是否启用AI脚本功能()) {
        cm.getTopMsgFont('未启用AI脚本功能', 3, 20, 4, 0, 0);
        cm.effect_NormalSpeechBalloon('#e[未启用AI脚本功能]\r\n 获取方法:\r\n 1、后台功能开关-AI机器人-勾选启用AI脚本功能\r\n 2、后台角色管理器里设置GM等级', 1, 0, 0, 10000, 0, 0);
        cm.dispose();
        return;
    }
    if (status == 0 && d == 0) {
        cm.dispose();
        return;
    }
    d == 1 ? status++ : status--;
    selectionLog[status] = j;
    var c = -1;
    if (status <= c++) {
        cm.dispose();
    } else {
        if (status === c++) {
            var k = '#face' + f + '##fs18##r#fn微软雅黑#欢迎使用 ' + cm.getServerName() + ' AI玩家机器人#fs15##k\r\n';
            k += '可站街,聊天,坐椅子,支持任何地图\r\n';
            k += '#L100#' + vvv4 + ' 跟随我(当前地图的实体人)#l\r\n';
            k += '#L101#' + vvv4 + ' 取消跟随#l\r\n';
            if (cm.getzhizunvip() == 2) {
            }
            k += '#L0#' + vvv4 + ' 召唤一个AI玩家(男)#l\r\n';
            k += '#L1#' + vvv4 + ' 召唤一个AI玩家(女)#l\r\n';
            k += '#L2#' + vvv4 + ' 召唤一个AI玩家(男,含宠物)#l\r\n';
            k += '#L3#' + vvv4 + ' 召唤一个AI玩家(女,含宠物)#l\r\n';
            k += '#L4#' + vvv4 + ' 召唤一个AI玩家(男,含怪怪卡)#l\r\n';
            k += '#L5#' + vvv4 + ' 召唤一个AI玩家(女,含怪怪卡)#l\r\n';
            k += '#L6#' + vvv4 + ' 召唤一个AI玩家(男,含宠物,含怪怪卡)#l\r\n';
            k += '#L7#' + vvv4 + ' 召唤一个AI玩家(女,含宠物,含怪怪卡)#l\r\n\r\n\r\n\r\n';
            k += '  \r\n';
            cm.askMenu_Bottom(k, 204, b);
        } else {
            if (status === c++) {
                switch (j) {
                case 100:
                    if (cm.跟随(false) > 0) {
                        cm.effect_NormalSpeechBalloon('#e已召唤当前地图人物跟随)\r\n', 1, 0, 0, 10000, 0, 0);
                    } else {
                        cm.effect_NormalSpeechBalloon('#e当前地图没有实体人物\r\n请注意不是AI机器人\r\n可在后台角色管理器里制作机器人\r\n', 1, 0, 0, 10000, 0, 0);
                    }
                    cm.dispose();
                    break;
                case 101:
                    cm.跟随(true);
                    cm.dispose();
                    break;
                case 102:
                    if (cm.getParty() == null) {
                        cm.PartyAutoOn();
                    }
                    if (!cm.isLeader()) {
                        cm.sendOk('请你们团队的队长和我对话。');
                        cm.dispose();
                    } else {
                        var a = cm.加入队伍();
                        if (a > 0) {
                            cm.effect_NormalSpeechBalloon('#e已邀请[' + a + ']人加入队伍.\r\n', 1, 0, 0, 10000, 0, 0);
                        } else {
                            cm.effect_NormalSpeechBalloon('#e当前地图没有实体人物\r\n请注意不是AI机器人\r\n可在后台角色管理器里制作机器人\r\n', 1, 0, 0, 10000, 0, 0);
                        }
                        cm.dispose();
                    }
                    break;
                default:
                    cm.模拟玩家(j);
                    cm.dispose();
                }
            } else {
                cm.dispose();
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