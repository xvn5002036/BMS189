var status = -1;
var selectionLog = [];
function start() {
    action(1, 0, 0);
}
function action(d, c, b) {
    if (status == 0 && d == 0) {
        cm.dispose();
        return;
    }
    d == 1 ? status++ : status--;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose();
    } else {
        if (status === a++) {
            cm.sendNext('\r\n#L0#暴君西亚戴斯腰带#l\r\n#L1#暴君赫尔梅斯腰带#l\r\n#L2#暴君凯伦腰带#l\r\n#L3#暴君利卡昂腰带#l\r\n#L4#暴君阿尔泰腰带#l');
        } else {
            if (status === a++) {
                switch (b) {
                case 0:
                    cm.gainItem(1132174, 1);
                    cm.gainItem(2432531, -1);
                    cm.dispose();
                    break;
                case 1:
                    cm.gainItem(1132175, 1);
                    cm.gainItem(2432531, -1);
                    cm.dispose();
                    break;
                case 2:
                    cm.gainItem(1132176, 1);
                    cm.gainItem(2432531, -1);
                    cm.dispose();
                    break;
                case 3:
                    cm.gainItem(1132177, 1);
                    cm.gainItem(2432531, -1);
                    cm.dispose();
                    break;
                case 4:
                    cm.gainItem(1132178, 1);
                    cm.gainItem(2432531, -1);
                    cm.dispose();
                    break;
                default:
                    cm.dispose();
                    break;
                }
            }
        }
    }
}