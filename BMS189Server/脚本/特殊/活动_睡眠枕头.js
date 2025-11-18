var status = -1;
var selectionLog = [];
function start() {
    action(1, 0, 0);
}
function action(f, c, b) {
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
            var d = cm.getNpc();
            var e = d * 73118;
            cm.gainExp(e);
            cm.setStringForAccountQuestInfo(217, 'T', cm.getNowTimeString(6));
            cm.sendNormalTalk('收下梦境，获得了 #b#e' + cm.formatNumberWithComma(e) + '#k#n经验值！', 2, 0, false, true);
            cm.fieldEffect_PlayFieldSound('Sound/SoundEff.img/PinkBean/expectation', 100);
            cm.closeUI(1207);
            cm.dispose();
        }
    }
}