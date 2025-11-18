var status = 0;
var eventType = '副本';
var eventName = '起源之塔';
var difficulty = ['普通'];
var minLevel = [
    140,
    180
];
var maxLevel = [
    999,
    999
];
var minPlayers = 1;
var maxPlayers = 1;
var moblevel = 300;
var open = true;
var eventname = ['副本_起源之塔'];
var maxenter = [
    200,
    200
];
var mapName = '起源之塔';
var timeBonus = [
    2 * 60 * 1000,
    4 * 60 * 1000,
    8 * 60 * 1000,
    13 * 60 * 1000,
    16 * 60 * 1000,
    2 * 60 * 1000,
    4 * 60 * 1000,
    6 * 60 * 1000,
    8 * 60 * 1000,
    10 * 60 * 1000
];
function start() {
    status = -1;
    action(1, 0, 0);
}
function action(f, g, j) {
    if (status >= 1 && f == 0) {
        cm.dispose();
        return;
    }
    if (f == 1) {
        status++;
    } else {
        status--;
    }
    if (status == 0) {
        var d = '#b#e[' + mapName + ']#n\r\n\r\n';
        for (var e = 0; e < difficulty.length; e++) {
            var c = cm.getEventManager(eventname[e]);
            var a = c == null ? null : c.getProperty('state');
            var b = a == 0 ? '#r空闲#k' : '#b占用#k';
            d += '#k今天已探索#b' + difficulty[e] + '模式 #e' + cm.getPQLog(difficulty[e] + eventName) + ' #n/ ' + maxenter[e] + ' 层		状态：' + b + '\r\n';
        }
        for (var e = 0; e < difficulty.length; e++) {
            d += '#L' + e + '#挑战' + difficulty[e] + '模式的' + eventName + '。（' + minLevel[e] + '级以上）#l\r\n';
        }
        cm.askMenu(d);
    } else {
        if (status == 1) {
            var c = cm.getEventManager(eventname[j]);
            if (cm.getPQLog(difficulty[j] + eventName) >= maxenter[j]) {
                cm.sendOk('你今天的挑战层数已经用完了，请明天在来吧！');
                cm.dispose();
            } else {
                if (c == null || open == false) {
                    cm.askMenu('配置文件不存在,请联系管理员。');
                    cm.dispose();
                } else {
                    cm.dispose();
                    var a = c.getNumberProperty('state');
                    if (a == 0) {
                        cm.setPQLog(difficulty[j] + eventName);
                        for (var e = 1; e <= 5; e++) {
                            var h = cm.getNumberFromQuestInfo(42000, 'slot' + e, -1);
                            if (h != -1) {
                                cm.setNumberForQuestInfo(42000, 'slot' + e, 0);
                            }
                        }
                        c.setProperty('time', cm.getNumberFromQuestInfo(42011, 'time', 600000));
                        c.startInstance(cm.getPlayer());
                    } else {
                        cm.askMenuS('看来已经有人在挑战' + eventName + '，去其他频道看看吧。');
                    }
                }
            }
        } else {
            if (status == 2) {
                cm.dispose();
            } else {
                if (f == 0) {
                    cm.dispose();
                }
            }
        }
    }
}