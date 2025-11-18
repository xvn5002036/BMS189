var open = true;
var PQname = ['副本_废都塔_摇滚之魂'];
var PQLog = ['副本_废都塔_摇滚之魂'];
var startmap = 103041004;
var minLevel = [140];
var maxLevel = [999];
var maxenter = [1000];
var interval = [1000];
var status = -1;
var minPlayers = 1;
var maxPlayers = 6;
var moblevel = 255;
var chs = 0;
function start() {
    status = -1;
    action(1, 0, 0);
}
function action(d, c, b) {
    d == 1 ? status++ : status--;
    var a = -1;
    if (status <= a++) {
        cm.dispose();
    } else {
        if (status == a++) {
            cm.sendNormalTalk('#b(我感觉摇滚之魂的灵魂还没有完全消失。)#k', 2, 0, false, true);
        } else {
            if (status === a++) {
                cm.dispose();
                cm.warp(103041004, 0);
            }
        }
    }
}