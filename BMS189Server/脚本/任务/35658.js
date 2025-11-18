/**
-- BMS 任务脚本空白模板 ---------------------------------------------------------------------------
任务 ID： 35658
任务名称： [创世武器]狮子王班·雷昂的痕迹
任务开始NPC ID： 9063150
任务开始NPC 名称： 南哈特
-- 更新日志 ---------------------------------------------------------------------------------------
2022-06-24 17:05:12 创建模板
---------------------------------------------------------------------------------------------------
 **/

// 全局变量
var status = -1; // status: 当前聊天交互轮数
var selectionLog = []; // 记录每一轮的选择
// 任务开始时执行
function start(mode, type, selection) {
	if (status == 0 && mode == 0) {
		cm.dispose();
		return;
	}
	(mode == 1) ? status++ : status--;
	selectionLog[status] = selection;
	var i = -1;
	if (status <= i++) {
		cm.dispose();
	} else if (status == i++) {
		cm.askYesNo("后续任务剧情尚未修复，都是一些BOSS击杀，创世解封请使用脚本解封，将自动完成接下来的环节。");

	} else if (status == i++) {
		// cm.setQuestCustomData("clear");
		cm.forceCompleteQuest(35658);
		cm.forceCompleteQuest(35659);
		cm.forceCompleteQuest(35660);
		cm.forceCompleteQuest(35661);
		cm.forceCompleteQuest(35662);
		cm.forceCompleteQuest(35663);
		cm.forceCompleteQuest(35664);
		cm.forceCompleteQuest(35665);
		cm.forceCompleteQuest(35666);
		cm.forceCompleteQuest(35667);
		cm.forceCompleteQuest(35668);
		cm.forceCompleteQuest(35669);
		cm.forceCompleteQuest(35670);
		cm.forceCompleteQuest(35656);
		cm.forceCompleteQuest(35657);
		cm.dispose();
	}
}

// 依次对话时执行。根据已对话的次数，分别会调用 stage0, stage1, .....stageN
function stage0(mode, type, selection) {
	if (status == 0 && mode == 0) {
		cm.dispose();
		return;
	}
	status++;
	selectionLog[status] = selection;
	var i = -1;
	if (status <= i++) {
		cm.dispose();
	} else if (status == i++) {
		var id = cm.getQuest();
		cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/35658.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？");
	} else if (status == i++) {
		cm.forceStartQuest();
		cm.dispose();
	}
}

// 任务结束时执行
function end(mode, type, selection) {
	if (status == 0 && mode == 0) {
		cm.dispose();
		return;
	}
	(mode == 1) ? status++ : status--;
	selectionLog[status] = selection;
	var i = -1;
	if (status <= i++) {
		cm.dispose();
	} else if (status == i++) {
		cm.forceCompleteQuest(35658);
		cm.forceCompleteQuest(35659);
		cm.forceCompleteQuest(35660);
		cm.forceCompleteQuest(35661);
		cm.forceCompleteQuest(35662);
		cm.forceCompleteQuest(35663);
		cm.forceCompleteQuest(35664);
		cm.forceCompleteQuest(35665);
		cm.forceCompleteQuest(35666);
		cm.forceCompleteQuest(35667);
		cm.forceCompleteQuest(35668);
		cm.forceCompleteQuest(35669);
		cm.forceCompleteQuest(35670);
		cm.forceCompleteQuest(35656);
		cm.forceCompleteQuest(35657);
		cm.dispose();
	}
}