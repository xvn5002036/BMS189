var status = -1;
var buynum = 0;
var text, selects;
var selectionLog = [];
function start() {
    action(1, 0, 0);
}
function action(c, f, h) {
    var g = cm.getConstantScriptContent('菜单_NPC立绘');
    var d = Math.floor(Math.random() * g.length);
    var a = g[d][0];
    var e = randomNum(0, g[d][1]);
    if (status <= 0 && c == 0) {
        cm.dispose();
        cm.openNpc(0, '拍卖菜单_至尊版');
        return;
    }
    if (status >= 0 && c == 0) {
        cm.dispose();
        cm.openNpc(0, '杂货店_至尊版');
        return;
    }
    if (cm.getzhizunvip() != 2) {
        cm.dispose();
        cm.playerMessage(1, '该菜单是至尊版专享。');
        return;
    }
    c == 1 ? status++ : status--;
    selectionLog[status] = h;
    var b = -1;
    if (status <= b++) {
        cm.dispose();
        cm.openNpc(0, '拍卖菜单_至尊版');
    } else {
        if (status === b++) {
            var k = '#fn方正粗黑宋简体#';
            k += ' #fs16##r#face' + e + '#欢迎光临 ' + cm.getServerName() + ' 金币商店：#k\r\n#b#fs14#';
            k += ' #L0#新版杂货店#l \r\n';
            k += ' #L1#旧版杂货店#l \r\n';
            cm.askMenu_Bottom(k, 204, a);
        } else {
            if (status === b++) {
                if (h == 0) {
                    cm.dispose();
                    cm.openShop(1011100);
                } else {
                    if (h == 1) {
                        cm.dispose();
                        cm.openShop(1012123);
                    } else {
                        cm.dispose();
                    }
                }
            } else {
                if (status === b++) {
                    buynum = h;
                    cm.askYesNo_Bottom('\r\n#fn方正粗黑宋简体# #face' + e + '##r-#k   #v' + itemlist[selects][0] + '# #r#z' + itemlist[selects][0] + '##k  #r/#k  数量 #b[' + buynum + ']#k 个\r\n #r-#k   你将使用掉 #r' + buynum * itemlist[selects][1] + '#k 金币。', a);
                } else {
                    if (status === b++) {
                        var j = cm.getItemInfo();
                        if (cm.getPlayer().getMeso() >= buynum * itemlist[selects][1]) {
                            cm.gainMeso(-buynum * itemlist[selects][1]);
                            cm.gainItem(itemlist[selects][0], buynum, 99);
                            cm.effect_NormalSpeechBalloon('购买成功了!', 1, 0, 0, 3000, 0, 0);
                            cm.playerMessage(-1, ' 获得道具：  ' + cm.getItemName(itemlist[selects][0]) + ' x' + buynum + ' ');
                            cm.dispose();
                            cm.emotion(2, 1800);
                        } else {
                            cm.sendOk_Bottom('\r\n #face' + e + '#你好像没有足够的金币阿~!等你有了钱再来阿~!喵~!!', a);
                            cm.dispose();
                        }
                    }
                }
            }
        }
    }
}
function 字符填充(f) {
    var b = 4;
    var h = f.length;
    var g = h;
    for (var e = 0; e < h; e++) {
        if (f.charCodeAt(e) < 0 || f.charCodeAt(e) > 255) {
            g++;
        }
    }
    var a = b - g / 2;
    for (var c = 0; c < a; c++) {
        text += '　';
    }
}
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