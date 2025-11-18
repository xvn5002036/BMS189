var status = 0;
var em, Eventstatus;
var sel = -1;
var 可参与次数 = 100;
var 事件名称 = '活动_跑旗赛9点';
var 跑旗准备地图 = 932200001;
var 跑旗结算地图 = 932200002;
var 活动地图 = 932200100;
var 退场地图 = 910000000;
var 要求的频道 = [1];
var 活动介绍 = '';
var GP = Array(0, 5, 4, 3, 2, 1);
function start() {
    if (cm.getMapId() == 932200003) {
        事件名称 = '活动_跑旗赛7点';
        跑旗准备地图 = 932200003;
        跑旗结算地图 = 932200004;
        活动介绍 += '欢迎来到跑旗7点活动赛：\r\n\r\n';
    } else {
        事件名称 = '活动_跑旗赛9点';
        跑旗准备地图 = 932200001;
        跑旗结算地图 = 932200002;
        活动介绍 += '欢迎来到跑旗9点活动赛：\r\n\r\n';
    }
    活动介绍 += '1、必须有家族.\r\n2、参赛人数 5+.\r\n3、要求8分跑3圈.\r\n4、前5名有奖励.\r\n\r\n';
    活动介绍 += '#r#e注：管理员会随时开放活动，请保持关注！#n#k';
    em = cm.getEventManager(事件名称);
    Eventstatus = '#r关闭状态。#k';
    if (em.getProperty('gate') == '2') {
        Eventstatus = '#e#r正在进行中。#n';
    }
    if (em.getProperty('gate') == '1') {
        Eventstatus = '#e#r可以入场。#n';
    }
    if (em.getProperty('gate') == '3') {
        Eventstatus = '#e#r管理员已关闭入口，禁止进入。#n';
    }
    if (em.getProperty('gate') == '4') {
        Eventstatus = '#e#r活动结束了。#n';
    }
    status = -1;
    action(1, 0, 0);
}
function action(d, c, b) {
    var a = cm.getMapId();
    if (d == -1) {
        cm.dispose();
    } else {
        if (d == 0) {
            cm.dispose();
            return;
        }
        if (d == 1) {
            status++;
        } else {
            status--;
        }
        if (a == 跑旗结算地图) {
            action0(d, c, b);
        } else {
            action2(d, c, b);
        }
    }
}
function action0(d, c, b) {
    if (status == 0) {
        var a = '你想做什么呢？\r\n目前的活动状态：' + Eventstatus + '\r\n';
        a += '#b#L1# 我想查看活动介绍。\r\n#L2# 我想放弃挑战离开这里。\r\n';
        if (cm.getPlayer().isGM()) {
            a += '#r#e#L3# 关闭入口！（管理员可见）\r\n';
            a += '#r#e#L4# 开启入口！（管理员可见）\r\n';
        }
        cm.sendNext(a);
    } else {
        if (status == 1) {
            if (b == 1) {
                cm.sendNext(活动介绍);
            } else {
                if (b == 2) {
                    cm.warp(退场地图, 0, false);
                } else {
                    if (b == 3) {
                        em.setProperty('gate', '3');
                        cm.playerMessage(-1, '[跑旗赛] 已经关闭了入口！');
                        cm.effect_NormalSpeechBalloon('[跑旗赛] 已经关闭了入口！', 1, 0, 0, 3000, 0, 0);
                        cm.worldSpouseMessage(34, '【家族跑旗赛】 管理员 ' + cm.getPlayer().getName() + ' _关闭了活动入口。');
                    } else {
                        if (b == 4) {
                            em.setProperty('gate', '1');
                            cm.playerMessage(-1, '[跑旗赛] 已经开启了入口！');
                            cm.effect_NormalSpeechBalloon('[跑旗赛] 已经开启了入口！', 1, 0, 0, 3000, 0, 0);
                            cm.worldSpouseMessage(34, '【家族跑旗赛】 管理员 ' + cm.getPlayer().getName() + ' _开启了活动入口。');
                        }
                    }
                }
            }
            cm.dispose();
        }
    }
}
function action1(c, b, a) {
    if (status == 0) {
        cm.sendNormalTalk('再这样下去，一切都会凋零的，不管是我，是你，还是我们所有人。\r\n　　　　　　　　　　　　　　　？悲观的精灵', 4, 3003337, false, true);
        cm.dispose();
    }
}
function action2(c, b, a) {
    if (status == 0) {
        if (em.getProperty('gate') == '0') {
            if (cm.getPlayer().isGM()) {
                cm.askYesNo('尊敬的GM，现在开启跑旗赛入口吗？');
                status = 2;
            } else {
                cm.sendOk('不是活动时间。\r\n请稍后再试。');
                cm.dispose();
            }
        } else {
            if (要求的频道 != 0 && cm.getPlayer().getClient().getChannel() != 要求的频道) {
                cm.sendOk('#d跑旗活动仅能在 #r' + 要求的频道 + ' #d频道才可以执行。');
                cm.dispose();
            } else {
                if (cm.getGuild() == null) {
                    cm.sendOk('对不起，你目前没有家族，我不能让你进去');
                    cm.dispose();
                } else {
                    if (cm.getEventCount('家族跑旗赛') >= 可参与次数) {
                        cm.sendOk('今天你已经参与了' + 可参与次数 + '次，不能再参与该副本了！请明天赶早~');
                        cm.dispose();
                    } else {
                        if (em.getProperty('gate') == '2') {
                            cm.sendOk('已经开始了家族跑旗赛活动，请稍后再来。');
                            cm.dispose();
                        } else {
                            if (cm.getPlayer().isGM()) {
                                cm.sendNext('#e#r[提示]' + em.getProperty('gate') + '：#n#b\r\n				#e<家族活动>#n\r\n\r\n#d跑旗赛就要开始啦！现在还有几分钟的等待时间……\r\n目前的活动状态：' + Eventstatus + '\r\n\r\n\r\n#b#L0#我想参加<跑旗赛>。#l\r\n#L1#我想了解一下该活动的说明。#l \r\n#L3# 关闭入口！(GM可见)\r\n#L4# 开启入口！（GM可见）\r\n#L2#我想离开这里。#l');
                            } else {
                                if (em.getProperty('gate') == '2' || em.getProperty('gate') == '1') {
                                    cm.sendNext('#e#r[提示]：#n#b\r\n				#e<家族活动>#n\r\n\r\n#d跑旗赛就要开始啦！现在还有几分钟的等待时间……\r\n目前的活动状态：' + Eventstatus + '\r\n\r\n\r\n#b#L0#我想参加<跑旗赛>。#l\r\n#L2#我想离开这里。#l\r\n#L1#我想了解一下该活动的说明。#l');
                                } else {
                                    cm.sendNext('#e#r[提示]：#n#b\r\n				#e<家族活动>#n\r\n\r\n#d跑旗赛就要开始啦！……\r\n目前的活动状态：' + Eventstatus + '\r\n\r\n\r\n#b#L0#我想参加<跑旗赛>。#l\r\n#L2#我想离开这里。#l\r\n#L1#我想了解一下该活动的说明。#l');
                                }
                            }
                        }
                    }
                }
            }
        }
    } else {
        if (status == 1) {
            if (a == 0) {
                if (em.getProperty('gate') == '1') {
                    em.startInstance(cm.getPlayer(), cm.getMap());
                    em.setProperty('rank', '0');
                    em.setProperty('time', '0');
                    cm.setEventCount('家族跑旗赛');
                    cm.getPlayer().dropMessage(-1, '活动马上开始，请等候后面的玩家！');
                    cm.sendOk(活动介绍);
                    cm.dispose();
                } else {
                    cm.sendOk('跑旗赛并没有开启');
                    cm.dispose();
                }
            } else {
                if (a == 1) {
                    cm.sendOk(活动介绍);
                    cm.dispose();
                } else {
                    if (a == 2) {
                        cm.warp(退场地图, 0, false);
                        cm.dispose();
                    } else {
                        if (a == 3) {
                            em.setProperty('gate', '3');
                            cm.playerMessage(-1, '[跑旗赛] 已经关闭了入口！');
                            cm.effect_NormalSpeechBalloon('[跑旗赛] 已经关闭了入口！', 1, 0, 0, 3000, 0, 0);
                            cm.worldSpouseMessage(34, '【家族跑旗赛】 管理员 ' + cm.getPlayer().getName() + ' _关闭了活动入口。');
                            cm.dispose();
                        } else {
                            if (a == 4) {
                                em.setProperty('gate', '1');
                                cm.playerMessage(-1, '[跑旗赛] 已经开启了入口！');
                                cm.effect_NormalSpeechBalloon('[跑旗赛] 已经开启了入口！', 1, 0, 0, 3000, 0, 0);
                                cm.worldSpouseMessage(34, '【家族跑旗赛】 管理员 ' + cm.getPlayer().getName() + ' _开启了活动入口。');
                                cm.dispose();
                            }
                        }
                    }
                }
            }
        } else {
            if (status == 2) {
                em.setProperty('Round' + cm.getName(), '0');
                cm.gainGP(GP[0]);
                cm.warp(910000000, 0);
                cm.dispose();
            } else {
                if (status == 3) {
                    em.setProperty('gate', '1');
                    cm.sendOk('已经开启了入口！');
                    cm.spouseMessage(35, '[家族跑旗赛活动] 管理员已经开放了活动入口，请大家速度从拍卖处的副本入口进来哦！');
                    cm.dispose();
                } else {
                    if (status == 4) {
                        cm.warp(跑旗准备地图, 0);
                        cm.dispose();
                    }
                }
            }
        }
    }
}