var status = -1;
function action(d, b, a) {
    if (d == 1) {
        status++;
    } else {
        cm.dispose();
        return;
    }
    if (status == 0) {
        cm.askMenu('等一下!!你想要移动到哪个扎昆的祭坛呢?#b\r\n#L0#简单扎昆#l\r\n#L1#普通扎昆#l\r\n#L2#进阶扎昆#l');
    } else {
        if (status == 1) {
            var c = cm.getPlayer().getClient().getChannel();
            var e = cm.getPlayer().getLevel();
            if (a == 0) {
                if (e < 50) {
                    cm.sendNext('你的力量好像不够啊, 等你到了50级再来吧。');
                } else {
                    if (!cm.haveItem(4001796)) {
                        cm.playerMessage('你没有需要献给简单扎昆的祭品，因此无法进行移动。');
                    } else {
                        cm.warp(211042402, 'west00');
                    }
                }
            } else {
                if (a == 1) {
                    if (e < 90) {
                        cm.sendNext('你的力量好像不够啊, 等你到了90级再来吧。');
                    } else {
                        if (!cm.haveItem(4001017)) {
                            cm.playerMessage('你没有需要献给普通扎昆的祭品，因此无法进行移动。');
                        } else {
                            cm.warp(211042400, 'west00');
                        }
                    }
                } else {
                    if (a == 2) {
                        if (e < 90) {
                            cm.sendNext('你的力量好像不够啊, 等你到了90级再来吧。');
                        } else {
                            if (!cm.haveItem(4001017)) {
                                cm.playerMessage('你没有需要献给进阶扎昆的祭品，因此无法进行移动。');
                            } else {
                                cm.warp(211042401, 'west00');
                            }
                        }
                    }
                }
            }
            cm.dispose();
        }
    }
}
function start() {
    status = -1;
    action(1, 0, 0);
}