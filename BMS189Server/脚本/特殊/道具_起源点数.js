var status = -1;
function start() {
    action(1, 0, 0);
}
function action(f, c, b) {
    var d = cm.getNpc();
    if (cm.haveItem(d, 1)) {
        switch (d) {
        case 2432503:
            var e = cm.rand(1, 10);
            break;
        case 2432502:
            var e = cm.rand(10, 100);
            break;
        case 2432464:
            var e = cm.rand(100, 1000);
            break;
        }
        var a = cm.addNumberForQuestInfo(42003, 'point', e);
        cm.playerMessage(5, '获得了' + e + '点起源点数。现在拥有的起源点数为' + a + '点。');
        cm.gainItem(d, -1);
    }
    cm.dispose();
}