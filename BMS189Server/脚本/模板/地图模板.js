/**
-- BMS 地图脚本 ---------------------------------------------------------------------------
地图ID： %所在地图ID%
地图名称： %所在地图名称%
-- 更新日志 ---------------------------------------------------------------------------------------
%创建时间% 创建模板
---------------------------------------------------------------------------------------------------
 **/

// 全局变量
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
	status++;
	selectionLog[status] = selection;
	var i = -1;
	if (status <= i++) {
		cm.dispose();
	} else if (status === i++) {
		if (cm.getPlayer().isGM()) {
			cm.playerMessage(5, "[GM]未修复的地图触发脚本。脚本位于： %SCRIPT_PATH%");
		}
		cm.dispose();
	}
}
