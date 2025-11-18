function start() {
    if (cm.getzhizunvip() != 2) {
        cm.dispose();
        cm.playerMessage(-1, '该功能是至尊版专享。');
        return;
    } else {
        cm.dispose();
        cm.openNpc(0, '作弊器');
    }
}