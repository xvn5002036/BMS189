var status = 0;
var beauty = 0;
var facenew;
var colors;
var hairnew;
var haircolor;
var skin = Array(1, 2, 3, 4, 9, 10, 11);
function start() {
    status = -1;
    action(1, 0, 0);
    fhair = Array(34000, 34010, 34040, 34050, 34060, 34070, 34080, 34090, 34100, 34110, 34120, 34130, 34140, 34150, 34160, 34170, 34180, 34190, 34200, 34210, 34220, 34230, 34240, 34250, 34260, 34270, 34280, 34290, 34300, 34310, 34320, 34330, 34340, 34350, 34360, 34370, 34380, 34400, 34410, 34420, 34430, 34440, 34450, 34470, 34480, 34490, 34510, 34540, 34560, 34590, 34600, 34610, 34620, 34630, 34640, 34650, 34660, 34670, 34680, 34690, 34700, 34710, 34720, 34730, 34740, 34750, 34760, 34770, 34790, 34800, 34830, 34860, 34870, 34880, 34890, 34900, 34910, 34990);
    mhair = Array(33000, 33030, 33040, 33050, 33060, 33070, 33080, 33090, 33100, 33110, 33120, 33130, 33140, 33150, 33160, 33170, 33180, 33190, 33200, 33210, 33220, 33230, 33240, 33250, 33260, 33270, 33280, 33290, 33300, 33310, 33320, 33330, 33340, 33350, 33360, 33370, 33380, 33390, 33400, 33410, 33430, 33440, 33450, 33460, 33470, 33480, 33500, 33510, 33520, 33530, 33540, 33550, 33580, 33590, 33600, 33610, 33620, 33630, 33640, 33650, 33660, 33670, 33680, 33690, 33700, 33710, 33720, 33730, 33740, 33750, 33760, 33770, 33800, 33810, 33960, 33970, 33980, 33990);
    fface = Array(21000, 21001, 21002, 21003, 21004, 21005, 21006, 21007, 21008, 21009, 21010, 21011, 21012, 21013, 21014, 21015, 21016, 21017, 21018, 21019, 21020, 21021, 21022, 21023, 21024, 21025, 21026, 21027, 21028, 21029, 21030, 21031, 21033, 21034, 21035, 21036, 21038, 21041, 21042, 21043, 21044, 21045, 21046, 21047, 21048, 21049, 21050, 21052, 21053, 21054, 21055, 21056, 21057, 21058);
    mface = Array(20000, 20001, 20002, 20003, 20004, 20005, 20006, 20007, 20008, 20009, 20010, 20011, 20012, 20013, 20014, 20015, 20016, 20017, 20018, 20019, 20020, 20021, 20022, 20023, 20024, 20025, 20026, 20027, 20028, 20029, 20030, 20031, 20032, 20033, 20035, 20036, 20037, 20038, 20040, 20043, 20044, 20045, 20046, 20047, 20048, 20049, 20050, 20051, 20052, 20053, 20055, 20056, 20057, 20058, 20059, 20060, 20061);
}
function action(e, c, b) {
    if (e == 0) {
        cm.dispose();
        return;
    } else {
        if (e == 1) {
            status++;
        } else {
            status--;
        }
    }
    switch (status) {
    case 0:
        if (cm.getPlayer().getAndroid() != null) {
            cm.askMenu('您好！我是智能机器人化妆师仙姬。您想重新装扮自己的机器人？那您就找对人了！我可以为您的智能机器人更换一切！\r\n#b#L0#护肤（机器人）#l\r\n#L1#美发（机器人）#l\r\n#b#L2#染发（机器人）#l\r\n#L3#整形（机器人）#l\r\n#L4#美瞳（机器人）#l');
        } else {
            cm.sendOk('没有智能机器人的话，我什么都做不了。您能带着智能机器人一起来吗？');
            cm.dispose();
        }
        break;
    case 1:
        if (cm.getAndroidStat('GENDER') == 0) {
            if (b == 0) {
                beauty = 1;
                cm.askAndroid('我可以帮您的安卓换成全新的肤色。您厌倦了现在的安卓肤色了吗？如果您有#b#t5153015##k，我就可以帮您的安卓更换肤色。怎么样？慢慢挑选一下您喜欢的肤色吧！', skin, 5153015);
            } else {
                if (b == 1) {
                    beauty = 2;
                    hairnew = Array();
                    for (var a = 0; a < mhair.length; a++) {
                        if (mhair[a] == 30010 || mhair[a] == 30070 || mhair[a] == 30080 || mhair[a] == 30090 || mhair[a] == 33140 || mhair[a] == 33240 || mhair[a] == 33180) {
                            hairnew.push(mhair[a]);
                        } else {
                            hairnew.push(mhair[a] + parseInt(cm.getPlayer().getAndroid().getHair() % 10));
                        }
                    }
                    cm.askAndroid('我可以帮您的安卓换成全新的发型。您厌倦了现在的安卓发型了吗？如果您有#b#t5150052##k，我就可以帮您的安卓更换发型。怎么样？慢慢挑选一下您喜欢的发型吧！', hairnew, 5150052);
                } else {
                    if (b == 2) {
                        beauty = 3;
                        haircolor = Array();
                        var d = parseInt(cm.getPlayer().getAndroid().getHair() / 10) * 10;
                        if (d == 30010 || d == 30070 || d == 30080 || d == 30090 || d == 33140 || d == 33240) {
                            haircolor.push(d);
                        } else {
                            for (var a = 0; a < 8; a++) {
                                haircolor.push(d + a);
                            }
                        }
                        cm.askAndroid('我们可以给您的安卓改变头发的颜色。是不是已经厌倦了安卓头发的颜色啊？如果您有#b#t5151036##k，我就可以给您安卓染发。怎么样？慢慢挑选一下您喜欢的颜色吧！', haircolor, 5151036);
                    } else {
                        if (b == 3) {
                            beauty = 4;
                            facenew = Array();
                            for (var a = 0; a < mface.length; a++) {
                                if (mface[a] == 20015 || mface[a] == 20025 || mface[a] == 20027 || mface[a] == 20029 || mface[a] == 20030 || mface[a] == 20031 || mface[a] == 20032 || mface[a] == 20056 || mface[a] == 20055 || mface[a] == 20048 || mface[a] == 20049) {
                                    facenew.push(mface[a]);
                                } else {
                                    facenew.push(mface[a] + cm.getPlayer().getAndroid().getFace() % 1000 - cm.getPlayer().getAndroid().getFace() % 100);
                                }
                            }
                            cm.askAndroid('我们可以给您的安卓整形，不想让您的安卓面容变一变吗？如果您有#b#t5152057##k，我就可以给您的安卓整形。怎么样？慢慢挑选一下您想要的面容吧！', facenew, 5152057);
                        } else {
                            if (b == 4) {
                                beauty = 5;
                                var d = cm.getPlayer().getAndroid().getFace() % 100 + 20000;
                                colors = Array();
                                if (d == 20015 || d == 20025 || d == 20027 || d == 20029 || d == 20030 || d == 20031 || d == 20032 || d == 20056 || d == 20055 || d == 20048 || d == 20049) {
                                    colors = Array(d, d + 100, d + 200, d + 300, d + 400, d + 500, d + 600, d + 700);
                                } else {
                                    colors = Array(d, d + 100, d + 200, d + 300, d + 400, d + 500, d + 600, d + 700, d + 800);
                                }
                                cm.askAndroid('我们可以给您的安卓换个美瞳，不想让您的安卓美瞳变一变吗？如果您有#b#t5152057##k，我就可以给您的安卓换个美瞳。怎么样？慢慢挑选一下您想要的美瞳吧！', colors, 5152057);
                            }
                        }
                    }
                }
            }
        } else {
            if (b == 0) {
                beauty = 1;
                cm.askAndroid('我可以帮您的安卓换成全新的肤色。您厌倦了现在的安卓肤色了吗？如果您有#b#t5153015##k，我就可以帮您的安卓更换肤色。怎么样？慢慢挑选一下您喜欢的肤色吧！', skin, 5153015);
            } else {
                if (b == 1) {
                    beauty = 2;
                    hairnew = Array();
                    for (var a = 0; a < fhair.length; a++) {
                        if (fhair[a] == 34160) {
                            hairnew.push(fhair[a]);
                        } else {
                            hairnew.push(fhair[a] + parseInt(cm.getPlayer().getAndroid().getHair() % 10));
                        }
                    }
                    cm.askAndroid('我可以帮您的安卓换成全新的发型。您厌倦了现在的安卓发型了吗？如果您有#b#t5150052##k，我就可以帮您的安卓更换发型。怎么样？慢慢挑选一下您喜欢的发型吧！', hairnew, 5150052);
                } else {
                    if (b == 2) {
                        beauty = 3;
                        haircolor = Array();
                        var d = parseInt(cm.getPlayer().getAndroid().getHair() / 10) * 10;
                        if (d == 34160) {
                            haircolor.push(d);
                        } else {
                            for (var a = 0; a < 8; a++) {
                                haircolor.push(d + a);
                            }
                        }
                        cm.askAndroid('我们可以给您的安卓改变头发的颜色。是不是已经厌倦了安卓头发的颜色啊？如果您有#b#t5151036##k，我就可以给您安卓染发。怎么样？慢慢挑选一下您喜欢的颜色吧！', haircolor, 5151036);
                    } else {
                        if (b == 3) {
                            beauty = 4;
                            facenew = Array();
                            for (var a = 0; a < fface.length; a++) {
                                if (fface[a] == 21027 || fface[a] == 21028 || fface[a] == 21029 || fface[a] == 21030 || fface[a] == 21031 || fface[a] == 21053 || fface[a] == 21054 || fface[a] == 21046 || fface[a] == 21047) {
                                    facenew.push(fface[a]);
                                } else {
                                    facenew.push(fface[a] + cm.getPlayer().getAndroid().getFace() % 1000 - cm.getPlayer().getAndroid().getFace() % 100);
                                }
                            }
                            cm.askAndroid('我们可以给您的安卓整形，不想让您的安卓面容变一变吗？如果您有#b#t5152057##k，我就可以给您的安卓整形。怎么样？慢慢挑选一下您想要的面容吧！', facenew, 5152057);
                        } else {
                            if (b == 4) {
                                beauty = 5;
                                var d = cm.getPlayer().getAndroid().getFace() % 100 + 21000;
                                colors = Array();
                                if (d == 21027 || d == 21028 || d == 21029 || d == 21030 || d == 21031 || d == 21053 || d == 21054 || d == 21046 || d == 21047) {
                                    colors = Array(d, d + 100, d + 200, d + 300, d + 400, d + 500, d + 600, d + 700);
                                } else {
                                    colors = Array(d, d + 100, d + 200, d + 300, d + 400, d + 500, d + 600, d + 700, d + 800);
                                }
                                cm.askAndroid('我们可以给您的安卓换个美瞳，不想让您的安卓美瞳变一变吗？如果您有#b#t5152057##k，我就可以给您的安卓换个美瞳。怎么样？慢慢挑选一下您想要的美瞳吧！', colors, 5152057);
                            }
                        }
                    }
                }
            }
        }
        break;
    case 2:
        if (cm.getPlayer().getAndroid() == null) {
            cm.sendOk('您没有智能机器人，我帮不上什么忙。您把智能机器人一起带来吧？');
        } else {
            if (beauty == 1) {
                if (cm.setAndroid(5153015, skin[b]) == 1) {
                    cm.sendOk('好了，看看您安卓的新肤色吧！');
                } else {
                    cm.sendOk('嗯……您好像没有#b#t5153015##k啊？不好意思，没有会员卡的话，我不能帮您的安卓护肤。');
                }
            } else {
                if (beauty == 2) {
                    if (cm.setAndroid(5150052, hairnew[b]) == 1) {
                        cm.playerMessage(1, '好了，看看您安卓的新发型吧！');
                    } else {
                        cm.sendOk('嗯……您好像没有#b#t5150052##k啊？不好意思，没有会员卡的话，我不能帮您的安卓理发。');
                    }
                } else {
                    if (beauty == 3) {
                        if (cm.setAndroid(5151036, haircolor[b]) == 1) {
                            cm.playerMessage(1, '好了，看看您安卓的新发色吧！');
                        } else {
                            cm.sendOk('嗯……您好像没有#b#t5151036##k啊？不好意思，没有会员卡的话，我不能帮您的安卓染发。');
                        }
                    } else {
                        if (beauty == 4) {
                            if (cm.setAndroid(5152057, facenew[b]) == 1) {
                                cm.sendOk('好了，看看您安卓的新面容吧！');
                            } else {
                                cm.sendOk('嗯……您好像没有#b#t5152057##k啊？不好意思，没有会员卡的话，我不能帮您的安卓整形');
                            }
                        } else {
                            if (beauty == 5) {
                                if (cm.setAndroid(5152057, colors[b]) == 1) {
                                    cm.playerMessage(1, '好了，看看您安卓的新美瞳吧！');
                                } else {
                                    cm.sendOk('嗯……您好像没有#b#t5152057##k啊？不好意思，没有会员卡的话，我不能帮您的安卓美瞳。');
                                }
                            }
                        }
                    }
                }
            }
        }
        cm.dispose();
        break;
    default:
        cm.dispose();
        break;
    }
}