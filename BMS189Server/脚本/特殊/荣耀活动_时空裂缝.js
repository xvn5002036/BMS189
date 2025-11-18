var open = true;
var PQname = ['荣耀活动_时空裂缝'];
var PQLog = ['荣耀活动_时空裂缝'];
var startmap = 306020000;
var minLevel = [100];
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
    cm.dispose();
    d == 1 ? status++ : status--;
    var a = cm.getEventManager(PQname[chs]);
    if (a == null || open == false) {
        cm.askMenu('配置文件不存在,请联系管理员。');
    } else {
        var e = a.getNumberProperty('lock_' + cm.getNumberFromQuestInfo(500799, 'index'));
        if (e == 0) {
            cm.setNumberForQuestInfo(500798, 'map', cm.getMapId());
            a.startInstance(cm.getPlayer());
            a.setProperty('lock_' + cm.getNumberFromQuestInfo(500799, 'index'), 1);
        } else {
            cm.sendOkS('好像已经有人在进行尝试了，换其他频道尝试吧。');
        }
    }
}