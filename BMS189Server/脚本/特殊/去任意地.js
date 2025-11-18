var status, str, select, list;
function start() {
    status = -1;
    str = '';
    select = -1;
    str += '================#e高级工具(传送任意地图)#n================';
    str += '\r\n#L3#地图#l';
    cm.askMenu(str);
}
function action(c, b, a) {
    if (c == 1) {
        status++;
    } else {
        status--;
        cm.dispose();
        return;
    }
    switch (status) {
    case 0:
        str = a;
        cm.askText('请输入要搜索的信息：支持中文和ID');
        break;
    case 1:
        switch (str) {
        case 10:
        case 11:
        case 12:
            list = cm.getSearchData(str, cm.getText());
            if (list == null) {
                cm.sendOk('搜索不到信息');
                cm.dispose();
                return;
            }
            cm.askAvatar('', list);
            break;
        default:
            cm.sendOk(cm.searchData(str, cm.getText()));
        }
        break;
    case 2:
        if (!cm.foundData(str, cm.getText())) {
            cm.dispose();
            return;
        }
        if (select == -1) {
            select = a;
        }
        switch (str) {
        case 3:
            cm.playerMessage(5, '传送到地图，ID：' + select);
            cm.warp(select, 0);
            cm.dispose();
            break;
        default:
            cm.dispose();
        }
        break;
    default:
        cm.dispose();
    }
}
var status = -1;