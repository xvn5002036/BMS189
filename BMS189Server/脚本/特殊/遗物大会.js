var status = -1;
var selectionLog = [];
function start() {
    action(1, 0, 0);
}
function action(e, c, b) {
    if (status == 0 && e == 0) {
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
            var d = '';
            d += '#L1##b[遗物大会] 遗物发掘大会公告#l\r\n';
            d += '#L2##b[接收遗物大会任务]#l\r\n';
            d += '#L3##b[查看奖励]#l\r\n';
            cm.askMenu(d);
        } else {
            if (status > 0) {
                switch (selectionLog[1]) {
                case 1:
                    遗物发掘大会公告(e, c, b, a);
                    break;
                case 2:
                    接收遗物大会任务(e, c, b, a);
                    break;
                case 3:
                    奖励(e, c, b, a);
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
function 奖励(d, c, b, a) {
    if (status === a++) {
        cm.sendNext('查看完遗物发掘大会公告，且遗物发掘分数达到#b1000#k分时，即可认证今天已参加发掘大会。\r\n发掘大会#b#e#R12409##n#k日参加\r\n#e遗物发掘大会 参加商品;#n\r\n#e·第1日#n\n   #i1142406：# #t1142406#\r\n#e·第2日#n\n   #i2001505：# #t2001505#（200个）\r\n#e·第3日#n\n   #i2028076# #t2028076#\r\n#e·第4日#n\n   #i2046227# #t2046227#\n   #i2046228：# #t2046228#\n   #i2046318# #t2046318#\n   #i2046319# #t2046319#  选择其一\r\n#e·第5日#n\n   #i1012316：# #t1012316#\r\n#e·第6日#n\n   #i01003527：# #t01003527# \r\n#e·第7日#n\n   #i1022138# #t1022138#\r\n#e·第8日#n\n   #i1012316：# #t1012316# \n   #i1003527：# #t1003527# \n    #i1022138# #t1022138# 选择其一');
    } else {
        if (status === a++) {
            cm.dispose();
        } else {
            cm.dispose();
        }
    }
}
function 遗物发掘大会公告(d, c, b, a) {
    if (status === a++) {
        cm.sendNext('遗物发掘大会的公告发布了！去确认下内容吧。\r\n遗物发掘大会公告\r\n下面介绍一下休彼德蔓奇怪的发掘大会。获得从怪物身上得到的#b#t2430010##k后，可获得遗物发掘分数。一天之内获得遗物发掘分数#b1000分#k以上时，即可认证已参加过遗物发掘大会。参加被认证后，每天都可以领取商品奖励。\r\n未知的遗物中有一定几率发现#b丢失的挖掘道具#k#r。\r\n 未知的遗物中还有一定几率召唤遗物守护者登场。击败遗物守护者后，可获得奖励 #b50分#r的#t02430716#。\r\n在未知的遗物中发现有价值的遗物，可获得#b30分钟内遗物分数双倍#k#r效果。\r\n#k请多多参与哦。');
    } else {
        if (status === a++) {
            cm.dispose();
        } else {
            cm.dispose();
        }
    }
}
function 接收遗物大会任务(d, c, b, a) {
    if (status === a++) {
        cm.sendNext('你好。#b#h0##k。本次遗物大会是由我休彼德蔓举办的！！是不是现在就已经心潮澎湃了呢？怎么样，要不要和我一起开始寻找珍贵遗物的冒险呢？');
    } else {
        if (status === a++) {
            cm.sendNext('前往野外狩猎普通怪物，就能获得#i2430712##r未知的遗物#k。你要认真收集。收集到1000分时，就可以完成#b出席报到#k了。\n\n出席报到总共可完成8日，因为会逐渐发放给你更好的礼物，所以请用心参加！#b比你等级低11级以上或者高21级以上的怪物没有未知的遗物#k，请铭记！');
        } else {
            if (status === a++) {
                cm.sendNext('有一件不一样的重要事项。\n在收集未知的遗物时，有时会出现#b遗物守护者#k。\n\n哇~哇~不要害怕。遗物守护者沉睡太久了，不会那么的强力。消灭遗物守护者后，可以得到一次性增加#r100分#k的#b遗物守护者的痕迹#k，请认真收集分数吧。');
            } else {
                if (status === a++) {
                    cm.sendNext('还有一件事！收集未知的遗物时，有时会发现#b有价值的遗物#k。其中蕴含着十分神秘的力量。\n\n#b有价值的遗物#k发挥效果时，可以获得#r30分钟内遗物分数2倍#k的增益，最好不要错过哦。');
                } else {
                    if (status === a++) {
                        cm.sendNext('唉~需要说明的事情好多啊！最后向你说明下完成出席报到后仍可收集的#b累积遗物分数#k。在完成出席的状态下，收集到未知的遗物时，可以获得#b累积遗物分数#k。\n\n#b累积遗物分数#k记录在哪？别担心。有我休彼德蔓准备的#r古董博物馆#k呢。收集到的遗物分数可以在#r古董博物馆#k中交换到不错的礼物，请认真收集分数吧！');
                    } else {
                        if (status === a++) {
                            cm.sendNext('呐~该说明的应该都说过了。请认真参加，多多收集遗物吧！愿#b#h0##k的步伐一直朝着贵重的物品前进~');
                        } else {
                            if (status === a++) {
                                cm.forceStartQuest(12402);
                                cm.dispose();
                            } else {
                                cm.dispose();
                            }
                        }
                    }
                }
            }
        }
    }
}