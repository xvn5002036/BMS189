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
    mode == 1 ? status++ : status--;
    selectionLog[status] = selection;
    var i = -1;
    if (status <= i++) {
        cm.dispose();
    } else {
        if (status === i++) {
            cm.askMenu('#e#b#h0##k#n，学无止境。\r\n\r\n#L1# #e#r请帮助我修炼秘籍。#k#n#n#l', 4, 9062318);
        } else {
            var reactor = 'action分支' + selectionLog[1];
            eval(reactor)(mode, type, selection, i);
        }
    }
}
function action分支1(d, c, b, a) {
    if (status <= a++) {
        cm.askYesNo('你要使用#r#e200个#n#k觉醒铸币修炼#b#e<觉醒秘籍>#n#k吗？', 4, 9062318);
    } else {
        if (status === a++) {
            cm.sendNormalTalk('你目前持有#r#e0个#k#n觉醒铸币！\r\n\r\n必须得有#b#e200个#k#n#i4310296#觉醒铸币，才可以修炼秘籍哦。', 4, 9062318, false, false);
        } else {
            if (status === a++) {
                cm.dispose();
            }
        }
    }
}