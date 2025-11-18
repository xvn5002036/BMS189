var status = 0;
function start() {
    status = -1;
    action(1, 0, 0);
}
function action(c, b, a) {
    if (c == 1) {
        status++;
    } else {
        if (status == 0) {
            cm.dispose();
            status--;
        }
    }
    if (status == 0) {
        if (cm.isQuestActive(34478)) {
            cm.dispose();
            cm.sendOk('#r你正在进行任务，请击败200个愤怒艾尔达!\r\n完成后去无名村找NPC“劳拉”。');
        } else {
            cm.askYesNo('#b想领取任务吗？\r\n[接受任务后无法放弃，考虑好了吗？]\r\n领取后我会送你去任务地图！');
        }
    } else {
        if (status == 1) {
            cm.forceStartQuest(34478);
            cm.dispose();
            cm.sendOk('#e#r已成功领取任务!\r\n请抓紧时间。。。');
        } else {
            cm.dispose();
            cm.sendOk('#e#r想好了再来找我');
        }
    }
}