var open = true;
var PQname = ['副本_莫奈德_Act3_Boss'];
var PQLog = ['副本_莫奈德_Act3_Boss'];
var startmap = 867236000;
var minLevel = [100];
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
    if (status >= 0 && d == 0) {
        cm.dispose();
        return;
    }
    d == 1 ? status++ : status--;
    if (cm.getMapId() == startmap) {
        if (status == 0) {
            cm.dispose();
            var a = cm.getEventManager(PQname[chs]);
            if (a == null || open == false) {
                cm.askMenu('配置文件不存在,请联系管理员。');
            }
            if (cm.getParty() == null) {
                cm.PartyAutoOn();
            }
            if (!cm.isLeader()) {
                cm.sendOkS('需要队长才可以带队入场.');
            } else {
                if (!cm.isAllPartyMembersAllowedLevel(minLevel[chs], maxLevel[chs])) {
                    cm.sendNextS('需要队伍成员等级 ' + minLevel[chs] + ' 以上 ' + maxLevel[chs] + ' 以下才可以入场。');
                } else {
                    if (!cm.isAllPartyMembersAllowedPQ(PQLog[chs], maxenter[chs])) {
                        cm.sendNextS('队员#r#e "' + cm.getNotAllowedPQMemberName(PQLog[chs], maxenter[chs]) + '" #k#n次数已经达到上限了。');
                    } else {
                        if (!cm.allMembersHere()) {
                            cm.sendOkS('组队部分成员不在当前地图,需要召集他们过来。');
                        } else {
                            if (a.getNumberProperty('state') == 0) {
                                cm.addNumberForQuestInfo(64270, '5', 1);
                                a.startInstance(cm.getParty(), cm.getMap(), moblevel);
                                a.setProperty('PQLog', PQLog[chs]);
                            } else {
                                cm.sendOkS('好像已经有人在进行尝试了，换其他频道尝试吧。');
                            }
                        }
                    }
                }
            }
        } else {
            cm.dispose();
        }
    } else {
        if (status == 0) {
            cm.warp(startmap, 0);
        }
        cm.dispose();
    }
}