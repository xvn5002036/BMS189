/**
-- BMS 道具脚本 ---------------------------------------------------------------------------
道具 ID： 2435298
道具名称： 樱花飞舞永久权
-- 更新日志 ---------------------------------------------------------------------------------------
2022-10-10 10:02:58 创建模板
---------------------------------------------------------------------------------------------------
 **/

// 全局变量
var status = -1; // status: 当前聊天交互轮数
var selectionLog = []; // 记录每一轮的选择

// 开头
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
		cm.dispose();
		var id = cm.getItemId();
		cm.sendOk("#i" + id + "##z" + id + "#\r\n我也不知道这个道具应该能做什么……它的脚本位于： #b 脚本/道具/2435298.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！", 0);
	}
}
