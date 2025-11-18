var status = -1;
var selectionLog = [];
var infoQuest = 500862;
function start() {
    action(1, 0, 0);
}
function action(f, h, j) {
    if (status == 0 && f == 0) {
        cm.dispose();
        return;
    }
    f == 1 ? status++ : status--;
    selectionLog[status] = j;
    var e = -1;
    if (status <= e++) {
        cm.dispose();
    } else {
        if (status === e++) {
            var b = cm.getNpc();
            var d = cm.getNumberFromQuestInfo(infoQuest, 'unlockBox');
            var g = cm.getNumberFromQuestInfo(infoQuest, 'openBox');
            if (b + 1 > d) {
                cm.playerMessage(5, '尚无法打开该加速箱。请完成' + d + '个每日任务。');
                cm.playerMessage(-1, '尚无法打开该加速箱。请完成' + d + '个每日任务。');
            } else {
                if (b == g) {
                    cm.fieldEffect_PlayFieldSound('Sound/FarmSE.img/casher', 100);
                    cm.addNumberForQuestInfo(infoQuest, 'openBox', 1);
                    cm.addNumberForQuestInfo(infoQuest, 'booster', 1, 0, 9);
                    if (g >= 9) {
                        cm.updateInfoQuest(16401, 'season=2018/10;str=全部加速任务已完成！');
                    } else {
                        cm.updateInfoQuest(16401, 'season=2018/10;str=' + (g + 2) + '阶段箱挑战中！请完成每日任务' + (g + 2) + '个！');
                    }
                    if (g < 3) {
                        var a = '低级';
                        var l = [
                            2049033,
                            2470001,
                            2049505,
                            2434638,
                            2000005,
                            2711011,
                            4001832
                        ];
                        var c = [
                            1,
                            1,
                            1,
                            1,
                            20,
                            1,
                            200
                        ];
                    } else {
                        if (g < 6) {
                            var l = [
                                2048744,
                                2048332,
                                2049603,
                                2049033,
                                2470001,
                                2049705,
                                2049175,
                                2434638,
                                2711001,
                                4001832
                            ];
                            var c = [
                                1,
                                1,
                                1,
                                1,
                                1,
                                1,
                                1,
                                1,
                                10,
                                500
                            ];
                            var a = '中级';
                        } else {
                            var l = [
                                2048754,
                                2048729,
                                2048728,
                                2049033,
                                2049175,
                                2434639,
                                2711001,
                                4001832
                            ];
                            var c = [
                                1,
                                2,
                                3,
                                1,
                                2,
                                1,
                                10,
                                150
                            ];
                            var a = '高级';
                        }
                    }
                    var k = Math.pow(cm.getPlayer().getLevel(), 3) * cm.rand(5, 25);
                    cm.sendNormalTalk_Bottom('在#b#e<' + a + '加速箱>#n#k中获得了#b#e经验值 ' + k + ' EXP#n#k和\r\n#b#e#i' + l[e] + ':# #t' + l[e] + ':# ' + c[e] + '个！', 57, 0, false, true);
                    cm.gainExp(k);
                    var e = cm.rand(0, l.length - 1);
                    cm.gainItem(l[e], c[e]);
                }
            }
            cm.dispose();
        } else {
            if (status === e++) {
                cm.dispose();
            }
        }
    }
}