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
        if (status === a++) {
            cm.sendNormalTalk('老师！你收集到了好多明明女士老师的回忆呀！', 4, 9062290, false, true);
        } else {
            if (status === a++) {
                cm.askYesNo('是否立即去接受明明女士老师的指导？', 4, 9062290);
            } else {
                if (status === a++) {
                    cm.updateInfoQuest(500827, 'q1Set=0;q2Set=1;q3Set=0;start=0;q4Set=1;q5Set=1;lT=20/04/19;qSetDate=20/12/04;accSum=1317433;QuestCount=3;accCheck=201204142621364');
                    cm.updateInfoQuest(500827, 'q1Set=0;q2Set=1;q3Set=0;start=0;q4Set=1;q5Set=1;lT=20/04/19;qSetDate=20/12/04;accSum=1387238;QuestCount=3;accCheck=201204142621364');
                    cm.updateInfoQuest(500997, '0=0;1=1;2=0;3=0;4=0;5=0;6=0;7=0;8=0;9=0');
                    cm.updateInfoQuest(500998, '0=0;1=0;2=0;3=0;4=0;5=0;6=0;7=0;8=0;9=0');
                    cm.getTopMsgFont('接受了明明女士老师的指导。', 3, 20, 20, 0, 0);
                    cm.sendNormalTalk('明明女士老师！你好！\r\n我是来将#r#e这个#n#k转交给你的！', 4, 9062290, false, true);
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk('哎呀，这是……！\r\n老公忘记给我送生日礼物的那天。\r\n吼吼，我差点在家里折断一根勺子！\r\n\r\n#r#e现在想起来还是会忿忿不平呢。', 4, 1012106, true, true);
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk('老师！\r\n请您将#r#e折断勺子的力量#n#k传授于我！', 4, 9062290, true, true);
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk('吼吼……\r\n（哐当）', 4, 1012106, true, true);
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk('……', 2, 0, true, true);
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk('嘻嘻！老师，成功了！', 4, 9062290, true, true);
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk('接受了#r#e明明女士老师#n#k的指导！\r\n\r\n#e#b[明明女士的指导]#k\r\n- 当前等级：1\r\n- 全属性增加10点', 4, 9062290, true, true);
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