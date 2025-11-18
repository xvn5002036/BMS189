var status = 0;
function start() {
    status = -1;
    action(1, 0, 0);
}
function action(m, e, v) {
    if (status == 0 && m == 0) {
        cm.dispose();
        return;
    }
    if (cm.getzhizunvip() != 2) {
        cm.dispose();
        cm.playerMessage(-1, '结算功能是至尊版专享。');
        return;
    }
    status++;
    var t = -1;
    if (status <= t++) {
        cm.dispose();
    } else {
        if (status === t++) {
            var f = cm.getEventInstance();
            var l = f.getProperty('FBtime') - f.getTimeLeft();
            var r = Math.floor(l / (60 * 1000));
            var k = Math.floor(l % (60 * 1000) / 1000);
            var b = Math.floor(l / 1000);
            var q = f.getProperty('FBtime') / 1000;
            var o = f.getProperty('FBname');
            var g = f.getProperty('BOSShp');
            var d = f.getProperty('strMap');
            var h = f.getProperty('LogName');
            var s = (b / q * 100).toFixed(1);
            var c = cm.getNumberFromQuestInfo(d, 'damage');
            var u = (c / 100000000).toFixed(3);
            var p = (c / g * 100).toFixed(1);
            var n = (u / b).toFixed(2);
            var j = '「' + cm.getPlayer().getName() + '」  : ';
            j += '竞速「' + o + '」耗时 ' + r + '分' + k + '秒(占时限的' + s + '%)';
            if (s <= 5) {
                j += '_系统评价：S;  ';
                var a = 'S';
            } else {
                if (s > 5 && s <= 10) {
                    j += '_系统评价：A;  ';
                    var a = 'A';
                } else {
                    if (s > 10 && s <= 15) {
                        j += '_系统评价：B;  ';
                        var a = 'B';
                    } else {
                        if (s > 15 && s <= 20) {
                            j += '_系统评价：C;  ';
                            var a = 'C';
                        } else {
                            j += '_系统评价：F;  ';
                            var a = 'F';
                        }
                    }
                }
            }
            j += '\r\n本次输出伤害：' + u + '亿(占BOSS血量的' + p + '%)';
            j += '_计算DPS为：' + n + '亿/秒;';
            if (p > 15) {
                j += '(占比大于15%获得全部奖励)；';
            } else {
                j += '(占比小于15%所以没有奖励)；';
            }
            if (cm.getPQLog(h, 1) < 5) {
                熟练度 = '黑铁';
            } else {
                if (cm.getPQLog(h, 1) >= 5 && cm.getPQLog(h, 1) <= 15) {
                    熟练度 = '白银';
                } else {
                    if (cm.getPQLog(h, 1) > 15 && cm.getPQLog(h, 1) <= 25) {
                        熟练度 = '黄金';
                    } else {
                        if (cm.getPQLog(h, 1) > 25 && cm.getPQLog(h, 1) <= 40) {
                            熟练度 = '铂金';
                        } else {
                            if (cm.getPQLog(h, 1) > 40 && cm.getPQLog(h, 1) <= 60) {
                                熟练度 = '钻石';
                            } else {
                                if (cm.getPQLog(h, 1) > 60 && cm.getPQLog(h, 1) <= 85) {
                                    熟练度 = '大师';
                                } else {
                                    if (cm.getPQLog(h, 1) > 85) {
                                        熟练度 = '王者';
                                    } else {
                                        熟练度 = '战斗鸡';
                                    }
                                }
                            }
                        }
                    }
                }
            }
            j += ' 这是他第' + cm.getPQLog(h, 1) + '次通关-副本熟练度：<' + 熟练度 + '>;';
            cm.worldSpouseMessage(15, j);
            cm.fieldEffect_ScreenMsg('Visitor/Rank' + a + '');
            cm.fieldEffect_PlayFieldSound('Party1/Clear');
            cm.dispose();
        }
    }
}