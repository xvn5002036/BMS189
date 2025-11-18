var 跳跳地图 = Array(Array(100000202, '射手村-宠物公园'), Array(220000006, '玩具城-宠物公园'), Array(280020000, '冰峰雪域-扎二'), Array(109040001, '冒险岛活动'), Array(910130000, '魔法密林-忍苦树林'), Array(910530000, '林中之城-韧性之林'), Array(910530200, '林中之城-韧性之林'), Array(910360000, '废弃都市-地铁B1'), Array(910360100, '废弃都市-地铁B2'), Array(910360200, '废弃都市-地铁B3'));
var status = -1;
var selectionLog = [];
var select;
var MapType;
var event = '#fUI/CashShop.img/CSEffect/event/0#';
var icon = '#fUI/Basic.img/BtMin2/normal/0#';
var fanghui = false;
var text = '请选择您要传送的地方：\r\n#r#e';
function start() {
    action(1, 0, 0);
}
function action(d, c, b) {
    if (status == 0 && d == 0) {
        cm.dispose();
        return;
    }
    d == 1 ? status++ : status--;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose();
    } else {
        if (status === a++) {
            for (var a = 0; a < 跳跳地图.length; a++) {
                text += '#L' + a + '# ' + icon + ' #m' + 跳跳地图[a][0] + '# (' + 跳跳地图[a][1] + ')\r\n';
            }
            MapType = 0;
            fanghui = true;
            cm.askMenu(text);
        } else {
            if (status === a++) {
                select = b;
                cm.askYesNo('在这里的事情办完了？确定要传送到您想去的地方吗？');
            } else {
                if (status === a++) {
                    cm.warp(跳跳地图[select][0]);
                    cm.dispose();
                }
            }
        }
    }
}