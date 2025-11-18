var status = -1;
var selectionLog = [];
var items = [
  2630214,
  2435158,
  2434950,
  2436679,
  2437023,
  2434529,
  2435840,
  2436578
];
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
    cm.gainItem(M, -1);
    cm.gainItem(items[cm.rand(0,items.length-1)], 1);
  }
}