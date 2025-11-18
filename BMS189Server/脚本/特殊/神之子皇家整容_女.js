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
        美容列表 = 至尊女美容;
    } else {
        美容列表 = 黄金女美容;
    }
    var c = 美容列表[Math.floor(Math.random() * 美容列表.length)];
    var b = cm.getPlayer().getSecondFace();
    var a = 1;
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
                cm.set神之子女脸型(c);
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
var 黄金女美容 = [
    28728,
    27625,
    27414,
    27413,
    25795,
    26495,
    26494,
    25797,
    25796,
    26686,
    25771,
    24896,
    26360,
    24078,
    21112,
    21042,
    24002,
    24127,
    21194,
    24027,
    21082,
    21236,
    24010,
    24188,
    26227,
    25617,
    24139,
    25403,
    24122,
    24036,
    21025,
    26234,
    25104,
    24235,
    21149,
    21062,
    26142,
    24631,
    24732,
    21250,
    24058,
    21070,
    26012,
    21144,
    21079,
    26125,
    24198,
    21028,
    21031,
    21033,
    24171,
    25778
];
var 至尊女美容 = [
    21001,
    21028,
    21031,
    21033,
    21041,
    21042,
    24650,
    24652,
    28753,
    24671,
    24598,
    24601,
    24608,
    24612,
    24620,
    24622,
    24624,
    24626,
    26003,
    26005,
    26007,
    26015,
    26019,
    26020,
    26023,
    26025,
    26026,
    26030,
    26031,
    26046,
    26059,
    26065,
    26827,
    21044,
    21055,
    21064,
    21070,
    21079,
    21081,
    21083,
    21093,
    21094,
    21097,
    21140,
    25044,
    25045
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