var text, NPC立绘组, index, NPC, face;
var 搜索结果 = null;
var status = 0;
var sel = -1;
var selectionLog = [];
function start() {
    status = -1;
    action(1, 0, 0);
}
function action(mode, type, selection) {
    NPC立绘组 = cm.getConstantScriptContent('菜单_NPC立绘');
    index = Math.floor(Math.random() * NPC立绘组.length);
    NPC = NPC立绘组[index][0];
    face = randomNum(0, NPC立绘组[index][1]);
    if (status <= 0 && mode == 0) {
        cm.dispose();
        cm.openNpc(9900004);
        return;
    }
    if (status >= 0 && mode == 0) {
        cm.dispose();
        cm.openNpc(9110002, 'BMS_单机攻略');
        return;
    }
    if (mode == 1) {
        status++;
    } else {
        status--;
    }
    selectionLog[status] = selection;
    var i = -1;
    if (status <= i++) {
        cm.dispose();
    } else {
        if (status === i++) {
            var selStr = '#face' + face + '##fn方正粗黑宋简体##fs17#';
            selStr += ' #r欢迎使用 BMS冒险岛 攻略系统#k#fs15##b\r\n';
            selStr += ' #L0#搜索BOSS掉落#l\r\n';
            selStr += ' #L1#全职业修复情况#l\r\n';
            selStr += '\r\n #k#fs20##L10090#返回主菜单#l\r\n#n';
            cm.askMenu_Bottom(selStr, 204, NPC);
        } else {
            var reactor = 'action' + selectionLog[1];
            eval(reactor)(mode, type, selection, i);
        }
    }
}
function action0(f, d, c, b) {
    var a = 0;
    if (status <= b++) {
        cm.askText_Bottom('#face' + face + '##fn方正粗黑宋简体# 请输入您要搜索的BOSS名称，支持模糊查询。#fs15#\r\n  #b如：希纳斯、麦格纳斯、阿卡、虚空', NPC);
    } else {
        if (status === b++) {
            if (cm.getText() == '') {
                cm.playerMessage(-1, '请输入关键字！');
                cm.effect_NormalSpeechBalloon('请输入关键字', 1, 0, 0, 3000, 0, 0);
                cm.dispose();
                return;
            }
            搜索结果 = 获取搜索关键字(cm.getText());
            var e = '#face' + face + '##fn方正粗黑宋简体##fs15#';
            if (!搜索结果.length <= 0) {
                for (var b = 0; b < 搜索结果.length; b++) {
                    a++;
                    BOSS名称 = 搜索结果[b][1];
                    e += ' 【' + 搜索结果[b][1] + '】';
                    e += '  #b#v' + 搜索结果[b][2] + '##z' + 搜索结果[b][2] + '##g(' + 搜索结果[b][4] + '~' + 搜索结果[b][5] + ') ';
                    e += ' #k概率：#r' + 搜索结果[b][6] / 10000 + '%#k \r\n';
                }
                cm.getTopMsgFont('' + BOSS名称 + '相关：' + a + '条爆率', 3, 20, 4, 0, 0);
                cm.askAcceptDecline_Bottom(e, 204, NPC);
            } else {
                var e = '#face' + face + '##fn方正粗黑宋简体##fs17##r特殊BOSS 掉落不在数据库内#k#fs15#\r\n';
                switch (cm.getText()) {
                case '贝勒德':
                    e += ' 【贝勒德】掉率如下：\r\n';
                    e += ' 无核、一核：#v1113072# #v1132243# #v1122264# #v1032220# \r\n';
                    e += ' 二核：#v1113073# #v1132244# #v1122265# #v1032221# \r\n';
                    e += ' 三核：#v1113074# #v1132245# #v1122266# #v1032222# #v1113075# #v1132246# #v1122267# #v1032223# \r\n';
                    e += ' #v2615003# #v1142659# #v2049116# #v5062010# #v2430692#  ';
                    e += ' #v1113236# #v1012570# #v1122352# #v1152195# #v1132299# #v1022264# #v1032263# ';
                    cm.askAcceptDecline_Bottom(e, 204, NPC);
                    break;
                    return;
                default:
                    cm.getTopMsgFont('未录入的BOSS。', 3, 20, 4, 0, 0);
                    break;
                }
            }
        } else {
            if (status === b++) {
                cm.dispose();
                cm.openNpc(9110002, 'BMS_单机攻略');
            }
        }
    }
}
function action1(e, c, b, a) {
    if (status <= a++) {
        var d = '#face' + face + '##fn方正粗黑宋简体##fs15#';
        d += '  ( #r[红色]#k表示1-4转完整  #g[绿色]#k表示1-5转完整 )\r\n  请选择您想要查看详情的职业：[此次更新框架 功能暂未完成 等待更新]\r\n';
        d += ' #r#L112#全职业已修复#l#k';
        cm.askMenu_Bottom(d, 204, NPC);
    } else {
        if (status === a++) {
            cm.dispose();
        }
    }
}
function action2(d, c, b, a) {
    if (status <= a++) {
    } else {
        if (status === a++) {
        }
    }
}
function action3(d, c, b, a) {
    if (status <= a++) {
    } else {
        if (status === a++) {
        }
    }
}
function action10090(d, c, b, a) {
    if (status <= a++) {
        cm.dispose();
        cm.openNpc(9900004);
    }
}
function 获取搜索关键字(a) {
    a = a.replaceAll('.*([\';]+|(--)+).*', ' ');
    var c = [];
    var b = 'select dropperid, dropperName, itemid, itemName, minimum_quantity, maximum_quantity, questid, chance from drop_default_boss where dropperName like \'%' + a + '%\' order by id desc, chance asc';
    cm.queryForAllResults(b).forEach(function (d) {
        c.push([
            d.getInt('dropperid'),
            d.getString('dropperName'),
            d.getInt('itemid'),
            d.getString('itemName'),
            d.getInt('minimum_quantity'),
            d.getInt('maximum_quantity'),
            d.getInt('chance')
        ]);
    });
    return c;
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