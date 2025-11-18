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
var BossName = '黑魔法师';
var PQname = ['黑魔法师_剧情'];
var PQLog = [' 申请进入 <黑魔法师（剧情）>。'];
var startmap = 450012500;
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
        cm.PartyAutoOn();
        var b = '';
        for (var a = 0; a < PQname.length; a++) {
            b += '\r\n#L' + a + '# ' + PQLog[a] + '#l';
        }
        cm.askMenu_Bottom('#e<首领怪：' + BossName + '>#n\r\n为了与黑魔法师对峙，要前往#b黑暗神殿#k吗？\r\n#r（如果出现黑屏，请在1366x768分辨率下进行）#k#b ' + b, 56, 0);
    } else {
        cm.askYesNo('#e<首领怪：' + BossName + '>#n\r\n\r\n确定要结束挑战，离开这里吗？\r\n');
    }
}
function action(h, j, l) {
    if (status >= 0 && h == 0) {
        cm.dispose();
        return;
    }
    h == 1 ? status++ : status--;
    if (cm.getMapId() == startmap) {
        if (status == 0) {
            var b = cm.getEventManager(PQname[l]);
            chs = l;
            var a = b.getNumberProperty('state');
            if (b == null || open == false) {
                cm.sendOk(open ? '配置文件不存在,请联系管理员。' : '管理员关闭了目前的副本.有问题可以联系管理员');
                cm.dispose();
                return;
            }
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
                                    var m = cm.getMapId();
                                    var g = true;
                                    var k = 0;
                                    var e = 0;
                                    var f = c.iterator();
                                    while (f.hasNext()) {
                                        var n = f.next();
                                        if (n.getMapId() == m) {
                                            e += 1;
                                        }
                                    }
                                    if (c.size() > maxPlayers[chs] || e < minPlayers[chs]) {
                                        g = false;
                                    }
                                    if (g) {
                                        var b = cm.getEventManager(PQname[chs]);
                                        if (b == null || open == false) {
                                            cm.askMenu(open ? '配置文件不存在,请联系管理员。' : '管理员关闭了目前的副本.有问题可以联系管理员');
                                        } else {
                                            var a = b.getNumberProperty('state');
                                            if (a == 0) {
                                                cm.dispose();
                                                b.startInstance(cm.getParty(), cm.getMap());
                                                cm.gainMembersPQ(PQLog[chs], 1);
                                                var d = PQLog[chs] + 1;
                                                cm.setPQLog(d, 1);
                                                var i = cm.getEventInstance();
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
    } else {
        if (status == 0) {
            cm.warp(startmap, 0);
        }
        cm.dispose();
    }
}