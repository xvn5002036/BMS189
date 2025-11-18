/**
-- BMS 道具脚本 ---------------------------------------------------------------------------
道具 ID： 5532118
道具名称： 走路鸡(永久)交换券
-- 更新日志 ---------------------------------------------------------------------------------------
2023-09-11 00:19:50 创建模板
---------------------------------------------------------------------------------------------------
 **/

// 全局变量
var status = -1;
var selectionLog = [];
function start() {
  action(1, 0, 0);
}
function action(s, P, j) {
  if (status == 0 && s == 0) {
    cm.dispose();
    return;
  }
  s == 1 ? status++ : status--;
  selectionLog[status] = j;
  var T = -1;
  if (status <= T++)
    cm.dispose();
  else if (status === T++) {
    cm.dispose();
    var M = cm.getItemId();
    cm.teachSkill(80001050, 1, 0);
    cm.effect_NormalSpeechBalloon('学会技能：[走路鸡骑宠] ', 1, 0, 0, 5000, 0, 0);
    cm.gainItem(cm.getItemId(), -1);
  }
}