var status = -1;
var selectionLog = [];
function start() {
    action(1, 0, 0);
}
var npcs = [
    9400920,
    9400921,
    9401160
];
function action(g, k, l) {
    if (status == 0 && g == 0) {
        cm.dispose();
        return;
    }
    g == 1 ? status++ : status--;
    selectionLog[status] = l;
    var d = cm.getNumberFromQuestInfo(500773, 'manager');
    var j = npcs[d];
    var m = cm.getStringFromQuestInfo(500778, 'reward', '0,Count:1');
    var c = parseInt(m.split(',')[0]);
    var h = parseInt(m.split(',')[1].substr(6));
    var e = -1;
    if (status <= e++) {
        cm.dispose();
    } else {
        if (status === e++) {
            var f = cm.getQuestRecord(500778);
            f.setStatus(0);
            cm.getPlayer().updateQuest(f, true);
            cm.sendNormalTalk_Bottom('#face1#啦啦~！收集到了#b#i' + m + ':# #t' + m + '##k！', 36, j, false, true);
        } else {
            if (status === e++) {
                var b = new java.util.Date();
                var a = new java.text.SimpleDateFormat('yy/MM/dd/HH/mm').format(b);
                cm.updateInfoQuest(500778, 'last=' + a);
                var f = cm.getQuestRecord(500778);
                f.setStatus(0);
                cm.getPlayer().updateQuest(f, true);
                cm.gainItem(c, h);
                cm.fieldEffect_PlayFieldSound('Sound/Game.img/QuestClear', 100);
                cm.effect_OnUserEff('Effect/BasicEff.img/QuestClear');
                cm.dispose();
            }
        }
    }
}