var 品客缤图标 = '#fUI/UIWindow2.img/StagedGachapon/Creature/0/normal/2#';
var 心形图标 = '#fUI/UIWindow2.img/Megaphone/0#';
var one = '#fUI/UIPVP.img/UserRanking/NumRank/Survival/1#';
var two = '#fUI/UIPVP.img/UserRanking/NumRank/Survival/2#';
var three = '#fUI/UIPVP.img/UserRanking/NumRank/Survival/3#';
var 造型卡 = 5152053;
var 美容列表 = [];
var 定制理发价格 = 15000;
var 随机理发价格 = 6000;
var 定制美容价格 = 15000;
var 随机美容价格 = 6000;
var 皮肤染色 = [
    0,
    1,
    2,
    3,
    4,
    6,
    7,
    8,
    9,
    10,
    16
];
var status = -1;
var selectionLog = [];
function start() {
    action(1, 0, 0);
}
function action(g, f, e) {
    if (cm.getzhizunvip() == 2) {
        美容列表 = 至尊男美容;
    } else {
        美容列表 = 黄金男美容;
    }
    var c = 美容列表[Math.floor(Math.random() * 美容列表.length)];
    var b = cm.getPlayer().getFace();
    var a = 0;
    if (status == 0 && g == 0) {
        cm.dispose();
        return;
    }
    g == 1 ? status++ : status--;
    selectionLog[status] = e;
    var d = -1;
    if (status <= d++) {
        cm.dispose();
    } else {
        if (status === d++) {
            if (cm.getPlayer().getCSPoints(1) >= 随机美容价格) {
                cm.getPlayer().modifyCSPoints(1, -随机美容价格, true);
                cm.getTopMsgFont('随机脸型成功', 3, 20, 20, 0);
                cm.addTrait('魅力', 50);
                cm.forceStartQuest(10000086);
                cm.forceCompleteQuest(10000086);
                cm.set神之子男脸型(c);
                cm.神之子更换完发型脸型对比UI(造型卡, a, b, c, 0, 0);
                cm.removeItem(造型卡);
                cm.dispose();
            } else {
                cm.playerMessage(-1, '好像没有钱？等有钱了再来吧！');
                cm.dispose();
            }
        }
    }
}
var 黄金男美容 = [
    25194,
    23022,
    26360,
    23080,
    25629,
    20043,
    20067,
    25000,
    23030,
    20152,
    23176,
    20044,
    20035,
    23116,
    20033,
    23128,
    23183,
    20046,
    25019,
    25121,
    20061,
    20011
];
var 至尊男美容 = [
    23081,
    23082,
    23083,
    23084,
    23086,
    23088,
    23089,
    23090,
    23092,
    23097,
    23098,
    20071,
    20141,
    23029,
    23031,
    23032,
    23034,
    23043,
    23053,
    23054,
    23059,
    23061,
    23064,
    23066,
    23068,
    23071,
    23072,
    23076,
    25061,
    25074,
    25817,
    25821,
    23012,
    23014,
    23019,
    23020,
    23024,
    23028,
    20811,
    25000,
    25006,
    25012,
    25016,
    25019,
    25022,
    25023,
    25024,
    25025,
    25029,
    25031,
    25043,
    25049,
    25051,
    25057,
    20535,
    20543,
    20546,
    20549,
    20481,
    20486,
    20509,
    20520,
    20521,
    20526
];
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