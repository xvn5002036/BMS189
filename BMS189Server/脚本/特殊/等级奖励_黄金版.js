var d1 = '#fUI/UIWindowBT.img/WorldMap/NoticeIcon/0#';
var status = 0;
var bossid = '等级礼包';
var giftLevel = Array(50, 100, 120, 150, 180, 200, 250);
var giftContent = Array(Array(4032521, 1, 1), Array(2430865, 1, 1), Array(2432824, 1, 1), Array(1202193, 1, 1), Array(2431094, 1, 1), Array(2615002, 10, 2), Array(1113072, 1, 2), Array(1132243, 1, 2), Array(1122264, 1, 2), Array(1032220, 1, 2), Array(2431098, 1, 2), Array(2431097, 1, 2), Array(5062000, 2, 2), Array(1442018, 1, 3), Array(1302063, 1, 3), Array(3010936, 1, 3), Array(5150040, 8, 3), Array(5152053, 8, 3), Array(2431741, 1, 3), Array(2450062, 6, 3), Array(2430226, 1, 4), Array(1012319, 1, 4), Array(2100001, 5, 4), Array(2049124, 9, 4), Array(4001832, 999, 4), Array(2431741, 1, 4), Array(4310030, 100, 4), Array(2450062, 6, 4), Array(4310129, 10, 4), Array(5062002, 5, 4), Array(5064000, 5, 4), Array(2049116, 10, 4), Array(1402014, 1, 5), Array(3015002, 1, 5), Array(1142802, 1, 5), Array(3700187, 1, 5), Array(2100008, 5, 5), Array(2431741, 1, 5), Array(4310129, 9, 5), Array(4000517, 1, 5), Array(1003843, 1, 6), Array(1112973, 1, 6), Array(3015304, 1, 6), Array(1702786, 1, 6), Array(1115054, 1, 6), Array(1115143, 1, 6), Array(1702565, 1, 6), Array(2049323, 99, 6), Array(2049752, 99, 6), Array(2049124, 99, 6), Array(2049135, 99, 6), Array(1182285, 1, 7), Array(1002970, 1, 7), Array(1103189, 1, 7), Array(3018182, 1, 7), Array(1143159, 1, 7), Array(3018050, 1, 7), Array(1112977, 1, 7));
var giftId = -1;
var giftToken = Array();
var gifts = null;
function start() {
    status = -1;
    action(1, 0, 0);
}
function action(g, d, c) {
    if (status == 0 && g == 0) {
        cm.dispose();
        return;
    }
    if (g == 1) {
        status++;
    } else {
        status--;
    }
    if (status == 0) {
        var f = '' + d1 + '';
        f += '嘿，我为你准备了许多宝贝，等你达到相应等级的时候就可以领取了；点击可以查看礼包内容快抢先看看吧！\r\n';
        for (var b in giftLevel) {
            var a = '';
            giftToken[b] = false;
            if (cm.getPlayer().getLevel() >= giftLevel[b]) {
                if (cm.getPQLog(bossid + b, 1) >= 0) {
                    a = '(可领取)';
                    giftToken[b] = true;
                } else {
                    a = '#g(已领取)#b';
                }
            } else {
                a = '#r(等级不足)#b';
            }
            f += '#b#L' + (parseInt(b) + 1) + '#' + d1 + '领取#r#e' + giftLevel[b] + '#n#b级等级礼包 ' + a + '#l#k\r\n';
        }
        cm.askMenu(f);
    } else {
        if (status == 1) {
            giftId = parseInt(c);
            var f = '#e#fs13##r' + giftLevel[giftId - 1] + '#n#b级礼包内容：#fs12#\r\n';
            gifts = getGift(giftId);
            for (var b in gifts) {
                var e = gifts[b][0];
                var h = gifts[b][1];
                f += '#v' + e + '##b#z' + e + '##k #rx ' + h + '#k\r\n';
            }
            f += '\r\n#d是否现在就领取该礼包？#k';
            cm.askYesNo(f);
        } else {
            if (status == 2) {
                if (giftId != -1 && gifts != null) {
                    if (cm.getSpace(1) < 8 || cm.getSpace(2) < 8 || cm.getSpace(3) < 8 || cm.getSpace(4) < 8 || cm.getSpace(5) < 8) {
                        cm.sendOk('您的背包空间不足，请保证每个栏位至少8格的空间，以避免领取失败。');
                        cm.dispose();
                        return;
                    }
                    if (giftToken[giftId - 1]) {
                        cm.setPQLog(bossid + (giftId - 1), -2, -2);
                        for (var b in gifts) {
                            var e = gifts[b][0];
                            var h = gifts[b][1];
                            cm.gainItem(e, h);
                        }
                        cm.worldMessage('『等级奖励』玩家[' + cm.getPlayer().getName() + '] 领取了 ' + giftLevel[giftId - 1] + '级 等级奖励。');
                        cm.dispose();
                        cm.sendOk('恭喜您，领取成功！快打开包裹看看吧！');
                    } else {
                        status = -1;
                        cm.askMenu('您已经领过了该礼包或者等级未达到要求，无法领取。');
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