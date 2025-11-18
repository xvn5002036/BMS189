var status = -1;
var minLevel = 20;
var maxLevel = 255;
var minPartySize = 2;
var maxPartySize = 6;
function action(g, h, j) {
    if (g == 1) {
        status++;
    } else {
        if (status == 0) {
            cm.dispose();
            return;
        }
        status--;
        if (status == 0) {
            if (cm.getParty() == null) {
                cm.askMenu('How about you and your party members collectively beating a quest? Here you\'ll find obstacles and problems where you won\'t be able to beat it unless with great teamwork. If you want to try it, please tell the #bleader of your party#k to talk to me.\r\n\r\n#rRequirements: ' + minPartySize + ' Party Members, all between level ' + minLevel + ' and level ' + maxLevel + '.');
            } else {
                if (!cm.isLeader()) {
                    cm.askMenu('If you want to try the quest, please tell the #bleader of your party#k to talk to me.');
                } else {
                    var c = cm.getParty().getMembers();
                    var k = cm.getMapId();
                    var f = true;
                    var i = 0;
                    var d = 0;
                    var e = c.iterator();
                    while (e.hasNext()) {
                        var l = e.next();
                        if (l.getLevel() >= minLevel && l.getLevel() <= maxLevel) {
                            i += 1;
                        } else {
                            f = false;
                        }
                        if (l.getMapId() == k) {
                            d += l.getJob() == 900 ? 6 : 1;
                        }
                    }
                    if (c.size() > maxPartySize || d < minPartySize) {
                        f = false;
                    }
                    if (f) {
                        var b = cm.getEventManager('HenesysPQ');
                        if (b == null) {
                            cm.askMenu('The PQ has encountered an error. Please report this on the forums, with a screenshot.');
                        } else {
                            var a = b.getNumberProperty('state');
                            if (a.equals('0') || a == null) {
                                b.startInstance(cm.getParty(), cm.getMap(), 70);
                                cm.removeAll(4001101);
                                cm.dispose();
                                return;
                            } else {
                                cm.askMenu('Another party has already entered the #rHilla Quest#k in this channel. Please try another channel, or wait for the current party to finish.');
                            }
                        }
                    } else {
                        cm.askMenu('Your party is invalid. Please adhere to the following requirements:\r\n\r\n#rRequirements: ' + minPartySize + ' Party Members, all between level ' + minLevel + ' and level ' + maxLevel + '.#b\r\n#L0#I want the Rice Cake Hat.#l');
                    }
                }
            }
        } else {
            if (cm.haveItem(1002798, 1)) {
                if (!cm.canHold(1003266, 1)) {
                    cm.sendOk('Make room for this Hat.');
                } else {
                    if (cm.haveItem(4001101, 20) && cm.isGMS()) {
                        cm.gainItem(1003266, 1);
                        cm.gainItem(4001101, -20);
                    } else {
                        cm.sendOk('Come back with 20 Rice Cakes.');
                    }
                }
            } else {
                if (!cm.canHold(1002798, 1)) {
                    cm.sendOk('Make room for this Hat.');
                } else {
                    if (cm.haveItem(4001101, 10)) {
                        cm.gainItem(4001101, -10);
                        cm.gainItem(1002798, 1);
                    } else {
                        cm.sendOk('Come back when you have 10 Rice Cakes.');
                    }
                }
            }
            cm.dispose();
        }
    }
}
function start() {
    status = -1;
    action(1, 0, 0);
}