var 草地特效 = '#fItem/Cash/0501.img/05010056/effect/walk1/5#';
var 箭头特效 = '#fUI/UIWindow.img/Quest/icon2/0#';
var 任务特效 = '#fUI/UIWindow2.img/Quest/quest_info/summary_icon/summary#';
var Q特效 = '#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#';
var selects;
var mode;
var EventList = Array(Array('#b击败200个快乐艾尔达[#v1712001##z1712001#]#k#l', '击败200个快乐艾尔达'), Array('#b击败200个岩石艾尔达[#v1712001##z1712001#]#k#l', '击败200个岩石艾尔达'), Array('#b击败200个火焰艾尔达[#v1712001##z1712001#]#k#l', '击败200个火焰艾尔达'));
function start() {
    status = -1;
    action(1, 0, 0);
}
function action(e, c, b) {
    if (status >= 0 && e == 0) {
        cm.dispose();
        return;
    }
    if (e == 1) {
        status++;
    } else {
        status--;
    }
    if (cm.getzhizunvip() != 2) {
        cm.dispose();
        cm.playerMessage(1, '该菜单是至尊版专享。');
        return;
    }
    if (status == 0) {
        var d = '' + 任务特效 + '\r\n为了维持神秘河的稳定，请你为冒险岛世界出一份力：\r\n#b';
        for (var a = 0; a < EventList.length; a++) {
            d += '#L' + a + '#' + Q特效 + '' + EventList[a][0] + '\r\n';
        }
        cm.sendNext(d);
    } else {
        if (status == 1) {
            selects = b;
            e = EventList[selects][1];
            if (EventList[selects][1] >= 10000) {
                cm.openNpc(e);
            } else {
                cm.dispose();
                cm.openNpc(3003104, e);
            }
        }
    }
}