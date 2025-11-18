var status = -1;
var selectedItem = -1;
var selectedCost = -1;
var NX1 = 700;
var NX2 = 1200;
function start() {
    action(1, 0, 0);
}
function action(c, b, a) {
    if (c == 1) {
        status++;
    } else {
        if (status >= 0) {
            cm.dispose();
            return;
        }
        status--;
    }
    if (status == 0) {
        cm.dispose();
        cm.addPopupSay(1540108, 2500, '欢迎来到[' + cm.getServerName() + '],BMS 币获取途径,在线签到,或者是任务,或者活动 \r\n累计BMS 币到10000可换GM1 \r\n累计BMS 币到20000可换GM2 \r\n累计BMS 币到30000可换GM3 \r\n累计BMS 币到50000可换GM4');
    }
}