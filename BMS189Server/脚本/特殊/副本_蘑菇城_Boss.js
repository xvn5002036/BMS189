var open = true;
var PQname = ['副本_蘑菇城_Boss'];
var PQLog = ['副本_蘑菇城_Boss'];
var startmap = 106030600;
var minLevel = [60];
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
    if (cm.isQuestActive(30068) && cm.haveItem(4034114, 10)) {
        cm.dispose();
        cm.warp(106031100, 0);
        return;
    }
    if (!cm.isQuestFinished(30068)) {
        cm.sendOkS('这里通往大海盗的船长室，现在还不是去探查的时候。');
        cm.dispose();
        return;
    }
    if (status >= 0 && d == 0) {
        cm.dispose();
        return;
    }
    d == 1 ? status++ : status--;
    if (cm.getMapId() == startmap) {
        var a = cm.getEventManager(PQname[chs]);
        if (a == null || open == false) {
            cm.sendOkS('配置文件不存在,请联系管理员。');
        } else {
            var e = a.getNumberProperty('state');
            if (e == 0) {
                a.startInstance(cm.getPlayer());
                a.setProperty('PQLog', PQLog[chs]);
            } else {
                cm.sendOkS('好像已经有人在进行尝试了，换其他频道尝试吧。');
            }
        }
        cm.dispose();
    } else {
        cm.warp(startmap, 0);
        cm.dispose();
    }
}