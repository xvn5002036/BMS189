var chs;
var a1 = '#fUI/UIPVP/MiniMapIcon/star#';
var status = -1;
var selectionLog = [];
var BossName = '组队任务_第一次同行';
var 事件脚本 = ['组队任务_第一次同行'];
var PQLog = ['组队任务_第一次同行'];
var 开始地图 = 910340700;
var 次数限制 = [99];
var 频道 = [0];
var 破攻要求 = [0];
var 最低等级 = [50];
var 最高等级 = [999];
var 最小人数 = [1];
var 最大人数 = [6];
function start() {
    action(1, 0, 0);
}
function action(c, b, a) {
    if (cm.getzhizunvip() != 2) {
        cm.dispose();
        cm.playerMessage(-1, '该菜单是至尊版专享。');
        return;
    }
    if (status == 0 && c == 0) {
        cm.dispose();
        return;
    }
    c == 1 ? status++ : status--;
    selectionLog[status] = a;
    if (cm.getMapId() == 开始地图) {
        action开始地图(c, b, a);
    } else {
        if (cm.getMapId() != 开始地图) {
            action其他地图(c, b, a);
        } else {
            cm.dispose();
        }
    }
}
function action开始地图(e, g, h) {
    var d = -1;
    if (status <= d++) {
        cm.dispose();
    } else {
        if (status === d++) {
            var l = '#e<' + BossName + '>#n\r\n\r\n';
            l += '从这里往前到处都是很危险的东西，你不能继续往前走了。你想和队员们一起齐心协力，完成任务吗？如果想挑战的话，就通过#b所属组队的队长#k来和我说话。\r\n#b';
            l += '#L0#我想参加组队任务。#l\r\n';
            l += '#L10#我想寻找组队。#l\r\n';
            l += '#L11#我想听听说明。#l\r\n';
            l += '#L12#我想知道今天的剩余挑战次数。#l';
            cm.askMenu(l);
        } else {
            if (status === d++) {
                switch (h) {
                case 10:
                    cm.openUIWithOption(7, 1);
                    cm.playerMessage(5, '在组队窗(快捷键p)中使用“寻找组队”标签, 可以随时随地寻找自己想要加入的组队.');
                    cm.dispose();
                    break;
                case 11:
                    cm.sendNext('你想和队员们一起齐心协力，完成任务吗？如果想挑战的话，就通过#b所属组队的队长#k来和我说话。');
                    status = -1;
                    break;
                case 12:
                    cm.sendNext('可以在进行挑战时，确认今日剩余可挑战次数。');
                    status = -1;
                    break;
                case 9:
                case 8:
                case 7:
                case 6:
                case 5:
                case 4:
                case 3:
                case 2:
                case 1:
                case 0:
                    var a = cm.getEventManager(事件脚本[h]);
                    chs = h;
                    var c = a.getNumberProperty('state');
                    var j = '#fn微软雅黑#';
                    j += ' #e<Boss - ' + PQLog[h] + '>#n\r\n';
                    if (频道[h] == 0) {
                        j += '\r\n  #r目前所有频道可以进入.#k\r\n';
                    } else {
                        j += '\r\n  #r需要在#e' + 频道[h] + '#n频道进行.#k\r\n';
                    }
                    j += '\r\n ' + a1 + '状态：#n' + (c == 0 ? '#g空#k' : '#r有#k') + '        ' + a1 + '资格：#g' + (次数限制[h] - cm.getPQLog(PQLog[h])) + '#k/#d' + 次数限制[h] + '#k';
                    j += '\r\n ' + a1 + '等级：#d' + 最低等级[h] + '#k      ' + a1 + '人数：#d' + 最小人数[h] + ' - ' + 最大人数[h] + '#k\r\n\r\n';
                    cm.askYesNo(j + '           #b#h0# #k#e是否现在就进入？#n');
                    break;
                }
            } else {
                if (status === d++) {
                    if (cm.getLimitBreak() < 破攻要求[chs]) {
                        cm.sendOk('你的武器破功' + cm.getLimitBreak() + '不够' + 破攻要求[chs] + '，不允许进入！');
                        cm.dispose();
                    } else {
                        if (!cm.isLeader()) {
                            cm.getTopMsgFont('只有队长才可以申请入场', 3, 20, 4, 0, 0);
                            cm.dispose();
                            return;
                        } else {
                            if (!cm.isAllPartyMembersAllowedLevel(最低等级[chs], 最高等级[chs])) {
                                cm.getTopMsgFont('组队成员 ' + 最低等级[chs] + '-' + 最高等级[chs] + ' 级才可以入场', 3, 20, 4, 0, 0);
                                cm.dispose();
                            } else {
                                if (频道[chs] != 0 && cm.getPlayer().getClient().getChannel() != 频道[chs]) {
                                    cm.getTopMsgFont('此副本在 ' + 频道[chs] + '频道才可以入场', 3, 20, 4, 0, 0);
                                    cm.dispose();
                                } else {
                                    if (!cm.isAllPartyMembersAllowedPQ(PQLog[chs], 次数限制[chs])) {
                                        cm.sendNext('你的队员#r#e "' + cm.getNotAllowedPQMemberName(PQLog[chs], 次数限制[chs]) + '" #k#n次数已经达到上限了。');
                                        cm.dispose();
                                    } else {
                                        if (!cm.allMembersHere()) {
                                            cm.getTopMsgFont('所有队员都在当前地图才可以入场', 3, 20, 4, 0, 0);
                                            cm.dispose();
                                        } else {
                                            if (cm.getPartyMembers().size() < 最小人数[chs] || cm.getPartyMembers().size() > 最大人数[chs]) {
                                                cm.getTopMsgFont('组队成员 ' + 最小人数[chs] + '-' + 最大人数[chs] + ' 人才可以入场', 3, 20, 4, 0, 0);
                                                cm.dispose();
                                            } else {
                                                var a = cm.getEventManager(事件脚本[chs]);
                                                var c = a.getNumberProperty('state');
                                                if (c == 0) {
                                                    cm.dispose();
                                                    var k = (cm.getPlayer().getLevel() * 6 / 10 * 1.2).toFixed(0);
                                                    a.startInstance(cm.getParty(), cm.getMap(), k);
                                                    cm.gainMembersPQ(PQLog[chs], 1);
                                                    var b = PQLog[chs] + 1;
                                                    cm.setPQLog(b, 1);
                                                    var f = cm.getEventInstance();
                                                    f.setProperty('LogName', b);
                                                    f.getPlayers().forEach(function (i) {
                                                        if (cm.getPlayer().isGM()) {
                                                            i.getAPI().addPopupSay(0, 3000, '怪物动态等级' + k + '级。');
                                                        }
                                                        i.getAPI().removeAll(4001007);
                                                        i.getAPI().removeAll(4001156);
                                                    });
                                                    cm.worldSpouseMessage(21, '『首领挑战』 : ' + cm.getPlayer().getName() + ' 的敢死队队伍，气势汹汹的挑战 ' + PQLog[chs] + ' 去了。');
                                                } else {
                                                    cm.getTopMsgFont('已经有队伍在进行了,请换其他频道尝试。', 3, 20, 4, 0, 0);
                                                    cm.dispose();
                                                }
                                                cm.dispose();
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
function action其他地图(d, c, b) {
    var a = -1;
    if (status <= a++) {
        cm.dispose();
    } else {
        if (status === a++) {
            cm.askMenu('#e<' + BossName + '>#n\r\n你想和队员们一起努力，完成任务吗？这里面有很多如果不同心协力就无法解决的障碍。\r\n#b#L0#我想进入组队训练场待机室。#l');
        } else {
            if (status === a++) {
                cm.warp(开始地图, 0, false);
                cm.dispose();
            }
        }
    }
}
function randomNum(b, a) {
    switch (arguments.length) {
    case 1:
        return parseInt(Math.random() * b + 1, 10);
        break;
    case 2:
        return parseInt(Math.random() * (a - b + 1) + b, 10);
        break;
    default:
        return 0;
        break;
    }
}