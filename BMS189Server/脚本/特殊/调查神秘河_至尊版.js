var js1 = '#fUI/UIWindowPL.img/DuoEvent/Maximum/Mission/btAccept/pressed/0#';
var fq1 = '#fUI/UIWindowPL.img/DuoEvent/Maximum/Mission/btGiveup/normal/0#';
var jx1 = '#fUI/UIWindow2.img/counsel/Loading/4#';
var ck1 = '#fUI/CashShop.img/CSMVPBanner/BtNonGrade/normal/0#';
var tx1 = '#fMap/Back/ancientForest2.img/ani/1/5#';
var head = '#fUI/UIWindow2.img/Quest/quest_info/summary_icon/summary#\r\n';
var icon = '#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#';
var status = 0;
var text = '';
var questid = 100100;
var maxtimes = 12;
var playerid = 0;
var accepttimes = 0;
var questitemid = 0;
var questitemcs = 0;
var hitemid = 0;
var hitemcs = 0;
var questitems = Array(Array(4034922, -1, '相关线索在#r消亡旅途#k地区……'), Array(4034923, -1, '相关线索在#r消亡旅途#k地区……'), Array(4034924, -1, '相关线索在#r消亡旅途#k地区……'), Array(4034925, -1, '相关线索在#r消亡旅途#k地区……'), Array(4034926, -1, '相关线索在#r消亡旅途#k地区……'), Array(4034927, -1, '相关线索在#r消亡旅途#k地区……'), Array(4034928, -1, '相关线索在#r消亡旅途#k地区……'), Array(4034953, -1, '相关线索在#r啾啾岛#k地区……'), Array(4034951, -1, '相关线索在#r啾啾岛#k地区……'), Array(4034942, -1, '相关线索在#r啾啾岛#k地区……'), Array(4034944, -1, '相关线索在#r啾啾岛#k地区……'), Array(4034954, -1, '相关线索在#r啾啾岛#k地区……'), Array(4034957, -1, '相关线索在#r啾啾岛#k地区……'), Array(4036335, -1, '相关线索在#r莫拉斯#k地区……'), Array(4036336, -1, '相关线索在#r莫拉斯#k地区……'), Array(4036329, -1, '相关线索在#r莫拉斯#k地区……'), Array(4036334, -1, '相关线索在#r莫拉斯#k地区……'), Array(4036330, -1, '相关线索在#r莫拉斯#k地区……'), Array(4036332, -1, '相关线索在#r莫拉斯#k地区……'), Array(4036333, -1, '相关线索在#r莫拉斯#k地区……'), Array(2000003, -1, '各大药房均有销售。'), Array(2000003, -1, '各大药房均有销售。'), Array(2000006, -1, '各大药房均有销售。'));
function start() {
    status = -1;
    action(1, 0, 0);
}
function action(e, g, i) {
    if (e == -1) {
        cm.dispose();
    } else {
        if (e == 1) {
            status++;
        } else {
            status--;
        }
        if (status == -1) {
            cm.dispose();
            if (cm.getzhizunvip() != 2) {
                cm.dispose();
                cm.playerMessage(1, '该菜单是至尊版专享。');
                return;
            }
        } else {
            if (status == 0) {
                if (cm.getSpace(1) < 5 || cm.getSpace(2) < 5 || cm.getSpace(3) < 5 || cm.getSpace(4) < 5 || cm.getSpace(5) < 5) {
                    cm.sendOk('#fn微软雅黑##fs20##e#r - 友情提示：#n#k\r\n\r\n#e#fs12#你的背包满了，你可以确认下吗？\r\n为了接取任务每个栏位至少需要#b5#k格！');
                    cm.dispose();
                    return;
                }
                playerid = cm.getPlayer().getId();
                var b = cm.getPlayer().getOneInfo(questid, 'COUNT');
                accepttimes = cm.getEventCount('RINGQUSTION');
                if (b == null || accepttimes <= 0) {
                    b = cm.getPlayer().updateInfoQuest(questid, 'COUNT=1;DONE=0;AC=0;ITEM=0;REQ=0;ID=0');
                }
                text = '#fn微软雅黑##fs25##e#d神秘河地区日常派遣任务：\r\n#k';
                text += '#fn微软雅黑##fs15##e剩余调查：#b' + (maxtimes - accepttimes) + '#k次\r\n#k';
                if (cm.getPlayer().getLevel() < 200) {
                    cm.sendOk('亲爱的冒险家，神秘河地区非常危险；请到#r200#k级后再来。');
                    cm.dispose();
                    return;
                } else {
                    if (cm.getEventCount('消亡旅途总记录') > 1) {
                        cm.sendOk('今天的调查已经结束了。');
                        cm.dispose();
                        return;
                    } else {
                        if (cm.getPlayer().getOneInfo(questid, 'AC').equals('1')) {
                            if (accepttimes <= maxtimes) {
                                hitemid = parseInt(cm.getPlayer().getOneInfo(questid, 'ITEM'));
                                hitemcs = parseInt(cm.getPlayer().getOneInfo(questid, 'REQ'));
                                text += '#fn微软雅黑##fs15##e执行进度：#r' + Math.max(1, accepttimes) + '#k次#n\r\n#r#v' + hitemid + '##z' + hitemid + '##k（#c' + hitemid + '#/' + hitemcs + '）#k ' + jx1 + '\r\n';
                                if (cm.haveItem(hitemid, hitemcs)) {
                                    text += '#b#L1##fn微软雅黑##fs15##e完成该次调查任务.#n#l\r\n';
                                }
                                if (!cm.haveItem(hitemid, hitemcs)) {
                                    text += '#L2##fn微软雅黑##fs20##e放弃任务#l	  #L20##fs20#查看攻略#l#k \r\n \r\n';
                                }
                            } else {
                                text += '#e今天的调查已经结束了。#n\r\n';
                            }
                        } else {
                            text += '\r\n #L3##fn微软雅黑##fs20##e接受任务#l	  #L20##fs20#查看奖励#l \r\n \r\n';
                        }
                    }
                }
                cm.askMenu(text);
            } else {
                if (status == 1) {
                    if (i == 0) {
                        var a = Math.floor(Math.random() * questitems.length);
                        questitemid = questitems[a][0];
                        if (questitems[a][1] < 0) {
                            questitemcs = Math.floor(Math.random() * 35) + 25 + Math.floor(Math.random() * cm.getReborns());
                        } else {
                            questitemcs = questitems[a][1];
                        }
                        text = '#e第#r' + (accepttimes + 1) + '#k次调查：#n\r\n\r\n请帮我找到#b' + questitemcs + '#k个#r#z' + questitemid + '##k\r\n' + questitems[a][2] + '\r\n#k感激不尽，快去快回~';
                        cm.getPlayer().updateOneInfo(questid, 'AC', '1');
                        cm.getPlayer().updateOneInfo(questid, 'DONE', '0');
                        cm.getPlayer().updateOneInfo(questid, 'ITEM', questitemid + '');
                        cm.getPlayer().updateOneInfo(questid, 'REQ', questitemcs + '');
                        cm.sendOk(text);
                        cm.dispose();
                    } else {
                        if (i == 1) {
                            var c = accepttimes + 1;
                            cm.getPlayer().updateOneInfo(questid, 'DONE', '1');
                            cm.getPlayer().updateOneInfo(questid, 'AC', '0');
                            cm.getPlayer().updateOneInfo(questid, 'COUNT', c + '');
                            var j = 0.02;
                            if (cm.getPlayer().getLevel() > 220) {
                                j = 0.003;
                            } else {
                                if (cm.getPlayer().getLevel() > 240) {
                                    j = 0.0003;
                                }
                            }
                            var h = Math.floor(Math.random() * 100000 + 100000000);
                            if (!(accepttimes % 4)) {
                                cm.gainExp(h);
                                if (cm.getEventCount('RINGQUSTION') <= maxtimes) {
                                    cm.getPlayer().modifyCSPoints(2, 200, true);
                                    cm.getPlayer().modifyCSPoints(1, 200, true);
                                    cm.gainItem(1712001, 1);
                                    cm.gainItem(1712005, 1);
                                    cm.gainItem(1712005, 1);
                                    cm.gainItem(1712005, 1);
                                    cm.gainItem(1712005, 1);
                                    cm.gainItem(1712003, 1);
                                    cm.gainItem(1712003, 1);
                                    cm.gainItem(1712003, 1);
                                    cm.gainItem(1712003, 1);
                                }
                                if (Math.round(Math.random() * 1)) {
                                    cm.gainItem(1712005, 1);
                                    if (cm.getPlayer().getGender() == 1) {
                                        性别 = '小姐姐';
                                    } else {
                                        性别 = '大帅哥';
                                    }
                                    if (cm.getPlayer().getGender() == 1) {
                                        人称 = '她';
                                    } else {
                                        人称 = '他';
                                    }
                                    cm.worldSpouseMessage(28, '[每日任务] : 真是好运，' + 性别 + '[' + cm.getPlayer().getName() + ']调查神秘河时意外捡了一个[神秘徽章：莫拉斯]。');
                                }
                                if (cm.getPlayer().getGender() == 1) {
                                    性别 = '小姐姐';
                                } else {
                                    性别 = '大帅哥';
                                }
                                if (cm.getPlayer().getGender() == 1) {
                                    人称 = '她';
                                } else {
                                    人称 = '他';
                                }
                                var d = '[每日任务] : ' + 性别 + '[' + cm.getPlayer().getName() + ']今日第[' + accepttimes + ']次调查神秘河地区，神官奖励' + 人称 + '『神秘徽章：消亡旅途』x1，并额外给予' + 人称 + '『神秘徽章：莫拉斯』x4 『神秘徽章：拉克兰』x4。';
                            } else {
                                cm.gainExp(h);
                                if (cm.getPlayer().getGender() == 1) {
                                    性别 = '小姐姐';
                                } else {
                                    性别 = '大帅哥';
                                }
                                if (cm.getPlayer().getGender() == 1) {
                                    人称 = '她';
                                } else {
                                    人称 = '他';
                                }
                                var d = '[每日任务] : ' + 性别 + '[' + cm.getPlayer().getName() + ']今日第[' + accepttimes + ']次调查神秘河地区，神官奖励' + 人称 + '『神秘徽章：消亡旅途』x1。';
                                if (cm.getEventCount('RINGQUSTION') <= maxtimes) {
                                    cm.getPlayer().modifyCSPoints(2, 100, true);
                                    cm.getPlayer().modifyCSPoints(1, 100, true);
                                    cm.gainItem(1712001, 1);
                                    cm.gainItem(1712002, 1);
                                }
                            }
                            cm.removeAll(hitemid);
                            text = '给你的奖励请务必收下~~';
                            cm.sendOk(text);
                            cm.playerMessage(-1, '获得道具：神秘徽章：消亡旅途x1');
                            cm.playerMessage(-1, '[获得道具]：神秘徽章：啾啾岛x1');
                            cm.worldSpouseMessage(31, '' + d + '');
                            if (c >= maxtimes) {
                                cm.setEventCount('消亡旅途总记录');
                                text = '您已经完成了今天的调查，请午夜0点后再来吧~';
                            }
                            cm.dispose();
                        } else {
                            if (i == 2) {
                                cm.askAcceptDeclineNoESC('真的打算放弃任务吗？');
                                status = 19;
                            } else {
                                if (i == 3) {
                                    var a = Math.floor(Math.random() * questitems.length);
                                    questitemid = questitems[a][0];
                                    if (questitems[a][1] < 0) {
                                        questitemcs = Math.floor(Math.random() * 10 * cm.getPlayer().getLevel() / 20) + 15 + Math.floor(Math.random());
                                    } else {
                                        questitemcs = questitems[a][1];
                                    }
                                    text = '#e第#r' + (accepttimes + 1) + '#k次调查：#n\r\n\r\n请帮我找到#b' + questitemcs + '#k个#r#z' + questitemid + '##k\r\n' + questitems[a][2] + '\r\n#k快去快回~';
                                    cm.getPlayer().updateOneInfo(questid, 'AC', '1');
                                    cm.getPlayer().updateOneInfo(questid, 'DONE', '0');
                                    cm.getPlayer().updateOneInfo(questid, 'ITEM', questitemid + '');
                                    cm.getPlayer().updateOneInfo(questid, 'REQ', questitemcs + '');
                                    cm.setEventCount('RINGQUSTION');
                                    cm.sendOk(text);
                                    cm.dispose();
                                } else {
                                    if (i == 20) {
                                        var f = '#e每次调查奖励：#n\r\n#v1712001##z1712001# x1#k\r\n#v1712002##z1712002# x1\r\n\r\n';
                                        f += '#e每#r4#k次调查额外给予：#n\r\n#b#v1712003##z1712003# x4#k\r\n#b#v1712005##z1712005# x4#k\r\n\r\n';
                                        f += '#e有几率额外获得：#n\r\n #r#v1712005##z1712005# x1#k';
                                        cm.askMenuS(f);
                                        status = -1;
                                    }
                                }
                            }
                        }
                    }
                } else {
                    if (status == 20) {
                        var c = accepttimes + 1;
                        cm.getPlayer().updateOneInfo(questid, 'DONE', '0');
                        cm.getPlayer().updateOneInfo(questid, 'AC', '0');
                        cm.getPlayer().updateOneInfo(questid, 'COUNT', c + '');
                        cm.playerMessage(-1, '系统消息：放弃任务');
                        if (c >= maxtimes) {
                            cm.setEventCount('消亡旅途总记录');
                        }
                        cm.effect_NormalSpeechBalloon('#fn微软雅黑##fs14##e任务已放弃…', 1, 0, 0, 3000, 0, 0);
                        cm.dispose();
                    }
                }
            }
        }
    }
}