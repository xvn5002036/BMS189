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
            cm.askText_Bottom('#face' + g + '##fn方正粗黑宋简体# 你想刷什么怪物？支持模糊查询。#fs15#\r\n  #b如：扎昆、希拉、100000、888', a);
        } else {
            if (status === d++) {
                if (cm.getText() == '') {
                    cm.playerMessage(-1, '请输入关键字！');
                    cm.effect_NormalSpeechBalloon('请输入关键字', 1, 0, 0, 3000, 0, 0);
                    cm.dispose();
                    return;
                }
                list = cm.getSearchData(4, cm.getText());
                if (list == null) {
                    cm.getTopMsgFont('搜索不到信息', 3, 20, 4, 0, 0);
                    cm.dispose();
                    return;
                }
                if (!cm.foundData(4, cm.getText())) {
                    cm.dispose();
                    return;
                }
                cm.askMenu_Bottom('#face' + g + '#' + cm.searchData(4, cm.getText()), 204, a);
            } else {
                if (status === d++) {
                    selects = e;
                    cm.askNumber_Bottom('#face' + g + '# 选中的怪物为#o' + selects + '#\r\n请输入召唤数量：', a, 1, 1, 300);
                } else {
                    if (status === d++) {
                        cm.spawnMonster(selects, e);
                        cm.getTopMsgFont('召唤怪物：' + selects + ' x' + e + '个', 3, 20, 20, 0);
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