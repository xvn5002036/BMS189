var status = -1;
function action(c, b, a) {
    if (c == 1) {
        status++;
    } else {
        cm.dispose();
        return;
    }
    var b = cm.getNpc();
    if (status == 0) {
        cm.askYesNo('#e本周组队任务：<组队挑战任务>#n\r\n\r\n你想移动到世界综合组队任务地区，和#b其他世界#k的勇士们一起执行任务吗？\r\n\r\n#b   - 入场等级：70级以上\r\n   - 组队人数： 4人\r\n   - 可执行次数：每天5次#k', 4, 9076000);
    } else {
        if (status == 1) {
            cm.warp(933010000, 0);
            cm.dispose();
        } else {
            cm.dispose();
        }
    }
}
function start() {
    status = -1;
    action(1, 0, 0);
}