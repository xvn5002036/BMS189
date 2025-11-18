var A = Array(Array(1712001, 0), Array(1712002, 0), Array(1712003, 0), Array(1712004, 0), Array(1712005, 0), Array(1712006, 0));
var selects;
var status = -1;
var selectionLog = [];
function start() {
    action(1, 0, 0);
}
function action(e, c, b) {
    if (status == 0 && e == 0) {
        cm.dispose();
        return;
    }
    e == 1 ? status++ : status--;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose();
    } else {
        if (status === a++) {
            var d = '\r\n你需要哪个徽章？\r\n';
            for (var a = 0; a < A.length; a++) {
                d += '#L' + a + '# #v' + A[a] + '##z' + A[a] + '##l\r\n';
            }
            cm.sendNextNoESC(d);
        } else {
            if (status === a++) {
                selects = b;
                cm.gainItem(selects, 1);
                cm.dispose();
            }
        }
    }
}