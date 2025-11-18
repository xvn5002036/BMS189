var status = -1;
function action(d, c, b) {
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
            cm.askAcceptDecline('#b#h ##k，里恩出了点问题。冰川正在融化, 我需要你的帮助！来看看我！\r\n\r\n#b#e(接受后移动到里恩.)。', 1201000);
        } else {
            if (status === a++) {
                cm.sendNextNoESC('我在里恩见你。', 1201000);
            } else {
                if (status === a++) {
                    cm.forceStartQuest(32160);
                    cm.warp(140000000, 0);
                    cm.dispose();
                } else {
                    cm.dispose();
                }
            }
        }
    }
}
function start() {
    status = -1;
    action(1, 0, 0);
}