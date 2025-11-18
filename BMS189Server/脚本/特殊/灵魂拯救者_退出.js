var status = -1;
var selectionLog = [];
function start() {
    action(1, 0, 0);
}
function action(e, d, c) {
    if (status == 0 && e == 0) {
        cm.dispose();
        return;
    }
    e == 1 ? status++ : status--;
    selectionLog[status] = c;
    var a = -1;
    if (status <= a++) {
        cm.dispose();
    } else {
        if (status === a++) {
            cm.warp(921172400, 0, false);
            cm.setInGameDirectionMode(true, false, true);
            cm.fieldEffect_SaveEff('Map/Effect2.img/event/gameover');
            cm.inGameDirectionEvent_AskAnswerTime(2500);
        } else {
            if (status === a++) {
                var b = cm.getNumberFromQuestInfo(16215, 'point');
                点数 = b;
                cm.sendNormalTalk_Bottom('拯救点数是#b#e' + b + '点#n#k！', 37, 3003381, true, true);
            } else {
                if (status === a++) {
                    点数1 = (点数 / 500).toFixed(0);
                    if (点数1 >= 1) {
                        cm.sendNormalTalk_Bottom('这么多的话，我可以给你#r#e' + 点数1 + '个灵魂币#n#k！', 37, 3003381, true, true);
                        cm.gainItem(4310235, 点数1);
                    } else {
                        cm.sendNormalTalk_Bottom('嗯……你没法多救几个朋友出来啊！', 37, 3003381, true, true);
                    }
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom('下次再来帮我哟！', 37, 3003381, true, true);
                    } else {
                        if (status === a++) {
                            cm.inGameDirectionEvent_SetHideEffect(0);
                            cm.setInGameDirectionMode(false, true, false);
                            cm.dispose();
                            cm.warp(450005000, 0, true);
                        }
                    }
                }
            }
        }
    }
}