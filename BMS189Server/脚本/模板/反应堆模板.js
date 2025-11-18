/**
-- BMS 反应堆脚本 -------------------------------------------------------------------------
反应堆 ID： %反应堆ID%
反应堆名称： %反应堆名称%
所在地图ID： %所在地图ID%
所在地图名称： %所在地图名称%
-- 更新日志 ---------------------------------------------------------------------------------------
%创建时间% 创建模板
---------------------------------------------------------------------------------------------------
 **/

function act() {
	var id = cm.getReactor().getReactorId();
	var name = cm.getReactor().getName();
	cm.playerMessage(5, "这个反应堆 [" + id + " : " + name + "] 的脚本尚未修复。脚本位于： %SCRIPT_PATH% 。【注意】修改完脚本后要重载脚本才能生效！");

	// 如果要激活对话，则取消下面方法的注释。会像普通对话一样加载下面的脚本内容。
	// cm.openScriptNpc();
}
var status = -1; // status: 当前聊天交互轮数
var selectionLog = []; // 记录每一轮的选择
function start() {
	action(1, 0, 0);
}
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
		var id = cm.getReactor().getId();
		var name = cm.getReactor().getName();
		cm.sendOk("这个传送点 [" + id + " : " + name + "] 的脚本尚未修复。\r\n脚本位于： %SCRIPT_PATH% ", 0);
	} else {
		cm.dispose();
	}
}
