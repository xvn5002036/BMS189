var status = -1;
var selectionLog = [];
function start() {
    action(1, 0, 0);
}
function action(e, c, b) {
    if (status == 0 && e == 0) {
        cm.dispose();
        return;
    }
    e == 1 ? status++ : status--;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose();
    } else {
        if (status === a++) {
            var d = '#fn微软雅黑##fs20##e学习缺失技能:#n\r\n#fs13#';
            d += '#b#L1#学习 #s20011024##s80001000# 群宠骑宠技能#l\r\n';
            d += '#b#L3#学习 #s10000252# 骑士团二段跳技能#l\r\n';
            d += '#b#L4#学习 #s155101006# 影魂异人控制侵蚀技能#l\r\n';
            d += '#b#L5#学习 #s11121000# 骑士团希纳斯的骑士技能#l\r\n';
            d += '#b#L6#学习 #s60011005##s60010217# 爆莉萌天使释世书系列#l\r\n';
            cm.askMenu(d);
        } else {
            if (status === a++) {
                if (b == 1) {
                    if (cm.getPlayer().getSkillLevel(8) > 0 || cm.getPlayer().getSkillLevel(10000018) > 0 || cm.getPlayer().getSkillLevel(20000024) > 0 || cm.getPlayer().getSkillLevel(20011024) > 0) {
                        cm.sendOk('您已经学习过这个技能。');
                    } else {
                        if (cm.getJob() == 2001 || cm.getJob() >= 2200 && cm.getJob() <= 2218) {
                            cm.teachSkill(20011024, 1, 0);
                        } else {
                            if (cm.getJob() == 2000 || cm.getJob() >= 2100 && cm.getJob() <= 2112) {
                                cm.teachSkill(20000024, 1, 0);
                            } else {
                                if (cm.getJob() >= 1000 && cm.getJob() <= 1512) {
                                    cm.teachSkill(10000018, 1, 0);
                                } else {
                                    cm.teachSkill(8, 1, 0);
                                }
                            }
                        }
                        cm.teachSkill(80001000, 1, 1);
                        cm.teachSkill(40011032, 1, 1);
                        cm.teachSkill(40021032, 1, 1);
                        cm.teachSkill(80001025, 1, 1);
                        cm.teachSkill(80011142, 1, 1);
                        cm.teachSkill(80011148, 1, 1);
                        cm.sendOk('恭喜您学习技能成功。');
                    }
                    cm.dispose();
                } else {
                    if (b == 3) {
                        cm.teachSkill(10000252, 1, 1);
                        cm.teachSkill(10001253, 1, 1);
                        cm.teachSkill(10001254, 1, 1);
                        cm.dispose();
                        cm.sendOk('恭喜您学习技能成功16。');
                    } else {
                        if (b == 5) {
                            if (cm.getJob() == 2700 || cm.getJob() == 2710 || cm.getJob() == 2711 || cm.getJob() == 2712) {
                                cm.teachSkill(27000106, 5, 5);
                                cm.teachSkill(27001100, 20, 20);
                                cm.sendOk('恭喜您技能学习成功');
                            } else {
                                cm.sendOk('你不属于该职业群');
                            }
                            cm.dispose();
                        } else {
                            if (b == 4) {
                                if (cm.getJob() == 15510 || cm.getJob() == 15511 || cm.getJob() == 15512) {
                                    cm.teachSkill(155101006, 1, 1);
                                    cm.playerMessage(1, '恭喜您学习控制侵蚀技能成功。');
                                } else {
                                    cm.playerMessage(1, '你不属于该职业群');
                                }
                                cm.dispose();
                            } else {
                                if (b == 5) {
                                    switch (cm.getJob()) {
                                    case 1112:
                                        cm.teachSkill(11121000, 30, 30);
                                        cm.dispose();
                                        cm.playerMessage(1, '恭喜您学习希纳斯的骑士技能成功。');
                                        break;
                                    case 1212:
                                        cm.teachSkill(12121000, 30, 30);
                                        cm.dispose();
                                        cm.playerMessage(1, '恭喜您学习希纳斯的骑士技能成功。');
                                        break;
                                    case 1312:
                                        cm.teachSkill(13121000, 30, 30);
                                        cm.dispose();
                                        cm.playerMessage(1, '恭喜您学习希纳斯的骑士技能成功。');
                                        break;
                                    case 1412:
                                        cm.teachSkill(14121000, 30, 30);
                                        cm.dispose();
                                        cm.playerMessage(1, '恭喜您学习希纳斯的骑士技能成功。');
                                        break;
                                    case 1512:
                                        cm.teachSkill(15121000, 30, 30);
                                        cm.dispose();
                                        cm.playerMessage(1, '恭喜您学习希纳斯的骑士技能成功。');
                                        break;
                                    }
                                } else {
                                    if (b == 6) {
                                        if (cm.getJob() == 6512 && cm.getLevel() >= 200) {
                                            cm.teachSkill(60011005, 1, 1);
                                            cm.teachSkill(60010217, 1, 1);
                                            cm.dispose();
                                            cm.playerMessage(1, '恭喜您学习专注,真释世书技能成功。');
                                        } else {
                                            cm.dispose();
                                            cm.playerMessage(1, '此技能是爆莉萌天使5转后才可以学的。');
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            } else {
                cm.dispose();
            }
        }
    }
}