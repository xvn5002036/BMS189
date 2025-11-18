var status = 0;
function start() {
    status = -1;
    action(1, 0, 0);
}
function action(f, d, c) {
    if (f <= 0 && status <= 0) {
        cm.dispose();
    }
    if (f == 1) {
        status++;
    } else {
        status--;
    }
    if (cm.getzhizunvip() != 2) {
        cm.dispose();
        cm.playerMessage(1, '该菜单是至尊版专享。');
        return;
    }
    if (cm.getJob() == 3001 || cm.getJob() == 3101 || cm.getJob() == 3120 || cm.getJob() == 3121 || cm.getJob() == 3122) {
        var b = 50;
    } else {
        var b = 10;
    }
    if (status == 0) {
        abb = 1;
        cm.askText('#r#e[ #h # ] 尊敬的玩家 #n#k\r\n\r\n增加HP上限，请输入数字：“ 1 - 100000 ” \r\n\r\n当前血量：#b' + cm.getPlayerStat('MAXHP') + '#r		当前蓝量：#b' + cm.getPlayerStat('MAXMP'));
    } else {
        if (status == 1) {
            var g = cm.getPlayerStat('MAXHP');
            var e = cm.getPlayerStat('MAXMP');
            if (g == 500000) {
                cm.playerMessage(1, '抱歉！血量已到最大值\r\n\r\n不能继续增加血量了\r\n\r\n血量：' + g + '　　蓝量：' + e + '\r\n\r\n' + cm.getPlayer().getName());
                cm.dispose();
            } else {
                if (/^[a-zA-Z]*$/.test(cm.getText())) {
                    cm.playerMessage(1, '请输入整数数值\r\n\r\n不可包含字母');
                    cm.dispose();
                } else {
                    if (/^[\u4e00-\u9fa5]*$/.test(cm.getText())) {
                        cm.playerMessage(1, '请输入整数数值\r\n\r\n不可包含汉字');
                        cm.dispose();
                    } else {
                        if (cm.getText() < 1) {
                            cm.playerMessage(1, '数值不能小于 [1] \r\n\r\n 数值不能大于 [100000] \r\n\r\n请玩家重新调整数值');
                            cm.dispose();
                        } else {
                            if (cm.getText() > 100000) {
                                cm.playerMessage(1, '数值不能小于 [1] \r\n\r\n 数值不能大于 [100000] \r\n\r\n请玩家重新调整数值');
                                cm.dispose();
                            } else {
                                cm.askYesNo('#e#d☆☆☆☆☆☆☆☆☆『洗血功能』☆☆☆☆☆☆☆☆☆\r\n\r\n#r[ #h # ]尊敬的玩家 欢迎您光临洗血基地\r\n\r\n血量增#d：' + cm.getText() + '#r\r\n用点卷：#d' + cm.getText() * b + '\r\n\r\n#r　　　　请仔细阅读 无误请单击确认！！', 1033210);
                            }
                        }
                    }
                }
            }
        } else {
            if (status == 2) {
                if (cm.haveItem(2430865)) {
                    var a = cm.getPlayer().getStats().getMaxHp();
                    if (cm.getPlayer().getCSPoints(1) >= cm.getText() * b) {
                        cm.getPlayer().modifyCSPoints(1, -cm.getText() * b);
                        cm.getPlayer().getStats().setMaxHp(a + cm.getText() * 1, cm.getPlayer());
                        cm.worldSpouseMessage(18, '[ 洗血基地 ] ：尊敬的玩家' + cm.getPlayer().getName() + '在女神面前 ' + cm.getText() * b + ' 点卷增值了 ' + cm.getText() + ' 血量上限！');
                        cm.sendOk('#d#e恭喜您 [ #h # ] 增值了' + cm.getText() + '血量\r\n\r\n女神帮你刷新状态 ！');
                        cm.dispose();
                        cm.fakeRelog();
                    } else {
                        cm.sendOk('#d#e抱歉玩家\r\n\r\n您资金不足 享受不了洗血高端服务！');
                        cm.dispose();
                    }
                } else {
                    var a = cm.getPlayer().getStats().getMaxHp();
                    if (cm.getPlayer().getCSPoints(1) >= cm.getText() * b) {
                        cm.getPlayer().modifyCSPoints(1, -cm.getText() * b);
                        cm.getPlayer().getStats().setMaxHp(a + cm.getText() * 1, cm.getPlayer());
                        cm.worldSpouseMessage(18, '[ 洗血基地 ] ：尊敬的玩家' + cm.getPlayer().getName() + '在女神面前 ' + cm.getText() * b + ' 点卷增值了 ' + cm.getText() + ' 血量上限！');
                        cm.sendOk('#d#e恭喜您 [ #h # ] 增值了' + cm.getText() + '血量\r\n\r\n女神帮你刷新状态 ！');
                        cm.fakeRelog();
                        cm.warp(cm.getMapId());
                        cm.dispose();
                    } else {
                        cm.sendOk('#d#e抱歉玩家\r\n\r\n您资金不足 享受不了洗血高端服务！');
                        cm.dispose();
                    }
                }
            }
        }
    }
}