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
    mode == 1 ? status++ : status--;
    selectionLog[status] = selection;
    var i = -1;
    if (status <= i++) {
        cm.dispose();
    } else {
        if (status === i++) {
            cm.askMenu('老师！你有什么想了解的吗？\r\n\r\n#L1# 询问#b#e<特别课程>#n#k的相关内容。#l\r\n#L2# 询问#b#e<寻找回忆>#n#k的相关内容。#l\r\n#L3# 询问#b#e<奖励>#n#k。#l\r\n#L4# 询问#b#e<活动时间>#n#k。#l\r\n#L6# 我没有想了解的。#l', 4, 9062290);
        } else {
            var reactor = 'action分支' + selectionLog[1];
            eval(reactor)(mode, type, selection, i);
        }
    }
}
function action分支1(d, c, b, a) {
    if (status <= a++) {
        cm.sendNormalTalk('接受了老师的谆谆教诲之后，我也要离开去冒险，变得更加强大！', 4, 9062290, false, true);
    } else {
        if (status === a++) {
            cm.sendNormalTalk('而且还认识了#r#e一些非常强大的人#n#k。\r\n如果把他们带到#b#e师父#n#k身边，他们一定会更加强大！', 4, 9062290, true, true);
        } else {
            if (status === a++) {
                cm.sendNormalTalk('接受师父们的指导，#r#e能力值将会得到成长#n#k！\r\n\r\n\r\n#r※ 可通过<特别课程>技能查看获得的\r\n能力值。', 4, 9062290, true, true);
            } else {
                if (status === a++) {
                    cm.sendNormalTalk('要想被传授能力值，需要先找回那位的记忆！\r\n收集#b#e回忆碎片#n#k，帮助他们记住过去的回忆，它们就会发挥出忘掉的实力，为你带来#r#e好的指导#n#k！\r\n\r\n\r\n#r※ 收集回忆接受师父们的指导后，即可\r\n获得能力值。', 4, 9062290, true, true);
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk('消灭等级范围怪物即可找到#b#e回忆碎片#n#k。收集#r#e20个#n#k碎片后就会组成某个人的回忆！\r\n\r\n\r\n#r※ 收集碎片可随机获得某位师父的回忆。', 4, 9062290, true, true);
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk('努力收集回忆吧，我也会把我收集到的回忆分享给你！\r\n\r\n\r\n#r※ 完成<与短中分勇士一起寻找回忆>任务后，\r\n即可领取选定师父的回忆。', 4, 9062290, true, true);
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk('可以通过#e#b[特别课程]查看课程进度#n#k任务，了解各位师父的能力值！', 4, 9062290, true, true);
                                status = -1;
                            }
                        }
                    }
                }
            }
        }
    }
}
function action分支2(d, c, b, a) {
    if (status <= a++) {
        cm.sendNormalTalk('消灭等级范围怪物即可找到#b#e回忆碎片#n#k。收集#r#e20个#n#k碎片后就会组成某个人的回忆！\r\n\r\n\r\n#r※ 收集碎片可随机获得某位师父的回忆。', 4, 9062290, false, true);
    } else {
        if (status === a++) {
            cm.sendNormalTalk('努力收集回忆吧，我也会把我收集到的回忆分享给你！\r\n\r\n\r\n#r※ 完成<与短中分勇士一起寻找回忆>任务后，\r\n即可领取选定师父的回忆。', 4, 9062290, true, true);
        } else {
            if (status === a++) {
                cm.sendNormalTalk('对了！因为没有办法接受到所有师父的指导，所以请你#r#e慎重#n#k选择想学习的师父！\r\n\r\n\r\n#r※ <与短中分勇士一起寻找回忆>任务于每天上午7点\r\n开放一个，总共由10个任务组成。', 4, 9062290, true, true);
                status = -1;
            }
        }
    }
}
function action分支3(d, c, b, a) {
    if (status <= a++) {
        cm.sendNormalTalk('老师，请你和我一起寻找回忆接受训练，之后我会送给你特别的礼物！', 4, 9062290, false, true);
    } else {
        if (status === a++) {
            cm.sendNormalTalk('这是我给你的礼物！ \r\n\r\n#b#e[寻找回忆奖励]#n#k\r\n\r\n#e<2天完成>#n\r\n#i2433808:# #b#t2433808:# 1个#k\r\n#e<第4天完成>#n\r\n#i2630512:# #b#t2630512:# 10个#k\r\n#e<第6天完成>#n\r\n#i2433604:# #b#t2433604:# 1个#k\r\n#e<第8天完成>#n\r\n#i2439869:# #b#t2439869:# 10个#k\r\n#e<第10天完成>#n\r\n#i2631746:# #b#t2631746:# 1个#k', 4, 9062290, true, true);
            status = -1;
        }
    }
}
function action分支4(d, c, b, a) {
    if (status <= a++) {
        cm.sendNormalTalk('老师！#b#e师父们的回忆#n#k\r\n只能在#r2020年12月15日晚上11点59分#k前收集！', 4, 9062290, false, true);
    } else {
        if (status === a++) {
            cm.sendNormalTalk('#b#e<特别课程>技能#n#k\r\n截止#r2020年12月15日 晚上11点59分#k前可以使用！', 4, 9062290, true, true);
        } else {
            if (status === a++) {
                cm.sendNormalTalk('#b#e各位师父的指导#n#k\r\n截止#r2020年12月15日 晚上11点59分#k前可以接受！', 4, 9062290, true, true);
            } else {
                if (status === a++) {
                    cm.askMenu('老师！你有什么想了解的吗？\r\n\r\n#L1# 询问#b#e<特别课程>#n#k的相关内容。#l\r\n#L2# 询问#b#e<寻找回忆>#n#k的相关内容。#l\r\n#L3# 询问#b#e<奖励>#n#k。#l\r\n#L4# 询问#b#e<活动时间>#n#k。#l\r\n#L6# 我没有想了解的。#l', 4, 9062290);
                    status = -1;
                }
            }
        }
    }
}
function action分支6(d, c, b, a) {
    if (status <= a++) {
        cm.dispose();
    }
}