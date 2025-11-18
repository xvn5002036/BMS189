var status = -1;
var selectionLog = [];
function start() {
    action(1, 0, 0);
}
function action(c, b, a) {
    if (cm.getNumberFromQuestInfo(32990, 'ep5') > 0) {
        action2(c, b, a);
    } else {
        action1(c, b, a);
    }
}
function action1(e, c, b) {
    if (status == 0 && e == 0) {
        cm.dispose();
        return;
    }
    e == 1 ? status++ : status--;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose();
    } else {
        if (status === a++) {
            cm.askYesNo('Ep5. 你想阅读<影子炼金术士>吗？', 2500000);
        } else {
            if (status === a++) {
                cm.sendNext('你选择了#e影子炼金术士#n。做好进入在月光下缓缓流淌的故事世界的准备了吗？', 2500000);
            } else {
                if (status === a++) {
                    var d = cm.getJob();
                    if (Math.floor(d / 100) == 101) {
                        cm.sendNormalTalk('勇士，以你的情况，应该会有更加特别的体验。', 4, 2500000, true, true);
                    } else {
                        cm.sendNextPrev('#fNpc/2500001.img/stand/0#\r\n如果想从故事中回到现实，请随时点击我。我会出现在故事中的某处。\r\n\r\n#r（建议在游戏时打开背景音乐。）\r\n（神之子角色建议在180级之后执行。）', 2500000);
                    }
                } else {
                    if (status === a++) {
                        var d = cm.getJob();
                        if (Math.floor(d / 100) == 101) {
                            cm.sendNormalTalk('嗯？那是什么意思？', 17, 0, true, true);
                        } else {
                            cm.updateInfoQuest(32999, '10=h0;01=h0;20=h0;11=h0;21=h0;12=h0;03=h0;13=h0;04=h0;14=h0;05=h0;15=h0;06=h0;16=h0;07=h0;17=h0;18=h0;19=h0');
                            cm.warp(307090000);
                            cm.dispose();
                        }
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk('进入故事之后，你很快就会知道我的意思。', 4, 2500000, true, true);
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk('#fNpc/2500001.img/stand/0#\r\n如果想从故事中回到现实，请随时点击我。我会出现在故事中的某处。\r\n\r\n#r（建议在游戏时打开背景音乐。）\r\n（神之子角色建议在180级之后执行。）', 4, 2500000, true, true);
                            } else {
                                if (status === a++) {
                                    cm.updateInfoQuest(32999, '10=h0;01=h0;20=h0;11=h0;21=h0;12=h0;03=h0;13=h0;04=h0;14=h0;05=h0;15=h0;06=h0;16=h0;07=h0;17=h0;18=h0;19=h0');
                                    cm.dispose();
                                    cm.warp(307090000, 0, false);
                                }
                            }
                        }
                    }
                }
            }
        }
    }
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
            cm.askYesNo('你要阅读 Ep5。<影子炼金术士>吗？', 4, 2500000);
        } else {
            if (status === a++) {
                cm.dispose();
                cm.warp(cm.getNumberFromQuestInfo(32990, 'ep5'), 0, false);
            }
        }
    }
}