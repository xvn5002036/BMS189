var selectionLog = [];
var status = -1;
function action(f, d, c) {
    var b = cm.getNpc();
    var e = cm.getNumberFromQuestCustomData(867200400);
    if (status == 0 && f == 0) {
        if (b == 10000 && cm.getNumberFromQuestInfo(64005, 'duringEvent') == 0) {
            cm.莫奈德_特效(null, [
                0,
                2
            ]);
        }
        cm.dispose();
        return;
    }
    f == 1 ? status++ : status--;
    selectionLog[status] = c;
    var a = -1;
    if (status <= a++) {
        cm.dispose();
    } else {
        if (status === a++) {
            if (b == 10000) {
                cm.莫奈德_特效(null, [
                    0,
                    3
                ]);
                cm.askYesNo('确定中途退出吗？', 3, 0);
            } else {
                cm.askYesNo('要回到那些在等你的人那里吗？', 4, 9400570);
            }
        } else {
            if (status === a++) {
                if (cm.getMapId() == 867200500) {
                    for (var a = 2210207; a <= 2210211; a++) {
                        cm.cancelItem(a);
                    }
                    cm.warp(867200408, 0);
                } else {
                    if (cm.getMapId() == 867200550) {
                        for (var a = 2210207; a <= 2210211; a++) {
                            cm.cancelItem(a);
                        }
                        cm.warp(867200853, 0);
                    } else {
                        if (e < 100000000) {
                            cm.warp(867200111, 0);
                            cm.playerMessage(5, '没有保存在莫奈德的探索记录。会从头开始故事。');
                            cm.playerMessage(-1, '没有保存在莫奈德的探索记录。会从头开始故事。');
                        } else {
                            cm.warp(e, 0);
                        }
                    }
                }
                cm.dispose();
            }
        }
    }
}
function start() {
    status = -1;
    action(1, 0, 0);
}