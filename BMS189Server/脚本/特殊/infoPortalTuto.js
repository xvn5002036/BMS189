var status = -1;
function action(c, b, a) {
    if (c == 1) {
        status++;
    } else {
        status--;
    }
    if (status == 0) {
        cm.sendNextS('好像可以通过那个缝隙到外面去，不过有铁链挡着。尝试打断铁链吧。');
    } else {
        cm.effect_OnUserEff('UI/tutorial.img/22');
        cm.dispose();
    }
}
function start() {
    status = -1;
    action(1, 0, 0);
}