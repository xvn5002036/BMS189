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
            cm.fieldEffect_Clear('killing/clear');
            cm.fieldEffect_PlayFieldSound('5th_Maple/gaga', 100);
            cm.onActionBarResult(6, 0);
            cm.setSessionValue('baseballTotal', '0');
            cm.forceStartQuest(31356, 'on');
            cm.sendNormalTalk('成功了！挺厉害的嘛？', 5, 2210002, false, true);
        } else {
            if (status === a++) {
                cm.sendNormalTalk('……嗯？刚才感觉到了吗？看那边！大地在晃动！', 5, 2210002, true, true);
            } else {
                if (status === a++) {
                    cm.forceStartQuest(31339, '');
                    cm.warp(240091000, 2, false);
                    cm.setInGameDirectionMode(false, true, false);
                    cm.dispose();
                }
            }
        }
    }
}