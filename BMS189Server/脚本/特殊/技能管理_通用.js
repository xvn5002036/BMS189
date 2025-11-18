var status = -1;
var selectionLog = [];
function start() {
    action(1, 0, 0);
}
function action(c, f, h) {
    var g = cm.getConstantScriptContent('菜单_NPC立绘');
    var d = Math.floor(Math.random() * g.length);
    var a = g[d][0];
    var e = randomNum(0, g[d][1]);
    if (status == 0 && c == 0) {
        cm.dispose();
        return;
    }
    c == 1 ? status++ : status--;
    selectionLog[status] = h;
    var b = -1;
    if (status <= b++) {
        cm.dispose();
    } else {
        if (status === b++) {
            var j = ' #face' + e + '##fs18##r#fn微软雅黑#欢迎使用 ' + cm.getServerName() + ' 技能管理#fs15#\r\n';
            j += '#L0#清理技能[k]#l\r\n';
            j += '#L1#加满技能[k]#l\r\n';
            j += '#L2#加满超级属性[s]#l\r\n';
            j += '#L3#满5转技能(已装备的)[v]#l\r\n';
            j += '#L4#自由添加技能(BUG自负)#l\r\n';
            cm.askMenu_Bottom(j, 204, a);
        } else {
            if (status === b++) {
                switch (h) {
                case 0:
                    cm.getPlayer().clearSkills();
                    cm.dispose();
                    break;
                case 1:
                    cm.满技能();
                    cm.teachSkill(8, 1, 1);
                    cm.teachSkill(80001000, 1, 1);
                    if (cm.getzhizunvip() != 2) {
                        cm.gainItem(2430191, 1);
                    } else {
                        cm.gainItem(2431305, 1);
                    }
                    cm.getTopMsgFont('获得[新手套装箱]一个！', 3, 20, 4, 0, 0);
                    cm.effect_Text(['#fnNanum Gothic ExtraBold##fs26# 学会了更多技能'], [
                        180,
                        4500,
                        4,
                        0,
                        0,
                        1,
                        4,
                        0,
                        0,
                        0
                    ]);
                    cm.dispose();
                    break;
                case 2:
                    for (var b = 80000400; b <= 80000421; b++) {
                        if (b != 80000407 && b != 80000408 && b != 80000411 && b != 80000415 && b != 80000418) {
                            cm.teachSkill(b, cm.getMaxLevel(b));
                        }
                    }
                    cm.getTopMsgFont('超级属性加满了', 3, 20, 20, 0);
                    cm.dispose();
                    break;
                case 3:
                    cm.MaxV5skill();
                    cm.dispose();
                    break;
                case 4:
                    cm.askText_Bottom('#face' + e + '##fn方正粗黑宋简体# 你想添加什么技能？支持模糊查询。#fs15#\r\n  #b如：五行回归术、回归、40011227、400', a);
                    break;
                }
            } else {
                if (status === b++) {
                    if (cm.getText() == '') {
                        cm.playerMessage(-1, '请输入关键字！');
                        cm.effect_NormalSpeechBalloon('请输入关键字', 1, 0, 0, 3000, 0, 0);
                        cm.dispose();
                        return;
                    }
                    list = cm.getSearchData(6, cm.getText());
                    if (list == null) {
                        cm.getTopMsgFont('搜索不到信息', 3, 20, 4, 0, 0);
                        cm.dispose();
                        return;
                    }
                    if (!cm.foundData(6, cm.getText())) {
                        cm.dispose();
                        return;
                    }
                    cm.askMenu_Bottom('#face' + e + '#' + cm.searchData(6, cm.getText()), 204, a);
                } else {
                    if (status === b++) {
                        selects = h;
                        cm.askNumber_Bottom('#face' + e + '#选中的技能ID为' + selects + '\r\n请输入使用等级：', a, 1, 1, 30);
                    } else {
                        if (status === b++) {
                            cm.teachSkill(selects, h);
                            cm.useSkill(selects, h);
                            cm.getTopMsgFont('添加技能：' + selects + ' ' + h + '级', 3, 20, 20, 0);
                            cm.dispose();
                        }
                    }
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