var status = -1;
function start() {
    action(1, 0, 0);
}
function action(e, c, b) {
    var d = cm.getNpc();
    if (cm.haveItem(d, 1)) {
        var f = cm.getPlayer().getLevel();
        var a = cm.getPlayer().getNeededExp();
        switch (d) {
        case 2436617:
        case 2450150:
            if (notValidLevel(100, 129)) {
                return;
            }
            cm.getPlayer().gainExp(a / 2, true, true, true);
            cm.useItem(2450154);
            break;
        case 2436618:
        case 2450151:
            if (notValidLevel(130, 159)) {
                return;
            }
            cm.getPlayer().gainExp(a / 2, true, true, true);
            cm.useItem(2450154);
            break;
        case 2436619:
        case 2450152:
            if (notValidLevel(160, 179)) {
                return;
            }
            cm.getPlayer().gainExp(a / 2, true, true, true);
            cm.useItem(2450154);
            break;
        case 2439267:
        case 2439560:
            if (notValidLevel(200, 99999)) {
                return;
            }
            if (f <= 209) {
                cm.getPlayer().levelUp();
            } else {
                cm.getPlayer().gainExp(6120258214, true, true, true);
            }
            break;
        case 2439268:
            if (notValidLevel(200, 99999)) {
                return;
            }
            if (f <= 219) {
                cm.getPlayer().levelUp();
            } else {
                cm.getPlayer().gainExp(33644667337, true, true, true);
            }
            break;
        case 2439269:
            if (notValidLevel(200, 99999)) {
                return;
            }
            if (f <= 229) {
                cm.getPlayer().levelUp();
            } else {
                cm.getPlayer().gainExp(120751015801, true, true, true);
            }
            break;
        }
        cm.gainItem(d, -1);
    }
    cm.dispose();
}
function notValidLevel(b, a) {
    var c = cm.getPlayer().getLevel();
    if (c < b || c > a) {
        cm.sendOkS('我已经无法再使用这瓶秘药了。');
        cm.dispose();
        return true;
    } else {
        return false;
    }
}