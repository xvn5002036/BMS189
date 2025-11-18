var chs;
var a1 = '#fUI/UIPVP/MiniMapIcon/star#';
var status = -1;
var selectionLog = [];
var BossName = '组队任务_御龙魔';
var 事件脚本 = ['组队任务_御龙魔'];
var PQLog = ['组队任务_御龙魔'];
var 开始地图 = 240080000;
var 次数限制 = [99];
var 频道 = [0];
var 破攻要求 = [0];
var 最低等级 = [150];
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
function action开始地图(f, h, j) {
    var e = -1;
    if (status <= e++) {
        cm.dispose();
    } else {
        if (status === e++) {
            var m = '#e<' + BossName + '>#n\r\n\r\n';
            m += '这是通往天空地区的入口。你想要做什么呢？\r\n#b';
            m += '#L0#1. 进入天空地区。(Lv 150以上 / 3名以上)#l\r\n';
            m += '#L10#2. 寻找同行的组队。#l\r\n';
            m += '#L11#3. 我想听取说明。#l\r\n';
            m += '#L13#4. 我想学习飞翔技能。#l\r\n';
            m += '#L12#5. 我想知道今天的剩余挑战次数。#l';
            cm.askMenu(m);
        } else {
            if (status === e++) {
                switch (j) {
                case 10:
                    cm.openUIWithOption(7, 1);
                    cm.playerMessage(5, '在组队窗(快捷键p)中使用“寻找组队”标签, 可以随时随地寻找自己想要加入的组队.');
                    cm.dispose();
                    break;
                case 11:
                    cm.sendNormalTalk('前往#b<天空之门>#k，查明#r御龙魔#k的身份吧。如果使用#b飞翔#k技能，翱翔在空中，击退飞龙，即可找到他。\r\n - #e等级#n：150级以上 \r\n - #e限制时间#n：30分钟\r\n - #e参加人员#n：3～6名\r\n - #e参加条件#n：获得飞翔技能', 0, 2085001, false, false);
                    status = -1;
                    break;
                case 12:
                    cm.sendNext('可以在进行挑战时，确认今日剩余可挑战次数。');
                    status = -1;
                    break;
                case 13:
                    var d = cm.getBeginner() * 10000 + 1026;
                    if (cm.getPlayer().getSkillLevel(d) <= 0) {
                        cm.teachSkill(d, 1);
                        cm.sendOk('恭喜,你学习了[飞翔]技能！');
                    } else {
                        cm.getTopMsgFont('你已经获得了[飞翔]技能了', 3, 20, 4, 0, 0);
                    }
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
                    var a = cm.getEventManager(事件脚本[j]);
                    chs = j;
                    var c = a.getNumberProperty('state');
                    var k = '#fn微软雅黑#';
                    k += ' #e<Boss - ' + PQLog[j] + '>#n\r\n';
                    if (频道[j] == 0) {
                        k += '\r\n  #r目前所有频道可以进入.#k\r\n';
                    } else {
                        k += '\r\n  #r需要在#e' + 频道[j] + '#n频道进行.#k\r\n';
                    }
                    k += '\r\n ' + a1 + '状态：#n' + (c == 0 ? '#g空#k' : '#r有#k') + '        ' + a1 + '资格：#g' + (次数限制[j] - cm.getPQLog(PQLog[j])) + '#k/#d' + 次数限制[j] + '#k';
                    k += '\r\n ' + a1 + '等级：#d' + 最低等级[j] + '#k      ' + a1 + '人数：#d' + 最小人数[j] + ' - ' + 最大人数[j] + '#k\r\n\r\n';
                    cm.askYesNo(k + '           #b#h0# #k#e是否现在就进入？#n');
                    break;
                }
            } else {
                if (status === e++) {
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
                                                    var l = (cm.getPlayer().getLevel() * 6 / 10 * 1.2).toFixed(0);
                                                    a.startInstance(cm.getParty(), cm.getMap(), l);
                                                    cm.gainMembersPQ(PQLog[chs], 1);
                                                    var b = PQLog[chs] + 1;
                                                    cm.setPQLog(b, 1);
                                                    var g = cm.getEventInstance();
                                                    g.setProperty('LogName', b);
                                                    g.getPlayers().forEach(function (i) {
                                                        if (cm.getPlayer().isGM()) {
                                                            i.getAPI().addPopupSay(0, 3000, '怪物动态等级' + l + '级。');
                                                        }
                                                        i.getAPI().removeAll(4001117);
                                                        i.getAPI().removeAll(4001260);
                                                        i.getAPI().removeAll(4001120);
                                                        i.getAPI().removeAll(4001121);
                                                        i.getAPI().removeAll(4001122);
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
            cm.sendNormalTalk('这里是最后一次见到御龙魔的地方。', 2, 2085002, false, true);
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