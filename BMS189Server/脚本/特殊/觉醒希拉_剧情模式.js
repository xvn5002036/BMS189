var a1 = '#fUI/UIPVP/MiniMapIcon/star#';
var a2 = '#fUI/StarCityUI.img/GradeInfo/icon_ss/12#';
var a3 = '#fUI/UIWindow3.img/MirrorDungeonIntrude/btIntrude/normal/0#';
var 任务概述 = '#fUI/UIWindow.img/Quest/summary#';
var 奖励 = '#fUI/UIWindow.img/Quest/reward#';
var 无条件获得 = '#fUI/UIWindow.img/Quest/basic#';
var 几率获得 = '#fUI/UIWindow.img/Quest/prob#';
var 活跃 = '#fUI/CashShop.img/CashItem_label/2#';
var 积分 = '#fUI/CashShop.img/CashItem_label/3#';
var 小黄点 = '#fUI/UIPVP/MiniMapIcon/yellow#';
var status = -1;
var chs;
var open = true;
var BossName = '觉醒希拉';
var PQname = ['觉醒希拉_剧情模式'];
var PQLog = ['申请进入 <觉醒希拉（剧情）>。'];
var startmap = 450011990;
var minLevel = [
    200,
    200,
    200
];
var maxLevel = [
    999,
    999,
    999
];
var maxenter = [
    112,
    112,
    112
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
var minLimitBreak = [
    0,
    55999999,
    55999999
];
function start() {
    if (cm.getMapId() == startmap) {
        if (cm.getParty() == null) {
            cm.PartyAutoOn();
        }
        var b = '';
        for (var a = 0; a < PQname.length; a++) {
            b += '\r\n#L' + a + '# ' + PQLog[a] + '#l';
        }
        cm.askMenu('#e<首领怪：' + BossName + '>#n\r\n如果不能阻拦觉醒希拉，将会发生很可怕的事情。\r\n#b ' + b);
    } else {
        cm.askYesNo('#e<首领怪：' + BossName + '>#n\r\n\r\n确定要结束挑战，离开这里吗？\r\n');
    }
}
function action(g, i, k) {
    if (status >= 0 && g == 0) {
        cm.dispose();
        return;
    }
    g == 1 ? status++ : status--;
    if (cm.getMapId() == startmap) {
        if (status == 0) {
            var b = cm.getEventManager(PQname[k]);
            if (b == null || open == false) {
                cm.sendOk(open ? '配置文件不存在,请联系管理员。' : '管理员关闭了目前的副本.有问题可以联系管理员');
                cm.dispose();
                return;
            }
            chs = k;
            var a = b.getNumberProperty('state');
            var n = '#fn微软雅黑#';
            n += ' #e<首领 - ' + PQLog[k] + '>#n\r\n';
            if (channel[k] == 0) {
                n += '\r\n  #r目前所有频道可以进入.#k\r\n';
            } else {
                n += '\r\n  #r需要在#e' + channel[k] + '#n频道进行.#k\r\n';
            }
            n += '\r\n ' + a1 + '状态：#n' + (a == 0 ? '#g空#k' : '#r有#k') + '        ' + a1 + '资格：#g' + (maxenter[k] - cm.getPQLog(PQLog[k])) + '#k/#d' + maxenter[k] + '#k';
            n += '\r\n ' + a1 + '等级：#d' + minLevel[k] + '#k      ' + a1 + '人数：#d' + minPlayers[k] + ' - ' + maxPlayers[k] + '#k\r\n\r\n';
            cm.askYesNo(n + '           #b#h0# #k#e是否现在就进入？#n');
        } else {
            if (status == 1) {
                if (cm.getLimitBreak() < minLimitBreak[chs]) {
                    cm.sendOk('你的武器破功' + cm.getLimitBreak() + '不够' + minLimitBreak[chs] + '，不允许进入！');
                    cm.dispose();
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
                                        var l = cm.getMapId();
                                        var f = true;
                                        var j = 0;
                                        var d = 0;
                                        var e = c.iterator();
                                        while (e.hasNext()) {
                                            var m = e.next();
                                            if (m.getMapId() == l) {
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
                                                    cm.dispose();
                                                    b.startInstance(cm.getParty(), cm.getMap());
                                                    cm.gainMembersPQ(PQLog[chs], 1);
                                                    var h = cm.getEventInstance();
                                                    cm.worldSpouseMessage(21, '『首领挑战』 : ' + cm.getPlayer().getName() + ' 的敢死队队伍，气势汹汹的挑战 ' + PQLog[chs] + ' 去了。');
                                                } else {
                                                    cm.sendOk('已经有队伍在进行了,请换其他频道尝试。');
                                                    cm.dispose();
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