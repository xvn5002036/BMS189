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
    cm.gainItem(M, -1);
    cm.gainMeso(cm.rand(4000000, 10000000));
    var d = [
      1182195,
      2022799,
      2022798,
      2022797,
      2022796,
      2022795,
      2022794,
      2022745,
      2022744,
      2022743,
      2022742,
      2022741,
      2022740
    ];
    cm.gainItem(d[cm.rand(0,d.length-1)], 10);
    var k = [
      4001832,
      4001839,
      2049501,
      2048703,
      2048702,
      2048701,
      2711000,
      2049717,
      2048307,
      2530001
    ];
    var S = [
      1000,
      250,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1
    ];
    var m = cm.rand(0, k.length - 1);
    cm.gainItem(k[m], S[m]);
  }
}