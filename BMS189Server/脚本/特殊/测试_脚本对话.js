var status = -1;
var selectionLog = [];
function start() {
    action(1, 0, 0);
}
var texts = [
    [
        0,
        '普通对话',
        'sendNormalTalk'
    ],
    [
        2,
        '显示教程引导图片',
        'onScriptMessage_显示教程引导图片'
    ],
    [
        3,
        '选择是否',
        'askYesNo'
    ],
    [
        4,
        '要求输入文本',
        'askText'
    ],
    [
        5,
        '要求输入数字',
        'askNumber'
    ],
    [
        6,
        '自定义选择',
        'askMenu'
    ],
    [
        7,
        '限时答题_纯文本',
        'onScriptMessage_限时答题_纯文本'
    ],
    [
        8,
        '限时答题_猜NPC',
        'onScriptMessage_限时答题_猜NPC'
    ],
    [
        9,
        '限时答题_纯文本_韩文',
        'onScriptMessage_限时答题_纯文本_韩文'
    ],
    [
        10,
        '美容美发',
        'askAvatar'
    ],
    [
        11,
        '机器人美容美发',
        'askAndroid'
    ],
    [
        12,
        '宠物复活选择',
        'askPet'
    ],
    [
        16,
        '选择接受拒绝',
        'askAcceptDecline'
    ],
    [
        19,
        '万神殿传送门列表',
        'onScriptMessage_万神殿传送门列表'
    ],
    [
        20,
        '神之子破坏洗脑药',
        '（仅响应）'
    ],
    [
        21,
        '加载视频',
        '（仅响应）'
    ],
    [
        25,
        'onScriptMessage_选择转职道路'
    ],
    [
        26,
        '天使装扮选择',
        'askAngelicBuster'
    ],
    [
        27,
        '带人物立绘_普通对话',
        'sendNormalTalk_Illus'
    ],
    [
        28,
        '带人物立绘_选择是否',
        'askYesNo_Illus'
    ],
    [
        29,
        '带人物立绘_选择接受拒绝',
        'askAcceptDecline_Illus'
    ],
    [
        30,
        '带人物立绘_自定义选择',
        'askMenu_Illus'
    ],
    [
        33,
        '神之子双人美容',
        'onScriptMessage_神之子双人美容'
    ],
    [
        38,
        '要求输入文本_特殊UI',
        'askTextSpecialUI'
    ],
    [
        44,
        '头发混染',
        '道具2438624'
    ],
    [
        47,
        '神之子头发混染',
        '道具2438624'
    ],
    [
        49,
        'QTE小游戏',
        '（仅响应）'
    ],
    [
        51,
        '黑色之翼密码锁',
        'onScriptMessage_黑色之翼密码锁'
    ],
    [
        52,
        '好友故事音乐游戏',
        'onScriptMessage_音乐游戏'
    ],
    [
        53,
        '鬼魂公园_入场符咒组合',
        'onScriptMessage_鬼魂公园_入场符咒组合'
    ],
    [
        54,
        '鬼魂公园_入场符咒组合_竞赛模式',
        'onScriptMessage_鬼魂公园_入场符咒组合_竞赛模式'
    ],
    [
        55,
        'sendNewEffects',
        '（仅响应）'
    ],
    [
        70,
        '莫奈德卷轴风格',
        'onScriptMessage_莫奈德卷轴风格'
    ],
    [
        71,
        '带人物立绘II_普通对话',
        'sendNormalTalk_Illus_II'
    ],
    [
        72,
        '带人物立绘II_选择是否',
        'askYesNo_Illus_II'
    ],
    [
        73,
        '带人物立绘II_选择接受拒绝',
        'askAcceptDecline_Illus_II'
    ],
    [
        74,
        '带人物立绘II_自定义选择',
        'askMenu_Illus_II'
    ]
];
function action(mode, type, selection) {
    if (status == 0 && mode == 0) {
        cm.dispose();
        return;
    }
    mode == 1 ? status++ : status--;
    selectionLog[status] = selection;
    var i = -1;
    if (status <= i++) {
        cm.dispose();
    } else {
        if (status === i++) {
            var talk = '请选择要测试的对话类型：\r\n\r\n#b';
            for (var i = 0; i < texts.length; i++) {
                talk += '#L' + i + '#[' + i + '] ' + texts[i][1] + ' - ' + texts[i][2] + '#l\r\n';
            }
            cm.askMenu(talk, 0, 0);
        } else {
            var reactor = 'action_' + texts[selectionLog[1]][1];
            eval(reactor)(mode, type, selection, i);
        }
    }
}
function action_普通对话(d, c, b, a) {
    if (status <= a++) {
        var e = texts[selectionLog[1]][0] + ' ' + texts[selectionLog[1]][1] + ' - ' + texts[selectionLog[1]][2];
        cm.sendNormalTalk(e, 0, 0, false, true);
    } else {
        if (status === a++) {
            cm.dispose();
        }
    }
}
function action_显示教程引导图片(d, c, b, a) {
    if (status <= a++) {
        cm.onScriptMessage_显示教程引导图片(['UI/tutorial/evan/1/0']);
        cm.dispose();
    }
}
function action_选择是否(d, c, b, a) {
    if (status <= a++) {
        var e = texts[selectionLog[1]][0] + ' ' + texts[selectionLog[1]][1] + ' - ' + texts[selectionLog[1]][2];
        cm.askYesNo(e);
    } else {
        if (status === a++) {
            cm.dispose();
        }
    }
}
function action_要求输入文本(d, c, b, a) {
    if (status <= a++) {
        var e = texts[selectionLog[1]][0] + ' ' + texts[selectionLog[1]][1] + ' - ' + texts[selectionLog[1]][2];
        cm.askText(e);
    } else {
        if (status === a++) {
            cm.dispose();
        }
    }
}
function action_要求输入数字(d, c, b, a) {
    if (status <= a++) {
        var e = texts[selectionLog[1]][0] + ' ' + texts[selectionLog[1]][1] + ' - ' + texts[selectionLog[1]][2];
        cm.askNumber(e, 1, 1, 100);
    } else {
        if (status === a++) {
            cm.dispose();
        }
    }
}
function action_自定义选择(d, c, b, a) {
    if (status <= a++) {
        cm.askMenu('你需要我的帮助吗？\r\n\r\n#b#L0#分支0#l#k\r\n#b#L1#分支1#l#k\r\n\r\n#b#L2#分支2l#k', 0, 9400965);
    } else {
        if (status === a++) {
            cm.dispose();
        }
    }
}
function action_限时答题_纯文本(d, c, b, a) {
    if (status <= a++) {
        var e = texts[selectionLog[1]][0] + ' ' + texts[selectionLog[1]][1] + ' - ' + texts[selectionLog[1]][2];
        cm.onScriptMessage_限时答题_纯文本(0, e, '问题', '提示', 0, 100, 666);
        cm.dispose();
    }
}
function action_限时答题_猜NPC(d, c, b, a) {
    if (status <= a++) {
        cm.onScriptMessage_限时答题_猜NPC(0, 0, 0, 0, 0, 0);
        cm.dispose();
    }
}
function action_限时答题_纯文本_韩文(d, c, b, a) {
    if (status <= a++) {
        var e = texts[selectionLog[1]][0] + ' ' + texts[selectionLog[1]][1] + ' - ' + texts[selectionLog[1]][2];
        cm.onScriptMessage_限时答题_纯文本_韩文(0, e, '提示', 666);
        cm.dispose();
    }
}
function action_美容美发(d, c, b, a) {
    if (status <= a++) {
        var e = texts[selectionLog[1]][0] + ' ' + texts[selectionLog[1]][1] + ' - ' + texts[selectionLog[1]][2];
        cm.askAvatar(e, 2100007, 5153015, [
            1,
            2,
            3,
            4,
            9,
            10,
            11
        ]);
    } else {
        if (status === a++) {
            cm.dispose();
        }
    }
}
function action_机器人美容美发(d, c, b, a) {
    if (status <= a++) {
        var e = texts[selectionLog[1]][0] + ' ' + texts[selectionLog[1]][1] + ' - ' + texts[selectionLog[1]][2];
        cm.askAndroid(e, 0, 5153015, [
            1,
            2,
            3,
            4,
            9,
            10,
            11
        ]);
        cm.dispose();
    }
}
function action_宠物复活选择(d, c, b, a) {
    if (status <= a++) {
        var e = texts[selectionLog[1]][0] + ' ' + texts[selectionLog[1]][1] + ' - ' + texts[selectionLog[1]][2];
        cm.dispose();
    }
}
function action_选择接受拒绝(d, c, b, a) {
    if (status <= a++) {
        var e = texts[selectionLog[1]][0] + ' ' + texts[selectionLog[1]][1] + ' - ' + texts[selectionLog[1]][2];
        cm.askAcceptDecline(e);
    } else {
        if (status === a++) {
            cm.dispose();
        }
    }
}
function action_万神殿传送门列表(d, c, b, a) {
    if (status <= a++) {
        cm.onScriptMessage_万神殿传送门列表(5, 0, '#0#六岔路口#1#射手村#2#魔法密林#3#勇士部落#4#废弃都市#5#明珠港#6#林中之城#7#诺特勒斯号#8#圣地#9#里恩#10#天空之城#11# 冰峰雪域#12#玩具城#13#地球防御本部#14#童话村#15#水下世界#16#神木村#17#武陵#18#百草堂#19# 阿里安特#20#马加提亚#21#埃德尔斯坦#22#埃欧雷#23# 克里蒂亚斯#24# 避风港#25# 万神殿#26# 废弃营地#27#荒蛮终点站');
    } else {
        if (status === a++) {
            cm.dispose();
        }
    }
}
function action_神之子破坏洗脑药(d, c, b, a) {
    if (status <= a++) {
        cm.curNodeEventEnd(true);
        cm.setInGameDirectionMode(true, true, true);
        cm.curNodeEventEnd(true);
        cm.playerMessage(-1, '连续点击Ctrl键，使用时间之力叫醒少女。');
        cm.inGameDirectionEvent_头顶图片(['Effect/Direction13.img/effect/zero/power/0'], [
            3600,
            511,
            -167,
            1,
            0,
            1,
            1,
            0
        ]);
        cm.inGameDirectionEvent_头顶图片(['Effect/Direction13.img/effect/zero/power/0'], [
            3600,
            358,
            -372,
            1,
            0,
            1,
            1,
            0
        ]);
        cm.fieldEffect_PlayFieldSound('Kite/HolyAuraE', 100);
        cm.inGameDirectionEvent_BreakEffect('17#17#', 2, 2, 3000);
    } else {
        if (status === a++) {
            cm.setInGameDirectionMode(false, true, false);
            cm.dispose();
        }
    }
}
function action_加载视频(d, c, b, a) {
    if (status <= a++) {
        cm.playVideoByScript('Heroes2.avi');
    } else {
        if (status === a++) {
            cm.dispose();
        }
    }
}
function action_夜光恶魔转职选择(d, c, b, a) {
    if (status <= a++) {
        cm.onScriptMessage_选择转职道路(0);
    } else {
        if (status === a++) {
            cm.dispose();
        }
    }
}
function action_天使装扮选择(d, c, b, a) {
    if (status <= a++) {
        cm.askAngelicBuster();
    } else {
        if (status === a++) {
            cm.dispose();
        }
    }
}
function action_带人物立绘_普通对话(d, c, b, a) {
    if (status <= a++) {
        var e = texts[selectionLog[1]][0] + ' ' + texts[selectionLog[1]][1] + ' - ' + texts[selectionLog[1]][2];
        cm.sendOk_Illus(e, 9400570);
    } else {
        if (status === a++) {
            cm.dispose();
        }
    }
}
function action_带人物立绘_选择是否(d, c, b, a) {
    if (status <= a++) {
        var e = texts[selectionLog[1]][0] + ' ' + texts[selectionLog[1]][1] + ' - ' + texts[selectionLog[1]][2];
        cm.askYesNo_Illus(e, 9400570);
    } else {
        if (status === a++) {
            cm.dispose();
        }
    }
}
function action_带人物立绘_选择接受拒绝(d, c, b, a) {
    if (status <= a++) {
        var e = texts[selectionLog[1]][0] + ' ' + texts[selectionLog[1]][1] + ' - ' + texts[selectionLog[1]][2];
        cm.askAcceptDecline_Illus(e, 9400570);
    } else {
        if (status === a++) {
            cm.dispose();
        }
    }
}
function action_带人物立绘_自定义选择(d, c, b, a) {
    if (status <= a++) {
        cm.askMenu_Illus('你需要我的帮助吗？\r\n\r\n#b#L0#分支0#l#k\r\n#b#L1#分支1#l#k\r\n\r\n#b#L2#分支2l#k', 9400570);
    } else {
        if (status === a++) {
            cm.dispose();
        }
    }
}
function action_神之子双人美容(e, c, b, a) {
    if (status <= a++) {
        var d = cm.getJob();
        if (Math.floor(d / 100) == 101) {
            cm.onScriptMessage_神之子双人美容(talk);
        } else {
            cm.sendOk('必须要神之子才能测试该功能！');
        }
        cm.dispose();
    }
}
function action_要求输入文本_特殊UI(d, c, b, a) {
    if (status <= a++) {
        cm.askTextSpecialUI(4, 1530062, 1, '', 28, 2, 12, 7);
    } else {
        if (status === a++) {
            cm.dispose();
        }
    }
}
function action_神之子头发混染(e, c, b, a) {
    if (status <= a++) {
        var d = cm.getJob();
        if (Math.floor(d / 100) == 101) {
            cm.gainItem(2438624, 1);
            cm.sendOk('请使用道具#i2438624##z2438624#');
        } else {
            cm.sendOk('必须要神之子才能测试该功能！');
        }
        cm.dispose();
    }
}
function action_神之子头发混染(d, c, b, a) {
    if (status <= a++) {
        cm.gainItem(2438624, 1);
        cm.sendOk('请使用道具#i2438624##z2438624#');
        cm.dispose();
    }
}
function action_QTE小游戏(d, c, b, a) {
    if (status <= a++) {
        cm.curNodeEventEnd(true);
        cm.setInGameDirectionMode(true, false, true);
        cm.inGameDirectionEvent_QTE(1000);
    } else {
        if (status === a++) {
            cm.setInGameDirectionMode(false, true, false);
            cm.dispose();
        }
    }
}
function action_黑色之翼密码锁(d, c, b, a) {
    if (status <= a++) {
        cm.onScriptMessage_黑色之翼密码锁(-1);
    } else {
        if (status === a++) {
            cm.dispose();
        }
    }
}
function action_好友故事音乐游戏(d, c, b, a) {
    if (status <= a++) {
        cm.curNodeEventEnd(true);
        cm.setInGameDirectionMode(true, false, true);
        cm.onScriptMessage_音乐游戏('', 0, 370, 60);
    } else {
        if (status === a++) {
            cm.onScriptMessage_音乐游戏('Sound/Bgm42.img/TheBeast', 1, 0, 0);
        } else {
            if (status === a++) {
                cm.setInGameDirectionMode(false, true, false);
                cm.dispose();
            }
        }
    }
}
function action_鬼魂公园_入场符咒组合(d, c, b, a) {
    if (status <= a++) {
        cm.onScriptMessage_鬼魂公园_入场符咒组合();
    } else {
        if (status === a++) {
            cm.dispose();
        }
    }
}
function action_鬼魂公园_入场符咒组合_竞赛模式(d, c, b, a) {
    if (status <= a++) {
        cm.onScriptMessage_鬼魂公园_入场符咒组合_竞赛模式();
    } else {
        if (status === a++) {
            cm.dispose();
        }
    }
}
function action_sendNewEffects(d, c, b, a) {
    if (status <= a++) {
        cm.curNodeEventEnd(true);
        cm.setInGameDirectionMode(true, false, true);
        cm.sendNewEffects(12, [
            5000,
            -4000,
            -143,
            0,
            0
        ]);
    } else {
        if (status === a++) {
            cm.setInGameDirectionMode(false, true, false);
            cm.dispose();
        }
    }
}
function action_莫奈德卷轴风格(d, c, b, a) {
    if (status <= a++) {
        cm.onScriptMessage_莫奈德卷轴风格(9400590, '负责殿后的斯洛克走上前来，一脸无语地说道。\r\n“你们这是干什么？现在是打嘴仗的时候吗！我们刚离开村子，森林附近的怪物就尾随过来了！”\r\n正如他所说，能看见一帮怪物从雪原尽头朝这边涌来。\r\n“照这样下去，估计很快会被追上。咱们要么以辛苦收集到的食物做诱饵，跟他们拉开距离，要么就赶快过去灭了他们。”\r\n           #i4036367#\r\n#b\r\n#L0#得快点去消灭他们！#l');
    } else {
        if (status === a++) {
            cm.dispose();
        }
    }
}
function action_带人物立绘II_普通对话(d, c, b, a) {
    if (status <= a++) {
        cm.sendNormalTalk_Illus_II('唤醒武将的药做好了。你代我转交给#p9130008:# 吧。', 9130102, 4, false, true, 9130102);
    } else {
        if (status === a++) {
            cm.dispose();
        }
    }
}
function action_带人物立绘II_选择是否(d, c, b, a) {
    if (status <= a++) {
        cm.askYesNo_Illus_II('为了解除那个咒术，需要做几件事。你能帮我吗？', 9130102, 0, false);
    } else {
        if (status === a++) {
            cm.dispose();
        }
    }
}
function action_带人物立绘II_选择接受拒绝(d, c, b, a) {
    if (status <= a++) {
        var e = texts[selectionLog[1]][0] + ' ' + texts[selectionLog[1]][1] + ' - ' + texts[selectionLog[1]][2];
        cm.askAcceptDecline_Illus_II(e, 9130102, 1, 9130102);
    } else {
        if (status === a++) {
            cm.dispose();
        }
    }
}
function action_带人物立绘II_自定义选择(d, c, b, a) {
    if (status <= a++) {
        var e = texts[selectionLog[1]][0] + ' ' + texts[selectionLog[1]][1] + ' - ' + texts[selectionLog[1]][2];
        cm.askMenu_Illus_II(e, 9130102, 1, 9130102);
    } else {
        if (status === a++) {
            cm.dispose();
        }
    }
}