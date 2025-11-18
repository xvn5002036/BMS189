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
  else {
    if (status === T++) {
      if (cm.getSpace(2) < 3) {
        cm.sendOk('你的消耗栏格子不足3个空位，请先整理一下吧。');
        cm.dispose();
        return;
      }
      var M = cm.getItemId();
      if (cm.haveItem(5840004)) {
        cm.gainItem(5840004, -1);
        cm.gainItem(M, -1);
        cm.getFamiliarCard(3, 3);
      } else {
        cm.sendOk('需要有#b#i5840004##z5840004##k才能打开#i5537000##z5537000#！');
      }
    }
  }
}