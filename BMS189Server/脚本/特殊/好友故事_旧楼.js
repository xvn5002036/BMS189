var status = -1;
var selectionLog = [];
function action(c, b, a) {
    if (cm.getNpc() == 100) {
        action100(c, b, a);
    } else {
        if (cm.getNpc() == 1000) {
            action1000(c, b, a);
        } else {
            if (cm.isQuestActive(32859) || cm.isQuestActive(32860) || cm.getQuestStatus(32865) > 0 && !cm.isQuestFinished(32869)) {
                cm.warp(330004000, 0);
                cm.dispose();
            } else {
                if (cm.isQuestActive(33530) && cm.isQuestFinished(33503)) {
                    cm.warp(330003000, 0);
                    cm.dispose();
                } else {
                    if (cm.isQuestActive(33105)) {
                        cm.warp(330003001, 0);
                        cm.dispose();
                    } else {
                        action0(c, b, a);
                    }
                }
            }
        }
    }
}
function action0(d, c, b) {
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
            cm.sendNormalTalk_Bottom('这里好像被封锁了。还是回去吧\r\n\r\n#b（只有完成所有的剧情任务，才能进入神兽国际学校旧楼。)', 56, 0, false, false);
        } else {
            if (status === a++) {
                cm.dispose();
            }
        }
    }
}
function action100(d, c, b) {
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
            cm.sendNormalTalk_Bottom('你还想获得刺针吗？那么你可以去挑战#b旧楼副本#k，听说那样可以获得很多刺针哦。你要是想获得#b校服#k的话，就不妨去试试吧！', 37, 1530020, false, true);
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom('此外，根据挑战副本的程度还有可能获得#b与你相伴成长徽章#k哦。', 37, 1530020, true, false);
            } else {
                if (status === a++) {
                    cm.dispose();
                }
            }
        }
    }
}
function action1000(c, d, e) {
    if (status == 0 && c == 0) {
        cm.dispose();
        return;
    }
    status++;
    selectionLog[status] = e;
    var b = -1;
    if (status <= b++) {
        cm.dispose();
    } else {
        if (status === b++) {
            var j = eim.getNumberProperty('stage_1');
            var h = eim.getNumberProperty('stage_2');
            var g = eim.getNumberProperty('stage_3');
            var f = eim.getNumberProperty('stage_4');
            var a = cm.getPlayer().getLevel();
            cm.campusReward(a * a * a, 19112, 4, a * a * a * 4, 0, 0, 4, 2700100 + j, 3, 2700100 + h, 3, 2700100 + g, 3, 2700100 + f, 3, 2700204, 3);
            cm.dispose();
        }
    }
}
function start() {
    status = -1;
    action(1, 0, 0);
}