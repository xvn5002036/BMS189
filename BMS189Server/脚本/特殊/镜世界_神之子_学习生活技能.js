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
        var level = cm.getNpc();
        var reactor = 'action学习' + level;
        eval(reactor)(mode, type, selection, i);
    }
}
function action学习0(d, c, b, a) {
    if (status <= a++) {
        cm.sendNormalTalk('阿尔法、贝塔，要注意听讲！', 37, 2400001, false, true);
    } else {
        if (status === a++) {
            cm.sendNormalTalk('#face8#内容太难了！能不能说得简单一点。', 37, 2400005, true, true);
        } else {
            if (status === a++) {
                cm.sendNormalTalk('#face10#……好难……', 37, 2400006, true, false);
            } else {
                if (status === a++) {
                    cm.dispose();
                }
            }
        }
    }
}
function action学习1(d, c, b, a) {
    if (status <= a++) {
        cm.sendNormalTalk('这种程度还能说的过去。那么下边来学一下更难的吧？', 37, 2400001, false, true);
    } else {
        if (status === a++) {
            cm.sendNormalTalk('#face7#啊啊，什么课程这么累人啊。', 37, 2400005, true, true);
        } else {
            if (status === a++) {
                cm.sendNormalTalk('#face10#……好困……', 37, 2400006, true, false);
            } else {
                if (status === a++) {
                    cm.dispose();
                }
            }
        }
    }
}
function action学习2(d, c, b, a) {
    if (status <= a++) {
        cm.sendNormalTalk('真棒！完美地理解了讲课的内容。', 37, 2400001, false, true);
    } else {
        if (status === a++) {
            cm.sendNormalTalk('#face2#太简单了？有没有更难的？', 37, 2400005, true, true);
        } else {
            if (status === a++) {
                cm.sendNormalTalk('#face7#……我，我觉得刚好……', 37, 2400006, true, true);
            } else {
                if (status === a++) {
                    cm.sendNormalTalk('#face0#你这个没毅力的家伙！', 37, 2400005, true, false);
                } else {
                    if (status === a++) {
                        cm.dispose();
                    }
                }
            }
        }
    }
}
function action学习3(d, c, b, a) {
    if (status <= a++) {
        cm.sendNormalTalk('阿尔法、贝塔，你们俩可真是……天才啊！孺子可教啊，以后也要继续努力！', 37, 2400001, false, true);
    } else {
        if (status === a++) {
            cm.sendNormalTalk('#face3#我也是个说到做到的男人，这种程度就是小菜一碟。', 37, 2400005, true, true);
        } else {
            if (status === a++) {
                cm.sendNormalTalk('#face5#……我，我也是……', 37, 2400006, true, false);
            } else {
                if (status === a++) {
                    cm.dispose();
                }
            }
        }
    }
}