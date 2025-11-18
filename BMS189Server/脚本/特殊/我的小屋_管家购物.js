var status = -1;
var selectionLog = [];
var 购物清单;
function start() {
    购物清单 = cm.getConstantScriptContent('我的小屋_购物清单');
    action(1, 0, 0);
}
var npcs = [
    9400920,
    9400921,
    9401160
];
function action(f, h, k) {
    if (status == 0 && f == 0) {
        cm.dispose();
        return;
    }
    f == 1 ? status++ : status--;
    selectionLog[status] = k;
    var d = cm.getNumberFromQuestInfo(500773, 'manager');
    var g = npcs[d];
    var l = cm.getNumberFromQuestInfo(500773, 's2');
    var j = cm.getNumberFromQuestInfo(500773, 's3');
    var h = cm.getNpc();
    var e = -1;
    if (status <= e++) {
        cm.dispose();
    } else {
        if (status === e++) {
            cm.setSessionValue('LotteryName', 购物清单[h][1]);
            cm.askAcceptDecline_Bottom('#face0##b' + 购物清单[h][0] + '#k家具选购需要#b' + 购物清单[h][3] + '小时#k #r(' + j + '分钟 额外降低加成)#k。你确定要现在出发吗？', 36, g);
        } else {
            if (status === e++) {
                var b = new java.util.Date();
                var a = new java.text.SimpleDateFormat('yy/MM/dd/HH/mm').format(b);
                b.setTime(b.getTime() + Math.max(60 * 1000, 购物清单[h][3] * 60 * 60 * 1000 - j * 60 * 1000));
                var c = new java.text.SimpleDateFormat('yy/MM/dd/HH/mm').format(b);
                cm.setStringForQuestInfo(500778, 'reward', 购物清单[h][2][cm.rand(0, 购物清单[h][2].length - 1)] + ',Count:' + (cm.rand(1, 100) < l ? 2 : 1));
                cm.setStringForQuestInfo(500778, 'lotteryName', 购物清单[h][1]);
                cm.setStringForQuestInfo(500778, 'last', a);
                cm.setStringForQuestInfo(500778, 'bonusCoin', 0);
                cm.setStringForQuestInfo(500778, 't', c);
                cm.forceStartQuest(500778, '');
                cm.sendNormalTalk_Bottom('#face1#好的！那我就去找家具了，你慢慢等吧！', 37, g, false, true);
                if (cm.isQuestActive(501025) && (购物清单[h][1].equals('LithCafeSmall') || 购物清单[h][0].equals('LithCafeLarge') || 购物清单[h][0].equals('LithCafeConstruction'))) {
                    cm.addNumberForQuestInfo(501025, 'cnt', 1, 0, 10);
                }
            } else {
                cm.fieldEffect_PlayFieldSound('Sound/UI.img/Invite', 100);
                cm.dispose();
            }
        }
    }
}