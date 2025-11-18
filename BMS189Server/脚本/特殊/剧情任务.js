var ttt2 = '#fUI/UIWindow/Quest/icon6/7#';
var tz2 = '#fEffect/CharacterEff/1082565/0/0#';
var tz3 = '#fEffect/CharacterEff/1082588/0/0#';
var tz4 = '#fEffect/CharacterEff/1082588/3/0#';
var eff1 = '#fUI/GuildMark/Mark/Etc/00009023/11#';
var 红心 = '#fUI/UIWindowPL/DuoEvent/Maximum/DuoInfo/icon/GoodF/0#';
var status = 0;
var sel = -1;
var selectionLog = [];
function start() {
    status = -1;
    action(1, 0, 0);
}
function action(mode, type, selection) {
    var NPC立绘组 = cm.getConstantScriptContent('菜单_NPC立绘');
    var index = Math.floor(Math.random() * NPC立绘组.length);
    var NPC = NPC立绘组[index][0];
    var face = randomNum(0, NPC立绘组[index][1]);
    if (mode <= 0) {
        cm.dispose();
        return;
    }
    if (mode == 1) {
        status++;
    } else {
        status--;
    }
    selectionLog[status] = selection;
    var i = -1;
    if (status <= i++) {
        cm.dispose();
    } else {
        if (status === i++) {
            var n = '\r\n';
            var selStr = '#face' + face + '##fn方正粗黑宋简体#';
            selStr += '#b' + eff1 + ' #r尊敬的 #r' + cm.getPlayer().getName() + '#b 欢迎光临 - BMS剧情中心#n#b ' + eff1 + ' #k\r\n';
            selStr += '（主题副本通过左侧灯泡处接取）\r\n#b';
            selStr += '#L0#' + 红心 + '  『主线』主线剧情 [更新10话]#l' + n;
            selStr += '#L2#' + 红心 + '  『挑战』挑战副本 [更新3话]#l' + n;
            if (cm.getzhizunvip() == 2) {
                selStr += '#L3#' + 红心 + '  『活动』活动副本 [更新5话]#l' + n;
            }
            selStr += '\r\n#fs20##L10090#返回主菜单#l\r\n#n';
            cm.askMenu_Bottom(selStr, 204, NPC);
        } else {
            var reactor = 'action' + selectionLog[1];
            eval(reactor)(mode, type, selection, i);
        }
    }
}
function action0(e, c, b, a) {
    if (status <= a++) {
        var d = '#fn#';
        d += '#r#e『主线』#n主线剧情：#k\r\n';
        d += '#fs15#';
        d += '#L0#' + 红心 + ' #b（LV.200）[神秘河1]消亡旅途    (c)BMS小组#l\r\n';
        d += '#L1#' + 红心 + ' #b（LV.215）[神秘河2]啾啾岛    (c)BMS小组#l\r\n';
        d += '#L2#' + 红心 + ' #b（LV.220）[神秘河3]拉克兰    (c)BMS小组#l\r\n';
        d += '#L3#' + 红心 + ' #b（LV.225）[神秘河4]阿尔卡那    (c)BMS小组#l\r\n';
        d += '#L4#' + 红心 + ' #b（LV.230）[神秘河5]莫拉斯    (c)BMS小组#l\r\n';
        d += '#L5#' + 红心 + ' #b（LV.235）[神秘河6]埃斯佩拉    (c)BMS小组#l\r\n';
        d += '#L6#' + 红心 + ' #b（LV.245）[月桥]命运时刻临近    (c)BMS小组#l\r\n';
        d += '#L7#' + 红心 + ' #b（LV.250）[痛苦迷宫]出征的时刻    (c)BMS小组#l\r\n';
        d += '#L8#' + 红心 + ' #b（LV.255）[黎曼]去找黑魔法师    (c)BMS小组#l\r\n';
        d += '#L9#' + 红心 + ' #b（LV.101）[荣耀]The Day After    (c)BMS小组#l\r\n';
        d += '\r\n#fs20##fn楷体##L10083#返回上一页#l\r\n#n';
        cm.askMenu_Bottom(d, 204, 2400010);
    } else {
        if (status === a++) {
            switch (b) {
            case 0:
                if (cm.getLevel() < 200) {
                    cm.dispose();
                    cm.askMenu_Bottom('很遗憾，你的等级不够！', 204, 2400010);
                } else {
                    cm.dispose();
                    cm.warp(450001003, 0);
                    cm.playerMessage(-1, '去右面看看吧！');
                }
                break;
            case 1:
                if (cm.getLevel() >= 210 && cm.isQuestFinished(34120)) {
                    cm.dispose();
                    cm.warp(450001250, 1);
                    cm.playerMessage(-1, '跳下悬崖吧！');
                } else {
                    cm.dispose();
                    cm.sendNext_Bottom('等级不足或[消亡旅途]未完成!', 2400010);
                }
                break;
            case 2:
                if (cm.getLevel() >= 220 && cm.isQuestFinished(34218)) {
                    cm.dispose();
                    cm.warp(450002021, 0);
                    cm.playerMessage(-1, '和穆托对话前往下一地区.');
                } else {
                    cm.dispose();
                    cm.sendNext_Bottom('等级不足或[啾啾岛]未完成!', 2400010);
                }
                break;
            case 3:
                if (cm.getLevel() >= 225 && cm.isQuestFinished(34331)) {
                    cm.dispose();
                    cm.warp(450003010, 0);
                    cm.playerMessage(-1, '和飞鱼对话.');
                } else {
                    cm.dispose();
                    cm.sendNext_Bottom('等级不足或[拉克兰]未完成!', 2400010);
                }
                break;
            case 4:
                if (cm.getLevel() >= 230 && cm.isQuestFinished(34478)) {
                    cm.dispose();
                    cm.warp(450005400, 0);
                    cm.playerMessage(-1, '和 飞鱼 对话.');
                } else {
                    cm.dispose();
                    cm.sendNext_Bottom('等级不足或[阿尔卡那]未完成!', 2400010);
                }
                break;
            case 5:
                if (cm.getLevel() >= 235 && cm.isQuestFinished(34243)) {
                    cm.dispose();
                    cm.warp(450006130, 0);
                    cm.playerMessage(-1, '和 江 对话.');
                } else {
                    cm.dispose();
                    cm.sendNext_Bottom('等级不足或[莫拉斯]未完成!', 2400010);
                }
                break;
            case 6:
                if (cm.getLevel() >= 245 && cm.isQuestFinished(34585)) {
                    cm.dispose();
                    cm.startQuestScript(3003650, 35601);
                } else {
                    cm.dispose();
                    cm.sendNext_Bottom('等级不足或[太初之海]未完成!', 2400010);
                }
                break;
            case 7:
                if (cm.getLevel() >= 250 && cm.isQuestFinished(34585)) {
                    cm.dispose();
                    cm.startQuestScript(3003758, 35700);
                } else {
                    cm.dispose();
                    cm.sendNext_Bottom('等级不足或[月桥]未完成!', 2400010);
                }
                break;
            case 8:
                if (cm.getLevel() >= 255 && cm.isQuestFinished(35731) && !cm.isQuestFinished(35800)) {
                    cm.dispose();
                    cm.startQuestScript(3003758, 35800);
                } else {
                    cm.dispose();
                    cm.sendNext_Bottom('无法开始任务！\r\n你的等级达到255级了吗？\r\n你必须完成[痛苦迷宫]剧情，或者你做过黎曼第一节了!', 2400010);
                }
                break;
            case 9:
                if (cm.getLevel() >= 101) {
                    cm.dispose();
                    cm.startQuestScript(3004150, 37201);
                } else {
                    cm.dispose();
                    cm.sendNext_Bottom('等级不足!', 2400010);
                }
                break;
            case 10083:
                cm.dispose();
                cm.openNpc(0, '剧情任务');
                break;
            }
        } else {
            cm.dispose();
        }
    }
}
function action2(e, c, b, a) {
    if (status <= a++) {
        var d = '#fn#';
        d += ' #r#e『挑战』#n挑战副本：#k\r\n';
        d += '#fs15#';
        d += '#L0#' + 红心 + ' #b（LV.225）[阿尔卡那]解救石精灵    (c)BMS小组#l\r\n';
        d += '#L1#' + 红心 + ' #b（LV.245）[痛苦迷宫]核心东边    (c)BMS小组#l\r\n';
        d += '#L2#' + 红心 + ' #b（LV.255）[黎曼]追赶奥尔卡    (c)BMS小组#l\r\n';
        d += '\r\n#fs20##fn楷体##L10081#返回上一页#l\r\n#n';
        cm.askMenu_Bottom(d, 204, 2400010);
    } else {
        if (status === a++) {
            switch (b) {
            case 0:
                if (cm.getLevel() < 225) {
                    cm.dispose();
                    cm.sendNext_Bottom('很遗憾，任务要求等级不够!', 2400010);
                } else {
                    cm.dispose();
                    cm.openNpc(3003381);
                }
                break;
            case 1:
                if (cm.getLevel() < 245) {
                    cm.dispose();
                    cm.sendNext_Bottom('很遗憾，任务要求等级不够!', 2400010);
                } else {
                    cm.dispose();
                    cm.openNpc(0, '痛苦迷宫_核心东边');
                }
                break;
            case 2:
                if (cm.getLevel() < 255) {
                    cm.dispose();
                    cm.sendNext_Bottom('很遗憾，任务要求等级不够!', 2400010);
                } else {
                    cm.dispose();
                    cm.openNpc(0, '黎曼_上升游戏');
                }
                break;
            case 10081:
                cm.dispose();
                cm.openNpc(0, '剧情任务');
                break;
            }
        } else {
            cm.dispose();
        }
    }
}
function action3(e, c, b, a) {
    if (status <= a++) {
        var d = '#fs15##fn黑体#';
        d += '#r#e『活动』#n活动副本：#k\r\n';
        d += '#L0#' + 红心 + ' #r[LV.100] #b我的花园#l\r\n';
        d += '#L9##fEffect/BasicEff.img/MainNotice/MapleRelay/Notify/11##r[LV.100] #b冒险岛接力#l\r\n';
        d += '#L10##fMap/MapHelper.img/mark/myHome##r[LV.200] #b我的小屋#l\r\n';
        d += '#L20#b回归鬼屋#l\r\n';
        d += '\r\n#fs15##fn楷体##L10080#返回上一页#l\r\n#n';
        cm.askMenuS(d);
    } else {
        if (status === a++) {
            cm.dispose();
            switch (b) {
            case 0:
                cm.openNpc(9330065);
                break;
            case 9:
                cm.openNpc(1, '活动菜单_冒险岛接力');
                break;
            case 10:
                cm.openNpc(1, '活动菜单_我的小屋');
                break;
            case 20:
                cm.startQuestScript(9062257, 100402);
                break;
            case 10080:
                cm.openNpc(0, '剧情任务');
                break;
            }
        }
    }
}
function action10090(d, c, b, a) {
    if (status <= a++) {
        cm.dispose();
        cm.openNpc(9900004);
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