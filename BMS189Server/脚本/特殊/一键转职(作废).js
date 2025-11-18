var status = -1;
var jobData = new Array(Array('战士', 100, 999), Array('剑客', 110, 999), Array('勇士', 111, 999), Array('英雄', 112, 999), Array('准骑士', 120, 999), Array('骑士', 121, 999), Array('圣骑士', 122, 999), Array('枪战士', 130, 999), Array('龙骑士', 131, 999), Array('黑骑士', 132, 999), Array('魔法师', 200, 999), Array('火毒法师', 210, 999), Array('火毒巫师', 211, 999), Array('火毒魔导士', 212, 999), Array('冰雷法师', 220, 999), Array('冰雷巫师', 221, 999), Array('冰雷魔导士', 222, 999), Array('牧师', 230, 999), Array('祭司', 231, 999), Array('主教', 232, 999), Array('弓箭手', 300, 999), Array('猎人', 310, 999), Array('射手', 311, 999), Array('神射手', 312, 999), Array('弩弓手', 320, 999), Array('游侠', 321, 999), Array('箭神', 322, 999), Array('古迹猎人1转', 301, 999), Array('古迹猎人2转', 330, 999), Array('古迹猎人3转', 331, 999), Array('古迹猎人4转', 332, 999), Array('飞侠', 400, 999), Array('刺客', 410, 999), Array('无影人', 411, 999), Array('隐士', 412, 999), Array('侠客', 420, 999), Array('独行客', 421, 999), Array('侠盗', 422, 999), Array('海盗', 500, 999), Array('拳手', 510, 999), Array('斗士', 511, 999), Array('冲锋队长', 512, 999), Array('火枪手', 520, 999), Array('大副', 521, 999), Array('船长', 522, 999), Array('魂骑士（一转）', 1100, 9), Array('魂骑士（二转）', 1110, 9), Array('魂骑士（三转）', 1111, 9), Array('魂骑士（四转）', 1112, 9), Array('炎术士（一转）', 1200, 9), Array('炎术士（二转）', 1210, 9), Array('炎术士（三转）', 1211, 9), Array('炎术士（四转）', 1212, 9), Array('风灵使者（一转）', 1300, 9), Array('风灵使者（二转）', 1310, 9), Array('风灵使者（三转）', 1311, 9), Array('风灵使者（四转）', 1312, 9), Array('夜行者（一转）', 1400, 9), Array('夜行者（二转）', 1410, 9), Array('夜行者（三转）', 1411, 9), Array('夜行者（四转）', 1412, 9), Array('奇袭者（一转）', 1500, 9), Array('奇袭者（二转）', 1510, 9), Array('奇袭者（三转）', 1511, 9), Array('奇袭者（四转）', 1512, 9), Array('战神（一转）', 2100, 0), Array('战神（二转）', 2110, 0), Array('战神（三转）', 2111, 0), Array('战神（四转）', 2112, 0), Array('海盗（炮手）', 501, 0), Array('火炮手（二转）', 530, 0), Array('毁灭炮手（三转）', 531, 0), Array('神炮王（究极打炮能手）', 532, 0), Array('双弩精灵（一转）', 2300, 1), Array('双弩精灵（二转）', 2310, 1), Array('双弩精灵（三转）', 2311, 1), Array('双弩精灵（四转）', 2312, 1), Array('幻影（一转）', 2400, 2), Array('幻影（二转）', 2410, 2), Array('幻影（三转）', 2411, 2), Array('幻影（四转）', 2412, 2), Array('夜光法师（一转）', 2700, 3), Array('夜光法师（二转）', 2710, 3), Array('夜光法师（三转）', 2711, 3), Array('夜光法师（四转）', 2712, 3), Array('恶魔猎手（一转）', 3100, 4), Array('恶魔猎手（二转）', 3110, 4), Array('恶魔猎手（三转）', 3111, 4), Array('恶魔猎手（四转）', 3112, 4), Array('恶魔复仇者（初级）', 3101, 0), Array('恶魔复仇者（中级）', 3120, 0), Array('恶魔复仇者（高级）', 3121, 0), Array('恶魔复仇者（究级）', 3122, 0), Array('唤灵法师（一转）', 3200, 999), Array('唤灵法师（二转）', 3210, 999), Array('唤灵法师（三转）', 3211, 999), Array('唤灵法师（四转）', 3212, 999), Array('豹弩游侠（一转）', 3300, 999), Array('豹弩游侠（二转）', 3310, 999), Array('豹弩游侠（三转）', 3311, 999), Array('豹弩游侠（四转）', 3312, 999), Array('机械师（一转）', 3500, 999), Array('机械师（二转）', 3510, 999), Array('机械师（三转）', 3511, 999), Array('机械师（四转）', 3512, 999), Array('尖兵（一转）', 3600, 5), Array('尖兵（二转）', 3610, 5), Array('尖兵（三转）', 3611, 5), Array('尖兵（四转）', 3612, 5), Array('爆破手（一转）', 3700, 0), Array('爆破手（二转）', 3710, 0), Array('爆破手（三转）', 3711, 0), Array('爆破手（四转）', 3712, 0), Array('米哈尔（一转）', 5100, 6), Array('米哈尔（二转）', 5110, 6), Array('米哈尔（三转）', 5111, 6), Array('米哈尔（四转）', 5112, 6), Array('狂龙战士（一转）', 6100, 7), Array('狂龙战士（二转）', 6110, 7), Array('狂龙战士（三转）', 6111, 7), Array('狂龙战士（四转）', 6112, 7), Array('爆莉萌天使（一转）', 6500, 8), Array('爆莉萌天使（二转）', 6510, 8), Array('爆莉萌天使（三转）', 6511, 8), Array('爆莉萌天使（四转）', 6512, 8), Array('龙的传人（一转）', 508, 0), Array('龙的传人（二转）', 570, 0), Array('龙的传人（三转）', 571, 0), Array('龙的传人（四转）', 572, 0), Array('隐月（一转）', 2500, 0), Array('隐月（二转）', 2510, 0), Array('隐月（三转）', 2511, 0), Array('隐月（四转）', 2512, 0), Array('剑豪（一转）', 4100, 0), Array('剑豪（二转）', 4110, 0), Array('剑豪（三转）', 4111, 0), Array('剑豪（四转）', 4112, 0), Array('阴阳师（一转）', 4200, 0), Array('阴阳师（二转）', 4210, 0), Array('阴阳师（三转）', 4211, 0), Array('阴阳师（四转）', 4212, 0), Array('超能力者（一转）', 14200, 0), Array('超能力者（二转）', 14210, 0), Array('超能力者（三转）', 14211, 0), Array('超能力者（四转）', 14212, 0), Array('圣晶使徒（一转）', 15200, 0), Array('圣晶使徒（二转）', 15210, 0), Array('圣晶使徒（三转）', 15211, 0), Array('圣晶使徒（四转）', 15212, 0), Array('影魂异人（一转）', 15500, 0), Array('影魂异人（二转）', 15510, 0), Array('影魂异人（三转）', 15511, 0), Array('影魂异人（四转）', 15512, 0), Array('魔影链士（一转）', 6400, 0), Array('魔影链士（二转）', 6410, 0), Array('魔影链士（三转）', 6411, 0), Array('魔影链士（四转）', 6412, 0), Array('虎影（一转）', 16400, 0), Array('虎影（二转）', 16410, 0), Array('虎影（三转）', 16411, 0), Array('虎影（四转）', 16412, 0), Array('御剑骑士（一转）', 15100, 0), Array('御剑骑士（二转）', 15110, 0), Array('御剑骑士（三转）', 15111, 0), Array('御剑骑士（四转）', 15112, 0), Array('龙神（一转）', 2200, 0), Array('龙神（二转）', 2211, 0), Array('龙神（三转）', 2214, 0), Array('龙神（四转）', 2217, 0));
var noAdvance = '拍卖在30级之后开启\r\n通过在村落周围狩猎怪物升级\r\n\r\n加技能 按“K”键\r\n加属性 按“S”键\r\n\r\n下次转职需要';
var advance = '#r - 小助手主页 >> 转职功能 #k\r\n\r\n你好哦，我这里可以提供快速转职哦~';
var unable = '好像你已经通过了全部的转职了，你的冒险生活怎么样？如果遇到不开心的事，笑笑就过了。以后还有很多事情等着你去面对。';
var noThanks = '\r\n\r\n#L1#谢谢，但是我现在暂时不想转职。#l';
var check = '你确定你想成为一个 ';
var congrats = '你想成为一个 ';
var first;
var newJobName;
var newJob;
function start() {
    status = -1;
    action(1, 0, 0);
}
function action(d, c, b) {
    if (d == -1) {
        cm.dispose();
        return;
    }
    if (d == 1) {
        status++;
    } else {
        status--;
    }
    if (status == -1) {
        cm.dispose();
        return;
    }
    if (cm.getzhizunvip() != 2) {
        cm.dispose();
        cm.playerMessage(1, '该菜单是至尊版专享。');
        return;
    }
    if (cm.getPlayer().getSubcategory() == 1) {
        sdchangejob();
        return;
    } else {
        if (cm.getPlayer().getSubcategory() == 3) {
        } else {
            if (cm.getPlayer().getSubcategory() == 2) {
                hpchangejob();
                return;
            } else {
                if (cm.getPlayer().getSubcategory() == 10) {
                    lrchangejob();
                    return;
                }
            }
        }
    }
    if (cm.haveItem(2430191)) {
        cm.sendOkS(' #e#d“#k#n#b#v2430191# #z2430191##k（#r#c2430191##k/0）#e#d”#k#n\r\n\r\n之前获得的#z2430191#，还是#r#e使用后#n#k再继续转职吧。');
        cm.dispose();
        return;
    }
    if (status == 0) {
        if (cm.getJob() % 100 == 0) {
            noAdvance += cm.getJob() % 1000 == 0 ? '10级以上' : '30级以上';
        } else {
            noAdvance += cm.getJob() % 10 == 0 ? '60级以上' : '100级以上';
            noAdvance += ' 才能转职，你现在的等级为 ' + cm.getPlayerStat('LVL') + ' 级。';
        }
        if (cm.getJob() % 10 == 2 && cm.getJob() != 2002 && cm.getJob() != 3002 && cm.getJob() != 4002 && cm.getJob() != 6002 || cm.getJob() == 2217 || cm.getJob() == 11000) {
            if (cm.isQuestFinished(1465) && cm.getPlayer().getLevel() >= 200) {
                cm.dispose();
                cm.openNpc(1540945, 'V矩阵');
            } else {
                if (cm.getLevel() < 200) {
                    cm.sendOk('新人玩家：\r\n游戏菜单(#d@pm#k) 在 #e#r30#n#k 级之后开启;\r\n\r\n另外,五转必须达到 #e#b200 #n#k级才可以!!');
                    cm.dispose();
                } else {
                    cm.sendOk('恭喜你，勇士！现在你可以进行第五次转职了...\r\n#L11#快速五转');
                }
            }
        } else {
            if (cm.getJob() % 1000 == 0 || cm.getJob() == 0 || cm.getJob() == 4001 || cm.getJob() == 4002 || cm.getJob() == 6002 || cm.getJob() == 3000 || cm.getJob() == 2001 || cm.getJob() == 2002 || cm.getJob() == 2003 || cm.getJob() == 2004 || cm.getJob() == 2005 || cm.getJob() == 2000 || cm.getJob() == 6001 || cm.getJob() == 3001 || cm.getJob() == 3002 || cm.getJob() == 15001 || cm.getJob() == 15000 || cm.getJob() == 16000 || cm.getJob() == 15002) {
                if (cm.getPlayerStat('LVL') == 8 || cm.getPlayerStat('LVL') == 9) {
                    for (var a = 0; a < jobData.length; a++) {
                        if (jobData[a][1] == 200 + cm.getJob()) {
                            advance += '\r\n#b#L' + jobData[a][1] + '#' + jobData[a][0] + '#l';
                        }
                    }
                } else {
                    if (cm.getPlayerStat('LVL') >= 10) {
                        if (cm.getJob() == 2000) {
                            advance += '\r\n#b#L' + 2100 + '# 战神（一转）#l';
                        } else {
                            if (cm.getJob() == 2001) {
                                advance += '\r\n#b#L' + 2200 + '# 龙神（一转）#l';
                            } else {
                                if (cm.getJob() == 15001) {
                                    advance += '\r\n#b#L' + 15500 + '# 影魂异人（一转）#l';
                                } else {
                                    if (cm.getJob() == 2002) {
                                        advance += '\r\n#b#L' + 2300 + '# 双弩精灵（一转）#l';
                                    } else {
                                        if (cm.getJob() == 2003) {
                                            advance += '\r\n#b#L' + 2400 + '# 幻影（一转）#l';
                                        } else {
                                            if (cm.getJob() == 2004) {
                                                advance += '\r\n#b#L' + 2700 + '# 夜光法师（一转）#l';
                                            } else {
                                                if (cm.getJob() == 2005) {
                                                    advance += '\r\n#b#L' + 2500 + '# 隐月（一转）#l';
                                                } else {
                                                    if (cm.getJob() == 3002) {
                                                        advance += '\r\n#b#L' + 3600 + '# 尖兵（一转）#l';
                                                    } else {
                                                        if (cm.getJob() == 6000) {
                                                            advance += '\r\n#b#L' + 6100 + '# 狂龙战士（一转）#l';
                                                        } else {
                                                            if (cm.getJob() == 6001) {
                                                                advance += '\r\n#b#L' + 6500 + '# 爆莉萌天使（一转）#l';
                                                            } else {
                                                                if (cm.getJob() == 6002) {
                                                                    advance += '\r\n#b#L' + 6400 + '# 魔影链士（一转）#l';
                                                                } else {
                                                                    if (cm.getJob() == 3001) {
                                                                        advance += '\r\n#b#L' + 3100 + '# 恶魔猎手（一转）#l';
                                                                        advance += '\r\n#b#L' + 3101 + '# 恶魔复仇者（一转）#l';
                                                                    } else {
                                                                        if (cm.getJob() == 4001) {
                                                                            advance += '\r\n#b#L' + 4100 + '# 剑豪（一转）#l';
                                                                        } else {
                                                                            if (cm.getJob() == 4002) {
                                                                                advance += '\r\n#b#L' + 4200 + '# 阴阳师（一转）#l';
                                                                            } else {
                                                                                if (cm.getJob() == 5000) {
                                                                                    advance += '\r\n#b#L' + 5100 + '# 米哈尔（一转）#l';
                                                                                } else {
                                                                                    if (cm.getJob() == 15000) {
                                                                                        advance += '\r\n#b#L' + 15200 + '# 圣晶使徒（一转）#l';
                                                                                    } else {
                                                                                        if (cm.getJob() == 16000) {
                                                                                            advance += '\r\n#b#L' + 16400 + '# 虎影（一转）#l';
                                                                                        } else {
                                                                                            if (cm.getJob() == 15002) {
                                                                                                advance += '\r\n#b#L' + 15100 + '# 御剑骑士（一转）#l';
                                                                                            } else {
                                                                                                for (var a = 0; a < jobData.length; a++) {
                                                                                                    if (jobData[a][1] == 301 || jobData[a][1] % 100 == 0 && jobData[a][1] > cm.getJob() && (jobData[a][1] < 600 + cm.getJob() && jobData[a][1] > 99 + cm.getJob() || jobData[a][1] == 700 + cm.getJob())) {
                                                                                                        advance += '\r\n#b#L' + jobData[a][1] + '#' + jobData[a][0] + '#l';
                                                                                                    } else {
                                                                                                        if (cm.getJob() == 0 & jobData[a][1] % 100 == 0 && jobData[a][1] > cm.getJob() && (jobData[a][1] < 600 + cm.getJob() || jobData[a][1] == 700 + cm.getJob())) {
                                                                                                            advance += '\r\n#b#L' + jobData[a][1] + '#' + jobData[a][0] + '#l';
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
                    } else {
                        cm.playerMessage(1, noAdvance);
                        cm.dispose();
                        return;
                    }
                }
                first = true;
            } else {
                if (cm.getJob() % 100 == 0 || cm.getJob() == 3101 || cm.getJob() == 301) {
                    if (cm.getPlayerStat('LVL') >= 30) {
                        if (cm.getJob() == 3101) {
                            advance += '\r\n#b#L' + 3120 + '# 恶魔复仇者（二转）#l';
                        } else {
                            if (cm.getJob() == 3100) {
                                advance += '\r\n#b#L' + 3110 + '# 恶魔猎手（二转）#l';
                            } else {
                                if (cm.getJob() == 2200) {
                                    advance += '\r\n#b#L' + 2211 + '# 龙神（二转）#l';
                                } else {
                                    if (cm.getJob() == 301) {
                                        advance += '\r\n#b#L' + 330 + '# 古迹猎人（二转）#l';
                                    } else {
                                        for (var a = 0; a < jobData.length; a++) {
                                            if (jobData[a][1] % 10 == 0 && jobData[a][1] % 100 != 0 && (jobData[a][1] > cm.getJob() && jobData[a][1] <= cm.getJob() + 30)) {
                                                advance += '\r\n#b#L' + jobData[a][1] + '#' + jobData[a][0] + '#l';
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    } else {
                        cm.playerMessage(1, noAdvance);
                        cm.dispose();
                        return;
                    }
                } else {
                    if (cm.getJob() % 10 == 0 || cm.getJob() % 10 == 1 || cm.getJob() == 3120 || cm.getJob() == 3121 || cm.getJob() == 2214) {
                        if (cm.getPlayerStat('LVL') >= (cm.getJob() % 10 == 1 ? 100 : 60) && cm.getJob() != 2211 && cm.getJob() != 2214) {
                            for (var a = 0; a < jobData.length; a++) {
                                if (jobData[a][1] - 1 == cm.getJob()) {
                                    advance += '\r\n#b#L' + jobData[a][1] + '#' + jobData[a][0] + '#l';
                                }
                            }
                        } else {
                            if (cm.getJob() == 2211 && cm.getPlayerStat('LVL') >= 60) {
                                advance += '\r\n#b#L' + 2214 + '# 龙神（三转）#l';
                            } else {
                                if (cm.getJob() == 2214 && cm.getPlayerStat('LVL') >= 100) {
                                    advance += '\r\n#b#L' + 2217 + '# 龙神（四转）#l';
                                } else {
                                    cm.playerMessage(1, noAdvance);
                                    cm.dispose();
                                    return;
                                }
                            }
                        }
                    } else {
                        cm.sendOk(unable);
                        cm.dispose();
                        return;
                    }
                }
            }
            advance += noThanks;
            cm.askMenu(advance);
        }
    } else {
        if (status == 1) {
            if (b == 1) {
                cm.sendOk('你现在不想转职吗？那好吧。等你想要转职可以来找我，我时时刻刻在这里。');
                cm.dispose();
            } else {
                if (b == 10) {
                    cm.warp(270010111);
                    cm.dispose();
                } else {
                    if (b == 11) {
                        cm.dispose();
                        cm.openNpc(1530635, 'V矩阵');
                    } else {
                        if (cm.getSpace(2) >= 1) {
                            newJob = b;
                            for (var a = 0; a < jobData.length; a++) {
                                if (jobData[a][1] == newJob) {
                                    newnewJobName = jobData[a][0];
                                }
                            }
                            cm.askMenu('你确定想好要成为一个 #b' + newnewJobName + '#k 吗？\r\n\r\n#r - 战神转职、四转转职、暗影双刀转职，因为有学习技能操作，可能会延迟2~3秒，请不要关闭对话框。造成的技能异常不能恢复。\r\n\r\n#r - 转职后，会赠送道具。请确认你的道具栏每格都有2个以上的空格。如果转职后因背包格数不足而领取不到道具，不能恢复。');
                        } else {
                            cm.askMenu('继续转职的话，请让装备栏和消耗栏各腾出两个格子。');
                            cm.dispose();
                        }
                    }
                }
            }
        } else {
            if (status == 2) {
                cm.changeJob(newJob);
                cm.gainItem(2430191, 1);
                cm.playerMessage(-1, '赠送给你 >>> 黑色武器箱子 一个，可以获得角色对应武器！');
                cm.sendOk('经过辛苦的培养，从现在开始你已经是#b' + newnewJobName + '#k了！\r\n赠送给你#b#v2430191##z2430191##k一个，可以获得角色对应武器！');
                cm.dispose();
            }
        }
    }
}
function equip(a) {
    cm.gainItemAndEquip(a, -10);
}
function sdchangejob() {
    if (status == 0) {
        if (cm.getJob() == 0 && cm.getPlayerStat('LVL') >= 10) {
            newJob = 400;
            newJobName = '飞侠（双刀）';
        } else {
            if (cm.getJob() == 400 && cm.getPlayerStat('LVL') >= 20) {
                newJob = 430;
                newJobName = '见习刀客';
            } else {
                if (cm.getJob() == 430 && cm.getPlayerStat('LVL') >= 30) {
                    newJob = 431;
                    newJobName = '双刀客';
                } else {
                    if (cm.getJob() == 431 && cm.getPlayerStat('LVL') >= 45) {
                        newJob = 432;
                        newJobName = '双刀侠';
                    } else {
                        if (cm.getJob() == 432 && cm.getPlayerStat('LVL') >= 60) {
                            newJob = 433;
                            newJobName = '血刀';
                        } else {
                            if (cm.getJob() == 433 && cm.getPlayerStat('LVL') >= 100) {
                                newJob = 434;
                                newJobName = '暗影双刀';
                            } else {
                                if (cm.isQuestFinished(1465) && cm.getPlayer().getLevel() >= 200) {
                                    cm.dispose();
                                    cm.openNpc(1540945, 'V矩阵');
                                } else {
                                    if (cm.getLevel() < 200) {
                                        cm.sendOk('您的等级不足200无法进行第五次转职\r\n（新手请30级再使用拍卖）');
                                        cm.dispose();
                                    } else {
                                        cm.dispose();
                                        cm.openNpc(1530635, 'V矩阵');
                                    }
                                }
                                return;
                            }
                        }
                    }
                }
            }
        }
        cm.askMenu('你确定你想成为一个#b' + newJobName + '#k吗？');
    } else {
        if (status == 1) {
            cm.changeJob(newJob);
            cm.gainItem(2430191, 1);
            cm.playerMessage(-1, '赠送给你 >>> 新手套装箱子 一个，自动穿戴对应套装！');
            cm.sendOk('已经成功转职成了#b' + newJobName + '#k');
            cm.dispose();
        }
    }
}
function hpchangejob() {
    if (status == 0) {
        if (cm.getJob() == 532 && cm.getPlayer().getLevel() >= 200) {
            cm.dispose();
            cm.openNpc(0, 'V矩阵');
            return;
        } else {
            if (cm.getJob() == 0 && cm.getPlayerStat('LVL') >= 10) {
                newJob = 501;
                newJobName = '海盗（炮手）';
            } else {
                if (cm.getJob() == 501 && cm.getPlayerStat('LVL') >= 30) {
                    newJob = 530;
                    newJobName = '火炮手（二转）';
                } else {
                    if (cm.getJob() == 530 && cm.getPlayerStat('LVL') >= 60) {
                        newJob = 531;
                        newJobName = '毁灭炮手（三转）';
                    } else {
                        if (cm.getJob() == 531 && cm.getPlayerStat('LVL') >= 100) {
                            newJob = 532;
                            newJobName = '神炮王（究极打炮能手）';
                        } else {
                            cm.sendOk('等级不符或已完成所有转职。');
                            cm.dispose();
                            return;
                        }
                    }
                }
            }
        }
        cm.askMenu('你确定你想成为一个#b' + newJobName + '#k吗？');
    } else {
        if (status == 1) {
            cm.changeJob(newJob);
            cm.gainItem(2430191, 1);
            cm.playerMessage(-1, '赠送给你 >>> 黑色武器箱子 一个，可以获得角色对应武器！');
            cm.sendOk('已经成功转职成了#b' + newJobName + '#k');
            cm.dispose();
        }
    }
}
function lrchangejob() {
    if (status == 0) {
        if (cm.getJob() == 572 && cm.getPlayer().getLevel() >= 200) {
            cm.dispose();
            cm.openNpc(0, 'V矩阵');
            return;
        } else {
            if (cm.getJob() == 0 && cm.getPlayerStat('LVL') >= 10) {
                newJob = 508;
                newJobName = '龙的传人（一转）';
            } else {
                if (cm.getJob() == 508 && cm.getPlayerStat('LVL') >= 30) {
                    newJob = 570;
                    newJobName = '龙的传人（二转）';
                } else {
                    if (cm.getJob() == 570 && cm.getPlayerStat('LVL') >= 60) {
                        newJob = 571;
                        newJobName = '龙的传人（三转）';
                    } else {
                        if (cm.getJob() == 571 && cm.getPlayerStat('LVL') >= 100) {
                            newJob = 572;
                            newJobName = '龙的传人（四转）';
                        } else {
                            cm.sendOk('等级不符或已完成所有转职。');
                            cm.dispose();
                            return;
                        }
                    }
                }
            }
        }
        cm.askMenu('你确定你想成为一个#b' + newJobName + '#k吗？');
    } else {
        if (status == 1) {
            cm.changeJob(newJob);
            cm.gainItem(2430191, 1);
            cm.playerMessage(-1, '赠送给你 >>> 黑色武器箱子 一个，可以获得角色对应武器！');
            cm.sendOk('已经成功转职成了#b' + newJobName + '#k');
            cm.dispose();
        }
    }
}