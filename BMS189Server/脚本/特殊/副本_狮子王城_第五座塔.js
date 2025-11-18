var open = true;
var PQname = ['副本_狮子王城_第五座塔'];
var PQLog = ['副本_狮子王城_第五座塔'];
var startmap = 211061000;
var minLevel = [115];
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
    if (cm.getQuestStatus(3142) == 0) {
        cm.sendOkS('这里不知道通往什么地方。还是先找鲁丹了解一下情况吧。\r\n\r\n（需要执行#b狮子王的看门人#k任务才能进入。）');
        cm.dispose();
        return;
    }
    d == 1 ? status++ : status--;
    if (cm.getMapId() == startmap) {
        var a = cm.getEventManager(PQname[b]);
        if (a == null || open == false) {
            cm.sendOkS('配置文件不存在,请联系管理员。');
        } else {
            var a = cm.getEventManager(PQname[chs]);
            if (a == null || open == false) {
                cm.askMenu('配置文件不存在,请联系管理员。');
            } else {
                if (a.getNumberProperty('state') == 0) {
                    a.startInstance(cm.getPlayer());
                    a.setProperty('PQLog', PQLog[chs]);
                } else {
                    cm.sendOkS('好像已经有人在进行挑战了，换其他频道尝试吧。');
                }
            }
        }
        cm.dispose();
    } else {
        cm.warp(startmap, 0);
        cm.dispose();
    }
}