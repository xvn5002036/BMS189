function action(c, b, a) {
    cm.sendNext('今天天气视乎很晴朗。\r\n请记住我的工作号：#r' + cm.getNpc());
    cm.dispose();
}
var status = -1;
function start() {
    status = -1;
    action(1, 0, 0);
}