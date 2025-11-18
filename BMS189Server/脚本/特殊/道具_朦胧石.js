var status = -1;
var NPC = 2540000;
var timeBonus = [
    2 * 60 * 1000,
    4 * 60 * 1000,
    6 * 60 * 1000,
    8 * 60 * 1000,
    10 * 60 * 1000,
    2 * 60 * 1000,
    4 * 60 * 1000,
    8 * 60 * 1000,
    13 * 60 * 1000,
    16 * 60 * 1000
];
var 准备地图 = 992000000;
var itemBorder = '#fUI/UIWindow.img/Item/New/inventory/0#';
var lock = '#v2200001#';
function start() {
    action(1, 0, 0);
}
function action(g, d, c) {
    var e = cm.getNpc();
    if (cm.haveItem(e, 1) && e >= 2432438 && e <= 2432447) {
        if (cm.getMapId() != 992000000) {
            cm.playerMessage(5, '只有在起源之塔大厅里才能装备朦胧石。');
        } else {
            var f = 0;
            for (var b = 1; b <= 5; b++) {
                var h = cm.getNumberFromQuestInfo(42000, 'slot' + b, -1);
                if (h == -1) {
                    break;
                } else {
                    if (h == 0) {
                        f = b;
                        break;
                    }
                }
            }
            if (f == 0) {
                cm.playerMessage(5, '朦胧石栏位已经都装满了，无法再装备更多朦胧石。');
            } else {
                cm.gainItem(e, -1);
                var a = e <= 2432442 ? e - 2432438 + 1 : e - 2432443 + 101;
                cm.setNumberForQuestInfo(42000, 'slot' + f, a);
                cm.addNumberForQuestInfo(42011, 'time', timeBonus[e - 2432438]);
                cm.updateInfoQuest(42012, 'timeAtStart=' + Math.floor(time / 1000));
                cm.updateHeaderUI(1, 0, time, 0, time, 42011);
            }
        }
    }
    cm.dispose();
}