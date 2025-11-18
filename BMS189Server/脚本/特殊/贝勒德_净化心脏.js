var 三核奖励 = [
    [
        1142659,
        10,
        1,
        1
    ],
    [
        2615001,
        10,
        1,
        2
    ],
    [
        2049116,
        10,
        1,
        2
    ],
    [
        5062010,
        10,
        1,
        2
    ],
    [
        2430692,
        10,
        1,
        2
    ],
    [
        1113236,
        10,
        1,
        1
    ],
    [
        1012570,
        10,
        1,
        1
    ],
    [
        1122352,
        10,
        1,
        1
    ],
    [
        1152195,
        10,
        1,
        1
    ],
    [
        1132299,
        10,
        1,
        1
    ],
    [
        1022264,
        10,
        1,
        1
    ],
    [
        1032263,
        10,
        1,
        1
    ],
    [
        2591587,
        10,
        1,
        1
    ],
    [
        1132246,
        10,
        1,
        1
    ],
    [
        1122267,
        10,
        1,
        1
    ],
    [
        1032223,
        10,
        1,
        1
    ]
];
var 二核奖励 = [
    [
        1113074,
        10,
        1,
        1
    ],
    [
        1132245,
        10,
        1,
        1
    ],
    [
        1122266,
        10,
        1,
        1
    ],
    [
        1032222,
        10,
        1,
        1
    ],
    [
        1113073,
        10,
        1,
        1
    ],
    [
        1132244,
        10,
        1,
        1
    ],
    [
        1122265,
        10,
        1,
        1
    ],
    [
        1032221,
        10,
        1,
        1
    ]
];
var 一核奖励 = [
    [
        1113072,
        10,
        1,
        1
    ],
    [
        1132243,
        10,
        1,
        1
    ],
    [
        1122264,
        10,
        1,
        1
    ],
    [
        1032220,
        10,
        1,
        1
    ]
];
var status = -1;
var selectionLog = [];
function start() {
    action(1, 0, 0);
}
function action(f, g, l) {
    if (cm.getMapId() != 863010700) {
        cm.dispose();
        cm.playerMessage(-1, '准备好了就进入吧！');
        return;
    }
    if (eim.getNumberProperty('领取奖励') > 0) {
        cm.dispose();
        return;
    }
    if (status == 0 && f == 0) {
        cm.dispose();
        return;
    }
    f == 1 ? status++ : status--;
    selectionLog[status] = l;
    var d = -1;
    if (status <= d++) {
        cm.dispose();
    } else {
        if (status === d++) {
            eim.setProperty('领取奖励', 1);
            var e = parseInt(eim.getProperty('头召唤情况'));
            var b = Math.floor(Math.random() * 10);
            if (e == 3) {
                var j = Array();
                for (var d = 0; d < 三核奖励.length; d++) {
                    if (b < 三核奖励[d][1]) {
                        var k = 三核奖励[d][2];
                        var h = 三核奖励[d][3];
                        var c = Math.floor(Math.random() * (h - k + 1) + k);
                        j.push([
                            三核奖励[d][0],
                            c
                        ]);
                    }
                }
                for (var d = 0; d < j.length; d++) {
                    if (cm.getPlayer().getMap() != null) {
                        var a = eim.getMapInstance(19);
                    }
                    a.spawnAutoDrop(j[d][0], new java.awt.Point(Math.floor(Math.random() * 100) + 60, 74));
                }
            } else {
                if (e == 2) {
                    var j = Array();
                    for (var d = 0; d < 二核奖励.length; d++) {
                        if (b < 二核奖励[d][1]) {
                            var k = 二核奖励[d][2];
                            var h = 二核奖励[d][3];
                            var c = Math.floor(Math.random() * (h - k + 1) + k);
                            j.push([
                                二核奖励[d][0],
                                c
                            ]);
                        }
                    }
                    for (var d = 0; d < j.length; d++) {
                        if (cm.getPlayer().getMap() != null) {
                            var a = eim.getMapInstance(19);
                        }
                        a.spawnAutoDrop(j[d][0], new java.awt.Point(Math.floor(Math.random() * 100) + 60, 74));
                    }
                } else {
                    var j = Array();
                    for (var d = 0; d < 一核奖励.length; d++) {
                        if (b < 一核奖励[d][1]) {
                            var k = 一核奖励[d][2];
                            var h = 一核奖励[d][3];
                            var c = Math.floor(Math.random() * (h - k + 1) + k);
                            j.push([
                                一核奖励[d][0],
                                c
                            ]);
                        }
                    }
                    for (var d = 0; d < j.length; d++) {
                        if (cm.getPlayer().getMap() != null) {
                            var a = eim.getMapInstance(19);
                        }
                        a.spawnAutoDrop(j[d][0], new java.awt.Point(Math.floor(Math.random() * 100) + 60, 74));
                    }
                }
            }
            cm.Npc_Fadeout(9390126, 0, 1000);
            cm.getTopMsgFont('净化了贝勒德心脏，可以安心离开了吧。', 3, 20, 20, 0);
            cm.playerMessage(-1, ' 核心：' + e + ' ');
            cm.dispose();
        }
    }
}