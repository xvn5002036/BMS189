var status = -1;
var BGM = [
    [
        '阿里安特',
        'Bgm14/Ariant'
    ],
    [
        '明珠港',
        'Bgm02/AboveTheTreetops'
    ],
    [
        '射手村',
        'Bgm00/FloralLife'
    ],
    [
        '勇士部落',
        'Bgm00/Nightmare'
    ],
    [
        '废弃都市',
        'Bgm01/BadGuys'
    ],
    [
        '魔法密林',
        'Bgm02/WhenTheMorningComes'
    ],
    [
        '林中之城',
        'Bgm00/SleepyWood'
    ],
    [
        '埃欧雷',
        'Bgm25/WindAndFlower'
    ],
    [
        '天空之城',
        'Bgm04/Shinin\'Harbor'
    ],
    [
        '冰封雪域',
        'Bgm03/SnowyVillage'
    ],
    [
        '水下世界',
        'Bgm11/Aquarium'
    ],
    [
        '玩具城',
        'Bgm06/FantasticThinking'
    ],
    [
        '神木村',
        'Bgm13/Leafre'
    ],
    [
        '圣地',
        'Bgm18/QueensGarden'
    ],
    [
        '埃德尔斯坦',
        'Bgm22/EdelsteinCity'
    ],
    [
        '玛加提亚',
        'Bgm12/Dispute'
    ],
    [
        '武陵',
        'Bgm15/MureungHill'
    ],
    [
        '里恩',
        'Bgm19/RienVillage'
    ],
    [
        '尖耳狐狸村',
        'Bgm36/foxvillage'
    ],
    [
        '万神殿',
        'Bgm27/Pantheon'
    ],
    [
        '童话村',
        'Bgm11/DownTown'
    ]
];
var correctText = [
    '嗯~挺厉害的嘛。你看上去可不怎么聪明。',
    '真了不起！你是怎么答对的？',
    '切……对了。这次我就让你通过吧。',
    '你看上去笨笨的，还有两下子嘛。'
];
function start() {
    action(1, 0, 0);
}
function action(c, e, j) {
    var a = cm.getNpc();
    if (a < 1 || a > 4) {
        cm.dispose();
        return;
    }
    status++;
    var b = -1;
    var k = f.getNumberProperty('stage24_bgm_' + a);
    if (status <= b++) {
        cm.dispose();
    } else {
        if (status === b++) {
            cm.askText('你要仔细想想现在听到的音乐是哪个村庄的背景音乐，\r\n然后将村庄的名字写在下面的空格内。\r\n对了，我可是无比严格的女人哦。哈哈哈！', 2540010);
        } else {
            if (status === b++) {
                var f = f.getInstance('副本_起源之塔');
                var d = a == 1 ? 1 : em.getNumberProperty('stage24_question_' + (a - 1));
                var l = cm.getText();
                var k = f.getNumberProperty('stage24_bgm_' + a);
                if (d == 0) {
                    f.restartEventTimer(f.getTimeLeft() - 5 * 60 * 1000);
                    cm.getWeatherEffectNotice('糟糕，朦胧石的保护时间被桃乐丝扣除了5分钟！', 147, 60000, 1);
                    cm.sendOk('咦，你还没有回答上一个问题怎么就到这里来了？桃乐丝讨厌投机取巧的人！', 2540010);
                    cm.dispose();
                } else {
                    if (!l.equals(BGM[k][0])) {
                        f.restartEventTimer(f.getTimeLeft() - 5 * 60 * 1000);
                        cm.getWeatherEffectNotice('糟糕，朦胧石的保护时间被桃乐丝扣除了5分钟！下次回答前一定要想清楚啊！', 147, 60000, 1);
                        cm.sendOk('答错了，你个笨蛋！不聪明的人会受到桃乐丝的惩罚！', 2540010);
                        cm.dispose();
                    } else {
                        cm.sendNext(correctText[cm.rand(0, correctText.length - 1)], 2540010);
                    }
                }
            } else {
                if (status === b++) {
                    if (a == 4) {
                        var g = cm.getMap().getPortal(a + 1).getPosition();
                        cm.onTeleport(1, cm.getPlayer().getId(), g.getX(), g.getY());
                        em.setProperty('stage24', 'clear');
                        cm.fieldEffect_ScreenMsg('UI/UIWindowPL.img/HiddenCatch/StageImg/clear');
                        cm.dispose();
                    } else {
                        cm.curNodeEventEnd(true);
                        cm.setInGameDirectionMode(true, false);
                        var h = f.getNumberProperty('stage24_bgm_' + (a + 1));
                        cm.fieldEffect_PlayBGM(BGM[h][1]);
                        cm.getWeatherEffectNotice('音乐发生了变化，暂停一下，集中精神倾听音乐吧。', 147, 60000, 1);
                        cm.inGameDirectionEvent_AskAnswerTime(6000);
                    }
                } else {
                    if (status === b++) {
                        var g = cm.getMap().getPortal(a + 1).getPosition();
                        cm.onTeleport(1, cm.getPlayer().getId(), g.getX(), g.getY());
                        cm.curNodeEventEnd(true);
                        cm.setInGameDirectionMode(false, false);
                        var h = f.getNumberProperty('stage24_bgm_' + (a + 1));
                        cm.fieldEffect_PlayBGM(BGM[h][1]);
                        f.setProperty('stage24_question_' + a, 'clear');
                        cm.dispose();
                    } else {
                        cm.dispose();
                    }
                }
            }
        }
    }
}