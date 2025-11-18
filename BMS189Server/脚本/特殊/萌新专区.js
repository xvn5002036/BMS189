var 草地合集 = Array('#fItem/Cash/0501.img/05010056/effect/walk1/1#', '#fItem/Cash/0501.img/05010056/effect/walk1/2#', '#fItem/Cash/0501.img/05010056/effect/walk1/5#', '#fItem/Cash/0501.img/05010056/effect/walk1/6#');
var 图标合集 = Array(4032459, 4009388, 4009390, 4009391);
var 箭头特效 = '#fUI/UIWindow.img/Quest/icon2/0#';
var 任务特效 = '#fUI/UIWindow2.img/Quest/quest_info/summary_icon/summary#';
var Q特效 = '#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#';
var status = -1;
function action(f, d, c) {
    if (f == 1) {
        status++;
    } else {
        status--;
    }
    var e = 草地合集[Math.floor(Math.random() * 草地合集.length)];
    var b = 图标合集[Math.floor(Math.random() * 图标合集.length)];
    var a = -1;
    if (status <= a++) {
        cm.dispose();
        cm.openNpc(0, '拍卖菜单_至尊版');
    } else {
        if (status === a++) {
            cm.askMenu_Bottom('' + e + '#fs14##r#fn方正粗黑宋简体#  萌新专区 #v' + b + '#' + e + '#fs12#\r\n\r\n#b#L0##v4030001# 萌新潜能#l #L1##v4030001# 等级奖励#l #b#L2##v4030001# 萌新首充#l \r\n\r\n#L3##v4030001# 萌新任务#l \r\n\r\n                           #r#L10086##v4009388#柠檬:返回主菜单#r#l', 16, 0);
        } else {
            if (status === a++) {
                if (c == 0) {
                } else {
                    if (c == 1) {
                        cm.dispose();
                        cm.openNpc(0, '等级奖励');
                    } else {
                        if (c == 10086) {
                            cm.dispose();
                            cm.openNpc(0, '拍卖菜单_至尊版');
                        }
                    }
                }
            }
        }
    }
}