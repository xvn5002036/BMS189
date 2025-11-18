var open = true;
var PQname = ['活动_火焰狼'];
var PQLog = ['活动_火焰狼'];
var startmap = 993000600;
var minLevel = [10];
var maxLevel = [999];
var maxenter = [10000];
var interval = [10000];
var status = -1;
var minPlayers = 1;
var maxPlayers = 6;
var moblevel = 255;
var chs = 0;
function start() {
    status = -1;
    action(1, 0, 0);
}
function action(e, d, c) {
    if (e == 1) {
        status++;
    } else {
        status--;
    }
    var b = -1;
    if (status <= b++) {
        cm.dispose();
    } else {
        if (status === b++) {
            cm.sendNormalTalk('你好！我是冒险岛世界最好的赏金猎人#r#e保罗#n#k。\r\n我正在和弟弟#b#e普利托#n#k一起消灭魔物。', 4, 9001059, false, true);
        } else {
            if (status === b++) {
                cm.askMenu('我们兄弟经过长期追踪，终于找到了最强怪物#r#e火焰狼#n#k的巢穴。它是个非常卑鄙的家伙，喜欢掠夺冒险岛世界旅行者……怎么样？你愿意跟我一起去除掉它吗？\r\n#b#L0#一起去。#l\r\n#b#L1#不一起去。', 4, 9001059);
            } else {
                if (status === b++) {
                    if (c == 0) {
                        var a = cm.getEventManager(PQname[chs]);
                        if (a == null || open == false) {
                            cm.askMenu('配置文件不存在,请联系管理员。');
                        } else {
                            if (cm.isQuestActive(49016)) {
                                cm.addNumberForQuestInfo(15147, 'openLimit', 1000);
                            }
                            cm.setNumberForQuestCustomData(9001060, 0);
                            cm.setNumberForQuestCustomData(993000500, cm.getMapId());
                            a.startInstance(cm.getPlayer());
                            a.setProperty('PQLog', PQLog[chs]);
                        }
                    }
                    cm.onRandomPortalRemoved(3, 2108, cm.getMapId());
                    cm.dispose();
                } else {
                    cm.dispose();
                }
            }
        }
    }
}