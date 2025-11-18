var status = -1;
var selectionLog = [];
function start() {
    action(1, 0, 0);
}
function action(c, b, a) {
    if (status == 0 && c == 0) {
        cm.dispose();
        return;
    }
    if (c == 1) {
        status++;
    } else {
        status--;
    }
    selectionLog[status] = a;
    if (status == 0) {
        对话首页();
    } else {
        switch (selectionLog[1]) {
        case 0:
            action0();
            break;
        case 1:
            action1();
            break;
        case 2:
            action2();
            break;
        case 3:
            action3();
            break;
        case 4:
            action4();
            break;
        default:
            cm.dispose();
            break;
        }
    }
}
function 对话首页() {
    cm.askMenu('#e<帮助>#n\r\n#L4##b什么是伤害皮肤保存系统？#k#l\r\n#L0##b保存伤害皮肤#k#l\r\n#L1##b应用伤害皮肤#k#l\r\n#L2##b删除伤害皮肤#k#l\r\n#L3##b扩展伤害皮肤保存栏#k#l\r\n\r\n#L10#结束对话#l', 4, 9010000);
}
function action4() {
    if (status == 1) {
        cm.sendNormalTalk('可以保存多个伤害皮肤的系统。和#b道具[伤害皮肤保存卷轴]#k为不同的保存系统。', 4, 9010000, false, true);
    } else {
        cm.dispose();
    }
}
function action0() {
    if (status == 1) {
        cm.sendNormalTalk('点击伤害皮肤栏的[保存伤害皮肤]按钮，可以将伤害皮肤保存下来。但在所有保存栏已满的状态下无法保存。\r\n\r\n#b◎ 只能保存当前应用的伤害皮肤。\r\n◎ 部分伤害皮肤无法保存。\r\n　 （专属网吧伤害皮肤等）#k', 4, 9010000, false, true);
    } else {
        cm.dispose();
    }
}
function action1() {
    if (status == 1) {
        cm.sendNormalTalk('用右键点击伤害皮肤栏的图标，可以更改为保存的伤害皮肤。\r\n\r\n#b◎ 请一定要确认当前应用的伤害皮肤是否已保存。\r\n　 （未保存到伤害皮肤信息会被删除。）\r\n◎ 应用中的专属网吧伤害皮肤会被解除。', 4, 9010000, false, true);
    } else {
        cm.dispose();
    }
}
function action2() {
    if (status == 1) {
        cm.sendNormalTalk('将想要删除的伤害皮肤栏图标拖放到窗口外，即可删除。\r\n\r\n#b◎ 删除后的伤害皮肤在重新获得之前无法恢复。', 4, 9010000, false, true);
    } else {
        cm.dispose();
    }
}
function action3() {
    if (status == 1) {
        cm.sendNormalTalk('伤害皮肤保存栏不足时，可以使用扩展券对保存栏数量进行扩展。\r\n\r\n#b◎ 伤害皮肤保存栏最大可以扩展到30格。', 4, 9010000, false, true);
    } else {
        cm.dispose();
    }
}