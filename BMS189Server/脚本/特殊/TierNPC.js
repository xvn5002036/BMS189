load('nashorn:mozilla_compat.js');
importPackage(Packages.client);
importPackage(Packages.server);
var status = 0, sel = 0, sel1 = 0;
var OPT_ = [
    'Hats',
    'Bow-tie',
    'Gloves',
    'Shoes',
    'Belt'
];
var reqs, prizes;
function start() {
    prizes = initPrizes();
    reqs = initReqs();
    cm.askMenu('Hello, i am the #btier item#k vendor. \r\nRight now, we only offer 2 available item category. More will be available really soon though！\r\n\r\n/chooseone #e#b\r\n\r\n#L0#Hats#l\r\n#L1#Bow-tie#l\r\n#L69#See requirement tree (advanced)#l\r\n#L70#See requirement tree (simple)#l');
}
function action(a, o, q) {
    if (a < 1) {
        cm.dispose();
    } else {
        if (status == 0) {
            var h = '';
            sel = q;
            if (q < 69) {
                h += '/chooseone\r\n\r\n#b#e';
                for (c = 0; c < prizes[q].length; c++) {
                    h += '#L' + c + '#Tier ' + c + ' : #t' + prizes[q][c][0] + '# #v' + prizes[q][c][0] + '##l\r\n';
                }
            } else {
                if (q == 69) {
                    h += 'This is the advanced requirement tree, it is faster to browse. If you do not understand it, please choose the simplified requirement tree instead, you may find it more suited to you.\r\n\r\n' + parseTree(true);
                } else {
                    h += 'Choose a category\r\n\r\n /chooseone \r\n\r\n' + parseSimpleTree(0, -1, -1);
                }
            }
            if (h.indexOf('#L') != -1) {
                cm.askMenu(h);
            } else {
                cm.sendOk(h);
                cm.dispose();
            }
        } else {
            if (status == 1) {
                var h = '';
                sel1 = q;
                if (sel < 70) {
                    var f = '';
                    for (c = 0; c < reqs[sel][sel1].length; c++) {
                        var l = cm.getPlayer().itemQuantity(reqs[sel][sel1][c][0]);
                        var n = reqs[sel][sel1][c][1];
                        var p = (l / n * 100).toFixed(2);
                        if (p > 100) {
                            p = 100;
                        }
                        f += '#b#v' + reqs[sel][sel1][c][0] + '# x' + reqs[sel][sel1][c][1] + ' #t' + reqs[sel][sel1][c][0] + '# #r(' + p + '%)\r\n';
                    }
                    h += 'Do you have the requirements for this item? May i remind you that these are what you need to obtain for this item:\r\n\r\n#e#b' + f;
                } else {
                    h += 'Choose a tier\r\n\r\n /chooseone \r\n\r\n' + parseSimpleTree(1, q, -1);
                }
                if (sel >= 70) {
                    cm.askMenu(h);
                } else {
                    cm.askYesNo(h);
                }
            } else {
                if (status == 2) {
                    var h = '';
                    var d = new Array();
                    if (sel < 70) {
                        for (c = 0; c < reqs[sel][sel1].length; c++) {
                            if (!cm.haveItem(reqs[sel][sel1][c][0], reqs[sel][sel1][c][1])) {
                                d.push(new Array(c, cm.getPlayer().itemQuantity(reqs[sel][sel1][c][0])));
                            }
                        }
                        if (d.length > 0) {
                            h += 'HEY！You are missing the following requirement ' + (d.length > 1 ? 's' : '') + '\r\n\r\n#e#b';
                            d.sort(sortMissingRequirements);
                            for (j = 0; j < d.length; j++) {
                                var g = reqs[sel][sel1][d[j][0]][0];
                                var b = d[j][1];
                                var n = reqs[sel][sel1][d[j][0]][1];
                                var p = (b / n * 100).toFixed(2);
                                h += '#v' + g + '##t' + g + '# (' + b + ' / ' + n + ', #r' + p + '% #B' + (b / n * 100).toFixed(0) + '##b)\r\n';
                            }
                        } else {
                            h += 'Congratulation on your #r#etier ' + (sel1 + 1) + ' ' + OPT_[sel] + ' #k#n!';
                            for (c = 0; c < reqs[sel][sel1].length; c++) {
                                cm.gainItem(reqs[sel][sel1][c][0], -reqs[sel][sel1][c][1]);
                            }
                            var c = MapleItemInformationProvider.getInstance().getEquipById(prizes[sel][sel1][0]);
                            c.setStr(prizes[sel][sel1][1]);
                            c.setDex(prizes[sel][sel1][1]);
                            c.setInt(prizes[sel][sel1][1]);
                            c.setLuk(prizes[sel][sel1][1]);
                            c.setWatk(prizes[sel][sel1][2]);
                            MapleInventoryManipulator.addFromDrop(cm.getClient(), c, true);
                        }
                    } else {
                        h += 'Here are the requirements for the following item: \r\n#b#t' + prizes[sel1][q][0] + '# #v' + prizes[sel1][q][0] + '# #r#e(tier ' + (q + 1) + ')#k#n \r\n' + parseSimpleTree(2, sel1, q);
                    }
                    cm.sendOk(h);
                } else {
                    cm.dispose();
                }
            }
        }
    }
    status++;
}
function sortMissingRequirements(a, d) {
    var c = a[1] / reqs[sel][sel1][a[0]][1] * 100;
    var b = d[1] / reqs[sel][sel1][d[0]][1] * 100;
    return b - c;
}
function parseTree(a) {
    var b = '';
    for (i = 0; i < reqs.length; i++) {
        b += '#e#bCategory ' + i + ': ' + OPT_[i] + '#k#n\r\n';
        for (j = 0; j < reqs[i].length; j++) {
            b += '                    #e#rTier ' + (j + 1) + ': ' + (a ? '#v' : '') + prizes[i][j][0] + (a ? '#' : '') + '#k#n\r\n';
            if (a) {
                b += '                                #dRequirements:#k \r\n';
            }
            for (k = 0; k < reqs[i][j].length; k++) {
                b += '                                 ' + (a ? '                ' : '') + (a ? '#v' : '') + reqs[i][j][k][0] + (a ? '#' : '') + ', ' + reqs[i][j][k][1] + '\r\n';
            }
        }
        b += '\r\n\r\n\r\n';
    }
    return b;
}
function parseSimpleTree(d, a, g) {
    var f = '';
    if (d == 0) {
        for (i = 0; i < prizes.length; i++) {
            f += '#b#e#L' + i + '# ' + OPT_[i] + '#l\r\n';
        }
    } else {
        if (d == 1) {
            var b = reqs[a];
            for (i = 0; i < b.length; i++) {
                f += '#b#e#L' + i + '#Tier ' + (i + 1) + ' #v' + prizes[a][i][0] + '##l\r\n';
            }
        } else {
            if (d == 2) {
                var c = reqs[a][g];
                for (i = 0; i < c.length; i++) {
                    f += '\r\n#b#e#v' + c[i][0] + '# x' + c[i][1] + ' - #t' + c[i][0] + '#';
                }
            }
        }
    }
    return f;
}
function initPrizes() {
    var c = new Array();
    var b = new Array();
    b.push(new Array(1002020, 222, 22));
    b.push(new Array(1002500, 888, 50));
    b.push(new Array(1002512, 1111, 69));
    b.push(new Array(1002603, 4000, 100));
    b.push(new Array(1002553, 15000, 127));
    c.push(b);
    var a = new Array();
    a.push(new Array(1122006, 127, 8));
    a.push(new Array(1122002, 255, 16));
    a.push(new Array(1122005, 512, 32));
    a.push(new Array(1122004, 1024, 64));
    a.push(new Array(1122003, 32767, 128));
    c.push(a);
    return c;
}
function initReqs() {
    var b = new Array();
    var c = new Array();
    for (i = 0; i < 5; i++) {
        c.push(new Array());
    }
    b.push(c);
    var a = new Array();
    for (i = 0; i < 5; i++) {
        a.push(new Array());
    }
    b.push(a);
    c[0].push(new Array(4000353, 60));
    c[1].push(new Array(prizes[0][0][0], 1));
    c[1].push(new Array(4000353, 120));
    c[1].push(new Array(4000268, 150));
    c[2].push(new Array(prizes[0][1][0], 1));
    c[2].push(new Array(4000353, 130));
    c[2].push(new Array(4000282, 150));
    c[2].push(new Array(4000440, 200));
    c[3].push(new Array(prizes[0][2][0], 1));
    c[3].push(new Array(4000353, 140));
    c[3].push(new Array(4000086, 200));
    c[3].push(new Array(4000087, 200));
    c[3].push(new Array(4000069, 100));
    c[4].push(new Array(prizes[0][3][0], 1));
    c[4].push(new Array(4000353, 150));
    c[4].push(new Array(4000082, 50));
    c[4].push(new Array(4000121, 120));
    c[4].push(new Array(4000134, 200));
    c[4].push(new Array(4000151, 10));
    c[4].push(new Array(4000152, 10));
    a[0].push(new Array(4000353, 100));
    a[0].push(new Array(4001129, 25));
    a[1].push(new Array(prizes[1][0][0], 1));
    a[1].push(new Array(4000353, 127));
    a[1].push(new Array(4000099, 300));
    a[2].push(new Array(prizes[1][1][0], 1));
    a[2].push(new Array(4000353, 255));
    a[2].push(new Array(4000103, 250));
    a[2].push(new Array(4000106, 250));
    a[3].push(new Array(prizes[1][2][0], 1));
    a[3].push(new Array(4000353, 512));
    a[3].push(new Array(4031871, 250));
    a[3].push(new Array(4031902, 25));
    a[3].push(new Array(4031905, 10));
    a[4].push(new Array(prizes[1][3][0], 1));
    a[4].push(new Array(4000353, 512));
    a[4].push(new Array(4000313, 5));
    a[4].push(new Array(4000329, 200));
    a[4].push(new Array(4000269, 400));
    a[4].push(new Array(4000270, 400));
    return b;
}