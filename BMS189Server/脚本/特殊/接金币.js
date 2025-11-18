var status = 0;
var minLevel = 200;
var maxLevel = 999;
var minLevel1 = 200;
var maxLevel1 = 999;
var minPlayers = 1;
var maxPlayers = 6;
var moblevel = 255;
var open = true;
var PQ = '[黑魔法师BOSS-简单]';
var PQ1 = '[黑魔法师BOSS-困难]';
var eventname = 'jiejinbi';
var eventname1 = 'heimofashi_HARD';
var maxenter = 100;
var maxenter1 = 100;
function start() {
    status = -1;
    action(1, 0, 0);
}
function action(j, c, s) {
    if (status >= 1 && j == 0) {
        cm.sendOk('快捷寻找组队按热键“O”赶快加入组队来挑战组队任务吧。');
        cm.dispose();
        return;
    }
    if (j == 1) {
        status++;
    } else {
        status--;
    }
    if (status == 0) {
        var a = cm.getEventManager(eventname);
        var q = cm.getEventManager(eventname1);
        var b = a.getNumberProperty('state');
        if (b == 0) {
            var m = '#r副本空闲#k';
        } else {
            var m = '#b已经开启#k';
        }
        var b = q.getProperty('state');
        if (b == 0) {
            var p = '#r副本空闲#k';
        } else {
            var p = '#b已经开启#k';
        }
        if (cm.getPlayer().getClient().getChannel() == 1) {
            var g = maxenter - cm.getPQLog(PQ);
            var r = maxenter1 - cm.getPQLog(PQ1);
            var f = '';
            f += '#e推荐等级：250 - 270';
            f += '\r\n#b已进行普通模式：' + cm.getPQLog(PQ) + ' 次       剩余挑战次数：' + g + ' 次#k';
            f += '\r\n#r已进行进阶模式：' + cm.getPQLog(PQ1) + ' 次       #r剩余挑战次数：' + r + ' 次#n#k';
            f += '\r\n普通模式状态：' + m + '        进阶模式状态：' + p + '';
            var o = '';
            o = '#e<首领 - 接金币 ->#n\r\n#b#h0# \n#k你现在挑战这个副本吗?\r\n' + f + '\r\n\r\n';
            o += '#L1##b是的,我要去挑战接金币#l\r\n\r\n\r\n';
            o += '#L3##b暂时不想挑战,我要回家#l\r\n\r\n\r\n';
            cm.askMenu(o);
        } else {
            cm.sendOk('当前副本只能在1频道进行。');
            cm.dispose();
        }
    } else {
        if (status == 1) {
            if (s == 1) {
                if (cm.getParty() == null) {
                    cm.sendOk('创建组队才能进入。');
                    cm.dispose();
                } else {
                    if (!cm.isLeader()) {
                        cm.sendOk('请你们团队的队长和我对话。');
                        cm.dispose();
                    } else {
                        if (cm.getPQLog(PQ) >= maxenter) {
                            cm.sendOk('你今天挑战次数已经用完了,请明天在来吧!');
                            cm.dispose();
                        } else {
                            if (!cm.allMembersHere()) {
                                cm.sendOk('你的组队部分成员不在当前地图,请召集他们过来后在尝试。');
                                cm.dispose();
                            } else {
                                var k = cm.getParty().getMembers();
                                var h = cm.getMapId();
                                var l = true;
                                var d = 0;
                                var i = 0;
                                var e = k.iterator();
                                while (e.hasNext()) {
                                    var n = e.next();
                                    if (n.getLevel() >= minLevel && n.getLevel() <= maxLevel) {
                                        d += 1;
                                    } else {
                                        cm.dispose();
                                        l = false;
                                    }
                                    if (n.getMapId() == h) {
                                        i += 1;
                                    }
                                }
                                if (k.size() > maxPlayers || i < minPlayers) {
                                    l = false;
                                }
                                if (l) {
                                    var a = cm.getEventManager(eventname);
                                    if (a == null || open == false) {
                                        cm.askMenu('配置文件不存在,请联系管理员。');
                                    } else {
                                        var b = a.getNumberProperty('state');
                                        if (b == 0) {
                                            cm.setPQLog(PQ);
                                            a.startInstance(cm.getParty(), cm.getMap(), moblevel);
                                        } else {
                                            cm.askMenu('已经有队伍在进行了,请换其他频道尝试。');
                                            cm.dispose();
                                        }
                                        cm.dispose();
                                    }
                                } else {
                                    cm.askYesNo('所有成员等级 ' + minLevel + ' 以上 ' + maxLevel + ' 以下才可以入场。');
                                }
                            }
                        }
                    }
                }
            } else {
                if (s == 2) {
                    if (cm.getParty() == null) {
                        cm.sendOk('创建组队才能进入。');
                        cm.dispose();
                    } else {
                        if (!cm.isLeader()) {
                            cm.sendOk('请你们团队的队长和我对话。');
                            cm.dispose();
                        } else {
                            if (cm.getPQLog(PQ1) >= maxenter1) {
                                cm.sendOk('你今天挑战次数已经用完了,请明天在来吧!');
                                cm.dispose();
                            } else {
                                if (!cm.allMembersHere()) {
                                    cm.sendOk('你的组队部分成员不在当前地图,请召集他们过来后在尝试。');
                                    cm.dispose();
                                } else {
                                    var k = cm.getParty().getMembers();
                                    var h = cm.getMapId();
                                    var l = true;
                                    var d = 0;
                                    var i = 0;
                                    var e = k.iterator();
                                    while (e.hasNext()) {
                                        var n = e.next();
                                        if (n.getLevel() >= minLevel1 && n.getLevel() <= maxLevel1) {
                                            d += 1;
                                        } else {
                                            cm.dispose();
                                            l = false;
                                        }
                                        if (n.getMapId() == h) {
                                            i += 1;
                                        }
                                    }
                                    if (k.size() > maxPlayers || i < minPlayers) {
                                        l = false;
                                    }
                                    if (l) {
                                        var a = cm.getEventManager(eventname1);
                                        if (a == null || open == false) {
                                            cm.askMenu('配置文件不存在,请联系管理员。');
                                        } else {
                                            var b = a.getNumberProperty('state');
                                            if (b == 0) {
                                                a.startInstance(cm.getParty(), cm.getMap(), moblevel);
                                            } else {
                                                cm.askMenu('已经有队伍在进行了,请换其他频道尝试。');
                                                cm.dispose();
                                            }
                                            cm.setPQLog(PQ1);
                                            cm.dispose();
                                        }
                                    } else {
                                        cm.sendOk('所有成员等级 ' + minLevel1 + ' 以上 ' + maxLevel1 + ' 以下才可以入场。');
                                    }
                                }
                            }
                        }
                    }
                } else {
                    if (s == 3) {
                        cm.warp(910000000, 0);
                        cm.dispose();
                    }
                }
            }
        } else {
            if (status == 2) {
                cm.dispose();
            } else {
                if (j == 0) {
                    cm.dispose();
                }
            }
        }
    }
}