var open = true;
var PQname = ['副本_妖精学院_解救1'];
var PQLog = ['副本_妖精学院_解救1'];
var startmap = 101073000;
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
    if (!cm.isQuestFinished(32122) || cm.isQuestFinished(32123)) {
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
            cm.askAcceptDecline('为救#b妖精托希#k，进行移动。\r\n\r\n#b（只有组队(1~6人)才可入场/等级：30以上）');
        } else {
            if (status == 1) {
                if (cm.getParty() == null) {
                    cm.sendOkS('我需要创建一个队伍才能进入。');
                } else {
                    if (!cm.isLeader()) {
                        cm.sendOkS('需要让我们的组队长来才能决定是否进入。');
                    } else {
                        if (!cm.allMembersHere()) {
                            cm.sendOkS('部分组队成员不在当前地图，我需要召集他们过来。');
                        } else {
                            if (!cm.isAllPartyMembersAllowedLevel(minLevel[chs], maxLevel[chs])) {
                                cm.sendOkS('糟糕，组队成员要在等级 ' + minLevel[chs] + ' 以上 ' + maxLevel[chs] + ' 以下才可以入场。');
                            } else {
                                if (!cm.isAllPartyMembersAllowedPQ(PQLog[chs], maxenter[chs])) {
                                    cm.sendOkS('糟糕，队员#r#e "' + cm.getNotAllowedPQMemberName(PQLog[chs], maxenter[chs]) + '" #k#n次数已经达到上限了。');
                                } else {
                                    var a = cm.getEventManager(PQname[chs]);
                                    if (a == null || open == false) {
                                        cm.askMenu('配置文件不存在,请联系管理员。');
                                    } else {
                                        if (a.getNumberProperty('state') == 0) {
                                            a.startInstance(cm.getParty(), cm.getMap(), 255);
                                            a.setProperty('PQLog', PQLog[chs]);
                                        } else {
                                            cm.sendOkS('好像已经有队伍在进行了，换其他频道尝试吧。');
                                        }
                                    }
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
    } else {
        if (status == 0) {
            cm.warp(startmap, 0);
        }
        cm.dispose();
    }
}