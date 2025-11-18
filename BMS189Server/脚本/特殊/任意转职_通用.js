var status = -1;
var selectionLog = [];
function start() {
    action(1, 0, 0);
}
function action(h, f, e) {
    var c = cm.getConstantScriptContent('菜单_NPC立绘');
    var b = Math.floor(Math.random() * c.length);
    var a = c[b][0];
    var g = randomNum(0, c[b][1]);
    if (status == 0 && h == 0) {
        cm.dispose();
        return;
    }
    h == 1 ? status++ : status--;
    selectionLog[status] = e;
    var d = -1;
    if (status <= d++) {
        cm.dispose();
    } else {
        if (status === d++) {
            cm.askText_Bottom('#face' + g + '##fn方正粗黑宋简体# 你想转成什么职业？支持模糊查询。#fs15#\r\n  #b如：御剑骑士、黑骑、434、002', a);
        } else {
            if (status === d++) {
                if (cm.getText() == '') {
                    cm.playerMessage(-1, '请输入关键字！');
                    cm.effect_NormalSpeechBalloon('请输入关键字', 1, 0, 0, 3000, 0, 0);
                    cm.dispose();
                    return;
                }
                list = cm.getSearchData(7, cm.getText());
                if (list == null) {
                    cm.getTopMsgFont('搜索不到信息', 3, 20, 4, 0, 0);
                    cm.dispose();
                    return;
                }
                if (!cm.foundData(7, cm.getText())) {
                    cm.dispose();
                    return;
                }
                cm.askMenu_Bottom('#face' + g + '#' + cm.searchData(7, cm.getText()), 204, a);
            } else {
                if (status === d++) {
                    selects = e;
                    cm.askAcceptDecline_Bottom('#face' + g + '# 确定转职为[' + selects + ']职业吗？', a);
                } else {
                    if (status === d++) {
                        cm.playerMessage(5, '当前职业：' + selects);
                        cm.getTopMsgFont('当前职业' + selects, 3, 20, 20, 0);
                        cm.changeJob(selects);
                        cm.dispose();
                    }
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