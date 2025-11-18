var status = -1;
var selectionLog = [];
function action(d, c, b) {
    if (status == 0 && d == 0) {
        cm.dispose();
        return;
    }
    status++;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose();
    } else {
        if (status === a++) {
            cm.askMenu_Bottom('你想在哪儿下去呢？\r\n\r\n#L0# #b学校门前#l#L1# #b喷泉公园#l#L2# #b细雨散步路#l#L3# #b晚霞空地\r\n#l#L4# #b这个嘛，让我再想想……#l', 37, 1530030);
        } else {
            if (status === a++) {
                if (b == 0) {
                    cm.warp(330000000, 12);
                    cm.dispose();
                } else {
                    if (b == 1) {
                        cm.warp(330001700, 0);
                        cm.dispose();
                    } else {
                        if (b == 2) {
                            cm.warp(330001800, 0);
                            cm.dispose();
                        } else {
                            if (b == 3) {
                                if (cm.isQuestActive(33025)) {
                                    cm.sendNormalTalk_Bottom('我感觉到一种不祥的气息。赶紧下去查看一下空地的状态吧。', 56, 0, false, true);
                                } else {
                                    if (cm.isQuestActive(33530)) {
                                        cm.warp(330000630, 0);
                                        cm.dispose();
                                    } else {
                                        cm.warp(330001900, 0);
                                        cm.dispose();
                                    }
                                }
                            } else {
                                if (b == 4) {
                                    cm.dispose();
                                }
                            }
                        }
                    }
                }
            } else {
                if (status === a++) {
                    cm.playerMessage(5, '必须消灭野外的所有怪物, 才能移动到下一地区. ');
                    cm.dispose();
                    cm.openNpc('副本_好友故事_Act5_寻找阿白老师');
                }
            }
        }
    }
}
function start() {
    status = -1;
    action(1, 0, 0);
}