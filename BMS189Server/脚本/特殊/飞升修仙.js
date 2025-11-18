var status = 0;
var typed = 0;
var hairprice = 3000000;
var haircolorprice = 3000000;
var mhair = Array(30310, 30330, 30060, 30150, 30410, 30210, 30140, 30120, 30200, 30560, 30510, 30610, 30470, 31380, 30380, 33350, 33340, 32120, 34270, 33320, 33310, 33300, 33290, 33280, 33260, 33250, 33240, 33230, 34200, 33210, 33200, 33150, 34090, 33130, 33220, 33110, 33190, 33170, 33180, 33160, 33100);
var fhair = Array(31150, 31310, 31300, 31160, 31100, 31410, 31030, 31080, 31070, 31610, 31350, 31510, 31740, 31380, 31360, 31370, 32130, 34300, 34290, 34280, 33310, 33300, 33260, 34240, 34230, 34260, 34250, 34220, 34210, 31990, 34140, 34100, 34070, 34190, 34180, 34110, 34160, 34150, 33220);
var itemjuanold = new Array('2040006', '2040303', '2040506', '2040709', '2040710', '2040711', '2040806', '2043003', '2043103', '2043203', '2043303', '2043703', '2043803', '2044003', '2044019', '2044103', '2044203', '2044303', '2044403', '2044503', '2044603', '2044703', '2044815', '2044908', '2040811', '2043411 ', '2045202');
var itemjuan = new Array('2040600', '2340000', '2040006', '2040921', '2040303', '2040506', '2040709', '2040710', '2040711', '2040806', '2043003', '2043103', '2043203', '2043303', '2040804', '2043703', '2043803', '2044003', '2044019', '2044103', '2044203', '2044303', '2044403', '2044503', '2044603', '2044703', '2044815', '2044908', '2040811', '2043000', '2040025', '2040021', '2040101', '2040321', '2040338', '2040421', '2340000', '2040610', '2040626', '2040700', '2040524', '2040517', '2040814', '2040915', '2041013');
var itemtsid = new Array('1099003', '1532014', '1532014', '1532014', '1532014', '1532014', '1402073', '1462076', '1452058', '1302081', '1312037', '1322060', '1332073', '1332074', '1372044', '1382057', '1402046', '1412033', '1422037', '1432047', '1442063', '1452057', '1462050', '1472068', '1482023', '1492023', '1302059', '1312031', '1322052', '1402036', '1412026', '1422028', '1432038', '1442045', '1452044', '1462039', '1472051', '1472052', '1332050', '1302086', '1312038', '1322061', '1332075', '1332076', '1372045', '1382059', '1402047', '1412034', '1422038', '1432049', '1442067', '1452059', '1462051', '1472071', '1482024', '1492025', '1032025', '1032026', '1032027', '1032028', '1032035', '1032040', '1032047', '1002391', '1002419', '1002436', '1002455', '1002773', '1002794', '1522012', '1522056', '1362020');
var itemjb = new Array('1702155', '1702113', '1002888', '1002890', '1050019', '1072278', '1102065', '1702310', '1112100', '1002720', '1012131', '1002846', '1002839', '1002863', '1050152', '1051180', '1042104', '1042105', '1002566', '1052224', '1042142', '1041142', '1061148', '1052200', '1051131', '1112118', '1112228', '1112119', '1112229', '1112120', '1112230');
var itemjbcost = new Array('20', '20', '20', '20', '30', '30', '30', '30', '30', '50', '50', '50', '50', '50', '50', '60', '60', '60', '60', '60', '60', '60', '60', '80', '80', '80', '80', '80', '80', '80', '80');
var hairnew = Array();
var seltype = 0;
var cishu = 0;
var cishu = 0;
function start() {
    var a;
    a = 'Hi!~ #b#h ##k 转生一次加 #e#r50#n#k 修为噢！\r\n\r\n';
    if (!cm.getXiuxian()) {
        a += '转生模式未开放，默认是关闭的,可在后台开启.\r\n';
        cm.playerMessage(1, a);
        cm.dispose();
    }
    if (cm.isRegistedXiuxian()) {
        a += '  已经转生:#b' + cm.getRepairquency() + '#k 次\r\n';
        a += '  当前修为:#b' + cm.getRepairXW() + '#k 点\r\n';
        a += '  当前称号:#b' + cm.getXiuxianname() + '#k(#b' + cm.getPlayeramuont() + '#k)\r\n';
        a += '#L2##b我要转生#l #L100#我要修仙#l\r\n\r\n';
        a += '#L4##e修仙境仙称号说明.#n#l';
    } else {
        a += '#b 您还未加入转生#k\r\n';
        a += '#L1##b我要加入转生修仙#l#L3#修仙介绍#l\r\n';
    }
    cm.askMenu(a);
}
function action(h, m, o) {
    if (h == -1) {
        cm.dispose();
    } else {
        if (h == 0) {
            cm.dispose();
        } else {
            status++;
        }
        if (status == 1) {
            if (o == 1) {
                typed = 1;
                cm.registXiuxian();
                cm.worldMessage('【' + cm.getPlayer().getName() + '】已加入[修仙]祝早日修成正果成为仙人~');
                cm.playerMessage(1, '温馨提示:已加入[修仙]祝早日修成正果成为仙人.');
                cm.dispose();
                return;
            }
            if (o == 2) {
                typed = 1;
                cm.dispose();
                cm.openNpc(1540517, '投胎转生');
                return;
            }
            if (o == 3) {
                cm.sendOk('#e#r让我给你介绍称号阶段吧#b#l\r\n#b100散仙-120人仙-130地仙-140天仙-150真仙-160太乙真仙-170大罗金仙（就是神了）-180罗天上仙（九天玄仙）-190仙君仙帝（类似大罗金仙九天玄仙有可以称为准圣）-200天尊（从此你就是一方天道了)#k\r\n现在修真分为2个阶段下面就给介绍一下#b#l\r\n#e#r如果你是第一次修真#l#b那么你需要转生次数达到100转,并且等级为200级,修真成功,将扣除你当前转生次数和根据你VIP的等级到200转时获得的所有属性点,你将获得[神]称号.当前攻击力会翻一倍.');
                cm.dispose();
                return;
            }
            if (o == 4) {
                selStr2 = '修仙境仙称号说明\r\n';
                selStr2 += '0境仙#b<' + cm.getXiuxianname(0) + '>#k     所需修为:#b' + cm.getRepairpointXT(0) + '#k\r\n';
                selStr2 += '1境仙#b<' + cm.getXiuxianname(1) + '>#k     所需修为:#b' + cm.getRepairpointXT(1) + '#k\r\n';
                selStr2 += '2境仙#b<' + cm.getXiuxianname(2) + '>#k     所需修为:#b' + cm.getRepairpointXT(2) + '#k\r\n';
                selStr2 += '3境仙#b<' + cm.getXiuxianname(3) + '>#k     所需修为:#b' + cm.getRepairpointXT(3) + '#k\r\n';
                selStr2 += '4境仙#b<' + cm.getXiuxianname(4) + '>#k     所需修为:#b' + cm.getRepairpointXT(4) + '#k\r\n';
                selStr2 += '5境仙#b<' + cm.getXiuxianname(5) + '>#k     所需修为:#b' + cm.getRepairpointXT(5) + '#k\r\n';
                selStr2 += '6境仙#b<' + cm.getXiuxianname(6) + '>#k 所需修为:#b' + cm.getRepairpointXT(6) + '#k\r\n';
                selStr2 += '7境仙#b<' + cm.getXiuxianname(7) + '>#k 所需修为:#b' + cm.getRepairpointXT(7) + '#k\r\n';
                selStr2 += '8境仙#b<' + cm.getXiuxianname(8) + '>#k 所需修为:#b' + cm.getRepairpointXT(8) + '#k\r\n';
                selStr2 += '9境仙#b<' + cm.getXiuxianname(9) + '>#k 所需修为:#b' + cm.getRepairpointXT(9) + '#k\r\n';
                selStr2 += '10境仙#b<' + cm.getXiuxianname(10) + '>#k    所需修为:#b' + cm.getRepairpointXT(10) + '#k\r\n';
                cm.sendOk(selStr2);
                cm.dispose();
                return;
            }
            if (o == 100) {
                if (cm.getPlayer().getGuildId() > 0) {
                    if (cm.getRepairXW < 1000) {
                        cm.dispose();
                        cm.sendOk('#b修为点不够,修仙第一等级需要修为1000点');
                    } else {
                        if (cm.getRepairquency() * 100 < cm.getPlayeramuont()) {
                            cm.dispose();
                            cm.sendOk('#b转生次数不够.' + cm.getRepairquency() + '   ' + cm.getPlayeramuont());
                        } else {
                            if (cm.getRepairXW() < cm.getPlayeramuont() * 1000) {
                                AAA = cm.getPlayeramuont() * 1000 - cm.getRepairXW();
                                cm.askMenu('  #e#r-修仙失败：#n#k\r\n\r\n  当前称号:' + cm.getXiuxianname() + '(' + cm.getPlayeramuont() + ')\r\n  拥有修为：' + cm.getRepairXW() + ' 点\r\n  晋升下一阶段还需要 #e#b' + AAA + '#n#k 修为。');
                                cm.dispose();
                            } else {
                                cm.dispose();
                                cm.openNpc(9300010, '修仙剧情');
                            }
                        }
                    }
                } else {
                    cm.dispose();
                    cm.sendOk('#b请先去创建家族再来找我!');
                }
                return;
            }
        }
        if (o == 355) {
            if (cm.haveItem(4000001, 128) && cm.getBossLog('转生') >= 20) {
                if (cm.getBossLog('转生清零2') < 1) {
                    cm.setBossLog('转生清零2');
                    cm.resetBossLog('转生');
                    cm.sendOk('#b恭喜,你又可以多转20次了!');
                    cm.gainItem(4000001, -128);
                    cm.dispose();
                } else {
                    cm.sendOk('#b24小时内今天已经使用过此功能了,现在无法使用此功能.');
                    cm.dispose();
                }
            } else {
                cm.sendOk('你没有128个#v4000001##z4000001#或者你的转生次数还没用完！\r\n#r一天一次提升机会#b#l\r\n#b提示：会员和这个随便哪个先提升都可以');
                cm.dispose();
            }
            if (o == 3) {
                typed = 2;
                var b = '#r注意:1张必成卷轴=100个修为点.#b';
                for (var f = 0; f < itemjuanold.length; f++) {
                    if (f % 2 == 0) {
                        b += '\r\n#b#L' + f + '##z' + itemjuanold[f] + '##l';
                    } else {
                        b += '#b#L' + f + '##z' + itemjuanold[f] + '##l';
                    }
                }
                cm.sendSimple(b);
            }
            if (o == 4) {
                typed = 3;
                cm.sendSimpleS('挑战极限.夺终极装备.以下物品属性均为+100.\r\n#b#L1#旭日腰带[需要400点修为点抽奖]#l\r\n#L2#旭日耳环[需要600点修为点抽奖]#b#l\r\n#L3#旭日吊坠[需要800点修为点抽奖]#l\r\n#L4#旭日戒指[需要1000点修为点抽奖]#l\r\n#L5#抽取神奇魔方抽[需要188点修为点抽奖]#l\r\n\r\n#r#e注意:以上均为20%的机率获得.至尊会员为40%机率获得.', 2);
            }
            if (o == 5) {
                cm.openNpc(9300010);
            }
            if (o == 6) {
                cm.sendOk('Sorry.暂时未完善.目前获得修为点的方式只有:\r\n#b1.站在市场泡修为点.\r\n2.打工或者正义之章\r\n3.做每小时的击退海盗');
                cm.dispose();
                return;
            }
            if (o == 7) {
                typed = 4;
                var e = Math.floor(cm.getPlayer().getgodpoint() / 10);
                cm.sendNext('#e#r10能量点=1点修为点~#n#k您当前的能量点是:#g' + cm.getPlayer().getgodpoint() + '#k个.\r\n换取后,你能得到:#b' + e + '点修为点#k.你是否要现在换取?');
            }
            if (o == 8) {
                typed = 8;
                cm.sendNext('为了防止外挂的存在，本服特别限制了每个人的最高攻击力上限，如果需要提升到更高的攻击力上限，可以在我这里使用修为点提升哦，我先介绍一下大家的最高攻击力上限默认值:#d\r\n普通玩家[VIP0]:最高150万;\r\n白银会员[VIP1]:最高190万；黄金会员[VIP2]:最高250万\r\n白金会员[VIP3]:最高300万；至尊会员[VIP4]:最高500万#b\r\n有的玩家可能没有理解到什么意思？这里的最高攻击是指无论你装备有多好，按照你的会员等级，初始最高攻击力默认值均为上面写出的为准.\r\n#r您可能认为这么低的攻击上限如何突破呢?马上点击下一步吧.');
            }
            if (o == 9) {
                typed = 10;
                cm.sendNext('请将要修炼的装备#b放在装备栏第一格#k,您将花费#r100点#k修为点.给你的装备#d随机#k增加属性，（属性值随机），至于属性好不好就在于你的人品了.#e100%成功提升一项随机属性#n，准备好了的话点击下一步开始修炼吧.');
            }
            if (o == 10) {
                typed = 11;
                cm.sendGetText('请输入你要购兑换星岩箱子的数量1个#z2430692#=市场修为50点');
            }
            if (o == 11) {
                var p = '';
                typed = 12;
                p += '你是不是经常将修为点抽到的全属性装备直接丢地上?还是直接往商店里面一甩?好吧,如果你不介意的话交给我来处理,当然了,卖给我会给你一个好价钱的.\r\n';
                p += '#b#L1#使用垃圾装备换木妖邮票10张(价值1E)#l\r\n#L3#使用垃圾装备换价值4000茜茜币道具(五色福袋3级#v4031944#)#l';
                cm.sendSimple(p);
            }
        } else {
            if (status == 2) {
                if (typed == 10) {
                    var q = Packages.server.MapleItemInformationProvider.getInstance();
                    var r = cm.getInventory(1).getItem(1);
                    if (r != null) {
                        if (q.isCash(r.getItemId()) == true) {
                            cm.sendOk('商城点卷物品暂不支持.');
                            cm.dispose();
                        } else {
                            if (cm.getPlayer().getXw() >= 100) {
                                cm.getPlayer().setXw(cm.getPlayer().getXw() - 100);
                                var l = Math.floor(Math.random() * 12) + 1;
                                var k = Math.floor(Math.random() * 5) + 1;
                                var d = cm.getPlayer().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).copy();
                                if (l <= 2) {
                                    d.setMdef(d.getMdef() * 1 + k);
                                    cm.sendOk('恭喜，修炼法宝成功.\r\n你的装备栏第一格物品：#v' + d.getItemId() + '#成功将#r魔防#k提升了#r' + k + '点#k属性');
                                }
                                if (l >= 3 && l <= 5) {
                                    d.setWdef(d.getWdef() * 1 + k);
                                    cm.sendOk('恭喜，修炼法宝成功.\r\n你的装备栏第一格物品：#v' + d.getItemId() + '#成功将#r物防#k提升了#r' + k + '点#k属性');
                                }
                                if (l == 6) {
                                    d.setStr(d.getStr() * 1 + k);
                                    cm.sendOk('恭喜，修炼法宝成功.\r\n你的装备栏第一格物品：#v' + d.getItemId() + '#成功将#r力量#k提升了#r' + k + '点#k属性');
                                }
                                if (l == 7) {
                                    d.setDex(d.getDex() * 1 + k);
                                    cm.sendOk('恭喜，修炼法宝成功.\r\n你的装备栏第一格物品：#v' + d.getItemId() + '#成功将#r敏捷#k提升了#r' + k + '点#k属性');
                                }
                                if (l == 8) {
                                    d.setInt(d.getInt() * 1 + k);
                                    cm.sendOk('恭喜，修炼法宝成功.\r\n你的装备栏第一格物品：#v' + d.getItemId() + '#成功将#r智力#k提升了#r' + k + '点#k属性');
                                }
                                if (l == 9) {
                                    d.setLuk(d.getLuk() * 1 + k);
                                    cm.sendOk('恭喜，修炼法宝成功.\r\n你的装备栏第一格物品：#v' + d.getItemId() + '#成功将#r运气#k提升了#r' + k + '点#k属性');
                                }
                                if (l == 10) {
                                    d.setWatk(d.getWatk() * 1 + k);
                                    cm.sendOk('恭喜，修炼法宝成功.\r\n你的装备栏第一格物品：#v' + d.getItemId() + '#成功将#r攻击力#k提升了#r' + k + '点#k属性');
                                }
                                if (l >= 11) {
                                    d.setMatk(d.getMatk() * 1 + k);
                                    cm.sendOk('恭喜，修炼法宝成功.\r\n你的装备栏第一格物品：#v' + d.getItemId() + '#成功将#r魔法攻击#k提升了#r' + k + '点#k属性');
                                }
                                Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, false);
                                Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(), d, false);
                                cm.worldMessage('【' + cm.getPlayer().getName() + '】成功使用100修为点在[NPC工作人员咪咪]处将法宝成功修炼提升.');
                            } else {
                                cm.sendOk('没有足够的修为点.');
                            }
                        }
                    } else {
                        cm.sendOk('装备栏第一格没有物品，无法修炼.');
                    }
                    cm.dispose();
                    return;
                }
                if (typed == 8) {
                    typed = 9;
                    cm.sendSimpleS('注意：为防止数据库出错，每天的24点00分，所有玩家攻击力上限将会回到默认状态.同时每个玩家攻击上限最高为21亿!#b\r\n#L0#查看我当前的攻击上限值#l\r\n#L1#提升100万攻击上限（需要100点修为点）#l\r\n#L2#提升500万攻击上限（需要200点修为点）#l\r\n#L3#提升1000万攻击上限（需要300点修为点）#l\r\n#L4#提升1亿攻击上限（需要500点修为点）#b#l\r\n#L5##r提升1亿攻击上限（需要2万茜茜币）#l', 2);
                }
                if (typed == 12) {
                    seltype = o;
                    typed = 13;
                    if (o == 1) {
                        cm.sendNext('装备栏前四格放你想卖给我的垃圾装备(装备类型随便,但必须满足#r攻击在140以上#k),满足条件后,你有#r50%#k的机率获得10张木要邮票(价值1E)!#r点击下一步开始回收..');
                    }
                    if (o == 2) {
                        cm.sendNext('五色福袋2级#v4031946#这个物品可以在#b[NPC枫叶墓捐箱]#k处使用,使用#b[NPC枫叶墓捐箱]#k装备提升全属性功能可以立即省2万茜茜币(聚划算).\r\n考虑好了吗?装备栏前四格放你想回收的垃圾装备(装备类型随便,但必须满足#r攻击在140以上#k),满足条件后,50%的成功机率,如果失败,只回收垃圾装备.#r点击下一步开始回收..');
                    }
                    if (o == 3) {
                        cm.sendNext('五色福袋3级#v4031944#这个物品可以在#b[史蒂夫乔布桑]#k处使用,使用#b[NPC史蒂夫乔布桑]#k购买任意全属性物品可以立即省4000茜茜币(聚划算).\r\n考虑好了吗?装备栏前四格放你想回收的垃圾装备(装备类型随便,但必须满足#r攻击在140以上#k),满足条件后,50%的成功机率,如果失败,只回收垃圾装备.#r点击下一步开始回收..');
                    }
                }
                if (typed == 4) {
                    var e = Math.floor(cm.getPlayer().getgodpoint() / 10);
                    if (e >= 0) {
                        cm.getPlayer().setgodpoint(-cm.getPlayer().getgodpoint());
                        cm.getPlayer().setXw(cm.getPlayer().getXw() + e);
                        cm.sendOk('恭喜您,增加了#b' + e + '点修为点.');
                    }
                    cm.dispose();
                    return;
                }
                if (typed == 3) {
                    var n = Math.floor(Math.random() * 15) + 1;
                    if (o == 1) {
                        if (cm.getPlayer().getXw() >= 400) {
                            cm.getPlayer().setXw(cm.getPlayer().getXw() - 400);
                            if (n >= 2 && n <= 14) {
                                cm.sendOk('您运气真差.什么也没有得到..');
                            } else {
                                var q = Packages.server.MapleItemInformationProvider.getInstance();
                                var m = Packages.constants.GameConstants.getInventoryType(1132085);
                                var g = q.randomizeStats(q.getEquipById(1132085)).copy();
                                g.setStr(100);
                                g.setDex(100);
                                g.setInt(100);
                                g.setLuk(100);
                                g.setHp(100);
                                g.setMp(100);
                                g.setMatk(50);
                                g.setWatk(50);
                                cm.getPlayer().getInventory(m).addItem(g);
                                cm.getC().getSession().write(Packages.tools.MaplePacketCreator.addInventorySlot(m, g));
                                cm.sendOk('恭喜您，抽得了[旭日腰带+100].');
                                cm.worldMessage('玩家[' + cm.getPlayer().getName() + ']运气真是好暴了~抽得了[旭日腰带+100]~');
                            }
                        } else {
                            cm.sendOk('对不起，您没有400修为点,失败！');
                        }
                    }
                    if (o == 2) {
                        if (cm.getPlayer().getXw() >= 600) {
                            cm.getPlayer().setXw(cm.getPlayer().getXw() - 600);
                            if (n >= 2 && n <= 14) {
                                cm.sendOk('您运气真差.什么也没有得到..');
                            } else {
                                var q = Packages.server.MapleItemInformationProvider.getInstance();
                                var m = Packages.constants.GameConstants.getInventoryType(1032093);
                                var g = q.randomizeStats(q.getEquipById(1032093)).copy();
                                g.setStr(100);
                                g.setDex(100);
                                g.setInt(100);
                                g.setLuk(100);
                                g.setHp(100);
                                g.setMp(100);
                                g.setMatk(50);
                                g.setWatk(50);
                                cm.getPlayer().getInventory(m).addItem(g);
                                cm.getC().getSession().write(Packages.tools.MaplePacketCreator.addInventorySlot(m, g));
                                cm.sendOk('恭喜您，抽得了[旭日耳环+100]~');
                                cm.worldMessage('玩家[' + cm.getPlayer().getName() + ']运气真是好暴了~抽得了[旭日耳环+100]~');
                            }
                        } else {
                            cm.sendOk('对不起，您没有600修为点,购买失败！');
                        }
                    }
                    if (o == 3) {
                        if (cm.getPlayer().getXw() >= 800) {
                            cm.getPlayer().setXw(cm.getPlayer().getXw() - 800);
                            if (n >= 2 && n <= 14) {
                                cm.sendOk('您运气真差.什么也没有得到..');
                            } else {
                                var q = Packages.server.MapleItemInformationProvider.getInstance();
                                var m = Packages.constants.GameConstants.getInventoryType(1122104);
                                var g = q.randomizeStats(q.getEquipById(1122104)).copy();
                                g.setStr(100);
                                g.setDex(100);
                                g.setInt(100);
                                g.setLuk(100);
                                g.setHp(100);
                                g.setMp(100);
                                g.setMatk(50);
                                g.setWatk(50);
                                cm.getPlayer().getInventory(m).addItem(g);
                                cm.getC().getSession().write(Packages.tools.MaplePacketCreator.addInventorySlot(m, g));
                                cm.sendOk('恭喜您，抽得了[旭日吊坠+100]~');
                                cm.worldMessage('玩家[' + cm.getPlayer().getName() + ']运气真是好暴了~抽得了[旭日吊坠+100]~');
                            }
                        } else {
                            cm.sendOk('对不起，您没有800修为点,购买失败！');
                        }
                    }
                    if (o == 4) {
                        if (cm.getPlayer().getXw() >= 1000) {
                            cm.getPlayer().setXw(cm.getPlayer().getXw() - 1000);
                            if (n >= 3 && n <= 14) {
                                cm.sendOk('您运气真差.什么也没有得到..');
                            } else {
                                var q = Packages.server.MapleItemInformationProvider.getInstance();
                                var m = Packages.constants.GameConstants.getInventoryType(1112584);
                                var g = q.randomizeStats(q.getEquipById(1112584)).copy();
                                g.setStr(100);
                                g.setDex(100);
                                g.setInt(100);
                                g.setLuk(100);
                                g.setHp(100);
                                g.setMp(100);
                                g.setMatk(50);
                                g.setWatk(50);
                                cm.getPlayer().getInventory(m).addItem(g);
                                cm.getC().getSession().write(Packages.tools.MaplePacketCreator.addInventorySlot(m, g));
                                cm.sendOk('恭喜您，抽得了[旭日戒指+100]~');
                                cm.worldMessage('玩家[' + cm.getPlayer().getName() + ']运气真是好暴了~抽得了[旭日戒指+100]~');
                            }
                        } else {
                            cm.sendOk('对不起，您没有1000修为点,购买失败！');
                        }
                    }
                    if (o == 5) {
                        if (cm.getPlayer().getXw() >= 188) {
                            cm.getPlayer().setXw(cm.getPlayer().getXw() - 188);
                            if (n >= 6 && n <= 17) {
                                cm.sendOk('您运气真差.什么也没有得到..');
                            } else {
                                cm.gainItem(5062000, 1);
                                cm.sendOk('恭喜，恭喜，人品好暴了，抽中了神奇魔方~.');
                                cm.worldMessage('【' + cm.getPlayer().getName() + '】在[市场黑猫大哥那里]处使用修炼点抽中了神奇魔方~');
                                cm.sendOk('您运气真差.什么也没有得到..');
                            }
                        } else {
                            cm.sendOk('对不起，您没有188修为点,购买失败！');
                        }
                    }
                    cm.dispose();
                    return;
                }
                if (typed == 11) {
                    typed = 12;
                    fee = cm.getText();
                    fee1 = 50 * fee;
                    cm.sendYesNo('你确定要兑换 #r' + fee + '#k 星岩箱子吗?\r\n这需要花费你#r' + fee1 + '市场修为');
                }
                if (typed == 2) {
                    if (cm.getPlayer().getXw() >= 100) {
                        cm.gainItem(itemjuanold[o], 1);
                        cm.getPlayer().setXw(cm.getPlayer().getXw() - 100);
                        cm.sendOk('恭喜您，购买成功.欢迎下次在来.');
                    } else {
                        cm.sendOk('对不起，您没有100修为点,购买失败！');
                    }
                    cm.dispose();
                    return;
                }
                if (typed == 1) {
                    var q = Packages.server.MapleItemInformationProvider.getInstance();
                    if (o == 1) {
                        var l = Math.floor(Math.random() * itemjuan.length) + 1;
                        var j = Math.floor(Math.random() * 2) + 1;
                        var c = 0;
                        for (var f = 0; f < itemjuan.length; f++) {
                            if (f + 1 == l) {
                                c = itemjuan[f];
                            }
                        }
                        if (cm.getPlayer().getXw() >= 50) {
                            cm.getPlayer().setXw(cm.getPlayer().getXw() - 50);
                            cm.gainItem(c, j);
                            cm.worldMessage('玩家[' + cm.getPlayer().getName() + ']在NPC[工作人员咪咪]处抽到了' + j + '个' + cm.getItemName(c) + '~');
                            cm.sendOk('恭喜您,获得 #b' + j + '#k 个 #r#z' + c + '#.');
                        } else {
                            cm.sendOk('你没有足够的修为点.');
                        }
                        cm.dispose();
                        return;
                    }
                    var j = 0;
                    if (o == 2) {
                        j = Math.floor(Math.random() * 30) + 100;
                        if (cm.getPlayer().getXw() >= 100) {
                            cm.getPlayer().setXw(cm.getPlayer().getXw() - 100);
                        } else {
                            cm.sendOk('你没有足够的修为点.');
                            cm.dispose();
                            return;
                        }
                    }
                    if (o == 3) {
                        j = Math.floor(Math.random() * 50) + 100;
                        if (cm.getPlayer().getXw() >= 200) {
                            cm.getPlayer().setXw(cm.getPlayer().getXw() - 200);
                        } else {
                            cm.sendOk('你没有足够的修为点.');
                            cm.dispose();
                            return;
                        }
                    }
                    if (o == 4) {
                        j = Math.floor(Math.random() * 100) + 100;
                        if (cm.getPlayer().getXw() >= 400) {
                            cm.getPlayer().setXw(cm.getPlayer().getXw() - 400);
                        } else {
                            cm.sendOk('你没有足够的修为点.');
                            cm.dispose();
                            return;
                        }
                    }
                    var l = Math.floor(Math.random() * itemtsid.length) + 1;
                    var c = 0;
                    for (var f = 0; f < itemtsid.length; f++) {
                        if (f + 1 == l) {
                            c = itemtsid[f];
                        }
                    }
                    if (c >= 1302000 && c <= 1702305) {
                        var q = Packages.server.MapleItemInformationProvider.getInstance();
                        var m = Packages.constants.GameConstants.getInventoryType(c);
                        var g = q.randomizeStats(q.getEquipById(c)).copy();
                        g.setStr(j);
                        g.setDex(j);
                        g.setInt(j);
                        g.setLuk(j);
                        cm.getPlayer().getInventory(m).addItem(g);
                        cm.getC().getSession().write(Packages.tools.MaplePacketCreator.addInventorySlot(m, g));
                    } else {
                        var q = Packages.server.MapleItemInformationProvider.getInstance();
                        var m = Packages.constants.GameConstants.getInventoryType(c);
                        var g = q.randomizeStats(q.getEquipById(c)).copy();
                        g.setStr(j);
                        g.setDex(j);
                        g.setInt(j);
                        g.setLuk(j);
                        cm.getPlayer().getInventory(m).addItem(g);
                        cm.getC().getSession().write(Packages.tools.MaplePacketCreator.addInventorySlot(m, g));
                    }
                    cm.worldMessage('玩家[' + cm.getPlayer().getName() + ']在NPC[工作人员咪咪]处抽到了全属性+' + j + '的' + cm.getItemName(c) + '~');
                    cm.sendOk('恭喜您,获得 #b全属性+' + j + '#k 的 #r#z' + c + '#.');
                    cm.dispose();
                    return;
                }
            } else {
                if (status == 3) {
                    if (typed == 13) {
                        for (var f = 1; f <= 5; f++) {
                            if (cm.getInventory(f) < 1) {
                                cm.sendOk('您至少应该让所有包裹都空出一格');
                                cm.dispose();
                                return;
                            }
                        }
                        a();
                    }
                    if (typed == 12) {
                        meso1 = cm.getPlayer().getMeso();
                        if (fee <= 0 || fee > 100) {
                            cm.sendOk('一次最多兑换100个');
                            cm.dispose();
                        } else {
                            if (cm.getPlayer().getXw() < fee1 && cm.getSpace(2) > 1) {
                                cm.sendOk('抱歉，你没足够的市场修为\r\n或者你的背包没空格');
                                cm.dispose();
                            } else {
                                cm.gainItem(2430692, +fee);
                                cm.getPlayer().setXw(cm.getPlayer().getXw() - fee1);
                                cm.sendOk('兑换成功.');
                                cm.dispose();
                            }
                        }
                        if (typed == 9) {
                            if (o == 0) {
                                cm.sendNext('您目前的攻击最高上限值为:#r' + cm.getPlayer().getpgmax() + '\r\n#b如果您想提升最高上限值，请注意不要超过21亿.');
                            }
                            if (o == 1) {
                                if (cm.getPlayer().getXw() >= 100) {
                                    cm.getPlayer().setpgmax(1000000);
                                    cm.getPlayer().setXw(cm.getPlayer().getXw() - 100);
                                    cm.sendOk('恭喜，成功将攻击最高上限值提升100万，你目前的最高攻击上限值为：#r' + cm.getPlayer().getpgmax());
                                } else {
                                    cm.sendOk('你的修为点不足，继续努力吧。');
                                }
                            }
                            if (o == 2) {
                                if (cm.getPlayer().getXw() >= 200) {
                                    cm.getPlayer().setpgmax(5000000);
                                    cm.getPlayer().setXw(cm.getPlayer().getXw() - 200);
                                    cm.sendOk('恭喜，成功将攻击最高上限值提升500万，你目前的最高攻击上限值为：#r' + cm.getPlayer().getpgmax());
                                } else {
                                    cm.sendOk('你的修为点不足，继续努力吧。');
                                }
                            }
                            if (o == 3) {
                                if (cm.getPlayer().getXw() >= 300) {
                                    cm.getPlayer().setpgmax(10000000);
                                    cm.getPlayer().setXw(cm.getPlayer().getXw() - 300);
                                    cm.sendOk('恭喜，成功将攻击最高上限值提升1000万，你目前的最高攻击上限值为：#r' + cm.getPlayer().getpgmax());
                                } else {
                                    cm.sendOk('你的修为点不足，继续努力吧。');
                                }
                            }
                            if (o == 4) {
                                if (cm.getPlayer().getXw() >= 500) {
                                    cm.getPlayer().setpgmax(100000000);
                                    cm.getPlayer().setXw(cm.getPlayer().getXw() - 500);
                                    cm.sendOk('恭喜，成功将攻击最高上限值提升1亿，你目前的最高攻击上限值为：#r' + cm.getPlayer().getpgmax());
                                } else {
                                    cm.sendOk('你的修为点不足，继续努力吧。');
                                }
                            }
                            if (o == 5) {
                                if (cm.getzb() >= 20000) {
                                    cm.getPlayer().setpgmax(100000000);
                                    cm.setzb(-20000);
                                    cm.sendOk('恭喜，成功将攻击最高上限值提升1亿，你目前的最高攻击上限值为：#r' + cm.getPlayer().getpgmax());
                                } else {
                                    cm.sendOk('你的茜茜币不足，继续努力吧。');
                                }
                            }
                            cm.dispose();
                            return;
                        }
                    }
                }
            }
        }
    }
    function a() {
        var t = cm.getInventory(1).getItem(1);
        var s = Packages.server.MapleItemInformationProvider.getInstance();
        if (t == null) {
            cm.sendOk('装备栏第1格没有装备.请检查.');
            cm.dispose();
            return;
        }
        if (s.isCash(t.getItemId()) == true) {
            cm.sendOk('商城物品暂不支持.');
            cm.dispose();
            return;
        }
        var i = cm.getPlayer().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).copy();
        if (i.getWatk() < 140) {
            cm.sendOk('装备栏第1格物品攻击小于140，不满足条件..');
            cm.dispose();
            return;
        }
        t = cm.getInventory(1).getItem(2);
        if (t == null) {
            cm.sendOk('装备栏第2格没有装备.请检查.');
            cm.dispose();
            return;
        }
        if (s.isCash(t.getItemId()) == true) {
            cm.sendOk('商城物品暂不支持.');
            cm.dispose();
            return;
        }
        var i = cm.getPlayer().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(2).copy();
        if (i.getWatk() < 140) {
            cm.sendOk('装备栏第2格物品攻击小于140，不满足条件..');
            cm.dispose();
            return;
        }
        t = cm.getInventory(1).getItem(3);
        if (t == null) {
            cm.sendOk('装备栏第3格没有装备.请检查.');
            cm.dispose();
            return;
        }
        if (s.isCash(t.getItemId()) == true) {
            cm.sendOk('商城物品暂不支持.');
            cm.dispose();
            return;
        }
        var i = cm.getPlayer().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(3).copy();
        if (i.getWatk() < 140) {
            cm.sendOk('装备栏第3格物品攻击小于140，不满足条件..');
            cm.dispose();
            return;
        }
        t = cm.getInventory(1).getItem(4);
        if (t == null) {
            cm.sendOk('装备栏第4格没有装备.请检查.');
            cm.dispose();
            return;
        }
        if (s.isCash(t.getItemId()) == true) {
            cm.sendOk('商城物品暂不支持.');
            cm.dispose();
            return;
        }
        var i = cm.getPlayer().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(4).copy();
        if (i.getWatk() < 140) {
            cm.sendOk('装备栏第4格物品攻击小于140，不满足条件..');
            cm.dispose();
            return;
        }
        Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, false);
        Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 2, 1, false);
        Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 3, 1, false);
        Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 4, 1, false);
        var u = Math.floor(Math.random() * 20) + 1;
        if (seltype == 1) {
            if (u < 5) {
                cm.gainItem(4002002, 10);
                cm.sendOk('恭喜，恭喜，人品好暴了，换得蓝蜗牛邮票十张~.');
                cm.worldMessage('【' + cm.getPlayer().getName() + '】在[市场NPC工作人员]处使用垃圾装备换得了蓝蜗牛邮票~');
            } else {
                cm.sendOk('真遗憾，没有获得邮票哟~.');
            }
            cm.dispose();
            return;
        }
        if (seltype == 2) {
            if (u < 10) {
                cm.gainItem(4031946, 1);
                cm.sendOk('恭喜，恭喜，人品好暴了，换得五色福袋2级#v4031946#一个~.');
                cm.worldMessage('【' + cm.getPlayer().getName() + '】在[市场NPC工作人员]处使用垃圾装备换得了五色福袋~');
            } else {
                cm.sendOk('真遗憾，没有获得五色福袋2级#v4031946#哟~.');
            }
            cm.dispose();
            return;
        }
        if (seltype == 3) {
            if (u < 10) {
                cm.gainItem(4031944, 1);
                cm.sendOk('恭喜，恭喜，人品好暴了，换得五色福袋3级#v4031944#一个~.');
                cm.worldMessage('【' + cm.getPlayer().getName() + '】在[市场NPC工作人员]处使用垃圾装备换得了五色福袋~');
            } else {
                cm.sendOk('真遗憾，没有获得五色福袋3级#v4031944#哟~.');
            }
            cm.dispose();
            return;
        }
        cm.dispose();
    }
}