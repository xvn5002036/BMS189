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
            cm.setNumberForQuestCustomData(7901, 2);
            var a = new Date().getDay();
            cm.askMenu('#e<今天是#b' + desc[a] + '#k>\r\n<今日完成次数 #b' + cm.getPQLog(PQLog[chs]) + ' / ' + maxenter[chs] + '次#k>\r\n\r\n#L8#变成废墟的城市(Lv.160~169)#l\r\n#L9#死亡之林(Lv.170~179)#l\r\n#L10#监视之塔(Lv.175~184)#l\r\n#L11#龙之巢穴(Lv.180~189)#l\r\n#L12#忘却神殿(Lv.185~194)#l\r\n#L13#骑士团要塞(Lv.190~199)#l\r\n#L14#冤魂峡谷(Lv.200~209)#l\r\n#L15#消亡旅途(Lv.200～209）#l#k', 0, 9071004);
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