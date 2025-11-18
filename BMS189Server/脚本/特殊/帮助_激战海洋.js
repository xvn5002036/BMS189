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
        if (status == a++) {
            cm.sendNormalTalk('\r\n#b#e普通任务：激战海洋#n#k\r\n\r\n#e任务执行时间#n\r\n2020年3月4日 ~ 2020年3月31日（周三）晚间11时59分', 4, 3004213, false, true);
        } else {
            if (status === a++) {
                cm.sendNormalTalk('激战海洋是一种骑乘#b#e水战机器人\r\n\r\n#fs18##r机甲海马#n#k#fs13#进行的模拟战斗训练。', 4, 3004213, true, true);
            } else {
                if (status === a++) {
                    cm.sendNormalTalk('随机#b#e2名联盟成员组成一组#n#k，共#r#e3组#n#k，\r\n6人聚齐后进行战斗。', 4, 3004213, true, true);
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk('骑乘机甲海马后，共可以使用#r#e四种技能#n#k！\r\n\r\n按下#b#eQ W E R#n#k键使用。\r\n#i3801482# ', 4, 3004213, true, true);
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk('#i3801483# #e#bQ技能#n#k是一种\r\n\r\n从机甲海马身躯上发射出的强大#b#e一字线轨道导弹#n#k。', 4, 3004213, true, true);
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk('#i3801484# #e#bW技能#n#k是一种\r\n\r\n从机甲海马头上按照#b#e抛物线轨道#n#k发射的#b#e海胆导弹#n#k。', 4, 3004213, true, true);
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk('#i3801485# #e#bE技能#n#k是一种\r\n\r\n从机甲海马口中发射出的#e#b一字线轨道眩晕导弹#n#k。\r\n虽然没办法攻击到对方的机甲海马，但可以让其暂时动弹不得。', 4, 3004213, true, true);
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk('#i3801486# #e#bR技能#n#k\r\n\r\n就是#e#b机甲海马无敌#n#k，\r\n可以暂时进入无敌状态，#e#b回避所有攻击#n#k，\r\n不过无法频繁使用，一定要省着点，在危急时刻使用。', 4, 3004213, true, true);
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk('训练内容很简单，\r\n如果是真实的战斗，最重要的是能活下来吧？\r\n\r\n只要能够保留比对方队伍#r#e更多的体力#n#k就算赢！', 4, 3004213, true, true);
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk('另外在训练场的随机位置还会出现用来强化机甲海马的\r\n丰富多样的#e#r道具#n#k，试着善用道具哦！\r\n#e#b#i3801478:# #t2023866#\r\n#i3801479:# #t2023867#\r\n#i3801480:#初始化无敌技能(R)冷却时间\r\n#i3801481:# #t2023869#\r\n#n#k', 4, 3004213, true, true);
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk('根据训练结果，还将发放#r#e荣耀点数#n#k，训练可不要懈怠哦。', 4, 3004213, true, true);
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk('对了！只要你能坚持参加训练，我还打算破例\r\n送你#e#b#i2630916# #t2630916##n#k。\r\n坚持参加#r#e10天#n#k训练后来找我吧。', 4, 3004213, true, false);
                                                    } else {
                                                        if (status === a++) {
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