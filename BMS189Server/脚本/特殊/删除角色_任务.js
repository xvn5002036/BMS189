var DBname = Array(Array('DELETE FROM questinfo WHERE characterid = ?', '角色任务信息'), Array('DELETE FROM queststatus WHERE characterid = ?', '角色任务状态'));
var status = -1;
var selectionLog = [];
function start() {
    action(1, 0, 0);
}
function action(f, l, n) {
    var m = cm.getConstantScriptContent('菜单_NPC立绘');
    var g = Math.floor(Math.random() * m.length);
    var b = m[g][0];
    var k = randomNum(0, m[g][1]);
    var c = cm.getCharacterList();
    if (status == 0 && f == 0) {
        cm.dispose();
        return;
    }
    f == 1 ? status++ : status--;
    selectionLog[status] = n;
    var e = -1;
    if (status <= e++) {
        cm.dispose();
    } else {
        if (status === e++) {
            var o = '#face' + k + '##fn方正粗黑宋简体#';
            o += '   #r#fs18#< ' + cm.getServerName() + ' 删除角色任务 >#fs16#\r\n   你的帐号下有' + c.size() + '个角色，你想删除哪个角色任务？\r\n#b#fs14#';
            for (var e = 0; e < c.size(); e++) {
                o += '  #L' + e + '# #e『#n 「' + c.get(e).getName() + '」   「' + c.get(e).getLevel() + '级」   「' + c.get(e).getJobName() + '」 #e』#n#l\r\n';
            }
            cm.askMenu_Bottom(o, 204, b);
        } else {
            if (status === e++) {
                select = n;
                var p = cm.getOnlineCharacterById(c.get(select).getId());
                if (p != null) {
                    cm.playerMessage(1, c.get(select).getName() + '\r\n 该角色未下线无法清理.请下线后用另一个角色上线');
                    cm.dispose();
                } else {
                    var a = '#face' + k + '##fn方正粗黑宋简体#';
                    a += '#fs17#干掉所有任务存在记录，你确定想删除吗？\r\n#fs15#';
                    a += '#b「当前选择角色：#r' + c.get(select).getName() + '」\r\n';
                    a += '#b「角色ID：#r' + c.get(select).getId() + '」  ';
                    a += '#b「等级：#r' + c.get(select).getLevel() + '」  ';
                    a += '#b「职业：#r' + c.get(select).getJobName() + '」  ';
                    cm.askYesNo_Bottom(a, b);
                }
            } else {
                if (status === e++) {
                    cm.dispose();
                    var j = c.get(select).getId();
                    for (var h = 0; h < DBname.length; h++) {
                        cm.updateSQL(DBname[h][0], j);
                        cm.playerMessage(6, '[' + cm.getServerName() + ']  ' + c.get(select).getName() + '  ' + DBname[h][1] + '   擦除记录.');
                    }
                    cm.playerMessage(-1, '[' + cm.getServerName() + '] 角色任务删除成功');
                    cm.playerMessage(1, '[安全删除成功]\r\n\r\n ：' + c.get(select).getName() + '\r\n 角色所有任务记录.');
                }
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