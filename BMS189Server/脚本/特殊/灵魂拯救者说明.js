var status = -1;
var selectionLog = [];
function start() {
    action(1, 0, 0);
}
function action(d, c, b) {
    if (status == 0 && d == 0) {
        cm.dispose();
        return;
    }
    d == 1 ? status++ : status--;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose();
    } else {
        if (status === a++) {
            cm.askMenu('你想知道什么？\r\n#L0# #e灵魂拯救者规则#n#l\r\n#L1# #e灵魂拯救者奖励#n#l\r\n#L2# #e每日任务快速执行#n#l\r\n#L3# #e什么是加油！奖励灵魂币？#n#l\r\n#L100# #e不听说明。#n#l', 0, 3003323);
        } else {
            if (status > 0) {
                switch (selectionLog[1]) {
                case 0:
                    灵魂拯救者规则(d, c, b, a);
                    break;
                case 1:
                    灵魂拯救者奖励(d, c, b, a);
                    break;
                case 2:
                    每日任务快速执行(d, c, b, a);
                    break;
                case 3:
                    什么是加油(d, c, b, a);
                    break;
                case 100:
                    cm.dispose();
                    cm.openNpc(3003323);
                    break;
                default:
                    cm.dispose();
                }
            } else {
                cm.dispose();
            }
        }
    }
}
function 灵魂拯救者规则(d, c, b, a) {
    if (status === a++) {
        cm.sendNormalTalk('#e<灵魂拯救者规则>#n\r\n\r\n#e一定要在限时结束前/防御力见底前#n尽力解救更多的#b#e被束缚的石精灵#n#k！\r\n救出#b#e被束缚的石精灵#n#k后，#r#e点击采集/NPC对话键#n#k，就可以带走他们了！', 0, 3003323, false, true);
    } else {
        if (status === a++) {
            cm.sendNormalTalk('#e<灵魂拯救者规则>#n\r\n\r\n你可以带走#b#e最多5只#n#k石精灵！\r\n只要把他们#b#e平安带到最初的解救地点，就能获得#n#k\r\n#e“解救分数”#n！\r\n#b#e一次解救的石精灵越多，#n#k获得的分数就越高！\r\n\r\n#e1只-200分\r\n2只-500分\r\n3只-1000分\r\n4只-1500分\r\n5只-2500分#n', 0, 3003323, true, true);
        } else {
            if (status === a++) {
                cm.sendNormalTalk('#e<灵魂拯救者规则>#n\r\n\r\n不过，那些#r#e坏精灵#n#k可不会让你轻易带走我的朋友。\r\n每过一定时间，地图上就会出现来回走动的#r#e精灵碎片#n#k。万一被这些家伙攻击到，就会损耗你的#b#e防御力#n#k。', 0, 3003323, true, true);
            } else {
                if (status === a++) {
                    cm.sendNormalTalk('#e<灵魂拯救者规则>#n\r\n\r\n此外，一旦你救出我的朋友，#r#e剧毒精灵#n#k就会开始追击你了！\r\n救出的朋友越多，#r#e剧毒精灵#n#k的#e体型就会越来越大，速度也越来越快。#n一旦被这家伙攻击，你就会丧失大量的防御力，原本带着的石精灵也会全部消失……千万要小心才行！', 0, 3003323, true, true);
                    status = -1;
                }
            }
        }
    }
}
function 灵魂拯救者奖励(d, c, b, a) {
    if (status === a++) {
        cm.sendNormalTalk('#e<灵魂拯救者奖励>#n\r\n\r\n通过解救石精灵获得#b#e解救分数#n#k，每#e1000分#n可以获得1个#b#i4310235:##t4310235##k。', 0, 3003323, false, true);
    } else {
        if (status === a++) {
            cm.sendNormalTalk('#e<灵魂拯救者奖励>#n\r\n\r\n你可以在我这里用#b3个#i4310235:##t4310235##k交换#r1个#i1712004##t1712004#&#i2614029##t2614029##k。', 0, 3003323, true, true);
        } else {
            if (status === a++) {
                cm.sendNormalTalk('#e<灵魂拯救者奖励>#n\r\n\r\n#b#e每天可以进行3次#n#k挑战，#r#e最多可以获得30个币#n#k。好，那我的朋友就拜托你啦！', 0, 3003323, true, true);
                status = -1;
            }
        }
    }
}
function 每日任务快速执行(d, c, b, a) {
    if (status === a++) {
        cm.sendNormalTalk('可以执行神秘河地区的每日任务时，为了可以更轻松地完成#e<灵魂拯救者>#n任务，每天提供#b#e立即完成<灵魂拯救者>#n#k的机会。使用#e立即完成#n#k功能，可以以今天我达到的最高纪录为基准立即完成任务。但经验值奖励及成就相关内容不会被记录下来，这一点一定要记住！\r\n#r*立即完成时，无法获得加油奖励纪念币。#k\r\n\r\n\r\n#e#b今天可以<灵魂拯救者>立即完成的次数 (0/1)#n#k\r\n 莫拉斯地区：#r#e每日任务可以执行#n#k\r\n 埃斯佩拉地区：#e#k每日任务无法执行#n#k', 0, 3003323, false, false);
        status = -1;
    }
}
function 什么是加油(d, c, b, a) {
    if (status === a++) {
        cm.sendNormalTalk('#e<灵魂拯救者奖励>#n\r\n每天挑战3次获得的灵魂币总数在1个以上9个以下时，根据获得总数发放数量不等#b#e加油！奖励灵魂币#n#k作为安慰，所以一定不要放弃！', 0, 3003323, false, true);
        status = -1;
    }
}