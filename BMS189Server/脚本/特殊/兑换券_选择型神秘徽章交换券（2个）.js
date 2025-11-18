var A = Array(Array(1712001, 0), Array(1712002, 0), Array(1712003, 0), Array(1712004, 0), Array(1712005, 0), Array(1712006, 0));
var selects;
var status = -1;
var selectionLog = [];
function start() {
    action(1, 0, 0);
}
function action(f, d, b) {
    if (status == 0 && f == 0) {
        cm.dispose();
        return;
    }
    f == 1 ? status++ : status--;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose();
    } else {
        if (status === a++) {
            var e = '\r\n你需要哪个徽章？\r\n';
            for (var a = 0; a < A.length; a++) {
                e += '#L' + a + '# #v' + A[a] + '##z' + A[a] + '##l\r\n';
            }
            cm.sendNextNoESC(e);
        } else {
            if (status === a++) {
                selects = b;
                for (var g = 0; g < 2; g++) {
                    cm.gainItem(A[selects][0], 1);
                }
                cm.dispose();
            }
        }
    }
}