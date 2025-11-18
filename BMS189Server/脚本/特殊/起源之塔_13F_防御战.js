var status = -1;
var itemBorder = '#fUI/UIWindow.img/Item/New/inventory/0#';
var lock = '#v2200001#';
function start() {
    action(1, 0, 0);
}
function action(d, b, a) {
    var c = [
        '绿色花牛',
        '白刺熊',
        '褐刺熊',
        '蓝色花牛'
    ];
    var e = cm.getNpc();
    if (e < 0 || e > c.length) {
        cm.dispose();
        return;
    }
    if (e == 0) {
        cm.getMap().getWeatherEffectNotice('那边' + c[e] + '出现了。要将它们全部消灭，注意不要漏掉！', 147, 30000, 1);
    } else {
        if (e == 1) {
            cm.getMap().getWeatherEffectNotice('这次出现的是' + c[e] + '。请将它们全部消灭，一个也不要漏掉。', 147, 30000, 1);
        } else {
            if (e == 2) {
                cm.getMap().getWeatherEffectNotice(c[e] + '也出现了。就要结束了，不要掉以轻心，将它们全部消灭。', 147, 30000, 1);
            } else {
                cm.getMap().getWeatherEffectNotice('所有的怪物全部出动了。这是最后一次了，再加把劲。', 147, 30000, 1);
            }
        }
    }
    cm.dispose();
}