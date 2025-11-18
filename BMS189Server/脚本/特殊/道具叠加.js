var status = -1;
var selectionLog = [];
var itemList = new Array();
var inventoryType;
var deleteSlot;
var deleteQuantity;
var 道具数量;
var head = '#fUI/UIWindow2.img/Quest/quest_info/summary_icon/summary#\r\n';
function start() {
    action(1, 0, 0);
}
function action(h, d, c) {
    if (status == 0 && h == 0) {
        cm.dispose();
        return;
    }
    h == 1 ? status++ : status--;
    selectionLog[status] = c;
    var b = -1;
    if (status <= b++) {
        cm.dispose();
    } else {
        if (status === b++) {
            itemList = cm.getInventory(2).list().iterator();
            text = head + '#e- 请选择要叠加的道具 -#n\r\n\r\n#b';
            var a = 1;
            while (itemList.hasNext()) {
                var f = itemList.next();
                var e = f.getPosition();
                var g = f.getItemId();
                deleteQuantity = cm.getItemQuantity(g);
                if (deleteQuantity > 1) {
                    text += '#L' + e + '##v' + g + '#';
                    if (a > 1 && a % 5 == 0) {
                        text += '\r\n';
                    }
                    a++;
                }
            }
            cm.askMenu(text);
        } else {
            if (status === b++) {
                var f = cm.getInventory(2).getItem(c);
                deleteSlot = c;
                deleteQuantity = cm.getItemQuantity(f.getItemId());
                text = head + '#e确定要叠加#r#v' + f.getItemId() + '##z' + f.getItemId() + '# ' + deleteQuantity + '个 #k吗？';
                cm.sendNextPrev(text);
            } else {
                if (status === b++) {
                    var f = cm.getInventory(2).getItem(deleteSlot);
                    deleteQuantity = cm.getItemQuantity(f.getItemId());
                    cm.gainItem(f.getItemId(), -deleteQuantity);
                    cm.gainItem(f.getItemId(), deleteQuantity);
                    cm.sendOk(head + '叠加成功，祝你游戏愉快~');
                    status = 0;
                } else {
                    cm.dispose();
                }
            }
        }
    }
}