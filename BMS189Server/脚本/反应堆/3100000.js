function act() {
  cm.openScriptNpc();
}
var status = -1;
var selectionLog = [];
function start() {
  action(1, 0, 0);
}
function action(F, r, m) {
  if (status == 0 && F == 0) {
    cm.dispose();
    return;
  }
  F == 1 ? status++ : status--;
  selectionLog[status] = m;
  var y = -1;
  if (status <= y++)
    cm.dispose();
  else if (status === y++) {
    cm.playerMessage(5, '启动防范装置.入侵者强制移动到搜索现场.');
    cm.warp(931020000, 1, false);
    cm.dispose();
  }
}