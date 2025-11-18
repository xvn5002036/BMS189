var status = 0;
var ttt2 = '#fUI/UIWindow/Quest/icon6/7#';
var tz2 = '#fEffect/CharacterEff/1082565/0/0#';
var tz3 = '#fEffect/CharacterEff/1082588/0/0#';
var tz4 = '#fEffect/CharacterEff/1082588/3/0#';
function start() {
    status = -1;
    action(1, 0, 0);
}
function action(e, c, b) {
    if (status == 0 && e == 0) {
        cm.dispose();
        return;
    }
    if (e == 1) {
        status++;
    } else {
        status--;
    }
    if (cm.getMapId() == 180000001) {
        cm.sendOk('很遗憾，您因为违反用户守则被禁止游戏活动，如有异议请联系管理员.');
        cm.dispose();
    } else {
        if (status == 0) {
            var d = '';
            var f = '\r\n';
            var a = '#b#fn微软雅黑##fs14#' + tz3;
            d += f;
            d += '#L1#' + a + '我想挑战小游戏_控制之神#l' + f + f;
            d += '#L2#' + a + '进入大冒险岛村庄#l' + f + f;
            d += '#L3#' + a + '不玩了,我想回去#l' + f + f;
            d += '';
            cm.askMenu(d);
        } else {
            if (status == 1) {
                switch (b) {
                case 1:
                    cm.dispose();
                    cm.openNpc(9070200);
                    break;
                case 2:
                    cm.dispose();
                    cm.openNpc(9900004, '主题副本任务列表');
                    break;
                case 3:
                    cm.dispose();
                    cm.warp(910000000);
                    break;
                }
            }
        }
    }
}