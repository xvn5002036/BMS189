var status = -1;
function action(c, b, a) {
    status++;
    switch (cm.getMapId()) {
    case 993010000:
        cm.getPlayer().modifyCSPoints(1, 10000 * cm.getMap().getCharacters().size());
        cm.dispose();
        break;
    default:
        break;
    }
    cm.gainItem(2430051, 1);
    cm.gainItem(2430069, 1);
    cm.dispose();
}
function start() {
    status = -1;
    action(1, 0, 0);
}