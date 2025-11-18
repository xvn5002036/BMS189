var status = -1;
var p;
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
            cm.setInGameDirectionMode(true, false, false);
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
                    p = cm.getPlayer();
                    cm.setInGameDirectionMode(false, true);
                    cm.effect_NormalSpeechBalloon('\r\n#fs30#恭喜:当前转数<' + cm.getRepairquency() + '>', 1, 1, 0, 4000, 0, 0);
                    cm.worldSpouseMessage(36, '『转生系统』 : 恭喜' + cm.getPlayer().getName() + ',转生了' + cm.getRepairquency() + '次,他又变强大了,羡慕吧!极品装备又进了一步');
                    cm.playerMessage(1, '您做得非常好, 您已经成功转生了,您现在的属性点情况如下：\r\n   力量: ' + p.getStats().getStr() + ' 点\r\n   敏捷: ' + p.getStats().getDex() + ' 点\r\n   智力: ' + p.getStats().getInt() + ' 点\r\n   运气: ' + p.getStats().getLuk() + ' 点\r\n   未分配的AP: ' + p.getRemainingAp() + ' 点');
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