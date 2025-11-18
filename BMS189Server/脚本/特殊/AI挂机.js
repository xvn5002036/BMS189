var status = -1;
var selectionLog = [];
function start() {
    action(1, 0, 0);
}
function action(e, h, k) {
    var j = cm.getConstantScriptContent('菜单_NPC立绘');
    var f = Math.floor(Math.random() * j.length);
    var b = j[f][0];
    var g = randomNum(0, j[f][1]);
    var l = cm.getPlayer().获取AI智能机器人cid();
    var c = cm.getOnlineCharacterById(l);
    if (status == 0 && e == 0) {
        cm.dispose();
        return;
    }
    e == 1 ? status++ : status--;
    selectionLog[status] = k;
    var d = -1;
    if (status <= d++) {
        cm.dispose();
    } else {
        if (status === d++) {
            text = ' #face' + g + '##fs18##r#fn微软雅黑#欢迎使用 ' + cm.getServerName() + ' 智能AI系统！#fs15#\r\n';
            if (c != null) {
                if (c.getAPI().getInfoQuest(60001).isEmpty()) {
                    c.getAPI().updateInfoQuest(60001, 'exp=0;meso=0');
                    cm.saveToDB(c);
                }
                text += '智能AI 在线时间:' + c.getAPI().getGamePoints() + '分钟\r\n';
                text += '智能AI ' + (c.getAPI().getNumberFromQuestInfo(60000, 'guaji') > 0 ? '已启用挂机\r\n' : '未启用挂机\r\n');
                text += '#L0#' + (c.getAPI().getNumberFromQuestInfo(60000, 'guaji') > 0 ? '关闭挂机' : '启用挂机') + '(获得的经验主人可以领取)#l\r\n';
                text += '#L1#智能AI 挂机经验值:' + c.getAPI().getNumberFromQuestInfo(60001, 'exp') + (c.getAPI().getNumberFromQuestInfo(60001, 'exp') > 0 ? '可领取' : '') + ' #l\r\n';
                cm.askMenu_Bottom(text, 204, b);
            }
        } else {
            if (status === d++) {
                switch (k) {
                case 0:
                    var a = c.getAPI().getNumberFromQuestInfo(60000, 'guaji');
                    if (a > 0) {
                        c.getAPI().setNumberForQuestInfo(60000, 'guaji', 0);
                        cm.saveToDB(c);
                        cm.AIChat(l, '主人我已取消在线挂机,跟随主人下线!');
                    } else {
                        c.getAPI().setNumberForQuestInfo(60000, 'guaji', 100);
                        cm.AIChat(l, '主人我已启用在线挂机,不会下线!');
                    }
                    cm.dispose();
                    break;
                case 1:
                    var m = c.getAPI().getNumberFromQuestInfo(60001, 'exp');
                    if (m > 0) {
                        c.getAPI().setNumberForQuestInfo(60001, 'exp', 0);
                        cm.saveToDB(c);
                        cm.AIChat(l, '主人我的经验已全部给你了!');
                    } else {
                        cm.AIChat(l, '主人我还没有经验,别急嘛!');
                    }
                    cm.dispose();
                    break;
                }
            } else {
                if (status === d++) {
                    cm.dispose();
                } else {
                    cm.dispose();
                }
            }
        }
    }
}
function randomNum(b, a) {
    switch (arguments.length) {
    case 1:
        return parseInt(Math.random() * b + 1, 10);
        break;
    case 2:
        return parseInt(Math.random() * (a - b + 1) + b, 10);
        break;
    default:
        return 0;
        break;
    }
}