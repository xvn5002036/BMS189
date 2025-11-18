var ca = java.util.Calendar.getInstance();
var year = ca.get(java.util.Calendar.YEAR);
var month = ca.get(java.util.Calendar.MONTH) + 1;
var day = ca.get(java.util.Calendar.DATE);
var hour = ca.get(java.util.Calendar.HOUR);
var minute = ca.get(java.util.Calendar.MINUTE);
var second = ca.get(java.util.Calendar.SECOND);
var 获取日期 = year + "年" + month + "月" + day + "日 " + hour + ":" + minute + ":" + second
var 自动补充物品 = [
  [2000005, 999],
  [2120008, 100],
  [2432022, 1],
  [2430865, 1],
  [1202193, 1],
  [5044011, 1],
];
 //2431092,2431223,  2431148, 2431094,
//超级药水，美味饲料，拍卖场专属使用券，贵宾神秘盒子，特殊超值礼包礼物箱，冒险岛特殊超值礼包增益，清理背包，一键射手村，轮回，冒险岛任意门
//var 自动补充物品 = [2120008, 2432022, 2430865, 2630958, 2431094, 2436226];//原始:2436226运营员的心,2630958-运营员的神圣祈祷
var status = 0;
var 箭头特效 = "#fUI/UIWindow.img/Quest/icon2/0#";
var menuList = [
    ["回到自由", "回市场"],
    ["万能传送", "万能传送_至尊版"],
    ["兑换中心", "所有兑换功能"],
    ["杂货商店", "杂货店_至尊版"],
    ["任务系统", "任务系统"],
    ["怪怪系统", "怪怪UI"],
    ["技能管理", "技能管理_通用"],
    ["快速转职", "快速转职_通用"],
    ["任意转职", "任意转职_通用"],
    ["在线商城", "新购物中心_至尊版"],
    ["国服商城", "国服商城"],
    ["美容美发", "美容美发_通用"],
    ["每日任务", "每日任务"],
    // ["强化打造", "强化打造"],
    ["掉落查询", "地图怪物掉落查询"],
    ["爆率查询", "掉落查询_至尊版"],
    // ["虚拟玩家", "智能AI"],
    ["组队邀请", "组队"],
    ["新手攻略", "玩法攻略大全"],
    // ["欢乐抽奖", "全道具抽奖"],
    ["背包清理", "功能_背包清理"],
    ["综合排行", "综合排行榜_至尊版"],
    ["娱乐功能", "娱乐功能"],
    ["在线奖励", "在线奖励_至尊版"],
    ["更多服务", "更多服务"],
    // ["个人信息", "个人信息_至尊版"],

]

function start() {
    status = -1;
    action(1, 0, 0)
}

function action(c, f, h) {
    var g = cm.getConstantScriptContent("菜单_NPC立绘");
    var d = Math.floor(Math.random() * g.length);
    var a = g[d][0];
    var e = randomNum(0, g[d][1]);
    for (var j in 自动补充物品) {
        var id = 自动补充物品[j][0];
        var num = 自动补充物品[j][1];
        if(cm.getItemQuantity(id) < num) {
           cm.gainItem(id, num - cm.getItemQuantity(id))
        }
    }
    if (cm.getHyPay(1) < 0) {
        resetHyPay();
    }
    if (!cm.isQuestFinished(66162)) {
        cm.forceCompleteQuest(66162)
    }
    if (!cm.isQuestFinished(66163)) {
        cm.forceCompleteQuest(66163)
    }
    if (cm.getNumberFromQuestInfo(0, "自动清除") >= 1) {
        for (var i = 1000000; i < 6000000; i++) {
            if (cm.getNumberFromQuestInfo(i, "一键清除") == 1 && cm.getItemQuantity(i) >= 1) {
                cm.removeAll(i);
            }
        }
    }
    if (status == 0 && c == 0) {
        cm.dispose();
        return
    }
    if (c == 1) {
        status++
    } else {
        status--
    }
    if (status == 0) {
        var k = "  #face" + e + "##r#fn微软雅黑#"; // #fs18##e#r#fn微软雅黑# 当前世界时间："+cm.getNowTimeString(5)+"#k\r\n";
        k += " #fs18##e#b在线时间:#g" + cm.getGamePoints() + "分#l\t#b账号余额:#g" + cm.getHyPay(1) + " #l\t#b账号点券:#g" + cm.getPlayer().getCSPoints(1) + "#k#l\r\n#fs18#"
        for (var j = 0; j < menuList.length; j++) {
            if (menuList[j][0] == "快速转职" && cm.isQuestFinished(1465)) {
                k += '#b#L' + j + '# ' + 箭头特效 + '五转中心#k  ';
            } else {
                k += '#b#L' + j + '# ' + 箭头特效 + menuList[j][0] + '#k  ';
            }
            if ((j + 1) % 4 == 0) {
                k += "\r\n";
            }
        }
        if (cm.getPlayer().isGM()) {
            k += "#g#L6666# " + 箭头特效 + "超级功能#k#l";
        }

        // k += "  #L9#" + 箭头特效 + "娱乐功能#l\r\n#k#b";
        // k += "  #L120##g" + 箭头特效 + "个人信息#l#k#b";
        // k += "  #g#L114#" + 箭头特效 + "礼包专区#l#k#b";
        // k += "  #g#L115#" + 箭头特效 + "赞助中心#l#k#b";
        // k += "  #g#L88888#" + 箭头特效 + "游戏攻略[新手必看]#l\r\n#k#b";
        // k += "  #L116##r" + 箭头特效 + "练功专区#l";
        // k += "  #k#L12#" + 箭头特效 + "时装强化#l";
        // k += "  #L118##r" + 箭头特效 + "抽奖专区#l#k#b";
        // k += "  #L119##r" + 箭头特效 + "更多功能#l\r\n#k#b";
        // k += "  #L122##b" + 箭头特效 + "世界排行";


        cm.askMenu_Bottom(k, 204, a)
    } else {
        if (status == 1) {
            if (h >= 0 && h < 1000) {
                cm.dispose();
                if (menuList[h][0] == "国服商城") {
                    cm.enter商城();
                } else {
                    cm.openNpc(9110002, menuList[h][1]);
                }

            } else {
                cm.dispose();
                if (h == 6666) { //GM功能
                    cm.openNpc(9110002, "快捷功能_通用");
                }
                return;
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
            break
    }
}


function resetHyPay() { //重置充值信息
    // cm.playerMessage(cm.getPlayer().getAccountName());
    cm.updateSQL("delete FROM hypay where accname=?", cm.getPlayer().getAccountName()); // 查询数据
}