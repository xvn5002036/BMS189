var a = 0;
var text;
var selects;
var buynum = 0;
var itemlist = Array(Array('力量', 80000400, 10000), Array('敏捷', 80000401, 10000), Array('智力', 80000402, 10000), Array('运气', 80000403, 10000), Array('血量', 80000404, 10000), Array('魔量', 80000405, 10000), Array('恶魔精气', 80000406, 10000), Array('爆击发动', 80000409, 10000), Array('爆击伤害', 80000410, 10000), Array('无视防御力', 80000412, 10000), Array('伤害', 80000413, 10000), Array('攻击首领怪时的伤害增加', 80000414, 10000), Array('状态异常抗性', 80000416, 10000), Array('稳如泰山', 80000417, 10000), Array('攻击力/魔力', 80000419, 10000), Array('获得经验值', 80000420, 10000), Array('神秘力量', 80000421, 10000));
var head = '#fUI/UIWindow2.img/Quest/quest_info/summary_icon/summary#\r\n';
function start() {
    a = -1;
    action(1, 0, 0);
}
function action(g, f, e) {
    if (g == 0 && a == 0) {
        cm.dispose();
    } else {
        if (g == 1) {
            a++;
        } else {
            a--;
        }
        if (a == 0) {
            text = head + '亲爱的 #e#b' + cm.getPlayer().getName() + '#n#k！欢迎光临#r#e超级属性#n#k强化 #e#d：#n#k\r\n#b#fn方正粗黑宋简体#';
            for (var b = 0; b < itemlist.length; b++) {
                text += '#L' + b + '##s' + itemlist[b][1] + '##q' + itemlist[b][1] + '#    当前等级' + cm.getPlayer().getSkillLevel(itemlist[b][1]) + '  最大等级' + cm.getMaxLevel(itemlist[b][1]) + '#l\r\n';
                if (b != 0 && (b + 1) % 100 == 0) {
                    text += '\r\n';
                }
            }
            text += '#L18#一键满超级属性(需要扣除10万点卷)#l\r\n\r\n\r\n';
            cm.askMenu(text);
        } else {
            if (a == 1) {
                selects = e;
                switch (e) {
                case 18:
                    if (cm.getPlayer().getCSPoints(1) >= 100000) {
                        for (var b = 80000400; b <= 80000421; b++) {
                            if (b != 80000407 && b != 80000408 && b != 80000411 && b != 80000415 && b != 80000418) {
                                cm.teachSkill(b, cm.getMaxLevel(b));
                            }
                        }
                        cm.getPlayer().modifyCSPoints(1, -100000);
                        cm.effect_NormalSpeechBalloon('超级属性技等级已全部提升到最大!', 1, 0, 0, 5000, 0, 0);
                        cm.dispose();
                    } else {
                        cm.sendOk('你好像没有足够的点卷~!等你有了再来~!喵~!!');
                        cm.dispose();
                    }
                    break;
                default:
                    cm.askAcceptDecline('看看这是你需要购买的装备吗？\r\n\r\n #e#r-#n#k   #s' + itemlist[selects][1] + '# #r#q' + itemlist[selects][1] + '##k\r\n\r\n #e#r-#n#k   你将使用掉 #e#r' + itemlist[selects][2] + '#n#k 金币。');
                }
            } else {
                if (a == 2) {
                    if (cm.getPlayer().getSkillLevel(itemlist[selects][1]) >= cm.getMaxLevel(itemlist[selects][1])) {
                        cm.sendOk('已是最大等级~!!');
                        cm.dispose();
                        return;
                    }
                    if (cm.getPlayer().getCSPoints(1) >= itemlist[selects][2]) {
                        var d = cm.getItemInfo();
                        var c = itemlist[selects][1];
                        cm.getPlayer().modifyCSPoints(1, -itemlist[selects][2]);
                        cm.teachSkill(itemlist[selects][1], cm.getPlayer().getSkillLevel(itemlist[selects][1]) + 1);
                        cm.effect_NormalSpeechBalloon('超级属性技能' + itemlist[selects][0] + ' 提高等级:' + cm.getPlayer().getSkillLevel(itemlist[selects][1]), 1, 0, 0, 5000, 0, 0);
                        cm.playerMessage(-1, ' 超级属性技能：  ' + itemlist[selects][0] + ' 提高等级:' + cm.getPlayer().getSkillLevel(itemlist[selects][1]));
                        cm.dispose();
                    } else {
                        cm.sendOk('你好像没有足够的点卷~!等你有了再来~!喵~!!');
                        cm.dispose();
                    }
                }
            }
        }
    }
}
var status = -1;