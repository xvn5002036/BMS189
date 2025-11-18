var cashitem, isok;
var status = -1;
var select = -1;
var str = '';
function start() {
    action(1, 0, 0);
}
function action(c, b, a) {
    if (c == 1) {
        status++;
    } else {
        cm.dispose();
        return;
    }
    if (status == 0) {
        if (cm.getPQLog('FreeTransfer') <= 3) {
            cm.askYesNo('自由转职一天只能3次,你是否现在就要进行选择？');
        } else {
            cm.sendOk('你今天已经使用3次自由转职了.请明天再试!');
            cm.dispose();
        }
    } else {
        if (status == 1) {
            cm.openUI(167);
            cm.dispose();
        } else {
            cm.dispose();
        }
    }
}