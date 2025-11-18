function start() {
    cm.askYesNo('结束战役.');
}
function action(c, b, a) {
    if (c == 1) {
        cm.warp(450012200, 0);
    }
    cm.dispose();
}