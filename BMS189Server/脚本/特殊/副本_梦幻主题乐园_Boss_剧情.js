var open = true;
var PQname = ['副本_梦幻主题乐园_Boss_剧情'];
var PQLog = ['副本_梦幻主题乐园_Boss_剧情'];
var startmap = 222130200;
var minLevel = [33];
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
        var a = cm.getEventManager(PQname[chs]);
        if (a == null || open == false) {
            cm.askMenu('配置文件不存在,请联系管理员。');
        } else {
            var e = a.getNumberProperty('state');
            if (e == 0) {
                cm.updateInfoQuest(31389, 'ex=4');
                cm.fieldEffect_PlayFieldSound('Sound/SoundEff.img/heart', 128);
                a.startInstance(cm.getPlayer());
                a.setProperty('PQLog', PQLog[chs]);
            } else {
                cm.sendOkS('好像已经有人在进行尝试了，换其他频道尝试吧。');
            }
        }
        cm.dispose();
    } else {
        cm.dispose();
    }
}