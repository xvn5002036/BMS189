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
            cm.askMenu('你想了解#b冒险岛支援#k？\r\n说说你想知道什么吧？\r\n#L0# #b冒险岛支援系统是什么？#k#l\r\n#L1# #b我想了解如何获得冒险分数。#k#l\r\n#L2# #b什么时间内可以获得冒险分数呢？#k#l\r\n#L3# #b我想了解特别优惠#k#l\r\n\r\n#L100# #e结束说明。#n#l', 4, 9310650);
        } else {
            var reactor = 'action分支' + selectionLog[1];
            eval(reactor)(mode, type, selection, i);
        }
    }
}
function action分支0(d, c, b, a) {
    if (status <= a++) {
        cm.sendNormalTalk('#e<冒险岛支援是什么？>#n\r\n\r\n帮助#e维护冒险岛世界安全而努力的勇士们#n成长的系统。\r\n勇士们为冒险岛世界的安全与发展而贡献力量后，将会获得#b冒险分数#k。\r\n获得一定量冒险分数之后，我们将会发放#r有助于成长的特别奖励#k。\r\n\r\n#e#b请记住，冒险岛支援以世界为单位进行。#k#n', 4, 9310650, false, true);
        status = -1;
    }
}
function action分支1(d, c, b, a) {
    if (status <= a++) {
        cm.sendNormalTalk('#e我想了解如何获得冒险分数。#n\r\n\r\n主要通过冒险岛世界大大小小的事件获得，#e也就是完成任务后即可获得冒险分数#n。\n\r\n另外，通过冒险岛世界的各种行动也可以获得冒险分数。\r\n虽然我也和勇士你一样，正在探索冒险岛，了解的不是很多，但据我所知完成以下任务，是可以获得冒险分数的。', 4, 9310650, false, true);
    } else {
        if (status === a++) {
            cm.sendNormalTalk('#e<我知道可以获得冒险分数的任务>#n\r\n\r\n(Lv.30) 金海滩\r\n(Lv.30) 艾利涅\r\n(Lv.30) 列娜海峡\r\n(Lv.100) 次元图书馆\r\n(Lv.100) 好友故事\r\n(Lv.120) 黑色天堂\r\n(Lv.135) 冒险岛英雄\r\n', 4, 9310650, true, true);
        } else {
            if (status === a++) {
                cm.sendNormalTalk('在我没有提及的其它任务中也可以获得冒险分数，建议你#e探索不同的地区#n试试吧！\r\n\r\n 此外，除了做故事任务，一些趣味属性和技能相关的成长，也有可能获得冒险分数。融入冒险岛，不知不觉就获得惊喜的冒险分数吧！', 4, 9310650, true, true);
                status = -1;
            }
        }
    }
}
function action分支2(d, c, b, a) {
    if (status <= a++) {
        cm.sendNormalTalk('#e什么时间内可以获得冒险分数呢？#n\r\n\r\n冒险分数#e#b以最后一次结算为标准，每隔3小时可获得一次#k#n。3小时后点击结算按钮试试吧！', 4, 9310650, false, true);
        status = -1;
    }
}
function action分支3(d, c, b, a) {
    if (status <= a++) {
        cm.sendNormalTalk('#e我想知道什么是特别优惠。#n\r\n\r\n特别优惠指的是#e世界内所有角色通用#n的特殊效果。\r\n#e#b尤其是冒险分数达到500分后，世界内所有角色都可以进行互动交换、交易。#k#n\r\n\r\n（互动交换、交易 包含：可以捡取他人丢弃及丧失所有权的物品，进行玩家间的游戏道具/现金道具交易，使用拍卖场购买或出售道具；）', 4, 9310650, false, true);
        status = -1;
    }
}
function action分支100(d, c, b, a) {
    cm.dispose();
}