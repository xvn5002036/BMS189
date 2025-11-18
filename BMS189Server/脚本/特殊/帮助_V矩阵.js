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
        if (status == i++) {
            cm.askMenu('关于查看我的核心模式，你有什么问题吗？\r\n\r\n#b#L0#有关模式的说明#l\r\n#L1#强化核心的方法#l\r\n#L2#分解核心的方法#l\r\n#L3#没什么问题。#l', 4, 1540945);
        } else {
            var reactor = 'action分支' + selectionLog[1];
            eval(reactor)(mode, type, selection, i);
        }
    }
}
function action分支0(d, c, b, a) {
    if (status <= a++) {
        cm.sendNormalTalk('在查看我的核心模式中，可以#b查看我拥有的所有核心#k。此外，还能#b对核心进行强化和分解#k。', 4, 1540945, false, true);
    } else {
        if (status === a++) {
            cm.sendNormalTalk('#b当前装备的核心#k会显示“ON”，并#b用黄色发光边框显示#k。', 4, 1540945, true, true);
        } else {
            if (status === a++) {
                cm.sendNormalTalk('请选择核心，#b查看核心信息#k、#b整理不需要的核心#k或者#b使核心变得更强#k。', 4, 1540945, true, true);
            } else {
                if (status === a++) {
                    cm.sendNormalTalk('核心的种类实在太多，别忘了使用#b下方的搜索功能#k。', 4, 1540945, true, true);
                    status = -1;
                }
            }
        }
    }
}
function action分支1(d, c, b, a) {
    if (status <= a++) {
        cm.sendNormalTalk('如果想对核心进行强化，可以用#b用鼠标右键点击#k#b想要进行强化的核心#k，然后选择#b“强化”#k。', 4, 1540945, false, true);
    } else {
        if (status === a++) {
            cm.sendNormalTalk('核心可以用相同种类的核心作为材料进行强化。根据用作材料的核心的等级，核心经验值的量各不相同。', 4, 1540945, true, true);
        } else {
            if (status === a++) {
                cm.sendNormalTalk('此时可以选择多个核心进行强化，希望你能知道。', 4, 1540945, true, true);
                status = -1;
            }
        }
    }
}
function action分支2(d, c, b, a) {
    if (status <= a++) {
        cm.sendNormalTalk('分解核心的方法有两种。\r\n第一种是#b用鼠标右键点击#k想要分解的核心，然后选择#b“分解”#k，一个一个地进行分解。', 4, 1540945, false, true);
    } else {
        if (status === a++) {
            cm.sendNormalTalk('如果觉得一个个分解太麻烦，可以点击右下方的#b“分解核心”#k按钮，可以选择多个核心，一次分解多个。', 4, 1540945, true, true);
        } else {
            if (status === a++) {
                cm.sendNormalTalk('分解核心时，可以获得V核心碎片。以碎片为材料，可以制作自己想要的核心或者核心宝石。', 4, 1540945, true, true);
            } else {
                if (status === a++) {
                    cm.sendNormalTalk('请一定要注意，千万不要不小心分解掉需要的核心。', 4, 1540945, true, true);
                    status = -1;
                }
            }
        }
    }
}
function action分支3(d, c, b, a) {
    if (status <= a++) {
        cm.sendNormalTalk('是吗？如果有什么问题，请随时来问我。', 4, 1540945, false, false);
    } else {
        if (status === a++) {
            cm.dispose();
        }
    }
}