var status = -1;
var chs;
var 小黄点 = '#fUI/UIPVP/MiniMapIcon/yellow#';
var open = true;
var 副本名称 = '闹钟王';
var PQname = [
    'Boss_玩具城_闹钟王_简单',
    'Boss_玩具城_闹钟王_普通',
    'Boss_玩具城_闹钟王_困难'
];
var PQLog = [
    '闹钟王[简单]',
    '闹钟王[普通]',
    '闹钟王[困难]'
];
var startmap = 220080000;
var minLevel = [
    180,
    180,
    180
];
var maxLevel = [
    999,
    999,
    999
];
var maxenter = [
    40,
    40,
    40
];
var minPlayers = [
    1,
    1,
    1
];
var maxPlayers = [
    6,
    6,
    6
];
var moblevel = 999;
var channel = [
    0,
    0,
    0
];
function start() {
    if (cm.getParty() == null) {
        cm.PartyAutoOn();
    }
    if (cm.getMapId() == startmap) {
        var b = '';
        for (var a = 0; a < PQname.length; a++) {
            b += '\r\n#b#L' + a + '#' + 小黄点 + '挑战 ' + PQLog[a] + '#l#k';
        }
        cm.askMenu('#e<首领：帕普拉图斯>#n\r\n爱闯祸的帕普拉图斯在不断地破坏次元，必须阻止他。你愿意帮我吗？\r\n\r\n' + b);
    } else {
        cm.askYesNo('#e<首领：帕普拉图斯>#n\r\n\r\n确定要结束挑战，离开这里吗？\r\n');
    }
}
function action(g, h, j) {
    if (status >= 0 && g == 0) {
        cm.dispose();
        return;
    }
    g == 1 ? status++ : status--;
    if (cm.getMapId() == startmap) {
        if (status == 0) {
            var b = cm.getEventManager(PQname[j]);
            if (b == null || open == false) {
                cm.sendOk(open ? '配置文件不存在,请联系管理员。' : '管理员关闭了目前的副本.有问题可以联系管理员');
                cm.dispose();
                return;
            }
            chs = j;
            var a = b.getNumberProperty('state');
            var m = '#e<首领 - ' + PQLog[j] + '>#n\r\n#k\r\n#e#r';
            m += '#n#k#e地图状态：#n' + (a == 0 ? '#e#g空闲#n#k' : '#e#r挑战中#n#k') + '';
            m += '\r\n#e要求人数：#r' + minPlayers[j] + ' - ' + maxPlayers[j] + '#k#n#e   要求等级：#r' + minLevel[j] + ' - ' + maxLevel[j] + '#k#n';
            m += '\r\n当前已进行：#r#e' + cm.getPQLog(PQLog[j]) + '#n#k 次';
            m += '    剩余挑战次数：#r#e' + (maxenter[j] - cm.getPQLog(PQLog[j])) + '#n#k 次#n#k\r\n\r\n';
            cm.askYesNo(m + '           #b#h0# \n#k#e是否现在就进入？#n');
        } else {
            if (status == 1) {
                if (cm.getParty() == null) {
                    cm.askYesNo('你想和队员们一起努力，完成任务吗？这里面有很多如果不同心协力就无法解决的障碍……。那么要执行这个任务必须先创建一个队伍！.');
                } else {
                    if (!cm.isLeader()) {
                        cm.sendOk('嗯，你已经有自己的队伍。要执行这个任务，请让你们的队长与我对话，才可以申请入场.');
                        cm.dispose();
                        return;
                    } else {
                        if (!cm.isAllPartyMembersAllowedLevel(minLevel[chs], maxLevel[chs])) {
                            cm.sendNext('组队成员等级 ' + minLevel[chs] + ' 以上 ' + maxLevel[chs] + ' 以下才可以入场。\r\n\r\n\r\n');
                            cm.dispose();
                        } else {
                            if (channel[chs] != 0 && cm.getPlayer().getClient().getChannel() != channel[chs]) {
                                cm.sendNext('此副本需要在 ' + channel[chs] + '频道进入.');
                                cm.dispose();
                            } else {
                                if (!cm.isAllPartyMembersAllowedPQ(PQLog[chs], maxenter[chs])) {
                                    cm.sendNext('你的队员#r#e "' + cm.getNotAllowedPQMemberName(PQLog[chs], maxenter[chs]) + '" #k#n次数已经达到上限了。');
                                    cm.dispose();
                                } else {
                                    if (!cm.allMembersHere()) {
                                        cm.sendOk('你的组队部分成员不在当前地图,请召集他们过来后在尝试。');
                                        cm.dispose();
                                    } else {
                                        var c = cm.getParty().getMembers();
                                        var k = cm.getMapId();
                                        var f = true;
                                        var i = 0;
                                        var d = 0;
                                        var e = c.iterator();
                                        while (e.hasNext()) {
                                            var l = e.next();
                                            if (l.getMapId() == k) {
                                                d += 1;
                                            }
                                        }
                                        if (c.size() > maxPlayers[chs] || d < minPlayers[chs]) {
                                            f = false;
                                        }
                                        if (f) {
                                            var b = cm.getEventManager(PQname[chs]);
                                            if (b == null || open == false) {
                                                cm.askMenu(open ? '配置文件不存在,请联系管理员。' : '管理员关闭了目前的副本.有问题可以联系管理员');
                                            } else {
                                                var a = b.getNumberProperty('state');
                                                if (a == 0) {
                                                    b.startInstance(cm.getParty(), cm.getMap(), 255);
                                                    cm.gainMembersPQ(PQLog[chs], 1);
                                                    cm.playerMessage(5, '未知的裂痕打开，被吸进里面。');
                                                    cm.worldSpouseMessage(21, '『首领挑战』 : ' + cm.getPlayer().getName() + ' 的敢死队队伍，气势汹汹的挑战 ' + PQLog[chs] + ' 去了。');
                                                } else {
                                                    cm.sendOk('已经有队伍在进行了,请换其他频道尝试。');
                                                }
                                                cm.dispose();
                                            }
                                        } else {
                                            cm.sendOk('组队成员 ' + minPlayers[chs] + ' 人以上 ' + maxPlayers[chs] + '人 以下才可以入场。');
                                            cm.dispose();
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            } else {
                if (status == 2) {
                    cm.PartyAutoOn();
                    cm.dispose();
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