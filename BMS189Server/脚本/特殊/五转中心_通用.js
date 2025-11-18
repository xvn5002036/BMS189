var status = -1;
function start() {
    action(1, 0, 0);
}
function action(c, b, a) {
    if (c == 0 && status == 0) {
        cm.dispose();
        return;
    }
    if (c == 1) {
        status++;
    } else {
        tatus--;
    }
    if (status == 0) {
        if (cm.isQuestFinished(1465)) {
            cm.dispose();
            cm.openUI(1131);
            if (!cm.getInfoQuest(39387).isEmpty() && cm.getNumberFromQuestInfo(39387, 'q') == 0) {
                cm.updateInfoQuest(39387, 'q=1');
            }
        } else {
            switch (cm.getJob()) {
            case 2002:
            case 3002:
            case 4002:
            case 6002:
            case 10000:
            case 11000:
            case 15002:
                cm.addPopupSay(9110002, 3000, '四转后200级再来吧。');
                cm.dispose();
                break;
            default:
                if (cm.getLevel() < 200) {
                    cm.addPopupSay(9110002, 3000, '五转要200级你忘记啦？');
                    cm.dispose();
                } else {
                    if (cm.getJob() % 10 == 2 || cm.getJob() == 2217 || cm.getJob() == 434) {
                        cm.askAcceptDecline('一键完成五转任务.\r\n费用（5,000,000）游戏币.\r\n\r\n#e#r#fn微软雅黑#（数据庞大请耐心等候！）#k#n');
                    } else {
                        cm.dispose();
                        cm.playerMessage(1, '四转之后再来\r\n职业' + cm.getJob() + '如还是报错联系管理');
                        return;
                    }
                }
            }
        }
    } else {
        if (status == 1) {
            if (cm.getMeso() < 5000000) {
                cm.sendOk('身上没有这么多钱。');
                cm.dispose();
                return;
            } else {
                cm.gainMeso(-5000000);
                cm.fieldEffect_SetObjectState('Effect/5skill.img/screen', 11);
                cm.fieldEffect_SetObjectState('Sound/SoundEff.img/5thJobd', 5);
                cm.effect_OnUserEff('Effect/5skill.img/character_delayed');
                cm.forceCompleteQuest(1465);
                cm.worldMessage('恭喜新玩家 “' + cm.getPlayer().getName() + '” 在拍卖处一键开启五转 并完成所有神秘河任务！！');
                cm.getPlayer().gainvCorePiece(600);
                cm.playerMessage(-1, '获得核心：600');
                cm.playerMessage(-1, '感到浑身充满力量！');
                cm.dispose();
            }
        }
    }
}