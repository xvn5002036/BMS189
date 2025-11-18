var aaa = '#fUI/UIWindow.img/PvP/Scroll/enabled/next2#';
var status = 0;
var typed = 0;
var rmb = 0;
var weaponId = null;
var weaponList = Array(1012478, 1022277, 1152170, 1122150, 1032241, 1113282, 1132296, 1182087, 1162025);
var needItemList0 = Array(Array(1022255, 1), Array(4032733, 2), Array(4000236, 200), Array(4000039, 200), Array(4000135, 150), Array(4000032, 150), Array(4000001, 100), Array(4000054, 100), Array(4000124, 10), Array(2210006, 1), Array(4000243, 1), Array(4000235, 1), Array(4001083, 1));
var needItemList1 = Array(Array(1012545, 1), Array(4032733, 2), Array(4000236, 200), Array(4000039, 200), Array(4000135, 150), Array(4000032, 150), Array(4000001, 100), Array(4000054, 100), Array(4000124, 10), Array(2210006, 1), Array(4000243, 1), Array(4000235, 1), Array(4001083, 1));
var needItemList2 = Array(Array(1152192, 1), Array(4032733, 2), Array(4000236, 200), Array(4000039, 200), Array(4000135, 150), Array(4000032, 150), Array(4000001, 100), Array(4000054, 100), Array(4000124, 10), Array(2210006, 1), Array(4000243, 1), Array(4000235, 1), Array(4001083, 1));
var needItemList3 = Array(Array(1122322, 1), Array(4032733, 2), Array(4000236, 200), Array(4000039, 200), Array(4000135, 150), Array(4000032, 150), Array(4000001, 100), Array(4000054, 100), Array(4000124, 10), Array(2210006, 1), Array(4000243, 1), Array(4000235, 1), Array(4001083, 1));
var needItemList4 = Array(Array(1032258, 1), Array(4032733, 2), Array(4000236, 200), Array(4000039, 200), Array(4000135, 150), Array(4000032, 150), Array(4000001, 100), Array(4000054, 100), Array(4000124, 10), Array(2210006, 1), Array(4000243, 1), Array(4000235, 1), Array(4001083, 1));
var needItemList5 = Array(Array(1113226, 1), Array(4032733, 2), Array(4000236, 200), Array(4000039, 200), Array(4000135, 150), Array(4000032, 150), Array(4000001, 100), Array(4000054, 100), Array(4000124, 10), Array(2210006, 1), Array(4000243, 1), Array(4000235, 1), Array(4001083, 1));
var needItemList6 = Array(Array(1132294, 1), Array(4032733, 2), Array(4000236, 200), Array(4000039, 200), Array(4000135, 150), Array(4000032, 150), Array(4000001, 100), Array(4000054, 100), Array(4000124, 10), Array(2210006, 1), Array(4000243, 1), Array(4000235, 1), Array(4001083, 1));
var needItemList7 = Array(Array(1182175, 1), Array(4032733, 2), Array(4000236, 200), Array(4000039, 200), Array(4000135, 150), Array(4000032, 150), Array(4000001, 100), Array(4000054, 100), Array(4000124, 10), Array(2210006, 1), Array(4000243, 1), Array(4000235, 1), Array(4001083, 1));
var needItemList8 = Array(Array(1162037, 1), Array(4032733, 2), Array(4000236, 200), Array(4000039, 200), Array(4000135, 150), Array(4000032, 150), Array(4000001, 100), Array(4000054, 100), Array(4000124, 10), Array(2210006, 1), Array(4000243, 1), Array(4000235, 1), Array(4001083, 1));
function start() {
    status = -1;
    action(1, 0, 0);
}
function action(f, g, j) {
    if (f == -1) {
        cm.dispose();
    } else {
        if (f == 0 && status == 0) {
            cm.dispose();
            cm.openNpc(1092017, '制作大师');
            return;
        }
        if (f == 1) {
            status++;
        } else {
            status--;
        }
        if (status == 0) {
            var a = '#d我这里可以制作BOSS套装，请选择想要制作的装备：#n#k\r\n#e（制作后附加强力额外属性！！！）#n\r\n';
            for (var l in weaponList) {
                var o = weaponList[l];
                a += '#r#L' + l + '#制作 #b#v' + o + '##z' + o + '# #r[查看详情]\r\n';
            }
            cm.askMenu(a);
        } else {
            if (status == 1) {
                weaponId = j;
                if (weaponId == 0) {
                    var n = '- #e#d#z' + weaponList[weaponId] + '#需要的材料：#n#k\r\n\r\n#b';
                    for (var l in needItemList0) {
                        var p = cm.getItemName(needItemList0[l][0]);
                        n += p;
                        for (var d = 0; d <= 25 - p.getBytes().length; d++) {
                            n += ' ';
                        }
                        var k = cm.getItemQuantity(needItemList0[l][0]);
                        var c = '#g';
                        if (k < needItemList0[l][1]) {
                            c = '#r';
                        }
                        n += c + k + ' / ' + needItemList0[l][1] + ' 个#b\r\n';
                    }
                    n += '#k\r\n\r\n- #e#d管理提示：#n#b点是进行制作。点否返回上一页.#k';
                    cm.askYesNo(n);
                } else {
                    if (weaponId == 1) {
                        var n = '- #e#d#z' + weaponList[weaponId] + '#需要的材料：#n#k\r\n\r\n#b';
                        for (var l in needItemList1) {
                            var p = cm.getItemName(needItemList1[l][0]);
                            n += p;
                            for (var d = 0; d <= 25 - p.getBytes().length; d++) {
                                n += ' ';
                            }
                            var k = cm.getItemQuantity(needItemList1[l][0]);
                            var c = '#g';
                            if (k < needItemList1[l][1]) {
                                c = '#r';
                            }
                            n += c + k + ' / ' + needItemList1[l][1] + ' 个#b\r\n';
                        }
                        n += '#k\r\n\r\n- #e#d管理提示：#n#b点是进行制作。点否返回上一页.#k';
                        cm.askYesNo(n);
                    } else {
                        if (weaponId == 2) {
                            var n = '- #e#d#z' + weaponList[weaponId] + '#需要的材料：#n#k\r\n\r\n#b';
                            for (var l in needItemList2) {
                                var p = cm.getItemName(needItemList2[l][0]);
                                n += p;
                                for (var d = 0; d <= 25 - p.getBytes().length; d++) {
                                    n += ' ';
                                }
                                var k = cm.getItemQuantity(needItemList2[l][0]);
                                var c = '#g';
                                if (k < needItemList2[l][1]) {
                                    c = '#r';
                                }
                                n += c + k + ' / ' + needItemList2[l][1] + ' 个#b\r\n';
                            }
                            n += '#k\r\n\r\n- #e#d管理提示：#n#b点是进行制作。点否返回上一页.#k';
                            cm.askYesNo(n);
                        } else {
                            if (weaponId == 3) {
                                var n = '- #e#d#z' + weaponList[weaponId] + '#需要的材料：#n#k\r\n\r\n#b';
                                for (var l in needItemList3) {
                                    var p = cm.getItemName(needItemList3[l][0]);
                                    n += p;
                                    for (var d = 0; d <= 25 - p.getBytes().length; d++) {
                                        n += ' ';
                                    }
                                    var k = cm.getItemQuantity(needItemList3[l][0]);
                                    var c = '#g';
                                    if (k < needItemList3[l][1]) {
                                        c = '#r';
                                    }
                                    n += c + k + ' / ' + needItemList3[l][1] + ' 个#b\r\n';
                                }
                                n += '#k\r\n\r\n- #e#d管理提示：#n#b点是进行制作。点否返回上一页.#k';
                                cm.askYesNo(n);
                            } else {
                                if (weaponId == 4) {
                                    var n = '- #e#d#z' + weaponList[weaponId] + '#需要的材料：#n#k\r\n\r\n#b';
                                    for (var l in needItemList4) {
                                        var p = cm.getItemName(needItemList4[l][0]);
                                        n += p;
                                        for (var d = 0; d <= 25 - p.getBytes().length; d++) {
                                            n += ' ';
                                        }
                                        var k = cm.getItemQuantity(needItemList4[l][0]);
                                        var c = '#g';
                                        if (k < needItemList4[l][1]) {
                                            c = '#r';
                                        }
                                        n += c + k + ' / ' + needItemList4[l][1] + ' 个#b\r\n';
                                    }
                                    n += '#k\r\n\r\n- #e#d管理提示：#n#b点是进行制作。点否返回上一页.#k';
                                    cm.askYesNo(n);
                                } else {
                                    if (weaponId == 5) {
                                        var n = '- #e#d#z' + weaponList[weaponId] + '#需要的材料：#n#k\r\n\r\n#b';
                                        for (var l in needItemList5) {
                                            var p = cm.getItemName(needItemList5[l][0]);
                                            n += p;
                                            for (var d = 0; d <= 25 - p.getBytes().length; d++) {
                                                n += ' ';
                                            }
                                            var k = cm.getItemQuantity(needItemList5[l][0]);
                                            var c = '#g';
                                            if (k < needItemList5[l][1]) {
                                                c = '#r';
                                            }
                                            n += c + k + ' / ' + needItemList5[l][1] + ' 个#b\r\n';
                                        }
                                        n += '#k\r\n\r\n- #e#d管理提示：#n#b点是进行制作。点否返回上一页.#k';
                                        cm.askYesNo(n);
                                    } else {
                                        if (weaponId == 6) {
                                            var n = '- #e#d#z' + weaponList[weaponId] + '#需要的材料：#n#k\r\n\r\n#b';
                                            for (var l in needItemList6) {
                                                var p = cm.getItemName(needItemList6[l][0]);
                                                n += p;
                                                for (var d = 0; d <= 25 - p.getBytes().length; d++) {
                                                    n += ' ';
                                                }
                                                var k = cm.getItemQuantity(needItemList6[l][0]);
                                                var c = '#g';
                                                if (k < needItemList6[l][1]) {
                                                    c = '#r';
                                                }
                                                n += c + k + ' / ' + needItemList6[l][1] + ' 个#b\r\n';
                                            }
                                            n += '#k\r\n\r\n- #e#d管理提示：#n#b点是进行制作。点否返回上一页.#k';
                                            cm.askYesNo(n);
                                        } else {
                                            if (weaponId == 7) {
                                                var n = '- #e#d#z' + weaponList[weaponId] + '#需要的材料：#n#k\r\n\r\n#b';
                                                for (var l in needItemList7) {
                                                    var p = cm.getItemName(needItemList7[l][0]);
                                                    n += p;
                                                    for (var d = 0; d <= 25 - p.getBytes().length; d++) {
                                                        n += ' ';
                                                    }
                                                    var k = cm.getItemQuantity(needItemList7[l][0]);
                                                    var c = '#g';
                                                    if (k < needItemList7[l][1]) {
                                                        c = '#r';
                                                    }
                                                    n += c + k + ' / ' + needItemList7[l][1] + ' 个#b\r\n';
                                                }
                                                n += '#k\r\n\r\n- #e#d管理提示：#n#b点是进行制作。点否返回上一页.#k';
                                                cm.askYesNo(n);
                                            } else {
                                                if (weaponId == 8) {
                                                    var n = '- #e#d#z' + weaponList[weaponId] + '#需要的材料：#n#k\r\n\r\n#b';
                                                    for (var l in needItemList8) {
                                                        var p = cm.getItemName(needItemList8[l][0]);
                                                        n += p;
                                                        for (var d = 0; d <= 25 - p.getBytes().length; d++) {
                                                            n += ' ';
                                                        }
                                                        var k = cm.getItemQuantity(needItemList8[l][0]);
                                                        var c = '#g';
                                                        if (k < needItemList8[l][1]) {
                                                            c = '#r';
                                                        }
                                                        n += c + k + ' / ' + needItemList8[l][1] + ' 个#b\r\n';
                                                    }
                                                    n += '#k\r\n\r\n- #e#d管理提示：#n#b点是进行制作。点否返回上一页.#k';
                                                    cm.askYesNo(n);
                                                } else {
                                                    cm.playerMessage(-1, '暂未更新！');
                                                    cm.dispose();
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            } else {
                if (status == 2) {
                    flag = true;
                    if (weaponId == 0) {
                        for (var l in needItemList0) {
                            var h = needItemList0[l][0];
                            var b = needItemList0[l][1];
                            if (!cm.haveItem(h, b)) {
                                flag = false;
                                break;
                            }
                        }
                    } else {
                        if (weaponId == 1) {
                            for (var l in needItemList1) {
                                var h = needItemList1[l][0];
                                var b = needItemList1[l][1];
                                if (!cm.haveItem(h, b)) {
                                    flag = false;
                                    break;
                                }
                            }
                        } else {
                            if (weaponId == 2) {
                                for (var l in needItemList2) {
                                    var h = needItemList2[l][0];
                                    var b = needItemList2[l][1];
                                    if (!cm.haveItem(h, b)) {
                                        flag = false;
                                        break;
                                    }
                                }
                            } else {
                                if (weaponId == 3) {
                                    for (var l in needItemList3) {
                                        var h = needItemList3[l][0];
                                        var b = needItemList3[l][1];
                                        if (!cm.haveItem(h, b)) {
                                            flag = false;
                                            break;
                                        }
                                    }
                                } else {
                                    if (weaponId == 4) {
                                        for (var l in needItemList4) {
                                            var h = needItemList4[l][0];
                                            var b = needItemList4[l][1];
                                            if (!cm.haveItem(h, b)) {
                                                flag = false;
                                                break;
                                            }
                                        }
                                    } else {
                                        if (weaponId == 5) {
                                            for (var l in needItemList5) {
                                                var h = needItemList5[l][0];
                                                var b = needItemList5[l][1];
                                                if (!cm.haveItem(h, b)) {
                                                    flag = false;
                                                    break;
                                                }
                                            }
                                        } else {
                                            if (weaponId == 6) {
                                                for (var l in needItemList6) {
                                                    var h = needItemList6[l][0];
                                                    var b = needItemList6[l][1];
                                                    if (!cm.haveItem(h, b)) {
                                                        flag = false;
                                                        break;
                                                    }
                                                }
                                            } else {
                                                if (weaponId == 7) {
                                                    for (var l in needItemList7) {
                                                        var h = needItemList7[l][0];
                                                        var b = needItemList7[l][1];
                                                        if (!cm.haveItem(h, b)) {
                                                            flag = false;
                                                            break;
                                                        }
                                                    }
                                                } else {
                                                    if (weaponId == 8) {
                                                        for (var l in needItemList8) {
                                                            var h = needItemList8[l][0];
                                                            var b = needItemList8[l][1];
                                                            if (!cm.haveItem(h, b)) {
                                                                flag = false;
                                                                break;
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
                    if (flag) {
                        if (cm.getSpace(1) < 1) {
                            cm.sendOk('装备栏空间不足，请整理后重新制作！');
                            cm.dispose();
                            return;
                        }
                        if (weaponId == 0) {
                            for (var l in needItemList0) {
                                var h = needItemList0[l][0];
                                var b = needItemList0[l][1];
                                cm.gainItem(h, -b);
                            }
                        } else {
                            if (weaponId == 1) {
                                for (var l in needItemList1) {
                                    var h = needItemList1[l][0];
                                    var b = needItemList1[l][1];
                                    cm.gainItem(h, -b);
                                }
                            } else {
                                if (weaponId == 2) {
                                    for (var l in needItemList2) {
                                        var h = needItemList2[l][0];
                                        var b = needItemList2[l][1];
                                        cm.gainItem(h, -b);
                                    }
                                } else {
                                    if (weaponId == 3) {
                                        for (var l in needItemList3) {
                                            var h = needItemList3[l][0];
                                            var b = needItemList3[l][1];
                                            cm.gainItem(h, -b);
                                        }
                                    } else {
                                        if (weaponId == 4) {
                                            for (var l in needItemList4) {
                                                var h = needItemList4[l][0];
                                                var b = needItemList4[l][1];
                                                cm.gainItem(h, -b);
                                            }
                                        } else {
                                            if (weaponId == 5) {
                                                for (var l in needItemList5) {
                                                    var h = needItemList5[l][0];
                                                    var b = needItemList5[l][1];
                                                    cm.gainItem(h, -b);
                                                }
                                            } else {
                                                if (weaponId == 6) {
                                                    for (var l in needItemList6) {
                                                        var h = needItemList6[l][0];
                                                        var b = needItemList6[l][1];
                                                        cm.gainItem(h, -b);
                                                    }
                                                } else {
                                                    if (weaponId == 7) {
                                                        for (var l in needItemList7) {
                                                            var h = needItemList7[l][0];
                                                            var b = needItemList7[l][1];
                                                            cm.gainItem(h, -b);
                                                        }
                                                    } else {
                                                        if (weaponId == 8) {
                                                            for (var l in needItemList8) {
                                                                var h = needItemList8[l][0];
                                                                var b = needItemList8[l][1];
                                                                cm.gainItem(h, -b);
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
                        if (weaponId == 0) {
                            var m = cm.getItemInfo();
                            var e = m.randomizeStats(m.getEquipById(weaponList[weaponId])).copy();
                            e.setStr(10);
                            e.setDex(10);
                            e.setInt(10);
                            e.setLuk(10);
                            e.setPad(10);
                            e.setMad(10);
                            e.setSpeed(10);
                            e.setJump(10);
                            e.setMaxHp(200);
                            e.setMaxMp(200);
                            e.setBdr(1);
                            e.setImdr(1);
                            e.setDamR(1);
                            e.setStatR(1);
                            e.setPdd(20);
                            e.setMdd(20);
                            e.setTitle('' + cm.getPlayer().getName() + '');
                            cm.addFromDrop(cm.getClient(), e, false);
                        } else {
                            if (weaponId == 1) {
                                var m = cm.getItemInfo();
                                var e = m.randomizeStats(m.getEquipById(weaponList[weaponId])).copy();
                                e.setStr(13);
                                e.setDex(13);
                                e.setInt(13);
                                e.setLuk(13);
                                e.setPad(6);
                                e.setMad(6);
                                e.setSpeed(10);
                                e.setJump(10);
                                e.setMaxHp(200);
                                e.setMaxMp(200);
                                e.setBdr(1);
                                e.setImdr(1);
                                e.setDamR(1);
                                e.setStatR(1);
                                e.setPdd(20);
                                e.setMdd(20);
                                e.setTitle('' + cm.getPlayer().getName() + '');
                                cm.addFromDrop(cm.getClient(), e, false);
                            } else {
                                if (weaponId == 2) {
                                    var m = cm.getItemInfo();
                                    var e = m.randomizeStats(m.getEquipById(weaponList[weaponId])).copy();
                                    e.setStr(15);
                                    e.setDex(15);
                                    e.setInt(15);
                                    e.setLuk(15);
                                    e.setPad(11);
                                    e.setMad(11);
                                    e.setSpeed(10);
                                    e.setJump(10);
                                    e.setMaxHp(200);
                                    e.setMaxMp(200);
                                    e.setBdr(1);
                                    e.setImdr(1);
                                    e.setDamR(1);
                                    e.setStatR(1);
                                    e.setPdd(20);
                                    e.setMdd(20);
                                    e.setTitle('' + cm.getPlayer().getName() + '');
                                    cm.addFromDrop(cm.getClient(), e, false);
                                } else {
                                    if (weaponId == 3) {
                                        var m = cm.getItemInfo();
                                        var e = m.randomizeStats(m.getEquipById(weaponList[weaponId])).copy();
                                        e.setStr(25);
                                        e.setDex(25);
                                        e.setInt(25);
                                        e.setLuk(25);
                                        e.setPad(8);
                                        e.setMad(8);
                                        e.setSpeed(10);
                                        e.setJump(10);
                                        e.setMaxHp(200);
                                        e.setMaxMp(200);
                                        e.setBdr(1);
                                        e.setImdr(1);
                                        e.setDamR(1);
                                        e.setStatR(1);
                                        e.setPdd(20);
                                        e.setMdd(20);
                                        e.setTitle('' + cm.getPlayer().getName() + '');
                                        cm.addFromDrop(cm.getClient(), e, false);
                                    } else {
                                        if (weaponId == 4) {
                                            var m = cm.getItemInfo();
                                            var e = m.randomizeStats(m.getEquipById(weaponList[weaponId])).copy();
                                            e.setStr(10);
                                            e.setDex(10);
                                            e.setInt(10);
                                            e.setLuk(10);
                                            e.setPad(7);
                                            e.setMad(7);
                                            e.setSpeed(10);
                                            e.setJump(10);
                                            e.setMaxHp(200);
                                            e.setMaxMp(200);
                                            e.setBdr(1);
                                            e.setImdr(1);
                                            e.setDamR(1);
                                            e.setStatR(1);
                                            e.setPdd(20);
                                            e.setMdd(20);
                                            e.setTitle('' + cm.getPlayer().getName() + '');
                                            cm.addFromDrop(cm.getClient(), e, false);
                                        } else {
                                            if (weaponId == 5) {
                                                var m = cm.getItemInfo();
                                                var e = m.randomizeStats(m.getEquipById(weaponList[weaponId])).copy();
                                                e.setStr(10);
                                                e.setDex(10);
                                                e.setInt(10);
                                                e.setLuk(10);
                                                e.setPad(7);
                                                e.setMad(7);
                                                e.setSpeed(10);
                                                e.setJump(10);
                                                e.setMaxHp(200);
                                                e.setMaxMp(200);
                                                e.setBdr(1);
                                                e.setImdr(1);
                                                e.setDamR(1);
                                                e.setStatR(1);
                                                e.setPdd(20);
                                                e.setMdd(20);
                                                e.setTitle('' + cm.getPlayer().getName() + '');
                                                cm.addFromDrop(cm.getClient(), e, false);
                                            } else {
                                                if (weaponId == 6) {
                                                    var m = cm.getItemInfo();
                                                    var e = m.randomizeStats(m.getEquipById(weaponList[weaponId])).copy();
                                                    e.setStr(23);
                                                    e.setDex(23);
                                                    e.setInt(23);
                                                    e.setLuk(23);
                                                    e.setPad(6);
                                                    e.setMad(6);
                                                    e.setSpeed(10);
                                                    e.setJump(10);
                                                    e.setMaxHp(200);
                                                    e.setMaxMp(200);
                                                    e.setBdr(1);
                                                    e.setImdr(1);
                                                    e.setDamR(1);
                                                    e.setStatR(1);
                                                    e.setPdd(20);
                                                    e.setMdd(20);
                                                    e.setTitle('' + cm.getPlayer().getName() + '');
                                                    cm.addFromDrop(cm.getClient(), e, false);
                                                } else {
                                                    if (weaponId == 7) {
                                                        var m = cm.getItemInfo();
                                                        var e = m.randomizeStats(m.getEquipById(weaponList[weaponId])).copy();
                                                        e.setStr(15);
                                                        e.setDex(15);
                                                        e.setInt(15);
                                                        e.setLuk(15);
                                                        e.setPad(10);
                                                        e.setMad(10);
                                                        e.setSpeed(10);
                                                        e.setJump(10);
                                                        e.setMaxHp(200);
                                                        e.setMaxMp(200);
                                                        e.setBdr(1);
                                                        e.setImdr(1);
                                                        e.setDamR(1);
                                                        e.setStatR(1);
                                                        e.setPdd(20);
                                                        e.setMdd(20);
                                                        e.setTitle('' + cm.getPlayer().getName() + '');
                                                        cm.addFromDrop(cm.getClient(), e, false);
                                                    } else {
                                                        if (weaponId == 8) {
                                                            var m = cm.getItemInfo();
                                                            var e = m.randomizeStats(m.getEquipById(weaponList[weaponId])).copy();
                                                            e.setStr(10);
                                                            e.setDex(10);
                                                            e.setInt(10);
                                                            e.setLuk(10);
                                                            e.setPad(10);
                                                            e.setMad(10);
                                                            e.setSpeed(10);
                                                            e.setJump(10);
                                                            e.setMaxHp(200);
                                                            e.setMaxMp(200);
                                                            e.setBdr(1);
                                                            e.setImdr(1);
                                                            e.setDamR(1);
                                                            e.setStatR(1);
                                                            e.setPdd(20);
                                                            e.setMdd(20);
                                                            e.setTitle('' + cm.getPlayer().getName() + '');
                                                            cm.addFromDrop(cm.getClient(), e, false);
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                        cm.sendOk('恭喜您合成 #d#e『#n#k#b#v' + weaponList[weaponId] + '##z' + weaponList[weaponId] + '##k#d#e』#n#k 一个。');
                        cm.worldSpouseMessage(20, '[装备制作] : 玩家 ' + cm.getPlayer().getName() + ' 制作了一件 <完美的 ' + cm.getItemName(weaponList[weaponId]) + '>.');
                        cm.playerMessage(-1, '道具制作完成!!');
                        cm.dispose();
                    } else {
                        if (cm.getPlayer().isGM()) {
                            var m = cm.getItemInfo();
                            var e = m.randomizeStats(m.getEquipById(weaponList[weaponId])).copy();
                            e.setStr(10);
                            e.setDex(10);
                            e.setInt(10);
                            e.setLuk(10);
                            e.setPad(10);
                            e.setMad(10);
                            e.setPdd(20);
                            e.setMdd(20);
                            e.setSpeed(10);
                            e.setJump(10);
                            e.setMaxHp(200);
                            e.setMaxMp(200);
                            e.setBdr(12);
                            e.setImdr(12);
                            e.setDamR(12);
                            e.setStatR(12);
                            e.setTitle('' + cm.getPlayer().getName() + '');
                            cm.addFromDrop(cm.getClient(), e, false);
                            cm.sendOk('恭喜您合成 #d#e『#n#k#b#v' + weaponList[weaponId] + '##z' + weaponList[weaponId] + '##k#d#e』#n#k 一个。');
                            cm.worldSpouseMessage(20, '[GM测试] : 本服GM ' + cm.getPlayer().getName() + ' 制作了一件 <完美的 ' + cm.getItemName(weaponList[weaponId]) + '>.');
                            cm.playerMessage(-1, '道具制作完成!!');
                            cm.dispose();
                        } else {
                            cm.sendOk('材料不足，无法完成制作！');
                            cm.dispose();
                        }
                    }
                }
            }
        }
    }
}