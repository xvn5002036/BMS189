var status = -1;
var p;
function action(d, c, b) {
    if (d == 1) {
        status++;
    } else {
        status--;
    }
    var a = -1;
    if (status <= a++) {
        cm.dispose();
    } else {
        if (status === a++) {
            cm.getRecalcLocalStats();
            cm.enableActions();
            cm.playerMessage(1, '由于剧情问题,请小退再进游戏,要不然出现在当前地图无法更换装备.');
            cm.dispose();
        } else {
            cm.dispose();
        }
    }
}
function start() {
    status = -1;
    action(1, 0, 0);
}