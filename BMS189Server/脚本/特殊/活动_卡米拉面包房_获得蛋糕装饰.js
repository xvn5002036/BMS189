var status = -1;
var selectionLog = [];
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
            var c = getType();
            var e = cm.getNumberFromQuestInfo(100136, 'lv');
            if (e < c) {
                cm.askYesNo('#b#ho##k，你的圣诞节蛋糕是#e#bLv.' + e + '#n#k……这种材料从#e#rLv.' + c + '#n#k开始可以使用。\r\n真的要现在添加吗……？\r\n\r\n#r#e※注意※ 即使现在添加为材料，也无法用该材料进行装饰。', 5, 1012108);
            } else {
                getItem();
            }
        } else {
            if (status === a++) {
                getItem();
            }
        }
    }
}
function getType() {
    var a = cm.getNpc();
    if (a >= 2630085) {
        return 6;
    } else {
        if (a >= 2630069) {
            return 5;
        } else {
            if (a >= 2630060) {
                return 4;
            } else {
                if (a >= 2630052) {
                    return 3;
                } else {
                    if (a >= 2630043) {
                        return 2;
                    } else {
                        return 1;
                    }
                }
            }
        }
    }
}
function getIndex() {
    var a = cm.getNpc();
    if (a >= 2630085) {
        return a - 2630085;
    } else {
        if (a >= 2630069) {
            return a - 2630069;
        } else {
            if (a >= 2630060) {
                return a - 2630060;
            } else {
                if (a >= 2630052) {
                    return a - 2630052;
                } else {
                    if (a >= 2630043) {
                        return a - 2630043;
                    } else {
                        return a - 2630034;
                    }
                }
            }
        }
    }
}
function getItem() {
    var d = cm.getNpc();
    var c = getType();
    var a = cm.getStringFromQuestInfo(100140 + c, 'check').toCharArray();
    var b = getIndex() + 1;
    if (a[b] == '0') {
        cm.sendNormalTalk('哇！添加了新的装饰材料！\r\n\r\n#e#b[ 添加的装饰材料 ]#n#k\r\n\r\n#i' + d + ':# #t' + d + ':##n', 4, 1012108, false, true);
        cm.effect_Voice('UI.img/productSuccess', 100);
        a[b] = '1';
        cm.setNumberForQuestInfo(100140 + c, 'check', new java.lang.String(a));
    } else {
        cm.sendNormalTalk('是#i' + d + ':# #t' + d + ':##n！不过你好像已经有了呢。', 4, 1012108, false, true);
    }
    cm.gainItem(d, -1);
    cm.dispose();
}