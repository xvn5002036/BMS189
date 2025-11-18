var status = -1;
var selectionLog = [];
function start() {
    action(1, 0, 0);
}
var tz14 = '#fEffect/CharacterEff/1112926/0/0#';
var wi14 = '#fUI/UIPVP.img/MiniMapIcon/star#';
var tz = '#fEffect/CharacterEff/1082565/4/0#';
var wn19 = '#fUI/CashShop.img/CSEffect/event/0#';
var wn20 = '#fUI/CashShop.img/CSEffect/hot/0#';
var wn21 = '#fUI/CashShop.img/CSEffect/mileage/0#';
var wn22 = '#fUI/CashShop.img/CSEffect/new/0#';
var wn23 = '#fUI/CashShop.img/CSEffect/sale/0#';
var wn24 = '#fUI/CashShop.img/CSEffect/time/0#';
var wp1 = '#fUI/CashShop.img/CSEffect/number/0#';
var wp2 = '#fUI/CashShop.img/CSIcon/0#';
var wp3 = '#fUI/CashShop.img/CSStatus/BtCharge/mouseOver/0#';
var wp14 = '#fUI/CashShop.img/CSSubTabBar/Tab/4/Disable/10#';
var wi6 = '#fUI/StarCityUI.img/Board_Friend/list/0/5/selected#';
var wi7 = '#fUI/StarCityUI.img/Board_GameRank/tab/enabled/0#';
var d10 = '#fUI/UIWindow.img/Shop/meso#';
var list0 = '#fUI/UIWindow.img/UtilDlgEx/list0#';
var list1 = '#fUI/UIWindow.img/UtilDlgEx/list1#';
var list2 = '#fUI/UIWindow.img/UtilDlgEx/list2#';
var list3 = '#fUI/UIWindow.img/UtilDlgEx/list3#';
var list4 = '#fUI/UIWindow2.img/UtilDlgEx/list4#';
var list5 = '#fUI/UIWindow2.img/UtilDlgEx/list5#';
var notice0 = '#fUI/UIWindow.img/Quest/notice0#';
var notice1 = '#fUI/UIWindow.img/Quest/notice1#';
var notice2 = '#fUI/UIWindow.img/Quest/notice2#';
var icon169 = '#fEffect/BasicEff.img/MainNotice/AbyssExpedition/Notify/11#';
var header = '#fMap/MapHelper.img/mark/KerningCity##r[V167] #b吟游诗人';
function action(d, c, b) {
    if (status == 0 && d == 0) {
        cm.dispose();
        return;
    }
    d == 1 ? status++ : status--;
    selectionLog[status] = b;
    var a = -1;
    if (cm.getQuestStatus(16860) == 2) {
        cm.dispose();
        cm.openUI(1160);
        return;
    }
    if (status <= a++) {
        cm.dispose();
    } else {
        if (status === a++) {
            cm.sendNormalTalk('你好！我叫#b卡珊德拉#k！\r\n\r\n我既是冒险岛世界最棒的#b占卜师#k，也是指引和你一样刚来到冒险岛世界的新勇士的#b向导#k！', 0, 9001194, true, true);
        } else {
            if (status === a++) {
                cm.sendNormalTalk('关于冒险岛世界，你现在应该有很多不知道的事情吧？\r\n\r\n比如，今天要狩猎什么样的怪物，要怎样才能更快升级呢？', 0, 9001194, true, true);
            } else {
                if (status === a++) {
                    cm.sendNormalTalk('#b别担心～！#k\r\n\r\n我#b卡珊德拉#k准备了帮助新手勇士们成长的\r\n#b#e<大冒险步步高>#n#k活动～！', 0, 9001194, true, true);
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk('通过每达到特定等级后发放的任务，让自己#b步步高～！#k\r\n通过每次完成任务获得的奖励，让自己#b步步高～！#k\r\n完成所有任务后，你就是#b#t3700388:##k勇士了！', 0, 9001194, true, true);
                    } else {
                        if (status === a++) {
                            cm.askYesNo('怎么样？#b#e<大冒险步步高>#n#k 是系统性地介绍冒险岛世界的核心要素的活动！', 0, 9001194);
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk('明智的选择～！\r\n你一定不会后悔的～！', 0, 9001194, false, true);
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk('现在每达到特定等级，你就能执行#b步步高任务#k了！\r\n想查看任务和执行状态的时候，只要在左边的活动提示中点击#b#e步步高图标#n#k就行！', 0, 9001194, true, true);
                                } else {
                                    if (status === a++) {
                                        cm.updateInfoQuest(16260, 'reward=0000000000000000000000000000000000000000000000000000000;step=0;sTime=19/09/15/05/33;state=3');
                                        cm.updateInfoQuest(500060, 'reward=0000000000000000000000000000000000000000000000000000000');
                                        cm.updateInfoQuest(16271, 'value=0');
                                        cm.updateInfoQuest(16276, 'value=0');
                                        cm.updateInfoQuest(16277, 'value=0');
                                        cm.updateInfoQuest(16287, 'value=0');
                                        cm.updateInfoQuest(16294, 'value=0');
                                        cm.updateInfoQuest(16297, 'value=0');
                                        cm.updateInfoQuest(16295, 'value=0;state=0000000000');
                                        cm.updateInfoQuest(16313, 'pr=0;value=0');
                                        cm.forceCompleteQuest(16860);
                                        cm.updateInfoQuest(16260, 'reward=0000000000000000000000000000000000000000000000000000000;step=1;sTime=19/09/15/05/33;state=0');
                                        cm.sendNormalTalk('说明就到此为止。很简单吧？\r\n好的，希望通过#b#e<大冒险步步高>#n#k，能让你经历一次精彩的冒险～！', 0, 9001194, false, false);
                                        cm.dispose();
                                        cm.openUI(1160);
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}