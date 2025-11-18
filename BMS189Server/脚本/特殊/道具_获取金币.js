var status = -1;
function start() {
    action(1, 0, 0);
}
function action(d, b, a) {
    var c = cm.getNpc();
    if (cm.haveItem(c, 1)) {
        switch (c) {
        case 2436614:
            cm.gainMeso(cm.rand(10000, 100000));
            break;
        case 2436615:
            cm.gainMeso(cm.rand(100000, 1000000));
            break;
        case 2436616:
            cm.gainMeso(cm.rand(1000000, 10000000));
            break;
        }
        cm.gainItem(c, -1);
    }
    cm.dispose();
}