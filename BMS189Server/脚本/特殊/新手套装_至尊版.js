function start() {
    if (cm.getzhizunvip() != 2) {
        cm.dispose();
        cm.getTopMsgFont('需要至尊之力才能打开', 3, 20, 4, 0, 0);
        return;
    }
    cm.gainItem(2431305, -1);
    if (cm.getSpace(1) >= 4 && cm.getSpace(2) >= 4 && cm.getLevel() >= 10) {
        Gift(cm.getJob());
        新手套装();
        cm.playerMessage(5, '送给你道具，请你好好保存。');
        cm.getTopMsgFont('送给你道具，请你好好保存。', 3, 20, 4, 0, 0);
        cm.addPopupSay(9110002, 5000, ' [' + cm.getServerName() + ']\r\n 主人，装备穿戴完毕！');
        cm.dispose();
    } else {
        cm.playerMessage(-1, '请让你的背包都充裕,等级达到10级后使用。');
        cm.sendOk('请保证背包空间充足；10级、30级、70级、100级时可以获得不同装备。');
        cm.dispose();
    }
    cm.dispose();
}
function Gift(a) {
    switch (a) {
    case 100:
        equip(1402216, 武器);
        break;
    case 110:
        equip(1352200, 副手);
        equip(1402040, 武器);
        break;
    case 111:
        equip(1352201, 副手);
        equip(1402027, 武器);
        break;
    case 112:
        equip(1352202, 副手);
        equip(1402037, 武器);
        break;
    case 120:
        equip(1352210, 副手);
        equip(1402040, 武器);
        break;
    case 121:
        equip(1352211, 副手);
        equip(1402027, 武器);
        break;
    case 122:
        equip(1352212, 副手);
        equip(1402037, 武器);
        break;
    case 130:
        equip(1352220, 副手);
        equip(1432041, 武器);
        break;
    case 131:
        equip(1352221, 副手);
        equip(1432114, 武器);
        break;
    case 132:
        equip(1352222, 副手);
        equip(1432030, 武器);
        break;
    case 200:
        equip(1372013, 武器);
        break;
    case 210:
        equip(1352230, 副手);
        equip(1382015, 武器);
        break;
    case 211:
        equip(1352231, 副手);
        equip(1382110, 武器);
        break;
    case 212:
        equip(1352232, 副手);
        equip(1382270, 武器);
        break;
    case 220:
        equip(1352240, 副手);
        equip(1382015, 武器);
        break;
    case 221:
        equip(1352241, 副手);
        equip(1382110, 武器);
        break;
    case 222:
        equip(1352242, 副手);
        equip(1382270, 武器);
        break;
    case 230:
        equip(1352250, 副手);
        equip(1382015, 武器);
        break;
    case 231:
        equip(1352251, 副手);
        equip(1382110, 武器);
        break;
    case 232:
        equip(1352252, 副手);
        equip(1382270, 武器);
        break;
    case 300:
        equip(1452093, 武器);
        cm.gainItem(2060000, 9999);
        cm.gainItem(2061000, 9999);
        break;
    case 310:
        equip(1352260, 副手);
        equip(1452141, 武器);
        break;
    case 311:
        equip(1352261, 副手);
        equip(1452115, 武器);
        break;
    case 312:
        equip(1352262, 副手);
        equip(1452020, 武器);
        break;
    case 320:
        equip(1352270, 副手);
        equip(1462077, 武器);
        break;
    case 321:
        equip(1352271, 副手);
        equip(1462103, 武器);
        break;
    case 322:
        equip(1352272, 副手);
        equip(1462015, 武器);
        break;
    case 301:
        equip(1353700, 副手);
        equip(1592000, 武器);
        cm.gainItem(2060000, 9999);
        break;
    case 330:
        equip(1353701, 副手);
        equip(1592001, 武器);
        break;
    case 331:
        equip(1353702, 副手);
        equip(1592003, 武器);
        break;
    case 332:
        equip(1353703, 副手);
        equip(1592007, 武器);
        break;
    case 400:
        equip(1332063, 武器);
        cm.gainItem(1472061, 1);
        cm.gainItem(2070011, 9999);
        break;
    case 410:
        equip(1352290, 副手);
        equip(1472010, 武器);
        break;
    case 411:
        equip(1352291, 副手);
        equip(1472025, 武器);
        break;
    case 412:
        equip(1352292, 副手);
        equip(1472270, 武器);
        break;
    case 420:
        equip(1352280, 副手);
        equip(1332012, 武器);
        break;
    case 421:
        equip(1352281, 副手);
        equip(1332015, 武器);
        break;
    case 422:
        equip(1352282, 副手);
        equip(1332052, 武器);
        break;
    case 430:
        equip(1342000, 副手);
        equip(1332008, 武器);
        break;
    case 431:
        equip(1342001, 副手);
        equip(1332009, 武器);
        break;
    case 432:
        equip(1342002, 副手);
        equip(1332014, 武器);
        break;
    case 433:
        equip(1342004, 副手);
        equip(1332015, 武器);
        break;
    case 434:
        equip(1342008, 副手);
        equip(1332052, 武器);
        break;
    case 500:
        equip(1482066, 武器);
        cm.gainItem(1492066, 1);
        cm.gainItem(2330000, 2000);
        break;
    case 510:
        equip(1352900, 副手);
        equip(1482004, 武器);
        break;
    case 511:
        equip(1352901, 副手);
        equip(1482008, 武器);
        break;
    case 512:
        equip(1352902, 副手);
        equip(1482097, 武器);
        break;
    case 520:
        equip(1352910, 副手);
        equip(1492004, 武器);
        break;
    case 521:
        equip(1352911, 副手);
        equip(1492008, 武器);
        break;
    case 522:
        equip(1352912, 副手);
        equip(1492096, 武器);
        break;
    case 501:
        equip(1532000, 武器);
        break;
    case 530:
        equip(1352920, 副手);
        equip(1532004, 武器);
        break;
    case 531:
        equip(1352921, 副手);
        equip(1532008, 武器);
        break;
    case 532:
        equip(1352922, 副手);
        equip(1532153, 武器);
        break;
    case 508:
        equip(1352300, 副手);
        equip(1492066, 武器);
        cm.gainItem(2330003, 2000);
        break;
    case 570:
        equip(1352301, 副手);
        equip(1492069, 武器);
        cm.gainItem(2330003, 2000);
        break;
    case 571:
        equip(1352302, 副手);
        equip(1492072, 武器);
        cm.gainItem(2330003, 2000);
        break;
    case 572:
        equip(1352303, 副手);
        equip(1492074, 武器);
        cm.gainItem(2330003, 2000);
        break;
    case 5100:
        equip(1098000, 副手);
        equip(1302036, 武器);
        break;
    case 5110:
        equip(1098001, 副手);
        equip(1302075, 武器);
        break;
    case 5111:
        equip(1098002, 副手);
        equip(1302209, 武器);
        break;
    case 5112:
        equip(1098003, 副手);
        equip(1302237, 武器);
        break;
    case 1100:
        equip(1302036, 武器);
        break;
    case 1110:
        equip(1352970, 副手);
        equip(1302075, 武器);
        break;
    case 1111:
        equip(1352971, 副手);
        equip(1302209, 武器);
        break;
    case 1112:
        equip(1352972, 副手);
        equip(1302237, 武器);
        break;
    case 1200:
        equip(1372013, 武器);
        break;
    case 1210:
        equip(1352970, 副手);
        equip(1382015, 武器);
        break;
    case 1211:
        equip(1352971, 副手);
        equip(1382110, 武器);
        break;
    case 1212:
        equip(1352972, 副手);
        equip(1382270, 武器);
        break;
    case 1300:
        equip(1452093, 武器);
        cm.gainItem(2060000, 2000);
        break;
    case 1310:
        equip(1352970, 副手);
        equip(1452141, 武器);
        cm.gainItem(2060000, 2000);
        break;
    case 1311:
        equip(1352971, 副手);
        equip(1452115, 武器);
        cm.gainItem(2060000, 2000);
        break;
    case 1312:
        equip(1352972, 副手);
        equip(1452224, 武器);
        cm.gainItem(2060000, 2000);
        break;
    case 1400:
        equip(1472061, 武器);
        break;
    case 1410:
        equip(1352970, 副手);
        equip(1472010, 武器);
        break;
    case 1411:
        equip(1352971, 副手);
        equip(1472025, 武器);
        break;
    case 1412:
        equip(1352972, 副手);
        equip(1472270, 武器);
        break;
    case 1500:
        equip(1482066, 武器);
        break;
    case 1510:
        equip(1352970, 副手);
        equip(1482004, 武器);
        break;
    case 1511:
        equip(1352971, 副手);
        equip(1482008, 武器);
        break;
    case 1512:
        equip(1352972, 副手);
        equip(1482097, 武器);
        break;
    case 3300:
        equip(1462078, 武器);
        cm.gainItem(2061000, 2000);
        break;
    case 3310:
        equip(1352960, 副手);
        equip(1462077, 武器);
        cm.gainItem(2061000, 2000);
        break;
    case 3311:
        equip(1352961, 副手);
        equip(1462103, 武器);
        cm.gainItem(2061000, 2000);
        break;
    case 3312:
        equip(1352962, 副手);
        equip(1462017, 武器);
        cm.gainItem(2061000, 2000);
        break;
    case 3500:
        equip(1352700, 副手);
        equip(1492066, 武器);
        cm.gainItem(2330003, 2000);
        break;
    case 3510:
        equip(1352701, 副手);
        equip(1492069, 武器);
        cm.gainItem(2330003, 2000);
        break;
    case 3511:
        equip(1352702, 副手);
        equip(1492072, 武器);
        cm.gainItem(2330003, 2000);
        break;
    case 3512:
        equip(1352703, 副手);
        equip(1492074, 武器);
        cm.gainItem(2330003, 2000);
        break;
    case 3200:
        equip(1382000, 武器);
        break;
    case 3210:
        equip(1352950, 副手);
        equip(1382015, 武器);
        break;
    case 3211:
        equip(1352951, 副手);
        equip(1382110, 武器);
        break;
    case 3212:
        equip(1352952, 副手);
        equip(1382270, 武器);
        break;
    case 3700:
        equip(1353400, 副手);
        equip(1582000, 1);
        cm.gainItem(2330000, 2000);
        break;
    case 3710:
        equip(1353401, 副手);
        equip(1582001, 武器);
        cm.gainItem(2330000, 2000);
        break;
    case 3711:
        equip(1353402, 副手);
        equip(1582003, 武器);
        cm.gainItem(2330000, 2000);
        break;
    case 3712:
        equip(1353403, 副手);
        equip(1582041, 武器);
        cm.gainItem(2330000, 2000);
        break;
    case 3100:
        equip(1099006, 副手);
        equip(1322122, 武器);
        break;
    case 3110:
        equip(1099007, 副手);
        equip(1322124, 武器);
        break;
    case 3111:
        equip(1099008, 副手);
        equip(1322126, 武器);
        break;
    case 3112:
        equip(1099009, 副手);
        equip(1322260, 武器);
        break;
    case 3101:
        equip(1099006, 副手);
        equip(1232001, 武器);
        break;
    case 3120:
        equip(1099007, 副手);
        equip(1232002, 武器);
        break;
    case 3121:
        equip(1099008, 副手);
        equip(1232004, 武器);
        break;
    case 3122:
        equip(1099009, 副手);
        equip(1232008, 武器);
        break;
    case 3600:
        equip(1353001, 副手);
        equip(1242001, 武器);
        break;
    case 3610:
        equip(1353002, 副手);
        equip(1242002, 武器);
        break;
    case 3611:
        equip(1353003, 副手);
        equip(1242004, 武器);
        break;
    case 3612:
        equip(1353004, 副手);
        equip(1242129, 武器);
        break;
    case 2100:
        equip(1442239, 武器);
        break;
    case 2110:
        equip(1352930, 副手);
        equip(1442148, 武器);
        break;
    case 2111:
        equip(1352931, 副手);
        equip(1442037, 武器);
        break;
    case 2112:
        equip(1352932, 副手);
        equip(1442281, 武器);
        break;
    case 2300:
        equip(1352000, 副手);
        equip(1522000, 武器);
        break;
    case 2310:
        equip(1352001, 副手);
        equip(1522004, 武器);
        break;
    case 2311:
        equip(1352002, 副手);
        equip(1522008, 武器);
        break;
    case 2312:
        equip(1352003, 副手);
        equip(1522012, 武器);
        break;
    case 2400:
        equip(1352100, 副手);
        equip(1362001, 武器);
        break;
    case 2410:
        equip(1352101, 副手);
        equip(1362005, 武器);
        break;
    case 2411:
        equip(1352102, 副手);
        equip(1362009, 武器);
        break;
    case 2412:
        equip(1352103, 副手);
        equip(1362013, 武器);
        break;
    case 2700:
        equip(1352400, 副手);
        equip(1212001, 武器);
        break;
    case 2710:
        equip(1352401, 副手);
        equip(1212002, 武器);
        break;
    case 2711:
        equip(1352402, 副手);
        equip(1212004, 武器);
        break;
    case 2712:
        equip(1352403, 副手);
        equip(1212008, 武器);
        break;
    case 2500:
        equip(1353100, 副手);
        equip(1482000, 武器);
        break;
    case 2510:
        equip(1353101, 副手);
        equip(1482004, 武器);
        break;
    case 2511:
        equip(1353102, 副手);
        equip(1482008, 武器);
        break;
    case 2512:
        equip(1353103, 副手);
        equip(1482012, 武器);
        break;
    case 2200:
        equip(1382000, 武器);
        break;
    case 2211:
        equip(1352940, 副手);
        equip(1382002, 武器);
        break;
    case 2214:
        equip(1352941, 副手);
        equip(1382006, 武器);
        break;
    case 2217:
        equip(1352942, 副手);
        equip(1382035, 武器);
        break;
    case 6500:
        equip(1352601, 副手);
        equip(1222001, 武器);
        break;
    case 6510:
        equip(1352602, 副手);
        equip(1222002, 武器);
        break;
    case 6511:
        equip(1352603, 副手);
        equip(1222004, 武器);
        break;
    case 6512:
        equip(1352604, 副手);
        equip(1222008, 武器);
        break;
    case 6100:
        equip(1352500, 副手);
        equip(1402216, 武器);
        break;
    case 6110:
        equip(1352501, 副手);
        equip(1402040, 武器);
        break;
    case 6111:
        equip(1352502, 副手);
        equip(1402027, 武器);
        break;
    case 6112:
        equip(1352503, 副手);
        equip(1402037, 武器);
        break;
    case 6400:
        equip(1353300, 副手);
        equip(1272000, 武器);
        break;
    case 6410:
        equip(1353301, 副手);
        equip(1272001, 武器);
        break;
    case 6411:
        equip(1353302, 副手);
        equip(1272003, 武器);
        break;
    case 6412:
        equip(1353303, 副手);
        equip(1272019, 武器);
        break;
    case 4100:
        equip(1542000, 武器);
        break;
    case 4110:
        equip(1352833, 副手);
        equip(1542002, 武器);
        break;
    case 4111:
        equip(1352834, 副手);
        equip(1542005, 武器);
        break;
    case 4112:
        equip(1352835, 副手);
        equip(1542009, 武器);
        break;
    case 4200:
        equip(1552000, 武器);
        break;
    case 4210:
        equip(1552002, 武器);
        break;
    case 4211:
        equip(1552005, 武器);
        break;
    case 4212:
        equip(1552009, 武器);
        break;
    case 15100:
        equip(1354000, 副手);
        equip(1213000, 武器);
        break;
    case 15110:
        equip(1354001, 副手);
        equip(1213001, 武器);
        break;
    case 15111:
        equip(1354002, 副手);
        equip(1213003, 武器);
        break;
    case 15112:
        equip(1354003, 副手);
        equip(1213007, 武器);
        break;
    case 15500:
        equip(1353600, 副手);
        equip(1482066, 武器);
        break;
    case 15510:
        equip(1353601, 副手);
        equip(1482069, 武器);
        break;
    case 15511:
        equip(1353602, 副手);
        equip(1482008, 武器);
        break;
    case 15512:
        equip(1353603, 副手);
        equip(1482074, 武器);
        break;
    case 15200:
        equip(1353500, 副手);
        equip(1282000, 武器);
        break;
    case 15210:
        equip(1353501, 副手);
        equip(1282001, 武器);
        break;
    case 15211:
        equip(1353502, 副手);
        equip(1282003, 武器);
        break;
    case 15212:
        equip(1353503, 副手);
        equip(1282007, 武器);
        break;
    case 16400:
        equip(1353800, 副手);
        equip(1292000, 武器);
        break;
    case 16410:
        equip(1353801, 副手);
        equip(1292001, 武器);
        break;
    case 16411:
        equip(1353802, 副手);
        equip(1292003, 武器);
        break;
    case 16412:
        equip(1353803, 副手);
        equip(1292007, 武器);
        break;
    case 14200:
        equip(1353200, 副手);
        equip(1262000, 武器);
        break;
    case 14210:
        equip(1353201, 副手);
        equip(1262001, 武器);
        break;
    case 14211:
        equip(1353202, 副手);
        equip(1262003, 武器);
        break;
    case 14212:
        equip(1353203, 副手);
        equip(1262007, 武器);
        break;
    case 11200:
        equip(1352810, 副手);
        equip(1252000, 武器);
        break;
    case 11210:
        equip(1352811, 副手);
        equip(1252002, 武器);
        break;
    case 11211:
        equip(1352812, 副手);
        equip(1252004, 武器);
        break;
    case 11212:
        equip(1352813, 副手);
        equip(1252008, 武器);
        break;
    case 10100:
        break;
    case 10110:
        break;
    case 10111:
        break;
    case 10112:
        break;
    case 17500:
        equip(1352860, 副手);
        equip(1403000, 武器);
        break;
    case 17510:
        equip(1352861, 副手);
        equip(1403001, 武器);
        break;
    case 17511:
        equip(1352862, 副手);
        equip(1403003, 武器);
        break;
    case 17512:
        equip(1352863, 副手);
        equip(1403004, 武器);
        break;
    default:
        cm.playerMessage(1, '未录入的职业：' + cm.getJob() + '');
        break;
    }
}
function equip(b, a) {
    cm.equip(b, a);
}
var P = [
    帽子 = -1,
    前额 = -2,
    眼饰 = -3,
    耳环 = -4,
    上衣 = -5,
    裤子 = -6,
    鞋子 = -7,
    手套 = -8,
    披风 = -9,
    副手 = -10,
    武器 = -11,
    戒指1 = -16,
    戒指2 = -15,
    戒指3 = -13,
    戒指4 = -12,
    戒指5 = -27,
    戒指6 = -28,
    项链 = -17,
    奖牌 = -26,
    腰带 = -29,
    护肩 = -30,
    口袋 = -33,
    安卓 = -34,
    心脏 = -35,
    徽章 = -36,
    符号 = -37,
    现金帽子 = -101,
    现金前额 = -102,
    现金眼饰 = -103,
    现金耳环 = -104,
    现金上衣 = -105,
    现金裤子 = -106,
    现金鞋子 = -107,
    现金手套 = -108,
    现金披风 = -109,
    现金副手 = -110,
    现金武器 = -111,
    现金戒指1 = -116,
    现金戒指2 = -115,
    现金戒指3 = -113,
    现金戒指4 = -112,
    现金戒指5 = -127,
    现金戒指6 = -128,
    宠物饰品1 = -114,
    宠物项圈1 = -121,
    宠物饰品2 = -122,
    宠物项圈2 = -123,
    宠物饰品3 = -124,
    宠物项圈3 = -125,
    未知 = -135,
    龙面罩 = -1000,
    龙吊坠 = -1001,
    龙翅膀 = -1002,
    龙尾巴 = -1003,
    机甲引擎 = -1100,
    机甲机械臂 = -1101,
    机甲机械腿 = -1102,
    机甲框架 = -1103,
    机甲晶体管 = -1104,
    安卓帽子栏 = -1200,
    安卓披风栏 = -1201,
    安卓前额栏 = -1202,
    安卓衣服栏 = -1203,
    安卓裤子栏 = -1204,
    安卓鞋子栏 = -1205,
    安卓手套栏 = -1206,
    天使帽子 = -1300,
    天使发型 = -1300,
    天使前额 = -1300,
    天使脸饰 = -1300,
    天使上衣 = -1300,
    天使披风 = -1300,
    天使手套 = -1300,
    贝塔眼饰 = -1500,
    贝塔帽子 = -1501,
    贝塔前额 = -1502,
    贝塔耳环 = -1503,
    贝塔披风 = -1504,
    贝塔上衣 = -1505,
    贝塔手套 = -1506,
    贝塔武器 = -1507,
    贝塔裤子 = -1508,
    贝塔鞋子 = -1509,
    贝塔戒指1 = -1510,
    贝塔戒指2 = -1511,
    贝塔戒指3 = -1512,
    神秘1 = -1600,
    神秘2 = -1601,
    神秘3 = -1602,
    神秘4 = -1603,
    神秘5 = -1604,
    神秘6 = -1605,
    图腾1 = -5000,
    图腾2 = -5001,
    图腾3 = -5002,
    小白 = -5200
];
function 新手套装() {
    equip(1002797, 帽子);
    equip(1052468, 上衣);
    equip(1072366, 鞋子);
    equip(1082146, 手套);
    equip(1132140, 腰带);
    equip(1102174, 披风);
    equip(1032058, 耳环);
    equip(1122018, 项链);
    equip(1112915, 戒指1);
    equip(1022129, 眼饰);
    equip(1012317, 前额);
    equip(1152052, 护肩);
    equip(1182019, 徽章);
    equip(1142477, 奖牌);
    equip(1162004, 口袋);
    cm.forceCompleteQuest(6500);
    cm.一键扩充项链();
    cm.getPlayer().getStorage().setSlots(96);
    cm.getPlayer().getStorage().saveToDB();
}