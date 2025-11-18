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
            cm.askText_Bottom('#face' + g + '##fn方正粗黑宋简体# 你想管理什么任务？支持模糊查询。#fs15#\r\n  #b如：传递信件、回到、1005、10', a);
        } else {
            if (status === d++) {
                if (cm.getText() == '') {
                    cm.playerMessage(-1, '请输入关键字！');
                    cm.effect_NormalSpeechBalloon('请输入关键字', 1, 0, 0, 3000, 0, 0);
                    cm.dispose();
                    return;
                }
                list = cm.getSearchData(5, cm.getText());
                if (list == null) {
                    cm.getTopMsgFont('搜索不到信息', 3, 20, 4, 0, 0);
                    cm.dispose();
                    return;
                }
                if (!cm.foundData(5, cm.getText())) {
                    cm.dispose();
                    return;
                }
                cm.askMenu_Bottom('#face' + g + '#' + cm.searchData(5, cm.getText()), 204, a);
            } else {
                if (status === d++) {
                    selects = e;
                    cm.askMenu_Bottom('#face' + g + '# 选中的任务为' + cm.getQuestById(selects) + '\r\n 请选择需要执行的操作：\r\n#fn方正粗黑宋简体##fs18##L0#开始任务#l  #L1#完成任务#l', 204, a);
                } else {
                    if (status === d++) {
                        if (e == 0) {
                            cm.startQuest(selects);
                            cm.getTopMsgFont('开始任务：' + selects + '', 3, 20, 20, 0);
                            cm.dispose();
                        } else {
                            if (e == 1) {
                                cm.completeQuest(selects);
                                cm.getTopMsgFont('完成任务：' + selects + '', 3, 20, 20, 0);
                                cm.dispose();
                            }
                        }
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