var status = 0;
var maxPlay = 1;
var em;
var emgate;
var Eventstatus;
function start() {
    status = -1;
    em = cm.getEventManager('Eventjiangli');
    emgate = cm.getEventManager('EventjiangliOpen');
    Eventstatus = '#r关闭状态。#k';
    if (em.getProperty('start') == '3') {
        Eventstatus = '#e#r正在进行中。#n';
    }
    if (em.getProperty('start') == '1') {
        Eventstatus = '#e#r开放入口中。#n';
    }
    if (em.getProperty('start') == '2') {
        Eventstatus = '#e#r等待入场中。#n';
    }
    if (em.getProperty('start') == '0') {
        Eventstatus = '#e#r等待入场。#n';
    }
    if (emgate.getProperty('open') == 'false') {
        Eventstatus = '#e#r管理员已关闭入口，禁止进入。#n';
    }
    action(1, 0, 0);
}
function action(c, b, a) {
    if (c == -1) {
        cm.dispose();
    } else {
        if (c == 0 && status >= 0) {
            cm.dispose();
            return;
        }
        if (c == 1) {
            status++;
        } else {
            status--;
        }
        if (status == 0) {
            if (cm.getMap().getId() == 109060001) {
                if (cm.getPlayer().isGM()) {
                    cm.askMenu('你想做什么呢？\r\n目前的活动状态：' + Eventstatus + '\r\n#b#L1# 我想查看活动介绍。\r\n#L2# 我想放弃挑战离开这里。#r#e\r\n#L3# 关闭入口！（管理员可见）\r\n#L4# 开启入口！（管理员可见）');
                } else {
                    cm.askMenu('你想做什么呢？\r\n目前的活动状态：' + Eventstatus + '\r\n#b#L1# 我想查看活动介绍。\r\n#L2# 我想放弃挑战离开这里。');
                }
            } else {
                if (cm.getMap().getId() == 910048200) {
                    cm.sendOk('你好~');
                    cm.dispose();
                } else {
                    if (emgate.getProperty('open') == 'false') {
                        if (cm.getPlayer().isGM()) {
                            status = 2;
                            cm.askYesNo('尊敬的管理员，您想开放活动吗？');
                        } else {
                            cm.sendOk('已经开始，或现在不是活动时间。\r\n请稍后再试。');
                            cm.dispose();
                        }
                        return;
                    }
                    if (cm.getBossLog('点卷活动1') >= maxPlay) {
                        cm.sendOk('今天你已经参与了' + maxPlay + '次，不能再参与该活动了！请明天赶早~');
                        cm.dispose();
                        return;
                    }
                    if (cm.getPlayerCount(993010000) == 0 && (em.getProperty('start') == '3' || em.getProperty('start') == '4')) {
                        em.setProperty('Eventjiangli', '0');
                        em.setProperty('renshu', 0);
                        em.setProperty('start', '0');
                        em.setProperty('question', '0');
                        em.setProperty('RightAnwser', '0');
                        cm.sendOk('请重新打开我哦~~');
                        cm.dispose();
                        return;
                    }
                    if (em.getProperty('start') == '3') {
                        cm.sendOk('已经开始了OX宾果活动，请稍后再来。');
                        cm.dispose();
                        return;
                    }
                    if (em == null) {
                        cm.sendOk('出现错误，请重新进入副本。');
                    } else {
                        if (cm.getPlayer().isGM()) {
                            cm.askMenu('#e#r[●ω●提示]：#n#b\r\n				#e<点卷活动>#n\r\n\r\n#d点卷活动就要开始啦！现在还有几分钟的等待时间……\r\n目前的活动状态：' + Eventstatus + '\r\n\r\n\r\n#b#L0#我想参加<活动>。#l\r\n#L1#我想了解一下该活动的说明。#l \r\n#L3# 关闭活动入口！(GM可见)');
                        } else {
                            if (em.getProperty('start') == '2' || em.getProperty('start') == '1') {
                                cm.askMenu('#e#r[●ω●提示]：#n#b\r\n				#e<活动>#n\r\n\r\n#d就要开始啦！现在还有几分钟的等待时间……\r\n目前的活动状态：' + Eventstatus + '\r\n\r\n\r\n#b#L0#我想参加<活动>。#l\r\n#L1#我想了解一下该活动的说明。#l');
                            } else {
                                cm.askMenu('#e#r[●ω●提示]：#n#b\r\n				#e<活动>#n\r\n\r\n#d活动就要开始啦！……\r\n目前的活动状态：' + Eventstatus + '\r\n\r\n\r\n#b#L0#我想执行<活动>。#l\r\n#L1#我想了解一下该活动的说明。#l');
                            }
                        }
                    }
                }
            }
        } else {
            if (status == 1) {
                if (a == 0) {
                    if (em.getProperty('start') == '0') {
                        em.setProperty('start', '1');
                        cm.warp(706030100, 'sp');
                        cm.getMap().startMapEffect('现在有3分钟的时间等候其它玩家，请稍后！', 5121052);
                    } else {
                        if (em.getProperty('start') == '1') {
                            cm.warp(706030100, 'sp');
                            cm.getMap().startMapEffect('现在有3分钟的时间等候其它玩家，请稍后！', 5121052);
                        } else {
                            cm.warp(706030100, 'sp');
                            cm.getPlayer().dropMessage(1, '活动马上开始，请等候后面的玩家！');
                        }
                    }
                    cm.dispose();
                } else {
                    if (a == 1) {
                        cm.dispose();
                    } else {
                        if (a == 2) {
                            cm.askYesNo('真的要离开这里吗？这样就不能和大家一起玩了呢！');
                        } else {
                            if (a == 3) {
                                emgate.setProperty('open', 'false');
                                cm.sendOk('已经关闭了入口！');
                                cm.spouseMessage(36, '[活动] 现在管理员已经关闭了活动入口。');
                                cm.worldBrodcastEffect(5121052, '[活动] 现在管理员已经关闭了活动入口。');
                                cm.dispose();
                            } else {
                                if (a == 4) {
                                    emgate.setProperty('open', 'true');
                                    cm.sendOk('已经开启入口！');
                                    cm.spouseMessage(36, '[活动] 现在管理员已经开启了活动入口。');
                                    cm.worldBrodcastEffect(5121052, '[活动] 现在管理员已经开启了活动入口。');
                                    cm.dispose();
                                }
                            }
                        }
                    }
                }
            } else {
                if (status == 2) {
                    cm.warp(910000000, 0);
                    cm.dispose();
                } else {
                    if (status == 3) {
                        emgate.setProperty('open', 'true');
                        cm.sendOk('已经开启了入口！');
                        cm.spouseMessage(36, '[活动] 管理员已经开放了活动入口，请大家速度从市场处的财神爷入口进来哦！');
                        cm.worldBrodcastEffect(5121052, '管理员已经开放了活动入口，请大家速度从市场处的财神爷入口进来哦！');
                        cm.dispose();
                    }
                }
            }
        }
    }
}