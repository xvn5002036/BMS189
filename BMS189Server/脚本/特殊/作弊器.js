var status, str, select, list;
function start() {
    status = -1;
    str = '';
    select = -1;
    str += '================#e高级检索工具#n================';
    str += '\r\n#L1#刷道具#l';
    str += '\r\n#L2#打开NPC#l';
    str += '\r\n#L3#地图传送#l';
    str += '\r\n#L4#召唤怪物#l';
    str += '\r\n#L5#任务管理#l';
    str += '\r\n#L6#学习技能#l';
    str += '\r\n#L7#更换职业#l';
    cm.askMenu(str);
}
function action(d, c, b) {
    if (d == 1) {
        status++;
    } else {
        status--;
        cm.dispose();
        return;
    }
    switch (status) {
    case 0:
        str = b;
        cm.askText('请输入要搜索的信息：');
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
            select = b;
        }
        switch (str) {
        case 1:
            if (select < 2000000) {
                if (cm.canHold(select)) {
                    cm.gainItem(select, 1);
                }
                cm.dispose();
            } else {
                if (select >= 5000000 && select < 5010000) {
                    cm.askNumber('选中的宠物为#i' + select + ':# #z' + select + '#\r\n请输入生命时间(天)：', 1, 1, 300);
                } else {
                    cm.askNumber('选中的道具为#i' + select + ':# #z' + select + '#\r\n请输入制作数量：', 1, 1, 300);
                }
            }
            break;
        case 2:
            cm.dispose();
            cm.playerMessage(5, '打开NPC，ID：' + select);
            cm.openNpc(select);
            break;
        case 3:
            cm.playerMessage(5, '传送到地图，ID：' + select);
            cm.warp(select, 0);
            cm.dispose();
            break;
        case 4:
            cm.askNumber('选中的怪物为#o' + select + '#\r\n请输入召唤数量：', 1, 1, 100);
            break;
        case 5:
            cm.askMenu('选中的任务为' + cm.getQuestById(select) + '\r\n请选择需要执行的操作：\r\n#L0#开始任务#l\r\n#L1#完成任务#l');
            break;
        case 6:
            cm.askNumber('选中的技能ID为' + select + '\r\n请输入使用等级：', 1, 1, 30);
            break;
        case 7:
            cm.playerMessage(5, '转职，职业代码：' + select);
            cm.changeJob(select);
            cm.dispose();
            break;
        case 10:
            cm.playerMessage(5, '改变发型，发型代码：' + list[select]);
            cm.setHair(list[select]);
            cm.dispose();
            break;
        case 11:
            cm.playerMessage(5, '改变脸型，脸型代码：' + list[select]);
            cm.setFace(list[select]);
            cm.dispose();
            break;
        case 12:
            cm.playerMessage(5, '改变肤色，肤色代码：' + list[select]);
            cm.setSkin(list[select]);
            cm.dispose();
            break;
        default:
            cm.dispose();
        }
        break;
    case 3:
        switch (str) {
        case 1:
            if (select < 2000000) {
                if (cm.canHold(select)) {
                    cm.gainItem(select, 1);
                }
            } else {
                if (select >= 5000000 && select < 5010000) {
                    if (cm.canHold(select)) {
                        cm.gainItem(select, 1, b);
                    }
                } else {
                    for (var a = 0; a < b; a++) {
                        if (cm.canHold(select)) {
                            cm.gainItem(select, 1);
                        }
                    }
                }
            }
            cm.dispose();
            break;
        case 4:
            cm.spawnMonster(select, b);
            cm.dispose();
            break;
        case 5:
            cm.dispose();
            switch (b) {
            case 0:
                cm.startQuest(select);
                break;
            case 1:
                cm.completeQuest(select);
                break;
            }
            break;
        case 6:
            cm.teachSkill(select, b);
            cm.useSkill(select, b);
            cm.dispose();
            break;
        default:
            cm.dispose();
        }
    default:
        cm.dispose();
    }
}
var status = -1;