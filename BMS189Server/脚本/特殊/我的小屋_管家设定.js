var status = -1;
var selectionLog = [];
function start() {
    action(1, 0, 0);
}
var npcs = [
    9400920,
    9400921,
    9401160
];
var quests = [
    64607,
    64607,
    65444
];
function action(e, h, l) {
    if (status == 0 && e == 0) {
        cm.dispose();
        return;
    }
    e == 1 ? status++ : status--;
    selectionLog[status] = l;
    var b = cm.getNumberFromQuestInfo(500773, 'manager');
    var g = npcs[b];
    var c = cm.getNumberFromQuestInfo(500773, 'managerHide');
    var d = -1;
    if (status <= d++) {
        cm.dispose();
    } else {
        if (status === d++) {
            var f = c == 0 ? '隐藏管家' : '显示管家';
            cm.askMenu_Bottom('#face0#我能帮你做些什么呢？\r\n\r\n#L1##b' + f + '#k#l\r\n#L2##b变更管家#k#l\r\n#L3##b变更管家放置位置#k#l', 132, g);
        } else {
            if (status === d++) {
                if (selectionLog[1] == 1) {
                    if (c == 0) {
                        if (b == 0) {
                            cm.sendNormalTalk_Bottom('#face0#什么啊~你要让我离开一会吗？切，没办法了呢……那你可要快点叫我来哦？', 36, g, false, true);
                        } else {
                            if (b == 1) {
                                cm.sendNormalTalk_Bottom('#face0#那我就暂时离开了！如果想我了就马上叫我哦！', 36, g, false, true);
                            } else {
                                cm.sendNormalTalk_Bottom('#face0#行，那我先暂时离开了。有事情记得找我哦！', 36, g, false, true);
                            }
                        }
                        cm.setNumberForQuestInfo(500773, 'managerHide', 1);
                    } else {
                        if (b == 0) {
                            cm.sendNormalTalk_Bottom('#face0#啦啦~！我又回来了！想我了吧？', 36, g, false, true);
                        } else {
                            if (b == 1) {
                                cm.sendNormalTalk_Bottom('#face0#你办完事情了？能回到家可真好呢！', 36, g, false, true);
                            } else {
                                cm.sendNormalTalk_Bottom('#face0#回来啦？想我了吗？', 36, g, false, true);
                            }
                        }
                        cm.setNumberForQuestInfo(500773, 'managerHide', 0);
                    }
                    cm.dispose();
                } else {
                    if (selectionLog[1] == 2) {
                        var m = '#face0#你要变更管家吗？嗯……\r\n好吧，你要变更为谁呢？\r\n';
                        for (var d = 0; d < npcs.length; d++) {
                            if (g != npcs[d] && cm.isQuestFinished(quests[d])) {
                                m += '\r\n#L' + d + '##b#p' + npcs[d] + '##k#l';
                            }
                        }
                        cm.askMenu_Bottom(m, 132, g);
                    } else {
                        if (selectionLog[1] == 3) {
                            cm.askAcceptDecline_Bottom('#face0#要不要换个位置？哪里比较好呢？\r\n\r\n#r※ 将管家的位置变为当前角色所在位置。', 36, g);
                        }
                    }
                }
            } else {
                if (status === d++) {
                    if (selectionLog[1] == 2) {
                        cm.sendNormalTalk_Bottom('#face0#好的，那今后就请多多指教了！', 36, npcs[l], false, true);
                        cm.setNumberForQuestInfo(500773, 'manager', l);
                        cm.dispose();
                    } else {
                        if (selectionLog[1] == 3) {
                            cm.sendNormalTalk_Bottom('#face0#好的！以后这里就是我的位置了啊？', 36, g, false, true);
                            var k = cm.getPlayer().getPosition().x;
                            var j = cm.getPlayer().getPosition().y;
                            var a = cm.getPlayer().isFacingLeft();
                            cm.npc_LeaveField('manager');
                            cm.npc_LeaveField(9400930);
                            cm.npc_ChangeController(9400930, 'manager', k, j, a, false, false);
                            cm.setNumberForQuestInfo(500767, 'managerXpos', k);
                            cm.setNumberForQuestInfo(500767, 'managerYpos', j);
                            cm.setNumberForQuestInfo(500767, 'facing', a);
                            cm.dispose();
                        }
                    }
                } else {
                    cm.dispose();
                }
            }
        }
    }
}