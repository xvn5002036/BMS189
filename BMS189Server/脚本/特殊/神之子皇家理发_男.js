var 品客缤图标 = '#fUI/UIWindow2.img/StagedGachapon/Creature/0/normal/2#';
var 心形图标 = '#fUI/UIWindow2.img/Megaphone/0#';
var one = '#fUI/UIPVP.img/UserRanking/NumRank/Survival/1#';
var two = '#fUI/UIPVP.img/UserRanking/NumRank/Survival/2#';
var three = '#fUI/UIPVP.img/UserRanking/NumRank/Survival/3#';
var 造型卡 = 5150040;
var 发型列表 = [];
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
function action(g, d, c) {
    if (cm.getzhizunvip() == 2) {
        发型列表 = 至尊男发型;
    } else {
        发型列表 = 黄金男发型;
    }
    var f = 发型列表[Math.floor(Math.random() * 发型列表.length)];
    var e = cm.getPlayer().getHair();
    var a = 0;
    if (cm.getPlayer().isGM()) {
        cm.playerMessage(5, ' status=' + status + ' 新发型：' + f + ' ');
    }
    if (status == 0 && g == 0) {
        cm.dispose();
        return;
    }
    g == 1 ? status++ : status--;
    selectionLog[status] = c;
    var b = -1;
    if (status <= b++) {
        cm.dispose();
    } else {
        if (status === b++) {
            if (cm.getPlayer().getCSPoints(1) >= 随机理发价格) {
                cm.getPlayer().modifyCSPoints(1, -随机理发价格, true);
                cm.getTopMsgFont('随机发型成功', 3, 20, 20, 0);
                cm.addTrait('魅力', 50);
                cm.forceStartQuest(10000086);
                cm.forceCompleteQuest(10000086);
                cm.set神之子男发型(f);
                cm.神之子更换完发型脸型对比UI(造型卡, a, e, f, 0, 0);
                cm.removeItem(造型卡);
                cm.dispose();
            } else {
                cm.playerMessage(-1, '好像没有钱？等有钱了再来吧！');
                cm.dispose();
            }
        }
    }
}
var 黄金男发型 = [
    45097,
    46017,
    46007,
    28712,
    25699,
    45113,
    45101,
    45135,
    45127,
    45084,
    45070,
    43767,
    45031,
    44177,
    40550,
    40530,
    40520,
    40430,
    40380,
    40090,
    40060,
    40030,
    40020,
    40010,
    36920,
    36720,
    36510,
    35750,
    35220,
    33480,
    33440,
    33430,
    33400,
    33270,
    33240,
    33220,
    33210,
    33200,
    33180,
    33090,
    33060,
    32120,
    30800,
    30780,
    30730,
    30560,
    30440,
    30360,
    30350,
    30340,
    30490,
    30280,
    30060,
    30040
];
var 至尊男发型 = [
    46070,
    46080,
    46090,
    46110,
    46140,
    46150,
    46160,
    46170,
    46180,
    46190,
    46200,
    46230,
    46310,
    46350,
    30010,
    30040,
    30060,
    46490,
    30160,
    30210,
    30260,
    30270,
    30280,
    30340,
    30360,
    30380,
    30460,
    30490,
    30530,
    30550,
    30560,
    43010,
    43190,
    43200,
    43250,
    43310,
    43330,
    43580,
    43590,
    43600,
    43740,
    43820,
    43830,
    45010,
    45030,
    45080,
    45140,
    45150,
    45160,
    45220,
    45230,
    46000,
    46010,
    46050,
    40020,
    40060,
    40090,
    40280,
    40290,
    40300,
    40310,
    40350,
    40370,
    40380,
    40410,
    40430,
    40450,
    40560,
    40570,
    40610,
    40630,
    40660,
    40670,
    40700,
    40710,
    40730,
    40760,
    40800,
    33000,
    33040,
    33050,
    33110,
    33120,
    33130,
    33150,
    33170,
    33210,
    33220,
    33230,
    33240,
    33250,
    33260,
    33270,
    33320,
    33380,
    33390,
    33400,
    33430,
    33440,
    33450,
    33460,
    33470,
    33480,
    33580,
    33590,
    33620,
    33640,
    33680,
    33730,
    33780,
    33790,
    33800,
    33940,
    35040,
    35050,
    35110,
    35120,
    35180,
    35220,
    35240,
    35260,
    35290,
    35330,
    35520,
    35550,
    35670,
    35740,
    35750,
    35950,
    36010,
    36100,
    36160,
    36260,
    36280,
    36290,
    36300,
    36330,
    36340,
    36350,
    36370,
    36410,
    36420,
    36490,
    36500,
    36510,
    36600,
    36640,
    36830,
    36840,
    36860,
    36920,
    36930
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