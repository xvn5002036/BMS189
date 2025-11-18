var status = -1;
var selectionLog = [];
function start() {
    action(1, 0, 0);
}
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
            if (cm.getMapId() == 863010100) {
                cm.fieldEffect_Tremble(1, 0, 300);
                cm.getMap().onSyncDynamicFoothold(['open'], [0], [0], [-103], [-189]);
                cm.setFieldValue('863010100', '1');
                cm.setFieldValue('clearType', '0');
                cm.贝勒德_小地图([
                    'clearType',
                    '863010100'
                ], [
                    '0',
                    '1'
                ]);
                cm.getMap().onDynamicObjVisible(['open'], [0]);
                cm.贝勒德_动画('open', 1);
            } else {
                if (cm.getMapId() == 863010220) {
                    cm.getMap().onSyncDynamicFoothold([''], [0], [0], [87], [-818]);
                    cm.fieldEffect_ScreenMsg('giantBoss/enter/22');
                    cm.fieldEffect_Tremble(0, 5000, 30);
                    cm.fieldEffect_PlayFieldSound('Sound/FarmSE.img/boxResult', 100);
                    cm.setFieldValue('863010220', '1');
                    cm.贝勒德_小地图([
                        'clearType',
                        '863010100',
                        '863010220'
                    ], [
                        '0',
                        '0',
                        '1'
                    ]);
                    cm.setAccountQuestInfo(226, 'count=5428;T=20200606222016');
                } else {
                    if (cm.getMapId() == 863010230) {
                        cm.getMap().onSyncDynamicFoothold([''], [0], [0], [21], [-137]);
                        cm.fieldEffect_ScreenMsg('giantBoss/enter/23');
                        cm.fieldEffect_Tremble(0, 5000, 30);
                        cm.fieldEffect_PlayFieldSound('Sound/FarmSE.img/boxResult', 100);
                        cm.setFieldValue('863010230', '1');
                        cm.贝勒德_小地图([
                            'clearType',
                            '863010100',
                            '863010220',
                            '863010230'
                        ], [
                            '0',
                            '0',
                            '2',
                            '1'
                        ]);
                    } else {
                        if (cm.getMapId() == 863010240) {
                            cm.fieldEffect_Tremble(1, 0, 30);
                            cm.getMap().onSyncDynamicFoothold([
                                'change',
                                'clear1',
                                'clear2'
                            ], [
                                0,
                                0,
                                0
                            ], [
                                1,
                                0,
                                0
                            ], [
                                -1,
                                10,
                                41
                            ], [
                                -59,
                                36,
                                -220
                            ]);
                            cm.fieldEffect_ScreenMsg('giantBoss/enter/24');
                            cm.setFieldValue('863010240', '1');
                            cm.贝勒德_小地图([
                                'clearType',
                                '863010100',
                                '863010220',
                                '863010230',
                                '863010240'
                            ], [
                                '0',
                                '0',
                                '2',
                                '2',
                                '1'
                            ]);
                            cm.setFieldValue('863010240', '2');
                        } else {
                            if (cm.getMapId() == 863010210) {
                                cm.getMap().onSyncDynamicFoothold([''], [0], [0], [19], [-140]);
                                cm.fieldEffect_ScreenMsg('giantBoss/enter/21');
                                cm.fieldEffect_Tremble(0, 5000, 30);
                                cm.fieldEffect_PlayFieldSound('Sound/FarmSE.img/boxResult', 100);
                                cm.setFieldValue('863010210', '1');
                                cm.贝勒德_小地图([
                                    'clearType',
                                    '863010100',
                                    '863010210',
                                    '863010220',
                                    '863010230',
                                    '863010240'
                                ], [
                                    '0',
                                    '0',
                                    '1',
                                    '2',
                                    '2',
                                    '2'
                                ]);
                                cm.setAccountQuestInfo(226, 'count=5481;T=20200608013154');
                            } else {
                                if (cm.getMapId() == 863010200) {
                                    cm.getMap().onSyncDynamicFoothold([''], [0], [0], [564], [-140]);
                                    cm.fieldEffect_ScreenMsg('giantBoss/enter/20');
                                    cm.fieldEffect_Tremble(0, 5000, 30);
                                    cm.fieldEffect_PlayFieldSound('Sound/FarmSE.img/boxResult', 100);
                                    cm.setFieldValue('863010200', '1');
                                    cm.贝勒德_小地图([
                                        'clearType',
                                        '863010100',
                                        '863010200',
                                        '863010210',
                                        '863010220',
                                        '863010230',
                                        '863010240'
                                    ], [
                                        '0',
                                        '0',
                                        '1',
                                        '2',
                                        '2',
                                        '2',
                                        '2'
                                    ]);
                                } else {
                                    if (cm.getMapId() == 863010300) {
                                        cm.fieldEffect_Tremble(1, 2110, 100);
                                        cm.getMap().onSyncDynamicFoothold([], [], [], [], []);
                                        cm.fieldEffect_ScreenMsg('giantBoss/enter/30');
                                        cm.fieldEffect_PlayFieldSound('Sound/FarmSE.img/boxResult', 100);
                                        cm.setFieldValue('863010300', '1');
                                        cm.贝勒德_小地图([
                                            'clearType',
                                            '863010100',
                                            '863010200',
                                            '863010300',
                                            '863010210',
                                            '863010220',
                                            '863010230',
                                            '863010240'
                                        ], [
                                            '0',
                                            '0',
                                            '0',
                                            '1',
                                            '2',
                                            '2',
                                            '2',
                                            '2'
                                        ]);
                                        cm.forceForfeitQuest(49016);
                                    } else {
                                        if (cm.getMapId() == 863010310) {
                                            cm.getMap().onSyncDynamicFoothold([
                                                'clear',
                                                'open'
                                            ], [
                                                0,
                                                0
                                            ], [
                                                0,
                                                0
                                            ], [
                                                311,
                                                310
                                            ], [
                                                -519,
                                                -174
                                            ]);
                                            cm.fieldEffect_ScreenMsg('giantBoss/enter/31');
                                            cm.fieldEffect_Tremble(0, 5000, 30);
                                            cm.fieldEffect_PlayFieldSound('Sound/FarmSE.img/boxResult', 100);
                                            cm.setFieldValue('863010310', '1');
                                            cm.贝勒德_小地图([
                                                'clearType',
                                                '863010100',
                                                '863010200',
                                                '863010300',
                                                '863010210',
                                                '863010310',
                                                '863010220',
                                                '863010230',
                                                '863010240'
                                            ], [
                                                '0',
                                                '0',
                                                '0',
                                                '2',
                                                '2',
                                                '1',
                                                '2',
                                                '2',
                                                '2'
                                            ]);
                                            cm.贝勒德_动画('open', 1);
                                            cm.贝勒德_动画('clear', 1);
                                            cm.setFieldValue('863010310', '2');
                                        } else {
                                            if (cm.getMapId() == 863010320) {
                                                cm.fieldEffect_Tremble(1, 3570, 100);
                                                cm.getMap().onSyncDynamicFoothold([], [], [], [], []);
                                                cm.fieldEffect_ScreenMsg('giantBoss/enter/32');
                                                cm.fieldEffect_PlayFieldSound('Sound/FarmSE.img/boxResult', 100);
                                                cm.setFieldValue('863010320', '1');
                                                cm.effect_Text(['#fn黑体##fs26#          斗燃第10阶段：额外发放100%的经验值！！         '], [
                                                    50,
                                                    1500,
                                                    4,
                                                    0,
                                                    -200,
                                                    1,
                                                    4,
                                                    2,
                                                    0,
                                                    0,
                                                    0
                                                ]);
                                                cm.贝勒德_小地图([
                                                    'clearType',
                                                    '863010100',
                                                    '863010200',
                                                    '863010300',
                                                    '863010210',
                                                    '863010310',
                                                    '863010220',
                                                    '863010320',
                                                    '863010230',
                                                    '863010240'
                                                ], [
                                                    '0',
                                                    '0',
                                                    '0',
                                                    '2',
                                                    '2',
                                                    '2',
                                                    '2',
                                                    '1',
                                                    '2',
                                                    '2'
                                                ]);
                                                cm.setFieldValue('863010320', '2');
                                            } else {
                                                if (cm.getMapId() == 863010330) {
                                                    cm.getMap().onSyncDynamicFoothold([
                                                        'clear',
                                                        'phase3'
                                                    ], [
                                                        0,
                                                        0
                                                    ], [
                                                        0,
                                                        0
                                                    ], [
                                                        8,
                                                        43
                                                    ], [
                                                        -179,
                                                        -89
                                                    ]);
                                                    cm.fieldEffect_ScreenMsg('giantBoss/enter/33');
                                                    cm.fieldEffect_Tremble(0, 5000, 30);
                                                    cm.setFieldValue('863010330', '1');
                                                    cm.贝勒德_小地图([
                                                        'clearType',
                                                        '863010100',
                                                        '863010200',
                                                        '863010300',
                                                        '863010210',
                                                        '863010310',
                                                        '863010220',
                                                        '863010320',
                                                        '863010230',
                                                        '863010330',
                                                        '863010240'
                                                    ], [
                                                        '0',
                                                        '0',
                                                        '0',
                                                        '2',
                                                        '2',
                                                        '2',
                                                        '2',
                                                        '2',
                                                        '2',
                                                        '1',
                                                        '2'
                                                    ]);
                                                    cm.setFieldValue('863010330', '2');
                                                } else {
                                                    if (cm.getMapId() == 863010500) {
                                                        cm.getMap().onSyncDynamicFoothold([], [], [], [], []);
                                                        cm.setFieldValue('863010500', '1');
                                                        cm.贝勒德_小地图([
                                                            'clearType',
                                                            '863010100',
                                                            '863010200',
                                                            '863010300',
                                                            '863010210',
                                                            '863010310',
                                                            '863010220',
                                                            '863010500',
                                                            '863010320',
                                                            '863010230',
                                                            '863010330',
                                                            '863010240'
                                                        ], [
                                                            '0',
                                                            '0',
                                                            '0',
                                                            '2',
                                                            '2',
                                                            '2',
                                                            '2',
                                                            '1',
                                                            '2',
                                                            '2',
                                                            '2',
                                                            '2'
                                                        ]);
                                                    } else {
                                                        if (cm.getMapId() == 863010420) {
                                                            cm.fieldEffect_Tremble(1, 3570, 100);
                                                            cm.getMap().onSyncDynamicFoothold([], [], [], [], []);
                                                            cm.fieldEffect_ScreenMsg('giantBoss/enter/42');
                                                            cm.fieldEffect_PlayFieldSound('Sound/FarmSE.img/boxResult', 100);
                                                            cm.setFieldValue('863010420', '1');
                                                            cm.贝勒德_小地图([
                                                                'clearType',
                                                                '863010100',
                                                                '863010200',
                                                                '863010300',
                                                                '863010210',
                                                                '863010310',
                                                                '863010220',
                                                                '863010500',
                                                                '863010320',
                                                                '863010230',
                                                                '863010420',
                                                                '863010330',
                                                                '863010240'
                                                            ], [
                                                                '0',
                                                                '0',
                                                                '0',
                                                                '2',
                                                                '2',
                                                                '2',
                                                                '2',
                                                                '0',
                                                                '2',
                                                                '2',
                                                                '1',
                                                                '2',
                                                                '2'
                                                            ]);
                                                            cm.setFieldValue('863010420', '2');
                                                        } else {
                                                            if (cm.getMapId() == 863010410) {
                                                                cm.fieldEffect_Tremble(0, 5000, 30);
                                                                cm.getMap().onSyncDynamicFoothold([
                                                                    'clear',
                                                                    'open'
                                                                ], [
                                                                    0,
                                                                    0
                                                                ], [
                                                                    0,
                                                                    0
                                                                ], [
                                                                    -137,
                                                                    -136
                                                                ], [
                                                                    -491,
                                                                    -151
                                                                ]);
                                                                cm.fieldEffect_ScreenMsg('giantBoss/enter/41');
                                                                cm.fieldEffect_PlayFieldSound('Sound/FarmSE.img/boxResult', 100);
                                                                cm.setFieldValue('863010410', '1');
                                                                cm.贝勒德_小地图([
                                                                    'clearType',
                                                                    '863010100',
                                                                    '863010200',
                                                                    '863010300',
                                                                    '863010210',
                                                                    '863010310',
                                                                    '863010220',
                                                                    '863010410',
                                                                    '863010500',
                                                                    '863010320',
                                                                    '863010230',
                                                                    '863010420',
                                                                    '863010330',
                                                                    '863010240'
                                                                ], [
                                                                    '0',
                                                                    '0',
                                                                    '0',
                                                                    '2',
                                                                    '2',
                                                                    '2',
                                                                    '2',
                                                                    '1',
                                                                    '0',
                                                                    '2',
                                                                    '2',
                                                                    '2',
                                                                    '2',
                                                                    '2'
                                                                ]);
                                                                cm.setFieldValue('863010410', '2');
                                                                cm.贝勒德_动画('open', 1);
                                                                cm.贝勒德_动画('clear', 1);
                                                            } else {
                                                                if (cm.getMapId() == 863010420) {
                                                                    cm.fieldEffect_Tremble(1, 3570, 100);
                                                                    cm.getMap().onSyncDynamicFoothold([], [], [], [], []);
                                                                    cm.fieldEffect_ScreenMsg('giantBoss/enter/42');
                                                                    cm.fieldEffect_PlayFieldSound('Sound/FarmSE.img/boxResult', 100);
                                                                    cm.贝勒德_小地图([
                                                                        'clearType',
                                                                        '863010100',
                                                                        '863010200',
                                                                        '863010300',
                                                                        '863010210',
                                                                        '863010310',
                                                                        '863010220',
                                                                        '863010410',
                                                                        '863010500',
                                                                        '863010320',
                                                                        '863010230',
                                                                        '863010420',
                                                                        '863010330',
                                                                        '863010240'
                                                                    ], [
                                                                        '0',
                                                                        '0',
                                                                        '0',
                                                                        '2',
                                                                        '2',
                                                                        '2',
                                                                        '2',
                                                                        '2',
                                                                        '0',
                                                                        '2',
                                                                        '2',
                                                                        '2',
                                                                        '2',
                                                                        '2'
                                                                    ]);
                                                                } else {
                                                                    if (cm.getMapId() == 863010430) {
                                                                        cm.fieldEffect_Tremble(0, 5000, 30);
                                                                        cm.getMap().onSyncDynamicFoothold([
                                                                            'clear',
                                                                            'phase3'
                                                                        ], [
                                                                            0,
                                                                            0
                                                                        ], [
                                                                            0,
                                                                            0
                                                                        ], [
                                                                            76,
                                                                            23
                                                                        ], [
                                                                            -156,
                                                                            -77
                                                                        ]);
                                                                        cm.fieldEffect_ScreenMsg('giantBoss/enter/43');
                                                                        cm.setFieldValue('863010430', '1');
                                                                        cm.贝勒德_小地图([
                                                                            'clearType',
                                                                            '863010100',
                                                                            '863010200',
                                                                            '863010300',
                                                                            '863010210',
                                                                            '863010310',
                                                                            '863010220',
                                                                            '863010410',
                                                                            '863010500',
                                                                            '863010320',
                                                                            '863010230',
                                                                            '863010420',
                                                                            '863010330',
                                                                            '863010240',
                                                                            '863010430'
                                                                        ], [
                                                                            '0',
                                                                            '0',
                                                                            '0',
                                                                            '2',
                                                                            '2',
                                                                            '2',
                                                                            '2',
                                                                            '2',
                                                                            '0',
                                                                            '2',
                                                                            '2',
                                                                            '2',
                                                                            '2',
                                                                            '2',
                                                                            '1'
                                                                        ]);
                                                                    } else {
                                                                        if (cm.getMapId() == 863010600) {
                                                                            cm.fieldEffect_Tremble(0, 5000, 30);
                                                                            cm.getMap().onSyncDynamicFoothold([
                                                                                'phase2-1',
                                                                                'phase2-2',
                                                                                'phase3'
                                                                            ], [
                                                                                0,
                                                                                0,
                                                                                0
                                                                            ], [
                                                                                0,
                                                                                0,
                                                                                0
                                                                            ], [
                                                                                -300,
                                                                                290,
                                                                                -14
                                                                            ], [
                                                                                -219,
                                                                                -219,
                                                                                -401
                                                                            ]);
                                                                            cm.fieldEffect_ScreenMsg('giantBoss/enter/60');
                                                                            cm.setFieldValue('863010600', '1');
                                                                            cm.贝勒德_小地图([
                                                                                'clearType',
                                                                                '863010100',
                                                                                '863010200',
                                                                                '863010300',
                                                                                '863010210',
                                                                                '863010310',
                                                                                '863010220',
                                                                                '863010410',
                                                                                '863010500',
                                                                                '863010320',
                                                                                '863010230',
                                                                                '863010600',
                                                                                '863010420',
                                                                                '863010330',
                                                                                '863010240',
                                                                                '863010430'
                                                                            ], [
                                                                                '0',
                                                                                '0',
                                                                                '0',
                                                                                '2',
                                                                                '2',
                                                                                '2',
                                                                                '2',
                                                                                '2',
                                                                                '0',
                                                                                '2',
                                                                                '2',
                                                                                '1',
                                                                                '2',
                                                                                '2',
                                                                                '2',
                                                                                '2'
                                                                            ]);
                                                                            cm.setAccountQuestInfo(226, 'count=5781;T=20200608013654');
                                                                        } else {
                                                                            if (cm.getMapId() == 863000920) {
                                                                                cm.getMap().onSyncDynamicFoothold([], [], [], [], []);
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
            cm.killMob(9390617);
            cm.killMob(9390618);
            cm.killMob(9390619);
            cm.killMob(9390603);
            cm.dispose();
        }
    }
}