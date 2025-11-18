var status = -1;
var selectionLog = [];
function start() {
    action(1, 0, 0);
}
function action(p, g, z) {
    var f = cm.getConstantScriptContent('菜单_NPC立绘');
    var h = Math.floor(Math.random() * f.length);
    var w = f[h][0];
    var k = randomNum(0, f[h][1]);
    if (cm.getzhizunvip() != 2) {
        cm.dispose();
        cm.playerMessage(1, '该菜单是至尊版专享。');
        return;
    }
    if (status == 0 && p == 0) {
        cm.dispose();
        return;
    }
    p == 1 ? status++ : status--;
    selectionLog[status] = z;
    var s = -1;
    if (status <= s++) {
        cm.dispose();
    } else {
        if (status === s++) {
            var o = ' #face' + k + '##fs18##r#fn微软雅黑#欢迎使用 ' + cm.getServerName() + ' 至尊版定点瞬移！#fs15#\r\n';
            o += ' 智能玩法说明:\r\n#k#b';
            if (cm.getPlayer().getInfoQuest(99993).isEmpty()) {
                o += ' #L0#激活瞬移功能:#l\r\n#k#b';
            } else {
                var n = cm.getNumberFromQuestInfo(99993, 'on');
                var j = cm.getNumberFromQuestInfo(99993, 'time');
                var v = cm.getNumberFromQuestInfo(99993, 'x1');
                var e = cm.getNumberFromQuestInfo(99993, 'y1');
                var u = cm.getNumberFromQuestInfo(99993, 'x2');
                var d = cm.getNumberFromQuestInfo(99993, 'y2');
                var t = cm.getNumberFromQuestInfo(99993, 'x3');
                var c = cm.getNumberFromQuestInfo(99993, 'y3');
                var r = cm.getNumberFromQuestInfo(99993, 'x4');
                var b = cm.getNumberFromQuestInfo(99993, 'y4');
                var q = cm.getNumberFromQuestInfo(99993, 'x5');
                var a = cm.getNumberFromQuestInfo(99993, 'y5');
                o += ' #L1#重置所有瞬移:#l\r\n#k#b';
                o += ' #L2#自动瞬移  ' + (n ? '已启用-点我关闭' : '已关闭-点我启用') + '#l\r\n#k#b';
                o += ' #L3#自动瞬移循环时间 ' + j + ' s #l\r\n#k#b';
                o += ' #L5#瞬移点1 x=' + v + '	y=' + e + '  修改#l #L10#手动  #l\r\n#k#b';
                o += ' #L6#瞬移点2 x=' + u + '	y=' + d + '  修改#l #L11#手动  #l\r\n#k#b';
                o += ' #L7#瞬移点3 x=' + t + '	y=' + c + '  修改#l #L12#手动  #l\r\n#k#b';
                o += ' #L8#瞬移点4 x=' + r + '	y=' + b + '  修改#l #L13#手动  #l\r\n#k#b';
                o += ' #L9#瞬移点5 x=' + q + '	y=' + a + '  修改#l #L14#手动  #l\r\n#k#b';
                o += '----------------------------------------------------------#k#b';
            }
            cm.askMenu_Bottom(o, 204, w);
        } else {
            if (status === s++) {
                switch (z) {
                case 0:
                    if (cm.getPlayer().getCSPoints(1) < 1000000) {
                        cm.playerMessage(1, '抱歉，你没足够的100W点卷！');
                        cm.dispose();
                    } else {
                        cm.getPlayer().modifyCSPoints(1, -1000000);
                        cm.getPlayer().updateInfoQuest(99993, 'time=5;on=0;count=0;x0=0;y0=0;x1=0;y1=0;x2=0;y2=0;x3=0;y3=0;x4=0;y4=0;x5=0;y5=0');
                        cm.playerMessage(1, '恭喜,瞬移功能已激活.');
                        cm.dispose();
                    }
                    break;
                case 1:
                    cm.getPlayer().updateInfoQuest(99993, 'time=5;on=0;count=0;x0=0;y0=0;x1=0;y1=0;x2=0;y2=0;x3=0;y3=0;x4=0;y4=0;x5=0;y5=0');
                    cm.playerMessage(1, '恭喜,瞬移功能已重置.');
                    cm.dispose();
                    break;
                case 2:
                    var n = cm.getNumberFromQuestInfo(99993, 'on');
                    cm.setNumberForQuestInfo(99993, 'on', n ? 0 : 1);
                    cm.playerMessage(1, n == 0 ? '自动瞬移功能已启用.' : '自动瞬移功能已关闭.');
                    cm.dispose();
                    break;
                case 3:
                    var j = cm.getNumberFromQuestInfo(99993, 'time');
                    if (j >= 20) {
                        cm.setNumberForQuestInfo(99993, 'time', 5);
                    } else {
                        cm.setNumberForQuestInfo(99993, 'time', j += 5);
                    }
                    cm.playerMessage(1, '恭喜,瞬移时间修改为 ' + cm.getNumberFromQuestInfo(99993, 'time') + ' s');
                    cm.dispose();
                    break;
                default:
                    if (z >= 10) {
                        var m = cm.getNumberFromQuestInfo(99993, 'x' + (z - 9));
                        var l = cm.getNumberFromQuestInfo(99993, 'y' + (z - 9));
                        cm.onTeleport(0, 3, cm.getPlayer().getId(), m, l);
                        cm.dispose();
                    } else {
                        cm.setNumberForQuestInfo(99993, 'x' + (z - 4), cm.getPlayer().getPosition().x);
                        cm.setNumberForQuestInfo(99993, 'y' + (z - 4), cm.getPlayer().getPosition().y);
                        var m = cm.getNumberFromQuestInfo(99993, 'x' + (z - 4));
                        var l = cm.getNumberFromQuestInfo(99993, 'y' + (z - 4));
                        cm.playerMessage(1, '恭喜,已记录当前坐标.  x=' + m + '   y=' + l);
                        cm.dispose();
                    }
                }
            } else {
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