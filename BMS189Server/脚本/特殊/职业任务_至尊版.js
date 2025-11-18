var 五转NPC = 'V矩阵';
var 红心 = '#fUI/UIWindowPL/DuoEvent/Maximum/DuoInfo/icon/GoodF/0#';
var selects = 0;
var status = 0;
var content = 0;
var sel = -1;
var selectionLog = [];
function start() {
    status = -1;
    action(1, 0, 0);
}
function action(mode, type, selection) {
    var NPC立绘组 = cm.getConstantScriptContent('菜单_NPC立绘');
    var index = Math.floor(Math.random() * NPC立绘组.length);
    var NPC = NPC立绘组[index][0];
    var face = randomNum(0, NPC立绘组[index][1]);
    var mapId = cm.getMapId();
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
        if (cm.getzhizunvip() != 2) {
            cm.dispose();
            cm.playerMessage(1, '该菜单是至尊版专享。');
            return;
        }
        selectionLog[status] = selection;
        var i = -1;
        if (status <= i++) {
            cm.dispose();
        } else {
            var job = cm.getJob();
            if (job == 4002 || job == 4200 || job == 4210 || job == 4211 || job == 4212) {
                var reactor = 'action阴阳师';
                eval(reactor)(mode, type, selection, i);
            } else {
                if (job == 4001 || job == 4100 || job == 4110 || job == 4111 || job == 4112) {
                    var reactor = 'action剑豪';
                    eval(reactor)(mode, type, selection, i);
                } else {
                    if (job == 508 || job == 570 || job == 571 || job == 572) {
                        var reactor = 'action龙的传人';
                        eval(reactor)(mode, type, selection, i);
                    } else {
                        if (job == 11000 || job == 11200 || job == 11210 || job == 11211 || job == 11212) {
                            var reactor = 'action林之灵';
                            eval(reactor)(mode, type, selection, i);
                        } else {
                            if (job == 14000 || job == 14200 || job == 14210 || job == 14211 || job == 14212) {
                                var reactor = 'action超能力者';
                                eval(reactor)(mode, type, selection, i);
                            } else {
                                if (job == 6001 || job == 6500 || job == 6510 || job == 6511 || job == 6512) {
                                    var reactor = 'action爆莉萌天使';
                                    eval(reactor)(mode, type, selection, i);
                                } else {
                                    if (job == 6000 || job == 6100 || job == 6110 || job == 6111 || job == 6112) {
                                        var reactor = 'action狂龙战士';
                                        eval(reactor)(mode, type, selection, i);
                                    } else {
                                        if (job == 2004 || job == 2700 || job == 2710 || job == 2711 || job == 2712) {
                                            var reactor = 'action夜光法师';
                                            eval(reactor)(mode, type, selection, i);
                                        } else {
                                            if (job == 2005 || job == 2500 || job == 2510 || job == 2511 || job == 2512) {
                                                var reactor = 'action隐月';
                                                eval(reactor)(mode, type, selection, i);
                                            } else {
                                                if (job == 2002 || job == 2300 || job == 2310 || job == 2311 || job == 2312) {
                                                    var reactor = 'action双弩精灵';
                                                    eval(reactor)(mode, type, selection, i);
                                                } else {
                                                    if (job == 2001 || job == 2200 || job == 2211 || job == 2214 || job == 2217) {
                                                        var reactor = 'action龙神';
                                                        eval(reactor)(mode, type, selection, i);
                                                    } else {
                                                        if (job == 2000 || job == 2100 || job == 2110 || job == 2111 || job == 2112) {
                                                            var reactor = 'action战神';
                                                            eval(reactor)(mode, type, selection, i);
                                                        } else {
                                                            if (cm.getPlayer().getSubcategory() == 1) {
                                                                var reactor = 'action暗影双刀';
                                                                eval(reactor)(mode, type, selection, i);
                                                            } else {
                                                                if (job == 5000 || job == 5100 || job == 5110 || job == 5111 || job == 5112) {
                                                                    var reactor = 'action米哈尔';
                                                                    eval(reactor)(mode, type, selection, i);
                                                                } else {
                                                                    cm.dispose();
                                                                    cm.playerMessage(1, '职业ID:' + cm.getJob() + ' 未录入的职业!');
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
function action米哈尔(d, g, j, c) {
    var h = cm.getConstantScriptContent('菜单_NPC立绘');
    var e = Math.floor(Math.random() * h.length);
    var b = h[e][0];
    var f = randomNum(0, h[e][1]);
    var k = Array(Array(20770, '', 10, 1101002), Array(20771, '', 10, 1102000), Array(20772, '', 10, 1102000), Array(20773, '', 10, 1102000), Array(20774, '', 10, 1102000), Array(20775, '', 10, 1102000), Array(20776, '', 10, 1102000), Array(20777, '', 10, 1102000), Array(20778, '', 15, 0), Array(20779, '', 15, 1101002), Array(20780, '', 15, 1103004), Array(20781, '', 15, 1103004), Array(20782, '', 15, 1022006), Array(20783, '', 15, 1022006), Array(20784, '', 15, 0), Array(20785, '', 15, 1106007), Array(20786, '', 15, 0), Array(20787, '', 15, 1101000), Array(20788, '', 20, 1103004), Array(20789, '', 20, 1103004), Array(20790, '', 20, 1022006), Array(20791, '', 20, 1022006), Array(20792, '', 20, 0), Array(20793, '', 20, 0), Array(20794, '', 20, 0), Array(20795, '', 24, 1101002), Array(20796, '', 24, 1101000), Array(20797, '', 24, 1101002), Array(20798, '', 24, 1103001), Array(20799, '', 24, 1106009), Array(20800, '', 24, 1101002), Array(20801, '', 24, 1106009), Array(20802, '', 24, 1102000), Array(20803, '', 24, 1101002), Array(20804, '', 24, 1101000), Array(20805, '', 24, 1101002), Array(20806, '', 30, 1101002), Array(20807, '', 30, 1102000), Array(20809, '', 30, 1102000, true), Array(20810, '', 30, 1101000));
    if (status <= c++) {
        var a = '#face' + f + '##fn方正粗黑宋简体#';
        a += '  #fs17##r勇猛的女皇的骑士们啊，不要忘记你的使命。#n\r\n';
        a += '#fs14#';
        for (var c = 0; c < k.length; c++) {
            if (!cm.isQuestFinished(k[c][0]) && cm.getQuestStatus(k[c][0]) <= 0 && cm.getLevel() >= k[c][2]) {
                a += '  #L' + c + '#' + 红心 + ' (LV.' + k[c][2] + ')' + cm.getQuestName(k[c][0]) + '          (c)BMS小组#l\r\n';
                content++;
            }
        }
        if (cm.getPlayer().isGM()) {
            cm.playerMessage(-1, ' 可选列表数：' + content + ' ');
        }
        a += '\r\n#fs20##fn楷体##L10083#返回上一页#l\r\n#n';
        if (content == 0 && cm.getPlayer().getLevel() >= 200) {
            cm.dispose();
            cm.openNpc(b, 五转NPC);
        } else {
            cm.askMenu_Bottom(a, 204, b);
            cm.effect_Voice('Voice4.img/BM3/wh/39', 128);
        }
    } else {
        if (status === c++) {
            selects = j;
            if (selects == 10083) {
                cm.dispose();
                cm.openNpc(9900004);
            } else {
                if (cm.isQuestFinished(k[selects][0] - 1)) {
                    cm.dispose();
                    cm.startQuestScript(k[selects][3], k[selects][0]);
                    if (cm.getPlayer().isGM()) {
                        cm.playerMessage(-1, '选择' + selects + '  操作代码：' + k[selects][0] + '  任务名：' + cm.getQuestName(k[selects][0]) + ' ');
                    }
                } else {
                    if (selects == 0 || k[selects][4] == true) {
                        cm.dispose();
                        cm.startQuestScript(k[selects][3], k[selects][0]);
                        if (cm.getPlayer().isGM()) {
                            cm.playerMessage(-1, '选择' + selects + '  操作代码：' + k[selects][0] + '  任务名：' + cm.getQuestName(k[selects][0]) + ' ');
                        }
                    } else {
                        if (cm.getPlayer().isGM()) {
                            cm.playerMessage(-1, '选择' + selects + '  操作代码：' + k[selects][0] + '  任务名：' + cm.getQuestName(k[selects][0]) + ' ');
                        }
                        cm.playerMessage(1, ' \r\n (LV.' + k[selects - 1][2] + ')' + cm.getQuestName(k[selects - 1][0]) + ' \r\n\r\n  请先完成前置任务哦！');
                        cm.dispose();
                    }
                }
            }
        } else {
            cm.dispose();
        }
    }
}
function action暗影双刀(d, g, j, c) {
    var h = cm.getConstantScriptContent('菜单_NPC立绘');
    var e = Math.floor(Math.random() * h.length);
    var b = h[e][0];
    var f = randomNum(0, h[e][1]);
    var k = Array(Array(2600, '', 1, 1057001), Array(2601, '', 1, 1057000), Array(2602, '', 1, 1057000), Array(2603, '', 1, 1057000), Array(2604, '', 1, 1057001), Array(2605, '', 1, 1056000), Array(2606, '', 1, 1057001), Array(2607, '', 1, 1057001), Array(2608, '', 1, 1057001), Array(2609, '', 1, 1057001), Array(2610, '', 10, 1057001), Array(2611, '', 11, 1052001), Array(2613, '', 10, 0, true), Array(2614, '', 10, 1052103), Array(2616, '', 10, 1052002, true), Array(2617, '', 10, 1052100), Array(2618, '', 20, 0, true), Array(2622, '', 20, 0, true), Array(2623, '', 20, 1056000), Array(2624, '', 20, 1056000), Array(2625, '', 20, 1057003), Array(2626, '', 20, 1057003), Array(2628, '', 20, 1057002, true), Array(2629, '', 20, 1057001), Array(2630, '', 20, 9000008), Array(2631, '', 20, 1043005), Array(2632, '', 20, 1043005), Array(2633, '', 20, 1057001), Array(2634, '', 20, 1061017), Array(2635, '', 20, 1061014), Array(2636, '', 20, 1061014), Array(2637, '', 30, 0), Array(2638, '', 30, 1056000), Array(2639, '', 45, 1057001), Array(2640, '', 45, 1057001), Array(2641, '', 45, 1056000), Array(2642, '', 65, 1056000), Array(2643, '', 65, 1056000), Array(2646, '', 15, 0, true));
    if (status <= c++) {
        var a = '#face' + f + '##fn方正粗黑宋简体#';
        a += '  #fs17##r来自异世界的暗影双刀啊，不要忘记你的使命。#n\r\n';
        a += '#fs14#';
        for (var c = 0; c < k.length; c++) {
            if (!cm.isQuestFinished(k[c][0]) && cm.getQuestStatus(k[c][0]) <= 0 && cm.getLevel() >= k[c][2]) {
                a += '  #L' + c + '#' + 红心 + ' (LV.' + k[c][2] + ')' + cm.getQuestName(k[c][0]) + '          (c)BMS小组#l\r\n';
                content++;
            }
        }
        if (cm.getPlayer().isGM()) {
            cm.playerMessage(-1, ' 可选列表数：' + content + ' ');
        }
        a += '\r\n#fs20##fn楷体##L10083#返回上一页#l\r\n#n';
        if (content == 0 && cm.getPlayer().getLevel() >= 200) {
            cm.dispose();
            cm.openNpc(b, 五转NPC);
        } else {
            cm.askMenu_Bottom(a, 204, b);
            cm.effect_Voice('Voice4.img/BM3/wh/36', 128);
        }
    } else {
        if (status === c++) {
            selects = j;
            if (selects == 10083) {
                cm.dispose();
                cm.openNpc(9900004);
            } else {
                if (cm.isQuestFinished(k[selects][0] - 1)) {
                    cm.dispose();
                    cm.startQuestScript(k[selects][3], k[selects][0]);
                    if (cm.getPlayer().isGM()) {
                        cm.playerMessage(-1, '选择' + selects + '  操作代码：' + k[selects][0] + '  任务名：' + cm.getQuestName(k[selects][0]) + ' ');
                    }
                } else {
                    if (selects == 0 || k[selects][4] == true) {
                        cm.dispose();
                        cm.startQuestScript(k[selects][3], k[selects][0]);
                        if (cm.getPlayer().isGM()) {
                            cm.playerMessage(-1, '选择' + selects + '  操作代码：' + k[selects][0] + '  任务名：' + cm.getQuestName(k[selects][0]) + ' ');
                        }
                    } else {
                        if (cm.getPlayer().isGM()) {
                            cm.playerMessage(-1, '选择' + selects + '  操作代码：' + k[selects][0] + '  任务名：' + cm.getQuestName(k[selects][0]) + ' ');
                        }
                        cm.playerMessage(1, ' \r\n (LV.' + k[selects - 1][2] + ')' + cm.getQuestName(k[selects - 1][0]) + ' \r\n\r\n  请先完成前置任务哦！');
                        cm.dispose();
                    }
                }
            }
        } else {
            cm.dispose();
        }
    }
}
function action战神(d, g, j, c) {
    var h = cm.getConstantScriptContent('菜单_NPC立绘');
    var e = Math.floor(Math.random() * h.length);
    var b = h[e][0];
    var f = randomNum(0, h[e][1]);
    var k = Array(Array(21010, '', 1, 1202001), Array(21011, '', 1, 1202003), Array(21012, '', 1, 1202004), Array(21013, '', 1, 1202005), Array(21700, '', 10, 1202006, true), Array(21705, '', 10, 1201000, true), Array(21706, '', 10, 1002104), Array(21707, '', 10, 1002001), Array(21708, '', 10, 1002104), Array(21709, '', 10, 1300007), Array(21710, '', 10, 1300007), Array(21711, '', 10, 1300007), Array(21712, '', 10, 1300007), Array(21713, '', 15, 1002104), Array(21714, '', 15, 1012003), Array(21715, '', 15, 1012003), Array(21716, '', 15, 1012003), Array(21717, '', 15, 1012003), Array(21718, '', 15, 1012003), Array(21719, '', 15, 1204000), Array(21720, '', 15, 1002104), Array(21721, '', 20, 1002104), Array(21722, '', 20, 1103004), Array(21723, '', 20, 1103004), Array(21724, '', 20, 1103004), Array(21725, '', 20, 1103004), Array(21726, '', 25, 1002104), Array(21727, '', 25, 1032101), Array(21728, '', 25, 1032101), Array(21729, '', 25, 1032101), Array(21730, '', 25, 1040002), Array(21731, '', 25, 1002104), Array(21732, '', 25, 1002104), Array(21733, '', 43, 1002104), Array(21734, '', 45, 1002104), Array(21735, '', 45, 1201000), Array(21736, '', 48, 2012012), Array(21737, '', 48, 2012012), Array(21738, '', 48, 2032001), Array(21739, '', 48, 2032001), Array(21740, '', 48, 1002104), Array(21741, '', 54, 2090004), Array(21742, '', 54, 2090004), Array(21743, '', 54, 2091008), Array(21744, '', 54, 2090004), Array(21745, '', 54, 2091011), Array(21746, '', 54, 2091007), Array(21747, '', 54, 2091007), Array(21748, '', 54, 1002104), Array(21749, '', 63, 1002104), Array(21750, '', 63, 2131002), Array(21751, '', 63, 2131000), Array(21752, '', 63, 2131003), Array(21771, '', 60, 1201000, true), Array(21772, '', 100, 1201000, true), Array(21773, '', 60, 9010010, true), Array(21774, '', 100, 9010010, true), Array(21100, '', 10, 1201000, true), Array(21101, '', 10, 1201001), Array(21200, '', 30, 1201000, true), Array(21201, '', 30, 1201002), Array(21202, '', 30, 1203000), Array(21300, '', 60, 1201002, true), Array(21301, '', 60, 1201002), Array(21302, '', 60, 1201000), Array(21303, '', 60, 1203001), Array(21400, '', 100, 1201002, true), Array(21401, '', 100, 1201002), Array(21500, '', 200, 1201002, true));
    if (status <= c++) {
        var a = '#face' + f + '##fn方正粗黑宋简体#';
        a += '  #fs17##r不屈的战士啊，不要忘记你的使命。#n\r\n';
        a += '#fs14#';
        for (var c = 0; c < k.length; c++) {
            if (!cm.isQuestFinished(k[c][0]) && cm.getQuestStatus(k[c][0]) <= 0 && cm.getLevel() >= k[c][2]) {
                a += '  #L' + c + '#' + 红心 + ' (LV.' + k[c][2] + ')' + cm.getQuestName(k[c][0]) + '          (c)BMS小组#l\r\n';
                content++;
            }
        }
        if (cm.getPlayer().isGM()) {
            cm.playerMessage(-1, ' 可选列表数：' + content + ' ');
        }
        a += '\r\n#fs20##fn楷体##L10083#返回上一页#l\r\n#n';
        if (content == 0 && cm.getPlayer().getLevel() >= 200) {
            cm.dispose();
            cm.openNpc(b, 五转NPC);
        } else {
            cm.askMenu_Bottom(a, 204, b);
            cm.effect_Voice('Voice4.img/BM3/wh/46', 128);
        }
    } else {
        if (status === c++) {
            selects = j;
            if (selects == 10083) {
                cm.dispose();
                cm.openNpc(9900004);
            } else {
                if (cm.isQuestFinished(k[selects][0] - 1)) {
                    cm.dispose();
                    cm.startQuestScript(k[selects][3], k[selects][0]);
                    if (cm.getPlayer().isGM()) {
                        cm.playerMessage(-1, '选择' + selects + '  操作代码：' + k[selects][0] + '  任务名：' + cm.getQuestName(k[selects][0]) + ' ');
                    }
                } else {
                    if (selects == 0 || k[selects][4] == true) {
                        cm.dispose();
                        cm.startQuestScript(k[selects][3], k[selects][0]);
                        if (cm.getPlayer().isGM()) {
                            cm.playerMessage(-1, '选择' + selects + '  操作代码：' + k[selects][0] + '  任务名：' + cm.getQuestName(k[selects][0]) + ' ');
                        }
                    } else {
                        if (cm.getPlayer().isGM()) {
                            cm.playerMessage(-1, '选择' + selects + '  操作代码：' + k[selects][0] + '  任务名：' + cm.getQuestName(k[selects][0]) + ' ');
                        }
                        cm.playerMessage(1, ' \r\n (LV.' + k[selects - 1][2] + ')' + cm.getQuestName(k[selects - 1][0]) + ' \r\n\r\n  请先完成前置任务哦！');
                        cm.dispose();
                    }
                }
            }
        } else {
            cm.dispose();
        }
    }
}
function action龙神(d, g, j, c) {
    var h = cm.getConstantScriptContent('菜单_NPC立绘');
    var e = Math.floor(Math.random() * h.length);
    var b = h[e][0];
    var f = randomNum(0, h[e][1]);
    var k = Array(Array(22000, '', 1, 1013101), Array(22001, '', 1, 1013102), Array(22002, '', 1, 1013100), Array(22003, '', 1, 1013103), Array(22004, '', 1, 1013103), Array(22005, '', 1, 1013103), Array(22006, '', 1, 1013100), Array(22007, '', 1, 1013101), Array(22008, '', 1, 1013101), Array(22009, '', 1, 1013101), Array(22010, '', 1, 1013103), Array(22130, '', 10, 1013000, true), Array(22131, '', 30, 1013000), Array(22132, '', 60, 1013000), Array(22133, '', 100, 1013000), Array(22300, '', 200, 1013000, true), Array(22500, '', 10, 1013000, true), Array(22501, '', 10, 1013103), Array(22502, '', 10, 1013103), Array(22503, '', 10, 1013103), Array(22504, '', 10, 1013103), Array(22505, '', 10, 1013000), Array(22506, '', 10, 1013000), Array(22507, '', 10, 1013000), Array(22508, '', 10, 1013000), Array(22509, '', 10, 1013000), Array(22510, '', 10, 1012003), Array(22511, '', 15, 1012003), Array(22512, '', 15, 1013000), Array(22513, '', 15, 1010100), Array(22521, '', 15, 1013000, true), Array(22522, '', 15, 1010100), Array(22554, '', 18, 0, true), Array(22555, '', 18, 1012003), Array(22556, '', 18, 1012003), Array(22557, '', 18, 1012003), Array(22558, '', 18, 1012108), Array(22559, '', 18, 1012003), Array(22523, '', 20, 1012003), Array(22524, '', 20, 1012111), Array(22525, '', 20, 1040000), Array(22526, '', 20, 1013000), Array(22528, '', 20, 1022007), Array(22529, '', 20, 1022109), Array(22530, '', 20, 1022007), Array(22532, '', 20, 1022007), Array(22537, '', 25, 1013000, true), Array(22538, '', 25, 1012109), Array(22539, '', 25, 1013000), Array(22540, '', 25, 1012109), Array(22541, '', 25, 1032001), Array(22542, '', 25, 1002100), Array(22543, '', 25, 1012101), Array(22544, '', 25, 1032104), Array(22546, '', 25, 1032001, true), Array(22547, '', 25, 1013000), Array(22562, '', 40, 1032001, true), Array(22564, '', 42, 2081000), Array(22533, '', 20, 1061005), Array(22534, '', 43, 1052000), Array(22535, '', 43, 1052002), Array(22536, '', 43, 1052103), Array(22548, '', 45, 1052103), Array(22549, '', 45, 1063018), Array(22550, '', 45, 1063018), Array(22551, '', 45, 1061005), Array(22552, '', 45, 1052103), Array(22553, '', 45, 1063018), Array(22560, '', 46, 1063018), Array(22561, '', 46, 1063018), Array(22563, '', 40, 1013000), Array(22565, '', 42, 1013000), Array(22566, '', 46, 2012034), Array(22567, '', 46, 2012034), Array(22575, '', 57, 2022003, true), Array(22576, '', 57, 2030015), Array(22578, '', 57, 1013000, true), Array(22581, '', 67, 1013203, true), Array(22582, '', 67, 1013203), Array(22586, '', 70, 1013203), Array(22583, '', 68, 1013203), Array(22584, '', 68, 1013203), Array(22585, '', 68, 1013000), Array(22587, '', 70, 2092001), Array(22588, '', 70, 1013203), Array(22589, '', 70, 1013000), Array(22590, '', 70, 1205000), Array(22591, '', 70, 1205000), Array(22592, '', 70, 1013000), Array(22593, '', 70, 2012012, true), Array(22594, '', 70, 2020009), Array(22595, '', 70, 2041004), Array(22596, '', 70, 1013000), Array(22602, '', 60, 1013000, true), Array(22603, '', 100, 1013000), Array(22607, '', 10, 1013208, true), Array(22608, '', 10, 1013208), Array(22617, '', 60, 1013000, true), Array(22618, '', 100, 1013000), Array(22619, '', 60, 1013000), Array(22620, '', 100, 9010010));
    if (status <= c++) {
        var a = '#face' + f + '##fn方正粗黑宋简体#';
        a += '  #fs17##r龙族的后裔啊，不要忘记你的使命。#n\r\n';
        a += '#fs14#';
        for (var c = 0; c < k.length; c++) {
            if (!cm.isQuestFinished(k[c][0]) && cm.getQuestStatus(k[c][0]) <= 0 && cm.getLevel() >= k[c][2]) {
                a += '  #L' + c + '#' + 红心 + ' (LV.' + k[c][2] + ')' + cm.getQuestName(k[c][0]) + '          (c)BMS小组#l\r\n';
                content++;
            }
        }
        if (cm.getPlayer().isGM()) {
            cm.playerMessage(-1, ' 可选列表数：' + content + ' ');
        }
        a += '\r\n#fs20##fn楷体##L10083#返回上一页#l\r\n#n';
        if (content == 0 && cm.getPlayer().getLevel() >= 200) {
            cm.dispose();
            cm.openNpc(b, 五转NPC);
        } else {
            cm.askMenu_Bottom(a, 204, b);
            cm.effect_Voice('Voice4.img/BM3/wh/62', 128);
        }
    } else {
        if (status === c++) {
            selects = j;
            if (selects == 10083) {
                cm.dispose();
                cm.openNpc(9900004);
            } else {
                if (cm.isQuestFinished(k[selects][0] - 1)) {
                    cm.dispose();
                    cm.startQuestScript(k[selects][3], k[selects][0]);
                    if (cm.getPlayer().isGM()) {
                        cm.playerMessage(-1, '选择' + selects + '  操作代码：' + k[selects][0] + '  任务名：' + cm.getQuestName(k[selects][0]) + ' ');
                    }
                } else {
                    if (selects == 0 || k[selects][4] == true) {
                        cm.dispose();
                        cm.startQuestScript(k[selects][3], k[selects][0]);
                        if (cm.getPlayer().isGM()) {
                            cm.playerMessage(-1, '选择' + selects + '  操作代码：' + k[selects][0] + '  任务名：' + cm.getQuestName(k[selects][0]) + ' ');
                        }
                    } else {
                        if (cm.getPlayer().isGM()) {
                            cm.playerMessage(-1, '选择' + selects + '  操作代码：' + k[selects][0] + '  任务名：' + cm.getQuestName(k[selects][0]) + ' ');
                        }
                        cm.playerMessage(1, ' \r\n (LV.' + k[selects - 1][2] + ')' + cm.getQuestName(k[selects - 1][0]) + ' \r\n\r\n  请先完成前置任务哦！');
                        cm.dispose();
                    }
                }
            }
        } else {
            cm.dispose();
        }
    }
}
function action双弩精灵(d, g, k, c) {
    var h = cm.getConstantScriptContent('菜单_NPC立绘');
    var e = Math.floor(Math.random() * h.length);
    var b = h[e][0];
    var f = randomNum(0, h[e][1]);
    var l = Array(Array(24000, '', 0, 1033204), Array(24001, '', 0, 1033203), Array(24002, '', 0, 1033202), Array(24003, '', 0, 1033206), Array(24004, '', 0, 1033205), Array(24005, '', 0, 0), Array(24010, '', 30, 0, true), Array(24011, '', 30, 1033210), Array(24012, '', 60, 1033210), Array(24013, '', 100, 1033210), Array(24014, '', 60, 1033210), Array(24015, '', 100, 1033210), Array(24020, '', 200, 1033210, true), Array(24030, '', 50, 1033100, true), Array(24031, '', 50, 1033240), Array(24040, '', 10, 0, true), Array(24041, '', 10, 0), Array(24042, '', 10, 0), Array(24043, '', 10, 0), Array(24044, '', 10, 0), Array(24045, '', 10, 0), Array(24046, '', 15, 0), Array(24047, '', 15, 0), Array(24048, '', 15, 1032106), Array(24049, '', 15, 1032100), Array(24050, '', 15, 1032101), Array(24051, '', 15, 0), Array(24052, '', 15, 0), Array(24053, '', 20, 1032104), Array(24054, '', 20, 1032104), Array(24055, '', 20, 1032104), Array(24056, '', 20, 1012111), Array(24057, '', 20, 1022006), Array(24058, '', 20, 1022006), Array(24059, '', 20, 1012111), Array(24060, '', 15, 1012111), Array(24061, '', 15, 1012111), Array(24062, '', 25, 1033100), Array(24063, '', 25, 1033101), Array(24064, '', 25, 1033102), Array(24065, '', 25, 1033100), Array(24066, '', 25, 1033100), Array(24067, '', 25, 1033100), Array(24068, '', 25, 1032104), Array(24069, '', 25, 1033220), Array(24070, '', 25, 1012100), Array(24071, '', 25, 1012100), Array(24072, '', 25, 1012100), Array(24073, '', 25, 1033232), Array(24074, '', 25, 1101000), Array(24075, '', 25, 0), Array(24076, '', 43, 1033100), Array(24077, '', 43, 1033102), Array(24078, '', 43, 1033102), Array(24079, '', 55, 1033224), Array(24080, '', 55, 1012100), Array(24081, '', 55, 1022002), Array(24082, '', 65, 1033226), Array(24083, '', 65, 1033227), Array(24084, '', 65, 1033227), Array(24085, '', 63, 0), Array(24086, '', 73, 1033107), Array(24087, '', 73, 1033229), Array(24088, '', 73, 2154002), Array(24089, '', 73, 2152004), Array(24090, '', 73, 2154002, true), Array(24091, '', 73, 1033230), Array(24092, '', 73, 1033100), Array(24097, '', 20, 1022006, true), Array(24098, '', 73, 1033107), Array(24099, '', 28, 1033109), Array(24100, '', 28, 0), Array(24101, '', 74, 1033106), Array(24104, '', 75, 1101002, true), Array(24105, '', 60, 1033210), Array(24106, '', 100, 1033210), Array(24107, '', 60, 9010010), Array(24108, '', 100, 9010010, true), Array(22403, '', 100, 0, true));
    if (status <= c++) {
        var a = '#face' + f + '##fn方正粗黑宋简体#';
        if (cm.getPlayer().getGender() == 1) {
            var j = 51;
            a += '  #fs17##r精灵女王呀，不要忘记你的使命。#n\r\n';
        } else {
            var j = 52;
            a += '  #fs17##r精灵之王呀，不要忘记你的使命。#n\r\n';
        }
        a += '#fs14#';
        for (var c = 0; c < l.length; c++) {
            if (!cm.isQuestFinished(l[c][0]) && cm.getQuestStatus(l[c][0]) <= 0 && cm.getLevel() >= l[c][2]) {
                a += '  #L' + c + '#' + 红心 + ' (LV.' + l[c][2] + ')' + cm.getQuestName(l[c][0]) + '          (c)BMS小组#l\r\n';
                content++;
            }
        }
        if (cm.getPlayer().isGM()) {
            cm.playerMessage(-1, ' 可选列表数：' + content + ' ');
        }
        a += '\r\n#fs20##fn楷体##L10083#返回上一页#l\r\n#n';
        if (content == 0 && cm.getPlayer().getLevel() >= 200) {
            cm.dispose();
            cm.openNpc(b, 五转NPC);
        } else {
            cm.askMenu_Bottom(a, 204, b);
            cm.effect_Voice('Voice4.img/BM3/wh/' + j + '', 128);
        }
    } else {
        if (status === c++) {
            selects = k;
            if (selects == 10083) {
                cm.dispose();
                cm.openNpc(9900004);
            } else {
                if (cm.isQuestFinished(l[selects][0] - 1)) {
                    cm.dispose();
                    cm.startQuestScript(l[selects][3], l[selects][0]);
                    if (cm.getPlayer().isGM()) {
                        cm.playerMessage(-1, '选择' + selects + '  操作代码：' + l[selects][0] + '  任务名：' + cm.getQuestName(l[selects][0]) + ' ');
                    }
                } else {
                    if (selects == 0 || l[selects][4] == true) {
                        cm.dispose();
                        cm.startQuestScript(l[selects][3], l[selects][0]);
                        if (cm.getPlayer().isGM()) {
                            cm.playerMessage(-1, '选择' + selects + '  操作代码：' + l[selects][0] + '  任务名：' + cm.getQuestName(l[selects][0]) + ' ');
                        }
                    } else {
                        if (cm.getPlayer().isGM()) {
                            cm.playerMessage(-1, '选择' + selects + '  操作代码：' + l[selects][0] + '  任务名：' + cm.getQuestName(l[selects][0]) + ' ');
                        }
                        cm.playerMessage(1, ' \r\n (LV.' + l[selects - 1][2] + ')' + cm.getQuestName(l[selects - 1][0]) + ' \r\n\r\n  请先完成前置任务哦！');
                        cm.dispose();
                    }
                }
            }
        } else {
            cm.dispose();
        }
    }
}
function action隐月(f, d, c, b) {
    var a = Array(Array(38000, '', 10, 0), Array(38001, '', 10, 0), Array(38002, '', 10, 0), Array(38003, '', 10, 0), Array(38004, '', 10, 0), Array(38005, '', 13, 0), Array(38006, '', 13, 0), Array(38007, '', 13, 0), Array(38008, '', 13, 0), Array(38009, '', 18, 0), Array(38010, '', 18, 0), Array(38011, '', 18, 0), Array(38012, '', 20, 0), Array(38013, '', 20, 0, true), Array(38014, '', 20, 0, true), Array(38015, '', 20, 0, true), Array(38016, '', 20, 0, true), Array(38017, '', 20, 0), Array(38018, '', 20, 0), Array(38019, '', 25, 0), Array(38020, '', 25, 0), Array(38021, '', 25, 0), Array(38022, '', 25, 0), Array(38023, '', 25, 0), Array(38024, '', 27, 0), Array(38025, '', 27, 0), Array(38026, '', 27, 0), Array(38027, '', 27, 0), Array(38028, '', 27, 0), Array(38029, '', 27, 0), Array(38030, '', 27, 0), Array(38031, '', 30, 0), Array(38032, '', 30, 0), Array(38033, '', 30, 0), Array(38034, '', 30, 0), Array(38035, '', 30, 0), Array(38036, '', 35, 0), Array(38037, '', 35, 0), Array(38038, '', 35, 0), Array(38039, '', 35, 0), Array(38040, '', 35, 0), Array(38041, '', 40, 0), Array(38042, '', 40, 0), Array(38043, '', 40, 0), Array(38044, '', 40, 0), Array(38045, '', 40, 0), Array(38046, '', 40, 0), Array(38047, '', 40, 0), Array(38048, '', 40, 0), Array(38049, '', 40, 0), Array(38050, '', 40, 0), Array(38051, '', 50, 0), Array(38052, '', 50, 0), Array(38053, '', 50, 0), Array(38054, '', 50, 0), Array(38055, '', 50, 0), Array(38056, '', 55, 0), Array(38057, '', 55, 0), Array(38058, '', 55, 0), Array(38059, '', 55, 0), Array(38060, '', 6, 0), Array(38061, '', 60, 0), Array(38062, '', 60, 0), Array(38063, '', 60, 0), Array(38064, '', 65, 0), Array(38065, '', 65, 0), Array(38066, '', 65, 0), Array(38067, '', 65, 0), Array(38068, '', 65, 0), Array(38069, '', 70, 0), Array(38070, '', 70, 0), Array(38071, '', 70, 0), Array(38072, '', 100, 0), Array(38073, '', 100, 0), Array(38074, '', 60, 0), Array(38075, '', 60, 0), Array(38076, '', 60, 0), Array(38077, '', 200, 0), Array(38078, '', 75, 0), Array(38079, '', 30, 0), Array(38080, '', 60, 0), Array(38081, '', 100, 0), Array(38082, '', 60, 0), Array(38083, '', 100, 0), Array(38903, '', 10, 0, true), Array(38904, '', 10, 0, true), Array(38996, '', 10, 0, true), Array(38997, '', 10, 0, true), Array(38998, '', 10, 0, true));
    if (status <= b++) {
        var e = '#face' + face + '##fn方正粗黑宋简体#';
        e += '  #fs17##r被遗忘的英雄啊，不要忘记你的使命。#n\r\n';
        e += '#fs14#';
        for (var b = 0; b < a.length; b++) {
            if (!cm.isQuestFinished(a[b][0]) && cm.getQuestStatus(a[b][0]) <= 0 && cm.getLevel() >= a[b][2]) {
                e += '  #L' + b + '#' + 红心 + ' (LV.' + a[b][2] + ')' + cm.getQuestName(a[b][0]) + '          (c)BMS小组#l\r\n';
                content++;
            }
        }
        if (cm.getPlayer().isGM()) {
            cm.playerMessage(-1, ' 可选列表数：' + content + ' ');
        }
        e += '\r\n#fs20##fn楷体##L10083#返回上一页#l\r\n#n';
        if (content == 0 && cm.getPlayer().getLevel() >= 200) {
            cm.dispose();
            cm.openNpc(NPC, 五转NPC);
        } else {
            cm.askMenu_Bottom(e, 204, NPC);
            cm.effect_Voice('Voice4.img/BM3/wh/58', 128);
        }
    } else {
        if (status === b++) {
            selects = c;
            if (selects == 10083) {
                cm.dispose();
                cm.openNpc(9900004);
            } else {
                if (cm.isQuestFinished(a[selects][0] - 1)) {
                    cm.dispose();
                    cm.startQuestScript(a[selects][3], a[selects][0]);
                    if (cm.getPlayer().isGM()) {
                        cm.playerMessage(-1, '选择' + selects + '  操作代码：' + a[selects][0] + '  任务名：' + cm.getQuestName(a[selects][0]) + ' ');
                    }
                } else {
                    if (selects == 0 || a[selects][4] == true) {
                        cm.dispose();
                        cm.startQuestScript(a[selects][3], a[selects][0]);
                        if (cm.getPlayer().isGM()) {
                            cm.playerMessage(-1, '选择' + selects + '  操作代码：' + a[selects][0] + '  任务名：' + cm.getQuestName(a[selects][0]) + ' ');
                        }
                    } else {
                        if (cm.getPlayer().isGM()) {
                            cm.playerMessage(-1, '选择' + selects + '  操作代码：' + a[selects][0] + '  任务名：' + cm.getQuestName(a[selects][0]) + ' ');
                        }
                        cm.playerMessage(1, ' \r\n (LV.' + a[selects - 1][2] + ')' + cm.getQuestName(a[selects - 1][0]) + ' \r\n\r\n  请先完成前置任务哦！');
                        cm.dispose();
                    }
                }
            }
        } else {
            cm.dispose();
        }
    }
}
function action夜光法师(d, g, j, c) {
    var h = cm.getConstantScriptContent('菜单_NPC立绘');
    var e = Math.floor(Math.random() * h.length);
    var b = h[e][0];
    var f = randomNum(0, h[e][1]);
    var k = Array(Array(25560, '', 10, 0), Array(25561, '', 10, 0), Array(25562, '', 10, 0), Array(25563, '', 10, 0), Array(25564, '', 10, 0), Array(25565, '', 10, 0), Array(25566, '', 10, 0), Array(25567, '', 10, 0), Array(25568, '', 15, 0), Array(25569, '', 15, 0), Array(25570, '', 15, 0), Array(25571, '', 15, 0), Array(25572, '', 15, 0), Array(25573, '', 18, 0), Array(25574, '', 18, 0), Array(25575, '', 18, 0), Array(25577, '', 22, 0), Array(25578, '', 22, 0), Array(25579, '', 22, 0), Array(25580, '', 23, 0), Array(25581, '', 23, 0), Array(25582, '', 23, 0), Array(25583, '', 23, 0), Array(25584, '', 28, 0), Array(25585, '', 28, 0), Array(25586, '', 29, 0), Array(25587, '', 29, 0), Array(25588, '', 30, 0), Array(25589, '', 30, 0), Array(25591, '', 30, 0, true), Array(25592, '', 37, 0), Array(25593, '', 37, 0), Array(25594, '', 42, 0), Array(25595, '', 42, 0, true), Array(25596, '', 42, 0), Array(25597, '', 42, 0), Array(25608, '', 50, 0, true), Array(25609, '', 56, 0), Array(25610, '', 56, 0, true), Array(25614, '', 56, 0, true), Array(25615, '', 56, 0), Array(25616, '', 60, 0), Array(25617, '', 60, 0), Array(25618, '', 60, 0), Array(25619, '', 60, 0), Array(25620, '', 60, 0), Array(25621, '', 60, 0), Array(25622, '', 60, 0), Array(25623, '', 60, 0), Array(25624, '', 60, 0), Array(25625, '', 60, 0), Array(25626, '', 63, 0), Array(25627, '', 63, 0), Array(25628, '', 63, 0), Array(25629, '', 63, 0), Array(25630, '', 63, 0), Array(25631, '', 63, 0), Array(25632, '', 66, 0), Array(25633, '', 66, 0), Array(25634, '', 66, 0), Array(25637, '', 66, 0, true), Array(25638, '', 66, 0), Array(25639, '', 66, 0), Array(25640, '', 66, 0), Array(25641, '', 66, 0), Array(25642, '', 66, 0), Array(25643, '', 66, 0), Array(25646, '', 74, 0, true), Array(25515, '', 75, 0, true), Array(25647, '', 95, 0), Array(25648, '', 95, 0), Array(25649, '', 95, 0), Array(25650, '', 95, 0), Array(25651, '', 95, 0), Array(25653, '', 110, 0, true), Array(25654, '', 110, 0), Array(25655, '', 115, 0), Array(25656, '', 115, 0), Array(25657, '', 115, 0), Array(25658, '', 115, 0), Array(25659, '', 130, 0), Array(25660, '', 13, 0), Array(25661, '', 130, 0), Array(25675, '', 60, 0), Array(25676, '', 100, 0), Array(25677, '', 60, 0), Array(25501, '', 60, 0, true), Array(25504, '', 60, 0, true), Array(25678, '', 100, 0, true), Array(25516, '', 200, 0, true));
    if (status <= c++) {
        var a = '#face' + f + '##fn方正粗黑宋简体#';
        a += '  #fs17##r和我走不同道路的光芒啊，不要忘记你的使命。#n\r\n';
        a += '#fs14#';
        for (var c = 0; c < k.length; c++) {
            if (!cm.isQuestFinished(k[c][0]) && cm.getQuestStatus(k[c][0]) <= 0 && cm.getLevel() >= k[c][2]) {
                a += '  #L' + c + '#' + 红心 + ' (LV.' + k[c][2] + ')' + cm.getQuestName(k[c][0]) + '          (c)BMS小组#l\r\n';
                content++;
            }
        }
        if (cm.getPlayer().isGM()) {
            cm.playerMessage(-1, ' 可选列表数：' + content + ' ');
        }
        a += '\r\n#fs20##fn楷体##L10083#返回上一页#l\r\n#n';
        if (content == 0 && cm.getPlayer().getLevel() >= 200) {
            cm.dispose();
            cm.openNpc(b, 五转NPC);
        } else {
            cm.askMenu_Bottom(a, 204, b);
            cm.effect_Voice('Voice4.img/BM3/wh/53', 128);
        }
    } else {
        if (status === c++) {
            selects = j;
            if (selects == 10083) {
                cm.dispose();
                cm.openNpc(9900004);
            } else {
                if (cm.isQuestFinished(k[selects][0] - 1)) {
                    cm.dispose();
                    cm.startQuestScript(k[selects][3], k[selects][0]);
                    if (cm.getPlayer().isGM()) {
                        cm.playerMessage(-1, '选择' + selects + '  操作代码：' + k[selects][0] + '  任务名：' + cm.getQuestName(k[selects][0]) + ' ');
                    }
                } else {
                    if (selects == 0 || k[selects][4] == true) {
                        cm.dispose();
                        cm.startQuestScript(k[selects][3], k[selects][0]);
                        if (cm.getPlayer().isGM()) {
                            cm.playerMessage(-1, '选择' + selects + '  操作代码：' + k[selects][0] + '  任务名：' + cm.getQuestName(k[selects][0]) + ' ');
                        }
                    } else {
                        if (cm.getPlayer().isGM()) {
                            cm.playerMessage(-1, '选择' + selects + '  操作代码：' + k[selects][0] + '  任务名：' + cm.getQuestName(k[selects][0]) + ' ');
                        }
                        cm.playerMessage(1, ' \r\n (LV.' + k[selects - 1][2] + ')' + cm.getQuestName(k[selects - 1][0]) + ' \r\n\r\n  请先完成前置任务哦！');
                        cm.dispose();
                    }
                }
            }
        } else {
            cm.dispose();
        }
    }
}
function action狂龙战士(d, g, j, c) {
    var h = cm.getConstantScriptContent('菜单_NPC立绘');
    var e = Math.floor(Math.random() * h.length);
    var b = h[e][0];
    var f = randomNum(0, h[e][1]);
    var k = Array(Array(25710, '', 30, 0, true), Array(25711, '', 60, 0, true), Array(25712, '', 100, 0, true), Array(25713, '', 200, 3000011, true), Array(25720, '', 10, 3000001, true), Array(25721, '', 10, 3000001), Array(25722, '', 10, 3000001), Array(25788, '', 10, 0, true), Array(25789, '', 10, 0, true), Array(25723, '', 10, 3000001), Array(25724, '', 10, 3000001), Array(25725, '', 10, 3000001), Array(25726, '', 10, 3000007), Array(25727, '', 10, 3000007), Array(25728, '', 10, 3000013), Array(25729, '', 10, 3000014), Array(25730, '', 10, 3000003), Array(25731, '', 15, 3000003), Array(25809, '', 15, 3000003, true), Array(25732, '', 15, 3000000), Array(25733, '', 15, 3000000), Array(25734, '', 15, 3000000), Array(25735, '', 15, 3000000), Array(25736, '', 15, 3000000), Array(25737, '', 20, 3000000), Array(25738, '', 20, 3000004), Array(25739, '', 20, 3000004), Array(25740, '', 20, 3000005), Array(25741, '', 20, 3000005), Array(25742, '', 20, 3000005), Array(25743, '', 20, 3000000), Array(25744, '', 20, 3000000), Array(25810, '', 20, 3000000, true), Array(25745, '', 20, 3000001), Array(25811, '', 20, 3000000, true), Array(25746, '', 25, 3000000), Array(25747, '', 25, 3000000, true), Array(25748, '', 25, 3000000, true), Array(25749, '', 25, 3000000), Array(25750, '', 25, 3000000), Array(25751, '', 25, 3000000), Array(25752, '', 25, 3000000), Array(25753, '', 25, 3000001), Array(25754, '', 30, 3000003), Array(25755, '', 30, 3000003), Array(25756, '', 30, 3000000), Array(25757, '', 30, 3000000), Array(25758, '', 30, 3000016), Array(25759, '', 30, 3000017), Array(25760, '', 30, 3000016), Array(25761, '', 30, 3000017), Array(25762, '', 35, 3000002), Array(25763, '', 35, 3000001), Array(25764, '', 35, 3000003), Array(25765, '', 35, 3000003), Array(25766, '', 35, 3000000), Array(25767, '', 37, 3000000), Array(25779, '', 60, 1101002, true), Array(25780, '', 60, 1101001), Array(25781, '', 60, 3000002), Array(25768, '', 65, 3000000), Array(25769, '', 65, 1061019), Array(25770, '', 65, 1061019), Array(25771, '', 65, 1061019), Array(25772, '', 65, 1061019), Array(25773, '', 65, 1061019), Array(25774, '', 65, 1061019), Array(25775, '', 65, 1061019), Array(25776, '', 74, 1061019), Array(25777, '', 50, 3000003, true), Array(25778, '', 54, 3000003), Array(25782, '', 60, 3000002), Array(25783, '', 85, 3000002), Array(25784, '', 70, 3000003), Array(25785, '', 90, 1101002), Array(25786, '', 90, 1101002), Array(25787, '', 90, 3000001), Array(25808, '', 140, 3000018, true));
    if (status <= c++) {
        var a = '#face' + f + '##fn方正粗黑宋简体#';
        a += '  #fs17##r大魔法师的后裔呀，不要忘记你的使命。#n\r\n';
        a += '#fs14#';
        for (var c = 0; c < k.length; c++) {
            if (!cm.isQuestFinished(k[c][0]) && cm.getQuestStatus(k[c][0]) <= 0 && cm.getLevel() >= k[c][2]) {
                a += '  #L' + c + '#' + 红心 + ' (LV.' + k[c][2] + ')' + cm.getQuestName(k[c][0]) + '          (c)BMS小组#l\r\n';
                content++;
            }
        }
        if (cm.getPlayer().isGM()) {
            cm.playerMessage(-1, ' 可选列表数：' + content + ' ');
        }
        a += '\r\n#fs20##fn楷体##L10083#返回上一页#l\r\n#n';
        if (content == 0 && cm.getPlayer().getLevel() >= 200) {
            cm.dispose();
            cm.openNpc(b, 五转NPC);
        } else {
            cm.askMenu_Bottom(a, 204, b);
            cm.effect_Voice('Voice4.img/BM3/wh/49', 128);
        }
    } else {
        if (status === c++) {
            selects = j;
            if (selects == 10083) {
                cm.dispose();
                cm.openNpc(9900004);
            } else {
                if (cm.isQuestFinished(k[selects][0] - 1)) {
                    cm.dispose();
                    cm.startQuestScript(k[selects][3], k[selects][0]);
                    if (cm.getPlayer().isGM()) {
                        cm.playerMessage(-1, '选择' + selects + '  操作代码：' + k[selects][0] + '  任务名：' + cm.getQuestName(k[selects][0]) + ' ');
                    }
                } else {
                    if (selects == 0 || k[selects][4] == true) {
                        cm.dispose();
                        cm.startQuestScript(k[selects][3], k[selects][0]);
                        if (cm.getPlayer().isGM()) {
                            cm.playerMessage(-1, '选择' + selects + '  操作代码：' + k[selects][0] + '  任务名：' + cm.getQuestName(k[selects][0]) + ' ');
                        }
                    } else {
                        if (cm.getPlayer().isGM()) {
                            cm.playerMessage(-1, '选择' + selects + '  操作代码：' + k[selects][0] + '  任务名：' + cm.getQuestName(k[selects][0]) + ' ');
                        }
                        cm.playerMessage(1, ' \r\n (LV.' + k[selects - 1][2] + ')' + cm.getQuestName(k[selects - 1][0]) + ' \r\n\r\n  请先完成前置任务哦！');
                        cm.dispose();
                    }
                }
            }
        } else {
            cm.dispose();
        }
    }
}
function action爆莉萌天使(d, g, j, c) {
    var h = cm.getConstantScriptContent('菜单_NPC立绘');
    var e = Math.floor(Math.random() * h.length);
    var b = h[e][0];
    var f = randomNum(0, h[e][1]);
    var k = Array(Array(25825, '', 30, 3000018, true), Array(25826, '', 60, 3000018, true), Array(25827, '', 100, 3000018, true), Array(25828, '', 200, 3000018, true), Array(25829, '', 10, 3000018, true), Array(25835, '', 10, 3000018, true), Array(25836, '', 10, 3000018, true), Array(25837, '', 10, 3000018, true), Array(25839, '', 10, 3000018, true), Array(25840, '', 10, 3000000), Array(25841, '', 10, 3000007), Array(25842, '', 10, 3000007), Array(25843, '', 10, 3000006), Array(25844, '', 10, 3000006), Array(25845, '', 10, 3000006), Array(25846, '', 10, 3000018, true), Array(25847, '', 15, 3000003), Array(25848, '', 15, 3000001), Array(25849, '', 15, 3000001, true), Array(25850, '', 15, 3000001), Array(25851, '', 15, 3000000), Array(25852, '', 15, 3000018), Array(25853, '', 20, 3000018), Array(25854, '', 20, 3000000), Array(25855, '', 20, 3000004), Array(25856, '', 20, 3000004), Array(25857, '', 20, 3000004), Array(25858, '', 20, 3000018), Array(25859, '', 20, 3000018, true), Array(25860, '', 25, 3000018, true), Array(25861, '', 25, 3000006, true), Array(25862, '', 25, 3000006, true), Array(25863, '', 25, 3000000), Array(25864, '', 30, 3000000), Array(25865, '', 30, 3000000), Array(25866, '', 30, 3000000), Array(25867, '', 30, 3000000), Array(25868, '', 30, 3000000), Array(25869, '', 30, 3000000), Array(25870, '', 30, 3000000), Array(25871, '', 30, 3000000), Array(25872, '', 30, 3000016), Array(25873, '', 30, 3000016), Array(25874, '', 30, 3000016), Array(25875, '', 35, 3000002), Array(25876, '', 35, 3000018), Array(25877, '', 35, 3000018), Array(25878, '', 35, 3000018, true), Array(25879, '', 35, 3000000), Array(25880, '', 35, 3000018), Array(25881, '', 35, 3000018), Array(25882, '', 65, 3000018), Array(25883, '', 65, 3000018), Array(25884, '', 75, 3000018, true), Array(25885, '', 80, 3000018, true), Array(25886, '', 70, 3000018, true), Array(25887, '', 55, 3000018, true), Array(25888, '', 59, 3000018, true), Array(25890, '', 60, 3000018, true), Array(25891, '', 70, 3000019), Array(25892, '', 70, 3000148), Array(25893, '', 68, 3000018, true), Array(25894, '', 75, 3000018), Array(25895, '', 90, 1101002), Array(25896, '', 90, 3000018), Array(25897, '', 90, 3000018), Array(25898, '', 95, 3000018), Array(25899, '', 88, 3000018), Array(25900, '', 93, 3000018), Array(25901, '', 94, 3000018), Array(25902, '', 100, 3000018), Array(25903, '', 100, 3000018), Array(25904, '', 100, 3000018, true), Array(25905, '', 140, 3000018, true));
    if (status <= c++) {
        var a = '#face' + f + '##fn方正粗黑宋简体#';
        a += '  #fs17##r大魔法师的后裔呀，不要忘记你的使命。#n\r\n';
        a += '#fs14#';
        for (var c = 0; c < k.length; c++) {
            if (!cm.isQuestFinished(k[c][0]) && cm.getQuestStatus(k[c][0]) <= 0 && cm.getLevel() >= k[c][2]) {
                a += '  #L' + c + '#' + 红心 + ' (LV.' + k[c][2] + ')' + cm.getQuestName(k[c][0]) + '          (c)BMS小组#l\r\n';
                content++;
            }
        }
        if (cm.getPlayer().isGM()) {
            cm.playerMessage(-1, ' 可选列表数：' + content + ' ');
        }
        a += '\r\n#fs20##fn楷体##L10083#返回上一页#l\r\n#n';
        if (content == 0 && cm.getPlayer().getLevel() >= 200) {
            cm.dispose();
            cm.openNpc(b, 五转NPC);
        } else {
            cm.askMenu_Bottom(a, 204, b);
            cm.effect_Voice('Voice4.img/BM3/wh/49', 128);
        }
    } else {
        if (status === c++) {
            selects = j;
            if (selects == 10083) {
                cm.dispose();
                cm.openNpc(9900004);
            } else {
                if (cm.isQuestFinished(k[selects][0] - 1)) {
                    cm.dispose();
                    cm.startQuestScript(k[selects][3], k[selects][0]);
                    if (cm.getPlayer().isGM()) {
                        cm.playerMessage(-1, '选择' + selects + '  操作代码：' + k[selects][0] + '  任务名：' + cm.getQuestName(k[selects][0]) + ' ');
                    }
                } else {
                    if (selects == 0 || k[selects][4] == true) {
                        cm.dispose();
                        cm.startQuestScript(k[selects][3], k[selects][0]);
                        if (cm.getPlayer().isGM()) {
                            cm.playerMessage(-1, '选择' + selects + '  操作代码：' + k[selects][0] + '  任务名：' + cm.getQuestName(k[selects][0]) + ' ');
                        }
                    } else {
                        if (cm.getPlayer().isGM()) {
                            cm.playerMessage(-1, '选择' + selects + '  操作代码：' + k[selects][0] + '  任务名：' + cm.getQuestName(k[selects][0]) + ' ');
                        }
                        cm.playerMessage(1, ' \r\n (LV.' + k[selects - 1][2] + ')' + cm.getQuestName(k[selects - 1][0]) + ' \r\n\r\n  请先完成前置任务哦！');
                        cm.dispose();
                    }
                }
            }
        } else {
            cm.dispose();
        }
    }
}
function action超能力者(d, g, j, c) {
    var h = cm.getConstantScriptContent('菜单_NPC立绘');
    var e = Math.floor(Math.random() * h.length);
    var b = h[e][0];
    var f = randomNum(0, h[e][1]);
    var k = Array(Array(22702, '', 10, 1531007, true), Array(22703, '', 10, 1531007, true), Array(22704, '', 30, 1531007, true), Array(22711, '', 10, 1531001, true), Array(22712, '', 10, 1531007, true), Array(22714, '', 10, 1531001, true), Array(22715, '', 10, 1531001, true), Array(22720, '', 11, 1531007, true), Array(22721, '', 11, 1531008), Array(22722, '', 11, 1531061), Array(22723, '', 11, 1531046), Array(22724, '', 11, 1531047), Array(22725, '', 12, 1531007), Array(22726, '', 12, 1531007), Array(22727, '', 14, 1531042), Array(22728, '', 14, 1531042), Array(22729, '', 14, 1531010), Array(22730, '', 16, 1531007), Array(22731, '', 16, 1531064), Array(22732, '', 16, 1531066), Array(22733, '', 16, 1531067), Array(22734, '', 16, 1531005), Array(22740, '', 20, 1531011, true), Array(22741, '', 20, 1531011), Array(22742, '', 20, 1531009), Array(22743, '', 20, 1531011), Array(22744, '', 22, 1531012), Array(22745, '', 23, 1531011), Array(22746, '', 23, 1531009), Array(22747, '', 24, 1531009), Array(22748, '', 25, 1531009), Array(22749, '', 28, 1531012), Array(22750, '', 28, 1531007), Array(22760, '', 23, 1531026, true), Array(22761, '', 24, 1531027), Array(22762, '', 25, 1531028), Array(22770, '', 30, 1531007, true), Array(22780, '', 30, 1531007, true), Array(22781, '', 30, 1531011), Array(22782, '', 35, 1531011), Array(22783, '', 40, 1531011), Array(22784, '', 50, 1531011), Array(22800, '', 60, 1531007, true), Array(22810, '', 60, 1531011, true), Array(22811, '', 60, 1531009), Array(22820, '', 75, 1531011, true), Array(22830, '', 75, 1531007), Array(22831, '', 75, 1531007), Array(22832, '', 75, 1531007), Array(22833, '', 75, 1531010), Array(22834, '', 75, 1531012), Array(22840, '', 75, 1531011, true), Array(22841, '', 75, 1531011), Array(22842, '', 75, 1531011), Array(22843, '', 75, 1531011), Array(22844, '', 75, 1531011), Array(22845, '', 85, 1531011), Array(22846, '', 85, 1531011), Array(22847, '', 85, 1531011), Array(22848, '', 85, 1531011), Array(22850, '', 100, 1531007, true), Array(22860, '', 100, 1531062, true), Array(22861, '', 100, 1531012, true), Array(22870, '', 200, 1531004, true), Array(22880, '', 60, 1531007, true), Array(22881, '', 100, 1531007, true), Array(22882, '', 60, 1531007, true), Array(22883, '', 100, 1531007, true));
    if (status <= c++) {
        var a = '#face' + f + '##fn方正粗黑宋简体#';
        a += '  #fs17##r异世界的超能力者啊，不要忘记你的使命。#n\r\n';
        a += '#fs14#';
        for (var c = 0; c < k.length; c++) {
            if (!cm.isQuestFinished(k[c][0]) && cm.getQuestStatus(k[c][0]) <= 0 && cm.getLevel() >= k[c][2]) {
                a += '  #L' + c + '#' + 红心 + ' (LV.' + k[c][2] + ')' + cm.getQuestName(k[c][0]) + '          (c)BMS小组#l\r\n';
                content++;
            }
        }
        if (cm.getPlayer().isGM()) {
            cm.playerMessage(-1, ' 可选列表数：' + content + ' ');
        }
        a += '\r\n#fs20##fn楷体##L10083#返回上一页#l\r\n#n';
        if (content == 0 && cm.getPlayer().getLevel() >= 200) {
            cm.dispose();
            cm.openNpc(b, 五转NPC);
        } else {
            cm.askMenu_Bottom(a, 204, b);
            cm.effect_Voice('Voice4.img/BM3/wh/66', 128);
        }
    } else {
        if (status === c++) {
            selects = j;
            if (selects == 10083) {
                cm.dispose();
                cm.openNpc(9900004);
            } else {
                if (cm.isQuestFinished(k[selects][0] - 1)) {
                    cm.dispose();
                    cm.startQuestScript(k[selects][3], k[selects][0]);
                    if (cm.getPlayer().isGM()) {
                        cm.playerMessage(-1, '选择' + selects + '  操作代码：' + k[selects][0] + '  任务名：' + cm.getQuestName(k[selects][0]) + ' ');
                    }
                } else {
                    if (selects == 0 || k[selects][4] == true) {
                        cm.dispose();
                        cm.startQuestScript(k[selects][3], k[selects][0]);
                        if (cm.getPlayer().isGM()) {
                            cm.playerMessage(-1, '选择' + selects + '  操作代码：' + k[selects][0] + '  任务名：' + cm.getQuestName(k[selects][0]) + ' ');
                        }
                    } else {
                        if (cm.getPlayer().isGM()) {
                            cm.playerMessage(-1, '选择' + selects + '  操作代码：' + k[selects][0] + '  任务名：' + cm.getQuestName(k[selects][0]) + ' ');
                        }
                        cm.playerMessage(1, ' \r\n (LV.' + k[selects - 1][2] + ')' + cm.getQuestName(k[selects - 1][0]) + ' \r\n\r\n  请先完成前置任务哦！');
                        cm.dispose();
                    }
                }
            }
        } else {
            cm.dispose();
        }
    }
}
function action林之灵(d, g, j, c) {
    var h = cm.getConstantScriptContent('菜单_NPC立绘');
    var e = Math.floor(Math.random() * h.length);
    var b = h[e][0];
    var f = randomNum(0, h[e][1]);
    var k = Array(Array(59000, '', 0, 2008, true), Array(59000, '', 0, 2008, true));
    if (status <= c++) {
        var a = '#face' + f + '##fn方正粗黑宋简体#';
        a += '  #fs17##r跨越命运的新时代英雄啊，不要忘记你的使命。#n\r\n';
        a += '#fs14#';
        for (var c = 0; c < k.length; c++) {
            if (!cm.isQuestFinished(k[c][0]) && cm.getQuestStatus(k[c][0]) <= 0 && cm.getLevel() >= k[c][2]) {
                a += '  #L' + c + '#' + 红心 + ' (LV.' + k[c][2] + ')' + cm.getQuestName(k[c][0]) + '          (c)BMS小组#l\r\n';
                content++;
            }
        }
        if (cm.getPlayer().isGM()) {
            cm.playerMessage(-1, ' 可选列表数：' + content + ' ');
        }
        a += '\r\n#fs20##fn楷体##L10083#返回上一页#l\r\n#n';
        if (content == 0 && cm.getPlayer().getLevel() >= 200) {
            cm.dispose();
            cm.openNpc(b, 五转NPC);
        } else {
            cm.askMenu_Bottom(a, 204, b);
            cm.effect_Voice('Voice4.img/BM3/wh/1000', 128);
        }
    } else {
        if (status === c++) {
            selects = j;
            if (selects == 10083) {
                cm.dispose();
                cm.openNpc(9900004);
            } else {
                if (cm.isQuestFinished(k[selects][0] - 1)) {
                    cm.dispose();
                    cm.startQuestScript(k[selects][3], k[selects][0]);
                    if (cm.getPlayer().isGM()) {
                        cm.playerMessage(-1, '选择' + selects + '  操作代码：' + k[selects][0] + '  任务名：' + cm.getQuestName(k[selects][0]) + ' ');
                    }
                } else {
                    if (selects == 0 || k[selects][4] == true) {
                        cm.dispose();
                        cm.startQuestScript(k[selects][3], k[selects][0]);
                        if (cm.getPlayer().isGM()) {
                            cm.playerMessage(-1, '选择' + selects + '  操作代码：' + k[selects][0] + '  任务名：' + cm.getQuestName(k[selects][0]) + ' ');
                        }
                    } else {
                        if (cm.getPlayer().isGM()) {
                            cm.playerMessage(-1, '选择' + selects + '  操作代码：' + k[selects][0] + '  任务名：' + cm.getQuestName(k[selects][0]) + ' ');
                        }
                        cm.playerMessage(1, ' \r\n (LV.' + k[selects - 1][2] + ')' + cm.getQuestName(k[selects - 1][0]) + ' \r\n\r\n  请先完成前置任务哦！');
                        cm.dispose();
                    }
                }
            }
        } else {
            cm.dispose();
        }
    }
}
function action龙的传人(d, g, j, c) {
    var h = cm.getConstantScriptContent('菜单_NPC立绘');
    var e = Math.floor(Math.random() * h.length);
    var b = h[e][0];
    var f = randomNum(0, h[e][1]);
    var k = Array(Array(52400, '', 0, 2008, true), Array(52400, '', 0, 2008, true));
    if (status <= c++) {
        var a = '#face' + f + '##fn方正粗黑宋简体#';
        a += '  #fs17##r漂流于世界的复仇者啊，不要忘记你的使命。#n\r\n';
        a += '#fs14#';
        for (var c = 0; c < k.length; c++) {
            if (!cm.isQuestFinished(k[c][0]) && cm.getQuestStatus(k[c][0]) <= 0 && cm.getLevel() >= k[c][2]) {
                a += '  #L' + c + '#' + 红心 + ' (LV.' + k[c][2] + ')' + cm.getQuestName(k[c][0]) + '          (c)BMS小组#l\r\n';
                content++;
            }
        }
        if (cm.getPlayer().isGM()) {
            cm.playerMessage(-1, ' 可选列表数：' + content + ' ');
        }
        a += '\r\n#fs20##fn楷体##L10083#返回上一页#l\r\n#n';
        if (content == 0 && cm.getPlayer().getLevel() >= 200) {
            cm.dispose();
            cm.openNpc(b, 五转NPC);
        } else {
            if (cm.getPlayer().isGM()) {
                cm.playerMessage(-1, '选择' + selects + '  操作代码：' + k[selects][0] + '  任务名：' + cm.getQuestName(k[selects][0]) + ' ');
            }
            cm.askMenu_Bottom(a, 204, b);
            cm.effect_Voice('Voice4.img/BM3/wh/1003', 128);
        }
    } else {
        if (status === c++) {
            selects = j;
            if (selects == 10083) {
                cm.dispose();
                cm.openNpc(9900004);
            } else {
                if (cm.isQuestFinished(k[selects][0] - 1)) {
                    cm.dispose();
                    cm.startQuestScript(k[selects][3], k[selects][0]);
                    if (cm.getPlayer().isGM()) {
                        cm.playerMessage(-1, '选择' + selects + '  操作代码：' + k[selects][0] + '  任务名：' + cm.getQuestName(k[selects][0]) + ' ');
                    }
                } else {
                    if (selects == 0 || k[selects][4] == true) {
                        cm.dispose();
                        cm.startQuestScript(k[selects][3], k[selects][0]);
                        if (cm.getPlayer().isGM()) {
                            cm.playerMessage(-1, '选择' + selects + '  操作代码：' + k[selects][0] + '  任务名：' + cm.getQuestName(k[selects][0]) + ' ');
                        }
                    } else {
                        cm.playerMessage(1, ' \r\n (LV.' + k[selects - 1][2] + ')' + cm.getQuestName(k[selects - 1][0]) + ' \r\n\r\n  请先完成前置任务哦！');
                        cm.dispose();
                    }
                }
            }
        } else {
            cm.dispose();
        }
    }
}
function action阴阳师(d, g, j, c) {
    var h = cm.getConstantScriptContent('菜单_NPC立绘');
    var e = Math.floor(Math.random() * h.length);
    var b = h[e][0];
    var f = randomNum(0, h[e][1]);
    var k = Array(Array(57400, '', 10, 9130082), Array(57401, '', 10, 9130082), Array(57402, '', 11, 9130083), Array(57403, '', 12, 9130008), Array(57404, '', 13, 9130008), Array(57405, '', 14, 9130008), Array(57406, '', 15, 9130008), Array(57407, '', 16, 9130008), Array(57408, '', 17, 9130008), Array(57409, '', 17, 9130084), Array(57410, '', 18, 9130084), Array(57411, '', 19, 9130085), Array(57412, '', 19, 9130009), Array(57413, '', 20, 9130008), Array(57414, '', 20, 9130008), Array(57415, '', 21, 9130008), Array(57417, '', 21, 9130008), Array(57418, '', 22, 9130010), Array(57419, '', 22, 9130010), Array(57420, '', 23, 9110002), Array(57421, '', 23, 9110002), Array(57427, '', 23, 1101002), Array(57428, '', 24, 1101002), Array(57429, '', 25, 9130092), Array(57433, '', 26, 2020005), Array(57434, '', 26, 2020005), Array(57435, '', 27, 9130010), Array(57436, '', 28, 9130000), Array(57437, '', 29, 9130093), Array(57439, '', 30, 9130010), Array(57440, '', 125, 9130021), Array(57441, '', 125, 2091002), Array(57442, '', 125, 2091003), Array(57443, '', 125, 2091003), Array(57444, '', 125, 2091001), Array(57445, '', 125, 2091001), Array(57446, '', 125, 9130010), Array(57447, '', 140, 9130021), Array(57448, '', 140, 9130021), Array(57449, '', 140, 9130010), Array(57450, '', 140, 9130025), Array(57451, '', 140, 9130027), Array(57452, '', 150, 9130021), Array(57453, '', 150, 9130000), Array(57454, '', 150, 9130076), Array(57455, '', 150, 9130076), Array(57456, '', 150, 9130076), Array(57457, '', 150, 9130010), Array(57479, '', 150, 9130010, true), Array(57458, '', 30, 0, true), Array(57461, '', 50, 9130081, true), Array(57462, '', 200, 9130021, true), Array(57463, '', 100, 9130021, true), Array(57464, '', 60, 9130008, true), Array(57465, '', 140, 9130008, true));
    if (status <= c++) {
        var a = '#face' + f + '##fn方正粗黑宋简体#';
        a += '  #fs17##r追逐命运的阴阳师啊，不要忘记你的使命。#n\r\n';
        a += '#fs14#';
        for (var c = 0; c < k.length; c++) {
            if (!cm.isQuestFinished(k[c][0]) && cm.getQuestStatus(k[c][0]) <= 0 && cm.getLevel() >= k[c][2]) {
                a += '  #L' + c + '#' + 红心 + ' (LV.' + k[c][2] + ')' + cm.getQuestName(k[c][0]) + '          (c)BMS小组#l\r\n';
                content++;
            }
        }
        if (cm.getPlayer().isGM()) {
            cm.playerMessage(-1, ' 可选列表数：' + content + ' ');
        }
        a += '\r\n#fs20##fn楷体##L10083#返回上一页#l\r\n#n';
        if (content == 0 && cm.getPlayer().getLevel() >= 200) {
            cm.dispose();
            cm.openNpc(b, 五转NPC);
        } else {
            if (cm.getPlayer().isGM()) {
                cm.playerMessage(-1, '选择' + selects + '  操作代码：' + k[selects][0] + '  任务名：' + cm.getQuestName(k[selects][0]) + ' ');
            }
            cm.askMenu_Bottom(a, 204, b);
            cm.effect_Voice('Voice4.img/BM3/wh/1002', 128);
        }
    } else {
        if (status === c++) {
            selects = j;
            if (selects == 10083) {
                cm.dispose();
                cm.openNpc(9900004);
            } else {
                if (cm.isQuestFinished(k[selects][0] - 1)) {
                    cm.dispose();
                    cm.startQuestScript(k[selects][3], k[selects][0]);
                    if (cm.getPlayer().isGM()) {
                        cm.playerMessage(-1, '选择' + selects + '  操作代码：' + k[selects][0] + '  任务名：' + cm.getQuestName(k[selects][0]) + ' ');
                    }
                } else {
                    if (selects == 0 || k[selects][4] == true) {
                        cm.dispose();
                        cm.startQuestScript(k[selects][3], k[selects][0]);
                        if (cm.getPlayer().isGM()) {
                            cm.playerMessage(-1, '选择' + selects + '  操作代码：' + k[selects][0] + '  任务名：' + cm.getQuestName(k[selects][0]) + ' ');
                        }
                    } else {
                        if (cm.getPlayer().isGM()) {
                            cm.playerMessage(-1, '选择' + selects + '  操作代码：' + k[selects][0] + '  任务名：' + cm.getQuestName(k[selects][0]) + ' ');
                        }
                        cm.playerMessage(1, ' \r\n (LV.' + k[selects - 1][2] + ')' + cm.getQuestName(k[selects - 1][0]) + ' \r\n\r\n  请先完成前置任务哦！');
                        cm.dispose();
                    }
                }
            }
        } else {
            cm.dispose();
        }
    }
}
function action剑豪(d, g, j, c) {
    var h = cm.getConstantScriptContent('菜单_NPC立绘');
    var e = Math.floor(Math.random() * h.length);
    var b = h[e][0];
    var f = randomNum(0, h[e][1]);
    var k = Array(Array(57102, '', 10, 9130031), Array(57103, '', 10, 9130031), Array(57104, '', 11, 9130031), Array(57105, '', 12, 9130008), Array(57106, '', 13, 9130008), Array(57107, '', 14, 9130008), Array(57108, '', 15, 9130008), Array(57109, '', 16, 9130008), Array(57110, '', 17, 9130008), Array(57111, '', 17, 9130056), Array(57112, '', 18, 9130055), Array(57113, '', 19, 9130055), Array(57114, '', 19, 9130000), Array(57115, '', 20, 9130008), Array(57118, '', 20, 9130008, true), Array(57119, '', 21, 9130008), Array(57120, '', 22, 9130010), Array(57121, '', 22, 9130010), Array(57122, '', 22, 9110002), Array(57123, '', 22, 1012100), Array(57128, '', 23, 1012100, true), Array(57129, '', 23, 9130067), Array(57130, '', 22, 1012100), Array(57131, '', 22, 1012100), Array(57132, '', 22, 9130079), Array(57133, '', 26, 2032001), Array(57137, '', 26, 9130079), Array(57138, '', 27, 9130010), Array(57139, '', 27, 9130010), Array(57140, '', 27, 9130000), Array(57141, '', 29, 9130080), Array(57143, '', 27, 9130010, true), Array(57144, '', 125, 9130021), Array(57145, '', 125, 2091002), Array(57146, '', 125, 2091003), Array(57147, '', 125, 2091003), Array(57148, '', 125, 2091001), Array(57149, '', 125, 2091001), Array(57150, '', 125, 9130010), Array(57151, '', 140, 9130021), Array(57152, '', 140, 9130021), Array(57153, '', 140, 9130010), Array(57154, '', 140, 9130025), Array(57155, '', 140, 9130027), Array(57156, '', 150, 9130021), Array(57157, '', 150, 9130000), Array(57158, '', 150, 9130076), Array(57159, '', 150, 9130076), Array(57160, '', 150, 9130076), Array(57161, '', 150, 9130010), Array(57162, '', 30, 0, true), Array(57165, '', 50, 9130000, true), Array(57166, '', 200, 9130021, true), Array(57167, '', 100, 9130021, true), Array(57168, '', 60, 9130008, true), Array(57172, '', 140, 9130008, true));
    if (status <= c++) {
        var a = '#face' + f + '##fn方正粗黑宋简体#';
        a += '  #fs17##r切断命运的高贵之剑啊，不要忘记你的使命。#n\r\n';
        a += '#fs14#';
        for (var c = 0; c < k.length; c++) {
            if (!cm.isQuestFinished(k[c][0]) && cm.getQuestStatus(k[c][0]) <= 0 && cm.getLevel() >= k[c][2]) {
                a += '  #L' + c + '#' + 红心 + ' (LV.' + k[c][2] + ')' + cm.getQuestName(k[c][0]) + '          (c)BMS小组#l\r\n';
                content++;
            }
        }
        if (cm.getPlayer().isGM()) {
            cm.playerMessage(-1, ' 可选列表数：' + content + ' ');
        }
        a += '\r\n#fs20##fn楷体##L10083#返回上一页#l\r\n#n';
        if (content == 0 && cm.getPlayer().getLevel() >= 200) {
            cm.dispose();
            cm.openNpc(b, 五转NPC);
        } else {
            cm.askMenu_Bottom(a, 204, b);
            cm.effect_Voice('Voice4.img/BM3/wh/1001', 128);
        }
    } else {
        if (status === c++) {
            selects = j;
            if (selects == 10083) {
                cm.dispose();
                cm.openNpc(9900004);
            } else {
                if (cm.isQuestFinished(k[selects][0] - 1)) {
                    cm.dispose();
                    cm.startQuestScript(k[selects][3], k[selects][0]);
                    if (cm.getPlayer().isGM()) {
                        cm.playerMessage(-1, '选择' + selects + '  操作代码：' + k[selects][0] + '  任务名：' + cm.getQuestName(k[selects][0]) + ' ');
                    }
                } else {
                    if (selects == 0 || k[selects][4] == true) {
                        cm.dispose();
                        cm.startQuestScript(k[selects][3], k[selects][0]);
                        if (cm.getPlayer().isGM()) {
                            cm.playerMessage(-1, '选择' + selects + '  操作代码：' + k[selects][0] + '  任务名：' + cm.getQuestName(k[selects][0]) + ' ');
                        }
                    } else {
                        if (cm.getPlayer().isGM()) {
                            cm.playerMessage(-1, '选择' + selects + '  操作代码：' + k[selects][0] + '  任务名：' + cm.getQuestName(k[selects][0]) + ' ');
                        }
                        cm.playerMessage(1, ' \r\n (LV.' + k[selects - 1][2] + ')' + cm.getQuestName(k[selects - 1][0]) + ' \r\n\r\n  请先完成前置任务哦！');
                        cm.dispose();
                    }
                }
            }
        } else {
            cm.dispose();
        }
    }
}
function action2(e, c, b, a) {
    if (status <= a++) {
        var d = '#fn#';
        d += ' #r#e『挑战』#n挑战副本：#k\r\n';
        d += '#fs15#';
        d += '#L0#' + 红心 + ' #b（LV.225）[阿尔卡那]解救石精灵    (c)BMS小组#l\r\n';
        d += '#L1#' + 红心 + ' #b（LV.245）[痛苦迷宫]核心东边    (c)BMS小组#l\r\n';
        d += '#L2#' + 红心 + ' #b（LV.255）[黎曼]追赶奥尔卡    (c)BMS小组#l\r\n';
        d += '\r\n#fs20##fn楷体##L10081#返回上一页#l\r\n#n';
        cm.askMenu_Bottom(d, 204, 2400010);
    } else {
        if (status === a++) {
            switch (b) {
            case 0:
                if (cm.getLevel() < 225) {
                    cm.dispose();
                    cm.sendNext_Bottom('很遗憾，任务要求等级不够!', 2400010);
                } else {
                    cm.dispose();
                    cm.openNpc(3003381);
                }
                break;
            case 1:
                if (cm.getLevel() < 245) {
                    cm.dispose();
                    cm.sendNext_Bottom('很遗憾，任务要求等级不够!', 2400010);
                } else {
                    cm.dispose();
                    cm.openNpc(0, '痛苦迷宫_核心东边');
                }
                break;
            case 2:
                if (cm.getLevel() < 255) {
                    cm.dispose();
                    cm.sendNext_Bottom('很遗憾，任务要求等级不够!', 2400010);
                } else {
                    cm.dispose();
                    cm.openNpc(0, '黎曼_上升游戏');
                }
                break;
            case 10081:
                cm.dispose();
                cm.openNpc(0, '剧情任务');
                break;
            }
        } else {
            cm.dispose();
        }
    }
}
function action3(e, c, b, a) {
    if (status <= a++) {
        var d = '#fn#';
        d += '#r#e『活动』#n活动副本：#k\r\n';
        d += '#fs15#';
        d += '#L0#' + 红心 + ' #b（LV.200）[我的小屋]家？家！我的家！   (c)BMS小组#l\r\n';
        d += '#L4#' + 红心 + ' #b（LV.100）我的花园    (c)BMS小组#l\r\n';
        d += '#L1#' + 红心 + ' #b（LV.200）小游戏_控制之神    (c)BMS小组#l\r\n';
        d += '#L2#' + 红心 + ' #b（LV.200）日冕庆典活动    (c)BMS小组#l\r\n';
        d += '#L3#' + 红心 + ' #b（LV.100）[圣诞节]来卡米拉面包房玩！   (c)BMS小组#l\r\n';
        d += '\r\n#fs20##fn楷体##L10080#返回上一页#l\r\n#n';
        cm.askMenu_Bottom(d, 204, 2400010);
    } else {
        if (status === a++) {
            switch (b) {
            case 0:
                if (cm.getLevel() < 200) {
                    cm.dispose();
                    cm.sendNext_Bottom('很遗憾，任务要求等级不够!', 2400010);
                } else {
                    cm.dispose();
                    cm.openNpc(9900004, '我的小屋');
                }
                break;
            case 1:
                if (cm.getLevel() < 200) {
                    cm.dispose();
                    cm.sendNext_Bottom('很遗憾，任务要求等级不够!', 2400010);
                } else {
                    cm.dispose();
                    cm.openNpc(1, '小游戏_控制之神');
                    cm.addPopupSay(1540108, 2000, '温馨提示:此游戏各地图可以最高跳跃\r\n连续按箭头← ←或→ → 可触发.');
                }
                break;
            case 2:
                if (cm.getLevel() < 200) {
                    cm.dispose();
                    cm.sendNext_Bottom('很遗憾，任务要求等级不够!', 2400010);
                } else {
                    cm.dispose();
                    cm.openNpc(9900004, '日冕庆典活动');
                }
                break;
            case 3:
                if (cm.getLevel() < 100) {
                    cm.dispose();
                    cm.sendNext_Bottom('很遗憾，任务要求等级不够!', 2400010);
                } else {
                    cm.dispose();
                    if (cm.getQuestStatus(100148) == 2) {
                        cm.startQuestScript(9010010, 100149);
                    } else {
                        cm.startQuestScript(9010010, 100148);
                    }
                    break;
                }
                break;
            case 4:
                if (cm.getLevel() < 100) {
                    cm.dispose();
                    cm.sendNext_Bottom('很遗憾，任务要求等级不够!', 2400010);
                } else {
                    cm.dispose();
                    cm.openNpc(9330065);
                }
                break;
            case 10080:
                cm.dispose();
                cm.openNpc(0, '剧情任务');
                break;
            }
        } else {
            cm.dispose();
        }
    }
}
function action10090(d, c, b, a) {
    if (status <= a++) {
        cm.dispose();
        cm.openNpc(9900004);
    }
}
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