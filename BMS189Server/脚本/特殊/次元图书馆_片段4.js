var status = -1;
var selectionLog = [];
function action(c, b, a) {
    if (cm.getNumberFromQuestInfo(32990, 'ep4') > 0) {
        action2(c, b, a);
    } else {
        action1(c, b, a);
    }
}
function action1(d, c, b) {
    if (d == 1) {
        status++;
    } else {
        status--;
    }
    var a = -1;
    if (status <= a++) {
        cm.dispose();
    } else {
        if (status === a++) {
            cm.askYesNo('你要阅读Ep4。<雪原吟游诗人>吗？', 4, 2500000);
        } else {
            if (status === a++) {
                cm.sendNormalTalk('你选择了#e雪原吟游诗人#n啊。做好准备进入被雪原上的暴风雪吹散的故事之中了吗？', 4, 2500000, false, true);
            } else {
                if (status === a++) {
                    cm.sendNormalTalk('#fNpc/2500001.img/stand/0#\r\n如果想从故事中回到现实，请随时点击我。我会一直在故事里的某处等你。\r\n\r\n#r(推荐在游戏时开启背景音乐。)', 4, 2500000, true, true);
                } else {
                    if (status === a++) {
                        cm.dispose();
                        cm.warp(306090000, 0);
                    }
                }
            }
        }
    }
}
function start() {
    status = -1;
    action(1, 0, 0);
}
function action2(d, c, b) {
    if (status == 0 && d == 0) {
        cm.dispose();
        return;
    }
    d == 1 ? status++ : status--;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose();
    } else {
        if (status === a++) {
            cm.askYesNo('你要阅读 Ep4。<雪原吟游诗人>吗？', 4, 2500000);
        } else {
            if (status === a++) {
                cm.dispose();
                cm.warp(cm.getNumberFromQuestInfo(32990, 'ep4'), 0, false);
            }
        }
    }
}