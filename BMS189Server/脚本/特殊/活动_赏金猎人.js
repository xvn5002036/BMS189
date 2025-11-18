var status = -1;
var selectionLog = [];
var rand;
function start() {
    status = -1;
    action(1, 0, 0);
}
function action(d, c, b) {
    if (d == 1) {
        status++;
    } else {
        status--;
    }
    var a = -1;
    if (status <= a++) {
        cm.dispose();
    } else {
        if (status === a++) {
            rand = cm.rand(1, 6);
            if (rand == 1 || rand == 2 || rand == 6) {
                cm.sendNormalTalk('你好！我是冒险岛世界最好的赏金猎人#r#e保罗#n#k。\r\n我正在和弟弟#b#e普利托#n#k一起消灭魔物。', 4, 9001059, false, true);
            } else {
                cm.sendNormalTalk('你好？我是赏金猎人#b#e普利托#n#k，\r\n我和哥哥#r#e保罗#n#k现在可是名扬天下呢！哈哈！', 4, 9001060, false, true);
            }
        } else {
            if (status === a++) {
                if (rand == 1 || rand == 2 || rand == 6) {
                    cm.askMenu('我刚好想去打猎。你愿意和我一起去消灭#b魔物#k吗？\r\n#b#L0#一起去。#l\r\n#b#L1#不一起去。', 4, 9001059);
                } else {
                    cm.askMenu('虽然大家以为我很笨，但其实我是个非常厉害的人。怎么样？愿意跟我一起去冒险吗？\r\n#b（入场时，召唤类技能及部分技能将会被解除。）\r\n#b#L0#一起去。#l\r\n#b#L1#不去。', 4, 9001060);
                }
            } else {
                if (status === a++) {
                    cm.onRandomPortalRemoved(2, 243, cm.getMapId());
                    cm.dispose();
                    if (b == 0) {
                        cm.setNumberForQuestCustomData(9001060, rand);
                        cm.setNumberForQuestCustomData(993000500, cm.getMapId());
                        if (cm.isQuestActive(49017)) {
                            cm.addNumberForQuestInfo(15143, 'successcount', 1000);
                        }
                        switch (rand) {
                        case 1:
                            cm.openNpc('活动_悬赏狩猎');
                            break;
                        case 2:
                            cm.openNpc('活动_守卫城墙');
                            break;
                        case 3:
                            cm.openNpc('活动_猎鹰');
                            break;
                        case 4:
                            cm.openNpc('活动_偷蛋');
                            break;
                        case 5:
                            cm.openNpc('活动_求爱之舞');
                            break;
                        case 6:
                            cm.openNpc('活动_暴风之翼狩猎');
                            break;
                        }
                    }
                } else {
                    cm.dispose();
                }
            }
        }
    }
}