var status = -1;
function start() {
    action(1, 0, 0);
}
function action(d, b, a) {
    var c = cm.getPlayer().getItemAmount(4009234);
    var f = cm.getNpc();
    if (c >= 10) {
        var e = cm.getMap().getPortal(f).getPosition();
        cm.onTeleport(1, cm.getPlayer().getId(), e.getX(), e.getY());
        cm.getWeatherEffectNotice('你使用了10个黄色皮革。现在还剩下个' + c + '黄色皮革。', 147, 60000, 1);
    } else {
        cm.getWeatherEffectNotice('你身上只有' + c + '个黄色皮革，还不够激发传送点的。再去收集一些吧。', 147, 60000, 1);
    }
    cm.dispose();
}