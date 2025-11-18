var DBname = Array(Array('DELETE FROM bosslog WHERE characterid = ?', '角色BOSS挑战日志'), Array('DELETE FROM buddies WHERE characterid = ?', '角色伙伴？'), Array('DELETE FROM character_cards WHERE characterid = ?', '角色卡'), Array('DELETE FROM character_potionpots WHERE characterid = ?', '角色活动坐标'), Array('DELETE FROM characters WHERE id = ?', '角色列表'), Array('DELETE FROM cheatlog WHERE characterid = ?', '角色作弊记录'), Array('DELETE FROM combine_medal WHERE characterid = ?', '角色奖章'), Array('DELETE FROM coreauras WHERE cid = ?', '角色核心光环'), Array('DELETE FROM csitems WHERE characterid = ?', '特殊现金道具？'), Array('DELETE FROM days_check_log WHERE charid = ?', '特殊签到记录'), Array('DELETE FROM effectswitch WHERE characterid = ?', '角色特效开关'), Array('DELETE FROM equip_flame WHERE playerid = ?', '装备涅槃火焰'), Array('DELETE FROM extendedSlots WHERE characterid = ?', '角色扩展小背包'), Array('DELETE FROM famelog WHERE characterid = ?', '角色人气记录'), Array('DELETE FROM familiars WHERE characterid = ?', '角色怪怪卡'), Array('DELETE FROM gmlog WHERE cid = ?', '角色GM行为记录'), Array('DELETE FROM guilds WHERE leader = ?', '角色公会信息'), Array('DELETE FROM hiredmerch WHERE characterid = ?', '角色租赁商品信息'), Array('DELETE FROM hyperrocklocations WHERE characterid = ?', '角色超快跑位置？'), Array('DELETE FROM imps WHERE characterid = ?', '角色小恶魔信息'), Array('DELETE FROM innerskills WHERE characterid = ?', '角色内在能力'), Array('DELETE FROM inventoryitems WHERE characterid = ?', '角色背包道具'), Array('DELETE FROM inventoryslot WHERE characterid = ?', '角色背包空间信息'), Array('DELETE FROM keymap WHERE characterid = ?', '角色键位信息'), Array('DELETE FROM missionstatus WHERE charid = ?', '自定义任务信息'), Array('DELETE FROM mountdata WHERE characterid = ?', '角色装载数据？'), Array('DELETE FROM mts_cart WHERE characterid = ?', '历史活动信息1'), Array('DELETE FROM mts_items WHERE characterid = ?', '历史活动信息2'), Array('DELETE FROM mtsitems WHERE characterid = ?', '历史活动信息3'), Array('DELETE FROM mtstransfer WHERE characterid = ?', '历史活动信息4'), Array('DELETE FROM one_time_reward_record WHERE playerid = ?', '旧在线奖励活动'), Array('DELETE FROM oz_tower WHERE characterid = ?', '角色起源之塔信息'), Array('DELETE FROM parttime WHERE cid = ?', '业余活动信息'), Array('DELETE FROM playernpcs WHERE charid = ?', '玩家NPC信息'), Array('DELETE FROM playernpcs_equip WHERE charid = ?', '玩家NPC装备信息'), Array('DELETE FROM pqlog WHERE characterid = ?', '角色pq挑战记录'), Array('DELETE FROM questinfo WHERE characterid = ?', '角色任务信息'), Array('DELETE FROM queststatus WHERE characterid = ?', '角色任务状态'), Array('DELETE FROM regrocklocations WHERE characterid = ?', '历史活动信息5'), Array('DELETE FROM reports WHERE characterid = ?', '角色调查报告？'), Array('DELETE FROM rings WHERE partnerChrId = ?', '历史活动信息6'), Array('DELETE FROM savedlocations WHERE characterid = ?', '角色位置保存信息'), Array('DELETE FROM scroll_log WHERE chrId = ?', '角色卷轴记录'), Array('DELETE FROM skillmacros WHERE characterid = ?', '角色技能宏信息'), Array('DELETE FROM skills WHERE characterid = ?', '角色技能信息'), Array('DELETE FROM skills_cooldowns WHERE charid = ?', '角色技能冷却时间信息'), Array('DELETE FROM stolen WHERE characterid = ?', '角色偷取技能信息'), Array('DELETE FROM tradesystemgiveback WHERE cid = ?', '贸易系统回馈信息'), Array('DELETE FROM tb_na_xiuxian WHERE user_id = ?', '角色修仙信息3'), Array('DELETE FROM trocklocations WHERE characterid = ?', '历史活动信息7'), Array('DELETE FROM vmatrixrecordinfo WHERE characterid = ?', '角色V5矩阵记录信息'), Array('DELETE FROM wishlist WHERE characterid = ?', '角色商城购物车'));
var status = -1;
var selectionLog = [];
function start() {
    action(1, 0, 0);
}
function action(e, j, l) {
    var k = cm.getConstantScriptContent('菜单_NPC立绘');
    var f = Math.floor(Math.random() * k.length);
    var b = k[f][0];
    var h = randomNum(0, k[f][1]);
    if (cm.getzhizunvip() != 2) {
        cm.dispose();
        cm.playerMessage(1, '该菜单是至尊版专享。');
        return;
    }
    var c = cm.getCharacterList();
    if (status == 0 && e == 0) {
        cm.dispose();
        return;
    }
    e == 1 ? status++ : status--;
    selectionLog[status] = l;
    var d = -1;
    if (status <= d++) {
        cm.dispose();
    } else {
        if (status === d++) {
            var m = '#face' + h + '##fn方正粗黑宋简体#';
            if (c.size() == 0) {
                m += '   #r#fs18#糟糕，没有找到任何角色的记录！\r\n#b#fs14#';
                cm.sendOk_Bottom(m, b);
                cm.dispose();
            } else {
                m += '   #r#fs18#< ' + cm.getServerName() + ' 删除角色 >#fs16#\r\n   你的帐号下有' + c.size() + '个角色，你想让哪个消失？\r\n#b#fs14#';
                for (var d = 0; d < c.size(); d++) {
                    m += '  #L' + d + '# #e『#n 「' + c.get(d).getName() + '」   「' + c.get(d).getLevel() + '级」   「' + c.get(d).getJobName() + '」 #e』#n#l\r\n';
                }
                cm.askMenu_Bottom(m, 204, b);
            }
        } else {
            if (status === d++) {
                select = l;
                var a = '#face' + h + '##fn方正粗黑宋简体#';
                a += '#fs17#将会清理掉所有存在记录，你确定想删除吗？\r\n#fs15#';
                a += '#b「当前选择角色：#r' + c.get(select).getName() + '」\r\n';
                a += '#b「角色ID：#r' + c.get(select).getId() + '」  ';
                a += '#b「等级：#r' + c.get(select).getLevel() + '」  ';
                a += '#b「职业：#r' + c.get(select).getJobName() + '」  ';
                cm.askYesNo_Bottom(a, b);
            } else {
                if (status === d++) {
                    cm.dispose();
                    var g = c.get(select).getId();
                    cm.deleteCharacter(g);
                    cm.playerMessage(-1, '[' + cm.getServerName() + '] 角色删除成功');
                    cm.playerMessage(1, '[安全删除成功]\r\n\r\n 删除角色：' + c.get(select).getName() + '\r\n 及相关所有游戏记录.');
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