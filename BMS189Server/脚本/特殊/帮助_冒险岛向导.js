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
            cm.askMenu('关于冒险岛向导，你有什么问题吗？\r\n\r\n#b#L0#冒险岛向导是什么？#l\r\n#L1#冒险岛向导有什么功能？#l\r\n#L2#向导任务是什么？#l\r\n#L3#角色右边的问号对话框是什么？#l\r\n#L4#没什么问题。#l', 4, 9010000);
        } else {
            var reactor = 'action分支' + selectionLog[1];
            eval(reactor)(mode, type, selection, i);
        }
    }
}
function action分支0(d, c, b, a) {
    if (status <= a++) {
        cm.sendNormalTalk('通过冒险岛向导，可以获得当前适用的\r\n任务、普通地区、主题副本等内容推荐。\r\n\r\n使用#b快捷键[U]#k，可以打开冒险岛向导或切换为最小化/最大化状态。\r\n点击#b转职/推荐任务按钮#k时，可以开始执行相关任务或查看任务信息。', 4, 9010000, false, true);
        status = -1;
    }
}
function action分支1(d, c, b, a) {
    if (status <= a++) {
        cm.sendNormalTalk('通过向导，可以#r直观地#k看到该角色\r\n可以参加的内容。\r\n向导可以切换为#b最小化状态 / 最大化状态#k。', 4, 9010000, false, true);
    } else {
        if (status === a++) {
            cm.sendNormalTalk('#b- 最小化状态#k\r\n   * 优先显示转职/推荐任务\r\n   * 推荐等级对应的任务\r\n\r\n#b- 最大化状态#k\r\n   * 根据等级/BOSS怪物/特殊等不同分类进行推荐\r\n   * 30级以上可以使用', 4, 9010000, true, true);
        } else {
            if (status === a++) {
                cm.sendNormalTalk('点击各个内容按钮时，可以打开查看与该内容\r\n有关的各种信息的详细信息窗。\r\n如果在该内容的#b推荐等级范围内#k，则可以#b立即移动#k至该内容。\r\n\r\n但只有处于内容的#r最高推荐等级 + 20级范围内#k时，才能使用移动功能。\r\n根据各个内容的#r图章获得基准#k获得#b完成图章#k时，可以在#r不受等级限制#k的情况下使用移动功能。', 4, 9010000, true, true);
            } else {
                if (status === a++) {
                    cm.sendNormalTalk('此外，在详细信息窗中还能浏览该内容相关的各种信息。尤其是先行任务和主要奖励信息，\r\n对新手勇士们会有很大的帮助。', 4, 9010000, true, true);
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk('#e- 先行任务区域#n\r\n\r\n显示与该内容相关的任务信息的区域。\r\n该区域#r可以点击#k，点击时#b连接到相关任务#k。可以立即开始或查看该任务的信息。', 4, 9010000, true, true);
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk('#e- 主要奖励区域#n\r\n\r\n显示可以在该内容中获得的奖励道具信息的区域。\r\n在向导最小化状态下，可以看到#b在所选等级段内容中可获得的所有主要奖励#k。\r\n点击主要奖励时，连接的内容以闪烁的方式进行提示。如主要奖励中包含特定内容的排名奖励，会另外单独显示。', 4, 9010000, true, true);
                            status = -1;
                        }
                    }
                }
            }
        }
    }
}
function action分支2(d, c, b, a) {
    if (status <= a++) {
        cm.sendNormalTalk('向导任务是指在特定等级段内，以简单#b实习#k的形式体验#b推荐行动#k的任务。', 4, 9010000, false, true);
    } else {
        if (status === a++) {
            cm.sendNormalTalk('在向导最小化状态下的各等级内容标签中，各等级段按钮右下方的#b星形按钮#k就是#r向导任务按钮#k。', 4, 9010000, true, true);
        } else {
            if (status === a++) {
                cm.sendNormalTalk('里面有各个向导任务相关的详细信息，可以随时点击查看。', 4, 9010000, true, true);
                status = -1;
            }
        }
    }
}
function action分支3(d, c, b, a) {
    if (status <= a++) {
        cm.sendNormalTalk('那是根据该角色的等级，推荐经过精选的#b主页向导#k的功能。', 4, 9010000, false, true);
    } else {
        if (status === a++) {
            cm.sendNormalTalk('点击想要阅览的项目，就能打开相关网页，方便地查看游戏中存在疑问的事项。', 4, 9010000, true, true);
        } else {
            if (status === a++) {
                cm.askYesNo('你想看看向导中推荐的主页向导的#b全体目录#k吗？', 4, 9010000);
            } else {
                if (status === a++) {
                    cm.askMenu('点击时，移动至该内容的#b主页#k向导。\r\n\r\n#b#L0# 游戏用语#l\r\n#L1# 装备信息#l\r\n#L2# AP/SP/内在能力#l\r\n#L3# 特殊主题副本：艾利涅，金海滩，列娜海峡，艾洛丁#l\r\n#L4# 大陆移动方法#l\r\n#L5# 暴风升级#l\r\n#L6# 道具强化#l\r\n#L7# 套装道具#l\r\n#L8# 潜能#l\r\n#L9# 链接技能#l\r\n#L19# 星之力狩猎场#l\r\n#L10# 超级属性#l\r\n#L11# 冒险岛拍卖场#l\r\n#L12# BOSS怪物#l\r\n#L13# 5转技能#l\r\n#L14# 神秘力量#l\r\n#L15# V矩阵#l\r\n#L16# 符文#l\r\n#L17# 斗燃地区#l\r\n#L18# 随机传送口#l\r\n', 4, 9010000);
                } else {
                    if (status === a++) {
                        cm.openWebNew(0, 1, 'https://maplestory.nexon.com/Guide/GameInformation/Terms');
                        status = -1;
                    }
                }
            }
        }
    }
}
function action分支4(d, c, b, a) {
    cm.dispose();
}