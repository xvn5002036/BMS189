var open = true;
var PQname = ['活动_守卫城墙'];
var PQLog = ['活动_守卫城墙'];
var startmap = 993000100;
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
                a.startInstance(cm.getPlayer());
                a.setProperty('PQLog', PQLog[chs]);
            }
            cm.dispose();
        }
    }
}