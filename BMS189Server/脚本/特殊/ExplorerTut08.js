var status = -1;
function action(c, b, a) {
    if (c == 1) {
        status++;
    } else {
        status--;
    }
    if (status == 0) {
        cm.sendNextS('这枫叶是什么? 这么看来在枫之岛上有巨大的枫树吧. 这枫叶是一路跟着我到这的吗?');
    } else {
        if (status == 1) {
            cm.sendNextPrevS('这个也算是纪念，我会好好保存的. 夹在#b 冒险之书#k中间就不会变皱了.');
        } else {
            if (status == 2) {
                cm.sendNextPrevS('点选键盘设定钮设定剧情书热键后,打开书柜确认#e#b\'冒险之书\'#k#n吧.');
            } else {
                if (status == 3) {
                    cm.topMsg('获得了冒险之书.');
                    cm.openUI(191);
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