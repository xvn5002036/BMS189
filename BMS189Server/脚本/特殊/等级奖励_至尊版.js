var 棕色兔子 = '#fEffect/CharacterEff/1082565/0/0#';
var text;
var status = 0;
var bossid = '等级礼包';
var giftLevel = Array(50, 100, 150, 190, 205, 215, 225);
var giftContent = Array(Array(4032521, 1, 1), Array(2430865, 1, 1), Array(2432824, 1, 1), Array(1202193, 1, 1), Array(2431094, 1, 1), Array(1113072, 1, 1), Array(1132243, 1, 1), Array(1122264, 1, 1), Array(1032220, 1, 1), Array(2049124, 5, 1), Array(2049417, 5, 1), Array(4000463, 1, 1), Array(4000313, 1, 1), Array(5062002, 50, 2), Array(5062009, 50, 2), Array(4001839, 50, 2), Array(4031994, 50, 2), Array(2049124, 10, 2), Array(2049752, 10, 2), Array(4000463, 3, 2), Array(4000313, 3, 2), Array(4001839, 100, 3), Array(4031994, 100, 3), Array(5062009, 50, 3), Array(2340000, 10, 3), Array(2048332, 10, 3), Array(4000463, 5, 3), Array(4000313, 5, 3), Array(4001839, 100, 4), Array(4031994, 100, 4), Array(5062010, 100, 4), Array(2340000, 10, 4), Array(2049116, 10, 4), Array(4000463, 8, 4), Array(4000313, 8, 4), Array(4001839, 300, 5), Array(4031994, 300, 5), Array(5062500, 100, 5), Array(2340000, 10, 5), Array(2049300, 10, 5), Array(4000463, 10, 5), Array(4000313, 10, 5), Array(4001839, 300, 6), Array(4031994, 300, 6), Array(5062024, 100, 6), Array(2340000, 10, 6), Array(2049600, 10, 6), Array(4000463, 10, 6), Array(4000313, 50, 6), Array(3014005, 1, 6), Array(4001839, 700, 7), Array(4031994, 700, 7), Array(5062024, 100, 7), Array(5062503, 100, 7), Array(2435824, 1, 7), Array(4000463, 50, 7), Array(4000313, 100, 7), Array(3014028, 1, 7));
var giftId = -1;
var giftToken = Array();
var gifts = null;
function start() {
    status = -1;
    action(1, 0, 0);
}
function action(m, c, w) {
    var b = cm.getConstantScriptContent('菜单_NPC立绘');
    var e = Math.floor(Math.random() * b.length);
    var u = b[e][0];
    var g = randomNum(0, b[e][1]);
    if (status == 0 && m == 0) {
        cm.dispose();
        cm.openNpc(0, '拍卖菜单_至尊版');
    }
    if (m == 1) {
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
        var l = '#face' + g + '#';
        l += '   #b冒险家，你的当前等级为 #r' + cm.getPlayer().getLevel() + '\r\n   #L10086##r' + 棕色兔子 + ' 返回上一页#l\r\n';
        for (var v in giftLevel) {
            var a = '';
            giftToken[v] = false;
            if (cm.getPlayer().getLevel() >= giftLevel[v]) {
                if (cm.getPQLog(bossid + v, 1) >= 0) {
                    a = '#g[可领取]#b';
                    giftToken[v] = true;
                } else {
                    a = '#r[已完成]#r';
                }
            } else {
                a = '#k[未完成]#k';
            }
            l += '   #L' + (parseInt(v) + 1) + '#' + 棕色兔子 + ' ' + a + '等级福利礼包 #r			' + giftLevel[v] + '级#l\r\n';
        }
        cm.askMenu_Bottom(l, 204, u);
    } else {
        if (status == 1) {
            if (w == 10086) {
                cm.dispose();
                cm.openNpc(0, '拍卖菜单_至尊版');
            } else {
                giftId = parseInt(w);
                var l = ' #fs16##fn方正粗黑宋简体##face' + g + '#是否领取 #r' + giftLevel[giftId - 1] + '#k 级档次礼包？#fs14##fn黑体#\r\n';
                gifts = getGift(giftId);
                for (var r = 0; r < gifts.length; r++) {
                    var k = gifts[r][0];
                    var f = gifts[r][1];
                    l += ' #v' + k + '##z' + k + '#[' + f + '个]';
                    var h = 10;
                    var j = cm.getItemName(k).length;
                    var q = j;
                    for (var t = 0; t < j; t++) {
                        if (cm.getItemName(k).charCodeAt(t) < 0 || cm.getItemName(k).charCodeAt(t) > 255) {
                            q++;
                        }
                    }
                    var s = h - q / 2;
                    for (var p = 0; p < s; p++) {
                        l += '　';
                    }
                    if (r != 0 && (r + 1) % 2 == 0) {
                        l += '\r\n';
                    }
                }
                cm.askAcceptDecline_Bottom(l, 204, u);
            }
        } else {
            if (status == 2) {
                if (giftId != -1 && gifts != null) {
                    if (cm.getSpace(1) < 8 || cm.getSpace(2) < 8 || cm.getSpace(3) < 8 || cm.getSpace(4) < 8 || cm.getSpace(5) < 8) {
                        cm.sendOk_Bottom('#face' + g + '#您的背包空间不足，请保证每个栏位至少8格的空间，以避免领取失败。', u);
                        cm.dispose();
                        return;
                    }
                    if (giftToken[giftId - 1]) {
                        cm.setPQLog(bossid + (giftId - 1), -2, -2);
                        for (var v in gifts) {
                            var k = gifts[v][0];
                            var f = gifts[v][1];
                            cm.gainItem(k, f);
                        }
                        cm.worldMessage('『等级奖励』玩家[' + cm.getPlayer().getName() + '] 领取了 ' + giftLevel[giftId - 1] + '级 等级奖励。');
                        cm.dispose();
                        cm.sendOk_Bottom('#face' + g + '#恭喜您，领取成功！快打开包裹看看吧！', u);
                    } else {
                        status = -1;
                        cm.sendNext_Bottom('#face' + g + '#您已经领过了该礼包或者等级未达到要求，无法领取。', u);
                    }
                } else {
                    cm.sendNext_Bottom('#face' + g + '#领取错误！请联系管理员！', u);
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
function 字符填充(f) {
    var b = 14;
    var h = f.length;
    var g = h;
    for (var e = 0; e < h; e++) {
        if (f.charCodeAt(e) < 0 || f.charCodeAt(e) > 255) {
            g++;
        }
    }
    var a = b - g / 2;
    for (var c = 0; c < a; c++) {
        text += '　';
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