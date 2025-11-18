var status = -1;
function action(d, c, b) {
    status++;
    var a = -1;
    if (status <= a++) {
        cm.dispose();
    } else {
        if (status === a++) {
            cm.curNodeEventEnd(true);
            cm.setInGameDirectionMode(true, true);
            cm.setStandAloneMode(true);
            cm.forceCompleteQuest(42010);
            cm.inGameDirectionEvent_AskAnswerTime(30);
        } else {
            if (status === a++) {
                cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 1000, 0);
                cm.inGameDirectionEvent_AskAnswerTime(2000);
            } else {
                if (status === a++) {
                    cm.inGameDirectionEvent_Monologue('#fn黑体##fs22#你最终打败桃乐丝啦！真的太感谢了！不过……怎么回事？\r\n\r\n对塔的控制权还没到我的手上。\r\n\r\n我怎么感觉到这里还并没有结束。', 30000);
                } else {
                    if (status === a++) {
                        cm.curNodeEventEnd(true);
                        cm.setInGameDirectionMode(false, true);
                        cm.setStandAloneMode(false);
                        cm.getPlayer().dropMessage(5, '传送回起源之塔的大厅。');
                        cm.gainItem(1142685, 1);
                        cm.dispose();
                        cm.warp(992000000, 0);
                        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 100, 0, 0);
                    } else {
                        cm.dispose();
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