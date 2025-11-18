var status = 0;
var typede = 0;
var 继续选择 = 0;
function start() {
    status = -1;
    action(1, 0, 0);
}
function action(f, d, c) {
    if (f == -1) {
        cm.dispose();
    } else {
        if (f == 0) {
            cm.dispose();
            return;
        }
        if (f == 1) {
            status++;
        }
        if (status == 0) {
            var b = '';
            b = '我这里是VIP管理员哦,\r\n\r\n当前VIP等级: #r' + cm.getVip() + '\r\n';
            b += '#L1##b免费领取VIP会员(VIP 3)#l\r\n';
            b += '#L5##b购买VIP会员(VIP 4)#l\r\n';
            b += '#L6##b购买VIP会员(VIP 5)#l\r\n';
            b += '#L7##b购买VIP会员(VIP 6)#l\r\n';
            b += '#L8##b购买VIP会员(VIP 7)#l\r\n';
            b += '#L9##b购买VIP会员(VIP 8)#l\r\n\r\n';
            b += '#L10##b领取VIP每日福利#l\r\n';
            b += '#L11##b进入VIP泡点专属地图(拥有VIP神秘盒子泡点翻倍获得)#l\r\n';
            b += '#L12##b购买VIP神秘盒子可全图泡点(100000点卷)#l\r\n';
            cm.askMenu(b);
        } else {
            if (c == 1) {
                var e = 3;
                if (cm.getVip() < 3) {
                    cm.setVip(e);
                    cm.worldSpouseMessage(21, '玩家 ' + cm.getPlayer().getName() + ' 目前已是VIP' + e + '。');
                    cm.dispose();
                    cm.sendOk('成功领取VIP' + e + '。');
                } else {
                    cm.dispose();
                    cm.sendOk('你目前已是VIP' + e + '了。');
                }
            } else {
                if (c > 1 && c < 10) {
                    继续选择 = c - 1;
                    var e = 继续选择;
                    var a = 10000 * e;
                    cm.askYesNo('您是否购买VIP#k' + 继续选择 + ' 需要花费' + a + '点卷？');
                } else {
                    if (c == 10) {
                        cm.dispose();
                        cm.openNpc(9010002, 1);
                    } else {
                        if (c == 11) {
                            cm.dispose();
                            cm.warp(209000000, 0);
                        } else {
                            if (c == 12) {
                                cm.dispose();
                                cm.openNpc(9010002, '全场泡点');
                            } else {
                                if (status == 2) {
                                    var e = 继续选择;
                                    var a = 10000 * e;
                                    if (cm.getPlayer().getCSPoints(1) < a) {
                                        cm.dispose();
                                        cm.sendOk('抱歉，你没足够的点卷！');
                                    } else {
                                        if (cm.getVip() < 9) {
                                            cm.setVip(e);
                                            cm.worldSpouseMessage(21, '玩家 ' + cm.getPlayer().getName() + ' 目前已是VIP' + e + '。');
                                            cm.dispose();
                                            cm.sendOk('成功购买VIP' + e + '。');
                                        } else {
                                            cm.dispose();
                                            cm.sendOk('你目前已是VIP' + e + '了。');
                                        }
                                    }
                                } else {
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