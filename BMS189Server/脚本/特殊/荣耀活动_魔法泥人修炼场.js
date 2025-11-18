var open = true;
var PQname = ['荣耀活动_魔法泥人修炼场'];
var PQLog = ['荣耀活动_魔法泥人修炼场'];
var startmap = 993111301;
var minLevel = [10];
var maxLevel = [999];
var maxenter = [10000];
var interval = [10000];
var status = -1;
var minPlayers = 1;
var maxPlayers = 6;
var moblevel = 255;
var chs = 0;
function start() {
    status = -1;
    action(1, 0, 0);
}
function action(e, d, c) {
    if (e == 1) {
        status++;
    } else {
        status--;
    }
    var b = -1;
    if (status <= b++) {
        cm.dispose();
    } else {
        if (status === b++) {
            var a = cm.getEventManager(PQname[chs]);
            if (a == null || open == false) {
                cm.askMenu('配置文件不存在,请联系管理员。');
            } else {
                var f = a.getNumberProperty('state');
                if (f == 0) {
                    var f = a.getNumberProperty('state');
                    cm.setNumberForQuestInfo(64685, 'point', 0);
                    a.startInstance(cm.getPlayer());
                    a.setProperty('PQLog', PQLog[chs]);
                } else {
                    cm.sendOk('看来已经有人在里面了，去其他频道看看吧。');
                }
            }
            cm.dispose();
        } else {
            cm.dispose();
        }
    }
}