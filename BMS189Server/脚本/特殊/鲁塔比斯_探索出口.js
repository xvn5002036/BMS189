var status = -1;
function start() {
    action(1, 0, 0);
}
function action(d, c, b) {
    status++;
    var a = -1;
    if (status <= a++) {
        cm.dispose();
    } else {
        if (status == a++) {
            cm.sendNextSNoESC('果然有出口。应该把这一事实告诉少女。');
            cm.dispose();
        } else {
            cm.dispose();
        }
    }
}