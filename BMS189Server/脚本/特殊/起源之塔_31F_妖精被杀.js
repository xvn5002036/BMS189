var status = -1;
function start() {
    action(1, 0, 0);
}
function action(c, b, a) {
    cm.getWeatherEffectNotice('糟糕，你误伤了一只蝴蝶精！这下它们愤怒的同伴一定会来找你麻烦的，小心了。', 147, 60000, 1);
    cm.dispose();
}