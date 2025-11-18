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
            cm.sendNext('\r\n#L0#暴君西亚戴斯鞋子#l\r\n#L1#暴君赫尔梅斯鞋子#l\r\n#L2#暴君凯伦鞋子#l\r\n#L3#暴君利卡昂鞋子#l\r\n#L4#暴君阿尔泰鞋子#l');
        } else {
            if (status === a++) {
                switch (b) {
                case 0:
                    cm.gainItem(1072743, 1);
                    cm.gainItem(2432506, -1);
                    cm.dispose();
                    break;
                case 1:
                    cm.gainItem(1072744, 1);
                    cm.gainItem(2432506, -1);
                    cm.dispose();
                    break;
                case 2:
                    cm.gainItem(1072745, 1);
                    cm.gainItem(2432506, -1);
                    cm.dispose();
                    break;
                case 3:
                    cm.gainItem(1072746, 1);
                    cm.gainItem(2432506, -1);
                    cm.dispose();
                    break;
                case 4:
                    cm.gainItem(1072747, 1);
                    cm.gainItem(2432506, -1);
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