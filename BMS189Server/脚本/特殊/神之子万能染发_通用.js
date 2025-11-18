var 品客缤图标 = '#fUI/UIWindow2.img/StagedGachapon/Creature/0/normal/2#';
var 心形图标 = '#fUI/UIWindow2.img/Megaphone/0#';
var one = '#fUI/UIPVP.img/UserRanking/NumRank/Survival/1#';
var two = '#fUI/UIPVP.img/UserRanking/NumRank/Survival/2#';
var three = '#fUI/UIPVP.img/UserRanking/NumRank/Survival/3#';
var 造型卡 = 5151036;
var 美容列表 = [];
var 定制理发价格 = 15000;
var 随机理发价格 = 6000;
var 定制美容价格 = 15000;
var 随机美容价格 = 6000;
var 染色 = [
    0,
    1,
    2,
    3,
    4,
    6,
    7
];
var status = -1;
var selectionLog = [];
function start() {
    action(1, 0, 0);
}
function action(e, d, c) {
    var a = 2;
    if (status == 0 && e == 0) {
        cm.dispose();
        return;
    }
    e == 1 ? status++ : status--;
    selectionLog[status] = c;
    var b = -1;
    if (status <= b++) {
        cm.dispose();
    } else {
        if (status === b++) {
            cm.dispose();
            cm.神之子更换发型整容染色UI(cm.getPlayer(), 造型卡, a, 染色, 染色);
        }
    }
}