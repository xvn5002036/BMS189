var status = 0;
var random = java.lang.Math.floor(Math.random() * 4);
var a = '#fEffect/CharacterEff/1082565/0/0#';
var b = '#fEffect/CharacterEff/1112904/0/0#';
var c = '#fEffect/CharacterEff/1003271/0/0#';
var d = '#fEffect/CharacterEff/1112946/4/1#';
var e = '#fEffect/CharacterEff/1082229/0/0#';
var f = '#fUI/Basic/LevelNo/0#';
var j = '#fUI/Basic/LevelNo/1#';
var h = '#fUI/Basic/LevelNo/2#';
var i1 = '#fUI/Basic/LevelNo/3#';
var g = '#fUI/Basic/LevelNo/4#';
var k = '#fUI/Basic/LevelNo/5#';
var l1 = '#fUI/Basic/LevelNo/6#';
var hhtp = 0;
var minLevel = 180;
var maxLevel = 250;
var minPartySize = 1;
var maxPartySize = 6;
var pthhpl = '';
function start() {
    status = -1;
    action(1, 0, 0);
}
function action(q, r, t) {
    if (cm.getEventCount('航海旅途') == 0) {
        pthhpl = '#d0#k';
    } else {
        pthhpl = '#r' + cm.getEventCount('航海旅途') + '#k';
    }
    if (status == 0 && q == 0) {
        cm.dispose();
        return;
    }
    if (q == 1) {
        status++;
    } else {
        status--;
    }
    if (cm.getMapId() == 180000001) {
        cm.sendOk('很遗憾，您因为违反用户守则被禁止游戏活动，如有异议请联系管理员.');
        cm.dispose();
    } else {
        if (cm.getMapId() == 866000230) {
            cm.dispose();
            cm.openNpc(9390220, 'boss_out');
        } else {
            if (status == 0) {
                var i = '#d无尽的大海中有数之不尽的宝藏及深海巨妖！\r\n你确定要乘坐达尼尔拉战航去冒险吗\r\n#e#r打不过只有死才可以回家\r\n';
                i += '#e#r可敬的勇士 [ #h # ] 期待你回归\r\n\r\n#k#n';
                i += '#b#L0#乘坐达尼尔拉战航#d [#r需2人以上组队#k]　　　　　[' + pthhpl + '] - [#d2#k]#l\r\n';
                i += '#r#L1#会员达尼尔拉战航#d [#r需2人以上组队#k]　　　　　[' + pthhpl + '] - [#d2#k]#l\r\n';
                i += '#r#L2#土豪达尼尔拉战航#d [#r暂时 关闭体验#k]　　　　　[' + pthhpl + ']#l\r\n\r\n';
                i += '#d#e#L3#海盗英雄的宝箱里都有些什么？#l#n#k\r\n';
                i += '#d#e#L4#航海太可怕了！我要回家！！#l#n#k\r\n';
                cm.askMenu(i);
            } else {
                if (status == 1) {
                    switch (t) {
                    case 0:
                        hhtp = 1;
                        cm.askMenu('\r\n\r\n#r#e深海中危险众多!深海巨妖数不胜数\r\n\r\n您确定要与您的伙伴去深海探险吗？');
                        break;
                    case 1:
                        hhtp = 2;
                        cm.askMenu('\r\n\r\n#r#e深海中危险众多!深海巨妖数不胜数\r\n\r\n您确定要与您的伙伴去深海探险吗？');
                        break;
                    case 2:
                        hhtp = 3;
                        cm.askMenu('\r\n\r\n#r#e深海中危险众多!深海巨妖数不胜数\r\n\r\n您确定要与您的伙伴去深海探险吗？');
                        break;
                    case 3:
                        cm.dispose();
                        cm.sendOk('#d#e各种精品道具！真红 必成 箱子 法弗 漩涡 神话 蓝调 等！！#n#k');
                        break;
                    case 4:
                        cm.warp(910000000, 0);
                        cm.dispose();
                        cm.sendOk('#r#e　勇士 ！期待您更强大了再来航海中称霸！！');
                        break;
                    }
                } else {
                    if (status == 2) {
                        if (hhtp == 1) {
                            if (cm.getEventCount('航海旅途') == 2) {
                                cm.sendOk('尊敬的玩家 今天乘坐达尼尔拉船已到上限\r\n\r\n请明日再光临 或 会员模式继续挑战');
                                cm.dispose();
                            }
                            if (cm.getPlayer().getParty() == null || cm.getPlayer().getParty() < 2) {
                                cm.sendOk('#d#e抱歉!请组队并且保持两人以上！！#k#n', 0);
                            } else {
                                if (!cm.isLeader()) {
                                    cm.sendOk('\r\n\r\n	#e#d请确认您是否是此队伍的队长！如若不是,请喊队长来对话！#k#n', 0);
                                } else {
                                    var m = cm.getPlayer().getParty().getMembers();
                                    var u = cm.getPlayer().getMapId();
                                    var p = true;
                                    var s = 0;
                                    var n = 0;
                                    var o = m.iterator();
                                    while (o.hasNext()) {
                                        var v = o.next();
                                        var w = cm.getPlayer().getMap().getCharacterById(v.getId());
                                        if (w != null) {
                                            if (w.getLevel() >= minLevel && w.getLevel() <= maxLevel) {
                                                s += 1;
                                            }
                                            if (w.getMapId() == u) {
                                                n += w.isGM() ? 3 : 1;
                                            }
                                            if (v.getChannel() != cm.getPlayer().getClient().getChannel() || v.getMapId() != cm.getMapId() || cm.getPlayer().getClient().getChannel() != 1) {
                                                p = false;
                                            }
                                        } else {
                                            p = false;
                                        }
                                    }
                                    if (m.size() > maxPartySize || n < minPartySize) {
                                        p = false;
                                    }
                                    if (p) {
                                        var l = cm.getEventManager('hhzdwj');
                                        if (l == null) {
                                            cm.sendOk('脚本错误，请联系管理员', 0);
                                            cm.dispose();
                                            return;
                                        }
                                        if (l.getNumberProperty('state') == 0) {
                                            l.startInstance(cm.getPlayer().getParty(), cm.getPlayer().getMap(), 200);
                                            cm.worldSpouseMessage(37, '≡时代怪兽新闻≡　　玩家 ' + cm.getPlayer().getName() + ' 等级 ' + cm.getPlayer().getLevel() + '　挑战航海中的危机[ 航海中的危机 ★★★★★★★ ]');
                                            cm.worldSpouseMessage(37, '≡时代怪兽新闻≡　　玩家 ' + cm.getPlayer().getName() + ' 等级 ' + cm.getPlayer().getLevel() + '　挑战航海中的危机[ 航海中的危机 ★★★★★★★ ]');
                                            cm.worldSpouseMessage(37, '≡时代怪兽新闻≡　　玩家 ' + cm.getPlayer().getName() + ' 等级 ' + cm.getPlayer().getLevel() + '　挑战航海中的危机[ 航海中的危机 ★★★★★★★ ]');
                                            cm.getMap().startMapEffect('玩家 ' + cm.getPlayer().getName() + ' 带领TA的远征队 征伐 航海中的危机 危险星：★★★★★★★', 5121000);
                                        } else {
                                            cm.sendOk('\r\n\r\n\r\n		#d#e当前频道已有人正在征伐海兽!!请等待或变更频道！！#k#n', 0);
                                        }
                                    } else {
                                        cm.sendOk('你所属的组队人数在' + minPartySize + '人以下，没办法进去。必须有' + minLevel + '级以上的角色' + minPartySize + '个以上才能进去。并且队员要在相同频道和地图,并且该怪物只能在1频道挑战！\r\n请确认一下，然后再来找我。', 0);
                                    }
                                }
                            }
                            cm.dispose();
                        } else {
                            if (hhtp == 2) {
                                if (cm.getPlayer().getCSPoints(1) < 5000) {
                                    cm.sendOk('抱歉尊敬的玩家\r\n\r\n会员模式需缴纳 5000 点卷 才可挑战');
                                    cm.dispose();
                                }
                                if (cm.getPlayer().getParty() == null || cm.getPlayer().getParty() < 2) {
                                    cm.sendOk('#d#e抱歉!请组队并且保持两人以上！！#k#n', 0);
                                } else {
                                    if (!cm.isLeader()) {
                                        cm.sendOk('\r\n\r\n	#e#d请确认您是否是此队伍的队长！如若不是,请喊队长来对话！#k#n', 0);
                                    } else {
                                        var m = cm.getPlayer().getParty().getMembers();
                                        var u = cm.getPlayer().getMapId();
                                        var p = true;
                                        var s = 0;
                                        var n = 0;
                                        var o = m.iterator();
                                        while (o.hasNext()) {
                                            var v = o.next();
                                            var w = cm.getPlayer().getMap().getCharacterById(v.getId());
                                            if (w != null) {
                                                if (w.getLevel() >= minLevel && w.getLevel() <= maxLevel) {
                                                    s += 1;
                                                }
                                                if (w.getMapId() == u) {
                                                    n += w.isGM() ? 3 : 1;
                                                }
                                                if (v.getChannel() != cm.getPlayer().getClient().getChannel() || v.getMapId() != cm.getMapId() || cm.getPlayer().getClient().getChannel() != 1) {
                                                    p = false;
                                                }
                                            } else {
                                                p = false;
                                            }
                                        }
                                        if (m.size() > maxPartySize || n < minPartySize) {
                                            p = false;
                                        }
                                        if (p) {
                                            var l = cm.getEventManager('hhzdwj');
                                            if (l == null) {
                                                cm.sendOk('脚本错误，请联系管理员', 0);
                                                cm.dispose();
                                                return;
                                            }
                                            if (l.getNumberProperty('state') == 0) {
                                                l.startInstance(cm.getPlayer().getParty(), cm.getPlayer().getMap(), 200);
                                                cm.worldSpouseMessage(37, '≡时代怪兽新闻≡　　玩家 ' + cm.getPlayer().getName() + ' 等级 ' + cm.getPlayer().getLevel() + '　挑战航海中的危机[ 航海中的危机 ★★★★★★★ ]');
                                                cm.worldSpouseMessage(37, '≡时代怪兽新闻≡　　玩家 ' + cm.getPlayer().getName() + ' 等级 ' + cm.getPlayer().getLevel() + '　挑战航海中的危机[ 航海中的危机 ★★★★★★★ ]');
                                                cm.worldSpouseMessage(37, '≡时代怪兽新闻≡　　玩家 ' + cm.getPlayer().getName() + ' 等级 ' + cm.getPlayer().getLevel() + '　挑战航海中的危机[ 航海中的危机 ★★★★★★★ ]');
                                                cm.getMap().startMapEffect('玩家 ' + cm.getPlayer().getName() + ' 带领TA的远征队 征伐 航海中的危机 危险星：★★★★★★★', 5121000);
                                                cm.getPlayer().modifyCSPoints(1, -5000);
                                            } else {
                                                cm.sendOk('\r\n\r\n\r\n		#d#e当前频道已有人正在征伐海兽!!请等待或变更频道！！#k#n', 0);
                                            }
                                        } else {
                                            cm.sendOk('你所属的组队人数在' + minPartySize + '人以下，没办法进去。必须有' + minLevel + '级以上的角色' + minPartySize + '个以上才能进去。并且队员要在相同频道和地图,并且该怪物只能在1频道挑战！\r\n请确认一下，然后再来找我。', 0);
                                        }
                                    }
                                }
                                cm.dispose();
                            } else {
                                if (hhtp == 3) {
                                    if (cm.getPlayer().getCSPoints(1) < 4000) {
                                        cm.sendOk('抱歉尊敬的玩家\r\n\r\n土豪模式需缴纳 4000 点卷 才可挑战');
                                        cm.dispose();
                                    }
                                    if (cm.getPlayer().getParty() == null || cm.getPlayer().getParty() < 2) {
                                        cm.sendOk('#d#e抱歉!请组队并且保持两人以上！！#k#n', 0);
                                    } else {
                                        if (!cm.isLeader()) {
                                            cm.sendOk('\r\n\r\n	#e#d请确认您是否是此队伍的队长！如若不是,请喊队长来对话！#k#n', 0);
                                        } else {
                                            var m = cm.getPlayer().getParty().getMembers();
                                            var u = cm.getPlayer().getMapId();
                                            var p = true;
                                            var s = 0;
                                            var n = 0;
                                            var o = m.iterator();
                                            while (o.hasNext()) {
                                                var v = o.next();
                                                var w = cm.getPlayer().getMap().getCharacterById(v.getId());
                                                if (w != null) {
                                                    if (w.getLevel() >= minLevel && w.getLevel() <= maxLevel) {
                                                        s += 1;
                                                    }
                                                    if (w.getMapId() == u) {
                                                        n += w.isGM() ? 3 : 1;
                                                    }
                                                    if (v.getChannel() != cm.getPlayer().getClient().getChannel() || v.getMapId() != cm.getMapId() || cm.getPlayer().getClient().getChannel() != 1) {
                                                        p = false;
                                                    }
                                                } else {
                                                    p = false;
                                                }
                                            }
                                            if (m.size() > maxPartySize || n < minPartySize) {
                                                p = false;
                                            }
                                            if (p) {
                                                var l = cm.getEventManager('hhzdwj');
                                                if (l == null) {
                                                    cm.sendOk('脚本错误，请联系管理员', 0);
                                                    cm.dispose();
                                                    return;
                                                }
                                                if (l.getNumberProperty('state') == 0) {
                                                    l.startInstance(cm.getPlayer().getParty(), cm.getPlayer().getMap(), 200);
                                                    cm.worldSpouseMessage(37, '≡时代怪兽新闻≡　　玩家 ' + cm.getPlayer().getName() + ' 等级 ' + cm.getPlayer().getLevel() + '　挑战航海中的危机[ 航海中的危机 ★★★★★★★ ]');
                                                    cm.worldSpouseMessage(37, '≡时代怪兽新闻≡　　玩家 ' + cm.getPlayer().getName() + ' 等级 ' + cm.getPlayer().getLevel() + '　挑战航海中的危机[ 航海中的危机 ★★★★★★★ ]');
                                                    cm.worldSpouseMessage(37, '≡时代怪兽新闻≡　　玩家 ' + cm.getPlayer().getName() + ' 等级 ' + cm.getPlayer().getLevel() + '　挑战航海中的危机[ 航海中的危机 ★★★★★★★ ]');
                                                    cm.getMap().startMapEffect('玩家 ' + cm.getPlayer().getName() + ' 带领TA的远征队 征伐 航海中的危机 危险星：★★★★★★★', 5121000);
                                                    cm.getPlayer().modifyCSPoints(1, -4000);
                                                } else {
                                                    cm.sendOk('\r\n\r\n\r\n		#d#e当前频道已有人正在征伐海兽!!请等待或变更频道！！#k#n', 0);
                                                }
                                            } else {
                                                cm.sendOk('你所属的组队人数在' + minPartySize + '人以下，没办法进去。必须有' + minLevel + '级以上的角色' + minPartySize + '个以上才能进去。并且队员要在相同频道和地图,并且该怪物只能在1频道挑战！\r\n请确认一下，然后再来找我。', 0);
                                            }
                                        }
                                    }
                                    cm.dispose();
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}