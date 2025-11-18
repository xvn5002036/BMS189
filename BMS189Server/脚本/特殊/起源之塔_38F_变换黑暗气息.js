var status = -1;
function start() {
    action(1, 0, 0);
}
function action(h, f, e) {
    var c = cm.getEventInstance();
    var b = c.getEventManager();
    var g = parseInt(b.getProperty('stage38_mob'));
    var d = cm.rand(9309020, 9309022);
    b.setProperty('stage38_mob', d);
    cm.fieldEffect_ScreenMsg('Map/Effect2.img/aquaris/38F_' + (d - 9309020 + 1));
    var a = [
        '猿公',
        '棕熊',
        '柔道猫熊'
    ];
    if (g == d) {
        cm.getWeatherEffectNotice('那些' + a[d - 9309020] + '正在释放着黑暗气息。', 153, 60000, 1);
    } else {
        cm.getWeatherEffectNotice('黑暗气息正在向' + a[d - 9309020] + '涌去。将' + a[d - 9309020] + '消灭，然后驱散黑暗气息。', 153, 60000, 1);
    }
    cm.dispose();
}