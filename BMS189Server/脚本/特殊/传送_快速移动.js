var status = -1;
function start() {
    status = -1;
    action(1, 0, 0);
}
function action(c, b, a) {
    if (c == 1) {
        status++;
    } else {
        cm.dispose();
        return;
    }
    var b = cm.getNpc();
    if (status == 0) {
        if (b == 3) {
            cm.askYesNo('你想移动到可以和其他角色交易道具的#b<自由市场>#k吗？', 4, 9000087);
        } else {
            if (b == 4) {
                cm.askYesNo('你想移动到匠人的村庄匠人街吗？在#b<匠人街>#k可以学习#b采药、采矿、装备制作、饰品制作、炼金术等#k5种专业技术。', 4, 9000087);
            } else {
                if (b == 5) {
                    if (cm.getzhizunvip() != 2) {
                        cm.askYesNo('距离当前位置最近的大陆移动码头是#m104020100#。你想移动到#b<#m104020100#>#k去吗？', 4, 9000087);
                    } else {
                        cm.dispose();
                        cm.openNpc(0, '大陆移动码头_至尊版');
                    }
                } else {
                    if (b == 6) {
                        cm.dispose();
                        cm.openNpc(1012000);
                    } else {
                        if (b == 104) {
                            cm.dispose();
                            cm.openNpc(9201594);
                        } else {
                            if (b == 20) {
                                cm.dispose();
                                cm.openNpc(9030300);
                            } else {
                                if (b == 105) {
                                    cm.askMenu_Bottom('要去哪里呢？\r\n#b\r\n#L0# 水下世界(Lv.75 ~ Lv.80)#l\r\n#L1# 莱班矿山(Lv.80 ~ Lv.85)#l\r\n#L2# 尼哈沙漠闪三之路(Lv.87 ~ Lv.89)#l\r\n#L3# 玩具城玩具塔(Lv.93 ~ Lv.97)#l\r\n#L4# [星之力]废矿(Lv.120 ~ Lv.124)#l\r\n#L5# 百草(Lv.125 ~ Lv.129)#l\r\n#L6# 凯梅尔兹共和国(Lv.140 ~ Lv.145)#l\r\n#L7# 少林寺(Lv.145 ~ Lv.148)#l', 56, 0);
                                } else {
                                    cm.dispose();
                                }
                            }
                        }
                    }
                }
            }
        }
    } else {
        if (status == 1) {
            if (b == 3) {
                cm.saveLocation('FREE_MARKET');
                cm.warp(910000000, 'st00');
            } else {
                if (b == 4) {
                    cm.saveLocation('ARDENTMILL');
                    cm.warp(910001000, 0);
                } else {
                    if (b == 5) {
                        cm.warp(104020100, 0);
                    } else {
                        if (b == 105) {
                            if (a == 0) {
                                cm.warp(230000000, 0);
                            } else {
                                if (a == 1) {
                                    cm.warp(310050000, 0);
                                } else {
                                    if (a == 2) {
                                        cm.warp(260020000, 0);
                                    } else {
                                        if (a == 3) {
                                            cm.warp(220000400, 0);
                                        } else {
                                            if (a == 4) {
                                                cm.warp(211041500, 0);
                                            } else {
                                                if (a == 5) {
                                                    cm.warp(251000000, 0);
                                                } else {
                                                    if (a == 6) {
                                                        cm.warp(865000000, 0);
                                                    } else {
                                                        if (a == 7) {
                                                            cm.warp(701220000, 0);
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
            cm.dispose();
        } else {
            cm.dispose();
        }
    }
}