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
            cm.sendNormalTalk('有一天晚上，听到奇怪的声音后打开窗户一看，有巨大的火球从天而降！！', 0, 9390008, false, true);
        } else {
            if (status === a++) {
                cm.sendNormalTalk('赶到这里后发现那个巨大的火球是宇宙飞船…还发现里面有数量庞大的生命体。而且，还发现很可怕的家伙。如果找不到那家伙，说不定冒险岛世界会有大事情。', 0, 9390008, true, true);
            } else {
                if (status === a++) {
                    cm.sendNormalTalk('所以我在找愿意进入宇宙飞船内部的最强冒险家，帮助我寻找那家伙的痕迹。', 0, 9390008, true, true);
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk('方法很简单。\r\n在5个房间各在5分钟内#打败#b#e\'180只外星访问者\'#k#n就行了。\r\n当然，如果有首领怪出现，#b#e只打败首领怪#k#n就可以了。如果能非常成功地调查宇宙船内部，就给你\'惊人的经验值\'。\r\n你…要帮我吗？', 0, 9390008, true, true);
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk('但，要记住宇宙飞船每天只能探索10次。', 0, 9390008, true, true);
                            cm.dispose();
                        }
                    }
                }
            }
        }
    }
}