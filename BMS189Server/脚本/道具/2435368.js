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
    var M = cm.getItemId();
    cm.gainItem(M, -1);
    var d = [
      4230505,
      4230506,
      5120501,
      2600321,
      5120502
    ];
    cm.gainOneMobCollection(d[cm.rand(0,d.length-1)]);
    cm.dispose();
  }
}