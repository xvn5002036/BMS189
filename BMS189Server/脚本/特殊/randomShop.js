function start() {
    cm.getPlayer().makeNewAzwanShop();
    cm.getPlayer().openAzwanShop();
    cm.dispose();
}
function action(c, b, a) {
    cm.dispose();
}
var status = -1;