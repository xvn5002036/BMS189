function start() {
    if (cm.getSpace(1) >= 7 && cm.getSpace(2) >= 4 && cm.getLevel() >= 0) {
        Gift(cm.getJob());
        cm.playerMessage(-1, '送给你道具，请你好好保存。');
        if (cm.getLevel() < 10) {
            for (var a = 0; a < 9; a++) {
                if (cm.getLevel() == 10) {
                    break;
                }
                cm.getPlayer().levelUp();
            }
        }
        cm.dispose();
        cm.sendOk('送给你道具请注意查收,10级送10级的，30级以后送30级的，70级以后送70的，100级以后送100级的,可无限领取.');
    } else {
        cm.playerMessage(-1, '请让你的背包都充裕,等级达到10级后使用。');
        cm.sendOk('新手武器箱子,10级送10级的，30级以后送30级的，70级以后送70的，100级以后送100级的 ，请选择等级后再使用.或者背包空间不足.');
        cm.dispose();
    }
    cm.dispose();
}
function Gift(a) {
    switch (a) {
    case 301:
        cm.gainItem(1592000, 1);
        cm.gainItem(1353700, 1);
        break;
    case 330:
        cm.gainItem(1592001, 1);
        cm.gainItem(1353701, 1);
        break;
    case 331:
        cm.gainItem(1592003, 1);
        cm.gainItem(1353702, 1);
        break;
    case 332:
        cm.gainItem(1592007, 1);
        cm.gainItem(1353703, 1);
        break;
    case 100:
        cm.gainItem(1302135, 1);
        cm.gainItem(1312049, 1);
        cm.gainItem(1322077, 1);
        break;
    case 1100:
    case 5100:
        cm.gainItem(1302135, 1);
        break;
    case 5110:
    case 110:
    case 1110:
    case 6110:
        cm.gainItem(1402081, 1);
        break;
    case 1111:
    case 5111:
    case 111:
    case 6111:
        cm.gainItem(1402084, 1);
        break;
    case 112:
    case 5112:
    case 1112:
    case 6112:
        cm.gainItem(1402075, 1);
        break;
    case 120:
        cm.gainItem(1402081, 1);
        cm.gainItem(1412051, 1);
        break;
    case 121:
        cm.gainItem(1402084, 1);
        cm.gainItem(1412054, 1);
        break;
    case 122:
        cm.gainItem(1422058, 1);
        break;
    case 130:
        cm.gainItem(1432071, 1);
        cm.gainItem(1442099, 1);
        break;
    case 131:
        cm.gainItem(1432074, 1);
        break;
    case 132:
        cm.gainItem(1432076, 1);
        break;
    case 1200:
    case 200:
        cm.gainItem(1372043, 1);
        break;
    case 1210:
    case 210:
        cm.gainItem(1382017, 1);
        break;
    case 1211:
    case 211:
        cm.gainItem(1372069, 1);
        break;
    case 1212:
    case 212:
        cm.gainItem(1382094, 1);
        break;
    case 220:
        cm.gainItem(1382017, 1);
        break;
    case 221:
        cm.gainItem(1372069, 1);
        break;
    case 222:
        cm.gainItem(1382094, 1);
        break;
    case 230:
        cm.gainItem(1382017, 1);
        break;
    case 231:
        cm.gainItem(1372069, 1);
        break;
    case 232:
        cm.gainItem(1382094, 1);
        break;
    case 1300:
    case 3300:
    case 300:
        cm.gainItem(1452093, 1);
        cm.gainItem(1462078, 1);
        cm.gainItem(2060000, 1000);
        cm.gainItem(2061000, 1000);
        break;
    case 1310:
    case 310:
        cm.gainItem(1452096, 1);
        break;
    case 1311:
    case 311:
        cm.gainItem(1452023, 1);
        break;
    case 1312:
    case 312:
        cm.gainItem(1452101, 1);
        break;
    case 3310:
    case 320:
        cm.gainItem(1462000, 1);
        break;
    case 3311:
    case 321:
        cm.gainItem(1462008, 1);
        break;
    case 3312:
    case 322:
        cm.gainItem(1462015, 1);
        break;
    case 1400:
    case 400:
        cm.gainItem(1332063, 1);
        cm.gainItem(1472061, 1);
        break;
    case 1410:
    case 410:
        cm.gainItem(1472008, 1);
        break;
    case 1411:
    case 411:
        cm.gainItem(1472037, 1);
        break;
    case 1412:
    case 412:
        cm.gainItem(1472053, 1);
        break;
    case 420:
        cm.gainItem(1332012, 1);
        break;
    case 421:
        cm.gainItem(1332036, 1);
        break;
    case 422:
        cm.gainItem(1332052, 1);
        break;
    case 430:
        cm.gainItem(1342000, 1);
        cm.gainItem(1332008, 1);
        break;
    case 431:
        cm.gainItem(1342001, 1);
        cm.gainItem(1332009, 1);
        break;
    case 432:
        cm.gainItem(1342002, 1);
        cm.gainItem(1332014, 1);
        break;
    case 433:
        cm.gainItem(1342004, 1);
        cm.gainItem(1332015, 1);
        break;
    case 434:
        cm.gainItem(1342008, 1);
        cm.gainItem(1332052, 1);
        break;
    case 1500:
        cm.gainItem(1482066, 1);
        break;
    case 500:
        cm.gainItem(1492066, 1);
        cm.gainItem(1482066, 1);
        cm.gainItem(2330000, 1000);
        break;
    case 3500:
        cm.gainItem(1492066, 1);
        break;
    case 1510:
    case 510:
        cm.gainItem(1492069, 1);
        break;
    case 1511:
    case 511:
        cm.gainItem(1492072, 1);
        break;
    case 1512:
    case 512:
        cm.gainItem(1492074, 1);
        break;
    case 3510:
        cm.gainItem(1492069, 1);
        break;
    case 520:
        cm.gainItem(1492069, 1);
        break;
    case 3511:
        cm.gainItem(1492072, 1);
        break;
    case 521:
        cm.gainItem(1492072, 1);
        break;
    case 3512:
        cm.gainItem(1492074, 1);
        break;
    case 522:
        cm.gainItem(1492074, 1);
        break;
    case 508:
        cm.gainItem(1492066, 1);
        cm.gainItem(2330003, 1000);
        break;
    case 570:
        cm.gainItem(1492069, 1);
        break;
    case 571:
        cm.gainItem(1492072, 1);
        break;
    case 572:
        cm.gainItem(1492074, 1);
        break;
    case 2100:
        cm.gainItem(1442096, 1);
        break;
    case 2110:
        cm.gainItem(1442099, 1);
        break;
    case 2111:
        cm.gainItem(1442102, 1);
        break;
    case 2112:
        cm.gainItem(1442105, 1);
        break;
    case 2200:
        cm.gainItem(1372005, 1);
        break;
    case 2300:
        cm.gainItem(1522000, 1);
        cm.gainItem(1352000, 1);
        break;
    case 2310:
        cm.gainItem(1522004, 1);
        cm.gainItem(1352001, 1);
        break;
    case 2311:
        cm.gainItem(1522008, 1);
        cm.gainItem(1352002, 1);
        break;
    case 2312:
        cm.gainItem(1522012, 1);
        cm.gainItem(1352003, 1);
        break;
    case 2400:
        cm.gainItem(1362000, 1);
        cm.gainItem(1352100, 1);
        break;
    case 2410:
        cm.gainItem(1362005, 1);
        cm.gainItem(1352101, 1);
        break;
    case 2411:
        cm.gainItem(1362009, 1);
        cm.gainItem(1352102, 1);
        break;
    case 2412:
        cm.gainItem(1362013, 1);
        cm.gainItem(1352103, 1);
        break;
    case 2700:
        cm.gainItem(1352400, 1);
        cm.gainItem(1212001, 1);
        break;
    case 2710:
        cm.gainItem(1352401, 1);
        cm.gainItem(1212002, 1);
        break;
    case 2711:
        cm.gainItem(1352402, 1);
        cm.gainItem(1212004, 1);
        break;
    case 2712:
        cm.gainItem(1352403, 1);
        cm.gainItem(1212007, 1);
        break;
    case 3100:
        cm.gainItem(1322122, 1);
        break;
    case 3110:
        cm.gainItem(1322124, 1);
        break;
    case 3111:
        cm.gainItem(1322126, 1);
        break;
    case 3112:
        cm.gainItem(1322127, 1);
        break;
    case 3200:
        cm.gainItem(1382085, 1);
        break;
    case 3210:
        cm.gainItem(1382088, 1);
        break;
    case 3211:
        cm.gainItem(1382091, 1);
        break;
    case 3212:
        cm.gainItem(1382094, 1);
        break;
    case 3600:
        cm.gainItem(1242001, 1);
        break;
    case 3610:
        cm.gainItem(1242002, 1);
        break;
    case 3611:
        cm.gainItem(1242004, 1);
        break;
    case 3612:
        cm.gainItem(1242008, 1);
        break;
    case 6100:
        cm.gainItem(1402177, 1);
        break;
    case 6500:
        cm.gainItem(1222001, 1);
        cm.gainItem(1352601, 1);
        break;
    case 6510:
        cm.gainItem(1222002, 1);
        cm.gainItem(1352602, 1);
        break;
    case 6511:
        cm.gainItem(1222004, 1);
        cm.gainItem(1352603, 1);
        break;
    case 6512:
        cm.gainItem(1222008, 1);
        cm.gainItem(1352604, 1);
        break;
    case 3101:
        cm.gainItem(1232001, 1);
        break;
    case 3120:
        cm.gainItem(1232002, 1);
        break;
    case 3121:
        cm.gainItem(1232004, 1);
        break;
    case 3122:
        cm.gainItem(1232008, 1);
        break;
    case 501:
        cm.gainItem(1532045, 1);
        break;
    case 530:
        cm.gainItem(1532049, 1);
        break;
    case 531:
        cm.gainItem(1532053, 1);
        break;
    case 532:
        cm.gainItem(1532057, 1);
        break;
    case 2500:
        cm.gainItem(1482066, 1);
        cm.gainItem(1353100, 1);
        break;
    case 2510:
        cm.gainItem(1482069, 1);
        cm.gainItem(1353101, 1);
        break;
    case 2511:
        cm.gainItem(1482072, 1);
        cm.gainItem(1353102, 1);
        break;
    case 2512:
        cm.gainItem(1482074, 1);
        cm.gainItem(1353103, 1);
        break;
    case 4100:
        cm.gainItem(1542000, 1);
        break;
    case 4110:
        cm.gainItem(1542002, 1);
        break;
    case 4111:
        cm.gainItem(1542005, 1);
        break;
    case 4112:
        cm.gainItem(1542009, 1);
        break;
    case 4200:
        cm.gainItem(1552000, 1);
        break;
    case 4210:
        cm.gainItem(1552002, 1);
        break;
    case 4211:
        cm.gainItem(1552005, 1);
        break;
    case 4212:
        cm.gainItem(1552009, 1);
        break;
    case 3700:
        cm.gainItem(1353400, 1);
        cm.gainItem(1582000, 1);
        break;
    case 14200:
        cm.gainItem(1262000, 1);
        cm.gainItem(1353200, 1);
        break;
    case 15000:
    case 15200:
        cm.gainItem(1353500, 1);
        cm.gainItem(1282000, 1);
        break;
    case 15210:
        cm.gainItem(1353501, 1);
        cm.gainItem(1282001, 1);
        break;
    case 15211:
        cm.gainItem(1353502, 1);
        cm.gainItem(1282003, 1);
        break;
    case 15212:
        cm.gainItem(1353503, 1);
        cm.gainItem(1282007, 1);
        break;
    case 6002:
    case 6400:
        cm.gainItem(1353300, 1);
        cm.gainItem(1272000, 1);
        break;
    case 6410:
        cm.gainItem(1353301, 1);
        cm.gainItem(1272001, 1);
        break;
    case 6411:
        cm.gainItem(1353302, 1);
        cm.gainItem(1272003, 1);
        break;
    case 6412:
        cm.gainItem(1353303, 1);
        cm.gainItem(1272007, 1);
        break;
    case 15001:
    case 15500:
        cm.gainItem(1353600, 1);
        break;
    case 15001:
        cm.gainItem(1353600, 1);
        break;
    case 15500:
        cm.gainItem(1353600, 1);
        break;
    case 15510:
        cm.gainItem(1353601, 1);
    case 15511:
        cm.gainItem(1353602, 1);
    case 15512:
        cm.gainItem(1353603, 1);
        break;
    case 16400:
        cm.gainItem(1353800, 1);
        cm.gainItem(1292000, 1);
        break;
    case 16410:
        cm.gainItem(1353801, 1);
        cm.gainItem(1292001, 1);
        break;
    case 16411:
        cm.gainItem(1353802, 1);
        cm.gainItem(1292002, 1);
        break;
    case 16412:
        cm.gainItem(1353803, 1);
        cm.gainItem(1292003, 1);
        break;
    }
}
var status = -1;