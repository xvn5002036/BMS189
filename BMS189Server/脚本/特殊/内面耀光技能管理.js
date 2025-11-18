var text;
var status = -1;
var selectionLog = [];
var skillid = 0;
function start() {
    action(1, 0, 0);
}
function action(c, g, j) {
    var h = cm.getConstantScriptContent('菜单_NPC立绘');
    var d = Math.floor(Math.random() * h.length);
    var a = h[d][0];
    var f = randomNum(0, h[d][1]);
    if (status == 0 && c == 0) {
        cm.dispose();
        return;
    }
    c == 1 ? status++ : status--;
    selectionLog[status] = j;
    var b = -1;
    if (status <= b++) {
        cm.dispose();
    } else {
        if (status === b++) {
            var e = cm.getItemByPosition(-104);
            if (e.getItemId() != 1032261) {
                cm.playerMessage(1, '你未装备内面耀光。');
                cm.dispose();
                return;
            } else {
                if (cm.getPlayer().get内面技能数量() > 0) {
                    text = '#face' + f + '##fn方正粗黑宋简体#';
                    text += '     #fs17##r欢迎使用 ' + cm.getServerName() + ' 内面耀光技能#fs15#\r\n';
                    text += '     当前已装备的耀光技能列表如下:\r\n';
                    text += cm.get内面技能列表();
                    cm.addPopupSay(9110002, 5000, ' [耀光技能添加说明:]\r\n 请通过新手技能中的耀光技能去添加\r\n已添加的BUFF技能可在这里显示\r\n目前只是模拟,没有完全修复!');
                    cm.askMenu_Bottom(text, 204, a);
                } else {
                    cm.addPopupSay(9110002, 5000, ' [耀光技能空空如也...]');
                    cm.dispose();
                    return;
                }
            }
        } else {
            if (status === b++) {
                skillid = j;
                cm.askAcceptDecline_Bottom('确定移除 #b' + cm.getSkillName(j) + '#k ?', 204, a);
            } else {
                if (status === b++) {
                    cm.移除内面技能(skillid);
                    cm.addPopupSay(9110002, 5000, ' [移除耀光技能:]\r\n ' + cm.getSkillName(skillid));
                    cm.dispose();
                    cm.openNpc(9110002, '内面耀光技能管理');
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