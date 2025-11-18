var ca = java.util.Calendar.getInstance();
var 获取年 = ca.get(java.util.Calendar.YEAR);
var 获取日= ca.get(java.util.Calendar.DATE);
var 获取月= ca.get(java.util.Calendar.MONTH)+1;
var 获取日期= (获取年*10000)+(获取月*100)+获取日; //获取日期
var 自动补充物品 = [2120000,2432022,2430865,2630958,2431094,2436226];
var status = 0;
var 箭头特效 = "#fUI/UIWindow.img/Quest/icon2/0#";

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
		if(j!==0 && cm.getItemQuantity(自动补充物品[j]) < 1){
		
			cm.gainItem(自动补充物品[j], 1);
			cm.playerMessage(-1, "已补充小礼物！")
		}else{
			if (j==0 && cm.getItemQuantity(自动补充物品[j]) < 1000) {
				cm.playerMessage(-1, " 『" + cm.getItemName(自动补充物品[j]) + "』 剩余:" + cm.getItemQuantity(自动补充物品[j]) + " 补充:" + (1000 - cm.getItemQuantity(自动补充物品[j])) + "");
				cm.gainItem(自动补充物品[j], 1000 - cm.getItemQuantity(自动补充物品[j]))
			}
        }
    }
    if(cm.getPlayer().getCSPoints(1)<10000){
        cm.getPlayer().modifyCSPoints(1, 10000);
	 }

	if (cm.getNumberFromQuestInfo(0, "自动清除") >= 1){
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
		//cm.getPlayer().levelUp();
		//cm.addNumberForQuestInfo(34298, "count", 3);
		// for (var c = 34561; c <= 34595; c++) {
		//cm.forceCompleteQuest(c);
		// }
		 //cm.forceCompleteQuest(34773);
		//cm.dispelBuff(80011261);//取消BUFF
		//cm.gainSkillBuff(80011261);//给BUFF
		//cm.teachSkill(80011261, -1, -1)
		//cm.teachSkill(80011261, 1, 1)
		//cm.addNumberForQuestInfo(34380, "count", 3);
		//cm.updateInfoQuest(34773, "");
		//cm.forceStartQuest(39035)
		// for (var f = 34129; f <= 34151; f++) {
                 //  cm.forceForfeitQuest(f)
             //  }
			 //cm.addNumberForQuestInfo(34151, "clear", 1);
		 //cm.forceStartQuest(34151)
        var k = " #face" + e + "##fs18##r#e#fn微软雅黑#欢迎使用快捷菜单！#fs15#\r\n";
       // k += "  #L100#" + 箭头特效 + "账户信息#l "+" #L101#" + 箭头特效 + "掉落查询#l#r    #L30#" + 箭头特效 + "GM功能#l \r\n#k#b";
	   k += "  #g#L21#" + 箭头特效 + "回到自由#l";
        k += "  #L2#" + 箭头特效 + "万能传送#l";
		k += "  #L14#" + 箭头特效 + "新拍卖行#l";
        k += "  #L16#" + 箭头特效 + "杂货商店#l\r\n";
        k += "  #r#L501#" + 箭头特效 + "任务系统#l";
        k += "  #r#L202#" + 箭头特效 + "兑换中心#l";
       // k += "  #L10#" + 箭头特效 + "在线奖励#l";
       // k += "  #L0#" + 箭头特效 + "等级奖励#l";
	//k += "  #L12#" + 箭头特效 + "充值礼包#l";
        k += "  #L8#" + 箭头特效 + "" + (cm.isQuestFinished(1465) ? "五转中心#l" : "快速转职#l") + "#l";
        k += "  #L11#" + 箭头特效 + "怪怪系统#l\r\n";
        k += "  #b#L77#" + 箭头特效 + "商城系统#l";
        k += "  #b#L4#" + 箭头特效 + "角色属性#l";
        k += "  #b#L7#" + 箭头特效 + "美容美发#l";
        k += "  #L23#" + 箭头特效 + "装备系统#l\r\n";
	//	k += "  #L204#" + 箭头特效 + "学习技能#l";
	k += "  #k#L12#" + 箭头特效 + "时装系统#l";
	k += "  #L29##k" + 箭头特效 + "每日任务#l#k";
	k += "  #k#L3#" + 箭头特效 + "背包清理#l#k";
	//k += "  #L203#" + 箭头特效 + "升级套餐#l\r\n";
	k += "  #L9#" + 箭头特效 + "娱乐功能#l\r\n#k#b";
          k += "  #L120##g" + 箭头特效 + "个人信息#l#k#b";
	k += "  #g#L114#" + 箭头特效 + "礼包专区#l#k#b";
          k += "  #g#L115#" + 箭头特效 + "赞助中心#l#k#b";
	k += "  #g#L88888#" + 箭头特效 + "游戏攻略[新手必看]#l\r\n#k#b";
	k += "  #L116##r" + 箭头特效 + "练功专区#l";
          k += "  #L117##r" + 箭头特效 + "爆率查询#l";
          k += "  #L118##r" + 箭头特效 + "抽奖专区#l#k#b";
          k += "  #L119##r" + 箭头特效 + "更多功能#l\r\n#k#b";
	if (cm.getPlayer().isGM()){
	//k += "  #L99999#" + 箭头特效 + "测试接口(仅GM可见)#l\r\n#k#b";、
          k += "  #L6666##b" + 箭头特效 + "GM功能#l #k#b";
	}
          k += "  #L122##b" + 箭头特效 + "世界排行";	
          k += "  #L123##b" + 箭头特效 + "组队系统";	
          k += "  #L121##b" + 箭头特效 + "AI系统#l#k#b";	
	
        cm.askMenu_Bottom(k, 204, a)
    } else {
        if (status == 1) {
            switch (h) {
				case 116:
					cm.dispose();
                    cm.openNpc(9900000,"练功系统");
                    break;
				case 88888:
					cm.dispose();
                    cm.openNpc(9900000,"玩法攻略大全");
                    break;
				case 99999:
					cm.dispose();
                    cm.openNpc(9900000,"测试NPC");
                    break;
				case 114:
					cm.dispose();
                    cm.openNpc(9900000,"礼包系统");
                    break;
				case 115:
					cm.dispose();
                    cm.openNpc(9900000,"赞助系统");
                    break;
				case 117:
					cm.dispose();
                    cm.openNpc(9900003,5);
                    break;
				case 118:
					cm.dispose();
                    cm.openNpc(9900000,"抽奖系统");
                    break;
				case 119:
					cm.dispose();
                    cm.openNpc(9310070);
                    break;
				case 120:
					cm.dispose();
                    cm.openNpc(9900000,"个人信息_至尊版");
                    break;
				case 121:
					cm.dispose();
                    cm.openNpc(9900000,"AI系统");
                    break;
				case 122:
					cm.dispose();
                    cm.openNpc(9900000,"综合排行榜_至尊版");
                    break;
				case 123:
					cm.dispose();
                    cm.openNpc(9900000,"组队");
                    break;
				case 6666:
					cm.dispose();
                    cm.openNpc(9900000,"快捷功能_通用");
                    break;
				case 3:
					cm.dispose();
                    cm.openNpc(9900000,"背包系统");
                    break;
				case 29:
					cm.dispose();
                    cm.openNpc(9900000,"每日任务");
                    break;
				case 14:
					cm.dispose();
                    cm.openNpc(0,"拍卖场");
                    break;
				case 23:
					cm.dispose();
                    cm.openNpc(9900000, "装备系统");
                    break;
				case 204:
					cm.dispose();
                    cm.openNpc(9900000, "技能管理_通用");
                    break;
                case 203:
                    cm.dispose();
                    cm.openNpc(9900000, "升级套餐");
                    break;
                case 202:
                    cm.dispose();
                    cm.openNpc(9900000, "所有兑换功能");
                    break;
                case 101:
                    cm.dispose();
                    cm.openNpc(9900000, "BMS_单机攻略");
                    break;
                case 501:
                    cm.dispose();
                    cm.openNpc(9900000, "任务系统");
                    break;
                case 500:
                    cm.dispose();
                    if (cm.getPlayer().getQuestStatus(33120) == 0) {
                        cm.forceStartQuest(33120)
                    }
                    cm.openUI(1103);
                    break;
                case 0:
                    cm.dispose();
                    cm.openNpc(9900000, "等级奖励_至尊版");
                    break;
                case 2:
                    cm.dispose();
                    cm.openNpc(9900000, "万能传送_至尊版");
                    break;
                case 4:
                    cm.dispose();
                    cm.openNpc(9900000, "角色属性提升");
                    break;
                case 7:
                    cm.dispose();
                    cm.openNpc(9900000, "美容美发_通用");
                    break;
                case 77:
                    cm.dispose();
                    cm.openNpc(9900000, "商城系统");
                    break;
                case 8:
                    cm.dispose();
                    cm.openNpc(9900000, "快速转职_通用");
                    break;
                case 9:
                    cm.dispose();
                    cm.openNpc(9900000, "娱乐功能");
                    break;
                case 10:
                    cm.dispose();
                    cm.openNpc(9900000, "在线奖励_至尊版");
                    break;
                case 11:
                    cm.dispose();
                    cm.openUI(596);
                    break;
                case 12:
                    cm.dispose();
                    cm.openNpc(9900000, "时装系统");
                    break;
                case 16:
                    cm.dispose();
                    cm.openNpc(9900000, "杂货店_至尊版");
                    break;
                case 21:
                    if (null == null) {
                        if (cm.getMapId() == 910000000) {
                            cm.dispose();
                            cm.sendOk("您已经在自由市场了。")
                        } else {
                            cm.dispose();
                            cm.warp(910000000, 0)
                        }
                    } else {
                        cm.dispose();
                        cm.getTopMsgFont("这里无法进行传送", 3, 20, 4, 0, 0)
                    }
                    break;
                case 100:
                    cm.dispose();
                    cm.openNpc(9900004, "个人信息_至尊版");
                    break;
                case 30:
                    cm.dispose();
                    cm.openNpc(9900004, "快捷功能_通用");
                    break;
                case 200:
                    cm.dispose();
                    cm.openNpc(9900004, "模拟召唤玩家");
                    break;
                default:
                    cm.sendOk("该功能正在紧张进行制作中，请耐心等待。");
                    cm.dispose();
                    break
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
};