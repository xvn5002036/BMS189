var status = -1;
var itemBorder = '#fUI/UIWindow.img/Item/New/inventory/0#';
var lock = '#v2200001#';
function start() {
    action(1, 0, 0);
}
function action(d, b, a) {
    var c = cm.getPlayer().getPosition().x < 544;
    if (c) {
        cm.effect_OnUserEff('Effect/OnUserEff.img/aquarisTower/arrow/goLeft');
    } else {
        cm.effect_OnUserEff('Effect/OnUserEff.img/aquarisTower/arrow/goRight');
    }
    cm.dispose();
}