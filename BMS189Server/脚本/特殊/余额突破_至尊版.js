var 突破值 = 50000000000;
var 突破价格 = 100000;
var status = 0;
function start() {
    status = -1;
    action(1, 0, 0);
}
function action(c, b, a) {
    if (c <= 0 && status == 0) {
        cm.dispose();
        cm.openNpc(0, '拍卖菜单_至尊版');
        return;
    }
    if (c == 1) {
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
        cm.askYesNo('#r#fn微软雅黑##fs13#突破值：' + 突破值 + '#k\r\n\r\n#fs12#是否花费[' + 突破价格 + ']余额对#b穿戴中#k武器进行突破？');
    } else {
        if (status == 1) {
            if (cm.getHyPay(1) >= 突破价格) {
                if (cm.changeLimitBreak(突破值)) {
                    cm.addHyPay(突破价格, true);
                    cm.askMenu('#b伤害上限突破成功.\r\n\r\n本次追加伤害为：#r' + 突破值 + '#b.');
                    cm.worldSpouseMessage(10, '[伤害突破] 玩家 ' + cm.getPlayer().getName() + ' 使用[' + 突破价格 + ']余额 突破武器伤害上限 本次追加 ' + 突破值 + ' 伤害值 。');
                } else {
                    cm.sendOk('#b突破失败.\r\n大哥你先把武器带上.');
                }
                status = -1;
            } else {
                cm.sendOk('#b突破失败.\r\n需要 ' + 突破价格 + '充值余额 才可以突破.');
                status = -1;
            }
        }
    }
}