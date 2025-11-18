var status = -1;
var selectionLog = [];
var npcs = [
    9400920,
    9400921,
    9401160
];
function start() {
    action(1, 0, 0);
}
function action(e, g, j) {
    if (status == 0 && e == 0) {
        cm.dispose();
        return;
    }
    e == 1 ? status++ : status--;
    selectionLog[status] = j;
    var c = cm.getNumberFromQuestInfo(500773, 'manager');
    var f = npcs[c];
    var k = cm.getNumberFromQuestInfo(500773, 's1');
    var h = cm.getNumberFromQuestInfo(500773, 's5');
    var a = parseInt(Math.floor(h / 20) + 1);
    var b = 10 + Math.floor(k / 2);
    var l = cm.getStringFromQuestInfo(500773, 'buffDate');
    var d = -1;
    if (status <= d++) {
        cm.dispose();
    } else {
        if (status === d++) {
            if (l.equals(cm.getNowTimeString(3))) {
                cm.sendNormalTalk_Bottom('#face0#今天的应援次数已经用完啦~明天再看看吧？', 36, f, false, true);
                cm.dispose();
            } else {
                cm.askMenu_Bottom('#face0#你知道我每天都在为你应援吧？今天需要什么帮助呢？\r\n\r\n#L80011827##b#s80011827# #q80011827##k#l\r\n#L80011830##b#s80011830# #q80011830##k#l\r\n#L80011831##b#s80011831# #q80011831##k#l\r\n#L80011832##b#s80011832# #q80011832##k#l', 132, f);
            }
        } else {
            if (status === d++) {
                if (selectionLog[1] == 80011827) {
                    cm.askAcceptDecline_Bottom('#face0#要以今天的增益领取#b#s80011827# #q80011827##k吗？\r\n\r\n#b※增加获得经验值' + (4 + a) + '% (可以和经验券等叠加应用) ( 技能等级' + a + ' )\r\n※ 持续时间: ' + b + '分#k', 36, f);
                } else {
                    if (selectionLog[1] == 80011830) {
                        cm.askAcceptDecline_Bottom('#face0#要以今天的增益领取#b#s80011830# #q80011830##k吗？\r\n\r\n#b※增加BOSS攻击力' + (9 + a) + '% ( 技能等级' + a + ' )\r\n※ 持续时间: ' + b + '分#k', 36, f);
                    } else {
                        if (selectionLog[1] == 80011831) {
                            cm.askAcceptDecline_Bottom('#face0#要以今天的增益领取#b#s80011831# #q80011831##k吗？\r\n\r\n#b※增加攻击力 / 魔力 ' + (12 + a * 3) + ' ( 技能等级' + a + ' )\r\n※ 持续时间: ' + b + '分#k', 36, f);
                        } else {
                            if (selectionLog[1] == 80011832) {
                                cm.askAcceptDecline_Bottom('#face0#要以今天的增益领取#b#s80011832# #q80011832##k吗？\r\n\r\n#b※增加暴击几率 ' + (8 + a * 2) + '% ( 技能等级' + a + ' )\r\n※ 持续时间: ' + b + '分#k', 36, f);
                            }
                        }
                    }
                }
            } else {
                if (status === d++) {
                    cm.sendNormalTalk_Bottom('#face0#啦啦~今天的增益怎么样？', 36, f, false, true);
                    cm.gainSkillBuff(selectionLog[1], 1, b * 60 * 1000);
                    cm.setStringForQuestInfo(500773, 'buffDate', cm.getNowTimeString(3));
                    cm.dispose();
                }
            }
        }
    }
}