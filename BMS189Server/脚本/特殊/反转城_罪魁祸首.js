var open = true;
var PQname = ['反转城_罪魁祸首'];
var PQLog = ['反转城_罪魁祸首'];
var startmap = 450014240;
var minLevel = [33];
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
    cm.dispose();
    if (cm.getQuestStatus(37619) == 0) {
        cm.sendOkS('先了解一下这里的情况吧');
        return;
    } else {
        if (cm.isQuestFinished(37619)) {
            cm.sendNormalTalk_Bottom('没有战斗对手。', 56, 0, false, true, 1);
            return;
        }
    }
    var a = cm.getEventManager(PQname[chs]);
    if (a == null || open == false) {
        cm.askMenu('配置文件不存在,请联系管理员。');
    } else {
        if (a.getNumberProperty('state') == 0) {
            a.startInstance(cm.getPlayer());
            a.setProperty('PQLog', PQLog[chs]);
        } else {
            cm.sendOkS('好像已经有人在进行尝试了，换其他频道尝试吧。');
        }
    }
}