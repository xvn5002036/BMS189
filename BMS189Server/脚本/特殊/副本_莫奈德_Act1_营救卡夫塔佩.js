var open = true;
var PQname = ['副本_莫奈德_Act1_营救卡夫塔佩'];
var PQLog = ['副本_莫奈德_Act1_营救卡夫塔佩'];
var startmap = 867200280;
var minLevel = [30];
var maxLevel = [999];
var maxenter = [1000];
var interval = [1000];
var status = -1;
var minPlayers = 1;
var maxPlayers = 6;
var moblevel = 255;
var chs = 0;
function start() {
    status = -1;
    action(1, 0, 0);
}
function action(d, c, b) {
    if (status >= 0 && d == 0) {
        cm.dispose();
        return;
    }
    d == 1 ? status++ : status--;
    if (status == 0) {
        cm.askMenu_Bottom('快……你快点决定啊！勇士！爸爸和乡亲们还在村里呢……！求求你救救他们！#b\r\n#L0#知道了，你到安全的地方等着！#l\r\n#L1#稍等，我需要时间准备一下。等我哦！#l', 37, 9400588);
    } else {
        if (status == 1) {
            if (b == 0) {
                var a = cm.getEventManager(PQname[chs]);
                if (a == null || open == false) {
                    cm.askMenu('配置文件不存在,请联系管理员。');
                } else {
                    if (a.getNumberProperty('state') == 0) {
                        a.startInstance(cm.getPlayer());
                        a.setProperty('PQLog', PQLog[chs]);
                        cm.dispose();
                    } else {
                        cm.sendOkS_Bottom('好像已经有人在进行尝试了，换其他频道尝试吧。');
                    }
                }
            } else {
                cm.sendOk_Bottom('勇士……一定要快一点啊！', 9400588);
                if (cm.getMapId() == 867200280) {
                    cm.dispose();
                }
            }
        } else {
            cm.warp(startmap, 0);
            cm.dispose();
            cm.setStandAloneMode(false);
            cm.setInGameDirectionMode(false, true, false);
        }
    }
}