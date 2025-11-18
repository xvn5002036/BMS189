var status = -1;
var questid = 200100;
var playerid = 0;
var maplist = Array(Array(100000001, '射手村 - 玛亚的家'), Array(100000002, '射手村 - 长老斯坦的家'), Array(100000003, '射手村 - 丽娜的家'), Array(500000000, '泰国 - 水上市场'), Array(100000200, '射手村 - 射手村公园'), Array(100000201, '射手村 - 弓箭手培训中心'), Array(100000202, '射手村 - 宠物公园'), Array(100010000, '射手村 - 射手村北部小山'), Array(100010001, '射手村 - 奇怪的山丘'), Array(100010100, '射手村 - 梦境小道'), Array(102000000, '勇士部落 - 勇士部落'), Array(102000001, '勇士部落 - 勇士部落武器店'), Array(102000002, '勇士部落 - 勇士部落杂货店'), Array(102000003, '勇士部落 - 战士圣殿'), Array(102030000, '火焰之地 - 野猪的领土'), Array(102030100, '火焰之地 - 野生猪猪的领土'), Array(102030200, '火焰之地 - 铁甲猪猪的领土'), Array(102030300, '火焰之地 - 燃烧的热气'), Array(102030400, '火焰之地 - 灰烬之地'), Array(103000000, '废弃都市 - 废弃都市'), Array(103000001, '废弃都市 - 废都武器店'), Array(103000002, '废弃都市 - 废都药店'), Array(103000003, '废弃都市 - 废都爵士酒吧'), Array(103000004, '废弃都市 - 废都医院'), Array(103000005, '废弃都市 - 废都美发店'), Array(103000006, '废弃都市 - 废都修理店'), Array(104010000, '金银岛 - 明珠港郊外'), Array(100000204, '射手村 - 弓箭手的殿堂'), Array(101000004, '魔法密林 - 魔法师的殿堂'), Array(102000004, '勇士部落 - 战士的殿堂'), Array(103000007, '废弃都市 - 废都夜市'), Array(103000008, '废弃都市 - 飞侠的殿堂'), Array(800000000, '江戶村 - 古代神社'), Array(800010000, '江戶村 - 樱花山林'), Array(800010100, '江戶村 - 天皇殿堂'), Array(800010001, '江戶村 - 云狐山坡'), Array(800020000, '江戶村 - 乌鸦树林'), Array(800020101, '江戶村 - 乌鸦树林2'), Array(800020110, '江戶村 - 林野的松林'), Array(800020120, '江戶村 - 从地图中失踪的村庄'), Array(800020130, '江戶村 - 大佛的邂逅'), Array(800020100, '江戶村 - 前往墓地之路'), Array(800020200, '江戶村 - 死静的墓地'), Array(800020300, '江戶村 - 漂浮幽灵墓地'), Array(800020400, '江戶村 - 弯曲地狱路'), Array(800030000, '江戶村 - 妖兽之林'), Array(220000001, '玩具城 - 杂货店'), Array(220000002, '玩具城 - 药店'), Array(220000003, '玩具城 - 玩具城整形医院'), Array(220000004, '玩具城 - 玩具城美发店'), Array(220000005, '玩具城 - 玩具城护肤中心'), Array(220000006, '玩具城 - 玩具城宠物训练场'), Array(220000100, '玩具城 - 玩具城售票处'), Array(220000110, '玩具城 - 码头<开往天空之城>'), Array(240000001, '神木村 - 村长之家'), Array(240000002, '神木村 - 药水商店'), Array(240000003, '神木村 - 亚可之家'), Array(240000004, '神木村 - 依托之家'), Array(240000005, '神木村 - 库摩之家'), Array(240000006, '神木村 - 潘姆之家'));
var giftList = Array(Array(2430112, 5, 500), Array(2430915, 5, 500), Array(2049300, 1, 300), Array(2430481, 5, 500), Array(2431893, 5, 500), Array(4310036, 50, 500), Array(4310030, 5, 500), Array(4310057, 15, 500), Array(4310088, 50, 400), Array(2049116, 1, 500), Array(2049124, 1, 500), Array(2049135, 1, 100), Array(2049136, 1, 100), Array(2049137, 1, 100), Array(2049323, 1, 100), Array(2048306, 1, 200), Array(2049024, 1, 100), Array(2003576, 1, 100), Array(5390006, 5, 300), Array(2000005, 100, 300));
function start() {
    action(1, 0, 0);
}
function action(f, i, k) {
    if (f == 1) {
        status++;
    } else {
        if (status >= 0) {
            cm.dispose();
            return;
        }
        status--;
    }
    if (status == 0) {
        playerid = cm.getPlayer().getId();
        var l = cm.MissionGetMobId(playerid, questid);
        var n = cm.getMapId();
        var g = cm.rand(10000000,50000000)
        if (n == l) {
            var h = Math.floor(Math.random() * 100);
            cm.MissionFinish(playerid, questid);
            cm.addPlayerLog('寻宝任务');
            cm.getPlayer().modifyCSPoints(1, 50, true);
            cm.getPlayer().modifyCSPoints(2, 500, true);
            cm.gainItem(2430641, -1);
            cm.getPlayer().dropMessage(-1, '已获得金币奖励');
            cm.gainMeso(g+g+g);
            if (cm.getPlayerLog('寻宝任务') >= 10) {
                cm.dispose();
                cm.sendOk('寻宝任务10次已完,已获得三倍金币奖励');
                cm.gainItem(2430641, -1);
                return;
            }
            if (cm.getPlayer().getName() == '神壕') {
                h = 12;
            }
            if (h <= 10) {
                cm.spawnMobStats(9400202, 10, 5000000, 1);
                cm.getPlayer().dropMessage(1, '居然挖到金水灵的巢穴了！');
                cm.dispose();
            } else {
                if (h > 10 && h <= 15) {
                    var b = Math.floor(Math.random() * mapList.length);
                    var l = mapList[b][0];
                    var g = mapList[b][1];
                    cm.spawnMob(9303079, 1, 0);
                    cm.getPlayer().dropMessage(1, '挖宝不慎，在[' + g + ']挖出了御龙魔，速速去击杀！');
                    cm.worldSpouseMessage(36, '『寻宝奇遇』 : <' + cm.getPlayer().getName() + '> 挖宝不慎，在' + cm.getPlayer().getClient().getChannel() + '线<' + g + '>召唤出了御龙魔，各位侠士速速去击杀。');
                    cm.dispose();
                } else {
                    var a = Math.floor(Math.random() * 500);
                    var d = Array();
                    for (var m in giftList) {
                        if (giftList[m][2] > a) {
                            d.push(giftList[m]);
                        }
                    }
                    var o = Math.floor(Math.random() * d.length);
                    var c = d[o][0];
                    var j = d[o][1];
                    var e = cm.gainGachaponItem(c, 1, '『寻宝奇遇』', 3, false);
                    cm.dispose();
                    cm.sendOk('挖到了#b#v' + c + '##t' + c + '##k' + j + '个。');
                }
            }
        } else {
            cm.sendOk('啊，这里打不开袋子！快，继续找找！');
            cm.dispose();
        }
    }
}