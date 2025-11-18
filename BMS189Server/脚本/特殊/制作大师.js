var q6 = '#fUI/RunnerGame.img/RunnerGameUI/UI/Point/2#';
var q1 = '#fUI/SoulUI.img/DungeonMap/icon/dungeonItem/0#';
var status = 0;
function start() {
    status = -1;
    action(1, 0, 0);
}
function action(d, b, a) {
    if (d == -1) {
        cm.dispose();
    } else {
        if (d == 0 && status == 0) {
            cm.dispose();
            cm.openNpc(0, '拍卖菜单_至尊版');
        }
        if (d == 1) {
            status++;
        } else {
            status--;
        }
        if (status == 0) {
            var c = '#e#d        ' + q6 + ' ' + cm.getServerName() + ' 工匠坊 ' + q6 + ' #n\r\n\r\n#b';
            c += '         #L22#' + q1 + '制作 <一级首饰> 套装.#l\r\n';
            c += '         #L21#' + q1 + '制作 <二级首饰> 套装.#l\r\n';
            c += '\r\n';
            cm.askMenu(c);
        } else {
            if (status == 1) {
                cm.dispose();
                cm.openNpc(1092017, a);
            }
        }
    }
}