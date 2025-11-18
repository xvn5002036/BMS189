var status = -1;
function action(e, c, b) {
    if (e == 1) {
        status++;
    } else {
        if (status == 0) {
            cm.dispose();
        }
        status--;
    }
    if (status == 0) {
        if (cm.getMap().getNumMonsters() <= 0) {
            cm.sendOk('There are no monsters in this map.');
            cm.dispose();
            return;
        }
        var d = 'Select which monster you wish to check.\r\n\r\n#b';
        var f = cm.getMap().getAllUniqueMonsters().iterator();
        while (f.hasNext()) {
            var a = f.next();
            d += '#L' + a + '##o' + a + '##l\r\n';
        }
        cm.askMenu(d);
    } else {
        if (status == 1) {
            cm.sendNext(cm.checkDrop(b));
            cm.dispose();
        }
    }
}
function start() {
    status = -1;
    action(1, 0, 0);
}