var status = 0;
var Eventid = '站街奖励';
var OnlineLevel = [
    60,
    180,
    300
];
var giftContent = [
    [
        2431887,
        2,
        0
    ],
    [
        2430069,
        1,
        0
    ],
    [
        5743003,
        5,
        0
    ],
    [
        5062001,
        5,
        0
    ],
    [
        2002077,
        3,
        0
    ],
    [
        2003529,
        3,
        0
    ],
    [
        2022728,
        3,
        0
    ],
    [
        2431738,
        2,
        0
    ],
    [
        5350003,
        1,
        0
    ],
    [
        5600001,
        1,
        0
    ],
    [
        2003604,
        1,
        0
    ],
    [
        2003519,
        1,
        0
    ],
    [
        4001713,
        20,
        0
    ],
    [
        2000005,
        100,
        0
    ],
    [
        4001126,
        100,
        0
    ],
    [
        4001839,
        200,
        0
    ],
    [
        2431887,
        2,
        1
    ],
    [
        5062000,
        5,
        1
    ],
    [
        5743003,
        5,
        1
    ],
    [
        5062001,
        3,
        1
    ],
    [
        5062500,
        3,
        1
    ],
    [
        2049122,
        5,
        1
    ],
    [
        2022179,
        1,
        1
    ],
    [
        2431739,
        1,
        1
    ],
    [
        2023140,
        2,
        1
    ],
    [
        4001714,
        2,
        1
    ],
    [
        5072000,
        2,
        1
    ],
    [
        2000005,
        100,
        1
    ],
    [
        4001126,
        200,
        1
    ],
    [
        4001839,
        500,
        1
    ],
    [
        2431887,
        3,
        2
    ],
    [
        2049419,
        3,
        2
    ],
    [
        5150040,
        2,
        2
    ],
    [
        5152053,
        2,
        2
    ],
    [
        2431740,
        3,
        2
    ],
    [
        2049419,
        1,
        2
    ],
    [
        2430069,
        5,
        2
    ],
    [
        2049143,
        5,
        2
    ],
    [
        5743003,
        5,
        2
    ],
    [
        5750000,
        3,
        2
    ],
    [
        5062000,
        7,
        2
    ],
    [
        5062500,
        3,
        2
    ],
    [
        5390006,
        3,
        2
    ],
    [
        4001126,
        400,
        2
    ],
    [
        4001839,
        600,
        2
    ],
    [
        5072000,
        3,
        2
    ]
];
var giftId = -1;
var giftToken = [];
var gifts = null;
var time, TimeShow;
var eff = '#fEffect/CharacterEff.img/1112924/0/0#';
function start() {
    status = -1;
    action(1, 0, 0);
}
function action(c, g, j) {
    var h = cm.getConstantScriptContent('菜单_NPC立绘');
    var d = Math.floor(Math.random() * h.length);
    var a = h[d][0];
    var f = randomNum(0, h[d][1]);
    if (status == 0 && c == 0) {
        cm.dispose();
        cm.openNpc(0, '拍卖菜单_至尊版');
        return;
    }
    if (c == 1) {
        status++;
    } else {
        status--;
    }
    if (cm.getzhizunvip() != 2) {
        cm.dispose();
        cm.playerMessage(1, '该菜单是至尊版专享。');
        return;
    }
    if (status == 0) {
        if (cm.getGamePoints() < 60) {
            time = '  今日已在线：' + cm.getGamePoints() + ' 分';
        } else {
            time = '  今日已在线：' + Math.floor(cm.getGamePoints() / 60) + ' 时 ' + cm.getGamePoints() % 60 + ' 分';
        }
        l = ' #face' + f + '##fs18##r#fn微软雅黑#欢迎使用 ' + cm.getServerName() + ' 在线奖励#fs15#\r\n';
        l += '' + time + '\r\n';
        for (var k in OnlineLevel) {
            var e = '';
            giftToken[k] = false;
            if (cm.getGamePoints() >= OnlineLevel[k]) {
                if (cm.getEventCount(Eventid + OnlineLevel[k]) == 0) {
                    e = '#g< 可领取 >#b';
                    giftToken[k] = true;
                } else {
                    e = '#k< 今日已领取 >#b';
                }
            } else {
                e = '#r< 未达标 >#b';
            }
            if (OnlineLevel[k] < 60) {
                TimeShow = '#r' + OnlineLevel[k] + '分钟#b';
            } else {
                if (OnlineLevel[k] % 60 == 0) {
                    TimeShow = '#r' + Math.floor(OnlineLevel[k] / 60) + '小时#b';
                } else {
                    TimeShow = '#r' + Math.floor(OnlineLevel[k] / 60) + '小时#r' + OnlineLevel[k] % 60 + '分钟#b';
                }
            }
            l += '#b#L' + parseInt(k) + '#在线 ' + TimeShow + ' 奖励 ' + e + '#l#k\r\n';
        }
        cm.askMenu_Bottom(l, 204, a);
    } else {
        if (status == 1) {
            giftId = parseInt(j);
            var l = '#face' + f + '#		  #b' + eff + ' 在线#r ' + OnlineLevel[giftId] + ' #b分钟奖励内容 ' + eff + '#k#n\r\n\r\n';
            gifts = getGift(giftId);
            for (var k in gifts) {
                var i = gifts[k][0];
                var b = gifts[k][1];
                l += '			#v' + i + '# #b#z' + i + '# #k[' + b + '个]\r\n';
            }
            l += '\r\n（提示：注意背包是否充足！）';
            cm.askYesNo_Bottom(l, 204, a);
        } else {
            if (status == 2) {
                if (giftId != -1 && gifts != null) {
                    for (var k in gifts) {
                        var i = gifts[k][0];
                        var b = gifts[k][1];
                        if (!cm.canHold(i, b)) {
                            cm.getTopMsgFont('背包不足检查一下再领', 3, 20, 4, 0, 0);
                            cm.dispose();
                            return;
                        }
                    }
                    if (giftToken[giftId] && cm.getEventCount(Eventid + OnlineLevel[giftId], 1) == 0) {
                        cm.setEventCount(Eventid + OnlineLevel[giftId]);
                        for (var k in gifts) {
                            var i = gifts[k][0];
                            var b = gifts[k][1];
                            cm.gainItem(i, b);
                        }
                        cm.getTopMsgFont('领取成功！快打开包裹看看吧！', 3, 20, 20, 0);
                        if (OnlineLevel[giftId] < 60) {
                            TimeShow = OnlineLevel[giftId] + '分钟';
                        } else {
                            if (OnlineLevel[giftId] % 60 == 0) {
                                TimeShow = +Math.floor(OnlineLevel[giftId] / 60) + '小时';
                            } else {
                                TimeShow = +Math.floor(OnlineLevel[giftId] / 60) + '小时' + OnlineLevel[giftId] % 60 + '分钟';
                            }
                        }
                        cm.worldSpouseMessage(21, '『在线奖励』：祝贺 ' + cm.getPlayer().getName() + ' 领取了 ' + OnlineLevel[giftId] + ' 分钟在线奖励，恭喜他（她）吧！~');
                        cm.dispose();
                    } else {
                        status = -1;
                        cm.askYesNo_Bottom('#face' + f + '#- 无法领取:\r\n嘿，你今天在线时间太短了啊！\r\n虽然礼物丰厚，但是每天只能领取#r1#k次。', a);
                    }
                } else {
                    cm.getTopMsgFont('领取错误！请联系管理员！', 3, 20, 4, 0, 0);
                    cm.dispose();
                }
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
function getGift(c) {
    var b = Array();
    for (var a in giftContent) {
        if (giftContent[a][2] == c) {
            b.push(giftContent[a]);
        }
    }
    return b;
}