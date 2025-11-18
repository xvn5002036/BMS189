function start() {
    cm.sendNextSNoESC('It was like... a small shining light...');
}
function action(c, b, a) {
    cm.setInGameDirectionMode(false);
    cm.warp(913070002, 0);
    cm.dispose();
}
var status = -1;