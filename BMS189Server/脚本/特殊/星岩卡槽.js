var iconA = '#fUI/Basic.img/VScr7/enabled/thumb0#';
var iconB = '#fUI/ChatBalloon.img/pet/16/nw#';
var iconC = '#fUI/ChatBalloon.img/pet/16/ne#';
var iconD = '#fUI/GuildBBS/GuildBBS/Emoticon/Cash/7#';
var iconE = '#fUI/GuildBBS/GuildBBS/Emoticon/Cash/6#';
var iconF = '#fUI/GuildBBS/GuildBBS/Emoticon/Cash/3#';
var iconG = '#fUI/GuildBBS/GuildBBS/Emoticon/Cash/1#';
var iconH = '#fUI/UIWindow2/ToolTip/Equip/Star/Star2#';
var iconI = '#fUI/UIWindow2/MobGage/Mob/2510200#';
var iconJ = '#fUI/UIWindow3/Scenario/list/icon/icon7/11#';
var iconK = '#fUI/UIWindow3/Study/Fever/1#';
var iconL = '#fUI/UIWindowBT/MonsterBattleCollection2/Btstart/normal/0#';
var iconM = '#fUI/RunnerGame/RunnerGameUI/UI/BtHowto/mouseOver/0#';
var IconO = '#fUI/RunnerGame/RunnerGameUI/Effect/ItemEffect_Protect1/3#';
var IconP = '#fUI/UIMiniGame/starPlanetRPS/heart#';
var status;
var txt;
var PropItem;
var Rm;
function start() {
    status = -1;
    action(1, 0, 0);
}
function action(d, f, g) {
    if (status == 0 && d == 0) {
        cm.dispose();
        return;
    } else {
        if (d == 1) {
            status++;
        } else {
            status--;
        }
        if (status == 0) {
            txt = '				' + IconO + '#k#n\r\n';
            txt += ' ' + IconP + IconP + IconP + IconP + IconP + IconP + IconP + IconP + IconP + IconP + IconP + IconP + IconP + IconP + IconP + '\r\n';
            txt += '				　#d - 功能说明 -\r\n';
            txt += '#r　#L0#开放 [ 2 ] 卡槽#l　　　#L1#开放 [ 3 ] 卡槽#l\r\n';
            txt += '#b　#L2#卸载 [ 2 ] 卡槽#l　　　#L3#卸载 [ 3 ] 卡槽#l#k\r\n\r\n';
            txt += '#b　告别#r星岩#b一个卡槽 开放 2 3 位置卡槽 让您属性爆炸\r\n';
            txt += '#b　星岩卡槽设置仅支持 [ #rS#b ] 类型 可镶嵌且卸下存背包\r\n';
            txt += '#b　两个卡槽的标价亦不同 且镶且珍惜 土豪成神必选通道\r\n\r\n';
            txt += ' ' + IconP + IconP + IconP + IconP + IconP + IconP + IconP + IconP + IconP + IconP + IconP + IconP + IconP + IconP + IconP + '\r\n';
            cm.askMenu(txt);
        } else {
            if (status == 1) {
                if (g == 0) {
                    s = 1;
                } else {
                    if (g == 1) {
                        s = 2;
                    } else {
                        if (g == 2) {
                            var l = cm.getInventory(1).getItem(1);
                            var k = cm.getItemInfo();
                            var b = l.copy();
                            if (b.getSocket2() <= 0) {
                                cm.playerMessage(1, '此道具没有星岩 无需卸下');
                                cm.dispose();
                                return;
                            }
                            if (cm.getPlayer().getCSPoints(1) <= 100000) {
                                cm.playerMessage(1, '抱歉 您的点卷不足');
                                cm.dispose();
                                return;
                            }
                            l = cm.getInventory(1).getItem(1);
                            if (l == null) {
                                cm.playerMessage(1, '请确认您的背包内 [ 1 ] 号栏窗是否有道具');
                                cm.dispose();
                                return;
                            }
                            if (cm.isCash(l.getItemId())) {
                                cm.playerMessage(1, '抱歉 - 现金道具不可强化');
                                cm.dispose();
                                return;
                            }
                            cm.gainItem(b.getSocket2(), 1);
                            b.setSocket2(0);
                            cm.removeSlot(1, 1, 1);
                            cm.addFromDrop(cm.getClient(), b, false);
                            cm.getPlayer().modifyCSPoints(1, -100000);
                            cm.playerMessage(1, '恭喜您 - 卸载完毕');
                            cm.dispose();
                            return;
                        } else {
                            if (g == 3) {
                                var l = cm.getInventory(1).getItem(1);
                                var k = cm.getItemInfo();
                                var b = l.copy();
                                if (b.getSocket3() <= 0) {
                                    cm.playerMessage(1, '此道具没有星岩 无需卸下');
                                    cm.dispose();
                                    return;
                                }
                                if (cm.getPlayer().getCSPoints(1) <= 100000) {
                                    cm.playerMessage(1, '抱歉 您的点卷不足');
                                    cm.dispose();
                                    return;
                                }
                                l = cm.getInventory(1).getItem(1);
                                if (l == null) {
                                    cm.playerMessage(1, '请确认您的背包内 [ 1 ] 号栏窗是否有道具');
                                    cm.dispose();
                                    return;
                                }
                                if (cm.isCash(l.getItemId())) {
                                    cm.playerMessage(1, '抱歉 - 现金道具不可强化');
                                    cm.dispose();
                                    return;
                                }
                                cm.gainItem(b.getSocket3(), 1);
                                b.setSocket3(0);
                                cm.removeSlot(1, 1, 1);
                                cm.addFromDrop(cm.getClient(), b, false);
                                cm.getPlayer().modifyCSPoints(1, -100000);
                                cm.playerMessage(1, '恭喜您 - 卸载完毕');
                                cm.dispose();
                                return;
                            }
                        }
                    }
                }
                var a = 0;
                var e = cm.getInventory(3).list();
                var c = e.iterator();
                var j = '#d		  - 请选择您需镶嵌的 #r星岩#d 类型 -#k\r\n#b';
                position = -1;
                PropItem = Array();
                while (c.hasNext()) {
                    var l = c.next();
                    if (l.getItemId() >= 3064000 && l.getItemId() <= 3064490) {
                        PropItem[l.getPosition()] = l.getItemId();
                        a++;
                    }
                }
                if (a == 0) {
                    cm.playerMessage(1, '抱歉 - 您的背包内没有星岩');
                    cm.dispose();
                    return;
                } else {
                    for (var h in PropItem) {
                        j += '　#L' + h + '# #i' + PropItem[h] + '#　#z' + PropItem[h] + '##l';
                        if (h != 0 && (h + 1) % 1 == 0) {
                            j += '\r\n';
                        }
                    }
                }
                cm.askMenu(j);
            } else {
                if (status == 2) {
                    Rm = PropItem[g];
                    if (cm.getPlayer().getCSPoints(1) <= 100000) {
                        cm.playerMessage(1, '抱歉 您的点卷不足');
                        cm.dispose();
                        return;
                    }
                    l = cm.getInventory(1).getItem(1);
                    if (l == null) {
                        cm.playerMessage(1, '请确认您的背包内 [ 1 ] 号栏窗是否有道具');
                        cm.dispose();
                        return;
                    }
                    var l = cm.getInventory(1).getItem(1);
                    var k = cm.getItemInfo();
                    var b = l.copy();
                    if (cm.isCash(l.getItemId())) {
                        cm.playerMessage(1, '抱歉 - 现金道具不可强化');
                        cm.dispose();
                        return;
                    }
                    if (s == 1) {
                        if (b.getSocket2() > 0) {
                            cm.playerMessage(1, '请先卸下已有 星岩 再进行镶嵌');
                            cm.dispose();
                            return;
                        }
                        b.setSocket2(Rm);
                        cm.removeSlot(1, 1, 1);
                        cm.addFromDrop(cm.getClient(), b, false);
                        cm.gainItem(Rm, -1);
                        cm.getPlayer().modifyCSPoints(1, -100000);
                        cm.playerMessage(1, '恭喜您 - 提升成功');
                        cm.worldSpouseMessage(32, '[ 星岩系统 ] 玩家 ' + cm.getPlayer().getName() + ' 给予 [ 2 ] 号卡槽镶嵌了 星岩 恭喜 Ta 吧 ');
                        cm.dispose();
                    }
                    if (s == 2) {
                        if (b.getSocket3() > 0) {
                            cm.playerMessage(1, '请先卸下已有 星岩 再进行镶嵌');
                            cm.dispose();
                            return;
                        }
                        b.setSocket3(Rm);
                        cm.removeSlot(1, 1, 1);
                        cm.addFromDrop(cm.getClient(), b, false);
                        cm.gainItem(Rm, -1);
                        cm.getPlayer().modifyCSPoints(1, -100000);
                        cm.playerMessage(1, '恭喜您 - 提升成功');
                        cm.worldSpouseMessage(32, '[ 星岩系统 ] 玩家 ' + cm.getPlayer().getName() + ' 给予 [ 3 ] 号卡槽镶嵌了 星岩 恭喜 Ta 吧 ');
                        cm.dispose();
                    }
                }
            }
        }
    }
}
var status = -1;