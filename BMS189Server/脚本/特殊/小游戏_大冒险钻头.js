var open = true;
var eventname = [
    '小游戏_大冒险钻头',
    '小游戏_大冒险钻头_练习'
];
var startmap = 993080000;
var minLevel = [0];
var maxLevel = [999];
var maxenter = [
    10,
    999
];
var interval = [
    10,
    999
];
var status = -1;
var selectionLog = [];
var minPlayers = 1;
var maxPlayers = 1;
var moblevel = 255;
function start() {
    status = -1;
    action(1, 0, 0);
}
function action(f, c, b) {
    if (status == 0 && f == 0) {
        cm.dispose();
        return;
    }
    if (cm.getMapId() != startmap) {
        cm.warp(startmap, 0);
        cm.dispose();
        return;
    }
    var d = cm.getInfoQuest(100188);
    if (d == null || d.indexOf('start') < 0) {
        cm.sendOkS('先听取一下#b保罗的说明#k吧。');
        cm.dispose();
        return;
    }
    status++;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose();
    } else {
        if (status === a++) {
            var e = '做好开始#e<大冒险钻头>#n的准备了吗？\r\n\r\n';
            e += '#L0#进入#e<大冒险钻头>#n实战模式#l\r\n\r\n已进行 ' + cm.getPQLog(eventname[0]) + '#k#e/' + maxenter[0] + '#k#n 次	' + getBusyState(1) + '\r\n';
            e += '#L1#进入#e<大冒险钻头>#n练习模式#l\r\n\r\n已进行 ' + cm.getPQLog(eventname[1]) + '#k#e/' + maxenter[1] + '#k#n 次	' + getBusyState(2) + '\r\n';
            e += '#L2#听一下#e<大冒险钻头>#n的说明#l\r\n';
            cm.askMenu(e, 9062147);
        } else {
            if (status > 0) {
                if (selectionLog[1] == 2) {
                    startIntro(f, c, b, a);
                } else {
                    startEvent();
                }
            } else {
                cm.dispose();
            }
        }
    }
}
function getBusyState(a) {
    var b = cm.getEventManager(eventname[a - 1]);
    var c = b.getNumberProperty('state');
    return c == 0 ? '#r副本空闲#k' : '#b已经开启#k';
}
function startEvent() {
    var a = cm.getEventManager(eventname[selectionLog[1]]);
    if (a == null || open == false) {
        cm.sendOk('配置文件不存在,请联系管理员。', 9062147);
    } else {
        if (cm.getPQLog(eventname[selectionLog[1]]) >= maxenter[selectionLog[1]]) {
            cm.sendOk('你今天挑战次数已经用完了,请明天在来吧!');
        } else {
            var b = a.getNumberProperty('state');
            if (b == 0) {
                cm.setPQLog(eventname[selectionLog[1]]);
                a.startInstance(cm.getPlayer());
            } else {
                cm.askMenu('已经有人在挑战了，请换其他频道尝试。', 9062147);
            }
        }
    }
    cm.dispose();
}
function startIntro(d, c, b, a) {
    if (status === a++) {
        cm.sendNextPrev('#b#e<大冒险钻头>#k#n是在1分钟内消灭掉尽可能多的#e稻草人怪物#n的任务。', 9062147);
    } else {
        if (status === a++) {
            cm.sendNextPrev('在总共10个踏板上配置有4种不同的稻草人怪物。', 9062147);
        } else {
            if (status === a++) {
                cm.sendNextPrev('#b#e<普通稻草人>#k#n\r\n\r\n#fMob/9833338.img/stand/0#\r\n第一种是#e普通稻草人#n。没什么特别之处。', 9062147);
            } else {
                if (status === a++) {
                    cm.sendNextPrev('#b#e<温莉稻草人>#k#n\r\n\r\n#fMob/9833348.img/stand/0#\r\n第二种是#e温莉稻草人#n。\r\n和普通稻草人相比，拥有更高的#e防御率#n。', 9062147);
                } else {
                    if (status === a++) {
                        cm.sendNextPrev('#b#e<甘迪稻草人>#k#n\r\n\r\n#fMob/9833358.img/stand/0#\r\n第三种是#e甘迪稻草人#n。\r\n和普通稻草人相比，拥有#e更高的体力和BOSS怪物属性#n。', 9062147);
                    } else {
                        if (status === a++) {
                            cm.sendNextPrev('#b#e<萧公稻草人>#k#n\r\n\r\n#fMob/9833368.img/stand/0#\r\n第四种是#e萧公稻草人#n。\r\n越往上走，#e等级#n会逐渐升高。', 9062147);
                        } else {
                            if (status === a++) {
                                cm.sendNextPrev('当然，越往上，各种稻草人的体力和能力就越高。', 9062147);
                            } else {
                                if (status === a++) {
                                    cm.sendNextPrev('根据在1分钟内消灭掉的稻草人数量，可以获得如下#b#e大冒险币#k#n。', 9062147);
                                } else {
                                    if (status === a++) {
                                        cm.sendNextPrev('\r\n#e- 1～4个：大冒险币10个\r\n- 5～8个：大冒险币20个\r\n- 9～12个：大冒险币30个\r\n- 13～16个：大冒险币40个\r\n- 17～20个：大冒险币50个\r\n- 21～24个：大冒险币60个\r\n- 25～28个：大冒险币70个\r\n- 29～32个：大冒险币80个\r\n- 33～36个：大冒险币90个\r\n- 37～40个：大冒险币100个#n', 9062147);
                                    } else {
                                        if (status === a++) {
                                            cm.sendNextPrev('通过#b#e<大冒险钻头>#k#n获得的大冒险币不包含在每日限制量中，#r#e每个世界每天只能领取一次#k#n。这一点请一定要记住。', 9062147);
                                        } else {
                                            if (status === a++) {
                                                cm.sendNextPrev('此外，如果对结果不满意，随时可以#e放弃获得奖励#n，#e重新进行挑战#n。', 9062147);
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNextPrev('只有强大的战士才有资格体验新的冒险！', 9062147);
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNextPrev('去吧！#b#h0##k！\r\n征服#e#b<大冒险钻头>#k#n，然后回来！', 9062147);
                                                    } else {
                                                        if (status == a++) {
                                                            cm.updateInfoQuest(100188, 'start');
                                                            cm.dispose();
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}