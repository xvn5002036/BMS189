var status = -1;
var selectionLog = [];
function start() {
    action(1, 0, 0);
}
function action(c, b, a) {
    em.setProperty('escort_end', '1');
    eim.getPlayers().forEach(function (d) {
        d.getAPI().fieldEffect_ScreenMsg('quest/party/clear');
        d.getAPI().fieldEffect_PlayFieldSound('Party1/Clear', 100);
    });
    cm.dispose();
}