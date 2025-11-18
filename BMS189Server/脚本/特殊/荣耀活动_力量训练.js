var status = -1;
var selectionLog = [];
function start() {
    status = -1;
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
            if (cm.getMapId() == 993120400) {
                cm.askMenu('要参与哪一项训练呢？\r\n#L0# #b战术研究（增加荣耀点数）#k#l\r\n#L1# #b模拟对决（提高经验值）#k#l', 24, 0);
            } else {
                cm.sendOkS('得在#b荣耀特攻队练武场#k内才能进行#b力量训练#k。');
                cm.dispose();
            }
        } else {
            if (status === a++) {
                cm.setNumberForQuestInfo(100321, 'type', b + 1);
                if (b == 0) {
                    cm.SitOnDummyPortableChair(3018380, 1);
                } else {
                    cm.SitOnDummyPortableChair(3018359, 1);
                }
                cm.dispose();
            }
        }
    }
}