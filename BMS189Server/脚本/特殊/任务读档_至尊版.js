var status = -1;
var questCount = 0;
var selectionLog = [];
function start() {
    action(1, 0, 0);
}
function action(mode, type, selection) {
    var NPC立绘组 = cm.getConstantScriptContent('菜单_NPC立绘');
    var index = Math.floor(Math.random() * NPC立绘组.length);
    var NPC = NPC立绘组[index][0];
    var face = randomNum(0, NPC立绘组[index][1]);
    if (cm.getzhizunvip() != 2) {
        cm.dispose();
        cm.playerMessage(1, '该菜单是至尊版专享。');
        return;
    }
    if (status == 0 && mode == 0) {
        cm.dispose();
        cm.openNpc(9110002, '拍卖菜单_至尊版');
        return;
    }
    if (mode <= 0 && status > 0) {
        cm.dispose();
        cm.openNpc(9110002, '任务读档_至尊版');
        return;
    }
    mode == 1 ? status++ : status--;
    selectionLog[status] = selection;
    var i = -1;
    if (status <= i++) {
        cm.dispose();
    } else {
        if (status === i++) {
            action存档();
            var text = '#face' + face + '##fn方正粗黑宋简体#';
            text += '     #fs19##r欢迎使用 ' + cm.getServerName() + ' 任务读档#k#fs15#\r\n';
            text += '       ①、同一账号下任务进度共享，打开该功能时自动存档。\r\n';
            text += '       ②、即使在后台#r清空任务#k(包括38)后，也可以#r读档#k恢复。\r\n';
            text += '       ③、读档可以更整体地完成任务；GM可以直接一键读档。\r\n#fs16#';
            text += '  #b#L0#【选择读档】#n查看任务清单#l#k\r\n';
            text += '  #b#L2#【一键读档】#n同步所有存档#l#k\r\n';
            cm.askMenu_Bottom(text, 204, NPC);
        } else {
            var reactor = 'action' + selectionLog[1];
            eval(reactor)(mode, type, selection, i);
        }
    }
}
function action0(c, f, h, b) {
    var g = cm.getConstantScriptContent('菜单_NPC立绘');
    var d = Math.floor(Math.random() * g.length);
    var a = g[d][0];
    var e = randomNum(0, g[d][1]);
    if (status <= b++) {
        var j = '\r\n#face' + e + '##fn方正粗黑宋简体##fs14#';
        j += ' （ #r[红色]#k表示已完成  #g[绿色]#k表示未完成  #b[★]#k表示职业剧情 ）\r\n';
        j += '  请查看任务清单（ 滑动滚轮翻页 点击查看保存点 ）：\r\n';
        j += '#L30071#' + (cm.getQuestStatus(30071) != 0 ? '#r【蘑菇城】#k' : '#g【蘑菇城】#k') + '' + (cm.getEventCount('任务存档_蘑菇城', 1) <= 0 ? '#g未存档#k' : '') + '#l';
        j += '#L32132#' + (cm.getQuestStatus(32132) != 0 ? '#r【妖精学院】#k' : '#g【妖精学院】#k') + '' + (cm.getEventCount('任务存档_妖精学院', 1) <= 0 ? '#g未存档#k' : '') + '#l';
        j += '#L2976#' + (cm.getQuestStatus(2976) != 0 ? '#r【金海滩】#k' : '#g【金海滩】#k') + '' + (cm.getEventCount('任务存档_金海滩', 1) <= 0 ? '#g未存档#k' : '') + '#l';
        j += '#L32195#' + (cm.getQuestStatus(32195) != 0 ? '#r【列娜海峡】#k' : '#g【列娜海峡】#k') + '' + (cm.getEventCount('任务存档_列娜海峡', 1) <= 0 ? '#g未存档#k' : '') + '#l';
        j += '#L37180#' + (cm.getQuestStatus(37180) != 0 ? '#r【艾洛丁】#k' : '#g【艾洛丁】#k') + '' + (cm.getEventCount('任务存档_艾洛丁', 1) <= 0 ? '#g未存档#k' : '') + '#l';
        j += '\r\n';
        j += '#L2846#' + (cm.getQuestStatus(2846) != 0 ? '#r【勇士部落】#k' : '#g【勇士部落】#k') + '' + (cm.getEventCount('任务存档_勇士部落', 1) <= 0 ? '#g未存档#k' : '') + '#l';
        j += '#L2895#' + (cm.getQuestStatus(2895) != 0 ? '#r【废弃都市】#k' : '#g【废弃都市】#k') + '' + (cm.getEventCount('任务存档_废弃都市', 1) <= 0 ? '#g未存档#k' : '') + '#l';
        j += '#L2297#' + (cm.getQuestStatus(2297) != 0 ? '#r【林中之城】#k' : '#g【林中之城】#k') + '' + (cm.getEventCount('任务存档_林中之城', 1) <= 0 ? '#g未存档#k' : '') + '#l';
        j += '#L3160#' + (cm.getQuestStatus(3160) != 0 ? '#r【天空之城】#k' : '#g【天空之城】#k') + '' + (cm.getEventCount('任务存档_天空之城', 1) <= 0 ? '#g未存档#k' : '') + '#l';
        j += '#L3267#' + (cm.getQuestStatus(3267) != 0 ? '#r【冰峰雪域】#k' : '#g【冰峰雪域】#k') + '' + (cm.getEventCount('任务存档_冰峰雪域', 1) <= 0 ? '#g未存档#k' : '') + '#l';
        j += '\r\n';
        j += '#L63086#' + (cm.getQuestStatus(63086) != 0 ? '#r【异逝界】#k' : '#g【异逝界】#k') + '' + (cm.getEventCount('任务存档_异逝界', 1) <= 0 ? '#g未存档#k' : '') + '#l';
        j += '#L23976#' + (cm.getQuestStatus(23976) != 0 ? '#r【埃德尔斯坦】#k' : '#g【埃德尔斯坦】#k') + '' + (cm.getEventCount('任务存档_埃德尔斯坦', 1) <= 0 ? '#g未存档#k' : '') + '#l';
        j += '#L36001#' + (cm.getQuestStatus(36001) != 0 ? '#r【阿里安特】#k' : '#g【阿里安特】#k') + '' + (cm.getEventCount('任务存档_阿里安特', 1) <= 0 ? '#g未存档#k' : '') + '#l';
        j += '#L3387#' + (cm.getQuestStatus(3387) != 0 ? '#r【玛加提亚】#k' : '#g【玛加提亚】#k') + '' + (cm.getEventCount('任务存档_玛加提亚', 1) <= 0 ? '#g未存档#k' : '') + '#l';
        j += '#L31232#' + (cm.getQuestStatus(31232) != 0 ? '#r【艾琳森林】#k' : '#g【艾琳森林】#k') + '' + (cm.getEventCount('任务存档_艾琳森林', 1) <= 0 ? '#g未存档#k' : '') + '#l';
        j += '\r\n';
        j += '#L3265#' + (cm.getQuestStatus(3265) != 0 ? '#r【玩具城】#k' : '#g【玩具城】#k') + '' + (cm.getEventCount('任务存档_玩具城', 1) <= 0 ? '#g未存档#k' : '') + '#l';
        j += '#L3178#' + (cm.getQuestStatus(3178) != 0 ? '#r【狮子王城】#k' : '#g【狮子王城】#k') + '' + (cm.getEventCount('任务存档_狮子王城', 1) <= 0 ? '#g未存档#k' : '') + '#l';
        j += '#L3471#' + (cm.getQuestStatus(3271) != 0 ? '#r【时间塔最下层】#k' : '#g【时间塔最下层】#k') + '' + (cm.getEventCount('任务存档_时间塔最下层', 1) <= 0 ? '#g未存档#k' : '') + '#l';
        j += '#L31386#' + (cm.getQuestStatus(31386) != 0 ? '#r【梦幻主题公园】#k' : '#g【梦幻主题公园】#k') + '' + (cm.getEventCount('任务存档_梦幻主题公园', 1) <= 0 ? '#g未存档#k' : '') + '#l';
        j += '\r\n';
        j += '#L30458#' + (cm.getQuestStatus(30458) != 0 ? '#r【童话村】#k' : '#g【童话村】#k') + '' + (cm.getEventCount('任务存档_童话村', 1) <= 0 ? '#g未存档#k' : '') + '#l';
        j += '#L3872#' + (cm.getQuestStatus(3872) != 0 ? '#r【黄金寺院】#k' : '#g【黄金寺院】#k') + '' + (cm.getEventCount('任务存档_黄金寺院', 1) <= 0 ? '#g未存档#k' : '') + '#l';
        j += '#L31266#' + (cm.getQuestStatus(31266) != 0 ? '#r【克林逊森林】#k' : '#g【克林逊森林】#k') + '' + (cm.getEventCount('任务存档_克林逊森林', 1) <= 0 ? '#g未存档#k' : '') + '#l';
        j += '#L35980#' + (cm.getQuestStatus(35980) != 0 ? '#r【帕勒坦】#k' : '#g【帕勒坦】#k') + '' + (cm.getEventCount('任务存档_帕勒坦', 1) <= 0 ? '#g未存档#k' : '') + '#l';
        j += '#L3556#' + (cm.getQuestStatus(3556) != 0 ? '#r【时间神殿】#k' : '#g【时间神殿】#k') + '' + (cm.getEventCount('任务存档_时间神殿', 1) <= 0 ? '#g未存档#k' : '') + '#l';
        j += '\r\n';
        j += '#L17681#' + (cm.getQuestStatus(17681) != 0 ? '#r【凯梅尔兹】#k' : '#g【凯梅尔兹】#k') + '' + (cm.getEventCount('任务存档_凯梅尔兹', 1) <= 0 ? '#g未存档#k' : '') + '#l';
        j += '#L62146#' + (cm.getQuestStatus(62146) != 0 ? '#r【东方神州】#k' : '#g【东方神州】#k') + '' + (cm.getEventCount('任务存档_东方神州', 1) <= 0 ? '#g未存档#k' : '') + '#l';
        j += '#L34432#' + (cm.getQuestStatus(34432) != 0 ? '#r【废都塔】#k' : '#g【废都塔】#k') + '' + (cm.getEventCount('任务存档_废都塔', 1) <= 0 ? '#g未存档#k' : '') + '#l';
        j += '#L62037#' + (cm.getQuestStatus(62037) != 0 ? '#r【少林寺】#k' : '#g【少林寺】#k') + '' + (cm.getEventCount('任务存档_少林寺', 1) <= 0 ? '#g未存档#k' : '') + '#l';
        j += '#L31353#' + (cm.getQuestStatus(31353) != 0 ? '#r【岩壁巨人】#k' : '#g【岩壁巨人】#k') + '' + (cm.getEventCount('任务存档_岩壁巨人', 1) <= 0 ? '#g未存档#k' : '') + '#l';
        j += '\r\n';
        j += '#L31092#' + (cm.getQuestStatus(31092) != 0 ? '#r【破坏的射手村】#k' : '#g【破坏的射手村】#k') + '' + (cm.getEventCount('任务存档_破坏的射手村', 1) <= 0 ? '#g未存档#k' : '') + '#l';
        j += '#L3496#' + (cm.getQuestStatus(3496) != 0 ? '#r【地球防御本部】#k' : '#g【地球防御本部】#k') + '' + (cm.getEventCount('任务存档_地球防御本部', 1) <= 0 ? '#g未存档#k' : '') + '#l';
        j += '#L32524#' + (cm.getQuestStatus(32524) != 0 ? '#r【克里蒂亚斯】#k' : '#g【克里蒂亚斯】#k') + '' + (cm.getEventCount('任务存档_克里蒂亚斯', 1) <= 0 ? '#g未存档#k' : '') + '#l';
        j += '#L31094#' + (cm.getQuestStatus(31094) != 0 ? '#r【黄昏勇士部落】#k' : '#g【黄昏勇士部落】#k') + '' + (cm.getEventCount('任务存档_黄昏勇士部落', 1) <= 0 ? '#g未存档#k' : '') + '#l';
        j += '\r\n';
        j += '#L34766#' + (cm.getQuestStatus(34766) != 0 ? '#r【狐狸谷】#k' : '#g【狐狸谷】#k') + '' + (cm.getEventCount('任务存档_狐狸谷', 1) <= 0 ? '#g未存档#k' : '') + '#l';
        j += '#L39209#' + (cm.getQuestStatus(39209) != 0 ? '#r【避风港】#k' : '#g【避风港】#k') + '' + (cm.getEventCount('任务存档_避风港', 1) <= 0 ? '#g未存档#k' : '') + '#l';
        j += '#L30013#' + (cm.getQuestStatus(30013) != 0 ? '#r【鲁塔比斯】#k' : '#g【鲁塔比斯】#k') + '' + (cm.getEventCount('任务存档_鲁塔比斯', 1) <= 0 ? '#g未存档#k' : '') + '#l';
        j += '#L3897#' + (cm.getQuestStatus(3897) != 0 ? '#r【武陵】#k' : '#g【武陵】#k') + '' + (cm.getEventCount('任务存档_武陵', 1) <= 0 ? '#g未存档#k' : '') + '#l';
        j += '#L1674#' + (cm.getQuestStatus(1674) != 0 ? '#r【十字猎人】#k' : '#g【十字猎人】#k') + '' + (cm.getEventCount('任务存档_十字猎人', 1) <= 0 ? '#g未存档#k' : '') + '#l';
        j += '\r\n';
        j += '#L33288#' + (cm.getQuestStatus(33288) != 0 ? '#r【黑色天堂】#k' : '#g【黑色天堂】#k') + '' + (cm.getEventCount('任务存档_黑色天堂', 1) <= 0 ? '#g未存档#k' : '') + '#l';
        j += '#L32648#' + (cm.getQuestStatus(32648) != 0 ? '#r【白魔法师】#k' : '#g【白魔法师】#k') + '' + (cm.getEventCount('任务存档_白魔法师', 1) <= 0 ? '#g未存档#k' : '') + '#l';
        j += '#L32625#' + (cm.getQuestStatus(32625) != 0 ? '#r【成为女皇的方法】#k' : '#g【成为女皇的方法】#k') + '' + (cm.getEventCount('任务存档_成为女皇的方法', 1) <= 0 ? '#g未存档#k' : '') + '#l';
        j += '#L32661#' + (cm.getQuestStatus(32661) != 0 ? '#r【黑魔女】#k' : '#g【黑魔女】#k') + '' + (cm.getEventCount('任务存档_黑魔女', 1) <= 0 ? '#g未存档#k' : '') + '#l';
        j += '\r\n';
        j += '#L32695#' + (cm.getQuestStatus(32695) != 0 ? '#r【雪原吟游诗人】#k' : '#g【雪原吟游诗人】#k') + '' + (cm.getEventCount('任务存档_雪原吟游诗人', 1) <= 0 ? '#g未存档#k' : '') + '#l';
        j += '#L32988#' + (cm.getQuestStatus(32988) != 0 ? '#r【影子炼金术士】#k' : '#g【影子炼金术士】#k') + '' + (cm.getEventCount('任务存档_影子炼金术士', 1) <= 0 ? '#g未存档#k' : '') + '#l';
        j += '#L32871#' + (cm.getQuestStatus(32871) != 0 ? '#r【好友故事】#k' : '#g【好友故事】#k') + '' + (cm.getEventCount('任务存档_好友故事', 1) <= 0 ? '#g未存档#k' : '') + '#l';
        j += '#L58821#' + (cm.getQuestStatus(58821) != 0 ? '#r【蘑菇神社】#k' : '#g【蘑菇神社】#k') + '' + (cm.getEventCount('任务存档_蘑菇神社', 1) <= 0 ? '#g未存档#k' : '') + '#l';
        j += '\r\n';
        j += '#L61366#' + (cm.getQuestStatus(61366) != 0 ? '#r【克拉齐亚】#k' : '#g【克拉齐亚】#k') + '' + (cm.getEventCount('任务存档_克拉齐亚', 1) <= 0 ? '#g未存档#k' : '') + '#l';
        j += '#L64216#' + (cm.getQuestStatus(64216) != 0 ? '#r【莫奈得】#k' : '#g【莫奈得】#k') + '' + (cm.getEventCount('任务存档_莫奈得', 1) <= 0 ? '#g未存档#k' : '') + '#l';
        j += '#L34120#' + (cm.getQuestStatus(34120) != 0 ? '#r【消亡旅途】#k' : '#g【消亡旅途】#k') + '' + (cm.getEventCount('任务存档_消亡旅途', 1) <= 0 ? '#g未存档#k' : '') + '#l';
        j += '#L34218#' + (cm.getQuestStatus(34218) != 0 ? '#r【啾啾岛】#k' : '#g【啾啾岛】#k') + '' + (cm.getEventCount('任务存档_啾啾岛', 1) <= 0 ? '#g未存档#k' : '') + '#l';
        j += '#L34331#' + (cm.getQuestStatus(34331) != 0 ? '#r【拉克兰】#k' : '#g【拉克兰】#k') + '' + (cm.getEventCount('任务存档_拉克兰', 1) <= 0 ? '#g未存档#k' : '') + '#l';
        j += '\r\n';
        j += '#L34478#' + (cm.getQuestStatus(34478) != 0 ? '#r【阿尔卡那】#k' : '#g【阿尔卡那】#k') + '' + (cm.getEventCount('任务存档_阿尔卡那', 1) <= 0 ? '#g未存档#k' : '') + '#l';
        j += '#L34272#' + (cm.getQuestStatus(34272) != 0 ? '#r【莫拉斯】#k' : '#g【莫拉斯】#k') + '' + (cm.getEventCount('任务存档_莫拉斯', 1) <= 0 ? '#g未存档#k' : '') + '#l';
        j += '#L34591#' + (cm.getQuestStatus(34591) != 0 ? '#r【埃斯佩拉】#k' : '#g【埃斯佩拉】#k') + '' + (cm.getEventCount('任务存档_埃斯佩拉', 1) <= 0 ? '#g未存档#k' : '') + '#l';
        j += '#L37620#' + (cm.getQuestStatus(37620) != 0 ? '#r【反转城】#k' : '#g【反转城】#k') + '' + (cm.getEventCount('任务存档_反转城', 1) <= 0 ? '#g未存档#k' : '') + '#l';
        j += '#L37726#' + (cm.getQuestStatus(37726) != 0 ? '#r【真香岛】#k' : '#g【真香岛】#k') + '' + (cm.getEventCount('任务存档_真香岛', 1) <= 0 ? '#g未存档#k' : '') + '#l';
        j += '\r\n';
        j += '#L35635#' + (cm.getQuestStatus(35635) != 0 ? '#r【月桥】#k' : '#g【月桥】#k') + '' + (cm.getEventCount('任务存档_月桥', 1) <= 0 ? '#g未存档#k' : '') + '#l';
        j += '#L35740#' + (cm.getQuestStatus(35740) != 0 ? '#r【痛苦迷宫】#k' : '#g【痛苦迷宫】#k') + '' + (cm.getEventCount('任务存档_痛苦迷宫', 1) <= 0 ? '#g未存档#k' : '') + '#l';
        j += '#L35815#' + (cm.getQuestStatus(35815) != 0 ? '#r【黎曼】#k' : '#g【黎曼】#k') + '' + (cm.getEventCount('任务存档_黎曼', 1) <= 0 ? '#g未存档#k' : '') + '#l';
        j += '#L37312#' + (cm.getQuestStatus(37312) != 0 ? '#r【大世无界】#k' : '#g【大世无界】#k') + '' + (cm.getEventCount('任务存档_大世无界', 1) <= 0 ? '#g未存档#k' : '') + '#l';
        j += '#L37417#' + (cm.getQuestStatus(37417) != 0 ? '#r【圣地与圣剑】#k' : '#g【圣地与圣剑】#k') + '' + (cm.getEventCount('任务存档_圣地与圣剑', 1) <= 0 ? '#g未存档#k' : '') + '#l';
        j += '\r\n';
        j += '#L37520#' + (cm.getQuestStatus(37520) != 0 ? '#r【被选中之人】#k' : '#g【被选中之人】#k') + '' + (cm.getEventCount('任务存档_被选中之人', 1) <= 0 ? '#g未存档#k' : '') + '#l';
        j += '#L31180#' + (cm.getQuestStatus(31180) != 0 ? '#r【阿卡伊勒】#k' : '#g【阿卡伊勒】#k') + '' + (cm.getEventCount('任务存档_阿卡伊勒', 1) <= 0 ? '#g未存档#k' : '') + '#l';
        j += '#L10086# #r【过时任务】#k' + (cm.getEventCount('任务存档_过时任务', 1) <= 0 ? '#g未存档#k' : '') + '#l';
        cm.askMenu_Bottom(j, 204, a);
    } else {
        if (status === b++) {
            selects = h;
            cm.askAcceptDecline_Bottom('#face' + e + '##fn方正粗黑宋简体# ' + cm.getQuestById(selects) + '\r\n #r想要读取这个任务吗？\r\n（有存档才可以读取哦，否则什么都不会发生。）', a);
        } else {
            if (status === b++) {
                switch (selects) {
                case 30071:
                    if (cm.getEventCount('任务存档_蘑菇城', 1) >= 1 || cm.getPlayer().isGM()) {
                        for (var b = 30050; b <= 30074; b++) {
                            cm.forceCompleteQuest(b);
                        }
                        cm.playerMessage(6, '【读档】任务存档_蘑菇城 已读档！');
                    }
                    break;
                case 32132:
                    if (cm.getEventCount('任务存档_妖精学院', 1) >= 1 || cm.getPlayer().isGM()) {
                        for (var b = 32100; b <= 32159; b++) {
                            cm.forceCompleteQuest(b);
                        }
                        cm.playerMessage(6, '【读档】任务存档_妖精学院 已读档！');
                    }
                    break;
                case 2976:
                    if (cm.getEventCount('任务存档_金海滩', 1) >= 1 || cm.getPlayer().isGM()) {
                        for (var b = 2950; b <= 2976; b++) {
                            cm.forceCompleteQuest(b);
                        }
                        cm.playerMessage(6, '【读档】任务存档_金海滩 已读档！');
                    }
                    break;
                case 32195:
                    if (cm.getEventCount('任务存档_列娜海峡', 1) >= 1 || cm.getPlayer().isGM()) {
                        for (var b = 32160; b <= 32195; b++) {
                            cm.forceCompleteQuest(b);
                        }
                        cm.playerMessage(6, '【读档】任务存档_列娜海峡 已读档！');
                    }
                    break;
                case 37180:
                    if (cm.getEventCount('任务存档_艾洛丁', 1) >= 1 || cm.getPlayer().isGM()) {
                        for (var b = 37151; b <= 37180; b++) {
                            cm.forceCompleteQuest(b);
                        }
                        cm.playerMessage(6, '【读档】任务存档_艾洛丁 已读档！');
                    }
                    break;
                case 2846:
                    if (cm.getEventCount('任务存档_勇士部落', 1) >= 1 || cm.getPlayer().isGM()) {
                        for (var b = 2800; b <= 2846; b++) {
                            cm.forceCompleteQuest(b);
                        }
                        cm.playerMessage(6, '【读档】任务存档_勇士部落 已读档！');
                    }
                    break;
                case 2895:
                    if (cm.getEventCount('任务存档_废弃都市', 1) >= 1 || cm.getPlayer().isGM()) {
                        for (var b = 2850; b <= 2895; b++) {
                            cm.forceCompleteQuest(b);
                        }
                        cm.playerMessage(6, '【读档】任务存档_废弃都市 已读档！');
                    }
                    break;
                case 2297:
                    if (cm.getEventCount('任务存档_林中之城', 1) >= 1 || cm.getPlayer().isGM()) {
                        for (var b = 2235; b <= 2245; b++) {
                            cm.forceCompleteQuest(b);
                        }
                        for (var b = 2265; b <= 2269; b++) {
                            cm.forceCompleteQuest(b);
                        }
                        for (var b = 2019; b <= 2023; b++) {
                            cm.forceCompleteQuest(b);
                        }
                        for (var b = 2581; b <= 2586; b++) {
                            cm.forceCompleteQuest(b);
                        }
                        for (var b = 2047; b <= 2048; b++) {
                            cm.forceCompleteQuest(b);
                        }
                        for (var b = 2096; b <= 2097; b++) {
                            cm.forceCompleteQuest(b);
                        }
                        for (var b = 2052; b <= 2054; b++) {
                            cm.forceCompleteQuest(b);
                        }
                        for (var b = 2296; b <= 2297; b++) {
                            cm.forceCompleteQuest(b);
                        }
                        cm.playerMessage(6, '【读档】任务存档_林中之城 已读档！');
                    }
                    break;
                case 3160:
                    if (cm.getEventCount('任务存档_天空之城', 1) >= 1 || cm.getPlayer().isGM()) {
                        for (var b = 3111; b <= 3115; b++) {
                            cm.forceCompleteQuest(b);
                        }
                        for (var b = 3086; b <= 3088; b++) {
                            cm.forceCompleteQuest(b);
                        }
                        for (var b = 3097; b <= 3100; b++) {
                            cm.forceCompleteQuest(b);
                        }
                        for (var b = 3053; b <= 3064; b++) {
                            cm.forceCompleteQuest(b);
                        }
                        for (var b = 3042; b <= 3050; b++) {
                            cm.forceCompleteQuest(b);
                        }
                        for (var b = 31026; b <= 31034; b++) {
                            cm.forceCompleteQuest(b);
                        }
                        for (var b = 3159; b <= 3160; b++) {
                            cm.forceCompleteQuest(b);
                        }
                        cm.forceCompleteQuest(3038);
                        cm.forceCompleteQuest(3158);
                        cm.playerMessage(6, '【读档】任务存档_天空之城 已读档！');
                    }
                    break;
                case 3267:
                    if (cm.getEventCount('任务存档_冰峰雪域', 1) >= 1 || cm.getPlayer().isGM()) {
                        for (var b = 3103; b <= 3110; b++) {
                            cm.forceCompleteQuest(b);
                        }
                        for (var b = 3000; b <= 3011; b++) {
                            cm.forceCompleteQuest(b);
                        }
                        for (var b = 3017; b <= 3041; b++) {
                            cm.forceCompleteQuest(b);
                        }
                        for (var b = 3184; b <= 3192; b++) {
                            cm.forceCompleteQuest(b);
                        }
                        for (var b = 3116; b <= 3120; b++) {
                            cm.forceCompleteQuest(b);
                        }
                        for (var b = 3070; b <= 3071; b++) {
                            cm.forceCompleteQuest(b);
                        }
                        for (var b = 3123; b <= 3124; b++) {
                            cm.forceCompleteQuest(b);
                        }
                        for (var b = 3102; b <= 3103; b++) {
                            cm.forceCompleteQuest(b);
                        }
                        for (var b = 3266; b <= 3267; b++) {
                            cm.forceCompleteQuest(b);
                        }
                        for (var b = 31061; b <= 31068; b++) {
                            cm.forceCompleteQuest(b);
                        }
                        cm.forceCompleteQuest(3052);
                        cm.playerMessage(6, '【读档】任务存档_冰峰雪域 已读档！');
                    }
                    break;
                case 63086:
                    if (cm.getEventCount('任务存档_异逝界', 1) >= 1 || cm.getPlayer().isGM()) {
                        for (var b = 63020; b <= 63110; b++) {
                            cm.forceCompleteQuest(b);
                        }
                        for (var b = 63120; b <= 63086; b++) {
                            cm.forceCompleteQuest(b);
                        }
                        cm.forceCompleteQuest(63164);
                        cm.playerMessage(6, '【读档】任务存档_异逝界 已读档！');
                    }
                    break;
                case 23976:
                    if (cm.getEventCount('任务存档_埃德尔斯坦', 1) >= 1 || cm.getPlayer().isGM()) {
                        for (var b = 23910; b <= 23976; b++) {
                            cm.forceCompleteQuest(b);
                        }
                        for (var b = 23985; b <= 23987; b++) {
                            cm.forceCompleteQuest(b);
                        }
                        cm.playerMessage(6, '【读档】任务存档_埃德尔斯坦 已读档！');
                    }
                    break;
                case 36001:
                    if (cm.getEventCount('任务存档_阿里安特', 1) >= 1 || cm.getPlayer().isGM()) {
                        for (var b = 3900; b <= 3954; b++) {
                            cm.forceCompleteQuest(b);
                        }
                        for (var b = 3955; b <= 3988; b++) {
                            cm.forceCompleteQuest(b);
                        }
                        for (var b = 3997; b <= 3999; b++) {
                            cm.forceCompleteQuest(b);
                        }
                        for (var b = 36000; b <= 36001; b++) {
                            cm.forceCompleteQuest(b);
                        }
                        cm.playerMessage(6, '【读档】任务存档_阿里安特 已读档！');
                    }
                    break;
                case 3387:
                    if (cm.getEventCount('任务存档_玛加提亚', 1) >= 1 || cm.getPlayer().isGM()) {
                        for (var b = 3300; b <= 3362; b++) {
                            cm.forceCompleteQuest(b);
                        }
                        for (var b = 3386; b <= 3387; b++) {
                            cm.forceCompleteQuest(b);
                        }
                        cm.playerMessage(6, '【读档】任务存档_玛加提亚 已读档！');
                    }
                    break;
                case 31232:
                    if (cm.getEventCount('任务存档_艾琳森林', 1) >= 1 || cm.getPlayer().isGM()) {
                        for (var b = 31200; b <= 31229; b++) {
                            cm.forceCompleteQuest(b);
                        }
                        cm.forceCompleteQuest(31232);
                        cm.playerMessage(6, '【读档】任务存档_艾琳森林 已读档！');
                    }
                    break;
                case 3265:
                    if (cm.getEventCount('任务存档_玩具城', 1) >= 1 || cm.getPlayer().isGM()) {
                        for (var b = 3200; b <= 3262; b++) {
                            cm.forceCompleteQuest(b);
                        }
                        for (var b = 3264; b <= 3265; b++) {
                            cm.forceCompleteQuest(b);
                        }
                        cm.playerMessage(6, '【读档】任务存档_玩具城 已读档！');
                    }
                    break;
                case 3178:
                    if (cm.getEventCount('任务存档_狮子王城', 1) >= 1 || cm.getPlayer().isGM()) {
                        for (var b = 3138; b <= 3151; b++) {
                            cm.forceCompleteQuest(b);
                        }
                        for (var b = 3163; b <= 3178; b++) {
                            cm.forceCompleteQuest(b);
                        }
                        for (var b = 3181; b <= 3182; b++) {
                            cm.forceCompleteQuest(b);
                        }
                        for (var b = 31036; b <= 31043; b++) {
                            cm.forceCompleteQuest(b);
                        }
                        cm.forceCompleteQuest(3154);
                        cm.playerMessage(6, '【读档】任务存档_狮子王城 已读档！');
                    }
                    break;
                case 3471:
                    if (cm.getEventCount('任务存档_时间塔最下层', 1) >= 1 || cm.getPlayer().isGM()) {
                        for (var b = 3462; b <= 3472; b++) {
                            cm.forceCompleteQuest(b);
                        }
                        cm.playerMessage(6, '【读档】任务存档_时间塔最下层 已读档！');
                    }
                    break;
                case 31386:
                    if (cm.getEventCount('任务存档_梦幻主题公园', 1) >= 1 || cm.getPlayer().isGM()) {
                        for (var b = 31363; b <= 31387; b++) {
                            cm.forceCompleteQuest(b);
                        }
                        for (var b = 31390; b <= 31391; b++) {
                            cm.forceCompleteQuest(b);
                        }
                        for (var b = 4576; b <= 4577; b++) {
                            cm.forceCompleteQuest(b);
                        }
                        cm.playerMessage(6, '【读档】任务存档_梦幻主题公园 已读档！');
                    }
                    break;
                case 30458:
                    if (cm.getEventCount('任务存档_童话村', 1) >= 1 || cm.getPlayer().isGM()) {
                        for (var b = 30400; b <= 30459; b++) {
                            cm.forceCompleteQuest(b);
                        }
                        for (var b = 30300; b <= 30306; b++) {
                            cm.forceCompleteQuest(b);
                        }
                        cm.playerMessage(6, '【读档】任务存档_童话村 已读档！');
                    }
                    break;
                case 3872:
                    if (cm.getEventCount('任务存档_黄金寺院', 1) >= 1 || cm.getPlayer().isGM()) {
                        for (var b = 3853; b <= 3872; b++) {
                            cm.forceCompleteQuest(b);
                        }
                        cm.playerMessage(6, '【读档】任务存档_黄金寺院 已读档！');
                    }
                    break;
                case 31266:
                    if (cm.getEventCount('任务存档_克林逊森林', 1) >= 1 || cm.getPlayer().isGM()) {
                        for (var b = 31240; b <= 31261; b++) {
                            cm.forceCompleteQuest(b);
                        }
                        cm.forceCompleteQuest(31266);
                        cm.playerMessage(6, '【读档】任务存档_克林逊森林 已读档！');
                    }
                    break;
                case 35980:
                    if (cm.getEventCount('任务存档_帕勒坦', 1) >= 1 || cm.getPlayer().isGM()) {
                        for (var b = 35951; b <= 35984; b++) {
                            cm.forceCompleteQuest(b);
                        }
                        cm.playerMessage(6, '【读档】任务存档_帕勒坦 已读档！');
                    }
                    break;
                case 3556:
                    if (cm.getEventCount('任务存档_时间神殿', 1) >= 1 || cm.getPlayer().isGM()) {
                        for (var b = 3500; b <= 3563; b++) {
                            cm.forceCompleteQuest(b);
                        }
                        cm.playerMessage(6, '【读档】任务存档_时间神殿 已读档！');
                    }
                    break;
                case 17681:
                    if (cm.getEventCount('任务存档_凯梅尔兹', 1) >= 1 || cm.getPlayer().isGM()) {
                        for (var b = 17600; b <= 17682; b++) {
                            cm.forceCompleteQuest(b);
                        }
                        for (var b = 17700; b <= 17721; b++) {
                            cm.forceCompleteQuest(b);
                        }
                        for (var b = 17730; b <= 17731; b++) {
                            cm.forceCompleteQuest(b);
                        }
                        for (var b = 17740; b <= 17742; b++) {
                            cm.forceCompleteQuest(b);
                        }
                        for (var b = 17910; b <= 17931; b++) {
                            cm.forceCompleteQuest(b);
                        }
                        cm.playerMessage(6, '【读档】任务存档_凯梅尔兹 已读档！');
                    }
                    break;
                case 62146:
                    if (cm.getEventCount('任务存档_东方神州', 1) >= 1 || cm.getPlayer().isGM()) {
                        for (var b = 62111; b <= 62146; b++) {
                            cm.forceCompleteQuest(b);
                        }
                        for (var b = 62100; b <= 62105; b++) {
                            cm.forceCompleteQuest(b);
                        }
                        cm.playerMessage(6, '【读档】任务存档_东方神州 已读档！');
                    }
                    break;
                case 34432:
                    if (cm.getEventCount('任务存档_废都塔', 1) >= 1 || cm.getPlayer().isGM()) {
                        for (var b = 34400; b <= 34433; b++) {
                            cm.forceCompleteQuest(b);
                        }
                        for (var b = 34439; b <= 34440; b++) {
                            cm.forceCompleteQuest(b);
                        }
                        cm.playerMessage(6, '【读档】任务存档_废都塔 已读档！');
                    }
                    break;
                case 62037:
                    if (cm.getEventCount('任务存档_少林寺', 1) >= 1 || cm.getPlayer().isGM()) {
                        for (var b = 62000; b <= 62037; b++) {
                            cm.forceCompleteQuest(b);
                        }
                        cm.playerMessage(6, '【读档】任务存档_少林寺 已读档！');
                    }
                    break;
                case 31353:
                    if (cm.getEventCount('任务存档_岩壁巨人', 1) >= 1 || cm.getPlayer().isGM()) {
                        for (var b = 31330; b <= 31355; b++) {
                            cm.forceCompleteQuest(b);
                        }
                        cm.playerMessage(6, '【读档】任务存档_岩壁巨人 已读档！');
                    }
                    break;
                case 31092:
                    if (cm.getEventCount('任务存档_破坏的射手村', 1) >= 1 || cm.getPlayer().isGM()) {
                        for (var b = 31100; b <= 31160; b++) {
                            cm.forceCompleteQuest(b);
                        }
                        for (var b = 31091; b <= 31092; b++) {
                            cm.forceCompleteQuest(b);
                        }
                        cm.playerMessage(6, '【读档】任务存档_破坏的射手村 已读档！');
                    }
                    break;
                case 3496:
                    if (cm.getEventCount('任务存档_地球防御本部', 1) >= 1 || cm.getPlayer().isGM()) {
                        for (var b = 3475; b <= 3499; b++) {
                            cm.forceCompleteQuest(b);
                        }
                        cm.playerMessage(6, '【读档】任务存档_地球防御本部 已读档！');
                    }
                    break;
                case 32524:
                    if (cm.getEventCount('任务存档_克里蒂亚斯', 1) >= 1 || cm.getPlayer().isGM()) {
                        for (var b = 32490; b <= 32524; b++) {
                            cm.forceCompleteQuest(b);
                        }
                        cm.playerMessage(6, '【读档】任务存档_克里蒂亚斯 已读档！');
                    }
                    break;
                case 31094:
                    if (cm.getEventCount('任务存档_黄昏勇士部落', 1) >= 1 || cm.getPlayer().isGM()) {
                        for (var b = 31900; b <= 31944; b++) {
                            cm.forceCompleteQuest(b);
                        }
                        for (var b = 31093; b <= 31094; b++) {
                            cm.forceCompleteQuest(b);
                        }
                        cm.playerMessage(6, '【读档】任务存档_黄昏勇士部落 已读档！');
                    }
                    break;
                case 34766:
                    if (cm.getEventCount('任务存档_狐狸谷', 1) >= 1 || cm.getPlayer().isGM()) {
                        for (var b = 34740; b <= 34767; b++) {
                            cm.forceCompleteQuest(b);
                        }
                        cm.playerMessage(6, '【读档】任务存档_狐狸谷 已读档！');
                    }
                    break;
                case 39209:
                    if (cm.getEventCount('任务存档_避风港', 1) >= 1 || cm.getPlayer().isGM()) {
                        for (var b = 39200; b <= 39209; b++) {
                            cm.forceCompleteQuest(b);
                        }
                        cm.playerMessage(6, '【读档】任务存档_避风港 已读档！');
                    }
                    break;
                case 30013:
                    if (cm.getEventCount('任务存档_鲁塔比斯', 1) >= 1 || cm.getPlayer().isGM()) {
                        for (var b = 30000; b <= 30013; b++) {
                            cm.forceCompleteQuest(b);
                        }
                        cm.playerMessage(6, '【读档】任务存档_鲁塔比斯 已读档！');
                    }
                    break;
                case 3897:
                    if (cm.getEventCount('任务存档_武陵', 1) >= 1 || cm.getPlayer().isGM()) {
                        for (var b = 3800; b <= 3845; b++) {
                            cm.forceCompleteQuest(b);
                        }
                        for (var b = 3851; b <= 3852; b++) {
                            cm.forceCompleteQuest(b);
                        }
                        for (var b = 3896; b <= 3897; b++) {
                            cm.forceCompleteQuest(b);
                        }
                        cm.playerMessage(6, '【读档】任务存档_武陵 已读档！');
                    }
                    break;
                case 1674:
                    if (cm.getEventCount('任务存档_十字猎人', 1) >= 1 || cm.getPlayer().isGM()) {
                        for (var b = 1600; b <= 1686; b++) {
                            cm.forceCompleteQuest(b);
                        }
                        cm.playerMessage(6, '【读档】任务存档_十字猎人 已读档！');
                    }
                    break;
                case 33288:
                    if (cm.getEventCount('任务存档_黑色天堂', 1) >= 1 || cm.getPlayer().isGM()) {
                        for (var b = 33120; b <= 33320; b++) {
                            cm.forceCompleteQuest(b);
                        }
                        cm.playerMessage(6, '【读档】任务存档_黑色天堂 已读档！');
                    }
                    break;
                case 32648:
                    if (cm.getEventCount('任务存档_白魔法师', 1) >= 1 || cm.getPlayer().isGM()) {
                        for (var b = 32626; b <= 32650; b++) {
                            cm.forceCompleteQuest(b);
                        }
                        cm.playerMessage(6, '【读档】任务存档_白魔法师 已读档！');
                    }
                    break;
                case 32625:
                    if (cm.getEventCount('任务存档_成为女皇的方法', 1) >= 1 || cm.getPlayer().isGM()) {
                        for (var b = 32605; b <= 32625; b++) {
                            cm.forceCompleteQuest(b);
                        }
                        cm.playerMessage(6, '【读档】任务存档_成为女皇的方法 已读档！');
                    }
                    break;
                case 32661:
                    if (cm.getEventCount('任务存档_黑魔女', 1) >= 1 || cm.getPlayer().isGM()) {
                        for (var b = 32651; b <= 32661; b++) {
                            cm.forceCompleteQuest(b);
                        }
                        cm.playerMessage(6, '【读档】任务存档_黑魔女 已读档！');
                    }
                    break;
                case 32695:
                    if (cm.getEventCount('任务存档_雪原吟游诗人', 1) >= 1 || cm.getPlayer().isGM()) {
                        for (var b = 32671; b <= 32696; b++) {
                            cm.forceCompleteQuest(b);
                        }
                        cm.playerMessage(6, '【读档】任务存档_雪原吟游诗人 已读档！');
                    }
                    break;
                case 32988:
                    if (cm.getEventCount('任务存档_影子炼金术士', 1) >= 1 || cm.getPlayer().isGM()) {
                        for (var b = 32970; b <= 32991; b++) {
                            cm.forceCompleteQuest(b);
                        }
                        cm.playerMessage(6, '【读档】任务存档_影子炼金术士 已读档！');
                    }
                    break;
                case 32871:
                    if (cm.getEventCount('任务存档_好友故事', 1) >= 1 || cm.getPlayer().isGM()) {
                        for (var b = 32707; b <= 32872; b++) {
                            cm.forceCompleteQuest(b);
                        }
                        cm.playerMessage(6, '【读档】任务存档_好友故事 已读档！');
                    }
                    break;
                case 58821:
                    if (cm.getEventCount('任务存档_蘑菇神社', 1) >= 1 || cm.getPlayer().isGM()) {
                        for (var b = 58720; b <= 58821; b++) {
                            cm.forceCompleteQuest(b);
                        }
                        cm.playerMessage(6, '【读档】任务存档_蘑菇神社 已读档！');
                    }
                    break;
                case 61366:
                    if (cm.getEventCount('任务存档_克拉齐亚', 1) >= 1 || cm.getPlayer().isGM()) {
                        for (var b = 61335; b <= 61373; b++) {
                            cm.forceCompleteQuest(b);
                        }
                        cm.playerMessage(6, '【读档】任务存档_克拉齐亚 已读档！');
                    }
                    break;
                case 64216:
                    if (cm.getEventCount('任务存档_莫奈得', 1) >= 1 || cm.getPlayer().isGM()) {
                        for (var b = 64010; b <= 64217; b++) {
                            cm.forceCompleteQuest(b);
                        }
                        cm.playerMessage(6, '【读档】任务存档_莫奈得 已读档！');
                    }
                    break;
                case 34120:
                    if (cm.getEventCount('任务存档_消亡旅途', 1) >= 1 || cm.getPlayer().isGM()) {
                        for (var b = 34100; b <= 34120; b++) {
                            cm.forceCompleteQuest(b);
                        }
                        cm.playerMessage(6, '【读档】任务存档_消亡旅途 已读档！');
                    }
                    break;
                case 34218:
                    if (cm.getEventCount('任务存档_啾啾岛', 1) >= 1 || cm.getPlayer().isGM()) {
                        for (var b = 34200; b <= 34218; b++) {
                            cm.forceCompleteQuest(b);
                        }
                        cm.playerMessage(6, '【读档】任务存档_啾啾岛 已读档！');
                    }
                    break;
                case 34331:
                    if (cm.getEventCount('任务存档_拉克兰', 1) >= 1 || cm.getPlayer().isGM()) {
                        for (var b = 34300; b <= 34376; b++) {
                            cm.forceCompleteQuest(b);
                        }
                        cm.playerMessage(6, '【读档】任务存档_拉克兰 已读档！');
                    }
                    break;
                case 34478:
                    if (cm.getEventCount('任务存档_阿尔卡那', 1) >= 1 || cm.getPlayer().isGM()) {
                        for (var b = 34450; b <= 34490; b++) {
                            cm.forceCompleteQuest(b);
                        }
                        cm.playerMessage(6, '【读档】任务存档_阿尔卡那 已读档！');
                    }
                    break;
                case 34272:
                    if (cm.getEventCount('任务存档_莫拉斯', 1) >= 1 || cm.getPlayer().isGM()) {
                        for (var b = 34230; b <= 34272; b++) {
                            cm.forceCompleteQuest(b);
                        }
                        cm.playerMessage(6, '【读档】任务存档_莫拉斯 已读档！');
                    }
                    break;
                case 34591:
                    if (cm.getEventCount('任务存档_埃斯佩拉', 1) >= 1 || cm.getPlayer().isGM()) {
                        for (var b = 34561; b <= 34593; b++) {
                            cm.forceCompleteQuest(b);
                        }
                        cm.playerMessage(6, '【读档】任务存档_埃斯佩拉 已读档！');
                    }
                    break;
                case 37620:
                    if (cm.getEventCount('任务存档_反转城', 1) >= 1 || cm.getPlayer().isGM()) {
                        for (var b = 37601; b <= 37620; b++) {
                            cm.forceCompleteQuest(b);
                        }
                        cm.playerMessage(6, '【读档】任务存档_反转城 已读档！');
                    }
                    break;
                case 37726:
                    if (cm.getEventCount('任务存档_真香岛', 1) >= 1 || cm.getPlayer().isGM()) {
                        for (var b = 37701; b <= 37726; b++) {
                            cm.forceCompleteQuest(b);
                        }
                        cm.playerMessage(6, '【读档】任务存档_真香岛 已读档！');
                    }
                    break;
                case 35635:
                    if (cm.getEventCount('任务存档_月桥', 1) >= 1 || cm.getPlayer().isGM()) {
                        for (var b = 35600; b <= 35635; b++) {
                            cm.forceCompleteQuest(b);
                        }
                        cm.playerMessage(6, '【读档】任务存档_月桥 已读档！');
                    }
                    break;
                case 35740:
                    if (cm.getEventCount('任务存档_痛苦迷宫', 1) >= 1 || cm.getPlayer().isGM()) {
                        for (var b = 35700; b <= 35756; b++) {
                            cm.forceCompleteQuest(b);
                        }
                        cm.playerMessage(6, '【读档】任务存档_痛苦迷宫 已读档！');
                    }
                    break;
                case 35815:
                    if (cm.getEventCount('任务存档_黎曼', 1) >= 1 || cm.getPlayer().isGM()) {
                        for (var b = 35800; b <= 35837; b++) {
                            cm.forceCompleteQuest(b);
                        }
                        cm.playerMessage(6, '【读档】任务存档_黎曼 已读档！');
                    }
                    break;
                case 37312:
                    if (cm.getEventCount('任务存档_大世无界', 1) >= 1 || cm.getPlayer().isGM()) {
                        for (var b = 37201; b <= 37203; b++) {
                            cm.forceCompleteQuest(b);
                        }
                        for (var b = 37301; b <= 37312; b++) {
                            cm.forceCompleteQuest(b);
                        }
                        cm.playerMessage(6, '【读档】任务存档_大世无界 已读档！');
                    }
                    break;
                case 37417:
                    if (cm.getEventCount('任务存档_圣地与圣剑', 1) >= 1 || cm.getPlayer().isGM()) {
                        for (var b = 37401; b <= 37417; b++) {
                            cm.forceCompleteQuest(b);
                        }
                        cm.playerMessage(6, '【读档】任务存档_圣地与圣剑 已读档！');
                    }
                    break;
                case 37520:
                    if (cm.getEventCount('任务存档_被选中之人', 1) >= 1 || cm.getPlayer().isGM()) {
                        for (var b = 37501; b <= 37520; b++) {
                            cm.forceCompleteQuest(b);
                        }
                        cm.playerMessage(6, '【读档】任务存档_被选中之人 已读档！');
                    }
                    break;
                case 31180:
                    if (cm.getEventCount('任务存档_阿卡伊勒', 1) >= 1 || cm.getPlayer().isGM()) {
                        for (var b = 31167; b <= 31180; b++) {
                            cm.forceCompleteQuest(b);
                        }
                        cm.playerMessage(6, '【读档】任务存档_阿卡伊勒 已读档！');
                    }
                    break;
                case 10086:
                    if (cm.getEventCount('任务存档_过时任务', 1) >= 1 || cm.getPlayer().isGM()) {
                        for (var b = 4200; b <= 4218; b++) {
                            cm.forceCompleteQuest(b);
                        }
                        for (var b = 4503; b <= 4560; b++) {
                            cm.forceCompleteQuest(b);
                        }
                        for (var b = 4027; b <= 4030; b++) {
                            cm.forceCompleteQuest(b);
                        }
                        for (var b = 8000; b <= 8030; b++) {
                            cm.forceCompleteQuest(b);
                        }
                        for (var b = 3065; b <= 3068; b++) {
                            cm.forceCompleteQuest(b);
                        }
                        for (var b = 3075; b <= 3085; b++) {
                            cm.forceCompleteQuest(b);
                        }
                        cm.playerMessage(6, '【读档】任务存档_过时任务 已读档！');
                    }
                    break;
                default:
                    cm.dispose;
                    break;
                }
                cm.dispose();
                cm.openNpc(9110002, '任务读档_至尊版');
            }
        }
    }
}
function action存档() {
    if (cm.getQuestStatus(30071) != 0 && cm.getEventCount('任务存档_蘑菇城', 1) <= 0) {
        cm.setEventCount('任务存档_蘑菇城', 1);
        cm.playerMessage(6, '【存档】任务存档_蘑菇城 已存档！');
    }
    if (cm.getQuestStatus(32132) != 0 && cm.getEventCount('任务存档_妖精学院', 1) <= 0) {
        cm.setEventCount('任务存档_妖精学院', 1);
        cm.playerMessage(6, '【存档】任务存档_妖精学院 已存档！');
    }
    if (cm.getQuestStatus(2976) != 0 && cm.getEventCount('任务存档_金海滩', 1) <= 0) {
        cm.setEventCount('任务存档_金海滩', 1);
        cm.playerMessage(6, '【存档】任务存档_金海滩 已存档！');
    }
    if (cm.getQuestStatus(32195) != 0 && cm.getEventCount('任务存档_列娜海峡', 1) <= 0) {
        cm.setEventCount('任务存档_列娜海峡', 1);
        cm.playerMessage(6, '【存档】任务存档_列娜海峡 已存档！');
    }
    if (cm.getQuestStatus(37180) != 0 && cm.getEventCount('任务存档_艾洛丁', 1) <= 0) {
        cm.setEventCount('任务存档_艾洛丁', 1);
        cm.playerMessage(6, '【存档】任务存档_艾洛丁 已存档！');
    }
    if (cm.getQuestStatus(2846) != 0 && cm.getEventCount('任务存档_勇士部落', 1) <= 0) {
        cm.setEventCount('任务存档_勇士部落', 1);
        cm.playerMessage(6, '【存档】任务存档_勇士部落 已存档！');
    }
    if (cm.getQuestStatus(2895) != 0 && cm.getEventCount('任务存档_废弃都市', 1) <= 0) {
        cm.setEventCount('任务存档_废弃都市', 1);
        cm.playerMessage(6, '【存档】任务存档_废弃都市 已存档！');
    }
    if (cm.getQuestStatus(2297) != 0 && cm.getEventCount('任务存档_林中之城', 1) <= 0) {
        cm.setEventCount('任务存档_林中之城', 1);
        cm.playerMessage(6, '【存档】任务存档_林中之城 已存档！');
    }
    if (cm.getQuestStatus(3160) != 0 && cm.getEventCount('任务存档_天空之城', 1) <= 0) {
        cm.setEventCount('任务存档_天空之城', 1);
        cm.playerMessage(6, '【存档】任务存档_天空之城 已存档！');
    }
    if (cm.getQuestStatus(3267) != 0 && cm.getEventCount('任务存档_冰峰雪域', 1) <= 0) {
        cm.setEventCount('任务存档_冰峰雪域', 1);
        cm.playerMessage(6, '【存档】任务存档_冰峰雪域 已存档！');
    }
    if (cm.getQuestStatus(63086) != 0 && cm.getEventCount('任务存档_异逝界', 1) <= 0) {
        cm.setEventCount('任务存档_异逝界', 1);
        cm.playerMessage(6, '【存档】任务存档_异逝界 已存档！');
    }
    if (cm.getQuestStatus(23976) != 0 && cm.getEventCount('任务存档_埃德尔斯坦', 1) <= 0) {
        cm.setEventCount('任务存档_埃德尔斯坦', 1);
        cm.playerMessage(6, '【存档】任务存档_埃德尔斯坦 已存档！');
    }
    if (cm.getQuestStatus(36001) != 0 && cm.getEventCount('任务存档_阿里安特', 1) <= 0) {
        cm.setEventCount('任务存档_阿里安特', 1);
        cm.playerMessage(6, '【存档】任务存档_阿里安特 已存档！');
    }
    if (cm.getQuestStatus(3387) != 0 && cm.getEventCount('任务存档_玛加提亚', 1) <= 0) {
        cm.setEventCount('任务存档_玛加提亚', 1);
        cm.playerMessage(6, '【存档】任务存档_玛加提亚 已存档！');
    }
    if (cm.getQuestStatus(31232) != 0 && cm.getEventCount('任务存档_艾琳森林', 1) <= 0) {
        cm.setEventCount('任务存档_艾琳森林', 1);
        cm.playerMessage(6, '【存档】任务存档_艾琳森林 已存档！');
    }
    if (cm.getQuestStatus(3265) != 0 && cm.getEventCount('任务存档_玩具城', 1) <= 0) {
        cm.setEventCount('任务存档_玩具城', 1);
        cm.playerMessage(6, '【存档】任务存档_玩具城 已存档！');
    }
    if (cm.getQuestStatus(3178) != 0 && cm.getEventCount('任务存档_狮子王城', 1) <= 0) {
        cm.setEventCount('任务存档_狮子王城', 1);
        cm.playerMessage(6, '【存档】任务存档_狮子王城 已存档！');
    }
    if (cm.getQuestStatus(3471) != 0 && cm.getEventCount('任务存档_时间塔最下层', 1) <= 0) {
        cm.setEventCount('任务存档_时间塔最下层', 1);
        cm.playerMessage(6, '【存档】任务存档_时间塔最下层 已存档！');
    }
    if (cm.getQuestStatus(31386) != 0 && cm.getEventCount('任务存档_梦幻主题公园', 1) <= 0) {
        cm.setEventCount('任务存档_梦幻主题公园', 1);
        cm.playerMessage(6, '【存档】任务存档_梦幻主题公园 已存档！');
    }
    if (cm.getQuestStatus(30458) != 0 && cm.getEventCount('任务存档_童话村', 1) <= 0) {
        cm.setEventCount('任务存档_童话村', 1);
        cm.playerMessage(6, '【存档】任务存档_童话村 已存档！');
    }
    if (cm.getQuestStatus(3872) != 0 && cm.getEventCount('任务存档_黄金寺院', 1) <= 0) {
        cm.setEventCount('任务存档_黄金寺院', 1);
        cm.playerMessage(6, '【存档】任务存档_黄金寺院 已存档！');
    }
    if (cm.getQuestStatus(31266) != 0 && cm.getEventCount('任务存档_克林逊森林', 1) <= 0) {
        cm.setEventCount('任务存档_克林逊森林', 1);
        cm.playerMessage(6, '【存档】任务存档_克林逊森林 已存档！');
    }
    if (cm.getQuestStatus(35980) != 0 && cm.getEventCount('任务存档_帕勒坦', 1) <= 0) {
        cm.setEventCount('任务存档_帕勒坦', 1);
        cm.playerMessage(6, '【存档】任务存档_帕勒坦 已存档！');
    }
    if (cm.getQuestStatus(3556) != 0 && cm.getEventCount('任务存档_时间神殿', 1) <= 0) {
        cm.setEventCount('任务存档_时间神殿', 1);
        cm.playerMessage(6, '【存档】任务存档_时间神殿 已存档！');
    }
    if (cm.getQuestStatus(17681) != 0 && cm.getEventCount('任务存档_凯梅尔兹', 1) <= 0) {
        cm.setEventCount('任务存档_凯梅尔兹', 1);
        cm.playerMessage(6, '【存档】任务存档_凯梅尔兹 已存档！');
    }
    if (cm.getQuestStatus(62146) != 0 && cm.getEventCount('任务存档_东方神州', 1) <= 0) {
        cm.setEventCount('任务存档_东方神州', 1);
        cm.playerMessage(6, '【存档】任务存档_东方神州 已存档！');
    }
    if (cm.getQuestStatus(34432) != 0 && cm.getEventCount('任务存档_废都塔', 1) <= 0) {
        cm.setEventCount('任务存档_废都塔', 1);
        cm.playerMessage(6, '【存档】任务存档_废都塔 已存档！');
    }
    if (cm.getQuestStatus(62037) != 0 && cm.getEventCount('任务存档_少林寺', 1) <= 0) {
        cm.setEventCount('任务存档_少林寺', 1);
        cm.playerMessage(6, '【存档】任务存档_少林寺 已存档！');
    }
    if (cm.getQuestStatus(31353) != 0 && cm.getEventCount('任务存档_岩壁巨人', 1) <= 0) {
        cm.setEventCount('任务存档_岩壁巨人', 1);
        cm.playerMessage(6, '【存档】任务存档_岩壁巨人 已存档！');
    }
    if (cm.getQuestStatus(31092) != 0 && cm.getEventCount('任务存档_破坏的射手村', 1) <= 0) {
        cm.setEventCount('任务存档_破坏的射手村', 1);
        cm.playerMessage(6, '【存档】任务存档_破坏的射手村 已存档！');
    }
    if (cm.getQuestStatus(3496) != 0 && cm.getEventCount('任务存档_地球防御本部', 1) <= 0) {
        cm.setEventCount('任务存档_地球防御本部', 1);
        cm.playerMessage(6, '【存档】任务存档_地球防御本部 已存档！');
    }
    if (cm.getQuestStatus(32524) != 0 && cm.getEventCount('任务存档_克里蒂亚斯', 1) <= 0) {
        cm.setEventCount('任务存档_克里蒂亚斯', 1);
        cm.playerMessage(6, '【存档】任务存档_克里蒂亚斯 已存档！');
    }
    if (cm.getQuestStatus(31094) != 0 && cm.getEventCount('任务存档_黄昏勇士部落', 1) <= 0) {
        cm.setEventCount('任务存档_黄昏勇士部落', 1);
        cm.playerMessage(6, '【存档】任务存档_黄昏勇士部落 已存档！');
    }
    if (cm.getQuestStatus(34766) != 0 && cm.getEventCount('任务存档_狐狸谷', 1) <= 0) {
        cm.setEventCount('任务存档_狐狸谷', 1);
        cm.playerMessage(6, '【存档】任务存档_狐狸谷 已存档！');
    }
    if (cm.getQuestStatus(39209) != 0 && cm.getEventCount('任务存档_避风港', 1) <= 0) {
        cm.setEventCount('任务存档_避风港', 1);
        cm.playerMessage(6, '【存档】任务存档_避风港 已存档！');
    }
    if (cm.getQuestStatus(30013) != 0 && cm.getEventCount('任务存档_鲁塔比斯', 1) <= 0) {
        cm.setEventCount('任务存档_鲁塔比斯', 1);
        cm.playerMessage(6, '【存档】任务存档_鲁塔比斯 已存档！');
    }
    if (cm.getQuestStatus(3897) != 0 && cm.getEventCount('任务存档_武陵', 1) <= 0) {
        cm.setEventCount('任务存档_武陵', 1);
        cm.playerMessage(6, '【存档】任务存档_武陵 已存档！');
    }
    if (cm.getQuestStatus(1674) != 0 && cm.getEventCount('任务存档_十字猎人', 1) <= 0) {
        cm.setEventCount('任务存档_十字猎人', 1);
        cm.playerMessage(6, '【存档】任务存档_十字猎人 已存档！');
    }
    if (cm.getQuestStatus(33288) != 0 && cm.getEventCount('任务存档_黑色天堂', 1) <= 0) {
        cm.setEventCount('任务存档_黑色天堂', 1);
        cm.playerMessage(6, '【存档】任务存档_黑色天堂 已存档！');
    }
    if (cm.getQuestStatus(32648) != 0 && cm.getEventCount('任务存档_白魔法师', 1) <= 0) {
        cm.setEventCount('任务存档_白魔法师', 1);
        cm.playerMessage(6, '【存档】任务存档_白魔法师 已存档！');
    }
    if (cm.getQuestStatus(32625) != 0 && cm.getEventCount('任务存档_成为女皇的方法', 1) <= 0) {
        cm.setEventCount('任务存档_成为女皇的方法', 1);
        cm.playerMessage(6, '【存档】任务存档_成为女皇的方法 已存档！');
    }
    if (cm.getQuestStatus(32661) != 0 && cm.getEventCount('任务存档_黑魔女', 1) <= 0) {
        cm.setEventCount('任务存档_黑魔女', 1);
        cm.playerMessage(6, '【存档】任务存档_黑魔女 已存档！');
    }
    if (cm.getQuestStatus(32695) != 0 && cm.getEventCount('任务存档_雪原吟游诗人', 1) <= 0) {
        cm.setEventCount('任务存档_雪原吟游诗人', 1);
        cm.playerMessage(6, '【存档】任务存档_雪原吟游诗人 已存档！');
    }
    if (cm.getQuestStatus(32988) != 0 && cm.getEventCount('任务存档_影子炼金术士', 1) <= 0) {
        cm.setEventCount('任务存档_影子炼金术士', 1);
        cm.playerMessage(6, '【存档】任务存档_影子炼金术士 已存档！');
    }
    if (cm.getQuestStatus(32871) != 0 && cm.getEventCount('任务存档_好友故事', 1) <= 0) {
        cm.setEventCount('任务存档_好友故事', 1);
        cm.playerMessage(6, '【存档】任务存档_好友故事 已存档！');
    }
    if (cm.getQuestStatus(58821) != 0 && cm.getEventCount('任务存档_蘑菇神社', 1) <= 0) {
        cm.setEventCount('任务存档_蘑菇神社', 1);
        cm.playerMessage(6, '【存档】任务存档_蘑菇神社 已存档！');
    }
    if (cm.getQuestStatus(61366) != 0 && cm.getEventCount('任务存档_克拉齐亚', 1) <= 0) {
        cm.setEventCount('任务存档_克拉齐亚', 1);
        cm.playerMessage(6, '【存档】任务存档_克拉齐亚 已存档！');
    }
    if (cm.getQuestStatus(64216) != 0 && cm.getEventCount('任务存档_莫奈得', 1) <= 0) {
        cm.setEventCount('任务存档_莫奈得', 1);
        cm.playerMessage(6, '【存档】任务存档_莫奈得 已存档！');
    }
    if (cm.getQuestStatus(34120) != 0 && cm.getEventCount('任务存档_消亡旅途', 1) <= 0) {
        cm.setEventCount('任务存档_消亡旅途', 1);
        cm.playerMessage(6, '【存档】任务存档_消亡旅途 已存档！');
    }
    if (cm.getQuestStatus(34218) != 0 && cm.getEventCount('任务存档_啾啾岛', 1) <= 0) {
        cm.setEventCount('任务存档_啾啾岛', 1);
        cm.playerMessage(6, '【存档】任务存档_啾啾岛 已存档！');
    }
    if (cm.getQuestStatus(34331) != 0 && cm.getEventCount('任务存档_拉克兰', 1) <= 0) {
        cm.setEventCount('任务存档_拉克兰', 1);
        cm.playerMessage(6, '【存档】任务存档_拉克兰 已存档！');
    }
    if (cm.getQuestStatus(34478) != 0 && cm.getEventCount('任务存档_阿尔卡那', 1) <= 0) {
        cm.setEventCount('任务存档_阿尔卡那', 1);
        cm.playerMessage(6, '【存档】任务存档_阿尔卡那 已存档！');
    }
    if (cm.getQuestStatus(34272) != 0 && cm.getEventCount('任务存档_莫拉斯', 1) <= 0) {
        cm.setEventCount('任务存档_莫拉斯', 1);
        cm.playerMessage(6, '【存档】任务存档_莫拉斯 已存档！');
    }
    if (cm.getQuestStatus(34591) != 0 && cm.getEventCount('任务存档_埃斯佩拉', 1) <= 0) {
        cm.setEventCount('任务存档_埃斯佩拉', 1);
        cm.playerMessage(6, '【存档】任务存档_埃斯佩拉 已存档！');
    }
    if (cm.getQuestStatus(37620) != 0 && cm.getEventCount('任务存档_反转城', 1) <= 0) {
        cm.setEventCount('任务存档_反转城', 1);
        cm.playerMessage(6, '【存档】任务存档_反转城 已存档！');
    }
    if (cm.getQuestStatus(37726) != 0 && cm.getEventCount('任务存档_真香岛', 1) <= 0) {
        cm.setEventCount('任务存档_真香岛', 1);
        cm.playerMessage(6, '【存档】任务存档_真香岛 已存档！');
    }
    if (cm.getQuestStatus(35635) != 0 && cm.getEventCount('任务存档_月桥', 1) <= 0) {
        cm.setEventCount('任务存档_月桥', 1);
        cm.playerMessage(6, '【存档】任务存档_月桥 已存档！');
    }
    if (cm.getQuestStatus(35740) != 0 && cm.getEventCount('任务存档_痛苦迷宫', 1) <= 0) {
        cm.setEventCount('任务存档_痛苦迷宫', 1);
        cm.playerMessage(6, '【存档】任务存档_痛苦迷宫 已存档！');
    }
    if (cm.getQuestStatus(35815) != 0 && cm.getEventCount('任务存档_黎曼', 1) <= 0) {
        cm.setEventCount('任务存档_黎曼', 1);
        cm.playerMessage(6, '【存档】任务存档_黎曼 已存档！');
    }
    if (cm.getQuestStatus(37312) != 0 && cm.getEventCount('任务存档_大世无界', 1) <= 0) {
        cm.setEventCount('任务存档_大世无界', 1);
        cm.playerMessage(6, '【存档】任务存档_大世无界 已存档！');
    }
    if (cm.getQuestStatus(37417) != 0 && cm.getEventCount('任务存档_圣地与圣剑', 1) <= 0) {
        cm.setEventCount('任务存档_圣地与圣剑', 1);
        cm.playerMessage(6, '【存档】任务存档_圣地与圣剑 已存档！');
    }
    if (cm.getQuestStatus(37520) != 0 && cm.getEventCount('任务存档_被选中之人', 1) <= 0) {
        cm.setEventCount('任务存档_被选中之人', 1);
        cm.playerMessage(6, '【存档】任务存档_被选中之人 已存档！');
    }
    if (cm.getQuestStatus(31180) != 0 && cm.getEventCount('任务存档_阿卡伊勒', 1) <= 0) {
        cm.setEventCount('任务存档_阿卡伊勒', 1);
        cm.playerMessage(6, '【存档】任务存档_阿卡伊勒 已存档！');
    }
    if (cm.getEventCount('任务存档_过时任务', 1) <= 0) {
        cm.setEventCount('任务存档_过时任务', 1);
        cm.playerMessage(6, '【存档】任务存档_过时任务 已存档！');
    }
}
function action2(h, f, e, d) {
    var c = cm.getConstantScriptContent('菜单_NPC立绘');
    var b = Math.floor(Math.random() * c.length);
    var a = c[b][0];
    var g = randomNum(0, c[b][1]);
    if (status <= d++) {
        cm.askAcceptDecline_Bottom('#face' + g + '##fn方正粗黑宋简体##fs14# 读档需要一些时间，期间请不要进行其他操作。\r\n 遇到跳图黑屏等问题，重新再读档一次。\r\n #r（接受后，下载账号进度！）', a);
    } else {
        if (status === d++) {
            if (cm.getEventCount('任务存档_蘑菇城', 1) >= 1 || cm.getPlayer().isGM()) {
                for (var d = 30050; d <= 30074; d++) {
                    cm.forceCompleteQuest(d);
                    questCount++;
                }
                cm.playerMessage(6, '【读档】任务存档_蘑菇城 已读档！');
            }
            if (cm.getEventCount('任务存档_妖精学院', 1) >= 1 || cm.getPlayer().isGM()) {
                for (var d = 32100; d <= 32159; d++) {
                    cm.forceCompleteQuest(d);
                    questCount++;
                }
                cm.playerMessage(6, '【读档】任务存档_妖精学院 已读档！');
            }
            if (cm.getEventCount('任务存档_金海滩', 1) >= 1 || cm.getPlayer().isGM()) {
                for (var d = 2950; d <= 2976; d++) {
                    cm.forceCompleteQuest(d);
                    questCount++;
                }
                cm.playerMessage(6, '【读档】任务存档_金海滩 已读档！');
            }
            if (cm.getEventCount('任务存档_列娜海峡', 1) >= 1 || cm.getPlayer().isGM()) {
                for (var d = 32160; d <= 32195; d++) {
                    cm.forceCompleteQuest(d);
                    questCount++;
                }
                cm.playerMessage(6, '【读档】任务存档_列娜海峡 已读档！');
            }
            if (cm.getEventCount('任务存档_艾洛丁', 1) >= 1 || cm.getPlayer().isGM()) {
                for (var d = 37151; d <= 37180; d++) {
                    cm.forceCompleteQuest(d);
                    questCount++;
                }
                cm.playerMessage(6, '【读档】任务存档_艾洛丁 已读档！');
            }
            if (cm.getEventCount('任务存档_勇士部落', 1) >= 1 || cm.getPlayer().isGM()) {
                for (var d = 2800; d <= 2846; d++) {
                    cm.forceCompleteQuest(d);
                    questCount++;
                }
                cm.playerMessage(6, '【读档】任务存档_勇士部落 已读档！');
            }
            if (cm.getEventCount('任务存档_废弃都市', 1) >= 1 || cm.getPlayer().isGM()) {
                for (var d = 2850; d <= 2895; d++) {
                    cm.forceCompleteQuest(d);
                    questCount++;
                }
                cm.playerMessage(6, '【读档】任务存档_废弃都市 已读档！');
            }
            if (cm.getEventCount('任务存档_林中之城', 1) >= 1 || cm.getPlayer().isGM()) {
                for (var d = 2235; d <= 2245; d++) {
                    cm.forceCompleteQuest(d);
                    questCount++;
                }
                for (var d = 2265; d <= 2269; d++) {
                    cm.forceCompleteQuest(d);
                    questCount++;
                }
                for (var d = 2019; d <= 2023; d++) {
                    cm.forceCompleteQuest(d);
                    questCount++;
                }
                for (var d = 2581; d <= 2586; d++) {
                    cm.forceCompleteQuest(d);
                    questCount++;
                }
                for (var d = 2047; d <= 2048; d++) {
                    cm.forceCompleteQuest(d);
                    questCount++;
                }
                for (var d = 2096; d <= 2097; d++) {
                    cm.forceCompleteQuest(d);
                    questCount++;
                }
                for (var d = 2052; d <= 2054; d++) {
                    cm.forceCompleteQuest(d);
                    questCount++;
                }
                for (var d = 2296; d <= 2297; d++) {
                    cm.forceCompleteQuest(d);
                    questCount++;
                }
                cm.playerMessage(6, '【读档】任务存档_林中之城 已读档！');
            }
            if (cm.getEventCount('任务存档_天空之城', 1) >= 1 || cm.getPlayer().isGM()) {
                for (var d = 3111; d <= 3115; d++) {
                    cm.forceCompleteQuest(d);
                    questCount++;
                }
                for (var d = 3086; d <= 3088; d++) {
                    cm.forceCompleteQuest(d);
                    questCount++;
                }
                for (var d = 3097; d <= 3100; d++) {
                    cm.forceCompleteQuest(d);
                    questCount++;
                }
                for (var d = 3053; d <= 3064; d++) {
                    cm.forceCompleteQuest(d);
                    questCount++;
                }
                for (var d = 3042; d <= 3050; d++) {
                    cm.forceCompleteQuest(d);
                    questCount++;
                }
                for (var d = 31026; d <= 31034; d++) {
                    cm.forceCompleteQuest(d);
                    questCount++;
                }
                for (var d = 3159; d <= 3160; d++) {
                    cm.forceCompleteQuest(d);
                    questCount++;
                }
                cm.forceCompleteQuest(3038);
                questCount++;
                cm.forceCompleteQuest(3158);
                questCount++;
                cm.playerMessage(6, '【读档】任务存档_天空之城 已读档！');
            }
            if (cm.getEventCount('任务存档_冰峰雪域', 1) >= 1 || cm.getPlayer().isGM()) {
                for (var d = 3103; d <= 3110; d++) {
                    cm.forceCompleteQuest(d);
                    questCount++;
                }
                for (var d = 3000; d <= 3011; d++) {
                    cm.forceCompleteQuest(d);
                    questCount++;
                }
                for (var d = 3017; d <= 3041; d++) {
                    cm.forceCompleteQuest(d);
                    questCount++;
                }
                for (var d = 3184; d <= 3192; d++) {
                    cm.forceCompleteQuest(d);
                    questCount++;
                }
                for (var d = 3116; d <= 3120; d++) {
                    cm.forceCompleteQuest(d);
                    questCount++;
                }
                for (var d = 3070; d <= 3071; d++) {
                    cm.forceCompleteQuest(d);
                    questCount++;
                }
                for (var d = 3123; d <= 3124; d++) {
                    cm.forceCompleteQuest(d);
                    questCount++;
                }
                for (var d = 3102; d <= 3103; d++) {
                    cm.forceCompleteQuest(d);
                    questCount++;
                }
                for (var d = 3266; d <= 3267; d++) {
                    cm.forceCompleteQuest(d);
                    questCount++;
                }
                for (var d = 31061; d <= 31068; d++) {
                    cm.forceCompleteQuest(d);
                    questCount++;
                }
                cm.forceCompleteQuest(3052);
                questCount++;
                cm.playerMessage(6, '【读档】任务存档_冰峰雪域 已读档！');
            }
            if (cm.getEventCount('任务存档_异逝界', 1) >= 1 || cm.getPlayer().isGM()) {
                for (var d = 63020; d <= 63110; d++) {
                    cm.forceCompleteQuest(d);
                    questCount++;
                }
                for (var d = 63120; d <= 63086; d++) {
                    cm.forceCompleteQuest(d);
                    questCount++;
                }
                cm.forceCompleteQuest(63164);
                questCount++;
                cm.playerMessage(6, '【读档】任务存档_异逝界 已读档！');
            }
            if (cm.getEventCount('任务存档_埃德尔斯坦', 1) >= 1 || cm.getPlayer().isGM()) {
                for (var d = 23910; d <= 23976; d++) {
                    cm.forceCompleteQuest(d);
                    questCount++;
                }
                for (var d = 23985; d <= 23987; d++) {
                    cm.forceCompleteQuest(d);
                    questCount++;
                }
                cm.playerMessage(6, '【读档】任务存档_埃德尔斯坦 已读档！');
            }
            if (cm.getEventCount('任务存档_阿里安特', 1) >= 1 || cm.getPlayer().isGM()) {
                for (var d = 3900; d <= 3954; d++) {
                    cm.forceCompleteQuest(d);
                    questCount++;
                }
                for (var d = 3955; d <= 3988; d++) {
                    cm.forceCompleteQuest(d);
                    questCount++;
                }
                for (var d = 3997; d <= 3999; d++) {
                    cm.forceCompleteQuest(d);
                    questCount++;
                }
                for (var d = 36000; d <= 36001; d++) {
                    cm.forceCompleteQuest(d);
                    questCount++;
                }
                cm.playerMessage(6, '【读档】任务存档_阿里安特 已读档！');
            }
            if (cm.getEventCount('任务存档_玛加提亚', 1) >= 1 || cm.getPlayer().isGM()) {
                for (var d = 3300; d <= 3362; d++) {
                    cm.forceCompleteQuest(d);
                    questCount++;
                }
                for (var d = 3386; d <= 3387; d++) {
                    cm.forceCompleteQuest(d);
                    questCount++;
                }
                cm.playerMessage(6, '【读档】任务存档_玛加提亚 已读档！');
            }
            if (cm.getEventCount('任务存档_艾琳森林', 1) >= 1 || cm.getPlayer().isGM()) {
                for (var d = 31200; d <= 31229; d++) {
                    cm.forceCompleteQuest(d);
                    questCount++;
                }
                cm.forceCompleteQuest(31232);
                questCount++;
                cm.playerMessage(6, '【读档】任务存档_艾琳森林 已读档！');
            }
            if (cm.getEventCount('任务存档_玩具城', 1) >= 1 || cm.getPlayer().isGM()) {
                for (var d = 3200; d <= 3262; d++) {
                    cm.forceCompleteQuest(d);
                    questCount++;
                }
                for (var d = 3264; d <= 3265; d++) {
                    cm.forceCompleteQuest(d);
                    questCount++;
                }
                cm.playerMessage(6, '【读档】任务存档_玩具城 已读档！');
            }
            if (cm.getEventCount('任务存档_狮子王城', 1) >= 1 || cm.getPlayer().isGM()) {
                for (var d = 3138; d <= 3151; d++) {
                    cm.forceCompleteQuest(d);
                    questCount++;
                }
                for (var d = 3163; d <= 3178; d++) {
                    cm.forceCompleteQuest(d);
                    questCount++;
                }
                for (var d = 3181; d <= 3182; d++) {
                    cm.forceCompleteQuest(d);
                    questCount++;
                }
                for (var d = 31036; d <= 31043; d++) {
                    cm.forceCompleteQuest(d);
                    questCount++;
                }
                cm.forceCompleteQuest(3154);
                questCount++;
                cm.playerMessage(6, '【读档】任务存档_狮子王城 已读档！');
            }
            if (cm.getEventCount('任务存档_时间塔最下层', 1) >= 1 || cm.getPlayer().isGM()) {
                for (var d = 3462; d <= 3472; d++) {
                    cm.forceCompleteQuest(d);
                    questCount++;
                }
                cm.playerMessage(6, '【读档】任务存档_时间塔最下层 已读档！');
            }
            if (cm.getEventCount('任务存档_梦幻主题公园', 1) >= 1 || cm.getPlayer().isGM()) {
                for (var d = 31363; d <= 31387; d++) {
                    cm.forceCompleteQuest(d);
                    questCount++;
                }
                for (var d = 31390; d <= 31391; d++) {
                    cm.forceCompleteQuest(d);
                    questCount++;
                }
                for (var d = 4576; d <= 4577; d++) {
                    cm.forceCompleteQuest(d);
                    questCount++;
                }
                cm.playerMessage(6, '【读档】任务存档_梦幻主题公园 已读档！');
            }
            if (cm.getEventCount('任务存档_童话村', 1) >= 1 || cm.getPlayer().isGM()) {
                for (var d = 30400; d <= 30459; d++) {
                    cm.forceCompleteQuest(d);
                    questCount++;
                }
                for (var d = 30300; d <= 30306; d++) {
                    cm.forceCompleteQuest(d);
                    questCount++;
                }
                cm.playerMessage(6, '【读档】任务存档_童话村 已读档！');
            }
            if (cm.getEventCount('任务存档_黄金寺院', 1) >= 1 || cm.getPlayer().isGM()) {
                for (var d = 3853; d <= 3872; d++) {
                    cm.forceCompleteQuest(d);
                    questCount++;
                }
                cm.playerMessage(6, '【读档】任务存档_黄金寺院 已读档！');
            }
            if (cm.getEventCount('任务存档_克林逊森林', 1) >= 1 || cm.getPlayer().isGM()) {
                for (var d = 31240; d <= 31261; d++) {
                    cm.forceCompleteQuest(d);
                    questCount++;
                }
                cm.forceCompleteQuest(31266);
                questCount++;
                cm.playerMessage(6, '【读档】任务存档_克林逊森林 已读档！');
            }
            if (cm.getEventCount('任务存档_帕勒坦', 1) >= 1 || cm.getPlayer().isGM()) {
                for (var d = 35951; d <= 35984; d++) {
                    cm.forceCompleteQuest(d);
                    questCount++;
                }
                cm.playerMessage(6, '【读档】任务存档_帕勒坦 已读档！');
            }
            if (cm.getEventCount('任务存档_时间神殿', 1) >= 1 || cm.getPlayer().isGM()) {
                for (var d = 3500; d <= 3563; d++) {
                    cm.forceCompleteQuest(d);
                    questCount++;
                }
                cm.playerMessage(6, '【读档】任务存档_时间神殿 已读档！');
            }
            if (cm.getEventCount('任务存档_凯梅尔兹', 1) >= 1 || cm.getPlayer().isGM()) {
                for (var d = 17600; d <= 17682; d++) {
                    cm.forceCompleteQuest(d);
                    questCount++;
                }
                for (var d = 17700; d <= 17721; d++) {
                    cm.forceCompleteQuest(d);
                    questCount++;
                }
                for (var d = 17730; d <= 17731; d++) {
                    cm.forceCompleteQuest(d);
                    questCount++;
                }
                for (var d = 17740; d <= 17742; d++) {
                    cm.forceCompleteQuest(d);
                    questCount++;
                }
                for (var d = 17910; d <= 17931; d++) {
                    cm.forceCompleteQuest(d);
                    questCount++;
                }
                cm.playerMessage(6, '【读档】任务存档_凯梅尔兹 已读档！');
            }
            if (cm.getEventCount('任务存档_东方神州', 1) >= 1 || cm.getPlayer().isGM()) {
                for (var d = 62111; d <= 62146; d++) {
                    cm.forceCompleteQuest(d);
                    questCount++;
                }
                for (var d = 62100; d <= 62105; d++) {
                    cm.forceCompleteQuest(d);
                    questCount++;
                }
                cm.playerMessage(6, '【读档】任务存档_东方神州 已读档！');
            }
            if (cm.getEventCount('任务存档_废都塔', 1) >= 1 || cm.getPlayer().isGM()) {
                for (var d = 34400; d <= 34433; d++) {
                    cm.forceCompleteQuest(d);
                    questCount++;
                }
                for (var d = 34439; d <= 34440; d++) {
                    cm.forceCompleteQuest(d);
                    questCount++;
                }
                cm.playerMessage(6, '【读档】任务存档_废都塔 已读档！');
            }
            if (cm.getEventCount('任务存档_少林寺', 1) >= 1 || cm.getPlayer().isGM()) {
                for (var d = 62000; d <= 62037; d++) {
                    cm.forceCompleteQuest(d);
                    questCount++;
                }
                cm.playerMessage(6, '【读档】任务存档_少林寺 已读档！');
            }
            if (cm.getEventCount('任务存档_岩壁巨人', 1) >= 1 || cm.getPlayer().isGM()) {
                for (var d = 31330; d <= 31355; d++) {
                    cm.forceCompleteQuest(d);
                    questCount++;
                }
                cm.playerMessage(6, '【读档】任务存档_岩壁巨人 已读档！');
            }
            if (cm.getEventCount('任务存档_破坏的射手村', 1) >= 1 || cm.getPlayer().isGM()) {
                for (var d = 31100; d <= 31160; d++) {
                    cm.forceCompleteQuest(d);
                    questCount++;
                }
                for (var d = 31091; d <= 31092; d++) {
                    cm.forceCompleteQuest(d);
                    questCount++;
                }
                cm.playerMessage(6, '【读档】任务存档_破坏的射手村 已读档！');
            }
            if (cm.getEventCount('任务存档_地球防御本部', 1) >= 1 || cm.getPlayer().isGM()) {
                for (var d = 3475; d <= 3499; d++) {
                    cm.forceCompleteQuest(d);
                    questCount++;
                }
                cm.playerMessage(6, '【读档】任务存档_地球防御本部 已读档！');
            }
            if (cm.getEventCount('任务存档_克里蒂亚斯', 1) >= 1 || cm.getPlayer().isGM()) {
                for (var d = 32490; d <= 32524; d++) {
                    cm.forceCompleteQuest(d);
                    questCount++;
                }
                cm.playerMessage(6, '【读档】任务存档_克里蒂亚斯 已读档！');
            }
            if (cm.getEventCount('任务存档_黄昏勇士部落', 1) >= 1 || cm.getPlayer().isGM()) {
                for (var d = 31900; d <= 31944; d++) {
                    cm.forceCompleteQuest(d);
                    questCount++;
                }
                for (var d = 31093; d <= 31094; d++) {
                    cm.forceCompleteQuest(d);
                    questCount++;
                }
                cm.playerMessage(6, '【读档】任务存档_黄昏勇士部落 已读档！');
            }
            if (cm.getEventCount('任务存档_狐狸谷', 1) >= 1 || cm.getPlayer().isGM()) {
                for (var d = 34740; d <= 34767; d++) {
                    cm.forceCompleteQuest(d);
                    questCount++;
                }
                cm.playerMessage(6, '【读档】任务存档_狐狸谷 已读档！');
            }
            if (cm.getEventCount('任务存档_避风港', 1) >= 1 || cm.getPlayer().isGM()) {
                for (var d = 39200; d <= 39209; d++) {
                    cm.forceCompleteQuest(d);
                    questCount++;
                }
                cm.playerMessage(6, '【读档】任务存档_避风港 已读档！');
            }
            if (cm.getEventCount('任务存档_鲁塔比斯', 1) >= 1 || cm.getPlayer().isGM()) {
                for (var d = 30000; d <= 30013; d++) {
                    cm.forceCompleteQuest(d);
                    questCount++;
                }
                cm.playerMessage(6, '【读档】任务存档_鲁塔比斯 已读档！');
            }
            if (cm.getEventCount('任务存档_武陵', 1) >= 1 || cm.getPlayer().isGM()) {
                for (var d = 3800; d <= 3845; d++) {
                    cm.forceCompleteQuest(d);
                    questCount++;
                }
                for (var d = 3851; d <= 3852; d++) {
                    cm.forceCompleteQuest(d);
                    questCount++;
                }
                for (var d = 3896; d <= 3897; d++) {
                    cm.forceCompleteQuest(d);
                    questCount++;
                }
                cm.playerMessage(6, '【读档】任务存档_武陵 已读档！');
            }
            if (cm.getEventCount('任务存档_十字猎人', 1) >= 1 || cm.getPlayer().isGM()) {
                for (var d = 1600; d <= 1686; d++) {
                    cm.forceCompleteQuest(d);
                    questCount++;
                }
                cm.playerMessage(6, '【读档】任务存档_十字猎人 已读档！');
            }
            if (cm.getEventCount('任务存档_黑色天堂', 1) >= 1 || cm.getPlayer().isGM()) {
                for (var d = 33120; d <= 33320; d++) {
                    cm.forceCompleteQuest(d);
                    questCount++;
                }
                cm.playerMessage(6, '【读档】任务存档_黑色天堂 已读档！');
            }
            if (cm.getEventCount('任务存档_白魔法师', 1) >= 1 || cm.getPlayer().isGM()) {
                for (var d = 32626; d <= 32650; d++) {
                    cm.forceCompleteQuest(d);
                    questCount++;
                }
                cm.playerMessage(6, '【读档】任务存档_白魔法师 已读档！');
            }
            if (cm.getEventCount('任务存档_成为女皇的方法', 1) >= 1 || cm.getPlayer().isGM()) {
                for (var d = 32605; d <= 32625; d++) {
                    cm.forceCompleteQuest(d);
                    questCount++;
                }
                cm.playerMessage(6, '【读档】任务存档_成为女皇的方法 已读档！');
            }
            if (cm.getEventCount('任务存档_黑魔女', 1) >= 1 || cm.getPlayer().isGM()) {
                for (var d = 32651; d <= 32661; d++) {
                    cm.forceCompleteQuest(d);
                    questCount++;
                }
                cm.playerMessage(6, '【读档】任务存档_黑魔女 已读档！');
            }
            if (cm.getEventCount('任务存档_雪原吟游诗人', 1) >= 1 || cm.getPlayer().isGM()) {
                for (var d = 32671; d <= 32696; d++) {
                    cm.forceCompleteQuest(d);
                    questCount++;
                }
                cm.playerMessage(6, '【读档】任务存档_雪原吟游诗人 已读档！');
            }
            if (cm.getEventCount('任务存档_影子炼金术士', 1) >= 1 || cm.getPlayer().isGM()) {
                for (var d = 32970; d <= 32991; d++) {
                    cm.forceCompleteQuest(d);
                    questCount++;
                }
                cm.playerMessage(6, '【读档】任务存档_影子炼金术士 已读档！');
            }
            if (cm.getEventCount('任务存档_好友故事', 1) >= 1 || cm.getPlayer().isGM()) {
                for (var d = 32707; d <= 32872; d++) {
                    cm.forceCompleteQuest(d);
                    questCount++;
                }
                cm.playerMessage(6, '【读档】任务存档_好友故事 已读档！');
            }
            if (cm.getEventCount('任务存档_蘑菇神社', 1) >= 1 || cm.getPlayer().isGM()) {
                for (var d = 58720; d <= 58821; d++) {
                    cm.forceCompleteQuest(d);
                    questCount++;
                }
                cm.playerMessage(6, '【读档】任务存档_蘑菇神社 已读档！');
            }
            if (cm.getEventCount('任务存档_克拉齐亚', 1) >= 1 || cm.getPlayer().isGM()) {
                for (var d = 61335; d <= 61373; d++) {
                    cm.forceCompleteQuest(d);
                    questCount++;
                }
                cm.playerMessage(6, '【读档】任务存档_克拉齐亚 已读档！');
            }
            if (cm.getEventCount('任务存档_莫奈得', 1) >= 1 || cm.getPlayer().isGM()) {
                for (var d = 64010; d <= 64217; d++) {
                    cm.forceCompleteQuest(d);
                    questCount++;
                }
                cm.playerMessage(6, '【读档】任务存档_莫奈得 已读档！');
            }
            if (cm.getEventCount('任务存档_消亡旅途', 1) >= 1 || cm.getPlayer().isGM()) {
                for (var d = 34100; d <= 34120; d++) {
                    cm.forceCompleteQuest(d);
                    questCount++;
                }
                cm.playerMessage(6, '【读档】任务存档_消亡旅途 已读档！');
            }
            if (cm.getEventCount('任务存档_啾啾岛', 1) >= 1 || cm.getPlayer().isGM()) {
                for (var d = 34200; d <= 34218; d++) {
                    cm.forceCompleteQuest(d);
                    questCount++;
                }
                cm.playerMessage(6, '【读档】任务存档_啾啾岛 已读档！');
            }
            if (cm.getEventCount('任务存档_拉克兰', 1) >= 1 || cm.getPlayer().isGM()) {
                for (var d = 34300; d <= 34376; d++) {
                    cm.forceCompleteQuest(d);
                    questCount++;
                }
                cm.playerMessage(6, '【读档】任务存档_拉克兰 已读档！');
            }
            if (cm.getEventCount('任务存档_阿尔卡那', 1) >= 1 || cm.getPlayer().isGM()) {
                for (var d = 34450; d <= 34490; d++) {
                    cm.forceCompleteQuest(d);
                    questCount++;
                }
                cm.playerMessage(6, '【读档】任务存档_阿尔卡那 已读档！');
            }
            if (cm.getEventCount('任务存档_莫拉斯', 1) >= 1 || cm.getPlayer().isGM()) {
                for (var d = 34230; d <= 34272; d++) {
                    cm.forceCompleteQuest(d);
                    questCount++;
                }
                cm.playerMessage(6, '【读档】任务存档_莫拉斯 已读档！');
            }
            if (cm.getEventCount('任务存档_埃斯佩拉', 1) >= 1 || cm.getPlayer().isGM()) {
                for (var d = 34561; d <= 34593; d++) {
                    cm.forceCompleteQuest(d);
                    questCount++;
                }
                cm.playerMessage(6, '【读档】任务存档_埃斯佩拉 已读档！');
            }
            if (cm.getEventCount('任务存档_反转城', 1) >= 1 || cm.getPlayer().isGM()) {
                for (var d = 37601; d <= 37620; d++) {
                    cm.forceCompleteQuest(d);
                    questCount++;
                }
                cm.playerMessage(6, '【读档】任务存档_反转城 已读档！');
            }
            if (cm.getEventCount('任务存档_真香岛', 1) >= 1 || cm.getPlayer().isGM()) {
                for (var d = 37701; d <= 37726; d++) {
                    cm.forceCompleteQuest(d);
                    questCount++;
                }
                cm.playerMessage(6, '【读档】任务存档_真香岛 已读档！');
            }
            if (cm.getEventCount('任务存档_月桥', 1) >= 1 || cm.getPlayer().isGM()) {
                for (var d = 35600; d <= 35635; d++) {
                    cm.forceCompleteQuest(d);
                    questCount++;
                }
                cm.playerMessage(6, '【读档】任务存档_月桥 已读档！');
            }
            if (cm.getEventCount('任务存档_痛苦迷宫', 1) >= 1 || cm.getPlayer().isGM()) {
                for (var d = 35700; d <= 35756; d++) {
                    cm.forceCompleteQuest(d);
                    questCount++;
                }
                cm.playerMessage(6, '【读档】任务存档_痛苦迷宫 已读档！');
            }
            if (cm.getEventCount('任务存档_黎曼', 1) >= 1 || cm.getPlayer().isGM()) {
                for (var d = 35800; d <= 35837; d++) {
                    cm.forceCompleteQuest(d);
                    questCount++;
                }
                cm.playerMessage(6, '【读档】任务存档_黎曼 已读档！');
            }
            if (cm.getEventCount('任务存档_大世无界', 1) >= 1 || cm.getPlayer().isGM()) {
                for (var d = 37201; d <= 37203; d++) {
                    cm.forceCompleteQuest(d);
                    questCount++;
                }
                for (var d = 37301; d <= 37312; d++) {
                    cm.forceCompleteQuest(d);
                    questCount++;
                }
                cm.playerMessage(6, '【读档】任务存档_大世无界 已读档！');
            }
            if (cm.getEventCount('任务存档_圣地与圣剑', 1) >= 1 || cm.getPlayer().isGM()) {
                for (var d = 37401; d <= 37417; d++) {
                    cm.forceCompleteQuest(d);
                    questCount++;
                }
                cm.playerMessage(6, '【读档】任务存档_圣地与圣剑 已读档！');
            }
            if (cm.getEventCount('任务存档_被选中之人', 1) >= 1 || cm.getPlayer().isGM()) {
                for (var d = 37501; d <= 37520; d++) {
                    cm.forceCompleteQuest(d);
                    questCount++;
                }
                cm.playerMessage(6, '【读档】任务存档_被选中之人 已读档！');
            }
            if (cm.getEventCount('任务存档_阿卡伊勒', 1) >= 1 || cm.getPlayer().isGM()) {
                for (var d = 31167; d <= 31180; d++) {
                    cm.forceCompleteQuest(d);
                    questCount++;
                }
                cm.playerMessage(6, '【读档】任务存档_阿卡伊勒 已读档！');
            }
            if (cm.getEventCount('任务存档_过时任务', 1) >= 1 || cm.getPlayer().isGM()) {
                for (var d = 4200; d <= 4218; d++) {
                    cm.forceCompleteQuest(d);
                    questCount++;
                }
                for (var d = 4503; d <= 4560; d++) {
                    cm.forceCompleteQuest(d);
                    questCount++;
                }
                for (var d = 4027; d <= 4030; d++) {
                    cm.forceCompleteQuest(d);
                    questCount++;
                }
                for (var d = 8000; d <= 8030; d++) {
                    cm.forceCompleteQuest(d);
                    questCount++;
                }
                for (var d = 3065; d <= 3068; d++) {
                    cm.forceCompleteQuest(d);
                    questCount++;
                }
                for (var d = 3075; d <= 3085; d++) {
                    cm.forceCompleteQuest(d);
                    questCount++;
                }
                cm.playerMessage(6, '【读档】任务存档_过时任务 已读档！');
            }
            cm.getPlayer().scheduleOpenNpcTask(2, 0, '任务读档_至尊版_延时复位');
            cm.playerMessage(6, '恭喜读档完成！\r\n本次载入「' + questCount + '」条任务状态。');
            cm.addPopupSay(9110002, 12000, '『' + cm.getPlayer().getName() + '』\r\n恭喜读档完成！\r\n本次载入「' + questCount + '」条任务状态。 ');
            cm.dispose();
        }
    }
}
function action3(h, f, e, d) {
    var c = cm.getConstantScriptContent('菜单_NPC立绘');
    var b = Math.floor(Math.random() * c.length);
    var a = c[b][0];
    var g = randomNum(0, c[b][1]);
    if (status <= d++) {
        cm.askAcceptDecline_Bottom('#face' + g + '##fn方正粗黑宋简体##fs14# 敬请期待！', a);
    } else {
        if (status === d++) {
            cm.dispose();
            cm.openNpc(9110002, '任务读档_至尊版');
        }
    }
}
function action4(d, c, b, a) {
    if (status <= a++) {
        cm.askMenu_Bottom('#e<需要协助调查>#n\r\n\r\n消亡旅途附近到处都是#b艾尔达#k。\r\n你知道吗？#b艾尔达#k会和周围的环境发生共鸣，变成各种形态。\r\n这种#r让人难以捉摸的能量#k，是艾尔达最大的魅力。');
        cm.dispose();
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