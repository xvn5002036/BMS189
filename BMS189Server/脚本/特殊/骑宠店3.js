var a = 0;
var text;
var selects;
var buynum = 0;
var itemlist = Array(Array('猛犸骑宠 ', 80011272, 10000), Array('雪花骑宠', 80011279, 10000), Array('筋斗云骑宠', 80011289, 10000), Array('白魔法师和雪原', 80011303, 10000), Array('欢乐卟卟车骑宠', 80011328, 10000), Array('小纸船骑宠', 80011335, 10000), Array('冒险岛热气球骑宠', 80011357, 10000), Array('冒险岛热气球骑宠', 80011358, 10000), Array('守护小海豹', 80011359, 10000), Array('守护小海豹', 80011360, 10000), Array('泉奈·灵狐骑宠(90天)', 80011395, 10000), Array('泉奈·灵狐骑宠', 80011396, 10000), Array('暗·鬼狐骑宠(90天)', 80011397, 10000), Array('暗·鬼狐骑宠', 80011398, 10000), Array('黑飞龙骑宠', 80011403, 10000), Array('幽灵猎人(90天)', 80011405, 10000), Array('幽灵猎人', 80011406, 10000), Array('樱花飞舞', 80011419, 10000), Array('圣诞是劳动的日子骑宠(90天)', 80011421, 10000), Array('圣诞是劳动的日子骑宠', 80011422, 10000), Array('路西德蝴蝶骑宠', 80011424, 10000), Array('阿丽莎之花翼骑宠', 80011426, 10000), Array('鬼畜发条鸡骑宠(90天)', 80011431, 10000), Array('鬼畜发条鸡骑宠', 80011432, 10000), Array('黄金鸡蛋和火箭爆竹骑宠', 80011436, 10000), Array('超级跑车（90天）', 80011438, 10000), Array('超级跑车（永久）', 80011439, 10000), Array('豪华（新郎）婚礼轿车(90天)', 80011443, 10000), Array('豪华（新郎）婚礼轿车', 80011444, 10000), Array('豪华（新娘）婚礼轿车(90天)', 80011445, 10000), Array('豪华（新娘）婚礼轿车', 80011446, 10000), Array('飞屋环游记(90天)', 80011447, 10000), Array('飞屋环游记', 80011448, 10000), Array('花音符骑宠(90天)', 80011451, 10000), Array('花音符骑宠(永久)', 80011452, 10000), Array('奔跑吧羊驼骑宠(90天)', 80011453, 10000), Array('奔跑吧羊驼骑宠(永久)', 80011454, 10000), Array('沙锥宝宝骑宠', 80011485, 10000), Array('小熊求爱骑宠(90天)', 80011486, 10000), Array('小熊求爱骑宠(永久)', 80011487, 10000), Array('潜水艇骑宠(90天)', 80011488, 10000), Array('潜水艇骑宠(永久)', 80011489, 10000), Array('null', 80011500, 10000), Array('null', 80011501, 10000), Array('null', 80011502, 10000), Array('null', 80011503, 10000), Array('null', 80011506, 10000), Array('null', 80011507, 10000), Array('null', 80011533, 10000), Array('null', 80011531, 10000), Array('null', 80011532, 10000), Array('null', 80011524, 10000), Array('null', 80011525, 10000), Array('null', 80011535, 10000), Array('null', 80011541, 10000), Array('null', 80011542, 10000), Array('null', 80011546, 10000), Array('null', 80011551, 10000), Array('null', 80011552, 10000), Array('null', 80011571, 10000), Array('null', 80011572, 10000), Array('null', 80011580, 10000), Array('null', 80011581, 10000), Array('null', 80011516, 10000), Array('null', 80011517, 10000), Array('超能套装', 80011515, 10000), Array('null', 80011538, 10000), Array('null', 80011539, 10000), Array('null', 80011573, 10000), Array('null', 80011584, 10000), Array('null', 80011593, 10000), Array('null', 80011597, 10000), Array('null', 80011598, 10000), Array('null', 80011599, 10000), Array('null', 80011554, 10000), Array('null', 80011639, 10000), Array('null', 80011640, 10000), Array('null', 80011646, 10000), Array('null', 80011647, 10000), Array('null', 80011698, 10000), Array('null', 80011699, 10000), Array('null', 80011700, 10000), Array('null', 80011705, 10000), Array('null', 80011711, 10000), Array('null', 80011712, 10000), Array('null', 80011706, 10000), Array('null', 80011707, 10000), Array('null', 80011721, 10000), Array('null', 80011722, 10000), Array('null', 80011737, 10000), Array('null', 80011745, 10000), Array('null', 80011743, 10000), Array('null', 80011744, 10000), Array('null', 80011733, 10000), Array('null', 80011734, 10000), Array('null', 80011758, 10000), Array('null', 80011759, 10000), Array('null', 80011760, 10000), Array('null', 80011761, 10000), Array('null', 80011772, 10000), Array('null', 80011784, 10000), Array('null', 80011785, 10000), Array('null', 80011798, 10000), Array('null', 80011799, 10000), Array('null', 80011773, 10000), Array('null', 80011774, 10000), Array('null', 80011775, 10000), Array('null', 80011776, 10000), Array('null', 80011777, 10000), Array('null', 80011778, 10000), Array('null', 80011779, 10000), Array('null', 80011780, 10000), Array('null', 80011791, 10000), Array('null', 80011806, 10000), Array('null', 80011807, 10000), Array('null', 80011808, 10000), Array('null', 80011809, 10000), Array('null', 80011821, 10000), Array('null', 80011822, 10000), Array('null', 80011819, 10000), Array('null', 80011820, 10000), Array('null', 80011825, 10000), Array('null', 80011826, 10000), Array('null', 80011844, 10000), Array('null', 80011845, 10000), Array('null', 80011850, 10000), Array('null', 80011851, 10000));
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
            text = head + '亲爱的 #e#b' + cm.getPlayer().getName() + '#n#k！欢迎光临#r#e新手装备#n#k商店 #e#d：#n#k\r\n#b#fn方正粗黑宋简体#';
            for (var b = 0; b < itemlist.length; b++) {
                text += '#L' + b + '##s' + itemlist[b][1] + '##q' + itemlist[b][1] + '#  价格' + itemlist[b][2] + '#l\r\n';
                if (b != 0 && (b + 1) % 100 == 0) {
                    text += '\r\n';
                }
            }
            cm.askMenu(text);
        } else {
            if (a == 1) {
                selects = e;
                cm.askAcceptDecline('看看这是你需要购买的装备吗？\r\n\r\n #e#r-#n#k   #s' + itemlist[selects][1] + '# #r#q' + itemlist[selects][1] + '##k\r\n\r\n #e#r-#n#k   你将使用掉 #e#r' + itemlist[selects][2] + '#n#k 金币。');
            } else {
                if (a == 2) {
                    if (cm.getPlayer().getCSPoints(1) >= itemlist[selects][2]) {
                        var d = cm.getItemInfo();
                        var c = itemlist[selects][1];
                        cm.getPlayer().modifyCSPoints(1, -itemlist[selects][2]);
                        cm.teachSkill(itemlist[selects][1], 1, 1);
                        cm.effect_NormalSpeechBalloon('获得骑宠技能' + itemlist[selects][0] + ' ', 1, 0, 0, 3000, 0, 0);
                        cm.playerMessage(-1, ' 获得骑宠技能：  ' + itemlist[selects][0] + ' ');
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