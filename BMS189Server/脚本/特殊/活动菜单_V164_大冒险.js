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
var header = '#fMap/MapHelper.img/mark/adventureIsland##r[V164] #b大冒险';
var events = [
    100043,
    100168,
    100188,
    500618,
    500619,
    500650,
    500651
];
var quests = [
    100114,
    100135,
    100134,
    500650
];
function action(f, c, b) {
    if (status == 0 && f == 0) {
        cm.dispose();
        return;
    }
    f == 1 ? status++ : status--;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose();
    } else {
        if (status === a++) {
            var e = '#fs15##fn黑体#' + header + '\r\n';
            e += '\r\n#fs13##fn宋体#' + list4 + '\r\n#fs13##fn宋体##b';
            var d = 0;
            for (var a = 0; a < events.length; a++) {
                if (cm.getQuestStatus(events[a]) == 0 && cm.canStartQuest(events[a])) {
                    e += '#L' + events[a] + '##y' + events[a] + '##l\r\n';
                    d++;
                }
            }
            if (d == 0) {
                e += notice0 + '\r\n';
            }
            var d = 0;
            e += '\r\n\r\n' + list1 + '\r\n#b';
            for (var a = 0; a < quests.length; a++) {
                if (cm.getQuestStatus(quests[a]) == 0 && cm.canStartQuest(quests[a])) {
                    e += '#L' + quests[a] + '##y' + quests[a] + '##l\r\n';
                    d++;
                }
            }
            if (d == 0) {
                e += notice0 + '\r\n';
            }
            var d = 0;
            e += '\r\n\r\n' + list0 + '\r\n\r\n';
            for (var a = 0; a < quests.length; a++) {
                if (cm.isQuestActive(quests[a]) && !cm.canCompleteQuest(quests[a])) {
                    e += '#b◇ #k#y' + quests[a] + '#\r\n';
                    d++;
                }
            }
            for (var a = 0; a < events.length; a++) {
                if (cm.isQuestActive(events[a]) && !cm.canCompleteQuest(events[a])) {
                    e += '#b◇ #k#y' + events[a] + '#\r\n';
                    d++;
                }
            }
            if (d == 0) {
                e += notice1 + '\r\n';
            }
            var d = 0;
            e += '\r\n\r\n' + list3 + '\r\n';
            for (var a = 0; a < quests.length; a++) {
                if (cm.isQuestActive(quests[a]) && cm.canCompleteQuest(quests[a])) {
                    e += '#r#L' + quests[a] + '##y' + quests[a] + '##l\r\n';
                    d++;
                }
            }
            for (var a = 0; a < events.length; a++) {
                if (cm.isQuestActive(events[a]) && cm.canCompleteQuest(events[a])) {
                    e += '#r#L' + events[a] + '##y' + events[a] + '##l\r\n';
                    d++;
                }
            }
            if (d == 0) {
                e += notice2 + '\r\n';
            }
            e += '\r\n#b#fs15##fn楷体##L0#返回上一页#l\r\n#n';
            cm.askMenuS(e);
        } else {
            cm.dispose();
            if (b > 0) {
                if (cm.getQuestStatus(b) == 0 && cm.canStartQuest(b)) {
                    cm.startQuestScript(0, b);
                } else {
                    cm.endQuestScript(0, b);
                }
            } else {
                cm.openNpc('剧情任务');
            }
        }
    }
}