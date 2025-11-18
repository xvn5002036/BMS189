var status = -1;
function start() {
    action(1, 0, 0);
}
function action(c, b, a) {
    cm.fieldEffect_ScreenMsg('UI/UIWindowPL.img/HiddenCatch/StageImg/clear');
    cm.fieldEffect_PlayFieldSound('Party1/Clear');
    cm.dispose();
}