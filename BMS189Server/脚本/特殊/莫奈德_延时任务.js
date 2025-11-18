var status = -1;
function action(mode, type, selection) {
    var reactor = 'action' + cm.getNpc();
    eval(reactor)(mode, type, selection);
}
function action66(c, b, a) {
    cm.addPopupSay(0, 3000, '#b小石啊，再快点！', '', 0);
    cm.onCameraTilt(-14, 4000);
    cm.dispose();
}
function action67(c, b, a) {
    cm.addPopupSay(9400580, 3000, '#face3#障碍物太多了！', '', 0);
    cm.addPopupSay(9400580, 3000, '#face3#啊啊- 小石啊，小心！', '', 0);
    cm.onCameraTilt(0, 4000);
    cm.onCameraTilt(14, 4000);
    cm.dispose();
}
function action68(c, b, a) {
    cm.addPopupSay(9400580, 3000, '#face3#小石，突进！', '', 0);
    cm.onCameraTilt(0, 4000);
    cm.dispose();
}
function action70(d, c, b) {
    cm.getMap().spawnReactorIfNotExist(8659131, 0, 150, 77, 0, 'rock');
    cm.getMap().spawnReactorIfNotExist(8659131, 0, 790, 10, 0, 'rock2');
    var a = cm.getQuestRecord(64169);
    a.setCustomData('');
    cm.getPlayer().updateQuest(a, true);
    cm.npc_setForceFlip('oid=7539200', 1);
    cm.npc_setForceFlip('oid=7539201', 1);
    cm.npc_SetForceMove('oid=7539200', 1, 250, 50);
    cm.npc_SetForceMove('oid=7539201', 1, 250, 50);
    cm.getPlayer().scheduleOpenNpcTask(9, 71, '莫奈德_延时任务');
    cm.dispose();
}
function action71(d, c, b) {
    cm.getMap().spawnReactorIfNotExist(8659131, 0, 150, 77, 0, 'rock');
    cm.getMap().spawnReactorIfNotExist(8659131, 0, 790, 10, 0, 'rock2');
    var a = cm.getQuestRecord(64169);
    a.setCustomData('rock');
    cm.getPlayer().updateQuest(a, true);
    cm.npc_setForceFlip('oid=7539200', -1);
    cm.npc_setForceFlip('oid=7539201', -1);
    cm.npc_SetForceMove('oid=7539200', -1, 250, 50);
    cm.npc_SetForceMove('oid=7539201', -1, 250, 50);
    cm.getPlayer().scheduleOpenNpcTask(9, 70, '莫奈德_延时任务');
    cm.dispose();
}
function action74(d, c, b) {
    status++;
    var a = -1;
    if (status <= a++) {
        cm.dispose();
    } else {
        if (status === a++) {
            cm.sendNewEffects(13, [
                3200,
                220,
                0,
                0,
                0
            ]);
        } else {
            if (status === a++) {
                cm.sendNewEffects(19, [2000]);
            } else {
                if (status === a++) {
                    cm.updateInfoQuest(64201, 'event1_camera=2;event1_wall=1');
                    cm.getMap().startSimpleMapEffect('建筑物快要塌了。快退后。', 5120180);
                    cm.killMob(9402300);
                    cm.killMob(9402270);
                    cm.spawnMobLimit(9402300, 1, 1080, 450, 1);
                    cm.dispose();
                    cm.Hidden_background('Roof_normal01', 1, 0, 2, 6800);
                    cm.Hidden_background('explode00', 1, 1, 1, 6800);
                    cm.Hidden_background('Roof_destroy01', 1, 0, 2, 10400);
                    cm.Hidden_background('explode00', 1, 0, 2, 10400);
                }
            }
        }
    }
}
function action75(e, d, c) {
    status++;
    var b = -1;
    if (status <= b++) {
        cm.dispose();
    } else {
        if (status === b++) {
            cm.updateInfoQuest(64202, 'event2_camera=1;event2_wall=1');
            cm.curNodeEventEnd(true);
            cm.setInGameDirectionMode(true, false, true);
            cm.inGameDirectionEvent_MoveAction(0);
            cm.inGameDirectionEvent_AskAnswerTime(1500);
        } else {
            if (status === b++) {
                cm.地图特效_开关落脚点([
                    41,
                    47
                ], [
                    1,
                    1
                ]);
                cm.setInGameDirectionMode(false, true, false);
                var a = em.getMonster(9402271);
                a.setStance(4);
                a.setHp(eim.getNumberProperty('bossHP'));
                cm.getMap().spawnMonsterWithEffectBelow(a, new java.awt.Point(-211, 615), 1);
                cm.getMap().startSimpleMapEffect('斯库亚斯市区战斗开始。', 5120180);
                cm.curNodeEventEnd(true);
                cm.dispose();
            }
        }
    }
}
function action76(d, c, b) {
    status++;
    var a = -1;
    if (status <= a++) {
        cm.dispose();
    } else {
        if (status === a++) {
            cm.sendNewEffects(13, [
                3000,
                220,
                0,
                0,
                0
            ]);
        } else {
            if (status === a++) {
                cm.sendNewEffects(19, [2000]);
            } else {
                if (status === a++) {
                    cm.updateInfoQuest(64202, 'event2_camera=2;event2_wall=1');
                    cm.getMap().startSimpleMapEffect('建筑物快要塌了。快退后。', 5120180);
                    cm.killMob(9402300);
                    cm.killMob(9402271);
                    cm.dispose();
                    cm.Hidden_background('Roof_normal02', 1, 0, 2, 7200);
                    cm.Hidden_background('explode01', 1, 1, 1, 7200);
                    cm.Hidden_background('explode01', 1, 0, 2, 9000);
                }
            }
        }
    }
}
function action77(d, c, b) {
    var a = em.getMonster(9402272);
    a.setStance(4);
    a.setHp(eim.getNumberProperty('bossHP'));
    cm.getMap().spawnMonsterWithEffectBelow(a, new java.awt.Point(360, 615), 1);
    cm.getMap().startSimpleMapEffect('斯库亚斯市区战斗开始。', 5120180);
    cm.dispose();
}
function action78(c, b, a) {
    cm.getMap().startSimpleMapEffect('建筑物快要塌了。快退后。', 5120180);
    cm.updateInfoQuest(64203, 'count=0;event3_camera=1');
    cm.地图特效_开关落脚点([
        43,
        42,
        44,
        45,
        46
    ], [
        1,
        1,
        1,
        1,
        1
    ]);
    cm.dispose();
    cm.Hidden_background('Roof_normal03', 1, 0, 2, 6800);
    cm.Hidden_background('explode02', 1, 1, 1, 6800);
    cm.Hidden_background('Roof_destroy03', 1, 0, 2, 10500);
    cm.Hidden_background('explode02', 1, 0, 2, 10500);
}
function action79(d, c, b) {
    status++;
    var a = -1;
    if (status <= a++) {
        cm.dispose();
    } else {
        if (status === a++) {
            cm.curNodeEventEnd(true);
            cm.setInGameDirectionMode(true, false, true);
            cm.地图特效_开关落脚点([
                48,
                49,
                51,
                52
            ], [
                1,
                1,
                1,
                1
            ]);
            cm.inGameDirectionEvent_AskAnswerTime(2400);
            cm.addPopupSay(9400602, 2000, '这里顶不住了！请撤退到城塔！', '', 0);
        } else {
            if (status === a++) {
                cm.setInGameDirectionMode(false, true, false);
                cm.dispose();
                cm.updateInfoQuest(64203, 'count=0;event3_camera=2');
            }
        }
    }
}
function action83(d, c, b) {
    status++;
    var a = -1;
    if (status <= a++) {
        cm.dispose();
    } else {
        if (status === a++) {
            if (cm.getNumberFromQuestInfo(64204, 'LadderMob') == 0) {
                cm.setNumberForQuestInfo(64204, 'LadderMob', 1);
                cm.killMob(9402273);
                cm.spawnMobLimit(9402274, 1, -99, 1185, 1);
            }
            if (cm.getPlayer().getPosition().y > 351) {
                cm.addPopupSay(9400604, 2000, '城塔上方！快到城塔上方去！', '', 0);
                cm.onTeleport(4, cm.getPlayer().getId(), -86, 351);
            }
            cm.dispose();
        }
    }
}
function action84(d, c, b) {
    status++;
    var a = -1;
    if (status <= a++) {
        cm.dispose();
    } else {
        if (status === a++) {
            if (cm.getNumberFromQuestInfo(64204, 'LadderMob') == 1) {
                cm.setNumberForQuestInfo(64204, 'LadderMob', 2);
            }
            if (cm.getPlayer().getPosition().y > 23) {
                cm.addPopupSay(9400604, 2000, '城塔上方！到城塔上方去！我们来争取时间！！', '', 0);
                cm.onTeleport(4, cm.getPlayer().getId(), 142, 23);
            }
            cm.dispose();
        }
    }
}
function start() {
    status = -1;
    action(1, 0, 0);
}