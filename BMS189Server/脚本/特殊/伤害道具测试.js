var status = -1;
var selectionLog = [];
function start() {
    action(1, 0, 0);
}
function action(f, d, c) {
    status++;
    selectionLog[status] = c;
    var b = -1;
    if (status <= b++) {
        cm.dispose();
    } else {
        if (status === b++) {
            cm.curNodeEventEnd(true);
            cm.setInGameDirectionMode(true, true);
            cm.setStandAloneMode(true);
            var e = '';
            var d = [
                'NoRed0',
                'NoRed1',
                'NoCri0',
                'NoCri1'
            ];
            for (var a = 0; a < d.length; a++) {
                for (var b = 0; b < 10; b++) {
                    e += '#fEffect/BasicEff.img/damageSkin/1325/' + d[a] + '/' + b + '#';
                }
                e += '\r\n';
            }
            cm.inGameDirectionEvent_Monologue(e, 1);
        } else {
            if (status === b++) {
                cm.curNodeEventEnd(true);
                cm.setInGameDirectionMode(false, true);
                cm.setStandAloneMode(false);
                cm.dispose();
            } else {
                cm.dispose();
            }
        }
    }
}