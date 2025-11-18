var status;
var slot;
var invv;
var selected;
var statsSel;
var slot2;
var invv2;
var selected2;
var statsSel2;
function start() {
    status = -1;
    slot = Array();
    action(1, 0, 0);
}
function action(k, n, p) {
    if (k != 1) {
        cm.dispose();
        return;
    }
    status++;
    switch (status) {
    case 0:
        var a = 'I can help you scroll an item:\r\n\r\n#b';
        var j = cm.getInventory(1);
        for (var h = 0; h <= j.getSlotLimit(); h++) {
            slot.push(h);
            var g = j.getItem(h);
            if (g == null) {
                continue;
            }
            var m = g.getItemId();
            a += '#L' + (1000 + h) + '##v' + m + '##t' + m + '##l\r\n';
        }
        cm.askMenu(a + '#k');
        break;
    case 1:
        invv = p / 1000 | 0;
        selected = p % 1000 | 0;
        var o = cm.getInventory(invv);
        if (selected >= o.getSlotLimit()) {
            cm.sendOk('Error, please try again.');
            cm.dispose();
            return;
        }
        statsSel = o.getItem(slot[selected]);
        if (statsSel == null) {
            cm.sendOk('Error, please try again.');
            cm.dispose();
            return;
        }
        cm.askYesNo('You want to scroll #v' + statsSel.getItemId() + '##t' + statsSel.getItemId() + '#?');
        break;
    case 2:
        var l = 'Choose your scroll:\r\n\r\n#b';
        var f = cm.getInventory(1);
        for (var e = 0; e <= f.getSlotLimit(); e++) {
            slot2.push(e);
            var d = f.getItem(e);
            if (d == null) {
                continue;
            }
            var c = d.getItemId();
            a += '#L' + (1000 + e) + '##v' + c + '##t' + c + '##l\r\n';
        }
        cm.askMenu(l + '#k');
        break;
    case 3:
        invv2 = p / 1000 | 0;
        selected2 = p % 1000 | 0;
        var b = cm.getInventory(invv2);
        if (selected2 >= b.getSlotLimit()) {
            cm.sendOk('Error, please try again.');
            cm.dispose();
            return;
        }
        statsSel2 = b.getItem(slot2[selected2]);
        if (statsSel2 == null) {
            cm.sendOk('Error, please try again.');
            cm.dispose();
            return;
        }
        cm.askYesNo('You want to use #v' + statsSel2.getItemId() + '##t' + statsSel2.getItemId() + '#?');
        break;
    case 4:
        if (cm.scrollItem(slot2[selected2], slot1[selected1])) {
            cm.sendOk('Item Scrolled Successfully!');
        } else {
            cm.sendOk('You cannot use that scroll on that item.');
        }
        cm.dispose();
        break;
    }
}
var status = -1;