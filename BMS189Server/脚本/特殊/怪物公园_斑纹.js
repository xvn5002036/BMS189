var open = true;
var PQname = ['怪物公园_重制版'];
var PQLog = ['怪物公园_重制版'];
var startmap = 951000000;
var minLevel = [
    30,
    255
];
var maxLevel = [
    999,
    999
];
var maxenter = [
    7,
    10
];
var interval = [
    1,
    10
];
var minPlayers = 1;
var maxPlayers = 6;
var moblevel = 255;
var chs = 0;
var status = -1;
var selectionLog = [];
var desc = [
    '成长星期日',
    '创造星期一',
    '强化星期二',
    '倾向星期三',
    '名誉星期四',
    '黄金星期五',
    '庆祝星期六'
];
function start() {
    action(1, 0, 0);
}
function action(g, f, e) {
    if (status == 0 && g == 0) {
        cm.dispose();
        return;
    }
    g == 1 ? status++ : status--;
    selectionLog[status] = e;
    var d = -1;
    if (status <= d++) {
        cm.dispose();
    } else {
        if (status === d++) {
            cm.setNumberForQuestCustomData(7901, 0);
            var a = new Date().getDay();
            cm.askMenu('#e<今天是#b' + desc[a] + '#k>\r\n<今日完成次数 #b' + cm.getPQLog(PQLog[chs]) + ' / ' + maxenter[chs] + '次#k>\r\n\r\n#L8#石人寺院(Lv.21~30)#l\r\n#L9#废都广场(Lv.45~54)#l\r\n#L12#黑暗神殿(Lv.61~70)#l\r\n#L10#雪山地带(Lv.71~80)#l\r\n#L11#寂静之海(Lv.76~85)#l\r\n#L13#炽热沙漠(Lv.95~104)#l', 0, 9071004);
        } else {
            cm.setNumberForQuestCustomData(7902, e - 8);
            cm.dispose();
            if (cm.getPQLog(PQLog[chs]) >= maxenter[chs]) {
                cm.sendNext('你的今日完成次数已经达到上限了。');
            } else {
                var c = cm.getEventManager(PQname[chs]);
                if (c == null || open == false) {
                    cm.askMenu('配置文件不存在,请联系管理员。');
                } else {
                    var f = cm.getNumberFromQuestCustomData(7901);
                    var b = cm.getNumberFromQuestCustomData(7902);
                    var h = c.getNumberProperty('state_' + f + '_' + b);
                    if (h == 0) {
                        c.setProperty('state_' + f + '_' + b, 1);
                        c.startInstance(cm.getPlayer());
                        cm.gainMembersPQ(PQLog[chs], 1);
                    } else {
                        cm.sendOk('已经有人在挑战了，请换其他频道尝试。');
                    }
                }
            }
        }
    }
}