var vvv4 = '#fUI/UIWindow4/PQRank/rank/gold#';
var status = -1;
var selectionLog = [];
var zyhzNum = 10000;
function start() {
    action(1, 0, 0);
}
function action(c, f, h) {
    var g = cm.getConstantScriptContent('菜单_NPC立绘');
    var d = Math.floor(Math.random() * g.length);
    var a = g[d][0];
    var e = randomNum(0, g[d][1]);
    if (status == 0 && c == 0) {
        cm.dispose();
        return;
    }
    c == 1 ? status++ : status--;
    selectionLog[status] = h;
    var b = -1;
    if (status <= b++) {
        cm.dispose();
    } else {
        if (status === b++) {
            var j = '   #face' + e + '##fs18##r#fn微软雅黑#欢迎使用 ' + cm.getServerName() + ' 武器突破系统#fs15##k\r\n';
            j += '#r#L999#伤害上限突破简介#l\r\n\r\n';
            j += '#L1#' + vvv4 + ' [武器]正义火种突破 (#k目前状态：#r火爆内容#b)#l \r\n';
            j += '#L2#' + vvv4 + ' [武器]中介币突破   (#k目前状态：#r推荐内容#b)#l \r\n';
            j += '#L3#' + vvv4 + ' [武器]100000点卷突破100000伤害#l \r\n';
            j += '#L4#' + vvv4 + ' [武器]1亿点卷突破突破1亿伤害#l \r\n';
            cm.askMenu_Bottom(j, 204, a);
        } else {
            if (status === b++) {
                switch (h) {
                case 1:
                    if (cm.haveItem(4033356, 3)) {
                        if (cm.changeLimitBreak(zyhzNum)) {
                            cm.gainItem(4033356, -3);
                            cm.sendOk('#b伤害上限突破成功.\r\n\r\n本次追加伤害为：#r' + zyhzNum + '#b.');
                            cm.worldSpouseMessage(32, '[伤害突破] 玩家 ' + cm.getPlayer().getName() + ' 使用 正义火种1 让武器伤害上限突破成功 本次追加 ' + zyhzNum + ' 伤害值 。');
                        } else {
                            cm.sendOk('#b突破失败.\r\n系统为检测到角色身上装备武器.');
                        }
                        cm.dispose();
                    } else {
                        cm.sendOk('#b突破失败.\r\n需要 3个 正义火种1 才可以突破.');
                        cm.dispose();
                    }
                    cm.dispose();
                    break;
                case 2:
                    if (cm.haveItem(zmtid, 50)) {
                        if (cm.changeLimitBreak(zmtNum)) {
                            cm.gainItem(zmtid, -50);
                            cm.sendOk('#b伤害上限突破成功.\r\n\r\n本次追加伤害为：#r' + zmtNum + '#b.');
                            cm.worldSpouseMessage(32, '[伤害突破] 玩家 ' + cm.getPlayer().getName() + ' 使用 中介币 让武器伤害上限突破成功 本次追加 ' + zmtNum + ' 伤害值 。');
                        } else {
                            cm.sendOk('#b突破失败.\r\n系统为检测到角色身上装备武器.');
                        }
                        cm.dispose();
                    } else {
                        cm.sendOk('#b突破失败.\r\n需要 50个 中介币 才可以突破.');
                        cm.dispose();
                    }
                    break;
                case 3:
                    zmtNum = 100000;
                    if (cm.getPlayer().getCSPoints(1) > zmtNum) {
                        if (cm.changeLimitBreak(zmtNum)) {
                            cm.sendOk('#b伤害上限突破成功.\r\n\r\n本次追加伤害为：#r' + zmtNum + '#b.');
                            cm.worldMessageYellow('[伤害突破] 玩家 ' + cm.getPlayer().getName() + ' 使用 点卷 让武器伤害上限突破成功 本次追加 ' + zmtNum + ' 伤害值 。');
                        } else {
                            cm.sendOk('#b突破失败.\r\n系统为检测到角色身上装备武器.');
                        }
                        cm.dispose();
                    } else {
                        cm.sendOk('b突破失败,您的点卷不足' + zmtNum);
                        cm.dispose();
                    }
                    break;
                case 4:
                    zmtNum = 100000000;
                    if (cm.getPlayer().getCSPoints(1) > zmtNum) {
                        if (cm.changeLimitBreak(zmtNum)) {
                            cm.sendOk('#b伤害上限突破成功.\r\n\r\n本次追加伤害为：#r' + zmtNum + '#b.');
                            cm.worldMessageYellow('[伤害突破] 玩家 ' + cm.getPlayer().getName() + ' 使用 点卷 让武器伤害上限突破成功 本次追加 ' + zmtNum + ' 伤害值 。');
                        } else {
                            cm.sendOk('#b突破失败.\r\n系统为检测到角色身上装备武器.');
                        }
                        cm.dispose();
                    } else {
                        cm.sendOk('b突破失败,您的点卷不足' + zmtNum);
                        cm.dispose();
                    }
                    break;
                case 999:
                    cm.sendOk('	我能够为你的武器增加武器攻击伤害上限以提升您的潜在输出能力。使用不同的道具对武器伤害上限提升的效果不同。\r\n	1.消耗#b50充值余额#k突破，每次可以为武器提升150W~800W伤害。\r\n	2.消耗3个#b#v4033356#正义火种1#k突破，每次可以为武器提升3W~10W的伤害。\r\n	3.消耗10个#b#v4000463#中介币#k突破，每次可以为武器提升20W~60W的伤害。');
                    cm.dispose();
                    break;
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