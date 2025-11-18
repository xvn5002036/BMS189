var status = -1;
var selectionLog = [];
var infoQuest = 500862;
function start() {
    action(1, 0, 0);
}
function action(e, d, c) {
    if (status == 0 && e == 0) {
        cm.dispose();
        return;
    }
    e == 1 ? status++ : status--;
    selectionLog[status] = c;
    var b = -1;
    if (status <= b++) {
        cm.dispose();
    } else {
        if (status === b++) {
            cm.openUI(1251);
            cm.askYesNo('要使用#r#e加速器#n#k吗？\r\n#b#e100秒内将额外召唤怪物！#n#k\r\n加速真正的狩猎！\r\n\r\n#e<无法使用的情况>#n\r\n 1. 不存在等级范围怪物的区域或村庄。\r\n 2. 召唤精英怪物时。\r\n 3. 当前自身使用加速器中。', 4, 9010010);
        } else {
            if (status === b++) {
                if (cm.getMap().getNumSpawnPoints() == 0 || !cm.getMap().hasLevelRangeMob(cm.getPlayer()) || cm.getMap().hasEliteMob()) {
                    cm.sendOk('这里无法使用加速器。', 9010010);
                    cm.dispose();
                    return;
                }
                if (cm.getNumberFromQuestInfo(infoQuest, 'boosterOn') == 1) {
                    cm.sendOk('目前已经在使用加速器了。', 9010010);
                    cm.dispose();
                    return;
                }
                cm.fieldEffect_Clear('Effect/EventEffect.img/HasteBooster/startEff');
                cm.fieldEffect_PlayFieldSound('Sound/SoundEff.img/HasteBooster/count', 100);
                var a = cm.addNumberForQuestInfo(infoQuest, 'booster', -1, 0, 9);
                cm.setNumberForQuestInfo(infoQuest, 'boosterOn', 1);
                cm.playerMessage(5, '使用了加速器。剩余使用次数 : ' + a);
                cm.fieldEffect_PlayFieldSound('Sound/SoundEff.img/HasteBooster/start', 100);
                cm.加速_使用加速器();
                cm.dispose();
            }
        }
    }
}