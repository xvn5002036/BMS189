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
    var b = -1;
    if (status <= b++) {
        cm.dispose();
    } else {
        if (status === b++) {
            var a = cm.getNumberFromAccountQuestInfo(227, 'passCount', 0);
            if (a > 0) {
                if (cm.getPlayer().getCSPoints(0) >= 1800) {
                    cm.askYesNo('要使用#b黄金图章#k则需要#r1800抵用券#k！确定要使用吗？');
                } else {
                    cm.dispose();
                    cm.sendNormalTalk('要使用#b黄金图章#k则需要#r1800抵用券#k！', 4, 9000029, false, false);
                }
            } else {
                cm.dispose();
                cm.sendOk('没有需要补签的记录了。', 9000029);
            }
        } else {
            if (status === b++) {
                cm.getPlayer().modifyCSPoints(1, 0, -1800);
                cm.sendOk('完成补签！盖上了#b1个#k图章！', 9000029);
                cm.addNumberForAccountQuestInfo(227, 'day', 1);
                cm.addNumberForAccountQuestInfo(227, 'passCount', -1);
            }
        }
    }
}