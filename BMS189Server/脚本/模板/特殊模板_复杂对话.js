/**
-- BMS NPC脚本 ----------------------------------------------------------------------------
NPC ID： %NPCID%
NPC名称： %NPC名称%
所在地图ID： %所在地图ID%
所在地图名称： %所在地图名称%
-- 更新日志 ---------------------------------------------------------------------------------------
%创建时间% 创建模板
---------------------------------------------------------------------------------------------------
 **/

// 全局变量
var status = -1; // status: 当前聊天交互轮数
var selectionLog = []; // 记录每一轮的选择

// 开头
function start() {
	action(1, 0, 0);
}

/**
 * 【控制中心式结构】
 * 效果：当调用本脚本时，根据NPC ID自动分流到对应的方法里
 * 例如：调用 cm.openNpc(123,"脚本名称") 会调用 action123(mode, type, selection) 方法
 **/
function action(mode, type, selection) {
	if (status == 0 && mode == 0) {
		cm.dispose();
		return;
	}
	(mode == 1) ? status++ : status--;
	selectionLog[status] = selection;
	
	var reactor = "action" + cm.getNpc();
	eval(reactor)(mode, type, selection);
}

/**
 * 【分支式结构】
 * 效果：每个选项会有长度不同的分支对话，根据选项调用不同子脚本
 * 例如：在初次对话里选择1，会调用 action分支1(mode, type, selection,i) 方法
 **/
function action(mode, type, selection) {
	if (status == 0 && mode == 0) {
		cm.dispose();
		return;
	}
	(mode == 1) ? status++ : status--;
	selectionLog[status] = selection;
	var i = -1;
	if (status <= i++) {
		cm.dispose();
	} else if (status === i++) {
		cm.askMenu("你需要我的帮助吗？\r\n\r\n#b#L0#分支0#l#k\r\n#b#L1#分支1#l#k\r\n\r\n#b#L2#分支2l#k", 0, 9400965); // [类型] 选择菜单
	} else {
		var reactor = "action分支" + selectionLog[1];
		eval(reactor)(mode, type, selection, i);
	}
}

/**
 * 【分支式结构】子方法
 **/
function action分支1(mode, type, selection, i) {
	if (status <= i++) {
		cm.sendNormalTalk("分支1。", 0, 9400965, false, false); // [类型] 普通对话
	} else if (status === i++) {
		cm.dispose();
	}
}
