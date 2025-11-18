var A1 = '#fUI/UIWindow6.img/trioEvent/button:BtLeftOK/mouseOver/0#';
var A2 = '#fUI/UIWindow3.img/Scenario/list/icon/icon9/0#';
var A3 = '#fUI/UIWindow3.img/Scenario/list/icon/icon9/0#';
var A4 = '#fUI/UIWindow3.img/Scenario/list/icon/icon9/0#';
var A5 = '#fUI/UIWindow3.img/Scenario/list/icon/icon9/0#';
var A10 = '#fMap/Obj/acc9.img/inside/signpost/6/0#';
var wn1 = '#fMap/MapHelper.img/weather/snowbear/0#';
var wn2 = '#fMap/MapHelper.img/weather/snowbear/1#';
var wn3 = '#fMap/MapHelper.img/weather/snowbear/2#';
var wn5 = '#fMap/MapHelper.img/weather/5000days/1#';
var wn6 = '#fMap/MapHelper.img/weather/5000days/3#';
var icon = Array(wn1, wn2, wn3, wn5, wn6);
var ic = icon[Math.floor(Math.random() * icon.length)];
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
function action(g, d, c) {
    if (status == 0 && g == 0) {
        cm.dispose();
        cm.openNpc(0, '拍卖菜单_至尊版');
        return;
    }
    if (g == 1) {
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
            time = '今日已在线：#e#r' + cm.getGamePoints() + '#k#n 分';
        } else {
            time = '今日已在线：#e#r' + Math.floor(cm.getGamePoints() / 60) + '#k#n 时 #e#r' + cm.getGamePoints() % 60 + '#k#n 分';
        }
        f = '' + time + '' + A10 + '\r\n';
        for (var b in OnlineLevel) {
            var a = '';
            giftToken[b] = false;
            if (cm.getGamePoints() >= OnlineLevel[b]) {
                if (cm.getEventCount(Eventid + OnlineLevel[b]) == 0) {
                    a = '#g< ' + A1 + ' >#b';
                    giftToken[b] = true;
                } else {
                    a = '#d< 今日已领取 >#b';
                }
            } else {
                a = '#r< ' + A2 + '' + A3 + '' + A4 + '' + A5 + ' >#b';
            }
            if (OnlineLevel[b] < 60) {
                TimeShow = '#r#e' + OnlineLevel[b] + '分钟#n#b';
            } else {
                if (OnlineLevel[b] % 60 == 0) {
                    TimeShow = '#r#e' + Math.floor(OnlineLevel[b] / 60) + '小时#n#b';
                } else {
                    TimeShow = '#r#e' + Math.floor(OnlineLevel[b] / 60) + '小时#r#e' + OnlineLevel[b] % 60 + '分钟#n#b';
                }
            }
            f += '#b#L' + parseInt(b) + '#' + ic + '在线 ' + TimeShow + ' 奖励 ' + a + '#l#k\r\n';
        }
        cm.askMenu(f);
    } else {
        if (status == 1) {
            giftId = parseInt(c);
            var f = '		  #b' + eff + ' 在线#r#e ' + OnlineLevel[giftId] + ' #n#b分钟奖励内容 ' + eff + '#k#n\r\n\r\n';
            gifts = getGift(giftId);
            for (var b in gifts) {
                var e = gifts[b][0];
                var h = gifts[b][1];
                f += '			#v' + e + '# #b#z' + e + '# #k[' + h + '个]\r\n';
            }
            f += '\r\n#d（提示：领取礼包时请注意背包栏位#r是否有足够多的空位#d！）#k';
            cm.askYesNo(f);
        } else {
            if (status == 2) {
                if (giftId != -1 && gifts != null) {
                    for (var b in gifts) {
                        var e = gifts[b][0];
                        var h = gifts[b][1];
                        if (!cm.canHold(e, h)) {
                            cm.sendOk('您的背包空间不足，请保证每个栏位至少8格的空间，以避免领取失败。');
                            cm.dispose();
                            return;
                        }
                    }
                    if (giftToken[giftId] && cm.getEventCount(Eventid + OnlineLevel[giftId], 1) == 0) {
                        cm.setEventCount(Eventid + OnlineLevel[giftId]);
                        cm.gainPlayerEnergy((giftId + 1) * 25);
                        cm.playerMessage(-1, '获得 ' + (giftId + 1) * 25 + ' 点活力');
                        for (var b in gifts) {
                            var e = gifts[b][0];
                            var h = gifts[b][1];
                            cm.gainItem(e, h);
                        }
                        cm.sendOk('恭喜您，领取成功！快打开包裹看看吧！');
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
                        cm.sendNextS('#d#e- 无法领取:#n#k\r\n\r\n嘿，你今天在线时间太短了啊！\r\n虽然礼物丰厚，但是每天只能领取#e#r1#k#n次。');
                    }
                } else {
                    cm.sendOk('领取错误！请联系管理员！');
                    cm.dispose();
                }
            }
        }
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