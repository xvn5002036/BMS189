var status = 0;
function start() {
    status = -1;
    action(1, 0, 0);
}
function action(d, b, a) {
    if (status == 0 && d == 0) {
        cm.dispose();
        return;
    }
    if (d == 1) {
        status++;
    } else {
        status--;
    }
    if (cm.getMapId() == 180000001) {
        cm.sendOk('很遗憾，您因为违反用户守则被禁止游戏活动，如有异议请联系管理员.');
        cm.dispose();
    } else {
        if (status == 0) {
            var c = '亲爱的#r#h ##k您好，我这里可以为您转职业#k\r\n';
            if (cm.getNumberFromQuestCustomData(99900) != 0) {
                c += '#b#L2##b我想变正常玩家职业#l\r\n';
            } else {
                c += '#b#L1##b如果你愿意，我会把你变成动物皮卡丘(品克缤职业)#l\r\n';
            }
            cm.askMenu(c);
        } else {
            if (status == 1) {
                switch (a) {
                case 1:
                    cm.getPlayer().getQuestNAdd(cm.getQuestById(99900)).setCustomData(cm.getJob());
                    cm.changeJob(13100);
                    cm.playerMessage(1, '神的力量已把你变成动物原形.');
                    cm.dispose();
                    break;
                case 2:
                    cm.changeJob(cm.getNumberFromQuestCustomData(99900));
                    cm.getPlayer().getQuestNAdd(cm.getQuestById(99900)).setCustomData('0');
                    cm.playerMessage(1, '已成功变回正常人.');
                    cm.dispose();
                    break;
                default:
                    cm.dispose();
                    cm.playerMessage(1, '#bselection#k' + a);
                }
            } else {
                if (status == 2) {
                    cm.dispose();
                    cm.playerMessage(1, '#bselection#k' + a);
                }
            }
        }
    }
}