var 箭头特效 = '#fUI/UIWindow.img/Quest/icon2/0#';
var status = -1;
var selectionLog = [];
function start() {
    action(1, 0, 0);
}
function action(mode, type, selection) {
    var NPC立绘组 = cm.getConstantScriptContent('菜单_NPC立绘');
    var index = Math.floor(Math.random() * NPC立绘组.length);
    var NPC = NPC立绘组[index][0];
    var face = randomNum(0, NPC立绘组[index][1]);
    if (!cm.getServerName().equals('BMS冒险岛') && !cm.getServerName().equals('BMS至尊') && !cm.getServerName().equals('BMS至尊体验服')) {
        cm.playerMessage(1, ' 使用环境异常，请还原服务端配置。');
        cm.dispose();
        return;
    }
    var 背包空位 = 8;
    if (cm.getSpace(1) < 背包空位 || cm.getSpace(2) < 背包空位 || cm.getSpace(3) < 背包空位 || cm.getSpace(4) < 背包空位 || cm.getSpace(5) < 背包空位) {
        cm.dispose();
        cm.openNpc(9900004);
        cm.playerMessage(-1, '[萌新签到] 请确保背包每一栏空位大于' + 背包空位 + '个。');
        cm.playerMessage(5, '[萌新签到] 请确保背包每一栏空位大于' + 背包空位 + '个。');
        return;
    }
    if (status <= 0 && mode <= 0) {
        cm.dispose();
    }
    mode == 1 ? status++ : status--;
    selectionLog[status] = selection;
    var i = -1;
    if (status <= i++) {
        cm.dispose();
        cm.openNpc(9900004);
    } else {
        if (status === i++) {
            var 签到天数 = cm.getEventCount('萌新签到1', 1) + cm.getEventCount('萌新签到2', 1) + cm.getEventCount('萌新签到3', 1) + cm.getEventCount('萌新签到4', 1) + cm.getEventCount('萌新签到5', 1) + cm.getEventCount('萌新签到6', 1) + cm.getEventCount('萌新签到7', 1);
            var text = '#face' + face + '##fn方正粗黑宋简体#\r\n';
            text += '#r#fs16#欢迎来到 ' + cm.getServerName() + ' 萌新签到系统！#k\r\n#n#fs14#';
            text += '#g你已经完成了第' + 签到天数 + '天签到.#k\r\n';
            text += '#L1#第1天签到#l #L2#第2天签到#l #L3#第3天签到#l\r\n';
            text += '#L4#第4天签到#l #L5#第5天签到#l #L6#第6天签到#l\r\n';
            text += '#L7#第7天签到#l\r\n';
            text += '\r\n#L10086##fs19##b返回主菜单#l#k';
            cm.askMenu_Bottom(text, 204, NPC);
        } else {
            var reactor = 'action' + selectionLog[1];
            eval(reactor)(mode, type, selection, i);
        }
    }
}
function action1(d, g, k, c) {
    var h = cm.getConstantScriptContent('菜单_NPC立绘');
    var e = Math.floor(Math.random() * h.length);
    var a = h[e][0];
    var f = randomNum(0, h[e][1]);
    var m = 1;
    var b = Array(Array(2439301, 99), Array(2436557, 99), Array(2439296, 1));
    if (status <= c++) {
        var l = '#face' + f + '##fn方正粗黑宋简体##fs16#\r\n';
        l += '   #r欢迎来到 ' + cm.getServerName() + ' 萌新签到系统！#k\r\n#fs14#';
        l += '	   #b当日在线时间（' + cm.getGamePoints() + '/60）#k\r\n';
        l += '	   #b最低游戏等级（' + cm.getPlayer().getLevel() + '/200）#k\r\n';
        l += '	   #b需要#z4000001#（#c4000001#/150）#k\r\n';
        l += '  #L0#' + 箭头特效 + '查看第' + m + '天奖励#l   #L10#' + 箭头特效 + '完成第' + m + '天签到#l\r\n';
        l += '\r\n';
        cm.askMenu_Bottom(l, 204, a);
    } else {
        if (status === c++) {
            if (k == 0) {
                var j = '#face' + f + '#';
                for (var c = 0; c < b.length; c++) {
                    j += ' #v' + b[c][0] + '##z' + b[c][0] + '#  #rx' + b[c][1] + '#n#k\r\n';
                }
                cm.sendNextNoESC_Bottom(j, a);
                status = -1;
            } else {
                if (k == 10) {
                    if (cm.getEventCount('一天一次') >= 1) {
                        status = -1;
                        cm.sendNextNoESC_Bottom('#face' + f + '# 不要贪心，今天已经完成了。', a);
                        return;
                    }
                    if (cm.getEventCount('萌新签到' + m + '', 1) < 1 && cm.getGamePoints() > 60 && cm.getPlayer().getLevel() >= 200 && cm.haveItem(4000001, 150)) {
                        var j = '#face' + f + '#您以获得如下奖励：\r\n';
                        for (var c = 0; c < b.length; c++) {
                            j += ' #v' + b[c][0] + '##z' + b[c][0] + '#  #rx' + b[c][1] + '#n#k\r\n';
                            cm.gainItem(b[c][0], b[c][1]);
                        }
                        cm.sendNextNoESC_Bottom(j, a);
                        status = -1;
                        cm.gainItem(4000001, -150);
                        cm.setEventCount('一天一次');
                        cm.setEventCount('萌新签到' + m + '', 1);
                    } else {
                        status = -1;
                        cm.sendNextNoESC_Bottom('#face' + f + '# 条件不满足，或者你已经领取过了哦！\r\n#b（每档只能领取一次）#k', a);
                    }
                }
            }
        }
    }
}
function action2(d, g, k, c) {
    var h = cm.getConstantScriptContent('菜单_NPC立绘');
    var e = Math.floor(Math.random() * h.length);
    var a = h[e][0];
    var f = randomNum(0, h[e][1]);
    var m = 2;
    var b = Array(Array(5062010, 999), Array(5062500, 999));
    if (status <= c++) {
        var l = '#face' + f + '##fn方正粗黑宋简体##fs16#\r\n';
        l += '   #r欢迎来到 ' + cm.getServerName() + ' 萌新签到系统！#k\r\n#fs14#';
        l += '	   #b当日在线时间（' + cm.getGamePoints() + '/60）#k\r\n';
        l += '	   #b最低游戏等级（' + cm.getPlayer().getLevel() + '/200）#k\r\n';
        l += '	   #b需要#z4000001#（#c4000001#/150）#k\r\n';
        l += '  #L0#' + 箭头特效 + '查看第' + m + '天奖励#l   #L10#' + 箭头特效 + '完成第' + m + '天签到#l\r\n';
        l += '\r\n';
        cm.askMenu_Bottom(l, 204, a);
    } else {
        if (status === c++) {
            if (k == 0) {
                var j = '#face' + f + '#';
                for (var c = 0; c < b.length; c++) {
                    j += ' #v' + b[c][0] + '##z' + b[c][0] + '#  #rx' + b[c][1] + '#n#k\r\n';
                }
                cm.sendNextNoESC_Bottom(j, a);
                status = -1;
            } else {
                if (k == 10) {
                    if (cm.getEventCount('一天一次') >= 1) {
                        status = -1;
                        cm.sendNextNoESC_Bottom('#face' + f + '# 不要贪心，今天已经完成了。', a);
                        return;
                    }
                    if (cm.getEventCount('萌新签到1', 1) != 1) {
                        status = -1;
                        cm.sendNextNoESC_Bottom('#face' + f + '# 必须完成前一天！', a);
                        return;
                    }
                    if (cm.getEventCount('萌新签到' + m + '', 1) < 1 && cm.getGamePoints() > 60 && cm.getPlayer().getLevel() >= 200 && cm.haveItem(4000001, 150)) {
                        var j = '#face' + f + '#您以获得如下奖励：\r\n';
                        for (var c = 0; c < b.length; c++) {
                            j += ' #v' + b[c][0] + '##z' + b[c][0] + '#  #rx' + b[c][1] + '#n#k\r\n';
                            cm.gainItem(b[c][0], b[c][1]);
                        }
                        cm.sendNextNoESC_Bottom(j, a);
                        status = -1;
                        cm.gainItem(4000001, -150);
                        cm.setEventCount('一天一次');
                        cm.setEventCount('萌新签到' + m + '', 1);
                    } else {
                        status = -1;
                        cm.sendNextNoESC_Bottom('#face' + f + '# 条件不满足，或者你已经领取过了哦！\r\n#b（每档只能领取一次）#k', a);
                    }
                }
            }
        }
    }
}
function action3(d, g, k, c) {
    var h = cm.getConstantScriptContent('菜单_NPC立绘');
    var e = Math.floor(Math.random() * h.length);
    var a = h[e][0];
    var f = randomNum(0, h[e][1]);
    var m = 3;
    var b = Array(Array(2437560, 9), Array(5680753, 9), Array(2436839, 1));
    if (status <= c++) {
        var l = '#face' + f + '##fn方正粗黑宋简体##fs16#\r\n';
        l += '   #r欢迎来到 ' + cm.getServerName() + ' 萌新签到系统！#k\r\n#fs14#';
        l += '	   #b当日在线时间（' + cm.getGamePoints() + '/60）#k\r\n';
        l += '	   #b最低游戏等级（' + cm.getPlayer().getLevel() + '/200）#k\r\n';
        l += '	   #b需要#z4000001#（#c4000001#/150）#k\r\n';
        l += '  #L0#' + 箭头特效 + '查看第' + m + '天奖励#l   #L10#' + 箭头特效 + '完成第' + m + '天签到#l\r\n';
        l += '\r\n';
        cm.askMenu_Bottom(l, 204, a);
    } else {
        if (status === c++) {
            if (k == 0) {
                var j = '#face' + f + '#';
                for (var c = 0; c < b.length; c++) {
                    j += ' #v' + b[c][0] + '##z' + b[c][0] + '#  #rx' + b[c][1] + '#n#k\r\n';
                }
                cm.sendNextNoESC_Bottom(j, a);
                status = -1;
            } else {
                if (k == 10) {
                    if (cm.getEventCount('一天一次') >= 1) {
                        status = -1;
                        cm.sendNextNoESC_Bottom('#face' + f + '# 不要贪心，今天已经完成了。', a);
                        return;
                    }
                    if (cm.getEventCount('萌新签到1', 1) != 1 || cm.getEventCount('萌新签到2', 1) != 1) {
                        status = -1;
                        cm.sendNextNoESC_Bottom('#face' + f + '# 必须完成前一天！', a);
                        return;
                    }
                    if (cm.getEventCount('萌新签到' + m + '', 1) < 1 && cm.getGamePoints() > 60 && cm.getPlayer().getLevel() >= 200 && cm.haveItem(4000001, 150)) {
                        var j = '#face' + f + '#您以获得如下奖励：\r\n';
                        for (var c = 0; c < b.length; c++) {
                            j += ' #v' + b[c][0] + '##z' + b[c][0] + '#  #rx' + b[c][1] + '#n#k\r\n';
                            cm.gainItem(b[c][0], b[c][1]);
                        }
                        cm.sendNextNoESC_Bottom(j, a);
                        status = -1;
                        cm.gainItem(4000001, -150);
                        cm.setEventCount('一天一次');
                        cm.setEventCount('萌新签到' + m + '', 1);
                    } else {
                        status = -1;
                        cm.sendNextNoESC_Bottom('#face' + f + '# 条件不满足，或者你已经领取过了哦！\r\n#b（每档只能领取一次）#k', a);
                    }
                }
            }
        }
    }
}
function action4(d, g, k, c) {
    var h = cm.getConstantScriptContent('菜单_NPC立绘');
    var e = Math.floor(Math.random() * h.length);
    var a = h[e][0];
    var f = randomNum(0, h[e][1]);
    var m = 4;
    var b = Array(Array(2435651, 99), Array(2049376, 99));
    if (status <= c++) {
        var l = '#face' + f + '##fn方正粗黑宋简体##fs16#\r\n';
        l += '   #r欢迎来到 ' + cm.getServerName() + ' 萌新签到系统！#k\r\n#fs14#';
        l += '	   #b当日在线时间（' + cm.getGamePoints() + '/60）#k\r\n';
        l += '	   #b最低游戏等级（' + cm.getPlayer().getLevel() + '/200）#k\r\n';
        l += '	   #b需要#z4000001#（#c4000001#/150）#k\r\n';
        l += '  #L0#' + 箭头特效 + '查看第' + m + '天奖励#l   #L10#' + 箭头特效 + '完成第' + m + '天签到#l\r\n';
        l += '\r\n';
        cm.askMenu_Bottom(l, 204, a);
    } else {
        if (status === c++) {
            if (k == 0) {
                var j = '#face' + f + '#';
                for (var c = 0; c < b.length; c++) {
                    j += ' #v' + b[c][0] + '##z' + b[c][0] + '#  #rx' + b[c][1] + '#n#k\r\n';
                }
                cm.sendNextNoESC_Bottom(j, a);
                status = -1;
            } else {
                if (k == 10) {
                    if (cm.getEventCount('一天一次') >= 1) {
                        status = -1;
                        cm.sendNextNoESC_Bottom('#face' + f + '# 不要贪心，今天已经完成了。', a);
                        return;
                    }
                    if (cm.getEventCount('萌新签到1', 1) != 1 || cm.getEventCount('萌新签到2', 1) != 1 || cm.getEventCount('萌新签到3', 1) != 1) {
                        status = -1;
                        cm.sendNextNoESC_Bottom('#face' + f + '# 必须完成前一天！', a);
                        return;
                    }
                    if (cm.getEventCount('萌新签到' + m + '', 1) < 1 && cm.getGamePoints() > 60 && cm.getPlayer().getLevel() >= 200 && cm.haveItem(4000001, 150)) {
                        var j = '#face' + f + '#您以获得如下奖励：\r\n';
                        for (var c = 0; c < b.length; c++) {
                            j += ' #v' + b[c][0] + '##z' + b[c][0] + '#  #rx' + b[c][1] + '#n#k\r\n';
                            cm.gainItem(b[c][0], b[c][1]);
                        }
                        cm.sendNextNoESC_Bottom(j, a);
                        status = -1;
                        cm.gainItem(4000001, -150);
                        cm.setEventCount('一天一次');
                        cm.setEventCount('萌新签到' + m + '', 1);
                    } else {
                        status = -1;
                        cm.sendNextNoESC_Bottom('#face' + f + '# 条件不满足，或者你已经领取过了哦！\r\n#b（每档只能领取一次）#k', a);
                    }
                }
            }
        }
    }
}
function action5(d, g, k, c) {
    var h = cm.getConstantScriptContent('菜单_NPC立绘');
    var e = Math.floor(Math.random() * h.length);
    var a = h[e][0];
    var f = randomNum(0, h[e][1]);
    var m = 5;
    var b = Array(Array(2049124, 999), Array(2340000, 999));
    if (status <= c++) {
        var l = '#face' + f + '##fn方正粗黑宋简体##fs16#\r\n';
        l += '   #r欢迎来到 ' + cm.getServerName() + ' 萌新签到系统！#k\r\n#fs14#';
        l += '	   #b当日在线时间（' + cm.getGamePoints() + '/60）#k\r\n';
        l += '	   #b最低游戏等级（' + cm.getPlayer().getLevel() + '/200）#k\r\n';
        l += '	   #b需要#z4000001#（#c4000001#/150）#k\r\n';
        l += '  #L0#' + 箭头特效 + '查看第' + m + '天奖励#l   #L10#' + 箭头特效 + '完成第' + m + '天签到#l\r\n';
        l += '\r\n';
        cm.askMenu_Bottom(l, 204, a);
    } else {
        if (status === c++) {
            if (k == 0) {
                var j = '#face' + f + '#';
                for (var c = 0; c < b.length; c++) {
                    j += ' #v' + b[c][0] + '##z' + b[c][0] + '#  #rx' + b[c][1] + '#n#k\r\n';
                }
                cm.sendNextNoESC_Bottom(j, a);
                status = -1;
            } else {
                if (k == 10) {
                    if (cm.getEventCount('一天一次') >= 1) {
                        status = -1;
                        cm.sendNextNoESC_Bottom('#face' + f + '# 不要贪心，今天已经完成了。', a);
                        return;
                    }
                    if (cm.getEventCount('萌新签到1', 1) != 1 || cm.getEventCount('萌新签到2', 1) != 1 || cm.getEventCount('萌新签到3', 1) != 1 || cm.getEventCount('萌新签到4', 1) != 1) {
                        status = -1;
                        cm.sendNextNoESC_Bottom('#face' + f + '# 必须完成前一天！', a);
                        return;
                    }
                    if (cm.getEventCount('萌新签到' + m + '', 1) < 1 && cm.getGamePoints() > 60 && cm.getPlayer().getLevel() >= 200 && cm.haveItem(4000001, 150)) {
                        var j = '#face' + f + '#您以获得如下奖励：\r\n';
                        for (var c = 0; c < b.length; c++) {
                            j += ' #v' + b[c][0] + '##z' + b[c][0] + '#  #rx' + b[c][1] + '#n#k\r\n';
                            cm.gainItem(b[c][0], b[c][1]);
                        }
                        cm.sendNextNoESC_Bottom(j, a);
                        status = -1;
                        cm.gainItem(4000001, -150);
                        cm.setEventCount('一天一次');
                        cm.setEventCount('萌新签到' + m + '', 1);
                    } else {
                        status = -1;
                        cm.sendNextNoESC_Bottom('#face' + f + '# 条件不满足，或者你已经领取过了哦！\r\n#b（每档只能领取一次）#k', a);
                    }
                }
            }
        }
    }
}
function action6(d, g, k, c) {
    var h = cm.getConstantScriptContent('菜单_NPC立绘');
    var e = Math.floor(Math.random() * h.length);
    var a = h[e][0];
    var f = randomNum(0, h[e][1]);
    var m = 6;
    var b = Array(Array(1113075, 1), Array(1132246, 1), Array(1122267, 1), Array(1032223, 1));
    if (status <= c++) {
        var l = '#face' + f + '##fn方正粗黑宋简体##fs16#\r\n';
        l += '   #r欢迎来到 ' + cm.getServerName() + ' 萌新签到系统！#k\r\n#fs14#';
        l += '	   #b当日在线时间（' + cm.getGamePoints() + '/60）#k\r\n';
        l += '	   #b最低游戏等级（' + cm.getPlayer().getLevel() + '/200）#k\r\n';
        l += '	   #b需要#z4000001#（#c4000001#/150）#k\r\n';
        l += '  #L0#' + 箭头特效 + '查看第' + m + '天奖励#l   #L10#' + 箭头特效 + '完成第' + m + '天签到#l\r\n';
        l += '\r\n';
        cm.askMenu_Bottom(l, 204, a);
    } else {
        if (status === c++) {
            if (k == 0) {
                var j = '#face' + f + '#';
                for (var c = 0; c < b.length; c++) {
                    j += ' #v' + b[c][0] + '##z' + b[c][0] + '#  #rx' + b[c][1] + '#n#k\r\n';
                }
                cm.sendNextNoESC_Bottom(j, a);
                status = -1;
            } else {
                if (k == 10) {
                    if (cm.getEventCount('一天一次') >= 1) {
                        status = -1;
                        cm.sendNextNoESC_Bottom('#face' + f + '# 不要贪心，今天已经完成了。', a);
                        return;
                    }
                    if (cm.getEventCount('萌新签到1', 1) != 1 || cm.getEventCount('萌新签到2', 1) != 1 || cm.getEventCount('萌新签到3', 1) != 1 || cm.getEventCount('萌新签到4', 1) != 1 || cm.getEventCount('萌新签到5', 1) != 1) {
                        status = -1;
                        cm.sendNextNoESC_Bottom('#face' + f + '# 必须完成前一天！', a);
                        return;
                    }
                    if (cm.getEventCount('萌新签到' + m + '', 1) < 1 && cm.getGamePoints() > 60 && cm.getPlayer().getLevel() >= 200 && cm.haveItem(4000001, 150)) {
                        var j = '#face' + f + '#您以获得如下奖励：\r\n';
                        for (var c = 0; c < b.length; c++) {
                            j += ' #v' + b[c][0] + '##z' + b[c][0] + '#  #rx' + b[c][1] + '#n#k\r\n';
                            cm.gainItem(b[c][0], b[c][1]);
                        }
                        cm.sendNextNoESC_Bottom(j, a);
                        status = -1;
                        cm.gainItem(4000001, -150);
                        cm.setEventCount('一天一次');
                        cm.setEventCount('萌新签到' + m + '', 1);
                    } else {
                        status = -1;
                        cm.sendNextNoESC_Bottom('#face' + f + '# 条件不满足，或者你已经领取过了哦！\r\n#b（每档只能领取一次）#k', a);
                    }
                }
            }
        }
    }
}
function action7(d, g, k, c) {
    var h = cm.getConstantScriptContent('菜单_NPC立绘');
    var e = Math.floor(Math.random() * h.length);
    var a = h[e][0];
    var f = randomNum(0, h[e][1]);
    var m = 7;
    var b = Array(Array(3994417, 99), Array(3994418, 99), Array(3994419, 99), Array(3994420, 99), Array(3994421, 99), Array(3994422, 99), Array(3994423, 99));
    if (status <= c++) {
        var l = '#face' + f + '##fn方正粗黑宋简体##fs16#\r\n';
        l += '   #r欢迎来到 ' + cm.getServerName() + ' 萌新签到系统！#k\r\n#fs14#';
        l += '	   #b当日在线时间（' + cm.getGamePoints() + '/60）#k\r\n';
        l += '	   #b最低游戏等级（' + cm.getPlayer().getLevel() + '/200）#k\r\n';
        l += '	   #b需要#z4000001#（#c4000001#/150）#k\r\n';
        l += '  #L0#' + 箭头特效 + '查看第' + m + '天奖励#l   #L10#' + 箭头特效 + '完成第' + m + '天签到#l\r\n';
        l += '\r\n';
        cm.askMenu_Bottom(l, 204, a);
    } else {
        if (status === c++) {
            if (k == 0) {
                var j = '#face' + f + '#';
                for (var c = 0; c < b.length; c++) {
                    j += ' #v' + b[c][0] + '##z' + b[c][0] + '#  #rx' + b[c][1] + '#n#k\r\n';
                }
                cm.sendNextNoESC_Bottom(j, a);
                status = -1;
            } else {
                if (k == 10) {
                    if (cm.getEventCount('一天一次') >= 1) {
                        status = -1;
                        cm.sendNextNoESC_Bottom('#face' + f + '# 不要贪心，今天已经完成了。', a);
                        return;
                    }
                    if (cm.getEventCount('萌新签到1', 1) != 1 || cm.getEventCount('萌新签到2', 1) != 1 || cm.getEventCount('萌新签到3', 1) != 1 || cm.getEventCount('萌新签到4', 1) != 1 || cm.getEventCount('萌新签到5', 1) != 1 || cm.getEventCount('萌新签到6', 1) != 1) {
                        status = -1;
                        cm.sendNextNoESC_Bottom('#face' + f + '# 必须完成前一天！', a);
                        return;
                    }
                    if (cm.getEventCount('萌新签到' + m + '', 1) < 1 && cm.getGamePoints() > 60 && cm.getPlayer().getLevel() >= 200 && cm.haveItem(4000001, 150)) {
                        var j = '#face' + f + '#您以获得如下奖励：\r\n';
                        for (var c = 0; c < b.length; c++) {
                            j += ' #v' + b[c][0] + '##z' + b[c][0] + '#  #rx' + b[c][1] + '#n#k\r\n';
                            cm.gainItem(b[c][0], b[c][1]);
                        }
                        cm.sendNextNoESC_Bottom(j, a);
                        status = -1;
                        cm.gainItem(4000001, -150);
                        cm.setEventCount('一天一次');
                        cm.setEventCount('萌新签到' + m + '', 1);
                    } else {
                        status = -1;
                        cm.sendNextNoESC_Bottom('#face' + f + '# 条件不满足，或者你已经领取过了哦！\r\n#b（每档只能领取一次）#k', a);
                    }
                }
            }
        }
    }
}
function action10086(d, c, b, a) {
    if (status <= a++) {
        cm.dispose();
        cm.openNpc(9900004);
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