/*  This source is made by BMS Team
 *  功能：副本调用
 *  整合：柠檬兔
 *  注：代码牵扯到其他脚本调用，不要乱改可能出错。
 */

var a1 = "#fUI/UIPVP/MiniMapIcon/star#";
var a2 = "#fUI/StarCityUI.img/GradeInfo/icon_ss/12#";
var a3 = "#fUI/UIWindow3.img/MirrorDungeonIntrude/btIntrude/normal/0#";
var 任务概述 = "#fUI/UIWindow.img/Quest/summary#";
var 奖励 = "#fUI/UIWindow.img/Quest/reward#";
var 无条件获得 = "#fUI/UIWindow.img/Quest/basic#";
var 几率获得 = "#fUI/UIWindow.img/Quest/prob#";
var 活跃 = "#fUI/CashShop.img/CashItem_label/2#";
var 积分 = "#fUI/CashShop.img/CashItem_label/3#";
var 小黄点 = "#fUI/UIPVP/MiniMapIcon/yellow#";

var status = -1;
var chs;
//副本开关
var open = true;
//首领怪名称
var BossName = "麦格纳斯";
//配置文件名称
var PQname = ["麦格纳斯_简单", "麦格纳斯_普通", "麦格纳斯_困难"];
//记录次数名称
var PQLog = ["申请进入 <麦格纳斯（简单）>。", "申请进入 <麦格纳斯（普通）>。", "申请进入 <麦格纳斯（困难）>。"];
//开始的地图
var startmap = 401060000;
//要求最低的等级
var minLevel = [200, 200, 200];
//要求最高的等级
var maxLevel = [999, 999, 999];
//次数限制
var maxenter = [5, 5, 5];
//要求最低的人数
var minPlayers = [1, 1, 1];
//要求最高的人数
var maxPlayers = [6, 6, 6];
//怪物最大等级设置
var moblevel = 999;
//要求进行的频道 [0 = 所有]
var channel = [0, 0, 0];
//武器破攻需求，0为不要求
var minLimitBreak = [0, 35999999, 35999999];


function start() {
	if (cm.getMapId() == startmap) {
		cm.PartyAutoOn(); //自动创建队伍
		var text = "";
		for (var i = 0; i < PQname.length; i++) {
			text += "\r\n#L" + i + "# " + PQLog[i] + "#l";
		}
		cm.askMenu("#e<首领怪：" + BossName + ">#n\r\n如果不能阻拦麦格纳斯，将会发生很可怕的事情。\r\n#b " + text);
	} else {
		cm.askYesNo("#e<首领怪：" + BossName + ">#n\r\n\r\n确定要放弃任务，离开这里吗？\r\n");
	}
}

function action(mode, type, selection) {

	if (status >= 0 && mode == 0) {
		cm.dispose();
		return;
	}
	mode == 1 ? status++ : status--;
	if (cm.getMapId() == startmap) {
		if (status == 0) {
			var em = cm.getEventManager(PQname[selection]);
			if (em == null || open == false) {
				cm.sendOk(open ? "配置文件不存在,请联系管理员。" : "管理员关闭了目前的副本.有问题可以联系管理员");
				cm.dispose();
				return;
			}
			chs = selection;
			var prop = em.getNumberProperty("state");
			var rwpz = "#fn微软雅黑#"
			rwpz += " #e<Boss - " + PQLog[selection] + ">#n\r\n";
			if (channel[selection] == 0) {
				rwpz += "\r\n  #r目前所有频道可以进入.#k\r\n";
			} else {
				rwpz += "\r\n  #r需要在#e" + channel[selection] + "#n频道进行.#k\r\n";
			}
			rwpz += "\r\n " + a1 + "状态：#n" + (prop == 0 ? "#g空#k" : "#r有#k") + "        " + a1 + "资格：#g" + (maxenter[selection] - cm.getPlayerLog(PQLog[selection])) + "#k/#d" + maxenter[selection] + "#k";
			rwpz += "\r\n " + a1 + "等级：#d" + minLevel[selection] + "#k      " + a1 + "人数：#d" + minPlayers[selection] + " - " + maxPlayers[selection] + "#k\r\n\r\n";
			cm.askYesNo(rwpz + "           #b#h0# #k#e是否现在就进入？#n");
		} else if (status == 1) {
			if (cm.getLimitBreak() < minLimitBreak[chs]) {
				cm.sendOk("你的武器破功" + cm.getLimitBreak() + "不够" + minLimitBreak[chs] + "，不允许进入！");
				cm.dispose();
			} else if (!cm.isLeader()) {
				cm.sendOk("嗯，你已经有自己的队伍。要执行这个任务，请让你们的队长与我对话，才可以申请入场.");
				cm.dispose();
				return;
			} else if (cm.party_CheckFailed_Level(minLevel[chs], maxLevel[chs])) {
				cm.sendNext("组队成员等级 " + minLevel[chs] + " 以上 " + maxLevel[chs] + " 以下才可以入场。\r\n\r\n\r\n");
				cm.dispose();
			} else if (channel[chs] != 0 && cm.getPlayer().getClient().getChannel() != channel[chs]) {
				cm.sendNext("此副本需要在 " + channel[chs] + "频道进入.");
				cm.dispose();
			} else if (cm.party_CheckFailed_PlayerLog(PQLog[chs], maxenter[chs])) {
				cm.sendNext("你的队员#r#e \"" + cm.party_CheckFailed_PlayerLog(PQLog[chs], maxenter[chs]) + "\" #k#n次数已经达到上限了。");
				cm.dispose();
			} else if (!cm.allMembersHere()) {
				cm.sendOk("你的组队部分成员不在当前地图，请召集他们过来后再尝试。"); //判断组队成员是否在一张地图..
				cm.dispose();
			} else if (cm.partyMembersInMap() < minPlayers[chs] || cm.partyMembersInMap() > maxPlayers[chs]) {
				cm.sendOk("组队成员 " + minPlayers[chs] + " 人以上 " + maxPlayers[chs] + "人 以下才可以入场。");
				cm.dispose();
			} else {
				var em = cm.getEventManager(PQname[chs]);
				if (em == null || open == false) {
					cm.askMenu(open ? "配置文件不存在,请联系管理员。" : "管理员关闭了目前的副本.有问题可以联系管理员");
				} else {
					var prop = em.getNumberProperty("state");
					if (prop == 0) {
						cm.dispose();
						em.startInstance(cm.getParty(), cm.getMap());
						cm.party_addPlayerLog(PQLog[chs], 1);
						var superLog = PQLog[chs] + 1;
						cm.addPlayerLog(superLog, 0);
						em.setProperty("LogName", superLog);
						cm.worldSpouseMessage(0x15, "『首领挑战』 : " + cm.getPlayer().getName() + " 的敢死队队伍，气势汹汹的挑战 " + PQLog[chs] + " 去了。");
					} else {
						cm.sendOk("已经有队伍在进行了,请换其他频道尝试。");
						cm.dispose();
					}
					cm.dispose();
				}
			}
		} else if (status == 2) {
			cm.dispose();
		} else {
			cm.dispose();
		}
	} else {
		if (status == 0) {
			cm.warp(startmap, 0);
		}
		cm.dispose();
	}
}
