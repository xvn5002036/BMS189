var status = -1;
var itemBorder = '#fUI/UIWindow.img/Item/New/inventory/0#';
var lock = '#v2200001#';
function start() {
    action(1, 0, 0);
}
function action(c, b, a) {
    if (cm.getNpc() == 2540012) {
        cm.getWeatherEffectNotice('哈哈，轻松取胜。刚才押注我这一边的人来领取回报吧。正确的眼光比徒劳的费力重要多了！', 150, 60000, 1);
    } else {
        if (cm.getNpc() == 2540014) {
            cm.getWeatherEffectNotice('真是小菜一碟。信任我并把蛋押在我这里的人来领取回报吧。虽然你们没出什么力。', 148, 60000, 1);
        }
    }
    cm.dispose();
}