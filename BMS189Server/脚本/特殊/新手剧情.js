var status = -1;
function action(c, b, a) {
    if (c > 0) {
        status++;
    } else {
        status--;
    }
    if (status == 0) {
        cm.askMenuNoESC('是否体验新手剧情？\r\n#L0##b告诉我村庄的故事#l \r\n#L1#我想前往村庄#k#l');
    } else {
        if (status == 1) {
            if (a == 0) {
                cm.askMenu('0');
            }
            if (a == 1) {
                cm.askMenu('1');
            }
        } else {
            cm.dispose();
        }
    }
}
function start() {
    status = -1;
    action(1, 0, 0);
}