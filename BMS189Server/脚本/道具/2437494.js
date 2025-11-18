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
      2437498,
      2436682,
      2436679,
      2436528,
      2436084,
      2435840,
      2435433,
      2435182,
      2435430,
      2434619,
      2433588,
      2434575,
      2433980
    ];
    cm.gainItem(d[cm.rand(0,d.length-1)], 1);
    cm.gainItem(M, -1);
  }
}