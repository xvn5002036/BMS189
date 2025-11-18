var text;
var status = -1;
var selectionLog = [];
var skillid = 0;
function start() {
    action(1, 0, 0);
}
function action(d, g, j) {
    var h = cm.getConstantScriptContent('菜单_NPC立绘');
    var e = Math.floor(Math.random() * h.length);
    var a = h[e][0];
    var f = randomNum(0, h[e][1]);
    if (status == 0 && d == 0) {
        cm.dispose();
        return;
    }
    d == 1 ? status++ : status--;
    selectionLog[status] = j;
    var b = -1;
    if (status <= b++) {
        cm.dispose();
    } else {
        if (status === b++) {
            text = '#face' + f + '##fn方正粗黑宋简体#';
            text += '     #fs17##r欢迎使用 ' + cm.getServerName() + ' 内面耀光技能#fs15#\r\n';
            text += '#L0#领取#i1032261# #b#t1032261##l\r\n\r\n';
            text += '#L1#内面耀光技能管理#l\r\n';
            cm.askMenu_Bottom(text, 204, a);
        } else {
            if (status === b++) {
                if (j == 0) {
                    cm.askAcceptDecline_Bottom('确定花费200W点卷购买 #i1032261# #b#t1032261#?', 204, a);
                } else {
                    cm.dispose();
                    cm.openNpc(9110002, '内面耀光技能管理');
                }
            } else {
                if (status === b++) {
                    if (cm.getPlayer().getCSPoints(1) < 2000000) {
                        cm.sendOk('抱歉，你没足够的200W点卷！');
                        cm.dispose();
                    } else {
                        var c = cm.gainGachaponItem(1032261, 1, '[内面耀光]', 3, true);
                        if (c != -1) {
                            cm.getPlayer().modifyCSPoints(1, -2000000);
                            cm.sendOk('恭喜您成功购买#i1032261# #b#t1032261##k。');
                            cm.dispose();
                        } else {
                            cm.sendOk('购买失败，请您确认在背包所有栏目窗口中是否有一格以上的空间。');
                        }
                    }
                } else {
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