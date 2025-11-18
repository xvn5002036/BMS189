var status = -1;
var eventOpen = true;
var eventName = [
    'Boss_时间塔_帕普拉图斯_简单',
    'Boss_时间塔_帕普拉图斯_普通',
    'Boss_时间塔_帕普拉图斯_困难'
];
var eventLog = [
    '简单帕普拉图斯',
    '帕普拉图斯',
    '进阶帕普拉图斯'
];
var minLevel = [
    125,
    160,
    190
];
var maxLevel = [
    1000,
    1000,
    1000
];
var minPlayers = 1;
var maxPlayers = 6;
var maxEnter = [
    10,
    10,
    10
];
var mobLevel = 255;
var chs;
function start() {
    var b = '';
    for (var a = 0; a < eventName.length; a++) {
        b += '\r\n#b#L' + a + '#挑战 ' + eventLog[a] + '#l#k';
    }
    b += '\r\n#k#L' + eventName.length + '##b我想领取#b#i4031179:# #t4031179##k#l';
    cm.askMenu('#e<首领 - ' + eventLog[1] + '>#n\r\n\r\n#b#h0# \n#k你现在想和队友一起挑战时间塔的最底层吗?\r\n' + b);
}
function action(e, c, b) {
    if (e == 1) {
        status++;
    } else {
        if (status == 0) {
            cm.dispose();
        }
        status--;
    }
    if (status == 0) {
        if (b == eventName.length) {
            cm.dispose();
            cm.openNpc(2041024);
            return;
        }
        var a = cm.getEventManager(eventName[b]);
        if (a == null || eventOpen == false) {
            cm.sendOk('配置文件不存在，请联系管理员。');
            cm.dispose();
            return;
        }
        chs = b;
        var f = a.getNumberProperty('state');
        var d = '#e<首领 - ' + eventLog[0] + '>#n\r\n#k\r\n#e#r';
        d += '#n#k副本状态：' + (f == 0 ? '#r空闲#k' : '#b开启#k') + '';
        d += '\r\n#e推荐人数：' + minPlayers + ' - ' + maxPlayers + '#n#e    推荐等级：' + minLevel[b] + ' - ' + maxLevel[b] + '#n';
        d += '\r\n#e#r' + eventLog[b] + '#n#k当前已进行：#r#e' + cm.getPQLog(eventLog[b]) + '#n#k 次';
        d += '    剩余挑战次数：#r#e' + (maxEnter[b] - cm.getPQLog(eventLog[b])) + '#n#k 次#n#k\r\n\r\n';
        cm.askYesNo(d + '           #b#h0# \n#k#e是否现在就进入？#n');
    } else {
        if (status == 1) {
            if (cm.getParty() == null) {
                cm.PartyAutoOn();
            }
            if (!cm.isLeader()) {
                cm.sendOk('请让你们的组队长和我对话。');
            } else {
                if (!cm.isAllPartyMembersAllowedLevel(minLevel[chs], maxLevel[chs])) {
                    cm.sendNext('组队成员等级 ' + minLevel[chs] + ' 以上 ' + maxLevel[chs] + ' 以下才可以入场。');
                } else {
                    if (!cm.isAllPartyMembersAllowedPQ(eventLog[chs], maxEnter[chs])) {
                        cm.sendNext('你的队员#r#e "' + cm.getNotAllowedPQMemberName(eventLog[chs], maxEnter[chs]) + '" #k#n次数已经达到上限了。');
                    } else {
                        if (!cm.allMembersHere()) {
                            cm.sendOk('你的组队部分成员不在当前地图,请召集他们过来后在尝试。');
                        } else {
                            var a = cm.getEventManager(eventName[chs]);
                            if (a == null || eventOpen == false) {
                                cm.askMenu('配置文件不存在，请联系管理员。');
                            } else {
                                if (a.getNumberProperty('state') == 0) {
                                    a.startInstance(cm.getParty(), cm.getMap(), mobLevel);
                                    cm.setPQLog(eventLog[chs]);
                                } else {
                                    cm.askMenu('已经有队伍在进行了,请换其他频道尝试。');
                                    cm.dispose();
                                }
                                cm.dispose();
                            }
                        }
                    }
                }
            }
            cm.dispose();
        } else {
            cm.dispose();
        }
    }
}