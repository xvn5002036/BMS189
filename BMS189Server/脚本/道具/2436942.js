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
      2436953,
      2436045,
      2435433,
      2436028,
      2435432,
      2435428,
      2435166,
      2433362,
      2434530,
      2434574,
      2435140,
      2431966
    ];
    cm.gainItem(d[cm.rand(0,d.length-1)], 1);
    cm.gainItem(M, -1);
  }
}