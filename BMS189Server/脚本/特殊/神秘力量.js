var status = 0;
var itemidd;
function start() {
    status = -1;
    action(1, 0, 0);
}
function action(e, c, b) {
    if (status == 0 && e == 0) {
        cm.dispose();
        return;
    }
    if (e == 1) {
        status++;
    } else {
        status--;
    }
    if (cm.getMapId() == 180000001) {
        cm.sendOk('很遗憾，您因为违反用户守则被禁止游戏活动，如有异议请联系管理员.');
        cm.dispose();
    } else {
        if (status == 0) {
            var d = '亲爱的#r#h ##k您好，我这里可以为您领取神秘力量微章哦#k\r\n';
            d += '#b#L1#领取#v1712001##z1712001#(需要10000点卷)#l\r\n';
            d += '#b#L2#领取#v1712002##z1712002#(需要10000点卷)#l \r\n';
            d += '#b#L3#领取#v1712003##z1712003#(需要10000点卷)#l \r\n';
            d += '#b#L4#领取#v1712004##z1712004#(需要10000点卷)#l \r\n';
            d += '#b#L5#领取#v1712005##z1712005#(需要10000点卷)#l \r\n';
            d += '#b#L6#领取#v1712006##z1712006#(需要10000点卷)#l \r\n';
            d += '#b#L7#完成神秘徽章6格背包任务(需要100000点卷)#l \r\n';
            d += '#b#L8#合成神秘徽章[可增加属性和攻击力]#l \r\n';
            d += '----------------------------------------------------\r\n';
            d += '#b#L9#强化第1栏神秘徽章10000点卷增加100神秘力量#l \r\n';
            d += '#b#L10#强化第2栏神秘徽章10000点卷增加100神秘力量#l \r\n';
            d += '#b#L11#强化第3栏神秘徽章10000点卷增加100神秘力量#l \r\n';
            d += '#b#L12#强化第4栏神秘徽章10000点卷增加100神秘力量#l \r\n';
            d += '#b#L13#强化第5栏神秘徽章10000点卷增加100神秘力量#l \r\n';
            d += '#b#L14#强化第6栏神秘徽章10000点卷增加100神秘力量#l \r\n';
            d += '----------------------------------------------------\r\n';
            d += '#b#L15#提升第1栏神秘徽章等级#l \r\n';
            d += '#b#L16#提升第2栏神秘徽章等级#l \r\n';
            d += '#b#L17#提升第3栏神秘徽章等级#l \r\n';
            d += '#b#L18#提升第4栏神秘徽章等级#l \r\n';
            d += '#b#L19#提升第5栏神秘徽章等级#l \r\n';
            d += '#b#L20#提升第6栏神秘徽章等级#l \r\n';
            cm.askMenu(d);
        } else {
            if (status == 1) {
                switch (b) {
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                case 6:
                    itemidd = 1712000 + b;
                    cm.askNumber('请输入你购买#v' + itemidd + '##z' + itemidd + '#的数量。', 0, 1, 9999999);
                    break;
                case 7:
                    if (cm.getPlayer().getCSPoints(1) < 10000) {
                        cm.dispose();
                        cm.sendOk('您的点卷不足');
                        return;
                    }
                    cm.getPlayer().forceCompleteQuest(34478);
                    cm.getPlayer().modifyCSPoints(1, -10000);
                    cm.dispose();
                    cm.sendOk('成功开启神秘徽章6格背包。');
                    break;
                case 8:
                    cm.dispose();
                    cm.openNpc(1022003, 1);
                    break;
                case 9:
                    使用点卷强化神秘徽章(-1600);
                    break;
                case 10:
                    使用点卷强化神秘徽章(-1601);
                    break;
                case 11:
                    使用点卷强化神秘徽章(-1602);
                    break;
                case 12:
                    使用点卷强化神秘徽章(-1603);
                    break;
                case 13:
                    使用点卷强化神秘徽章(-1604);
                    break;
                case 14:
                    使用点卷强化神秘徽章(-1605);
                    break;
                case 15:
                    提升神秘徽章等级(-1600);
                    break;
                case 16:
                    提升神秘徽章等级(-1601);
                    break;
                case 17:
                    提升神秘徽章等级(-1602);
                    break;
                case 18:
                    提升神秘徽章等级(-1603);
                    break;
                case 19:
                    提升神秘徽章等级(-1604);
                    break;
                case 20:
                    提升神秘徽章等级(-1605);
                    break;
                }
            } else {
                if (status == 2) {
                    if (cm.getSpace(1) < b) {
                        cm.sendOk('您的背包空间不足，请保证每个栏位至少8格的空间，以避免领取失败。');
                        cm.dispose();
                        return;
                    }
                    if (cm.getPlayer().getCSPoints(1) < 10000 * b) {
                        cm.sendOk('抱歉，你没足够的点卷！本次需要点卷' + 10000 * b);
                        cm.dispose();
                    } else {
                        cm.getPlayer().modifyCSPoints(1, -10000 * b);
                        for (var a = 0; a < b; a++) {
                            cm.gainItem(itemidd, 1);
                        }
                        cm.sendOk('成功购买:' + b + '个.');
                        status = -1;
                    }
                }
            }
        }
    }
}
function 使用点卷强化神秘徽章(a) {
    if (cm.getPlayer().getCSPoints(1) < 10000) {
        cm.dispose();
        cm.sendOk('您的点卷不足10000');
        return;
    }
    var b = cm.getItemByPosition(a);
    if (b != null) {
        b.getArc().setPower(b.getArc().getPower() + 100);
        cm.getPlayer().forceUpdateItem(b);
        cm.getPlayer().modifyCSPoints(1, -10000);
        cm.sendOk('神秘力量增加到' + b.getArc().getPower());
        status = -1;
    } else {
        cm.sendOk('请先装备你的神秘徽章');
        cm.dispose();
    }
}
function 提升神秘徽章等级(a) {
    if (cm.getPlayer().getCSPoints(1) < 10000) {
        cm.dispose();
        cm.sendOk('您的点卷不足10000');
        return;
    }
    var b = cm.getItemByPosition(a);
    if (b != null) {
        b.getArc().forceUpgrade(cm.getPlayer().getClient());
        cm.getPlayer().modifyCSPoints(1, -10000);
        cm.dispose();
    } else {
        cm.sendOk('请先装备你的神秘徽章');
        cm.dispose();
    }
}