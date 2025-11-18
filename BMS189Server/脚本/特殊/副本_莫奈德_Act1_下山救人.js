var open = true;
var PQname = ['副本_莫奈德_Act1_下山救人'];
var PQLog = ['副本_莫奈德_Act1_下山救人'];
var startmap = 867200110;
var minLevel = [30];
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
    if (status >= 0 && d == 0) {
        cm.dispose();
        return;
    }
    d == 1 ? status++ : status--;
    if (status == 0) {
        var a = cm.getEventManager(PQname[chs]);
        if (a == null || open == false) {
            cm.askMenu('配置文件不存在,请联系管理员。');
        } else {
            var e = a.getNumberProperty('state');
            if (e == 0) {
                a.startInstance(cm.getPlayer());
                a.setProperty('PQLog', PQLog[chs]);
                cm.dispose();
            } else {
                cm.sendOkS_Bottom('好像已经有人在进行尝试了，换其他频道尝试吧。');
            }
        }
    } else {
        cm.warp(startmap, 0);
        cm.dispose();
    }
}