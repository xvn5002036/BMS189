var open = true;
var PQname = [
    'Boss_埃斯佩拉_威尔_普通',
    'Boss_埃斯佩拉_威尔_困难'
];
var PQLog = [
    '威尔',
    '进阶威尔'
];
var startmap = 450007240;
var minLevel = [
    200,
    235
];
var maxLevel = [
    999,
    999
];
var maxenter = [
    10,
    10
];
var interval = [
    10,
    10
];
var status = -1;
var minPlayers = 1;
var maxPlayers = 6;
var moblevel = 255;
var chs;
function start() {
    if (cm.getMapId() == startmap) {
        if (cm.getParty() == null) {
            cm.PartyAutoOn();
        }
        var b = '';
        for (var a = 0; a < PQname.length; a++) {
            b += '\r\n#b#L' + a + '#挑战 ' + PQLog[a] + '#l#k';
        }
        cm.askMenu('#e<首领 - ' + PQLog[0] + '>#n\r\n#b#h0# \n#k你想和队员们一起努力，完成任务吗？这里面有很多如果不同心协力就无法解决的障碍……。?' + b);
    } else {
        cm.askYesNo('#e<首领 - ' + PQLog[0] + '>#n\r\n\r\n确定要结束挑战，离开这里吗？\r\n');
    }
}
function action(e, c, b) {
    if (status >= 0 && e == 0) {
        cm.dispose();
        return;
    }
    e == 1 ? status++ : status--;
    if (cm.getMapId() == startmap) {
        if (status < 0) {
            cm.dispose();
        } else {
            if (status == 0) {
                var a = cm.getEventManager(PQname[b]);
                if (a == null || open == false) {
                    cm.sendOk(open ? '配置文件不存在,请联系管理员。' : '目前该副本不开放，有疑问请联系管理员');
                    cm.dispose();
                    return;
                }
                chs = b;
                var f = a.getNumberProperty('state');
                var d = '#e<首领 - ' + PQLog[b] + '>#n\r\n#k\r\n#e#r';
                d += '#n#k#e副本状态：#n' + (f == 0 ? '#e#r空闲#n#k' : '#e#r开启#n#k') + '';
                d += '\r\n#e推荐人数：' + minPlayers + ' - ' + maxPlayers + '#n#e    推荐等级：' + minLevel[b] + ' - ' + maxLevel[b] + '#n';
                d += '\r\n#e剩余挑战次数：#r#e' + (maxenter[b] - cm.getPQLog(PQLog[b], interval[chs])) + '#k 次#k (重置间隔：' + interval[chs] + '天)#n\r\n\r\n';
                cm.askYesNo(d + '           #b#h0# \n#k#e是否现在就进入？#n');
            } else {
                if (status == 1) {
                    if (cm.getParty() == null) {
                        cm.PartyAutoOn();
                    }
                    if (!cm.isLeader()) {
                        cm.sendOk('嗯，你已经有自己的队伍。要执行这个任务，请让你们的队长与我对话，才可以申请入场.');
                        cm.dispose();
                    } else {
                        if (!cm.isAllPartyMembersAllowedLevel(minLevel[chs], maxLevel[chs])) {
                            cm.sendNext('请先开设组队,或者请查看队伍成员等级 ' + minLevel[chs] + ' 以上 ' + maxLevel[chs] + ' 以下才可以入场。');
                            cm.dispose();
                        } else {
                            if (!cm.isAllPartyMembersAllowedPQ(PQLog[chs], maxenter[chs])) {
                                cm.sendNext('你的队员#r#e "' + cm.getNotAllowedPQMemberName(PQLog[chs], maxenter[chs]) + '" #k#n次数已经达到上限了。');
                                cm.dispose();
                            } else {
                                if (!cm.allMembersHere()) {
                                    cm.sendOkN('你的组队部分成员不在当前地图,请召集他们过来后在尝试。');
                                    cm.dispose();
                                } else {
                                    var a = cm.getEventManager(PQname[chs]);
                                    if (a == null || open == false) {
                                        cm.askMenu('配置文件不存在,请联系管理员。');
                                        cm.dispose();
                                    } else {
                                        if (a.getNumberProperty('state') == 0) {
                                            cm.dispose();
                                            a.startInstance(cm.getParty(), cm.getMap(), moblevel);
                                            cm.gainMembersPQ(PQLog[chs], 1);
                                        } else {
                                            cm.sendOk('已经有队伍在进行了,请换其他频道尝试。');
                                            cm.dispose();
                                        }
                                    }
                                }
                            }
                        }
                    }
                } else {
                    cm.dispose();
                }
            }
        }
    } else {
        if (status == 0) {
            cm.warp(startmap, 0);
        }
        cm.dispose();
    }
}