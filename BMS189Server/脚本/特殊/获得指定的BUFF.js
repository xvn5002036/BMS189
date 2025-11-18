var status = -1;
var selectionLog = [];
var selects = 0;
var scrolls = Array(Array(' 霰弹炮', 5321054, 10000, '攻击段数微提高3倍'), Array(' 敛财术', 4211003, 10000, '获得更多的金币'), Array(' 抗震防御', 1211014, 10000, '提高所有攻击魔法伤害'), Array(' 精神力', 2101001, 10000, '增加魔力'), Array(' 祝福', 2301004, 10000, '增加攻击力、魔力、防御力'), Array(' 神圣祈祷', 2311003, 10000, '可以获得更多的经验值'), Array(' 魔法盾', 2001002, 10000, '减少受到的伤害，用MP来代替部分伤害'), Array(' 水盾', 23111005, 10000, '提高对所有状态异常的抗性的效果'), Array(' 飞行', 30021237, 10000, '飞行'), Array(' 飞翔', 112111000, 10000, '飞翔'));
function start() {
    action(1, 0, 0);
}
function action(d, c, b) {
    if (status == 0 && d == 0) {
        cm.dispose();
        return;
    }
    d == 1 ? status++ : status--;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose();
    } else {
        if (status === a++) {
            var e = '#fn方正粗黑宋简体##fs14#[' + cm.getServerName() + ']给角色使用BUFF（38自负）：#fs12#';
            for (var a = 0; a < scrolls.length; a++) {
                e += '\r\n#L' + a + '# #s' + scrolls[a][1] + '#　#d#r' + scrolls[a][3] + '#d#k#l';
            }
            cm.askMenuS(e);
        } else {
            if (status === a++) {
                choice = b;
                cm.gainSkillBuff(scrolls[choice][1]);
                cm.dispose();
                cm.getTopMsgFont('' + scrolls[choice][0] + '', 3, 20, 4, 0, 0);
            }
        }
    }
}