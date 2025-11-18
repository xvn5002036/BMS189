var status = -1;
var selectionLog = [];
function start() {
    action(1, 0, 0);
}
function action(mode, type, selection) {
    if (status == 0 && mode == 0) {
        cm.dispose();
        return;
    }
    status++;
    selectionLog[status] = selection;
    var i = -1;
    if (status <= i++) {
        cm.dispose();
    } else {
        if (status === i++) {
            cm.askMenu('嗨！#b#h0##k!\r\n关于#e<加速支援>#n活动，你还想知道什么？\r\n\r\n#L0# 我想了解#b#e活动长期优惠#n#k。#l\r\n#L1# 我想了解#b#e每日任务箱子#n#k。#l\r\n#L2# 我想了解#b#e加速器#n#k。#l\r\n#L3# 我想了解#b#e活动时间#n#k。#l\r\n#L4# 没有什么想了解的。#l', 4, 9010010);
        } else {
            var reactor = 'action分支' + selectionLog[1];
            eval(reactor)(mode, type, selection, i);
        }
    }
}
function action分支0(d, c, b, a) {
    if (status <= a++) {
        cm.sendNormalTalk('\r\n#e活动期间可以享受到以下优惠！！#n\r\n\r\n#b- #e精英怪物#n出现#e更加#n频繁！\r\n- #e符文#n出现#e更加#n 频繁，#e更加#n常用！\r\n- #e符文#n 经验值效果#e强化#n2倍！\r\n- #e突发任务#n每天可#e多#n通关两次！\r\n- #e保罗&普利托#n出现#e更加#n频繁！\r\n- #e火焰狼#n 经验值#e强化#n1.5倍！\r\n- #eBOSS组队组建增益#n#e强化#n3倍！', 4, 9010010, 0, 0);
        status = -1;
    }
}
function action分支1(d, c, b, a) {
    if (status <= a++) {
        cm.sendNormalTalk('\r\n#e可从每日任务箱子中获得以下道具中的1个！#n\r\n\r\n#b#e#i4001832:# #t4001832:# 500个#n#k\r\n#b#e#i2434639:# #t2434639:# 1个#n#k\r\n#b#e#i4001839:# #t4001839:# 5～20个#n#k\r\n#b#e#i2593001:# #t2593001:# 1个#n#k\r\n#b#e#i2049035:# #t2049035:# 1个#n#k\r\n#b#e#i2439869:# #t2439869:# 1～5个#n#k\r\n#b#e#i2730004:# #t2730004:# 1个#n#k\r\n#b#e#i4001212:# #t4001212:# 1个#n#k', 4, 9010010, 0, 1);
    } else {
        if (status === a++) {
            cm.sendNormalTalk('\r\n#e每日任务箱子#n每完成一次每日任务后即可获得1个！\r\n\r\n#r#e<注意事项>#n#k\r\n\r\n#e进行中的任务#n超过晚上12点后，将#r#e初始化#n#k，完成记录为世界内角色所#r#e通用#n#k，请记住！\r\n#e每日加速任务箱子#n为世界内角色所#r#e通用#n#k，请用适当的角色领取箱子！', 4, 9010010, 1, 1);
        } else {
            if (status === a++) {
                cm.sendNormalTalk('\r\n啊！最后还有一点！\r\n\r\n一天内完成全部#e#b6种<每日加速任务>#n#k后……\r\n嘿嘿……这还是等你自己亲自确认吧！', 4, 9010010, 1, 0);
                status = -1;
            }
        }
    }
}
function action分支2(d, c, b, a) {
    if (status <= a++) {
        cm.sendNormalTalk('\r\n使用#e加速器#n后，\r\n#b#e将在100秒内额外召唤怪物！#n#k\r\n能够加速真正的狩猎！\r\n\r\n每天可完成的6种 #e#b<每日加速任务>#n#k，每完成一次即可获得1个加速器。\r\n#r#e加速器超过12点后将会消失，不要忘记使用哦！#n#k', 4, 9010010, 0, 0);
        status = -1;
    }
}
function action分支3(d, c, b, a) {
    if (status <= a++) {
        cm.sendNormalTalk('\r\n#r#e加速支援#n#k 活动时间\r\n截止到#b#e2020年05月26日晚上11时59分#n#k，注意哦！', 4, 9010010, 0, 0);
        status = -1;
    }
}
function action分支4(d, c, b, a) {
    cm.dispose();
}