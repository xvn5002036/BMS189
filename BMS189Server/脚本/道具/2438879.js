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
    var d = [
      2438924,
      2435841,
      2436026,
      2437239,
      2437164,
      2437482,
      2436560,
      2438143
    ];
    cm.gainItem(d[cm.rand(0,d.length-1)], 1);
    cm.gainItem(M, -1);
  }
}