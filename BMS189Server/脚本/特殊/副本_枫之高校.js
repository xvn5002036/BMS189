var open = true;
var PQname = ['副本_枫之高校'];
var PQLog = ['副本_枫之高校'];
var startmap = 744000000;
var minLevel = [10];
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
    d == 1 ? status++ : status--;
    if (cm.getMapId() == startmap) {
        var a = cm.getEventManager(PQname[chs]);
        if (a == null || open == false) {
            cm.sendOkS('配置文件不存在,请联系管理员。');
        } else {
            if (!cm.haveItem(5252017) && !cm.haveItem(4001834)) {
                cm.sendOkS('我没有#b#i5252017##z5252017##k了。没有允许的话还是不要乱闯了。');
            } else {
                var e = a.getNumberProperty('state');
                if (e == 0) {
                    cm.gainItem(cm.haveItem(4001834) ? 4001834 : 5252017, -1);
                    a.startInstance(cm.getPlayer());
                    a.setProperty('PQLog', PQLog[chs]);
                    cm.setPQLog(PQLog[chs]);
                    cm.playerMessage(5, '今天已经进入枫之高校 ' + cm.getPQLog(PQLog[chs]) + ' 次了。');
                } else {
                    cm.sendOkS('好像已经有队伍在进行了，换其他频道尝试吧。');
                }
            }
        }
        cm.dispose();
    } else {
        cm.warp(startmap, 0);
        cm.dispose();
    }
}