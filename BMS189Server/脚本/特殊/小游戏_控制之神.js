var open = true;
var PQname = ['小游戏_控制之神'];
var PQLog = ['小游戏_控制之神'];
var startmap = 993001000;
var minLevel = [0];
var maxLevel = [999];
var maxenter = [1000];
var interval = [1000];
var status = -1;
var minPlayers = 1;
var maxPlayers = 1;
var moblevel = 255;
var chs = 0;
var level = -1;
function start() {
    status = -1;
    action(1, 0, 0);
}
function action(e, c, b) {
    status++;
    if (cm.getMapId() != startmap) {
        cm.warp(startmap, 0);
        cm.dispose();
        return;
    }
    cm.setNumberForQuestInfo(18838, 'mode', 1);
    var f = new Date().getTime() - cm.getNumberFromQuestInfo(18838, 'stageT');
    if (f > 7 * 24 * 3600 * 1000) {
        cm.playerMessage(5, '一星期过去了，又可以继续尽情挑战控制之神了。');
        cm.setNumberForQuestInfo(18838, 'count', 99);
        cm.setNumberForQuestInfo(18838, 'stageT', new Date().getTime());
    }
    var d = cm.getNumberFromQuestInfo(18838, 'count');
    if (d <= 0) {
        cm.sendOk_Bottom('啊呀，这星期已经没有挑战次数了呀？下周再试试吧~', 9070200);
        cm.dispose();
        return;
    }
    if (level < 0) {
        level = cm.getNpc();
    }
    var a = -1;
    if (status <= a++) {
        cm.dispose();
    } else {
        if (status === a++) {
            if (cm.getNumberFromQuestInfo(18838 + level, 'isClear') == 1) {
                cm.askYesNoNoESC_Bottom('该关卡已通关，\r\n你要用中了陷阱之时剩余挑战次数会减少1次、计时器会重置的\r\n#b<挑战模式>#k入场吗？', 9070200);
            } else {
                startEvent();
            }
        } else {
            if (status === a++) {
                if (e == 1) {
                    cm.setNumberForQuestInfo(18838, 'mode', 2);
                }
                startEvent();
            } else {
                cm.dispose();
            }
        }
    }
}
function startEvent() {
    var b = cm.getEventManager(PQname[chs]);
    if (b == null || open == false) {
        cm.sendOk_Bottom('配置文件不存在,请联系管理员。', 9070200);
    } else {
        var a = 993001000 + level * 10;
        if (b.getPlayersInMap(a).size() == 0) {
            cm.setNumberForQuestInfo(18837, 'level', level);
            cm.addNumberForQuestInfo(18838, 'count', -1);
            b.startInstance(cm.getPlayer());
            b.setProperty('PQLog', PQLog[chs]);
        } else {
            cm.sendOk_Bottom('这一关已经有人在尝试挑战了，换其他频道尝试吧。', 9070200);
        }
    }
    cm.dispose();
}