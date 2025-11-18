var status = -1;
var itemBorder = '#fUI/UIWindow.img/Item/New/inventory/0#';
var lock = '#v2200001#';
function start() {
    action(1, 0, 0);
}
function action(f, c, b) {
    cm.removeAll(2432448);
    var a = [
        'r',
        'g',
        'b',
        'y'
    ];
    var d = a[cm.rand(0, a.length - 1)];
    var e = cm.rand(1, 8);
    cm.effect_OnUserEff('Effect/OnUserEff.img/aquarisTower/cardChange/' + d);
    cm.effect_LastingEff('Effect/OnUserEff.img/aquarisTower/card/' + d + '/' + e, 1, 0, 1);
    cm.setNumberForQuestInfo(42006, 'r', e == 8 ? 8 : 0);
    cm.setNumberForQuestInfo(42006, 'g', e == 8 ? 8 : 0);
    cm.setNumberForQuestInfo(42006, 'b', e == 8 ? 8 : 0);
    cm.setNumberForQuestInfo(42006, 'y', e == 8 ? 8 : 0);
    cm.setNumberForQuestInfo(42006, d, e);
    cm.dispose();
}