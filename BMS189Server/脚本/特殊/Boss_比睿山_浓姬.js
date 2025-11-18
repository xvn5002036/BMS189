var open = true;
var PQname = ['Boss_比睿山_浓姬'];
var PQLog = ['浓姬'];
var startmap = 811000999;
var minLevel = [
    100,
    255
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
var maxPlayers = 3;
var moblevel = 255;
var chs = 0;
function start() {
    action(1, 0, 0);
}
function action(e, d, c) {
    if (status == 0 && e == 0) {
        cm.dispose();
        return;
    }
    e == 1 ? status++ : status--;
    var b = -1;
    if (status <= b++) {
        cm.dispose();
    } else {
        if (status === b++) {
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