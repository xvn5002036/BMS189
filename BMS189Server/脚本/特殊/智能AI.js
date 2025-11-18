var status = -1;
var selectionLog = [];
var text = '';
var select = 0;
var itemPosition = 0;
function start() {
    action(1, 0, 0);
}
function action(h, n, q) {
    var o = cm.getConstantScriptContent('菜单_NPC立绘');
    var k = Math.floor(Math.random() * o.length);
    var c = o[k][0];
    var m = randomNum(0, o[k][1]);
    var r = cm.getPlayer().获取AI智能机器人cid();
    var e = cm.getOnlineCharacterById(r);
    if (status == 0 && h == 0) {
        cm.dispose();
        return;
    }
    h == 1 ? status++ : status--;
    selectionLog[status] = q;
    var g = -1;
    if (status <= g++) {
        cm.dispose();
    } else {
        if (status === g++) {
            text = ' #face' + m + '##fs18##r#fn微软雅黑#欢迎使用 ' + cm.getServerName() + ' 智能AI系统！#fs15#\r\n';
            if (cm.getPlayer().isAI智能机器人()) {
                text += ' 智能玩法说明:\r\n#k#b';
                text += ' 1.可带走跟随主人,可放置任意地点\r\n';
                text += ' 2.可加入主人的队伍,刷怪从此不再寂寞\r\n';
                text += ' 3.可更换时装,发型,脸型,不再是宅男\r\n';
                text += ' 4.可和主人聊天不再无聊\r\n';
                text += ' #L0##e当前还没有智能AI,购买智能AI(500W点卷)#l\r\n#k#b';
            } else {
                if (e != null) {
                    text += '智能AI已在线  ' + (e.getAPI().getNumberFromQuestInfo(60000, 'guaji') > 0 ? '已启用挂机' : '跟随主人下线');
                    text += '  		 				#L2##r智能AI踢下线#l#k\r\n';
                    text += '智能AI名字:' + e.getName() + '   性别:' + (e.getGender() == 0 ? '男' : '女') + '		 #b#L3#变性手术#l#k\r\n';
                    text += '在线地图:' + e.getMap().toString() + '\r\n#b';
                    text += '#L10#召唤AI   #l #L16#加入队伍#l #L12#跟随主人#l #L13#解除跟随#l #L14#使用椅子#l #L15#取消椅子#l \r\n';
                    text += '#L20#随机发型#l #L21#随机脸型#l #L22#随机椅子#l #L23#智能聊天#l  #L24#模仿表情#l #L25#AI挂机#l\r\n';
                    text += '================以下是智能AI身上装备=================\r\n';
                    var d = e.getAPI().getNumberFromQuestInfo(60000, 'yizhi');
                    if (d > 0) {
                        text += '拥有椅子: #i' + d + '# #b#t' + d + '# #L30#为AI更换新的椅子#l\r\n';
                    } else {
                        text += '#L4#我还没有椅子哦.主人为我购买一个吧!(100W点卷)#l\r\n';
                    }
                    var p = e.getAPI().getNumberFromQuestInfo(60000, 'shizhuang');
                    if (p > 0) {
                        text += cm.getItemall(e);
                    } else {
                        text += '#L5#我还没有时装,主人帮我买一套时装吧!(200W点卷)#l\r\n\r\n';
                    }
                    text += '========================================\r\n';
                } else {
                    text += '智能AI未在线\r\n';
                    text += '#L1#召唤智能AI上线#l';
                }
            }
            cm.askMenu_Bottom(text, 204, c);
        } else {
            if (status === g++) {
                select = q;
                switch (q) {
                case 0:
                    if (cm.getPlayer().getCSPoints(1) < 5000000) {
                        cm.playerMessage(1, '抱歉，你没足够的100W点卷！');
                        cm.dispose();
                    } else {
                        cm.dispose();
                        cm.getPlayer().modifyCSPoints(1, -5000000);
                        cm.getPlayer().注册AI智能机器人();
                        cm.broadcastServerMsg(5122015, '『智能AI』：【' + cm.getPlayer().getName() + '】主人,我已成为你的随从,请召唤我上线吧!', true);
                    }
                    break;
                case 1:
                    cm.dispose();
                    if (e != null) {
                        e.getAPI().warp(cm.getMapId(), 0, false);
                        cm.AIChat(e, '主人,我在呢.');
                    } else {
                        cm.getPlayer().召唤机器人上线();
                    }
                    break;
                case 2:
                    cm.dispose();
                    cm.saveToDB(e);
                    e.getClient().disconnect(true, false);
                    break;
                case 3:
                    if (cm.getPlayer().getCSPoints(1) < 100000) {
                        cm.playerMessage(1, '抱歉，你没足够的10W点卷！');
                        cm.dispose();
                    } else {
                        cm.dispose();
                        cm.getPlayer().modifyCSPoints(1, -100000);
                        e.setGender(e.getGender() == 0 ? 1 : 0);
                        cm.saveToDB(e);
                        cm.playerMessage(1, '恭喜，变性手术成功！');
                        cm.AIChat(r, '哎哟,人家想变成女娃娃的嘛~~!');
                        cm.broadcastServerMsg(5122015, '『智能AI』：【' + cm.getPlayer().getName() + '】为他(她)的智能AI进行了变性手术!', true);
                    }
                    break;
                case 4:
                    if (cm.getPlayer().getCSPoints(1) < 1000000) {
                        cm.playerMessage(1, '抱歉，你没足够的100W点卷！');
                        cm.dispose();
                    } else {
                        cm.getPlayer().modifyCSPoints(1, -1000000);
                        e.getAPI().setNumberForQuestInfo(60000, 'yizhi', 3015018);
                        cm.saveToDB(e);
                        cm.playerMessage(1, '恭喜，智能AI椅子已购买！');
                        cm.broadcastServerMsg(5122015, '『智能AI』：【' + cm.getPlayer().getName() + '】为他(她)的智能AI购买了坐椅!', true);
                        cm.AIChat(r, '哎哟,我终于等到了新椅子~~!');
                        cm.dispose();
                    }
                    break;
                case 5:
                    if (cm.getPlayer().getCSPoints(1) < 1000000) {
                        cm.playerMessage(1, '抱歉，你没足够的100W点卷！');
                        cm.dispose();
                    } else {
                        cm.getPlayer().modifyCSPoints(1, -1000000);
                        e.getAPI().setNumberForQuestInfo(60000, 'shizhuang', 100);
                        e.getAPI().equip(1402149, -11);
                        e.getAPI().equip(1112254, -116);
                        e.getAPI().equip(1112143, -115);
                        e.getAPI().equip(1003919, -101);
                        e.getAPI().equip(1032255, -104);
                        e.getAPI().equip(1053124, -105);
                        e.getAPI().equip(1073189, -107);
                        e.getAPI().equip(1082102, -108);
                        e.getAPI().equip(1102983, -109);
                        cm.saveToDB(e);
                        cm.playerMessage(1, '恭喜，智能AI椅子已购买一套时装！');
                        cm.broadcastServerMsg(5122015, '『智能AI』：【' + cm.getPlayer().getName() + '】为他(她)的智能AI购买了一套时装!', true);
                        cm.AIChat(r, '哇,主人新衣服我好喜欢哦~~!');
                        cm.dispose();
                    }
                    break;
                case 10:
                    cm.dispose();
                    e.getAPI().warp(cm.getMapId(), 0, false);
                    e.getAPI().updateInfoQuest(60003, 'chushu=1');
                    cm.AIChat(r, '主人,我在呢.');
                    break;
                case 16:
                    if (cm.getParty() == null) {
                        cm.PartyAutoOn();
                    }
                    if (!cm.isLeader()) {
                        cm.sendOk('请你们团队的队长和我对话。');
                        cm.dispose();
                    } else {
                        cm.dispose();
                        cm.AI加入队伍(e);
                        cm.AIChat(r, '嗨,主人我可以参观你挑战了~~!');
                    }
                    break;
                case 12:
                    cm.dispose();
                    cm.AI跟随(e, true);
                    break;
                case 13:
                    cm.dispose();
                    cm.AI跟随(e, false);
                    break;
                case 14:
                    if (e.getAPI().getNumberFromQuestInfo(60000, 'yizhi') == 0) {
                        text = '';
                        text += '智能AI还没有椅子哦.主人为我购买一个吧!\r\n';
                        text += '椅子购买需要100W点卷.\r\n';
                        cm.sendNext_Bottom(text, c);
                    } else {
                        cm.dispose();
                        cm.AI使用椅子(e, e.getAPI().getNumberFromQuestInfo(60000, 'yizhi'), true);
                        cm.getPlayer().fakeRelog();
                        cm.AIChat(r, '哟呵,终于可以坐下了嘛~~!');
                    }
                    break;
                case 15:
                    cm.dispose();
                    cm.AI使用椅子(e, 0, false);
                    cm.AI跟随(e, true);
                    cm.getPlayer().fakeRelog();
                    cm.AIChat(r, '哎哟,人家还想坐会嘛~~!');
                    cm.AI跟随(e, false);
                    break;
                case 20:
                    if (cm.getPlayer().getCSPoints(1) < 1000) {
                        cm.playerMessage(1, '抱歉，你没足够的1000点卷！');
                        cm.dispose();
                    } else {
                        cm.getPlayer().modifyCSPoints(1, -1000);
                        cm.随机发型(e);
                        cm.saveToDB(e);
                        cm.dispose();
                    }
                    break;
                case 21:
                    if (cm.getPlayer().getCSPoints(1) < 1000) {
                        cm.playerMessage(1, '抱歉，你没足够的1000点卷！');
                        cm.dispose();
                    } else {
                        cm.getPlayer().modifyCSPoints(1, -1000);
                        cm.随机脸型(e);
                        cm.saveToDB(e);
                        cm.dispose();
                    }
                    break;
                case 30:
                    var b = false;
                    inv = cm.getInventory(3);
                    text = '#r#k\r\n';
                    for (var g = 1; g <= inv.getSlotLimit(); g++) {
                        var f = inv.getItem(g);
                        if (f == null) {
                            continue;
                        }
                        var l = f.getItemId();
                        if (Math.floor(l / 10000) == 301) {
                            b = true;
                            text += '#L' + l + '##e名称：#n#v' + l + '##b#z' + l + '##k  可装备#l。\r\n';
                        }
                    }
                    if (!b) {
                        cm.playerMessage(1, '亲,你背包里没有该类道具');
                        cm.dispose();
                        return;
                    }
                    cm.askMenu_Bottom(text, 204, c);
                    break;
                case 11:
                    var b = false;
                    inv = cm.getInventory(1);
                    text = '#r#k\r\n';
                    for (var g = 1; g <= inv.getSlotLimit(); g++) {
                        var f = inv.getItem(g);
                        if (f == null) {
                            continue;
                        }
                        var l = f.getItemId();
                        if (cm.Item类型武器(l)) {
                            b = true;
                            text += '#L' + l + '##e名称：#n#v' + l + '##b#z' + l + '##k  可装备#l。\r\n';
                        }
                    }
                    if (!b) {
                        cm.playerMessage(1, '亲,你背包里没有该类道具');
                        cm.dispose();
                        return;
                    }
                    cm.askMenu_Bottom(text, 204, c);
                    break;
                case 22:
                    var l = 3010000 + randomNum(1, 999);
                    if (cm.getPlayer().getCSPoints(1) < 10000) {
                        cm.playerMessage(1, '抱歉，你没足够的1W点卷！');
                        cm.dispose();
                    } else {
                        cm.getPlayer().modifyCSPoints(1, -10000);
                        e.getAPI().setNumberForQuestInfo(60000, 'yizhi', l);
                        cm.saveToDB(e);
                        cm.broadcastServerMsg(5122015, '『智能AI』：【' + cm.getPlayer().getName() + '】为他(她)的智能AI更换了新坐椅!', true);
                        cm.sendNext_Bottom('已随机获得:#i' + l + '# #b#t' + l + '#', c);
                        cm.AIChat(r, '谢谢主人为我买了新坐椅,爱你,摸摸大~~!');
                        cm.dispose();
                    }
                    break;
                case 23:
                    var a = e.getAPI().getNumberFromQuestInfo(60000, 'ziyu');
                    switch (a) {
                    case 0:
                        e.getAPI().setNumberForQuestInfo(60000, 'ziyu', 10);
                        cm.AIChat(r, '主人,我学会[幽默搞笑]了~~! 我还有几个模式哦!');
                        cm.worldSpouseMessage(36, '『智能AI系统』：【' + cm.getPlayer().getName() + '】为他(她)的智能AI 开启了智能聊天(幽默搞笑)!');
                        break;
                    case 10:
                        e.getAPI().setNumberForQuestInfo(60000, 'ziyu', 20);
                        cm.AIChat(r, '主人,我学会[谈情说爱]了,试试对我说爱我哦~~!我还有几个模式哦!');
                        cm.worldSpouseMessage(36, '『智能AI系统』：【' + cm.getPlayer().getName() + '】为他(她)的智能AI 开启了智能聊天(谈情说爱)!');
                        break;
                    case 20:
                        e.getAPI().setNumberForQuestInfo(60000, 'ziyu', 30);
                        cm.AIChat(r, '主人,我心情变得暴躁了我要[开始骂人了]~~!再次点击可关闭!');
                        cm.worldSpouseMessage(36, '『智能AI系统』：【' + cm.getPlayer().getName() + '】为他(她)的智能AI 开启了智能聊天(谈情说爱)!');
                        break;
                    default:
                        e.getAPI().setNumberForQuestInfo(60000, 'ziyu', 0);
                        cm.AIChat(r, '语音功能已关闭,记得想我哟~~!');
                        break;
                    }
                    cm.saveToDB(e);
                    cm.dispose();
                    break;
                case 24:
                    var j = e.getAPI().getNumberFromQuestInfo(60000, 'biaoqing');
                    if (j > 0) {
                        e.getAPI().setNumberForQuestInfo(60000, 'biaoqing', 0);
                        cm.AIChat(r, '模仿表情已关闭,记得想我哟~~!');
                    } else {
                        e.getAPI().setNumberForQuestInfo(60000, 'biaoqing', 100);
                        cm.saveToDB(e);
                        cm.worldSpouseMessage(36, '『智能AI系统』：【' + cm.getPlayer().getName() + '】为他(她)的智能AI 开启了模仿表情!');
                        cm.AIChat(r, '模仿表情功能已启用。');
                    }
                    cm.saveToDB(e);
                    cm.dispose();
                    break;
                case 25:
                    cm.dispose();
                    cm.openNpc(9110002, 'AI挂机');
                    break;
                default:
                    var b = false;
                    inv = cm.getInventory(1);
                    text = '#r#k\r\n';
                    for (var g = 1; g <= inv.getSlotLimit(); g++) {
                        var f = inv.getItem(g);
                        if (f == null) {
                            continue;
                        }
                        var l = f.getItemId();
                        if (cm.Item类型现金(l)) {
                            switch (q) {
                            case 101:
                                if (Math.floor(l / 1000) == 1004 || Math.floor(l / 1000) == 1005) {
                                    b = true;
                                    text += '#L' + l + '##e名称：#n#v' + l + '##b#z' + l + '##k  可装备#l。\r\n';
                                }
                                break;
                            case 104:
                                if (Math.floor(l / 1000) == 1032) {
                                    b = true;
                                    text += '#L' + l + '##e名称：#n#v' + l + '##b#z' + l + '##k  可装备#l。\r\n';
                                }
                                break;
                            case 105:
                                if (Math.floor(l / 10000) == 105) {
                                    b = true;
                                    text += '#L' + l + '##e名称：#n#v' + l + '##b#z' + l + '##k  可装备#l。\r\n';
                                }
                                break;
                            case 107:
                                if (Math.floor(l / 10000) == 107) {
                                    b = true;
                                    text += '#L' + l + '##e名称：#n#v' + l + '##b#z' + l + '##k  可装备#l。\r\n';
                                }
                                break;
                            case 108:
                                if (Math.floor(l / 10000) == 108) {
                                    b = true;
                                    text += '#L' + l + '##e名称：#n#v' + l + '##b#z' + l + '##k  可装备#l。\r\n';
                                }
                                break;
                            case 109:
                                if (Math.floor(l / 1000) == 1102) {
                                    b = true;
                                    text += '#L' + l + '##e名称：#n#v' + l + '##b#z' + l + '##k  可装备#l。\r\n';
                                }
                                break;
                            case 115:
                                if (Math.floor(l / 100) == 11151 || Math.floor(l / 100) == 11121) {
                                    b = true;
                                    text += '#L' + l + '##e名称：#n#v' + l + '##b#z' + l + '##k  可装备#l。\r\n';
                                }
                                break;
                            case 116:
                                if (Math.floor(l / 100) == 11150 || Math.floor(l / 100) == 11122) {
                                    b = true;
                                    text += '#L' + l + '##e名称：#n#v' + l + '##b#z' + l + '##k  可装备#l。\r\n';
                                }
                                break;
                            default:
                                cm.playerMessage(1, '未知装备类型:' + q);
                                cm.dispose();
                                return;
                            }
                        }
                    }
                    if (!b) {
                        cm.playerMessage(1, '亲,你背包里没有该类道具');
                        cm.dispose();
                        return;
                    }
                    cm.askMenu_Bottom(text, 204, c);
                }
            } else {
                if (status === g++) {
                    switch (select) {
                    case 11:
                        e.getAPI().equip(q, -11);
                        cm.saveToDB(e);
                        cm.dispose();
                        break;
                    case 14:
                        if (cm.getPlayer().getCSPoints(1) < 1000000) {
                            cm.playerMessage(1, '抱歉，你没足够的100W点卷！');
                            cm.dispose();
                        } else {
                            cm.getPlayer().modifyCSPoints(1, -1000000);
                            e.getAPI().setNumberForQuestInfo(60000, 'yizhi', 3015018);
                            cm.saveToDB(e);
                            cm.broadcastServerMsg(5122015, '『智能AI』：【' + cm.getPlayer().getName() + '】为他(她)的智能AI购买了坐椅!', true);
                            cm.sendNext_Bottom('已随机获得:#i3015018# #b#t3015018#', c);
                            cm.AIChat(r, '谢谢主人为我买了新坐椅,爱你,摸摸大~~!');
                            cm.dispose();
                        }
                        break;
                    case 30:
                        e.getAPI().setNumberForQuestInfo(60000, 'yizhi', q);
                        cm.saveToDB(e);
                        cm.worldSpouseMessage(36, '『智能AI系统』：【' + cm.getPlayer().getName() + '】为他(她)的智能AI 更换了新坐椅!');
                        cm.sendNext_Bottom('已随机获得:#i' + q + '# #b#t' + q + '#', c);
                        cm.AIChat(r, '谢谢主人为我买了新坐椅,爱你,摸摸大~~!');
                        cm.dispose();
                        break;
                    default:
                        cm.saveToDB(e);
                        cm.worldSpouseMessage(36, '『智能AI系统』：【' + cm.getPlayer().getName() + '】为他(她)的智能AI 更换了新时装!');
                        cm.sendNext_Bottom('已更换新时装:#i' + q + '# #b#t' + q + '#', c);
                        e.getAPI().equip(q, -select);
                        cm.AIChat(r, '谢谢主人为我买了新衣服,爱你,么么哒~~!');
                        cm.dispose();
                    }
                } else {
                    cm.dispose();
                }
            }
        }
    }
}
function randomNum(b, a) {
    switch (arguments.length) {
    case 1:
        return parseInt(Math.random() * b + 1, 10);
        break;
    case 2:
        return parseInt(Math.random() * (a - b + 1) + b, 10);
        break;
    default:
        return 0;
        break;
    }
}