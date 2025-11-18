var status = -1;
var selectionLog = [];
function start() {
    action(1, 0, 0);
}
function action(mode, type, selection) {
    if (status == 0 && mode == 0) {
        cm.dispose();
        return;
    }
    status++;
    selectionLog[status] = selection;
    var i = -1;
    if (status <= i++) {
        cm.dispose();
    } else {
        if (status === i++) {
            cm.askMenu_Bottom('迅速、准确的服务，这便是#b神秘河快速通道#k。\r\n\r\n#L0# #b请告诉我关于<神秘河快速通道>的内容。#k#l\r\n#L1# 请告诉我 #b一天的使用次数#k和 #b使用费用。#l\r\n#L2# 请告诉我关于#b使用资格#k的内容。#l\r\n#L3# 请告诉我#b可以得到#k什么吧。#l\r\n#L4# 请告诉我 #r注意事项#k。#l\r\n#L99# 说明就到此为止了。#l', 36, 3003146);
        } else {
            var reactor = 'action分支' + selectionLog[1];
            eval(reactor)(mode, type, selection, i);
        }
    }
}
function action分支0(d, c, b, a) {
    if (status <= a++) {
        cm.sendNormalTalk_Bottom('#b神秘河快速通道#k是可以帮你迅速完成\r\n你的每日任务和每日内容，以及为你#r发放神秘徽章#k奖励的服务！', 36, 3003146, false, true);
    } else {
        if (status === a++) {
            cm.sendNormalTalk_Bottom('如果你想节约时间，就得用#r抵用券#k来换。\r\n等价交换是金利奇秉持的原则。', 36, 3003146, true, true);
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom('也就是说，所谓的#b神秘河快速通道#k，\r\n是一种可以用你的#r抵用券#k\r\n来帮你一次性通过当天每日任务和每日内容的服务。', 36, 3003146, true, true);
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom('有时候速度比方向重要。哈哈……', 36, 3003146, true, true);
                    status = -1;
                }
            }
        }
    }
}
function action分支1(d, c, b, a) {
    if (status <= a++) {
        cm.sendNormalTalk_Bottom('<每日任务>\r\n相应神秘河区域的可进行每日任务次数与\r\n#b任务数量相同#k。\r\n使用费用为#r每次500抵用券#k。', 36, 3003146, false, true);
    } else {
        if (status === a++) {
            cm.sendNormalTalk_Bottom('<每日内容>\r\n相应神秘河区域的可进行每日内容次数与#b可入场次数相同#k。\r\n使用费用为#r每次500抵用券#k。', 36, 3003146, true, true);
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom('#b神秘河快速通道#k以全部消耗的剩余个数/次数为标准\r\n计算费用并提供奖励。\r\n即，不管你有没有开始任务，或是任务途中开始使用，\r\n#b只要还有未完成的每日任务/每日内容#k剩余，\r\n你就可以使用与剩余数量相应的金额。', 36, 3003146, true, true);
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom('我会考虑你#b通过神秘河#k\r\n每日任务/每日内容时#b消耗的个数/次数#k\r\n#r提前告诉你使用费用的#k，你不要太担心了。哈哈……', 36, 3003146, true, true);
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom('还有#r使用费用中并不包含#k每日内容的#b可立即完成的次数#k。\r\n但是，使用快速通道时，会附带#b帮你立即完成#k。\r\n作为参考，每日内容中如果只剩立即完成时，是不能使用快速通道的。\r\n自己轻松能做到的事，也不必非要让快速通道替你来做，对吧？哈哈……', 36, 3003146, true, true);
                        status = -1;
                    }
                }
            }
        }
    }
}
function action分支2(d, c, b, a) {
    if (status <= a++) {
        cm.sendNormalTalk_Bottom('为了使用#b神秘河快速通道#k，#b你必须完成#k相应神秘河区域的\r\n每日任务和每日内容。', 36, 3003146, false, true);
    } else {
        if (status === a++) {
            cm.sendNormalTalk_Bottom('每日任务需要你完成相应神秘河区域的任务，负责npc会为你介绍每日任务的内容。', 36, 3003146, true, true);
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom('怎么样？我的说明很详细了吧？哈哈……\r\n你应该不是想不劳而获吧？\r\n\r\n#r这世上可没有天上掉馅饼的事。#k', 36, 3003146, true, true);
                status = -1;
            }
        }
    }
}
function action分支3(d, c, b, a) {
    if (status <= a++) {
        cm.sendNormalTalk_Bottom('你如果决定使用#b神秘河快速通道#k\r\n来完成每日任务或是每日内容，\r\n 将以#b你亲自完成的#k所选择的任务或是内容为标准，\r\n为你发放#b神秘徽章#k。', 36, 3003146, false, true);
    } else {
        if (status === a++) {
            cm.sendNormalTalk_Bottom('简单来说，你虽然可以在每日任务中获得相同数量的神秘徽章\r\n但是在每日内容中，将以你的#r最高记录#k为标准，来决定你获取的神秘徽章数量。', 36, 3003146, true, true);
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom('你说对同样的使用费用不公平？\r\n我说过#b神秘河快速通道#k是帮你通过#b你的#k每日任务的。哈哈……\r\n#r莫非在我面前的是另一个人吗？#k 哈哈……', 36, 3003146, true, true);
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom('因为#b饥饿的穆托、碎梦者、灵魂拯救者#k的奖励发放数量与你的记录有关，\r\n所以没有游戏记录的话，就无法使用快速通道。', 36, 3003146, true, true);
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom('每日内容游戏记录\r\n将从我#b使用神秘河快速通道那一刻起#k开始记录，希望你能理解。\r\n凡事还是准确一点为好，你说呢？哈哈。', 36, 3003146, true, true);
                        status = -1;
                    }
                }
            }
        }
    }
}
function action分支4(d, c, b, a) {
    if (status <= a++) {
        cm.sendNormalTalk_Bottom('首先要告诉你，#b神秘徽章2倍活动#k和#b周末网吧优惠#k\r\n都适用于#b神秘河快速通道#k。\r\n你可能不相信，但这在你委托的那一刻开始就已经生效了。哈哈。', 36, 3003146, false, true);
    } else {
        if (status === a++) {
            cm.sendNormalTalk_Bottom('还有啊，#b神秘河快速通道#k里也有#r禁用时间#k。\r\n是#b每天晚上11点30分到次日中午12点30分#k。\r\n这段时间是不能使用的。', 36, 3003146, true, true);
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom('最后通过#b神秘河快速通道#k完成时，\r\n将#r不会反映#k相应的\r\n每日任务，每周任务以及和每日内容相关的#r成就#k。', 36, 3003146, true, true);
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom('成就是完全属于#b你自己#k的，#b神秘河快速通道#k能帮你完成多少呢？\r\n这不是理所当然的吗？哈哈……\r\n\r\n所谓的成就#b就是用来记录你的伟大足迹#k的，多多理解吧。', 36, 3003146, true, true);
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom('那你要多多使用#b神秘河快速通道#k啊！', 36, 3003146, true, true);
                        status = -1;
                    }
                }
            }
        }
    }
}
function action分支5(d, c, b, a) {
    cm.dispose();
}