var status = -1;
var questid = 200100;
var playerid = 0;
function start() {
    action(1, 0, 0);
}
function action(d, c, b) {
    if (d == 1) {
        status++;
    } else {
        if (status >= 0) {
            cm.dispose();
            return;
        }
        status--;
    }
    if (status == 0) {
        playerid = cm.getPlayer().getId();
        if (cm.MissionStatus(playerid, questid, 0, 4)) {
            if (!cm.MissionStatus(playerid, questid, 0, 0)) {
                var a = cm.MissionGetMobId(playerid, questid);
                cm.warp(a);
                cm.gainItem(2430030, -1);
                cm.dispose();
                cm.getPlayer().dropMessage(1, '快打开口袋看看，藏着什么好东西！');
            } else {
                cm.sendOk('你还没有接取寻宝任务呢，想去哪？');
                cm.dispose();
            }
        } else {
            cm.sendOk('你还没有接取寻宝任务呢，想去哪？');
            cm.dispose();
        }
    }
}