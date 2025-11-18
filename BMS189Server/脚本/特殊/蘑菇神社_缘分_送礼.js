var status = -1;
var selectionLog = [];
function start() {
    action(1, 0, 0);
}
function action(mode, type, selection) {
    if (cm.getNowTimeString(1).equals(cm.getStringFromQuestInfo(58710, 'lastGift' + cm.getNpc()))) {
        cm.playerMessage(-1, '今天已经送过礼物了。');
        cm.playerMessage(5, '今天已经送过礼物了。');
        cm.dispose();
    } else {
        var reactor = 'action' + cm.getNpc();
        eval(reactor)(mode, type, selection);
    }
}
function action0(f, d, c) {
    if (status == 0 && f == 0) {
        cm.dispose();
        return;
    }
    var a = [
        4009388,
        4009389,
        4009390,
        4009391,
        4009392
    ];
    f == 1 ? status++ : status--;
    selectionLog[status] = c;
    var b = -1;
    if (status <= b++) {
        cm.dispose();
    } else {
        if (status === b++) {
            cm.askMenu_Bottom('做什么好呢？\r\n\r\n#L0#询问想要的物品。#l\r\n#L1#出示我持有的物品。#l', 56, 0);
        } else {
            if (status === b++) {
                if (selectionLog[1] == 0) {
                    cm.askMenu_Bottom('问什么好呢？\r\n\r\n#L0#你需要哪种物品？#l\r\n#L1#我可以在哪里弄到？#l\r\n#L2#是什么颜色的？#l\r\n#L3#再给我个提示吧。#l', 56, 0);
                } else {
                    for (var b = 0; b < a.length; b++) {
                        if (cm.haveItem(a[b])) {
                            cm.sendNormalTalk_Bottom('#face0#你身上有我需要的物品。这个可以给我吗？', 37, 9111000, false, true);
                            return;
                        }
                    }
                    cm.sendNormalTalk_Bottom('#face0#我没什么需要你帮忙的。', 37, 9111000, false, false);
                    cm.dispose();
                }
            } else {
                if (status === b++) {
                    if (selectionLog[1] == 0) {
                        if (selectionLog[2] == 0) {
                            cm.sendNormalTalk_Bottom('#face0#我想找些东西来装饰我们的神社。比如玩偶之类的……', 37, 9111000, false, true);
                        } else {
                            if (selectionLog[2] == 1) {
                                cm.sendNormalTalk_Bottom('#face0#你仔细想想我们神社的名称。', 37, 9111000, false, true);
                            } else {
                                if (selectionLog[2] == 2) {
                                    cm.sendNormalTalk_Bottom('#face0#颜色嘛……橙色、绿色，或者蓝色的玩偶怎么样？', 37, 9111000, false, true);
                                } else {
                                    cm.sendNormalTalk_Bottom('#face0#提示……如果玩偶脸上带有表情就更好了。', 37, 9111000, false, false);
                                }
                            }
                        }
                        cm.dispose();
                    } else {
                        var e = '要送什么？\r\n';
                        for (var b = 0; b < a.length; b++) {
                            if (cm.haveItem(a[b])) {
                                e += '\r\n#L' + b + '##t' + a[b] + '##l';
                            }
                        }
                        cm.askMenu_Bottom(e, 56, 0);
                    }
                } else {
                    if (status === b++) {
                        cm.gainItem(a[c], -1);
                        cm.addNumberForQuestInfo(58700 + cm.getNpc(), 'ing', 1);
                        cm.sendNormalTalk_Bottom('#face1#谢谢你。这个正适合拿来装饰神社。', 37, 9111000, false, true);
                    } else {
                        if (status === b++) {
                            gain(3);
                        }
                    }
                }
            }
        }
    }
}
function action1(f, d, c) {
    if (status == 0 && f == 0) {
        cm.dispose();
        return;
    }
    var a = [
        2000000,
        2000001,
        2000002,
        2000003
    ];
    f == 1 ? status++ : status--;
    selectionLog[status] = c;
    var b = -1;
    if (status <= b++) {
        cm.dispose();
    } else {
        if (status === b++) {
            cm.askMenu_Bottom('做什么好呢？\r\n\r\n#L0#询问想要的物品。#l\r\n#L1#出示我持有的物品。#l', 56, 0);
        } else {
            if (status === b++) {
                if (selectionLog[1] == 0) {
                    cm.askMenu_Bottom('问什么好呢？\r\n\r\n#L0#你需要哪种物品？#l\r\n#L1#我可以在哪里弄到？#l\r\n#L2#是什么颜色的？#l\r\n#L3#再给我个提示吧。#l', 56, 0);
                } else {
                    for (var b = 0; b < a.length; b++) {
                        if (cm.haveItem(a[b])) {
                            cm.sendNormalTalk_Bottom('#face0#我需要你持有物品中的这一样东西。', 37, 9111001, false, true);
                            return;
                        }
                    }
                    cm.sendNormalTalk_Bottom('#face0#你身上好像没有我需要的物品。', 37, 9111001, false, false);
                    cm.dispose();
                }
            } else {
                if (status === b++) {
                    if (selectionLog[1] == 0) {
                        if (selectionLog[2] == 0) {
                            cm.sendNormalTalk_Bottom('#face0#唔……我需要能使我恢复健康的物品。', 37, 9111001, false, true);
                        } else {
                            if (selectionLog[2] == 1) {
                                cm.sendNormalTalk_Bottom('#face0#只要你坚持在地图中狩猎，就可以获得该物品。', 37, 9111001, false, true);
                            } else {
                                if (selectionLog[2] == 2) {
                                    cm.sendNormalTalk_Bottom('#face0#有红色、橙色、白色、蓝色、紫色的。', 37, 9111001, false, true);
                                } else {
                                    cm.sendNormalTalk_Bottom('#face0#一般勇士们都用它来恢复血量或魔量。', 37, 9111001, false, false);
                                }
                            }
                        }
                        cm.dispose();
                    } else {
                        var e = '要送什么？\r\n';
                        for (var b = 0; b < a.length; b++) {
                            if (cm.haveItem(a[b])) {
                                e += '\r\n#L' + b + '##t' + a[b] + '##l';
                            }
                        }
                        cm.askMenu_Bottom(e, 56, 0);
                    }
                } else {
                    if (status === b++) {
                        cm.gainItem(a[c], -1);
                        cm.addNumberForQuestInfo(58700 + cm.getNpc(), 'ing', 1);
                        cm.sendNormalTalk_Bottom('#face1#谢谢你。有了这个，我应该会恢复得更好。', 37, 9111001, false, true);
                    } else {
                        if (status === b++) {
                            gain(3);
                        }
                    }
                }
            }
        }
    }
}
function action2(f, d, c) {
    if (status == 0 && f == 0) {
        cm.dispose();
        return;
    }
    var a = [
        2004003,
        2004023,
        2004043,
        2004063,
        2004083,
        2004103
    ];
    f == 1 ? status++ : status--;
    selectionLog[status] = c;
    var b = -1;
    if (status <= b++) {
        cm.dispose();
    } else {
        if (status === b++) {
            cm.askMenu_Bottom('做什么好呢？\r\n\r\n#L0#询问想要的物品。#l\r\n#L1#出示我持有的物品。#l', 56, 0);
        } else {
            if (status === b++) {
                if (selectionLog[1] == 0) {
                    cm.askMenu_Bottom('问什么好呢？\r\n\r\n#L0#你需要哪种物品？#l\r\n#L1#我可以在哪里弄到？#l\r\n#L2#是什么颜色的？#l\r\n#L3#再给我个提示吧。#l', 56, 0);
                } else {
                    for (var b = 0; b < a.length; b++) {
                        if (cm.haveItem(a[b])) {
                            cm.sendNormalTalk_Bottom('#face0#我需要你持有物品中的这件东西。', 37, 9111002, false, false);
                            return;
                        }
                    }
                    cm.sendNormalTalk_Bottom('#face0#你身上没有我需要的物品。', 37, 9111002, false, false);
                    cm.dispose();
                }
            } else {
                if (status === b++) {
                    if (selectionLog[1] == 0) {
                        if (selectionLog[2] == 0) {
                            cm.sendNormalTalk_Bottom('#face0#我需要可以让我变得更强大的东西，比如药水。', 37, 9111002, false, true);
                        } else {
                            if (selectionLog[2] == 1) {
                                cm.sendNormalTalk_Bottom('#face0#我想想，听说通过专业技术就可以获得那样的药水。', 37, 9111002, false, true);
                            } else {
                                if (selectionLog[2] == 2) {
                                    cm.sendNormalTalk_Bottom('#face0#我希望我变得力气更大，更敏捷，更聪明，运气更好，还有防御力提升。', 37, 9111002, false, true);
                                } else {
                                    cm.sendNormalTalk_Bottom('#face0#我需要4级的药水！！行了，我只能告诉你这么多。', 37, 9111002, false, false);
                                }
                            }
                        }
                        cm.dispose();
                    } else {
                        var e = '要送什么？\r\n';
                        for (var b = 0; b < a.length; b++) {
                            if (cm.haveItem(a[b])) {
                                e += '\r\n#L' + b + '##t' + a[b] + '##l';
                            }
                        }
                        cm.askMenu_Bottom(e, 56, 0);
                    }
                } else {
                    if (status === b++) {
                        cm.gainItem(a[c], -1);
                        cm.addNumberForQuestInfo(58700 + cm.getNpc(), 'ing', 1);
                        cm.sendNormalTalk_Bottom('#face0#谢谢你。这对我很有帮助！', 37, 9111002, false, true);
                    } else {
                        if (status === b++) {
                            gain(3);
                        }
                    }
                }
            }
        }
    }
}
function action3(f, d, c) {
    if (status == 0 && f == 0) {
        cm.dispose();
        return;
    }
    var a = [
        1002551,
        1004223,
        1052792,
        1082599,
        1072959
    ];
    f == 1 ? status++ : status--;
    selectionLog[status] = c;
    var b = -1;
    if (status <= b++) {
        cm.dispose();
    } else {
        if (status === b++) {
            cm.askMenu_Bottom('做什么好呢？\r\n\r\n#L0#询问想要的物品。#l\r\n#L1#出示我持有的物品。#l', 56, 0);
        } else {
            if (status === b++) {
                if (selectionLog[1] == 0) {
                    cm.askMenu_Bottom('问什么好呢？\r\n\r\n#L0#你需要哪种物品？#l\r\n#L1#我可以在哪里弄到？#l\r\n#L2#是什么颜色的？#l\r\n#L3#再给我个提示吧。#l', 56, 0);
                } else {
                    for (var b = 0; b < a.length; b++) {
                        if (cm.haveItem(a[b])) {
                            cm.sendNormalTalk_Bottom('#face2#我需要你持有物品中的这件东西。', 37, 9111003, false, true);
                            return;
                        }
                    }
                    cm.sendNormalTalk_Bottom('#face0#如果你没礼物给我，就别找我说话。', 37, 9111003, false, false);
                    cm.dispose();
                }
            } else {
                if (status === b++) {
                    if (selectionLog[1] == 0) {
                        if (selectionLog[2] == 0) {
                            cm.sendNormalTalk_Bottom('#face0#为了守护日本，我需要一些防具来送给其他朋友', 37, 9111003, false, true);
                        } else {
                            if (selectionLog[2] == 1) {
                                cm.sendNormalTalk_Bottom('#face0#你在消灭怪物的过程中可以获得。', 37, 9111003, false, true);
                            } else {
                                if (selectionLog[2] == 2) {
                                    cm.sendNormalTalk_Bottom('#face0#帽子是给海盗的，全身服是给飞侠的，鞋子给弓箭手，手套给魔法师……带有青龙气息的帽子是战士用的。', 37, 9111003, false, true);
                                } else {
                                    cm.sendNormalTalk_Bottom('#face0#120级！啊，好像也有……110级的。', 37, 9111003, false, false);
                                }
                            }
                        }
                        cm.dispose();
                    } else {
                        var e = '要送什么？\r\n';
                        for (var b = 0; b < a.length; b++) {
                            if (cm.haveItem(a[b])) {
                                e += '\r\n#L' + b + '##t' + a[b] + '##l';
                            }
                        }
                        cm.askMenu_Bottom(e, 56, 0);
                    }
                } else {
                    if (status === b++) {
                        cm.gainItem(a[c], -1);
                        cm.addNumberForQuestInfo(58700 + cm.getNpc(), 'ing', 1);
                        cm.sendNormalTalk_Bottom('#face0#谢谢你。这能大大有助于维护日本的治安。', 37, 9111003, false, true);
                    } else {
                        if (status === b++) {
                            gain(3);
                        }
                    }
                }
            }
        }
    }
}
function action4(f, d, c) {
    if (status == 0 && f == 0) {
        cm.dispose();
        return;
    }
    var a = [
        2001530,
        2020013,
        2022017,
        2022018,
        2001002
    ];
    f == 1 ? status++ : status--;
    selectionLog[status] = c;
    var b = -1;
    if (status <= b++) {
        cm.dispose();
    } else {
        if (status === b++) {
            cm.askMenu_Bottom('做什么好呢？\r\n\r\n#L0#询问想要的物品。#l\r\n#L1#出示我持有的物品。#l', 56, 0);
        } else {
            if (status === b++) {
                if (selectionLog[1] == 0) {
                    cm.askMenu_Bottom('问什么好呢？\r\n\r\n#L0#你需要哪种物品？#l\r\n#L1#我可以在哪里弄到？#l\r\n#L2#是什么颜色的？#l\r\n#L3#再给我个提示吧。#l', 56, 0);
                } else {
                    for (var b = 0; b < a.length; b++) {
                        if (cm.haveItem(a[b])) {
                            cm.sendNormalTalk_Bottom('#face0#哦？你的持有物品中有我想要的东西哦。', 37, 9111004, false, true);
                            return;
                        }
                    }
                    cm.sendNormalTalk_Bottom('#face0#你没有我想要的食物吗？', 37, 9111004, false, false);
                    cm.dispose();
                }
            } else {
                if (status === b++) {
                    if (selectionLog[1] == 0) {
                        if (selectionLog[2] == 0) {
                            cm.sendNormalTalk_Bottom('#face0#我来到这地方后认识了几种香喷喷的食物！', 37, 9111004, false, true);
                        } else {
                            if (selectionLog[2] == 1) {
                                cm.sendNormalTalk_Bottom('#face0#在任何地方都很常见啊。其中几种在神社这里也有卖的。', 37, 9111004, false, true);
                            } else {
                                if (selectionLog[2] == 2) {
                                    cm.sendNormalTalk_Bottom('#face0#呵，虽然对我来说只是吃着好玩，但对人类来说，却是维持生命的必需品。', 37, 9111004, false, true);
                                } else {
                                    cm.sendNormalTalk_Bottom('#face0#比如热气腾腾的汤，或是里面加了冰块……或者只是单纯的乳制品。', 37, 9111004, false, false);
                                }
                            }
                        }
                        cm.dispose();
                    } else {
                        var e = '要送什么？\r\n';
                        for (var b = 0; b < a.length; b++) {
                            if (cm.haveItem(a[b])) {
                                e += '\r\n#L' + b + '##t' + a[b] + '##l';
                            }
                        }
                        cm.askMenu_Bottom(e, 56, 0);
                    }
                } else {
                    if (status === b++) {
                        cm.gainItem(a[c], -1);
                        cm.addNumberForQuestInfo(58700 + cm.getNpc(), 'ing', 1);
                        cm.sendNormalTalk_Bottom('#face0#太好了。我不会忘记你的恩惠的，哈哈哈', 37, 9111004, false, true);
                    } else {
                        if (status === b++) {
                            gain(3);
                        }
                    }
                }
            }
        }
    }
}
function action5(f, d, c) {
    if (status == 0 && f == 0) {
        cm.dispose();
        return;
    }
    var a = [
        1332258,
        1232093,
        1312183
    ];
    f == 1 ? status++ : status--;
    selectionLog[status] = c;
    var b = -1;
    if (status <= b++) {
        cm.dispose();
    } else {
        if (status === b++) {
            cm.askMenu_Bottom('做什么好呢？\r\n\r\n#L0#询问想要的物品。#l\r\n#L1#出示我持有的物品。#l', 56, 0);
        } else {
            if (status === b++) {
                if (selectionLog[1] == 0) {
                    cm.askMenu_Bottom('问什么好呢？\r\n\r\n#L0#你需要哪种物品？#l\r\n#L1#我可以在哪里弄到？#l\r\n#L2#是什么颜色的？#l\r\n#L3#再给我个提示吧。#l', 56, 0);
                } else {
                    for (var b = 0; b < a.length; b++) {
                        if (cm.haveItem(a[b])) {
                            cm.sendNormalTalk_Bottom('#face2#这正是我想要的东西！', 37, 9111005, false, true);
                            return;
                        }
                    }
                    cm.sendNormalTalk_Bottom('#face0#你要送礼物的话，就送我想要的物品吧？', 37, 9111005, false, false);
                    cm.dispose();
                }
            } else {
                if (status === b++) {
                    if (selectionLog[1] == 0) {
                        if (selectionLog[2] == 0) {
                            cm.sendNormalTalk_Bottom('#face0#我作为人类时常常挥舞的东西。', 37, 9111005, false, true);
                        } else {
                            if (selectionLog[2] == 1) {
                                cm.sendNormalTalk_Bottom('#face0#那东西很锋利，尖尖的，有时候看起来很有威力，或是很钝重。', 37, 9111005, false, true);
                            } else {
                                if (selectionLog[2] == 2) {
                                    cm.sendNormalTalk_Bottom('#face0#之前我以为只有武将才会用它……\r\n但后来我发现海盗们也会使用它，我还见过有些长着翅膀的奇怪家伙佩带它', 37, 9111005, false, true);
                                } else {
                                    cm.sendNormalTalk_Bottom('#face0#120级。这之上或之下的等级都不行。', 37, 9111005, false, false);
                                }
                            }
                        }
                        cm.dispose();
                    } else {
                        var e = '要送什么？\r\n';
                        for (var b = 0; b < a.length; b++) {
                            if (cm.haveItem(a[b])) {
                                e += '\r\n#L' + b + '##t' + a[b] + '##l';
                            }
                        }
                        cm.askMenu_Bottom(e, 56, 0);
                    }
                } else {
                    if (status === b++) {
                        cm.gainItem(a[c], -1);
                        cm.addNumberForQuestInfo(58700 + cm.getNpc(), 'ing', 1);
                        cm.sendNormalTalk_Bottom('#face1#谢谢你。托你的福，我得到了一把称手的武器。', 37, 9111005, false, true);
                    } else {
                        if (status === b++) {
                            gain(3);
                        }
                    }
                }
            }
        }
    }
}
function action6(f, d, c) {
    if (status == 0 && f == 0) {
        cm.dispose();
        return;
    }
    var a = [
        2060000,
        2060001,
        2060002,
        2060003,
        2060008,
        2060009
    ];
    f == 1 ? status++ : status--;
    selectionLog[status] = c;
    var b = -1;
    if (status <= b++) {
        cm.dispose();
    } else {
        if (status === b++) {
            cm.askMenu_Bottom('做什么好呢？\r\n\r\n#L0#询问想要的物品。#l\r\n#L1#出示我持有的物品。#l', 56, 0);
        } else {
            if (status === b++) {
                if (selectionLog[1] == 0) {
                    cm.askMenu_Bottom('问什么好呢？\r\n\r\n#L0#你需要哪种物品？#l\r\n#L1#我可以在哪里弄到？#l\r\n#L2#是什么颜色的？#l\r\n#L3#再给我个提示吧。#l', 56, 0);
                } else {
                    for (var b = 0; b < a.length; b++) {
                        if (cm.haveItem(a[b])) {
                            cm.sendNormalTalk_Bottom('#face1#哇，那个能不能给我？', 37, 9111006, false, true);
                            return;
                        }
                    }
                    cm.sendNormalTalk_Bottom('#face0#勇士，你身上没有我需要的物品。', 37, 9111006, false, false);
                    cm.dispose();
                }
            } else {
                if (status === b++) {
                    if (selectionLog[1] == 0) {
                        if (selectionLog[2] == 0) {
                            cm.sendNormalTalk_Bottom('#face0#嘿嘿，我需要那种得用几种材料结合起来才能制成1个的物品。', 37, 9111006, false, true);
                        } else {
                            if (selectionLog[2] == 1) {
                                cm.sendNormalTalk_Bottom('#face0#模样就是在一根长树枝顶端带有一块尖尖的铁。', 37, 9111006, false, true);
                            } else {
                                if (selectionLog[2] == 2) {
                                    cm.sendNormalTalk_Bottom('#face0#唔，是将弓作为武器的人们用的。', 37, 9111006, false, true);
                                } else {
                                    cm.sendNormalTalk_Bottom('#face0#材料用青铜也行，钢铁也行。我需要优质又威力强劲的材料。', 37, 9111006, false, false);
                                }
                            }
                        }
                        cm.dispose();
                    } else {
                        var e = '要送什么？\r\n';
                        for (var b = 0; b < a.length; b++) {
                            if (cm.haveItem(a[b])) {
                                e += '\r\n#L' + b + '##t' + a[b] + '##l';
                            }
                        }
                        cm.askMenu_Bottom(e, 56, 0);
                    }
                } else {
                    if (status === b++) {
                        cm.gainItem(a[c], -1);
                        cm.addNumberForQuestInfo(58700 + cm.getNpc(), 'ing', 1);
                        cm.sendNormalTalk_Bottom('#face2#嘿嘿，我收集这些箭矢是有用途哒。', 37, 9111006, false, true);
                    } else {
                        if (status === b++) {
                            gain(3);
                        }
                    }
                }
            }
        }
    }
}
function action7(f, d, c) {
    if (status == 0 && f == 0) {
        cm.dispose();
        return;
    }
    var a = [
        4022001,
        4022003,
        4022005,
        4022007,
        4022009,
        4022011,
        4022013,
        4022015,
        4022017,
        4022019,
        4022021
    ];
    f == 1 ? status++ : status--;
    selectionLog[status] = c;
    var b = -1;
    if (status <= b++) {
        cm.dispose();
    } else {
        if (status === b++) {
            cm.askMenu_Bottom('做什么好呢？\r\n\r\n#L0#询问想要的物品。#l\r\n#L1#出示我持有的物品。#l', 56, 0);
        } else {
            if (status === b++) {
                if (selectionLog[1] == 0) {
                    cm.askMenu_Bottom('问什么好呢？\r\n\r\n#L0#你需要哪种物品？#l\r\n#L1#我可以在哪里弄到？#l\r\n#L2#是什么颜色的？#l\r\n#L3#再给我个提示吧。#l', 56, 0);
                } else {
                    for (var b = 0; b < a.length; b++) {
                        if (cm.haveItem(a[b])) {
                            cm.sendNormalTalk_Bottom('#face2#呀……你身上有我很想要的物品呢。', 37, 9111007, false, true);
                            return;
                        }
                    }
                    cm.sendNormalTalk_Bottom('#face2#你身上没有我需要的物品呢。', 37, 9111007, false, true);
                    cm.dispose();
                }
            } else {
                if (status === b++) {
                    if (selectionLog[1] == 0) {
                        if (selectionLog[2] == 0) {
                            cm.sendNormalTalk_Bottom('#face0#我喜欢会散发香气的物品。最好是花。', 37, 9111007, false, true);
                        } else {
                            if (selectionLog[2] == 1) {
                                cm.sendNormalTalk_Bottom('#face0#有淡绿色、草绿色、粉红色、蓝色、红色的。', 37, 9111007, false, true);
                            } else {
                                if (selectionLog[2] == 2) {
                                    cm.sendNormalTalk_Bottom('#face0#唔，好像炼金术士们比较常用它。', 37, 9111007, false, true);
                                } else {
                                    cm.sendNormalTalk_Bottom('#face0#那物品不会很难弄到的。一开始就能搞到很多。呵呵。', 37, 9111007, false, false);
                                }
                            }
                        }
                        cm.dispose();
                    } else {
                        var e = '要送什么？\r\n';
                        for (var b = 0; b < a.length; b++) {
                            if (cm.haveItem(a[b])) {
                                e += '\r\n#L' + b + '##t' + a[b] + '##l';
                            }
                        }
                        cm.askMenu_Bottom(e, 56, 0);
                    }
                } else {
                    if (status === b++) {
                        cm.gainItem(a[c], -1);
                        cm.addNumberForQuestInfo(58700 + cm.getNpc(), 'ing', 1);
                        cm.sendNormalTalk_Bottom('#face1#谢谢你，这香气真芬芳啊。', 37, 9111007, false, true);
                    } else {
                        if (status === b++) {
                            gain(3);
                        }
                    }
                }
            }
        }
    }
}
function action8(f, d, c) {
    if (status == 0 && f == 0) {
        cm.dispose();
        return;
    }
    var a = [
        4020000,
        4020001,
        4020002,
        4020003,
        4020004,
        4020005,
        4020006,
        4020007,
        4020008
    ];
    f == 1 ? status++ : status--;
    selectionLog[status] = c;
    var b = -1;
    if (status <= b++) {
        cm.dispose();
    } else {
        if (status === b++) {
            cm.askMenu_Bottom('做什么好呢？\r\n\r\n#L0#询问想要的物品。#l\r\n#L1#出示我持有的物品。#l', 56, 0);
        } else {
            if (status === b++) {
                if (selectionLog[1] == 0) {
                    cm.askMenu_Bottom('问什么好呢？\r\n\r\n#L0#你需要哪种物品？#l\r\n#L1#我可以在哪里弄到？#l\r\n#L2#是什么颜色的？#l\r\n#L3#再给我个提示吧。#l', 56, 0);
                } else {
                    for (var b = 0; b < a.length; b++) {
                        if (cm.haveItem(a[b])) {
                            cm.sendNormalTalk_Bottom('#face1#哦？你身上好像带着我需要的物品哦。', 37, 9111008, false, true);
                            return;
                        }
                    }
                    cm.sendNormalTalk_Bottom('#face1#你……要送我那么拙劣的礼物吗。', 37, 9111008, false, false);
                    cm.dispose();
                }
            } else {
                if (status === b++) {
                    if (selectionLog[1] == 0) {
                        if (selectionLog[2] == 0) {
                            cm.sendNormalTalk_Bottom('#face0#我……喜欢宝石的原石，呵呵。', 37, 9111008, false, true);
                        } else {
                            if (selectionLog[2] == 1) {
                                cm.sendNormalTalk_Bottom('#face0#有红色、粉红色、蓝色、祖母绿的，还有的混多种颜色于一体。', 37, 9111008, false, true);
                            } else {
                                if (selectionLog[2] == 2) {
                                    cm.sendNormalTalk_Bottom('#face0#这个嘛，我想那些制作饰品的人应该很常用。', 37, 9111008, false, true);
                                } else {
                                    cm.sendNormalTalk_Bottom('#face0#那东西不难弄到。我不会向你提出很过分的要求的。', 37, 9111008, false, false);
                                }
                            }
                        }
                        cm.dispose();
                    } else {
                        var e = '要送什么？\r\n';
                        for (var b = 0; b < a.length; b++) {
                            if (cm.haveItem(a[b])) {
                                e += '\r\n#L' + b + '##t' + a[b] + '##l';
                            }
                        }
                        cm.askMenu_Bottom(e, 56, 0);
                    }
                } else {
                    if (status === b++) {
                        cm.gainItem(a[c], -1);
                        cm.addNumberForQuestInfo(58700 + cm.getNpc(), 'ing', 1);
                        cm.sendNormalTalk_Bottom('#face0#谢谢你。', 37, 9111008, false, true);
                    } else {
                        if (status === b++) {
                            gain(3);
                        }
                    }
                }
            }
        }
    }
}
function action9(f, d, c) {
    if (status == 0 && f == 0) {
        cm.dispose();
        return;
    }
    var a = [
        4021031,
        4021032,
        4021033,
        4021034,
        4021035
    ];
    f == 1 ? status++ : status--;
    selectionLog[status] = c;
    var b = -1;
    if (status <= b++) {
        cm.dispose();
    } else {
        if (status === b++) {
            cm.askMenu_Bottom('做什么好呢？\r\n\r\n#L0#询问想要的物品。#l\r\n#L1#出示我持有的物品。#l', 56, 0);
        } else {
            if (status === b++) {
                if (selectionLog[1] == 0) {
                    cm.askMenu_Bottom('问什么好呢？\r\n\r\n#L0#你需要哪种物品？#l\r\n#L1#我可以在哪里弄到？#l\r\n#L2#是什么颜色的？#l\r\n#L3#再给我个提示吧。#l', 56, 0);
                } else {
                    for (var b = 0; b < a.length; b++) {
                        if (cm.haveItem(a[b])) {
                            cm.sendNormalTalk_Bottom('#face0#嘿嘿，我知道你背包里正带着我需要的物品哦。', 37, 9111009, false, true);
                            return;
                        }
                    }
                    cm.sendNormalTalk_Bottom('#face0#你没有我需要的东西啊。', 37, 9111009, false, true);
                    cm.dispose();
                }
            } else {
                if (status === b++) {
                    if (selectionLog[1] == 0) {
                        if (selectionLog[2] == 0) {
                            cm.sendNormalTalk_Bottom('#face0#我呢！需要可以用于研究的研究材料！最近我对这个世界的专业技术非常感兴趣。', 37, 9111009, false, true);
                        } else {
                            if (selectionLog[2] == 1) {
                                cm.sendNormalTalk_Bottom('#face0#我连这个都得告诉你吗？你可以通过消灭怪物获得，或者通过分解机……总之是通过某种机械也可以获得。', 37, 9111009, false, true);
                            } else {
                                if (selectionLog[2] == 2) {
                                    cm.sendNormalTalk_Bottom('#face0#是谁用的。类似我这样对专业技术进行研究的人常常会用到啊！', 37, 9111009, false, true);
                                } else {
                                    cm.sendNormalTalk_Bottom('#face0#精髓或结晶……关键是具有长生不老的效果！我需要那样的石头！', 37, 9111009, false, false);
                                }
                            }
                        }
                        cm.dispose();
                    } else {
                        var e = '要送什么？\r\n';
                        for (var b = 0; b < a.length; b++) {
                            if (cm.haveItem(a[b])) {
                                e += '\r\n#L' + b + '##t' + a[b] + '##l';
                            }
                        }
                        cm.askMenu_Bottom(e, 56, 0);
                    }
                } else {
                    if (status === b++) {
                        cm.gainItem(a[c], -1);
                        cm.addNumberForQuestInfo(58700 + cm.getNpc(), 'ing', 1);
                        cm.sendNormalTalk_Bottom('#face1#谢谢你。这正是我十分需要的呢。', 37, 9111009, false, true);
                    } else {
                        if (status === b++) {
                            gain(3);
                        }
                    }
                }
            }
        }
    }
}
var npcs = [
    '木野子',
    '竹野子',
    '棘鬼',
    '镰鼬',
    '鵺',
    '无头鬼',
    '暗',
    '泉奈',
    '天狗',
    '万事屋'
];
var rewards = [
    0,
    80011290,
    80011294,
    0,
    80011295,
    0,
    80011291,
    80011293,
    2023626,
    80011292
];
function gain(b) {
    var a = cm.addNumberForQuestInfo(58710, '' + cm.getNpc(), b);
    cm.getTopMsgFont('你与' + npcs[cm.getNpc()] + '的亲密度增加了' + b + '点。', 3, 20, 8, 0, 0);
    if (a >= 70 && a - b < 70) {
        var c = rewards[cm.getNpc()];
        if (rewards[cm.getNpc()] > 80000000) {
            cm.teachSkill(c, 1, 0);
        }
    }
    cm.setStringForQuestInfo(58710, 'lastGift' + cm.getNpc(), cm.getNowTimeString(1));
    cm.dispose();
}