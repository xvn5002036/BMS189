var open = true;
var PQname = ['镜世界_埃德尔斯坦_矿山警备区域'];
var PQLog = ['镜世界_埃德尔斯坦_矿山警备区域'];
var startmap = 325000000;
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
    d == 1 ? status++ : status--;
    if (cm.getMapId() == startmap) {
        if (status == 0) {
            var a = cm.getEventManager(PQname[chs]);
            if (a == null || open == false) {
                cm.askMenu('配置文件不存在,请联系管理员。');
            } else {
                if (a.getNumberProperty('state') == 0) {
                    a.startInstance(cm.getPlayer());
                    a.setProperty('PQLog', PQLog[chs]);
                    cm.addNumberForQuestInfo(41820, 'lastEnterCount', 1);
                } else {
                    cm.sendOkS('好像已经有人在进行尝试了，换其他频道尝试吧。');
                }
            }
            cm.dispose();
        } else {
            cm.dispose();
        }
    } else {
        if (status == 0) {
            cm.warp(startmap, 0);
        }
        cm.dispose();
    }
}