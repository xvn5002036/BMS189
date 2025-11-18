var status = -1;
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
            cm.curNodeEventEnd(true);
            cm.setInGameDirectionMode(true, false, true);
            cm.setStandAloneMode(true);
            cm.inGameDirectionEvent_AskAnswerTime(500);
        } else {
            if (status === a++) {
                cm.inGameDirectionEvent_OneTimeAction(2000, 0);
                cm.inGameDirectionEvent_头顶图片(['Skill/40000.img/skill/400001011/effect'], [
                    0,
                    0,
                    0
                ]);
                cm.inGameDirectionEvent_头顶图片(['Skill/40000.img/skill/400001012/effect'], [
                    0,
                    0,
                    0
                ]);
                cm.inGameDirectionEvent_头顶图片(['Skill/40000.img/skill/400001013/effect'], [
                    0,
                    0,
                    0
                ]);
                cm.inGameDirectionEvent_头顶图片(['Skill/40000.img/skill/400001014/effect'], [
                    0,
                    0,
                    0
                ]);
                cm.inGameDirectionEvent_头顶图片(['Skill/40000.img/skill/400001015/effect'], [
                    0,
                    0,
                    0
                ]);
                cm.inGameDirectionEvent_头顶图片(['Skill/40000.img/skill/400001019/effect'], [
                    0,
                    0,
                    0
                ]);
                cm.inGameDirectionEvent_头顶图片(['Skill/40000.img/skill/400001020/effect'], [
                    0,
                    0,
                    0
                ]);
                cm.inGameDirectionEvent_头顶图片(['Skill/40000.img/skill/400001021/effect'], [
                    0,
                    0,
                    0
                ]);
                cm.inGameDirectionEvent_AskAnswerTime(3000);
            } else {
                if (status === a++) {
                    cm.curNodeEventEnd(true);
                    cm.setInGameDirectionMode(false, true);
                    cm.setStandAloneMode(false);
                    cm.addPlayeramuont();
                    cm.effect_NormalSpeechBalloon('\r\n#fs30#恭喜:已成功成为<' + cm.getXiuxianname() + '>', 1, 1, 0, 4000, 0, 0);
                    cm.worldSpouseMessage(36, '『修仙系统』：【' + cm.getPlayer().getName() + '】已成功修仙为<' + cm.getXiuxianname() + '>...');
                    cm.broadcastServerMsg(5122015, '『修仙系统』：【' + cm.getPlayer().getName() + '】已成功修仙为<' + cm.getXiuxianname() + '>...', true);
                    cm.dispose();
                } else {
                    cm.dispose();
                }
            }
        }
    }
}
function start() {
    status = -1;
    action(1, 0, 0);
}