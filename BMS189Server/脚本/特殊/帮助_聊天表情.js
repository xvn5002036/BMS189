var status = -1;
var selectionLog = [];
function start() {
    action(1, 0, 0);
}
function action(mode, type, selection) {
    if (status == 0 && mode == 0) {
        cm.dispose();
        return;
    }
    status++;
    selectionLog[status] = selection;
    var i = -1;
    if (status <= i++) {
        cm.dispose();
    } else {
        if (status === i++) {
            cm.askMenu('#e<帮助>#n\r\n#L0##b什么是聊天表情系统？#k#l\r\n#L1##b聊天表情的形态？（群聊，个别）#k#l\r\n#L2##b什么是聊天表情收藏？#k#l\r\n#L3##b什么是聊天表情命令？#k#l\r\n#L4##b删除聊天表情#k#l\r\n#L5##b聊天表情背包扩展方法#k#l\r\n\r\n#L10#结束对话#l', 4, 9310649);
        } else {
            var reactor = 'action分支' + selectionLog[1];
            eval(reactor)(mode, type, selection, i);
        }
    }
}
function action分支0(d, c, b, a) {
    if (status <= a++) {
        cm.sendNormalTalk('请使用可以表达各种感情和有趣状况的聊天表情。\r\n\r\n[聊天表情使用方法]\r\n1。点击聊天窗下方的[笑脸]按钮，打开聊天表情UI。\r\n2。双击想要使用的聊天表情或者设置快捷键使用。\r\n\r\n[聊天表情显示位置]\r\n在角色头顶的聊天对话框中显示。\r\n\r\n聊天表情可以和对话内容一起显示。请试着使用聊天表情进行愉快的对话吧～', 4, 9310649, false, true);
        status = -1;
    }
}
function action分支1(d, c, b, a) {
    if (status <= a++) {
        cm.sendNormalTalk('聊天表情的形态分为群聊形态和个别形态。通过群聊表情，可以获得个别聊天表情。\r\n\r\n[群聊、个别聊天表情查看位置]\r\n群聊表情：在聊天表情UI上方罗列小图标的地方，可以查看群聊表情。\r\n个别聊天表情：在聊天表情UI下方罗列大图标的地方，可以查看个别表情。\r\n\r\n#b◎ 群聊、个别聊天表情的差异在于只有群聊表情可以左右移动位置及删除。群聊表情一旦删除，在重新获得之前无法恢复。', 4, 9310649, false, true);
        status = -1;
    }
}
function action分支2(d, c, b, a) {
    if (status <= a++) {
        cm.sendNormalTalk('在获得的个别聊天表情中，可以将常用的聊天表情加入收藏。\r\n\r\n[收藏设置、取消方法]\r\n个别聊天表情右上方的[星星]按钮显示为黄色时，表示加入了收藏。\r\n个别聊天表情右上方的[星星]按钮显示为灰色时，表示未加入收藏。\r\n\r\n\r\n[收藏查看位置]\r\n在群聊表情区域最前方的[黄色星星]图标栏中，可以查看设置的收藏目录。', 4, 9310649, false, true);
        status = -1;
    }
}
function action分支3(d, c, b, a) {
    if (status <= a++) {
        cm.sendNormalTalk('在聊天窗中输入自己特有的聊天表情命令，可以更快地表达各种感情和有趣的状况。\r\n\r\n[表情命令设置方法]\r\n1。拖动个别聊天表情的大图标时，可以变成小图标形态。把小图标添加到命令UI窗中，然后使用“/”，输入自己特有的聊天表情命令。\r\n2。点击命令UI窗下方的[保存]按钮，添加自己特有的聊天表情命令。', 4, 9310649, false, true);
        status = -1;
    }
}
function action分支4(d, c, b, a) {
    if (status <= a++) {
        cm.sendNormalTalk('在聊天表情中，只有群聊表情可以删除。点击聊天表情UI下方的[编辑群聊表情]按钮时，在当前激活的群聊表情上会显示左/右/删除按钮。点击[删除]按钮，即可删除表情。\r\n\r\n#b◎ 群聊表情一旦删除，在重新获得之前无法恢复。', 4, 9310649, false, true);
        status = -1;
    }
}
function action分支5(d, c, b, a) {
    if (status <= a++) {
        cm.sendNormalTalk('群聊表情背包栏不足时，可以使用扩展券逐一扩展。\r\n\r\n#b◎ 聊天表情背包栏最多可以扩展到40格。', 4, 9310649, false, true);
        status = -1;
    }
}
function action分支10(d, c, b, a) {
    cm.dispose();
}