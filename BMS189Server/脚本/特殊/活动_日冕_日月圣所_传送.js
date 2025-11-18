function start() {
    status = -1;
    action(1, 0, 0);
}
function action(d, c, b) {
    if (d == 1) {
        status++;
    } else {
        status--;
    }
    var a = -1;
    if (status <= a++) {
        cm.dispose();
    } else {
        if (status === a++) {
            cm.sendNormalTalk('哪儿来的家伙在这里探头探脑的？还不赶紧滚！！？？？', 4, 9400965, false, true);
        } else {
            if (status === a++) {
                cm.playerMessage(5, '只有日冕2级以上的勇士才能使用日月圣所。');
                cm.dispose();
            }
        }
    }
}
var status = -1;