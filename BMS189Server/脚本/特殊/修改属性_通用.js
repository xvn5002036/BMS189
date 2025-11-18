var status = -1;
var selectionLog = [];
function start() {
    action(1, 0, 0);
}
function action(c, f, h) {
    var g = cm.getConstantScriptContent('菜单_NPC立绘');
    var d = Math.floor(Math.random() * g.length);
    var a = g[d][0];
    var e = randomNum(0, g[d][1]);
    if (status == 0 && c == 0) {
        cm.dispose();
        return;
    }
    c == 1 ? status++ : status--;
    selectionLog[status] = h;
    var b = -1;
    if (status <= b++) {
        cm.dispose();
    } else {
        if (status === b++) {
            var j = ' #face' + e + '##fs18##r#fn微软雅黑#欢迎使用 ' + cm.getServerName() + ' 修改属性#fs15#\r\n#b';
            j += '  #L5#【最大HP】#l#L6#【最大MP】#l\r\n';
            j += '  #L1#【力量】#l#L2#【敏捷】#l#L3#【智力】#l#L4#【运气】#l\r\n';
            cm.askMenu_Bottom(j, 204, a);
        } else {
            if (status === b++) {
                selects = h;
                switch (selects) {
                case 1:
                case 2:
                case 3:
                case 4:
                    cm.askNumber_Bottom('#face' + e + '# 输入目标属性值(上限3W2)\r\n', a, 0, 0, 32767);
                    break;
                case 5:
                    cm.askNumber_Bottom('#face' + e + '# 输入目标血量值(上限50W)\r\n', a, 0, 0, 500000);
                    break;
                case 6:
                    cm.askNumber_Bottom('#face' + e + '# 输入目标蓝量值(上限50W)\r\n', a, 0, 0, 500000);
                    break;
                }
            } else {
                if (status === b++) {
                    cm.修改能力属性(selects, h);
                    cm.getTopMsgFont('修改属性：' + h + '', 3, 20, 20, 0);
                    cm.effect_NormalSpeechBalloon('修改成功', 1, 0, 0, 3000, 0, 0);
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