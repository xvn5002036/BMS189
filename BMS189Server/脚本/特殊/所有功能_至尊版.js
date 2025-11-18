var text;
var a = 0;
var cal = java.util.Calendar.getInstance();
var year = cal.get(java.util.Calendar.YEAR);
var month = cal.get(java.util.Calendar.MONTH) + 1;
var day = cal.get(java.util.Calendar.DATE);
var hour = cal.get(java.util.Calendar.HOUR_OF_DAY);
var min = cal.get(java.util.Calendar.MINUTE);
var sec = cal.get(java.util.Calendar.SECOND);
var weekday = cal.get(java.util.Calendar.DAY_OF_WEEK) - 1;
var weekName = [
    '日',
    '一',
    '二',
    '三',
    '四',
    '五',
    '六'
];
var List = Array(Array('萌新签到 ', '七天签到'), Array('武器破攻 ', '余额突破_至尊版'), Array('强化装备 ', '强化装备_至尊版'), Array('装备还原 ', '装备还原_至尊版'), Array('点券洗血 \r\n', '洗血_至尊版'), Array('回收道具 ', '回收道具_至尊版'), Array('删除道具 ', '删除道具_至尊版'), Array('删除角色 ', '删除角色_至尊版'), Array('蜡笔潜能 ', '蜡笔潜能_至尊版'), Array('神秘力量 \r\n', '神秘力量_至尊版'), Array('超级属性 ', '超级属性_通用'), Array('会员功能 ', '会员功能_至尊版'), Array('宠物复活 ', '宠物复活_至尊版'), Array('转生修仙 ', '飞升修仙'), Array('成就激活 \r\n', '成就激活'), Array('创世解封 ', '创世解封'), Array('取/戴<副手> ', '副手武器'), Array('满技能 ', '全职满技能'), Array('內面耀光 ', '內面耀光'), Array('删除角色_任务 \r\n', '删除角色_任务'), Array('货币兑换 ', '货币兑换_至尊版'));
function start() {
    a = -1;
    action(1, 0, 0);
}
function action(i, g, f) {
    var e = cm.getConstantScriptContent('菜单_NPC立绘');
    var d = Math.floor(Math.random() * e.length);
    var b = e[d][0];
    var h = randomNum(0, e[d][1]);
    if (i <= 0) {
        cm.dispose();
        cm.openNpc(0, '拍卖菜单_至尊版');
    }
    if (i == 1) {
        a++;
    } else {
        a--;
    }
    if (cm.getzhizunvip() != 2) {
        cm.dispose();
        cm.playerMessage(1, '该菜单是至尊版专享。');
        return;
    }
    if (a == 0) {
        text = '#face' + h + '##fn方正粗黑宋简体#';
        text += '     #fs17##r欢迎使用 ' + cm.getServerName() + ' 所有功能#fs15#\r\n';
        text += '      服务器时间：#b' + year + '年' + month + '月' + day + '日 ' + hour + '点' + min + '分' + sec + '秒 #r星期' + weekName[weekday] + '#n#k\r\n';
        for (var j = 0; j < List.length; j++) {
            text += '#b#L' + j + '# ' + List[j][0] + '#k';
        }
        cm.askMenu_Bottom(text, 204, b);
    } else {
        if (a == 1) {
            if (f == 10086) {
                cm.dispose();
                cm.openNpc(9110002, '拍卖菜单_至尊版');
            } else {
                cm.dispose();
                cm.openNpc(9110002, List[f][1]);
            }
        }
    }
}
function randomNum(c, b) {
    switch (arguments.length) {
    case 1:
        return parseInt(Math.random() * c + 1, 10);
        break;
    case 2:
        return parseInt(Math.random() * (b - c + 1) + c, 10);
        break;
    default:
        return 0;
        break;
    }
}