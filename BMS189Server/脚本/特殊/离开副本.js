function start() {
    cm.askYesNo('你现在是想离开这里吗?');
}
function action(d, c, b) {
    if (d == 1) {
        var a = cm.getSavedLocation('MULUNG_TC');
        if (a <= 0) {
            a = 100000000;
        }
        cm.warp(a);
        cm.dispose();
    }
    cm.dispose();
}