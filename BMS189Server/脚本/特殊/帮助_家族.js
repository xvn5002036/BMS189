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
        if (status == i++) {
            cm.sendNormalTalk('家族是那些志同道合的人一起建立的组织。\r\n虽然本身也有其价值，但如果能参加家族，就能获得各种福利。', 4, 2010007, false, true);
        } else {
            if (status === i++) {
                cm.askMenu('\r\n如果有什么问题，可以随时来问我！\r\n\r\n#L0# #b请介绍一下<家族定期支援>。#k#l\r\n#L1# #b请介绍一下<狩猎时提供的福利>。#k#l\r\n#L2# #b请介绍一下<道具强化相关福利>。#k#l\r\n#L3# #b请介绍一下<家族专用内容>。#k#l\r\n#L4# #b不需要其他说明了。#k#l\r\n', 4, 2010007);
            } else {
                var reactor = 'action分支' + selectionLog[2];
                eval(reactor)(mode, type, selection, i);
            }
        }
    }
}
function action分支0(d, c, b, a) {
    if (status <= a++) {
        cm.sendNormalTalk('\r\n你想了解#b#e<家族定期支援>#k#n吗？', 4, 2010007, false, true);
    } else {
        if (status === a++) {
            cm.sendNormalTalk('\r\n#e<家族定期支援>#n是为努力活动的家族成员们准备的特别福利。\r\n每周一通过左侧的灯泡提示，可以领取特殊补给品。', 4, 2010007, true, true);
        } else {
            if (status === a++) {
                cm.sendNormalTalk('\r\n可以获得使HP和MP全部恢复的#bG药水#k，以及在30分钟内提高攻击力和魔法攻击力的#b家族的祝福#k。', 4, 2010007, true, true);
            } else {
                if (status === a++) {
                    cm.sendNormalTalk('\r\n家族定期支援技能的等级越高，可以获得的补给品越多。家族定期支援升到满级之后，就能获得效果更好的#b家族的更大祝福#k。', 4, 2010007, true, true);
                    status = 0;
                }
            }
        }
    }
}
function action分支1(d, c, b, a) {
    if (status <= a++) {
        cm.sendNormalTalk('\r\n你想了解#b#e<狩猎时提供的福利>#k#n吗？', 4, 2010007, false, true);
    } else {
        if (status === a++) {
            cm.sendNormalTalk('\r\n消灭101级以上200级一下的普通怪物时，可以获得额外经验值。', 4, 2010007, true, true);
        } else {
            if (status === a++) {
                cm.sendNormalTalk('\r\n不仅如此，你还有机会感受更强的自己。攻击力/魔法攻击力增加、星之力增加、神秘力量增加、所有能力值增加，体力也提高！', 4, 2010007, true, true);
            } else {
                if (status === a++) {
                    cm.sendNormalTalk('\r\n此外，受到怪物攻击时，受到的伤害也会减少。家族达到30级时，还能获得特别的骑宠。', 4, 2010007, true, true);
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk('\r\n怎么样？福利是不是丰厚？家族等级越高，就能学习更多的技能，获得更强的效果。', 4, 2010007, true, true);
                        status = 0;
                    }
                }
            }
        }
    }
}
function action分支2(d, c, b, a) {
    if (status <= a++) {
        cm.sendNormalTalk('\r\n你想了解#b#e<道具强化相关福利>#k#n吗？', 4, 2010007, false, true);
    } else {
        if (status === a++) {
            cm.sendNormalTalk('\r\n使用普通卷轴及咒语痕迹进行卷轴强化时，成功率提高。在卷轴导致道具有损坏危险的时候，有一定概率可以防止损坏。', 4, 2010007, true, true);
        } else {
            if (status === a++) {
                cm.sendNormalTalk('\r\n此外，即使消耗可升级次数的强化失败，也有一定概率不减少可升级次数。', 4, 2010007, true, true);
                status = 0;
            }
        }
    }
}
function action分支3(mode, type, selection, i) {
    if (status <= i++) {
        cm.askMenu('\r\n那是只有家族成员才能参加的特别内容。\r\n在一周内参加家族内容，可以根据结果获得升级初心者技能的SP。\r\n\r\n#L0# #b请介绍一下<跑旗赛>。#k#l\r\n#L1# #b请介绍一下<圣瑞尼亚城地下水路>。#k#l\r\n#L2# #b请介绍一下<初心者技能>。#k#l\r\n#L3# #b回到前面#k#l\r\n', 4, 2010007);
    } else {
        var reactor = 'action分支3_' + selectionLog[3];
        eval(reactor)(mode, type, selection, i);
    }
}
function action分支3_0(d, c, b, a) {
    cm.sendNormalTalk('\r\n#e<跑旗赛>#n是看谁能最快跑到终点的赛跑。入场之后只要沿着指定路线跑完3圈，就能获得胜利。利用道具和配置在地图上的各种装置，可以更快地跑完全程。\r\n每天会在正午、下午7点和下午9点举行三次。', 4, 2010007, false, true);
    status = 0;
}
function action分支3_1(d, c, b, a) {
    cm.sendNormalTalk('\r\n#e<圣瑞尼亚城地下水路>#n是所有家族成员一起参加的内容。突破各个关卡并攻击BOSS怪物，可以根据造成的伤害获得奖励。家族管理员每周可以申请入场1次。申请入场时，家族成员们可以在一定时间内入场。', 4, 2010007, false, true);
    status = 0;
}
function action分支3_2(d, c, b, a) {
    cm.sendNormalTalk('\r\n#e<初心者技能>#n可以用通过跑旗赛和圣瑞尼亚城地下水路获得的SP学习。\r\n在一周时间内可以使用在一定时间内伤害增加、攻击BOSS怪物时伤害增加、爆击伤害增加、无视防御技能。', 4, 2010007, false, true);
    status = 0;
}
function action分支3_3(d, c, b, a) {
    cm.askMenu('\r\n如果有什么问题，可以随时来问我！\r\n\r\n#L0# #b请介绍一下<家族定期支援>。#k#l\r\n#L1# #b请介绍一下<狩猎时提供的福利>。#k#l\r\n#L2# #b请介绍一下<道具强化相关福利>。#k#l\r\n#L3# #b请介绍一下<家族专用内容>。#k#l\r\n#L4# #b不需要其他说明了。#k#l\r\n', 4, 2010007);
    status = 1;
}
function action分支4(d, c, b, a) {
    cm.dispose();
}