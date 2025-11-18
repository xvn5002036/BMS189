var state;
function start() {
    state = -1;
    cm.sendNextS('I\'ll tell you how to enter your farm now.');
}
function action(c, b, a) {
    state++;
    switch (state) {
    case 0:
        cm.enter_931060110();
        break;
    case 1:
        cm.sendNextS('When the window pops up, press OK to move.');
        break;
    case 2:
        cm.sendNextPrevS('If you press No, I guess you and I are through.');
        break;
    case 3:
        cm.askYesNoS('Did you get all that? I hate explaining things multiple times.\r\n(Press Yes to return your original location.)');
        break;
    case 4:
        if (c == 1) {
            cm.warp(getSavedLocation('TUTORIAL'));
        } else {
            cm.warp(931060110);
        }
        break;
    }
}
var status = -1;