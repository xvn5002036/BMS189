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
      2435833,
      2432973,
      2435158,
      2435162,
      2435140,
      2435433,
      2435166,
      2434950,
      2434951,
      2434574,
      2431966,
      2432153
    ];
    cm.gainItem(d[cm.rand(0,d.length-1)], 1);
    cm.gainItem(M, -1);
  }
}