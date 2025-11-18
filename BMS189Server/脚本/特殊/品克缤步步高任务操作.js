var status = -1;
var selectionLog = [];
function start() {
    action(1, 0, 0);
}
function action(f, d, c) {
    if (status == 0 && f == 0) {
        cm.dispose();
        return;
    }
    f == 1 ? status++ : status--;
    selectionLog[status] = c;
    var b = -1;
    if (status <= b++) {
        cm.dispose();
    } else {
        if (status === b++) {
            var a = cm.getNumberFromQuestInfo(100565, 'stepNum') + 1;
            var e = '';
            if (cm.isQuestFinished(100565 + a)) {
                cm.forceCompleteQuest(100565 + a);
                if (!cm.isQuestFinished(100578)) {
                    cm.forceStartQuest(100565 + a + 1, '');
                }
                cm.updateInfoQuest(100565, 'stepNum=0;questNum=100567');
                cm.updateInfoQuest(100565, 'stepNum=' + a + ';questNum=100567');
                cm.setAccountQuestInfo(244, 'StepUp=' + a);
                e += '要一鼓作气，进入下一阶段吗？\r\n下面是这个！\r\n\r\n#b#e<第' + (a + 1) + '阶段步步高任务>#n#k\r\n';
                switch (a) {
                case 1:
                    cm.gainItem(2435742, 1);
                    e += '#e- 连续击杀达到300次#n\r\n';
                    break;
                case 2:
                    cm.gainItem(5044020, 1);
                    e += '#e- 等级达到50级#n\r\n';
                    if (cm.getLevel() >= 30) {
                        cm.forceCompleteQuest(100565 + a + 1);
                    }
                    break;
                case 3:
                    cm.gainItem(4001211, 1);
                    e += '#e- 消灭999只等级范围怪物#n\r\n';
                    break;
                case 4:
                    cm.gainItem(5071000, 10);
                    e += '#e- 等级达到70级#n\r\n';
                    if (cm.getLevel() >= 70) {
                        cm.forceCompleteQuest(100565 + a + 1);
                    }
                    break;
                case 5:
                    cm.gainItem(2710000, 1);
                    e += '#e- 使用2次符文#n\r\n';
                    break;
                case 6:
                    cm.gainItem(2631818, 1);
                    e += '#e- 到达100级#n\r\n';
                    if (cm.getLevel() >= 100) {
                        cm.forceCompleteQuest(100565 + a + 1);
                    }
                    break;
                case 7:
                    cm.gainItem(2534000, 1);
                    e += '#e- 通关2次怪物公园#n\r\n';
                    break;
                case 8:
                    cm.gainItem(2631822, 1);
                    e += '#e- 等级达到150级#n\r\n';
                    if (cm.getLevel() >= 150) {
                        cm.forceCompleteQuest(100565 + a + 1);
                    }
                    break;
                case 9:
                    cm.gainItem(2431938, 1);
                    e += '#e- 消灭5只精英怪物#n\r\n';
                    break;
                case 10:
                    cm.gainItem(2431938, 1);
                    e += '#e- 星之力达到50以上#n\r\n';
                    break;
                case 11:
                    cm.gainItem(2048724, 10);
                    e += '#e- 消灭C级品克缤#n\r\n';
                    break;
                case 12:
                    cm.gainItem(2048723, 10);
                    e += '#e- 到达200级#n\r\n';
                    if (cm.getLevel() >= 200) {
                        cm.forceCompleteQuest(100565 + a + 1);
                    }
                    break;
                case 13:
                    cm.gainItem(3700287, 1);
                    e += '#e- 已完结#n\r\n';
                    break;
                }
                cm.sendNormalTalk(e, 2, 0, true, false);
                cm.dispose();
            } else {
                cm.dispose();
                cm.sendNormalTalk('还未完成阶段' + a + '任务！', 2, 0, false, false);
            }
        } else {
            cm.dispose();
        }
    }
}