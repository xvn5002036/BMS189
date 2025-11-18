var 品客缤图标 = '#fUI/UIWindow2.img/StagedGachapon/Creature/0/normal/2#';
var 心形图标 = '#fUI/UIWindow2.img/Megaphone/0#';
var one = '#fUI/UIPVP.img/UserRanking/NumRank/Survival/1#';
var two = '#fUI/UIPVP.img/UserRanking/NumRank/Survival/2#';
var three = '#fUI/UIPVP.img/UserRanking/NumRank/Survival/3#';
var 发型列表 = [];
var 自选理发价格 = 15000;
var 随机理发价格 = 6000;
var 自选美容价格 = 15000;
var 随机美容价格 = 6000;
var 皮肤染色 = [
    0,
    1,
    2,
    3,
    4,
    6,
    7,
    8,
    9,
    10,
    16
];
var str, select, list;
var status = -1;
var selectionLog = [];
function start() {
    action(1, 0, 0);
}
function action(mode, type, selection) {
    var NPC = 2400004;
    var face = randomNum(0, 1);
    if (mode == -1) {
        cm.dispose();
        return;
    } else {
        if (mode == 0) {
            cm.dispose();
            return;
        }
        if (mode == 1) {
            status++;
        } else {
            status--;
        }
        selectionLog[status] = selection;
        var i = -1;
        if (status <= i++) {
            cm.dispose();
        } else {
            if (status === i++) {
                if (cm.getzhizunvip() == 2) {
                    var 简介 = 'BMS至尊版包含所有造型～';
                } else {
                    var 简介 = '黄金版_包含精选造型 [至尊版包含所有]';
                }
                var text = '#face' + face + '##fs18##r#fn方正粗黑宋简体#';
                text += '' + 品客缤图标 + '   ' + 心形图标 + ' 欢迎光临 #b' + cm.getServerName() + ' #k造型沙龙 ' + 心形图标 + '   ' + 品客缤图标 + '\r\n#fs15#';
                text += '#b#L0#发型设计#r（ ' + 简介 + ' ）#l\r\n';
                text += '#b#L1#脸部护理#r（ ' + 简介 + ' ）#l\r\n';
                text += '#b#L2#发型染色#r（ 免费使用 ）#l\r\n';
                text += '#b#L3#皮肤染色#r（ 免费使用 ）#l\r\n';
                text += '#b#L4#眼睛染色#r（ 戴个美瞳吧～ ）#l\r\n';
                text += '#b#L5#机器美容#r（ 为安卓机器人美容 ）#l\r\n';
                cm.askMenu_Bottom(text, 204, NPC);
            } else {
                var reactor = 'action' + selectionLog[1];
                eval(reactor)(mode, type, selection, i);
            }
        }
    }
}
function action0(g, j, k, e) {
    var b = 2400004;
    var h = randomNum(0, 1);
    if (status <= e++) {
        var l = '#face' + h + '##fs18##r#fn方正粗黑宋简体#';
        l += '#b请选择理发分类：#k\r\n';
        l += '#fs14#(点券收费：随机' + 随机理发价格 + ' 自选' + 自选理发价格 + ' 定制' + 自选理发价格 * 2 + ')\r\n\r\n#fs18#';
        l += ' #L0##r' + one + ' 随机发型 #l	#L1##r' + two + ' 自选发型 #l	#L2##r' + three + ' 代码定制 #l\r\n\r\n\r\n';
        l += '#L10086#返回上一页#l';
        cm.askMenu_Bottom(l, 204, b);
    } else {
        if (status === e++) {
            if (cm.getzhizunvip() == 2) {
                if (cm.getPlayer().getGender() == 0) {
                    发型列表 = 至尊男发型;
                } else {
                    发型列表 = 至尊女发型;
                }
                var l = '亲爱的#b#h ##k，欢迎来到#rBMS至尊版美发中心#k。\r\n';
            } else {
                if (cm.getPlayer().getGender() == 0) {
                    发型列表 = 黄金男发型;
                } else {
                    发型列表 = 黄金女发型;
                }
                var l = '亲爱的#b#h ##k，欢迎来到#rBMS黄金版美发中心#k。\r\n（至尊版解锁全部造型）\r\n';
            }
            var f = cm.getPlayerStat('HAIR');
            if (k == 0) {
                美发类型 = 1;
                var l = '#face' + h + '##fs18##r#fn方正粗黑宋简体#';
                l += '好的，那么你想看看本期发型沙龙系列吗？\r\n\r\n#r#L1#更换发型#l\r\n#L0#好把, 看看这都有什么发型#l';
                cm.askMenu_Bottom(l, 204, b);
            } else {
                if (k == 1) {
                    var a = cm.getJob();
                    if (a == 10000 || a == 10100 || a == 10110 || a == 10111 || a == 10112) {
                        cm.dispose();
                        cm.神之子更换发型整容染色UI(5150052, cm.getPlayer().getGender(), 发型列表);
                    } else {
                        美发类型 = 2;
                        cm.askAvatar(l, 发型列表, 4002003);
                    }
                } else {
                    if (k == 2) {
                        美发类型 = 3;
                        cm.askText_Bottom('#face' + h + '##fn方正粗黑宋简体# 请输入您要切换的发型ID或名称，支持模糊查询。#fs15#\r\n  #b如：奥尔卡、未来战士、小丫环、武林大侠', b);
                    } else {
                        if (k == 10086) {
                            cm.dispose();
                            cm.openNpc(0, '美容美发_通用');
                        }
                    }
                }
            }
        } else {
            if (status === e++) {
                if (美发类型 == 1) {
                    if (k == 0) {
                        cm.askAvatar('那么请随便随便看..', 发型列表, 5150040);
                        cm.dispose();
                    } else {
                        if (k == 1) {
                            if (cm.getPlayer().getCSPoints(1) >= 随机理发价格) {
                                cm.getPlayer().modifyCSPoints(1, -随机理发价格, true);
                                var a = cm.getJob();
                                if (a == 10000 || a == 10100 || a == 10110 || a == 10111 || a == 10112) {
                                    cm.dispose();
                                    var d = 发型列表[Math.floor(Math.random() * 发型列表.length)];
                                    var c = cm.getPlayer().getHair();
                                    if (cm.getPlayer().getGender() == 0) {
                                        cm.set神之子男发型(d);
                                    } else {
                                        cm.set神之子女发型(d);
                                    }
                                    cm.神之子更换完发型脸型对比UI(5150040, cm.getPlayer().getGender(), c, d, 0, 0);
                                } else {
                                    cm.setRandomAvatar(发型列表);
                                }
                                cm.effect_Text(['#fn黑体 ExtraBold##fs26# 随机发型成功'], [
                                    85,
                                    2500,
                                    4,
                                    0,
                                    0,
                                    1,
                                    4,
                                    0,
                                    0,
                                    0
                                ]);
                                cm.addTrait('魅力', 50);
                                cm.forceStartQuest(10000086);
                                cm.forceCompleteQuest(10000086);
                                cm.dispose();
                            } else {
                                cm.playerMessage(-1, '好像没有钱？等有钱了再来吧！');
                                cm.dispose();
                            }
                        }
                    }
                } else {
                    if (美发类型 == 2) {
                        if (cm.getPlayer().getCSPoints(1) >= 自选理发价格) {
                            cm.getPlayer().modifyCSPoints(1, -自选理发价格, true);
                            cm.setHair(发型列表[k]);
                            cm.worldSpouseMessage(19, '「' + cm.getPlayer().getName() + '」  :  造型设计成功，他/她变得更有型了～');
                            cm.effect_Text(['#fn黑体 ExtraBold##fs26# 自选发型成功'], [
                                85,
                                2500,
                                4,
                                0,
                                0,
                                1,
                                4,
                                0,
                                0,
                                0
                            ]);
                            cm.addTrait('魅力', 50);
                            cm.forceStartQuest(10000086);
                            cm.forceCompleteQuest(10000086);
                            cm.dispose();
                        } else {
                            cm.playerMessage(-1, '好像没有钱？等有钱了再来吧！');
                            cm.dispose();
                        }
                    } else {
                        if (美发类型 == 3) {
                            if (cm.getText() == '') {
                                cm.playerMessage(-1, '请输入关键字！');
                                cm.effect_NormalSpeechBalloon('请输入关键字', 1, 0, 0, 3000, 0, 0);
                                cm.dispose();
                                return;
                            }
                            list = cm.getSearchData(10, cm.getText());
                            if (list == null) {
                                cm.sendOk('搜索不到信息');
                                cm.dispose();
                                return;
                            }
                            if (!cm.foundData(10, cm.getText())) {
                                cm.dispose();
                                return;
                            }
                            if (cm.getPlayer().getCSPoints(1) >= 自选理发价格 * 2) {
                                cm.getPlayer().modifyCSPoints(1, -自选理发价格 * 2, true);
                                var a = cm.getJob();
                                if (a == 10000 || a == 10100 || a == 10110 || a == 10111 || a == 10112) {
                                    cm.dispose();
                                    cm.神之子更换发型整容染色UI(5150052, cm.getPlayer().getGender(), list);
                                    cm.playerMessage(5, '改变造型：' + list);
                                } else {
                                    cm.askAvatar('', list);
                                }
                            } else {
                                cm.playerMessage(-1, '好像没有钱？等有钱了再来吧！');
                                cm.dispose();
                            }
                        }
                    }
                }
            } else {
                if (status === e++) {
                    select = k;
                    cm.playerMessage(5, '改变造型：' + list[select]);
                    cm.setHair(list[select]);
                    cm.dispose();
                }
            }
        }
    }
}
function action1(g, j, k, e) {
    var b = 2400004;
    var h = randomNum(0, 1);
    if (status <= e++) {
        var l = '#face' + h + '##fs18##r#fn方正粗黑宋简体#';
        l += '#b请选择美容分类：#k\r\n';
        l += '#fs14#(点券收费：随机' + 随机美容价格 + ' 自选' + 自选美容价格 + ')\r\n\r\n#fs18#';
        l += ' #L0##r' + one + ' 随机美容 #l	#L1##r' + two + ' 自选美容 #l	#L2##r' + two + ' 代码定制 #l\r\n\r\n\r\n';
        l += '#L10086#返回上一页#l';
        cm.askMenu_Bottom(l, 204, b);
    } else {
        if (status === e++) {
            if (cm.getzhizunvip() == 2) {
                if (cm.getPlayer().getGender() == 0) {
                    美容列表 = 至尊男美容;
                } else {
                    美容列表 = 至尊女美容;
                }
            } else {
                if (cm.getPlayer().getGender() == 0) {
                    美容列表 = 黄金男美容;
                } else {
                    美容列表 = 黄金女美容;
                }
            }
            var f = cm.getPlayerStat('HAIR');
            if (k == 0) {
                美容类型 = 1;
                var l = '#face' + h + '##fs18##r#fn方正粗黑宋简体#';
                l += '好的，那么你想看看本期美容沙龙系列吗？\r\n\r\n#r#L1#更换美容#l\r\n#L0#好把, 看看这都有什么美容#l';
                cm.askMenu_Bottom(l, 204, b);
            } else {
                if (k == 1) {
                    var a = cm.getJob();
                    if (a == 10000 || a == 10100 || a == 10110 || a == 10111 || a == 10112) {
                        cm.dispose();
                        cm.神之子更换发型整容染色UI(5152057, cm.getPlayer().getGender(), 美容列表);
                    } else {
                        美容类型 = 2;
                        cm.askAvatar('亲爱的#b#h ##k，欢迎来到#r滋养中心#k。洗剪吹一次需要\r\n', 美容列表, 4002003);
                    }
                } else {
                    if (k == 2) {
                        美容类型 = 3;
                        cm.askText_Bottom('#face' + h + '##fn方正粗黑宋简体# 请输入您要切换的脸型ID或名称，支持模糊查询。#fs15#\r\n  #b如：双瞳色、未来战士、恶魔之、漫画', b);
                    } else {
                        if (k == 10086) {
                            cm.dispose();
                            cm.openNpc(0, '美容美发_通用');
                        }
                    }
                }
            }
        } else {
            if (status === e++) {
                if (美容类型 == 1) {
                    if (k == 0) {
                        cm.askAvatar('那么请随便随便看..', 美容列表, 5150040);
                        cm.dispose();
                    } else {
                        if (k == 1) {
                            if (cm.getPlayer().getCSPoints(1) >= 随机美容价格) {
                                cm.getPlayer().modifyCSPoints(1, -随机美容价格, true);
                                var a = cm.getJob();
                                if (a == 10000 || a == 10100 || a == 10110 || a == 10111 || a == 10112) {
                                    cm.dispose();
                                    var d = 美容列表[Math.floor(Math.random() * 美容列表.length)];
                                    var c = cm.getPlayer().getFace();
                                    if (cm.getPlayer().getGender() == 0) {
                                        cm.set神之子男脸型(d);
                                    } else {
                                        cm.set神之子女脸型(d);
                                    }
                                    cm.神之子更换完发型脸型对比UI(5152053, cm.getPlayer().getGender(), c, d, 0, 0);
                                } else {
                                    cm.setRandomAvatar(美容列表);
                                }
                                cm.effect_Text(['#fn黑体 ExtraBold##fs26# 随机美容成功'], [
                                    85,
                                    2500,
                                    4,
                                    0,
                                    0,
                                    1,
                                    4,
                                    0,
                                    0,
                                    0
                                ]);
                                cm.addTrait('魅力', 50);
                                cm.forceStartQuest(10000086);
                                cm.forceCompleteQuest(10000086);
                                cm.dispose();
                            } else {
                                cm.playerMessage(-1, '好像没有钱？等有钱了再来吧！');
                                cm.dispose();
                            }
                        }
                    }
                } else {
                    if (美容类型 == 2) {
                        if (cm.getPlayer().getCSPoints(1) >= 自选美容价格) {
                            cm.getPlayer().modifyCSPoints(1, -自选美容价格, true);
                            cm.setFace(美容列表[k]);
                            cm.worldSpouseMessage(19, '「' + cm.getPlayer().getName() + '」  :  自选美容成功，他/她变得更有型了～');
                            cm.effect_Text(['#fn黑体 ExtraBold##fs26# 自选美容成功'], [
                                85,
                                2500,
                                4,
                                0,
                                0,
                                1,
                                4,
                                0,
                                0,
                                0
                            ]);
                            cm.addTrait('魅力', 50);
                            cm.forceStartQuest(10000086);
                            cm.forceCompleteQuest(10000086);
                            cm.dispose();
                        } else {
                            cm.playerMessage(-1, '好像没有钱？等有钱了再来吧！');
                            cm.dispose();
                        }
                    } else {
                        if (美容类型 == 3) {
                            if (cm.getText() == '') {
                                cm.playerMessage(-1, '请输入关键字！');
                                cm.effect_NormalSpeechBalloon('请输入关键字', 1, 0, 0, 3000, 0, 0);
                                cm.dispose();
                                return;
                            }
                            list = cm.getSearchData(11, cm.getText());
                            if (list == null) {
                                cm.sendOk('搜索不到信息');
                                cm.dispose();
                                return;
                            }
                            if (!cm.foundData(11, cm.getText())) {
                                cm.dispose();
                                return;
                            }
                            if (cm.getPlayer().getCSPoints(1) >= 自选美容价格 * 2) {
                                cm.getPlayer().modifyCSPoints(1, -自选美容价格 * 2, true);
                                var a = cm.getJob();
                                if (a == 10000 || a == 10100 || a == 10110 || a == 10111 || a == 10112) {
                                    cm.dispose();
                                    cm.神之子更换发型整容染色UI(5152057, cm.getPlayer().getGender(), list);
                                    cm.playerMessage(5, '改变造型：' + list);
                                } else {
                                    cm.askAvatar('', list);
                                }
                            } else {
                                cm.playerMessage(-1, '好像没有钱？等有钱了再来吧！');
                                cm.dispose();
                            }
                        }
                    }
                }
            } else {
                if (status === e++) {
                    select = k;
                    cm.playerMessage(5, '改变造型：' + list[select]);
                    cm.setFace(list[select]);
                    cm.dispose();
                }
            }
        }
    }
}
function action2(f, h, j, e) {
    var d = 2400004;
    var g = randomNum(0, 1);
    if (status <= e++) {
        var a = Math.floor(cm.getPlayerStat('HAIR') / 10) * 10;
        for (var e = 0; e < 8; e++) {
            发型列表[e] = a + e;
        }
        var b = cm.getJob();
        if (b == 10000 || b == 10100 || b == 10110 || b == 10111 || b == 10112) {
            cm.dispose();
            var c = [
                0,
                1,
                2,
                3,
                4,
                6,
                7
            ];
            cm.神之子更换发型整容染色UI(cm.getPlayer(), 5151036, cm.getPlayer().getGender(), c, c);
        } else {
            cm.askAvatar(' ' + 品客缤图标 + 'BMS冒险岛至尊版专享！\r\n 本服务免费～', 发型列表, 4002003);
        }
    } else {
        if (status === e++) {
            cm.setHair(发型列表[j]);
            cm.worldSpouseMessage(19, '「' + cm.getPlayer().getName() + '」  :  发型染色成功，他/她变得更有型了～');
            cm.effect_Text(['#fn黑体 ExtraBold##fs26# 发型染色成功'], [
                85,
                2500,
                4,
                0,
                0,
                1,
                4,
                0,
                0,
                0
            ]);
            cm.addTrait('魅力', 50);
            cm.forceStartQuest(10000086);
            cm.forceCompleteQuest(10000086);
            cm.dispose();
        } else {
            cm.dispose();
        }
    }
}
function action3(e, c, b, a) {
    if (status <= a++) {
        var d = cm.getJob();
        if (d == 10000 || d == 10100 || d == 10110 || d == 10111 || d == 10112) {
            cm.dispose();
            cm.神之子更换发型整容染色UI(5153015, cm.getPlayer().getGender(), 皮肤染色);
        } else {
            cm.askAvatar(' ' + 品客缤图标 + 'BMS冒险岛至尊版专享！\r\n 本服务免费～', 皮肤染色, 4002003);
        }
    } else {
        if (status === a++) {
            cm.setSkin(皮肤染色[b]);
            cm.worldSpouseMessage(19, '「' + cm.getPlayer().getName() + '」  :  皮肤染色成功，他/她变得更有型了～');
            cm.effect_Text(['#fn黑体 ExtraBold##fs26# 皮肤染色成功'], [
                85,
                2500,
                4,
                0,
                0,
                1,
                4,
                0,
                0,
                0
            ]);
            cm.addTrait('魅力', 50);
            cm.forceStartQuest(10000086);
            cm.forceCompleteQuest(10000086);
            cm.dispose();
        } else {
            cm.dispose();
        }
    }
}
function action4(f, c, b, a) {
    if (status <= a++) {
        if (cm.getPlayer().getGender() == 0) {
            var e = cm.getPlayer().getFace() % 100 + 20000;
        } else {
            var e = cm.getPlayer().getFace() % 100 + 21000;
        }
        眼睛染色 = Array();
        眼睛染色 = Array(e, e + 100, e + 200, e + 300, e + 400, e + 500, e + 600, e + 700, e + 800);
        var d = cm.getJob();
        cm.askAvatar(' ' + 品客缤图标 + 'BMS冒险岛至尊版专享！\r\n 本服务免费～', 眼睛染色, 4002003);
    } else {
        if (status === a++) {
            cm.setFace(眼睛染色[b]);
            cm.worldSpouseMessage(19, '「' + cm.getPlayer().getName() + '」  :  眼睛染色成功，他/她变得更有型了～');
            cm.effect_Text(['#fn黑体 ExtraBold##fs26# 眼睛染色成功'], [
                85,
                2500,
                4,
                0,
                0,
                1,
                4,
                0,
                0,
                0
            ]);
            cm.addTrait('魅力', 50);
            cm.forceStartQuest(10000086);
            cm.forceCompleteQuest(10000086);
            cm.dispose();
        } else {
            cm.dispose();
        }
    }
}
function action5(d, c, b, a) {
    if (status <= a++) {
        cm.dispose();
        cm.openNpc(9390213, '机器人美容_至尊版');
    } else {
        cm.dispose();
    }
}
function action6(d, c, b, a) {
    if (status <= a++) {
        cm.dispose();
    } else {
        if (status === a++) {
        } else {
            cm.dispose();
        }
    }
}
var 黄金男发型 = [
    45097,
    46017,
    46007,
    28712,
    25699,
    45113,
    45101,
    45135,
    45127,
    45084,
    45070,
    43767,
    45031,
    44177,
    40550,
    40530,
    40520,
    40430,
    40380,
    40090,
    40060,
    40030,
    40020,
    40010,
    36920,
    36720,
    36510,
    35750,
    35220,
    33480,
    33440,
    33430,
    33400,
    33270,
    33240,
    33220,
    33210,
    33200,
    33180,
    33090,
    33060,
    32120,
    30800,
    30780,
    30730,
    30560,
    30440,
    30360,
    30350,
    30340,
    30490,
    30280,
    30060,
    30040
];
var 黄金女发型 = [
    48033,
    48017,
    48007,
    47417,
    47402,
    47427,
    47094,
    47330,
    47390,
    47386,
    47075,
    47043,
    47031,
    47010,
    47005,
    41530,
    47305,
    47293,
    44500,
    44650,
    44991,
    44773,
    44797,
    43870,
    38831,
    44950,
    44611,
    44520,
    44516,
    44420,
    37321,
    34872,
    34211,
    44400,
    41540,
    44040,
    42070,
    41830,
    41720,
    41710,
    41700,
    41640,
    41560,
    41520,
    41080,
    39250,
    38880,
    38790,
    38770,
    38700,
    38680,
    38560,
    38540,
    38460,
    38420,
    38110,
    37930,
    37900,
    37750,
    37710,
    37690,
    37580,
    34450,
    34310,
    34250,
    34220,
    34110,
    34062,
    31860,
    31160,
    31020,
    38010,
    38090,
    38520
];
var 黄金男美容 = [
    25194,
    23022,
    26360,
    23080,
    25629,
    20043,
    20067,
    25000,
    23030,
    20152,
    23176,
    20044,
    20035,
    23116,
    20033,
    23128,
    23183,
    20046,
    25019,
    25121,
    20061,
    20011
];
var 黄金女美容 = [
    28728,
    27625,
    27414,
    27413,
    25795,
    26495,
    26494,
    25797,
    25796,
    26686,
    25771,
    24896,
    26360,
    24078,
    21112,
    21042,
    24002,
    24127,
    21194,
    24027,
    21082,
    21236,
    24010,
    24188,
    26227,
    25617,
    24139,
    25403,
    24122,
    24036,
    21025,
    26234,
    25104,
    24235,
    21149,
    21062,
    26142,
    24631,
    24732,
    21250,
    24058,
    21070,
    26012,
    21144,
    21079,
    26125,
    24198,
    21028,
    21031,
    21033,
    24171,
    25778
];
var 至尊男发型 = [
    46070,
    46080,
    46090,
    46110,
    46140,
    46150,
    46160,
    46170,
    46180,
    46190,
    46200,
    46230,
    46310,
    46350,
    30010,
    30040,
    30060,
    46490,
    30160,
    30210,
    30260,
    30270,
    30280,
    30340,
    30360,
    30380,
    30460,
    30490,
    30530,
    30550,
    30560,
    43010,
    43190,
    43200,
    43250,
    43310,
    43330,
    43580,
    43590,
    43600,
    43740,
    43820,
    43830,
    45010,
    45030,
    45080,
    45140,
    45150,
    45160,
    45220,
    45230,
    46000,
    46010,
    46050,
    40020,
    40060,
    40090,
    40280,
    40290,
    40300,
    40310,
    40350,
    40370,
    40380,
    40410,
    40430,
    40450,
    40560,
    40570,
    40610,
    40630,
    40660,
    40670,
    40700,
    40710,
    40730,
    40760,
    40800,
    33000,
    33040,
    33050,
    33110,
    33120,
    33130,
    33150,
    33170,
    33210,
    33220,
    33230,
    33240,
    33250,
    33260,
    33270,
    33320,
    33380,
    33390,
    33400,
    33430,
    33440,
    33450,
    33460,
    33470,
    33480,
    33580,
    33590,
    33620,
    33640,
    33680,
    33730,
    33780,
    33790,
    33800,
    33940,
    35040,
    35050,
    35110,
    35120,
    35180,
    35220,
    35240,
    35260,
    35290,
    35330,
    35520,
    35550,
    35670,
    35740,
    35750,
    35950,
    36010,
    36100,
    36160,
    36260,
    36280,
    36290,
    36300,
    36330,
    36340,
    36350,
    36370,
    36410,
    36420,
    36490,
    36500,
    36510,
    36600,
    36640,
    36830,
    36840,
    36860,
    36920,
    36930
];
var 至尊女发型 = [
    32720,
    32730,
    32740,
    32750,
    32760,
    43980,
    44000,
    44030,
    44040,
    44050,
    44070,
    44090,
    44110,
    44180,
    44190,
    44310,
    44320,
    44380,
    44400,
    44420,
    44430,
    44470,
    44480,
    44490,
    44500,
    44510,
    44520,
    44590,
    37670,
    37680,
    37700,
    37710,
    37740,
    37750,
    37760,
    37810,
    37900,
    37930,
    37980,
    37990,
    38010,
    37440,
    38020,
    38070,
    38080,
    38090,
    38100,
    38110,
    38120,
    38140,
    38150,
    38390,
    38460,
    38490,
    38500,
    38520,
    38540,
    38560,
    38580,
    38600,
    38630,
    37460,
    37480,
    37500,
    37510,
    37530,
    37580,
    37590,
    37620,
    37630,
    44610,
    44650,
    44790,
    44810,
    44820,
    44830,
    44840,
    34110,
    34130,
    34770,
    34780,
    34830,
    34840,
    34850,
    34860,
    34870,
    34940,
    34960,
    34970,
    37000,
    37010,
    37020,
    37040,
    37060,
    34160,
    34180,
    34210,
    34220,
    34250,
    34260,
    34310,
    34340,
    34450,
    34720,
    34750,
    44850,
    44900,
    44910,
    44930,
    44940,
    34060,
    47010,
    47020,
    47030,
    47050,
    47060,
    47070,
    47080,
    47090,
    47350,
    47360,
    47370,
    47380,
    47390,
    31020,
    47420,
    47430,
    47440,
    47450,
    47520,
    47540,
    31230,
    31450,
    48010,
    31630,
    48020,
    31640,
    48030,
    48040,
    48050,
    31670,
    48060,
    31680,
    48070,
    48080,
    48100,
    31760,
    48150,
    48160,
    48170,
    48180,
    31800,
    48190,
    31820,
    48210,
    48220,
    48230,
    31900,
    48320,
    31940,
    48330,
    48340,
    48350,
    48360,
    48410,
    48430,
    48440,
    48450,
    48460,
    48470,
    48480,
    48490,
    48500,
    48510,
    48520,
    48530,
    48550,
    48560,
    48570,
    48610,
    48630,
    48640,
    48650,
    48760,
    48770,
    48790,
    48800,
    38680,
    38700,
    38760,
    38770,
    38790,
    38830,
    38930,
    41080,
    41110,
    41120,
    41150,
    41160,
    41340,
    41450,
    41510,
    41530,
    41540,
    41570,
    41580,
    41610,
    41620,
    41630,
    41640,
    41650,
    41670,
    41690,
    41700,
    41710,
    41720,
    41770,
    41780,
    41800,
    41810,
    41820,
    41830,
    41840,
    41930,
    41940,
    42040
];
var 至尊男美容 = [
    23081,
    23082,
    23083,
    23084,
    23086,
    23088,
    23089,
    23090,
    23092,
    23097,
    23098,
    20071,
    20141,
    23029,
    23031,
    23032,
    23034,
    23043,
    23053,
    23054,
    23059,
    23061,
    23064,
    23066,
    23068,
    23071,
    23072,
    23076,
    25061,
    25074,
    25817,
    25821,
    23012,
    23014,
    23019,
    23020,
    23024,
    23028,
    20811,
    25000,
    25006,
    25012,
    25016,
    25019,
    25022,
    25023,
    25024,
    25025,
    25029,
    25031,
    25043,
    25049,
    25051,
    25057,
    20535,
    20543,
    20546,
    20549,
    20481,
    20486,
    20509,
    20520,
    20521,
    20526
];
var 至尊女美容 = [
    21001,
    21028,
    21031,
    21033,
    21041,
    21042,
    24650,
    24652,
    28753,
    24671,
    24598,
    24601,
    24608,
    24612,
    24620,
    24622,
    24624,
    24626,
    26003,
    26005,
    26007,
    26015,
    26019,
    26020,
    26023,
    26025,
    26026,
    26030,
    26031,
    26046,
    26059,
    26065,
    26827,
    21044,
    21055,
    21064,
    21070,
    21079,
    21081,
    21083,
    21093,
    21094,
    21097,
    21140,
    25044,
    25045
];
function randomNum(b, a) {
    switch (arguments.length) {
    case 1:
        return parseInt(Math.random() * b + 1, 10);
        break;
    case 2:
        return parseInt(Math.random() * (a - b + 1) + b, 10);
        break;
    default:
        return 0;
        break;
    }
}