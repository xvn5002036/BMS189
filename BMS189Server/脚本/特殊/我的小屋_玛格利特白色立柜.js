var status = -1;
var selectionLog = [];
function start() {
    action(1, 0, 0);
}
function action(f, c, b) {
    if (status == 0 && f == 0) {
        cm.dispose();
        return;
    }
    f == 1 ? status++ : status--;
    selectionLog[status] = b;
    var e = Math.floor(cm.getNpc() / 100000000);
    var d = cm.getNpc() % 100000000;
    var a = -1;
    if (status <= a++) {
        cm.dispose();
    } else {
        if (status === a++) {
            if (e == 0) {
                cm.sendNext_Bottom('在打开衣柜的瞬间，眼前慢慢出现了神奇的光景。穿过像是水面上的波纹蔓延开来的幻象，出现了一个陌生的世界。你似乎被什么迷惑住了，在伸手打算抓住那个风景的瞬间，你感受到了强大的力量在拖拽你。', 9400954);
            } else {
                cm.askAcceptDecline_Bottom('要穿越次元之镜吗？', 9400954);
            }
        } else {
            if (status === a++) {
                if (e == 0) {
                    cm.askAcceptDecline_Bottom('要开启次元之镜吗？', 9400954);
                } else {
                    cm.updateInfoQuest(500776, 'on2672035=0');
                    cm.changeFurnitureState(d, 0);
                    cm.dispose();
                    cm.次元之镜UI();
                }
            } else {
                cm.updateInfoQuest(500776, 'on2672035=1');
                cm.sendOk_Bottom('一道神秘的传送门开启了！', 9400954);
                cm.changeFurnitureState(d, 1);
                cm.dispose();
            }
        }
    }
}