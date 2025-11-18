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
      2436528,
      2435099,
      2436529,
      2435182,
      2435162,
      2435222,
      2435427,
      2436023,
      2434530,
      2434546,
      2434950,
      2434951,
      2432526
    ];
    cm.gainItem(d[cm.rand(0,d.length-1)], 1);
    cm.gainItem(M, -1);
  }
}