var open = true;
var PQname = ['副本_列娜海峡_迷路的诺拉'];
var PQLog = ['副本_列娜海峡_迷路的诺拉'];
var startmap = 141060000;
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
    if (!cm.isQuestFinished(32169)) {
        cm.sendOkS('这地方看上去有点奇怪，我最好还是先了解一下周围的情况。');
        cm.dispose();
        return;
    }
    if (status >= 0 && d == 0) {
        cm.dispose();
        return;
    }
    d == 1 ? status++ : status--;
    if (cm.getMapId() == startmap) {
        if (status == 0) {
            var a = cm.getEventManager(PQname[b]);
            if (a == null || open == false) {
                cm.sendOk('配置文件不存在,请联系管理员。');
                cm.dispose();
                return;
            }
            cm.askYesNo('航海士，这里好像有点奇怪。要先停下来吗？', 4, 1510006);
        } else {
            if (status == 1) {
                var a = cm.getEventManager(PQname[chs]);
                if (a == null || open == false) {
                    cm.askMenu('配置文件不存在,请联系管理员。');
                } else {
                    if (a.getNumberProperty('state') == 0) {
                        cm.dispelBuff(80001346);
                        a.startInstance(cm.getPlayer());
                        a.setProperty('PQLog', PQLog[chs]);
                    } else {
                        cm.sendOk('好像已经有人在进行尝试了，换其他频道尝试吧。');
                    }
                }
                cm.dispose();
            } else {
                cm.dispose();
            }
        }
    } else {
        if (status == 0) {
            cm.warp(startmap, 0);
        }
        cm.dispose();
    }
}