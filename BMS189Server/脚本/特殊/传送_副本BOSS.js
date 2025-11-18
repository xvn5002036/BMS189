var 特色副本 = '#fMap/MapHelper.img/mark/Henesys#';
var 羊羊副本 = '#fMap/MapHelper.img/mark/Event#';
var 武陵道场 = '#fMap/MapHelper.img/mark/MuruengRaid#';
var 艾琳森林 = '#fMap/MapHelper.img/mark/EilnForest#';
var 时间停止之湖 = '#fMap/MapHelper.img/mark/Papulatus#';
var 艰苦洞穴 = '#fMap/MapHelper.img/mark/Zakum#';
var 生命洞穴 = '#fMap/MapHelper.img/mark/Hontale#';
var 诸神的黄昏 = '#fMap/MapHelper.img/mark/PinkBean#';
var 狮子王之城 = '#fMap/MapHelper.img/mark/VanLeon#';
var 阿斯旺 = '#fMap/MapHelper.img/mark/Hilla#';
var 骑士团要塞 = '#fMap/MapHelper.img/mark/Signus#';
var 时空裂缝 = '#fMap/MapHelper.img/mark/Akairum#';
var 绯红 = '#fMap/MapHelper.img/mark/GiantVellud#';
var 秘密祭坛 = '#fMap/MapHelper.img/mark/Ranmaru#';
var 鲁塔比斯 = '#fMap/MapHelper.img/mark/rootabyss#';
var 黑色天堂 = '#fMap/MapHelper.img/mark/MissiontoSpace#';
var 比睿山 = '#fMap/MapHelper.img/mark/JP_Nohime#';
var 暴君城堡 = '#fMap/MapHelper.img/mark/Magnus#';
var 月下竹林 = '#fMap/MapHelper.img/mark/Honnouji#';
var 世界树顶端 = '#fMap/MapHelper.img/mark/fallenWorldTree#';
var 噩梦时间塔 = '#fMap/MapHelper.img/mark/Lacheln#';
var 乌鲁斯 = '#fMap/MapHelper.img/mark/Urus#';
var 太初之海 = '#fMap/MapHelper.img/mark/verdel#';
var 月桥 = '#fMap/MapHelper.img/mark/moonBridge#';
var 痛苦迷宫 = '#fMap/MapHelper.img/mark/TheLabyrinthOfSuffering#';
var 世界之泪 = '#fMap/MapHelper.img/mark/Limen#';
var 黎曼 = '#fMap/MapHelper.img/mark/Limen#';
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
            var d = '#fs14##fn黑体#\r\n';
            d += '#L100#' + 特色副本 + ' #r[特色副本]#k#l #v4310143# #v4310143# #v4310143# #v4310143#\r\n';
            d += '#L101#' + 羊羊副本 + ' #r[羊羊副本]#k#l #v4310143# #v4310143# #v4310143# #v4310143#\r\n';
            d += '#L102#' + 武陵道场 + ' #r[武陵道场]#k#l #v4310143# #v4310143# #v4310143# #v4310143#\r\n';
            d += '#L0#' + 艾琳森林 + ' [艾菲尼亚]#l #v1112683# #v4310143#\r\n';
            d += '#L1#' + 时间停止之湖 + ' [闹钟]#l #v4310143# #v3800350#\r\n';
            d += '#L2#' + 艰苦洞穴 + ' [扎昆]#l #v1003854# #v1432197# #v2048715#\r\n';
            d += '#L3#' + 生命洞穴 + ' [黑龙]#l #v3800350# #v1122000# #v2049116# #v2340000#\r\n';
            d += '#L4#' + 诸神的黄昏 + ' [品克缤]#l #v3800350# #v1113070# #v1022182# #v2340000#\r\n';
            d += '#L5#' + 狮子王之城 + ' [班·雷昂]#l  #v1102714# #v2048715# #v2049323#\r\n';
            d += '#L6#' + 阿斯旺 + ' [希拉]#l #v1342066# #v2430690# #v1162009# #v1051335#\r\n';
            d += '#L7#' + 骑士团要塞 + ' [希纳斯]#l #v1242014# #v1072488# #v4001713# #v2614004#\r\n';
            d += '#L8#' + 时空裂缝 + ' [阿卡伊勒]#l #v2048743# #v2614004# #v1122254# #v1122150#\r\n';
            d += '#L9#' + 绯红 + ' [心树守护者之地] - 贝勒德入口#l#v4310097#\r\n';
            d += '#L10#' + 秘密祭坛 + ' [秘密祭坛] - 森兰丸#l#v1003601##v2047828##v2590006#\r\n';
            d += '#L11#' + 鲁塔比斯 + ' [鲁塔比斯]  - 四大天王#l#v1042257##v2049383##v2048717#\r\n';
            d += '#L12#' + 黑色天堂 + ' [黑色天堂]  - 斯乌#l#v1352266##v1082610##v1152174##v2614005#\r\n';
            d += '#L13#' + 比睿山 + ' [比睿山]  - 浓姬#l#v2591314##v2591409##v2612062#\r\n';
            d += '#L14#' + 暴君城堡 + ' [暴君城堡]  - 麦格纳斯#l#v1102478##v1072745##v2614057#\r\n';
            d += '#L16#' + 世界树顶端 + ' [世界树顶] - 戴米安#l#v1242116##v5062024##v2614002#\r\n';
            d += '#L17#' + 噩梦时间塔 + ' [新军团长] - 路西德#l#v1082695##v2049388##v1162035##i4036003#\r\n';
            d += '#L18#' + 乌鲁斯 + ' [霸王] - 乌鲁斯#l#v3015277##v4034999##i4036002#\r\n';
            d += '#L19#' + 太初之海 + ' [光明神座] - 威尔#l #v2430558##v4001715##v2434363##i4036005#\r\n';
            d += '#L20#' + 月桥 + ' [至暗魔晶] - 至暗魔晶#v4440000# #v2435675# #v5520001##l#n\r\n';
            d += '#L21#' + 痛苦迷宫 + ' [痛苦迷宫]- 觉醒希拉#l#v4001305##v1182285##v4442000#\r\n';
            d += '#L22#' + 世界之泪 + ' [世界之泪]- 敦凯尔#l#v4001305##v1182285##v4442000#\r\n';
            d += '#L23#' + 黎曼 + ' [黎曼]- 黑魔法师#l#v4001305##v1182285##v4442000#\r\n';
            cm.askMenu(d, 0, 9400570);
        } else {
            if (status === a++) {
                if (b == 100) {
                    cm.dispose();
                    cm.openNpc(9900003, 108);
                } else {
                    if (b == 101) {
                        typed = 101;
                        cm.askYesNo_Illus('#e#r[一只养,二只羊,三只羊...] \r\n\r\n#r稀有椅子,极品卷轴..等等\r\n\r\n- #e#d管理提示：#n#b点是进入地图。点否返回上一页.#k', 9400570);
                    } else {
                        if (b == 102) {
                            typed = 102;
                            cm.askYesNo_Illus('#e#r单人进入,韩服最新版武陵道场！\r\n可以获得#v1113070##v1402014##v1402037##v5530457##v5530458##v2046996##v2046997##v2047818#\r\n升级圣地#k\r\n\r\n- #e#d管理提示：#n#b点是进入地图。点否返回上一页.#k', 9400570);
                        } else {
                            if (b == 0) {
                                typed = 0;
                                cm.askYesNo_Illus('#e#r' + 艾琳森林 + ' [艾菲尼亚] \r\n\r\n#r稀有椅子,极品卷轴,各种道具..等等\r\n\r\n- #e#d管理提示：#n#b点是进入地图。点否返回上一页.#k', 9400570);
                            } else {
                                if (b == 1) {
                                    typed = 1;
                                    cm.askYesNo_Illus('#e#r' + 时间停止之湖 + ' [闹钟] \r\n\r\n#r稀有椅子,极品卷轴,各种道具..等等\r\n\r\n- #e#d管理提示：#n#b点是进入地图。点否返回上一页.#k', 9400570);
                                } else {
                                    if (b == 2) {
                                        typed = 2;
                                        cm.askYesNo_Illus('#e#r' + 艰苦洞穴 + ' [扎昆] \r\n\r\n#r稀有椅子,极品卷轴,各种道具..等等\r\n\r\n- #e#d管理提示：#n#b点是进入地图。点否返回上一页.#k', 9400570);
                                    } else {
                                        if (b == 3) {
                                            typed = 3;
                                            cm.askYesNo_Illus('#e#r' + 生命洞穴 + ' [黑龙] \r\n\r\n#r稀有椅子,极品卷轴,各种道具..等等\r\n\r\n- #e#d管理提示：#n#b点是进入地图。点否返回上一页.#k', 9400570);
                                        } else {
                                            if (b == 4) {
                                                typed = 4;
                                                cm.askYesNo_Illus('#e#r' + 诸神的黄昏 + ' [品克缤] \r\n\r\n#r稀有椅子,极品卷轴,各种道具..等等\r\n\r\n- #e#d管理提示：#n#b点是进入地图。点否返回上一页.#k', 9400570);
                                            } else {
                                                if (b == 5) {
                                                    typed = 5;
                                                    cm.askYesNo_Illus('#e#r' + 狮子王之城 + ' [班·雷昂] \r\n\r\n#r稀有椅子,极品卷轴,各种道具..等等\r\n\r\n- #e#d管理提示：#n#b点是进入地图。点否返回上一页.#k', 9400570);
                                                } else {
                                                    if (b == 6) {
                                                        typed = 6;
                                                        cm.askYesNo_Illus('#e#r' + 阿斯旺 + ' [希拉] \r\n\r\n#r稀有椅子,极品卷轴,各种道具..等等\r\n\r\n- #e#d管理提示：#n#b点是进入地图。点否返回上一页.#k', 9400570);
                                                    } else {
                                                        if (b == 7) {
                                                            typed = 7;
                                                            cm.askYesNo_Illus('#e#r' + 骑士团要塞 + ' [希纳斯] \r\n\r\n#r稀有椅子,极品卷轴,各种道具..等等\r\n\r\n- #e#d管理提示：#n#b点是进入地图。点否返回上一页.#k', 9400570);
                                                        } else {
                                                            if (b == 8) {
                                                                typed = 8;
                                                                cm.askYesNo_Illus('#e#r' + 时空裂缝 + ' [阿卡伊勒] \r\n\r\n#r稀有椅子,极品卷轴,各种道具..等等\r\n\r\n- #e#d管理提示：#n#b点是进入地图。点否返回上一页.#k', 9400570);
                                                            } else {
                                                                if (b == 9) {
                                                                    typed = 9;
                                                                    cm.askYesNo_Illus('#e#r' + 绯红 + ' [心树守护者之地] \r\n\r\n#r稀有椅子,极品卷轴,各种道具..等等\r\n\r\n- #e#d管理提示：#n#b点是进入地图。点否返回上一页.#k', 9400570);
                                                                } else {
                                                                    if (b == 10) {
                                                                        typed = 10;
                                                                        cm.askYesNo_Illus('#e#r' + 秘密祭坛 + ' [森兰丸] \r\n\r\n#r稀有椅子,极品卷轴,各种道具..等等\r\n\r\n- #e#d管理提示：#n#b点是进入地图。点否返回上一页.#k', 9400570);
                                                                    } else {
                                                                        if (b == 11) {
                                                                            typed = 11;
                                                                            cm.askYesNo_Illus('#e#r' + 鲁塔比斯 + ' [鲁塔比斯] \r\n\r\n#r稀有椅子,极品卷轴,各种道具..等等\r\n\r\n- #e#d管理提示：#n#b点是进入地图。点否返回上一页.#k', 9400570);
                                                                        } else {
                                                                            if (b == 12) {
                                                                                typed = 12;
                                                                                cm.askYesNo_Illus('#e#r' + 黑色天堂 + ' [斯乌] \r\n\r\n#r稀有椅子,极品卷轴,各种道具..等等\r\n\r\n- #e#d管理提示：#n#b点是进入地图。点否返回上一页.#k', 9400570);
                                                                            } else {
                                                                                if (b == 13) {
                                                                                    typed = 13;
                                                                                    cm.askYesNo_Illus('#e#r' + 比睿山 + ' [浓姬] \r\n\r\n#r稀有椅子,极品卷轴,各种道具..等等\r\n\r\n- #e#d管理提示：#n#b点是进入地图。点否返回上一页.#k', 9400570);
                                                                                } else {
                                                                                    if (b == 14) {
                                                                                        typed = 14;
                                                                                        cm.askYesNo_Illus('#e#r' + 暴君城堡 + ' [麦格纳斯] \r\n\r\n#r稀有椅子,极品卷轴,各种道具..等等\r\n\r\n- #e#d管理提示：#n#b点是进入地图。点否返回上一页.#k', 9400570);
                                                                                    } else {
                                                                                        if (b == 16) {
                                                                                            typed = 16;
                                                                                            cm.askYesNo_Illus('#e#r' + 世界树顶端 + ' [戴米安] \r\n\r\n#r稀有椅子,极品卷轴,各种道具..等等\r\n\r\n- #e#d管理提示：#n#b点是进入地图。点否返回上一页.#k', 9400570);
                                                                                        } else {
                                                                                            if (b == 17) {
                                                                                                typed = 17;
                                                                                                cm.askYesNo_Illus('#e#r' + 噩梦时间塔 + ' [路西德] \r\n\r\n#r稀有椅子,极品卷轴,各种道具..等等\r\n\r\n- #e#d管理提示：#n#b点是进入地图。点否返回上一页.#k', 9400570);
                                                                                            } else {
                                                                                                if (b == 18) {
                                                                                                    typed = 18;
                                                                                                    cm.askYesNo_Illus('#e#r' + 乌鲁斯 + ' [乌鲁斯] \r\n\r\n#r稀有椅子,极品卷轴,各种道具..等等\r\n\r\n- #e#d管理提示：#n#b点是进入地图。点否返回上一页.#k', 9400570);
                                                                                                } else {
                                                                                                    if (b == 19) {
                                                                                                        typed = 19;
                                                                                                        cm.askYesNo_Illus('#e#r' + 太初之海 + ' [威尔] \r\n\r\n#r稀有椅子,极品卷轴,各种道具..等等\r\n\r\n- #e#d管理提示：#n#b点是进入地图。点否返回上一页.#k', 9400570);
                                                                                                    } else {
                                                                                                        if (b == 20) {
                                                                                                            typed = 20;
                                                                                                            cm.askYesNo_Illus('#e#r' + 月桥 + ' [至暗魔晶] \r\n\r\n#r稀有椅子,极品卷轴,各种道具..等等\r\n\r\n- #e#d管理提示：#n#b点是进入地图。点否返回上一页.#k', 9400570);
                                                                                                        } else {
                                                                                                            if (b == 21) {
                                                                                                                typed = 21;
                                                                                                                cm.askYesNo_Illus('#e#r' + 痛苦迷宫 + ' [觉醒希拉] \r\n\r\n#r稀有椅子,极品卷轴,各种道具..等等\r\n\r\n- #e#d管理提示：#n#b点是进入地图。点否返回上一页.#k', 9400570);
                                                                                                            } else {
                                                                                                                if (b == 22) {
                                                                                                                    typed = 22;
                                                                                                                    cm.askYesNo_Illus('#e#r' + 世界之泪 + ' [敦凯尔] \r\n\r\n#r稀有椅子,极品卷轴,各种道具..等等\r\n\r\n- #e#d管理提示：#n#b点是进入地图。点否返回上一页.#k', 9400570);
                                                                                                                } else {
                                                                                                                    if (b == 23) {
                                                                                                                        typed = 23;
                                                                                                                        cm.askYesNo_Illus('#e#r' + 黎曼 + ' [黑魔法师] \r\n\r\n#r稀有椅子,极品卷轴,各种道具..等等\r\n\r\n- #e#d管理提示：#n#b点是进入地图。点否返回上一页.#k', 9400570);
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
            } else {
                if (status === a++) {
                    if (typed == 101) {
                        cm.dispose();
                        cm.warp(109090104, 0);
                    } else {
                        if (typed == 102) {
                            cm.dispose();
                            cm.warp(925020000, 0);
                        } else {
                            if (typed == 0) {
                                cm.dispose();
                                cm.warp(300030300, 0);
                            } else {
                                if (typed == 1) {
                                    cm.dispose();
                                    cm.warp(220080000, 0);
                                } else {
                                    if (typed == 2) {
                                        cm.dispose();
                                        cm.warp(211042300, 0);
                                    } else {
                                        if (typed == 3) {
                                            cm.dispose();
                                            cm.warp(240050400, 0);
                                        } else {
                                            if (typed == 4) {
                                                cm.dispose();
                                                cm.warp(270050000, 0);
                                            } else {
                                                if (typed == 5) {
                                                    cm.dispose();
                                                    cm.warp(211070000, 0);
                                                } else {
                                                    if (typed == 6) {
                                                        cm.dispose();
                                                        cm.warp(262000000, 0);
                                                    } else {
                                                        if (typed == 7) {
                                                            cm.dispose();
                                                            cm.warp(271030600, 0);
                                                        } else {
                                                            if (typed == 8) {
                                                                cm.dispose();
                                                                cm.warp(272020110, 0);
                                                            } else {
                                                                if (typed == 9) {
                                                                    cm.dispose();
                                                                    cm.warp(863010000, 0);
                                                                } else {
                                                                    if (typed == 10) {
                                                                        cm.dispose();
                                                                        cm.warp(807300100, 0);
                                                                    } else {
                                                                        if (typed == 11) {
                                                                            cm.dispose();
                                                                            cm.warp(105200000, 0);
                                                                        } else {
                                                                            if (typed == 12) {
                                                                                cm.dispose();
                                                                                cm.warp(350060300, 0);
                                                                            } else {
                                                                                if (typed == 13) {
                                                                                    cm.dispose();
                                                                                    cm.setNumberForQuestCustomData(58971, cm.getMapId());
                                                                                    cm.warp(811000999, 0);
                                                                                } else {
                                                                                    if (typed == 14) {
                                                                                        cm.dispose();
                                                                                        cm.warp(401060000, 0);
                                                                                    } else {
                                                                                        if (typed == 16) {
                                                                                            cm.dispose();
                                                                                            cm.warp(105300303, 0);
                                                                                        } else {
                                                                                            if (typed == 17) {
                                                                                                cm.dispose();
                                                                                                cm.warp(450004000, 0);
                                                                                            } else {
                                                                                                if (typed == 18) {
                                                                                                    cm.dispose();
                                                                                                    cm.warp(970072200, 0);
                                                                                                } else {
                                                                                                    if (typed == 19) {
                                                                                                        cm.dispose();
                                                                                                        cm.warp(450007240, 0);
                                                                                                    } else {
                                                                                                        if (typed == 20) {
                                                                                                            cm.dispose();
                                                                                                            cm.warp(450009301, 0);
                                                                                                        } else {
                                                                                                            if (typed == 21) {
                                                                                                                cm.dispose();
                                                                                                                cm.warp(450011990, 0);
                                                                                                            } else {
                                                                                                                if (typed == 22) {
                                                                                                                    cm.dispose();
                                                                                                                    cm.warp(450012200, 0);
                                                                                                                } else {
                                                                                                                    if (typed == 23) {
                                                                                                                        cm.dispose();
                                                                                                                        cm.warp(450012500, 0);
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