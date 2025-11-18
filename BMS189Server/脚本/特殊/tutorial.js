var chat = -1;
function start() {
    action(1, 0, 0);
}
function action(c, b, a) {
    if (c == -1 || c == 0 && chat == 0) {
        cm.dispose();
        return;
    }
    if (c == 1) {
        chat++;
    } else {
        if (c == 0) {
            chat--;
        }
    }
    startChat();
}
function startChat() {
    if (chat == 0) {
        cm.sendNextPrev('blah blah');
    } else {
        cm.dispose();
    }
}
var status = -1;