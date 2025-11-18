var status = 0;
var pet = null;
var theitems = Array();
function start() {
    status = -1;
    action(1, 0, 0);
}
function action(k, e, r) {
    if (k == -1) {
        cm.dispose();
    } else {
        if (k == 0) {
            cm.dispose();
            return;
        }
        if (k == 1) {
            status++;
        } else {
            status--;
        }
        if (status == 0) {
            cm.askMenu('                     #e#r[#d宠物小屋#r]#b\r\n              #L3##r【#b随机神宠#r】#n#l#k\r\n       #L0#进化龙#l#L1#进化机器人#l #L2#治疗我的宠物#l\r\n\r\n#d   提示:如果随机宠物出现38错误，请联系管理员#b#l\r\n                     #e#r神宠展示\r\n#r————————————————————————\r\n#r#i5000137##k,#r#i5000103##k,#r#i5000038##k#r#i5000128##k,#r#i5000096##k,#r#i5000026##k,#r#i5000093##k,#r#i5000092##k,#r#i5000091##k,#r#i5000027##k,#r#i5000081##k,#r#i5000072##k,#r#i5000038##k,#r#i5000054##k,#r#i5000203##k,#r#i5000204##k,#r#i5000205##k,#r#i5000208##k,#r#i5000209##k,#r#i5000212##k,#r#i5000213##k,#r#i5000214##k,#r#i5000206##k,#r#i5000215##k,#r#i5000216##k,#r#i5000217##k,#r#i5000221##k,#r#i5000225##k,#r#i5000228##k,#r#i5000229##k,#r#i5000230##k,#r#i5000237##k,#r#i5000243##k,#r#i5000244##k,#r#i5000245##k,#r#i5000284##k,#r#i5000247##k,#r#i5000285##k,#r#i5000252##k,#r#i5000253##k,#r#i5000324##i5000433##i5000434##i5000435##i5000414##i5000424##i5000409##i5000408##i5000407##i5000406##i5000405##i5000402##i5000390##i5000389##i5000388##i5000391##i5001011##i5001010##i5001009##i5000308##i5000307##i5000306##i5000255##i5000382##i5000191##i5000261##i5000251##i5000250##i5000249##i5000258##i5000257##i5000256##i5000365##i5000366##i5000367##i5000287##i5000288##i5000289##i5000369##i5000370##i5000371##i5000331##i5000330##i5000332##i5000055##i5000416##i5000417##i5000415##k');
        } else {
            if (status == 1) {
                if (r == 0) {
                    var f = null;
                    for (var p = 0; p < 3; p++) {
                        f = cm.getPlayer().getSpawnPet(p);
                        if (f != null && pet == null) {
                            if (f.getSummoned() && f.getPetItemId() > 5000028 && f.getPetItemId() <= 5000035 && f.getLevel() >= 15) {
                                pet = f;
                                break;
                            }
                        }
                    }
                    if (pet == null || !cm.haveItem(5380000, 1)) {
                        cm.sendOk('你不符合要求。你需要 #i5380000##t5380000#, 以及任何一个 #d#i5000029##t5000029##k, #g#i5000030##t5000030##k, #r#i5000035##t5000035##k, #b#i5000032##t5000032##k, or #e#i5000033##t5000033##n 设置在15级或更高。请回来的时候你做的.');
                        cm.dispose();
                    } else {
                        var m = pet.getPetItemId();
                        var s = pet.getName();
                        var b = pet.getLevel();
                        var h = pet.getCloseness();
                        var n = pet.getFullness();
                        var d = pet.getInventoryPosition();
                        var o = pet.getFlags();
                        var q = 0;
                        var c = m;
                        while (c == m) {
                            q = 1 + Math.floor(Math.random() * 10);
                            if (q >= 1 && q <= 3) {
                                c = 5000030;
                            } else {
                                if (q >= 4 && q <= 6) {
                                    c = 5000032;
                                } else {
                                    if (q >= 7 && q <= 9) {
                                        c = 5000035;
                                    } else {
                                        if (q == 10) {
                                            c = 5000033;
                                        }
                                    }
                                }
                            }
                        }
                        if (s.equals(cm.getItemName(m))) {
                            s = cm.getItemName(c);
                        }
                        cm.getPlayer().unequipSpawnPet(pet, true, false);
                        cm.gainItem(5380000, -1);
                        cm.removeSlot(5, d, 1);
                        cm.gainPet(c, s, b, h, n, 45, o);
                        cm.getPlayer().spawnPet(d);
                        cm.sendOk('你的龙已经演变！它曾经是一个#i' + m + '##t' + m + '#, a现在它是一个 #i' + c + '##t' + c + '#!');
                        cm.dispose();
                    }
                } else {
                    if (r == 1) {
                        var f = null;
                        for (var p = 0; p < 3; p++) {
                            f = cm.getPlayer().getSpawnPet(p);
                            if (f != null && pet == null) {
                                if (f.getSummoned() && f.getPetItemId() > 5000047 && f.getPetItemId() < 5000054 && f.getLevel() >= 15) {
                                    pet = f;
                                    break;
                                }
                            }
                        }
                        if (pet == null || !cm.haveItem(5380000, 1)) {
                            cm.sendOk('你不符合要求。你需要 #i5380000##t5380000#, 以及任何一个 #g#i5000048##t5000048##k, #r#i5000049##t5000049##k, #b#i5000050##t5000050##k, #d#i5000051##t5000051##k, #d#i5000052##t5000052##k, or #e#i5000053##t5000053##n 设置在15级或更高。请回来当你这样做的.');
                            cm.dispose();
                        } else {
                            var m = pet.getPetItemId();
                            var s = pet.getName();
                            var b = pet.getLevel();
                            var h = pet.getCloseness();
                            var n = pet.getFullness();
                            var d = pet.getInventoryPosition();
                            var o = pet.getFlags();
                            var q = 0;
                            var c = m;
                            while (c == m) {
                                q = 1 + Math.floor(Math.random() * 9);
                                if (q >= 1 && q <= 2) {
                                    c = 5000049;
                                } else {
                                    if (q >= 3 && q <= 4) {
                                        c = 5000050;
                                    } else {
                                        if (q >= 5 && q <= 6) {
                                            c = 5000051;
                                        } else {
                                            if (q >= 7 && q <= 8) {
                                                c = 5000052;
                                            } else {
                                                if (q == 9) {
                                                    c = 5000053;
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                            if (s.equals(cm.getItemName(m))) {
                                s = cm.getItemName(c);
                            }
                            cm.getPlayer().unequipSpawnPet(pet, true, false);
                            cm.gainItem(5380000, -1);
                            cm.removeSlot(5, d, 1);
                            cm.gainPet(c, s, b, h, n, 45, o);
                            cm.getPlayer().spawnPet(d);
                            cm.sendOk('你的机器人已经演变！它使用的是一个！#i' + m + '##t' + m + '#, 现在它是一个 #i' + c + '##t' + c + '#!');
                            cm.dispose();
                        }
                    } else {
                        if (r == 3) {
                            var f = null;
                            for (var p = 0; p < 3; p++) {
                                f = cm.getPlayer().getSpawnPet(p);
                                if (f != null && pet == null) {
                                    if (f.getSummoned() && f.getPetItemId() >= 5000047 && f.getPetItemId() <= 5000054 && f.getLevel() >= 18) {
                                        pet = f;
                                        break;
                                    }
                                }
                            }
                            if (pet == null || !cm.haveItem(5380000, 1) || !cm.haveItem(4000000, 200) || !cm.getMeso() >= 30000000) {
                                cm.sendOk('你不符合要求。#b你需要1个#i5380000##t5380000#，以及1个18级的#i5000048##t5000048#和200个梦想#v4000000#+3000万金币#k\r\nP:进化之石和#i5000047#和升级机器人的轻油可在商城购买\r\n               #e#r随机给你一个，请好好对待\r\n#r————————————————————————\r\n#r#i5000137##k,#r#i5000103##k,#r#i5000038##k#r#i5000128##k,#r#i5000096##k,#r#i5000026##k,#r#i5000093##k,#r#i5000092##k,#r#i5000091##k,#r#i5000027##k,#r#i5000081##k,#r#i5000072##k,#r#i5000038##k,#r#i5000054##k,#r#i5000203##k,#r#i5000204##k,#r#i5000205##k,#r#i5000208##k,#r#i5000209##k,#r#i5000212##k,#r#i5000213##k,#r#i5000214##k,#r#i5000206##k,#r#i5000215##k,#r#i5000216##k,#r#i5000217##k,#r#i5000221##k,#r#i5000225##k,#r#i5000228##k,#r#i5000229##k,#r#i5000230##k,#r#i5000237##k,#r#i5000243##k,#r#i5000244##k,#r#i5000245##k,#r#i5000284##k,#r#i5000247##k,#r#i5000285##k,#r#i5000252##k,#r#i5000253##k,#r#i5000324##i5000433##i5000434##i5000435##i5000414##i5000424##i5000409##i5000408##i5000407##i5000406##i5000405##i5000402##i5000390##i5000389##i5000388##i5000391##i5001011##i5001010##i5001009##i5000308##i5000307##i5000306##i5000255##i5000382##i5000191##i5000261##i5000251##i5000250##i5000249##i5000258##i5000257##i5000256##i5000365##i5000366##i5000367##i5000287##i5000288##i5000289##i5000369##i5000370##i5000371##i5000331##i5000330##i5000332##i5000055##i5000416##i5000417##i5000415##k');
                                cm.dispose();
                            } else {
                                var m = pet.getPetItemId();
                                var s = pet.getName();
                                var b = pet.getLevel();
                                var h = pet.getCloseness();
                                var n = pet.getFullness();
                                var d = pet.getInventoryPosition();
                                var o = pet.getFlags();
                                var q = 0;
                                var c = m;
                                while (c == m) {
                                    q = 1 + Math.floor(Math.random() * 177);
                                    if (q >= 1 && q <= 2) {
                                        c = 5000096;
                                    } else {
                                        if (q >= 3 && q <= 4) {
                                            c = 5000026;
                                        } else {
                                            if (q >= 5 && q <= 6) {
                                                c = 5000137;
                                            } else {
                                                if (q >= 7 && q <= 8) {
                                                    c = 5000103;
                                                } else {
                                                    if (q >= 9 && q <= 10) {
                                                        c = 5000038;
                                                    } else {
                                                        if (q >= 11 && q <= 12) {
                                                            c = 5000128;
                                                        } else {
                                                            if (q >= 13 && q <= 14) {
                                                                c = 5000093;
                                                            } else {
                                                                if (q >= 15 && q <= 16) {
                                                                    c = 5000092;
                                                                } else {
                                                                    if (q >= 17 && q <= 18) {
                                                                        c = 5000091;
                                                                    } else {
                                                                        if (q >= 19 && q <= 20) {
                                                                            c = 5000027;
                                                                        } else {
                                                                            if (q >= 21 && q <= 22) {
                                                                                c = 5000081;
                                                                            } else {
                                                                                if (q >= 23 && q <= 24) {
                                                                                    c = 5000072;
                                                                                } else {
                                                                                    if (q >= 25 && q <= 26) {
                                                                                        c = 5000038;
                                                                                    } else {
                                                                                        if (q >= 27 && q <= 28) {
                                                                                            c = 5000054;
                                                                                        } else {
                                                                                            if (q >= 29 && q <= 30) {
                                                                                                c = 5000203;
                                                                                            } else {
                                                                                                if (q >= 31 && q <= 32) {
                                                                                                    c = 5000204;
                                                                                                } else {
                                                                                                    if (q >= 33 && q <= 34) {
                                                                                                        c = 5000205;
                                                                                                    } else {
                                                                                                        if (q >= 35 && q <= 36) {
                                                                                                            c = 5000208;
                                                                                                        } else {
                                                                                                            if (q >= 37 && q <= 38) {
                                                                                                                c = 5000209;
                                                                                                            } else {
                                                                                                                if (q >= 39 && q <= 40) {
                                                                                                                    c = 5000212;
                                                                                                                } else {
                                                                                                                    if (q >= 41 && q <= 42) {
                                                                                                                        c = 5000213;
                                                                                                                    } else {
                                                                                                                        if (q >= 43 && q <= 44) {
                                                                                                                            c = 5000214;
                                                                                                                        } else {
                                                                                                                            if (q >= 45 && q <= 46) {
                                                                                                                                c = 5000206;
                                                                                                                            } else {
                                                                                                                                if (q >= 47 && q <= 48) {
                                                                                                                                    c = 5000215;
                                                                                                                                } else {
                                                                                                                                    if (q >= 49 && q <= 50) {
                                                                                                                                        c = 5000215;
                                                                                                                                    } else {
                                                                                                                                        if (q >= 51 && q <= 52) {
                                                                                                                                            c = 5000216;
                                                                                                                                        } else {
                                                                                                                                            if (q >= 53 && q <= 54) {
                                                                                                                                                c = 5000217;
                                                                                                                                            } else {
                                                                                                                                                if (q >= 55 && q <= 56) {
                                                                                                                                                    c = 5000221;
                                                                                                                                                } else {
                                                                                                                                                    if (q >= 57 && q <= 58) {
                                                                                                                                                        c = 5000225;
                                                                                                                                                    } else {
                                                                                                                                                        if (q >= 59 && q <= 60) {
                                                                                                                                                            c = 5000228;
                                                                                                                                                        } else {
                                                                                                                                                            if (q >= 61 && q <= 62) {
                                                                                                                                                                c = 5000229;
                                                                                                                                                            } else {
                                                                                                                                                                if (q >= 63 && q <= 64) {
                                                                                                                                                                    c = 5000230;
                                                                                                                                                                } else {
                                                                                                                                                                    if (q >= 65 && q <= 66) {
                                                                                                                                                                        c = 5000237;
                                                                                                                                                                    } else {
                                                                                                                                                                        if (q >= 67 && q <= 68) {
                                                                                                                                                                            c = 5000243;
                                                                                                                                                                        } else {
                                                                                                                                                                            if (q >= 69 && q <= 70) {
                                                                                                                                                                                c = 5000244;
                                                                                                                                                                            } else {
                                                                                                                                                                                if (q >= 71 && q <= 72) {
                                                                                                                                                                                    c = 5000284;
                                                                                                                                                                                } else {
                                                                                                                                                                                    if (q >= 73 && q <= 74) {
                                                                                                                                                                                        c = 5000247;
                                                                                                                                                                                    } else {
                                                                                                                                                                                        if (q >= 75 && q <= 76) {
                                                                                                                                                                                            c = 5000285;
                                                                                                                                                                                        } else {
                                                                                                                                                                                            if (q >= 77 && q <= 78) {
                                                                                                                                                                                                c = 5000252;
                                                                                                                                                                                            } else {
                                                                                                                                                                                                if (q >= 79 && q <= 80) {
                                                                                                                                                                                                    c = 5000253;
                                                                                                                                                                                                } else {
                                                                                                                                                                                                    if (q >= 81 && q <= 82) {
                                                                                                                                                                                                        c = 5000324;
                                                                                                                                                                                                    } else {
                                                                                                                                                                                                        if (q >= 83 && q <= 84) {
                                                                                                                                                                                                            c = 5000433;
                                                                                                                                                                                                        } else {
                                                                                                                                                                                                            if (q >= 85 && q <= 86) {
                                                                                                                                                                                                                c = 5000434;
                                                                                                                                                                                                            } else {
                                                                                                                                                                                                                if (q >= 87 && q <= 88) {
                                                                                                                                                                                                                    c = 5000435;
                                                                                                                                                                                                                } else {
                                                                                                                                                                                                                    if (q >= 89 && q <= 90) {
                                                                                                                                                                                                                        c = 5000414;
                                                                                                                                                                                                                    } else {
                                                                                                                                                                                                                        if (q >= 91 && q <= 92) {
                                                                                                                                                                                                                            c = 5000424;
                                                                                                                                                                                                                        } else {
                                                                                                                                                                                                                            if (q >= 93 && q <= 94) {
                                                                                                                                                                                                                                c = 5000409;
                                                                                                                                                                                                                            } else {
                                                                                                                                                                                                                                if (q >= 95 && q <= 96) {
                                                                                                                                                                                                                                    c = 5000408;
                                                                                                                                                                                                                                } else {
                                                                                                                                                                                                                                    if (q >= 97 && q <= 98) {
                                                                                                                                                                                                                                        c = 5000407;
                                                                                                                                                                                                                                    } else {
                                                                                                                                                                                                                                        if (q >= 99 && q <= 100) {
                                                                                                                                                                                                                                            c = 5000406;
                                                                                                                                                                                                                                        } else {
                                                                                                                                                                                                                                            if (q >= 101 && q <= 102) {
                                                                                                                                                                                                                                                c = 5000405;
                                                                                                                                                                                                                                            } else {
                                                                                                                                                                                                                                                if (q >= 103 && q <= 104) {
                                                                                                                                                                                                                                                    c = 5000404;
                                                                                                                                                                                                                                                } else {
                                                                                                                                                                                                                                                    if (q >= 105 && q <= 106) {
                                                                                                                                                                                                                                                        c = 5000331;
                                                                                                                                                                                                                                                    } else {
                                                                                                                                                                                                                                                        if (q >= 107 && q <= 108) {
                                                                                                                                                                                                                                                            c = 5000330;
                                                                                                                                                                                                                                                        } else {
                                                                                                                                                                                                                                                            if (q >= 109 && q <= 110) {
                                                                                                                                                                                                                                                                c = 5000390;
                                                                                                                                                                                                                                                            } else {
                                                                                                                                                                                                                                                                if (q >= 111 && q <= 112) {
                                                                                                                                                                                                                                                                    c = 5000389;
                                                                                                                                                                                                                                                                } else {
                                                                                                                                                                                                                                                                    if (q >= 113 && q <= 114) {
                                                                                                                                                                                                                                                                        c = 5000388;
                                                                                                                                                                                                                                                                    } else {
                                                                                                                                                                                                                                                                        if (q >= 115 && q <= 116) {
                                                                                                                                                                                                                                                                            c = 5000391;
                                                                                                                                                                                                                                                                        } else {
                                                                                                                                                                                                                                                                            if (q >= 117 && q <= 118) {
                                                                                                                                                                                                                                                                                c = 5001011;
                                                                                                                                                                                                                                                                            } else {
                                                                                                                                                                                                                                                                                if (q >= 119 && q <= 120) {
                                                                                                                                                                                                                                                                                    c = 5001010;
                                                                                                                                                                                                                                                                                } else {
                                                                                                                                                                                                                                                                                    if (q >= 121 && q <= 122) {
                                                                                                                                                                                                                                                                                        c = 5001009;
                                                                                                                                                                                                                                                                                    } else {
                                                                                                                                                                                                                                                                                        if (q >= 123 && q <= 124) {
                                                                                                                                                                                                                                                                                            c = 5000255;
                                                                                                                                                                                                                                                                                        } else {
                                                                                                                                                                                                                                                                                            if (q >= 125 && q <= 126) {
                                                                                                                                                                                                                                                                                                c = 5000308;
                                                                                                                                                                                                                                                                                            } else {
                                                                                                                                                                                                                                                                                                if (q >= 127 && q <= 128) {
                                                                                                                                                                                                                                                                                                    c = 5000307;
                                                                                                                                                                                                                                                                                                } else {
                                                                                                                                                                                                                                                                                                    if (q >= 129 && q <= 130) {
                                                                                                                                                                                                                                                                                                        c = 5000306;
                                                                                                                                                                                                                                                                                                    } else {
                                                                                                                                                                                                                                                                                                        if (q >= 131 && q <= 132) {
                                                                                                                                                                                                                                                                                                            c = 5000365;
                                                                                                                                                                                                                                                                                                        } else {
                                                                                                                                                                                                                                                                                                            if (q >= 133 && q <= 134) {
                                                                                                                                                                                                                                                                                                                c = 5000382;
                                                                                                                                                                                                                                                                                                            } else {
                                                                                                                                                                                                                                                                                                                if (q >= 135 && q <= 136) {
                                                                                                                                                                                                                                                                                                                    c = 5000256;
                                                                                                                                                                                                                                                                                                                } else {
                                                                                                                                                                                                                                                                                                                    if (q >= 137 && q <= 138) {
                                                                                                                                                                                                                                                                                                                        c = 5000055;
                                                                                                                                                                                                                                                                                                                    } else {
                                                                                                                                                                                                                                                                                                                        if (q >= 139 && q <= 140) {
                                                                                                                                                                                                                                                                                                                            c = 5000251;
                                                                                                                                                                                                                                                                                                                        } else {
                                                                                                                                                                                                                                                                                                                            if (q >= 141 && q <= 142) {
                                                                                                                                                                                                                                                                                                                                c = 5000094;
                                                                                                                                                                                                                                                                                                                            } else {
                                                                                                                                                                                                                                                                                                                                if (q >= 143 && q <= 144) {
                                                                                                                                                                                                                                                                                                                                    c = 5000365;
                                                                                                                                                                                                                                                                                                                                } else {
                                                                                                                                                                                                                                                                                                                                    if (q >= 145 && q <= 146) {
                                                                                                                                                                                                                                                                                                                                        c = 5000366;
                                                                                                                                                                                                                                                                                                                                    } else {
                                                                                                                                                                                                                                                                                                                                        if (q >= 147 && q <= 148) {
                                                                                                                                                                                                                                                                                                                                            c = 5000367;
                                                                                                                                                                                                                                                                                                                                        } else {
                                                                                                                                                                                                                                                                                                                                            if (q >= 149 && q <= 150) {
                                                                                                                                                                                                                                                                                                                                                c = 5000287;
                                                                                                                                                                                                                                                                                                                                            } else {
                                                                                                                                                                                                                                                                                                                                                if (q >= 151 && q <= 152) {
                                                                                                                                                                                                                                                                                                                                                    c = 5000288;
                                                                                                                                                                                                                                                                                                                                                } else {
                                                                                                                                                                                                                                                                                                                                                    if (q >= 153 && q <= 154) {
                                                                                                                                                                                                                                                                                                                                                        c = 5000289;
                                                                                                                                                                                                                                                                                                                                                    } else {
                                                                                                                                                                                                                                                                                                                                                        if (q >= 155 && q <= 156) {
                                                                                                                                                                                                                                                                                                                                                            c = 5000249;
                                                                                                                                                                                                                                                                                                                                                        } else {
                                                                                                                                                                                                                                                                                                                                                            if (q >= 157 && q <= 158) {
                                                                                                                                                                                                                                                                                                                                                                c = 5000250;
                                                                                                                                                                                                                                                                                                                                                            } else {
                                                                                                                                                                                                                                                                                                                                                                if (q >= 159 && q <= 160) {
                                                                                                                                                                                                                                                                                                                                                                    c = 5000257;
                                                                                                                                                                                                                                                                                                                                                                } else {
                                                                                                                                                                                                                                                                                                                                                                    if (q >= 161 && q <= 162) {
                                                                                                                                                                                                                                                                                                                                                                        c = 5000258;
                                                                                                                                                                                                                                                                                                                                                                    } else {
                                                                                                                                                                                                                                                                                                                                                                        if (q >= 163 && q <= 164) {
                                                                                                                                                                                                                                                                                                                                                                            c = 5000369;
                                                                                                                                                                                                                                                                                                                                                                        } else {
                                                                                                                                                                                                                                                                                                                                                                            if (q >= 165 && q <= 166) {
                                                                                                                                                                                                                                                                                                                                                                                c = 5000370;
                                                                                                                                                                                                                                                                                                                                                                            } else {
                                                                                                                                                                                                                                                                                                                                                                                if (q >= 167 && q <= 168) {
                                                                                                                                                                                                                                                                                                                                                                                    c = 5000371;
                                                                                                                                                                                                                                                                                                                                                                                } else {
                                                                                                                                                                                                                                                                                                                                                                                    if (q >= 169 && q <= 170) {
                                                                                                                                                                                                                                                                                                                                                                                        c = 5000332;
                                                                                                                                                                                                                                                                                                                                                                                    } else {
                                                                                                                                                                                                                                                                                                                                                                                        if (q >= 171 && q <= 172) {
                                                                                                                                                                                                                                                                                                                                                                                            c = 5000417;
                                                                                                                                                                                                                                                                                                                                                                                        } else {
                                                                                                                                                                                                                                                                                                                                                                                            if (q >= 173 && q <= 174) {
                                                                                                                                                                                                                                                                                                                                                                                                c = 5000416;
                                                                                                                                                                                                                                                                                                                                                                                            } else {
                                                                                                                                                                                                                                                                                                                                                                                                if (q >= 175 && q <= 176) {
                                                                                                                                                                                                                                                                                                                                                                                                    c = 5000415;
                                                                                                                                                                                                                                                                                                                                                                                                } else {
                                                                                                                                                                                                                                                                                                                                                                                                    if (q == 177) {
                                                                                                                                                                                                                                                                                                                                                                                                        c = 5000245;
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
                                                }
                                            }
                                        }
                                    }
                                }
                                if (s.equals(cm.getItemName(m))) {
                                    s = cm.getItemName(c);
                                }
                                cm.getPlayer().unequipSpawnPet(pet, true, false);
                                cm.gainItem(5380000, -1);
                                cm.gainItem(4000000, -200);
                                cm.gainMeso(-30000000);
                                cm.removeSlot(5, d, 1);
                                cm.gainPet(c, s, b, h, n, 45, o);
                                cm.getPlayer().spawnPet(d);
                                cm.sendOk('你的宠物已经演变！它使用的是一个！#i' + m + '##t' + m + '#, 现在它是一个 #i' + c + '##t' + c + '#!');
                                cm.worldSpouseMessage(1, '『宠物进化』 : 玩家 ' + cm.getPlayer().getName() + ' 在宠物店孵化出了新的生命!');
                                cm.dispose();
                            }
                        } else {
                            if (r == 2) {
                                var a = cm.getInventory(5);
                                var l = cm.getPlayer().getPets();
                                for (var p = 0; p <= a.getSlotLimit(); p++) {
                                    var g = a.getItem(p);
                                    if (g != null && g.getItemId() >= 5000000 && g.getItemId() < 5010000 && g.getExpiration() >= 0 && g.getExpiration() < cm.getCurrentTime()) {
                                        theitems.push(g);
                                    }
                                }
                                if (theitems.length <= 0) {
                                    cm.sendOk('你有没有过期的宠物');
                                    cm.dispose();
                                } else {
                                    var j = '请选择宠物复活。你需要生活的水使它复活.#b\r\n';
                                    for (var p = 0; p < theitems.length; p++) {
                                        j += '\r\n#L' + p + '##v' + theitems[p].getItemId() + '##i' + theitems[p].getItemId() + '##l';
                                    }
                                    cm.askMenu(j);
                                }
                            }
                        }
                    }
                }
            } else {
                if (status == 2) {
                    if (theitems.length <= 0) {
                        cm.sendOk('你有没有过期的宠物');
                    } else {
                        if (!cm.haveItem(5180000, 1) || !cm.haveItem(5180001, 1)) {
                            cm.sendOk('你会需要的e #v5180000##i5180000#.');
                        } else {
                            theitems[r].setExpiration(cm.getCurrentTime() + 45 * 24 * 60 * 60 * 1000);
                            cm.getPlayer().fakeRelog();
                            cm.sendOk('全部完成。你的宠物的寿命已延长到45天从今天。');
                            if (cm.haveItem(5180000, 1)) {
                                cm.gainItem(5180000, -1);
                            } else {
                                cm.gainItem(5180001, -1);
                            }
                        }
                    }
                    cm.dispose();
                }
            }
        }
    }
}