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
            cm.teachSkill(1158, 1, 1);
            cm.teachSkill(10001158, 1, 1);
            cm.teachSkill(20001158, 1, 1);
            cm.teachSkill(20011158, 1, 1);
            cm.teachSkill(30001158, 1, 1);
            cm.teachSkill(80001078, 1, 1);
            cm.playerMessage(-1, '双击角色使用骑宠');
            cm.dispose();
        }
    }
}