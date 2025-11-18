var status = -1;
var selectionLog = [];
function start() {
    action(1, 0, 0);
}
function action(h, f, e) {
    var c = cm.getConstantScriptContent('菜单_NPC立绘');
    var b = Math.floor(Math.random() * c.length);
    var a = c[b][0];
    var g = randomNum(0, c[b][1]);
    if (status == 0 && h == 0) {
        cm.dispose();
        return;
    }
    h == 1 ? status++ : status--;
    selectionLog[status] = e;
    var d = -1;
    if (status <= d++) {
        cm.dispose();
    } else {
        if (status === d++) {
            text = '#face' + g + '##fn方正粗黑宋简体#';
            text += '#fs16##欢迎使用 ' + cm.getServerName() + ' 副手武器功能#fs15#\r\n';
            text += '#fs16##L0#脱掉身上副手武器#l#k\r\n';
            text += '#fs16##L1#穿戴副手武器(请把副手武器放置在背包里的第一格里)#l#k\r\n';
            cm.askMenu_Bottom(text, 204, a);
        } else {
            if (status === d++) {
                if (e == 0) {
                    cm.副手武器(false);
                } else {
                    cm.副手武器(true);
                }
                cm.dispose();
            } else {
                cm.dispose();
            }
        }
    }
}
function randomNum(b, a) {
    switch (arguments.length) {
    case 1:
        return parseInt(Math.random() * b + 1, 10);
        break;
    case 2:
        return parseInt(Math.random() * (a - b + 1) + b, 10);
        break;
    default:
        return 0;
        break;
    }
}