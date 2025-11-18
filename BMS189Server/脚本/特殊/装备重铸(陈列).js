var status = 0;
var nature;
var DJnature;
var ItemId;
var nature1 = Array();
var nature2 = Array();
function start() {
    status = -1;
    action(1, 0, 0);
}
function action(c, f, h) {
    if (c == 1) {
        status++;
    } else {
        if (status >= 1) {
            status = 1;
            cm.dispose();
            return;
        } else {
            cm.dispose();
            return;
        }
        status--;
    }
    if (cm.getMapId() == 180000001) {
        cm.sendOk('很遗憾，您因为违反用户守则被禁止游戏活动，如有异议请联系管理员.');
        cm.dispose();
    } else {
        if (status == 0) {
            var a = '#e        欢迎来到欢乐炸炸炸 \r\n';
            a += '      #b#k\r\n\r\n';
            a += '      #r#k\r\n\r\n\r\n';
            a += '#r#L0#我要开始欢乐炸炸炸#l\r\n';
            a += '#r#L1#我要看说明#l\r\n';
            cm.sendNext(a);
        } else {
            if (status == 1) {
                if (h == 1) {
                    var d = '#e        欢迎来到点装属性提升【说明中心 】\r\n';
                    d += '1.这里提升的点装只能是自己背包里现有的【点装道具】\r\n';
                    d += '3.这里只提升6个属性：力量、敏捷、智力、运气、攻击、魔法攻击\r\n';
                    d += '4.3E金币提升的范围是0~10\r\n';
                    d += '5.5E金币提升的范围是0~20\r\n';
                    d += '6.10E金币提升的范围是0~30\r\n';
                    d += '7.每次提升还会额外消耗3000个结晶\r\n';
                    d += '8.每次提升会回收背包里现有的，然后生成新的。\r\n';
                    d += '9.一旦属性洗出来后,钱就扣掉!!!。\r\n';
                    cm.sendOk(d);
                    cm.dispose();
                    return;
                }
                var e = '';
                for (var b = 0; b < 96; b++) {
                    if (cm.getInventory(1).getItem(b) != null && cm.isCash(cm.getInventory(1).getItem(b).getItemId())) {
                        e += '#L' + cm.getInventory(1).getItem(b).getItemId() + '# #z' + cm.getInventory(1).getItem(b).getItemId() + '# #i' + cm.getInventory(1).getItem(b).getItemId() + ':##l\r\n';
                    }
                }
                cm.sendNext('#b请选择需要加属性的道具后 点击下一步将会开始获取随机属性:\r\n#b' + e);
            } else {
                if (status == 2) {
                    ItemId = h;
                    getStats();
                    var l = '				#v' + ItemId + '# #z' + ItemId + '#          \r\n';
                    for (var b = 0; b < nature1.length; b++) {
                        l += ' #d' + nature1[b][0] + '\r\n';
                    }
                    l += '#r#L0#我要用3E砸初级阶段#l\r\n';
                    l += '#L1#我要用5E砸中级阶段#l\r\n';
                    l += '#L2#我要用10E砸高级阶段#l\r\n';
                    l += '#L3#大爷我不砸了！#l  \r\n';
                    l += '		';
                    cm.sendNext('#b您获得的属性如下，是否继续？下一步将开始洗属性。并且会扣金币和最高级结晶:\r\n\r\n#b' + l);
                } else {
                    if (status == 3) {
                        var k;
                        var j;
                        if (h != 3) {
                            if (!cm.haveItem(4021016, 1000)) {
                                cm.sendOk('检查一下背包是否有1000个最高级结晶');
                                cm.dispose();
                                return;
                            }
                            if (h == 0) {
                                j = 300000000;
                                k = 10;
                            } else {
                                if (h == 1) {
                                    j = 500000000;
                                    k = 20;
                                } else {
                                    if (h == 2) {
                                        j = 1000000000;
                                        k = 40;
                                    } else {
                                        cm.sendOk('出错了，请联系管理员！');
                                        cm.dispose();
                                        return;
                                    }
                                }
                            }
                            if (cm.getMeso() < j) {
                                cm.sendOk('检查一下背包是否有' + j + '金币');
                                cm.dispose();
                                return;
                            }
                            var l = '';
                            for (var b = 0; b < nature1.length; b++) {
                                var g = Math.floor(Math.random() * k);
                                nature1[b][1] = g;
                                l += '\r\n#r' + nature1[b][0] + ' : #b' + nature1[b][1] + '#k';
                            }
                            l += '\r\n#L0#是#l\r\n';
                            cm.sendNext('#b您获得的属性值如下，请点击下一步。:\r\n#b' + l);
                            cm.gainMeso(-j);
                            cm.gainItem(4021016, -1000);
                        } else {
                            cm.dispose();
                        }
                    } else {
                        if (status == 4) {
                            if (h == 0) {
                                cm.gainItem(ItemId, -1);
                                setStats();
                                cm.worldSpouseMessage(15, '[面板提升中心]:玩家 ' + cm.getChar().getName() + ' 用金币对点装进行了强化，大家快瞧瞧！');
                                cm.dispose();
                            } else {
                                cm.sendOk('打造出错请联系管理员');
                                cm.dispose();
                            }
                        }
                    }
                }
            }
        }
    }
}
function getStats() {
    nature = Array(Array('力量', 0), Array('智力', 0), Array('运气', 0), Array('敏捷', 0), Array('物理攻击', 0), Array('魔法攻击', 0));
    for (var a = 0; a < nature.length; a++) {
        nature1.push(nature[a]);
    }
    return;
}
function setStats() {
    var a = Array('来！互相伤害', '我是GAY', '我的天呐！', '高考算个屌', '太阳之子', '太阳的后裔', '宇宙的后裔', '在座都是大爷', '充钱才能更强', '你们都是垃圾', '我最屌', '叫我女王大人', '没见过帅哥？');
    var c = cm.getNewEquip(ItemId);
    for (var b = 0; b < nature1.length; b++) {
        if (nature1[b][0] == '力量') {
            c.setStr(nature1[b][1]);
        } else {
            if (nature1[b][0] == '智力') {
                c.setInt(nature1[b][1]);
            } else {
                if (nature1[b][0] == '运气') {
                    c.setLuk(nature1[b][1]);
                } else {
                    if (nature1[b][0] == '敏捷') {
                        c.setDex(nature1[b][1]);
                    } else {
                        if (nature1[b][0] == '物理攻击') {
                            c.setWatk(nature1[b][1]);
                        } else {
                            if (nature1[b][0] == '魔法攻击') {
                                c.setMatk(nature1[b][1]);
                            }
                        }
                    }
                }
            }
        }
    }
    cm.playerMessage(5, '恭喜打造成功！');
    c.setOwner(a[Math.floor(Math.random() * a.length)]);
    cm.addFromDrop(c);
    cm.sendOk('恭喜打造成功');
    return;
}