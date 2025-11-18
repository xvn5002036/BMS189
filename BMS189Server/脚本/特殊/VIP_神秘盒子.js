var 每日工资 = [
    [
        2431887,
        10
    ],
    [
        5076000,
        7
    ],
    [
        2431083,
        5
    ],
    [
        2431303,
        5
    ],
    [
        2430694,
        2
    ],
    [
        2435824,
        1
    ],
    [
        2430675,
        1
    ],
    [
        2340000,
        2
    ],
    [
        2049124,
        5
    ]
];
var 副本列表 = [
    '申请进入 <扎昆（简单）>。',
    '申请进入 <扎昆（普通）>。',
    '申请进入 <扎昆（困难）>。',
    '申请进入 <暗黑龙王（简单）>。',
    '申请进入 <暗黑龙王（普通）>。',
    '申请进入 <暗黑龙王（困难）>。',
    '申请进入 <品克缤（简单）>。',
    '申请进入 <品克缤（普通）>。',
    '申请进入 <品克缤（困难）>。',
    '申请进入 <狮子王（简单）>。',
    '申请进入 <狮子王（普通）>。',
    '申请进入 <狮子王（困难）>。',
    '申请进入 <艾菲妮亚（简单）>。',
    '申请进入 <艾菲妮亚（普通）>。',
    '申请进入 <艾菲妮亚（困难）>。',
    '申请进入 <阿卡伊勒（简单）>。',
    '申请进入 <阿卡伊勒（普通）>。',
    '申请进入 <阿卡伊勒（困难）>。',
    '申请进入 <心疤狮王（简单）>。',
    '申请进入 <心疤狮王（普通）>。',
    '申请进入 <心疤狮王（困难）>。',
    '申请进入 <希拉（简单）>。',
    '申请进入 <希拉（普通）>。',
    '申请进入 <希拉（困难）>。',
    '申请进入 <森兰丸（简单）>。',
    '申请进入 <森兰丸（普通）>。',
    '申请进入 <森兰丸（困难）>。',
    '申请进入 <希纳斯（简单）>。',
    '申请进入 <希纳斯（普通）>。',
    '申请进入 <希纳斯（困难）>。',
    '闹钟王[简单]',
    '闹钟王[普通]',
    '闹钟王[困难]',
    '申请进入 <血腥女王（简单）>。',
    '申请进入 <血腥女王（困难）>。',
    '申请进入 <皮埃尔（简单）>。',
    '申请进入 <皮埃尔（困难）>。',
    '申请进入 <半半（简单）>。',
    '申请进入 <半半（困难）>。',
    '申请进入 <贝伦（简单）>。',
    '申请进入 <贝伦（困难）>。',
    '申请进入 <乌鲁斯（简单）>。',
    '申请进入 <乌鲁斯（普通）>。',
    '申请进入 <乌鲁斯（困难）>。',
    '申请进入 <麦格纳斯（简单）>。',
    '申请进入 <麦格纳斯（普通）>。',
    '申请进入 <麦格纳斯（困难）>。',
    '申请进入 <斯乌（简单）>。',
    '申请进入 <斯乌（普通）>。',
    '申请进入 <斯乌（困难）>。',
    '申请进入 <戴米安（简单）>。',
    '申请进入 <戴米安（普通）>。',
    '申请进入 <戴米安（困难）>。',
    '申请进入 <贝勒德（困难）>。',
    '申请进入 <敦凯尔（简单）>。',
    '申请进入 <敦凯尔（普通）>。',
    '申请进入 <敦凯尔（困难）>。',
    '申请进入 <至暗魔晶（简单）>。',
    '申请进入 <至暗魔晶（普通）>。',
    '申请进入 <至暗魔晶（困难）>。',
    '申请进入 <真希拉（简单）>。',
    '申请进入 <真希拉（普通）>。',
    '申请进入 <真希拉（困难）>。',
    '申请进入 <路西德（故事）>。',
    '申请进入 <路西德（普通）>。',
    '申请进入 <路西德（困难）>。',
    '申请进入 <威尔（故事）>。',
    '申请进入 <威尔（普通）>。',
    '申请进入 <威尔（困难）>。',
    ' 申请进入 <黑魔法师（困难）>。'
];
var z = '#fUI/UIWindow/Quest/icon5/1#';
var typed = 0;
var status = -1;
var selectionLog = [];
function start() {
    action(1, 0, 0);
}
function action(g, p, s) {
    var q = cm.getConstantScriptContent('菜单_NPC立绘');
    var j = Math.floor(Math.random() * q.length);
    var c = q[j][0];
    var m = randomNum(0, q[j][1]);
    if (status == 0 && g == 0) {
        cm.dispose();
        return;
    }
    g == 1 ? status++ : status--;
    selectionLog[status] = s;
    var f = -1;
    if (status <= f++) {
        cm.dispose();
    } else {
        if (status === f++) {
            var t = '#face' + m + '##fs17##fn方正粗黑宋简体#';
            t += '  #r欢迎使用VIP随身特权，您可以放在[快捷键]上使用：#b#fs16#\r\n';
            t += '#L0#每日工资#l  #L1#全天双倍#l  #L2#世界喊话#l\r\n';
            t += '#L9#副本重置#l  #L3#随身仓库#l  \r\n';
            cm.askMenu_Bottom(t, 204, c);
        } else {
            if (status === f++) {
                switch (s) {
                case 0:
                    var t = '\r\n#face' + m + '##r#fs17##fn方正粗黑宋简体#恭喜您领取理财服务的每日工资：#fs14##fn黑体##b\r\n';
                    var h = '『' + cm.getPlayer().getName() + '』：我在[VIP随身服务]里领取了: ';
                    if (cm.getPQLog('工资') < 1) {
                        cm.gainMeso(3000000);
                        cm.setPQLog('工资');
                        cm.getPlayer().modifyCSPoints(1, 15000);
                        for (var f = 0; f < 每日工资.length; f++) {
                            cm.gainItem(每日工资[f][0], 每日工资[f][1]);
                            t += '#v' + 每日工资[f][0] + '# #z' + 每日工资[f][0] + '# x' + 每日工资[f][1] + '';
                            var k = cm.getItemName(每日工资[f][0]);
                            var r = 8;
                            var u = k.length;
                            var b = u;
                            for (var l = 0; l < u; l++) {
                                if (k.charCodeAt(l) < 0 || k.charCodeAt(l) > 255) {
                                    b++;
                                }
                            }
                            var e = r - b / 2;
                            for (var a = 0; a < e; a++) {
                                t += '　';
                            }
                            if (f != 0 && (f + 1) % 3 == 0) {
                                t += '\r\n';
                            }
                            h += ' <' + cm.getItemName(每日工资[f][0]) + ' x' + 每日工资[f][1] + '> ';
                        }
                        cm.worldSpouseMessage(25, h);
                        cm.askYesNo_Bottom(t, 204, c);
                        cm.dispose();
                    } else {
                        cm.getTopMsgFont('一天只能领取一次噢！', 3, 20, 4, 0, 0);
                        cm.dispose();
                    }
                    break;
                case 1:
                    if (cm.getPQLog('三倍') < 1) {
                        cm.gainItem(5211060, 1, 1);
                        cm.gainItem(5360015, 1, 1);
                        cm.setPQLog('三倍');
                        cm.getTopMsgFont('获得每日三倍', 3, 20, 20, 0);
                        cm.worldSpouseMessage(32, '『' + cm.getPlayer().getName() + '』：我在[VIP随身服务]里领取每日三倍经验、爆率卡。');
                        cm.dispose();
                    } else {
                        cm.sendOk('您已经领取过，请明日再领。');
                        cm.dispose();
                    }
                    break;
                case 2:
                    if (cm.getMeso() >= 150000) {
                        cm.askText_Bottom('#face' + m + '#消耗15万游戏币，请输入您要说的话：', c);
                        typed = 2;
                    } else {
                        cm.getTopMsgFont('您没有15万游戏币', 3, 20, 4, 0, 0);
                        cm.dispose();
                    }
                    break;
                case 3:
                    cm.dispose();
                    cm.openNpc(9030100);
                    break;
                case 9:
                    if (cm.getPlayer().getCSPoints(1) >= 50000) {
                        cm.askAcceptDecline_Bottom('#face' + m + '#消耗50000点券重置所有副本次数？', c);
                        typed = 9;
                    } else {
                        cm.playerMessage(-1, '你没有50000点券！');
                        cm.dispose();
                    }
                    break;
                }
            } else {
                if (status === f++) {
                    if (typed == 2) {
                        cm.worldSpouseMessage(7, '[VIP世界喊话]' + cm.getPlayer().getMedalText() + cm.getPlayer().getName() + ' : ' + cm.getText());
                        cm.gainMeso(-150000);
                    } else {
                        if (typed == 9) {
                            for (var f = 0; f < 副本列表.length; f++) {
                                cm.getPlayer().resetPQLog(副本列表[f], 0);
                            }
                            cm.getTopMsgFont('已重置所有副本', 3, 20, 20, 0);
                            cm.worldSpouseMessage(32, '『随身服务』 ：玩家 ' + cm.getPlayer().getName() + ' 在随身NPC里重置了全部副本任务。');
                        }
                    }
                    cm.dispose();
                }
            }
        }
    }
}
function randomNum(b, a) {
    switch (arguments.length) {
    case 1:
        return parseInt(Math.random() * b + 1, 10);
        break;
    case 2:
        return parseInt(Math.random() * (a - b + 1) + b, 10);
        break;
    default:
        return 0;
        break;
    }
}