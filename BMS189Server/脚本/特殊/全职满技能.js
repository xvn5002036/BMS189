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
            cm.满技能();
            cm.teachSkill(8, 1, 1);
            cm.teachSkill(80001000, 1, 1);
            if (cm.getzhizunvip() != 2) {
                cm.gainItem(2430191, 1);
            } else {
                cm.gainItem(2431305, 1);
            }
            cm.getTopMsgFont('获得[新手套装箱]一个！', 3, 20, 4, 0, 0);
            cm.effect_Text(['#fn黑体 ExtraBold##fs26# 学会了更多技能'], [
                180,
                4500,
                4,
                0,
                0,
                1,
                4,
                0,
                0,
                0
            ]);
            cm.dispose();
        }
    }
}