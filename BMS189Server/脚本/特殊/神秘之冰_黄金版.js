var rewardItemId = new Array(new Array(2432005, false, false), new Array(4310088, true, false), new Array(4310036, true, false), new Array(1012420, false, false), new Array(1212085, false, false), new Array(2001530, true, false), new Array(2001531, true, false), new Array(2001527, false, false), new Array(1022205, false, false), new Array(2000005, false, false), new Array(2001519, true, false), new Array(4310088, true, false), new Array(2000005, false, false), new Array(2001520, true, false), new Array(2041014, false, false), new Array(2001521, true, false), new Array(2001522, true, false), new Array(2000005, false, false), new Array(2040514, false, false), new Array(4310088, true, false), new Array(2000005, false, false), new Array(2040517, false, false), new Array(2040502, false, false), new Array(2000005, false, false), new Array(2000005, false, false), new Array(4310088, true, false), new Array(4310036, true, false), new Array(2000005, false, false), new Array(2000005, false, false), new Array(2000005, false, false), new Array(2000005, false, false), new Array(2000005, false, false), new Array(2001523, true, false), new Array(2000005, false, false), new Array(2040806, false, false), new Array(2000005, false, false), new Array(2000005, false, false), new Array(2041039, false, false), new Array(2043302, false, false), new Array(2001524, true, false), new Array(2001525, true, false), new Array(2000005, false, false), new Array(4310088, true, false), new Array(2000005, false, false), new Array(2000005, false, false), new Array(2001526, true, false), new Array(2001527, true, false), new Array(2000005, false, false), new Array(2000005, false, false), new Array(2001528, true, false), new Array(2045215, false, false), new Array(2000005, false, false), new Array(2001529, true, false), new Array(2000000, true, false), new Array(2000001, true, false), new Array(2000005, false, false), new Array(2000005, false, false), new Array(2000005, false, false), new Array(2000005, false, false), new Array(2044902, false, false), new Array(2000002, true, false), new Array(2000003, true, false), new Array(2000005, false, false), new Array(2000004, true, false));
var rewardItemQuantity = new Array(1, 2, 3, 4, 5);
function start() {
    var a = Math.floor(Math.random() * rewardItemId.length);
    var c = rewardItemId[a][0];
    var d = rewardItemId[a][1] ? rewardItemQuantity[Math.floor(Math.random() * rewardItemQuantity.length)] : 1;
    var b = Math.floor(Math.random() * 100);
    if (b == 6) {
        c = 5062000;
        d = 1;
    }
    if (cm.getSpace(1) < 1 && cm.getSpace(2) < 1 && cm.getSpace(3) < 1 && cm.getSpace(4) < 1 && cm.getSpace(5) < 1) {
        cm.playerMessage(-1, '背包满了，请清理后再打开。');
        cm.dispose();
        return;
    }
    cm.gainItem(c, d);
    if (rewardItemId[a][2]) {
        cm.worldSpouseMessage(32, '『神秘之冰』 : 恭喜  ' + cm.getPlayer().getName() + ' 从 <神秘之冰RED> 获得 ' + cm.getItemName(c) + ' ' + d + ' 个。');
    }
    cm.gainItem(2431887, -1);
    cm.dispose();
}
var status = -1;