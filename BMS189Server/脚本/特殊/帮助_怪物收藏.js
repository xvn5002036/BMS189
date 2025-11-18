var status = -1;
var selectionLog = [];
function start() {
    action(1, 0, 0);
}
function action(mode, type, selection) {
    if (status == 0 && mode == 0) {
        cm.dispose();
        return;
    }
    mode == 1 ? status++ : status--;
    selectionLog[status] = selection;
    var i = -1;
    if (status <= i++) {
        cm.dispose();
    } else {
        if (status == i++) {
            cm.askMenu('你对#e[怪物收藏]#n有疑问吗？\r\n\r\n#b#L0# 1。要如何收集怪物？#l\r\n#L1# 2。要怎么做才能得到怪物收藏勋章？#l\r\n#L2# 3。请告诉我怪物探险的使用方法。#l', 4, 9010000);
        } else {
            var reactor = 'action分支' + selectionLog[1];
            eval(reactor)(mode, type, selection, i);
        }
    }
}
function action分支0(d, c, b, a) {
    if (status <= a++) {
        cm.sendNormalTalk('#eQ。怎么才能搜集怪物呢？#n\r\n\r\nA。在冒险岛世界的各个地方探险，消灭怪物时，有一定概率将怪物加入怪物收藏。但在执行世界综合组队任务过程中无法搜集怪物收藏。\r\n\r\n此外，在同一世界内收藏共享，多个角色可以一起搜集。希望你能记住这一点！', 4, 9010000, false, true);
        status = -1;
    }
}
function action分支1(d, c, b, a) {
    if (status <= a++) {
        cm.sendNormalTalk('#eQ。怎样才能够获得怪物收藏勋章？#n\r\n\r\nA。按地区收藏超过50个怪物时就可以获得勋章，对于一些怪物不足50个的地区，等到该地区日后添加了全新怪物时，就可以获得勋章。', 4, 9010000, false, true);
        status = -1;
    }
}
function action分支2(d, c, b, a) {
    if (status <= a++) {
        cm.sendNormalTalk('#eQ。请告诉我怪物探险的使用方法。#n\r\n\r\nA。在怪物收藏中完成一行时，可以派该怪物出去探险。完成探险的怪物会带回包括积分在内的各种道具作为礼物。这可是获得特殊道具的好机会，千万不要错过。', 4, 9010000, false, true);
        status = -1;
    }
}