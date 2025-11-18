var open = true;
var PQname = [
    'Boss_地球防御本部_卡雄_普通',
    'Boss_地球防御本部_卡雄_困难'
];
var PQLog = [
    '卡雄',
    '进阶卡雄'
];
var startmap = 221030900;
var minLevel = [
    115,
    115
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
    action(1, 0, 0);
}
function action(d, c, b) {
    if (status >= 0 && d == 0) {
        cm.dispose();
        return;
    }
    d == 1 ? status++ : status--;
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
                if (cm.isQuestActive(3863)) {
                    chs = 0;
                } else {
                    chs = b;
                }
                var e = a.getNumberProperty('state');
                cm.askMenu('#e<卡雄普通模式>#n\r\n\r\n居然胆敢跑来这里！！你是想尝尝新改造的战斗型卡雄的厉害嘛！\r\n#r（卡雄（普通）#e每天可进入' + maxenter[b] + '次#n，入场记录在#e每天零点#n初始化。）\r\n#b\r\n#L0#申请进入卡雄。(队员同时前往。)#l', 0, 2052044);
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
                                            cm.addNumberForQuestCustomData(3591, 1);
                                            cm.forceStartQuest(3590, cm.getNowTimeString(3));
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