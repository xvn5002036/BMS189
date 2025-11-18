function start() {
    var c = Math.floor(Math.random() * 14);
    var d;
    var b;
    var a;
    if (c < 3) {
        d = 1022097;
        b = 1;
        a = '龙眼镜';
    } else {
        if (c < 1) {
            d = 1142216;
            b = 1;
            a = 'VIP勋章';
        } else {
            if (c == 2) {
                d = 1102207;
                b = 1;
                a = '金魂披风';
            } else {
                if (c == 3) {
                    d = 1122104;
                    b = 1;
                    a = '旭日吊坠';
                } else {
                    if (c == 4) {
                        d = 1012191;
                        b = 1;
                        a = '暗影双刀面巾';
                    } else {
                        if (c == 5) {
                            d = 1002850;
                            b = 1;
                            a = '圣诞鹿变身帽';
                        } else {
                            if (c == 11) {
                                d = 1112494;
                                b = 1;
                                a = '老公老婆戒指LV49';
                            } else {
                                if (c == 12) {
                                    d = 2040121;
                                    b = 1;
                                    a = '暗影双刀秘密卷轴';
                                } else {
                                    if (c == 6) {
                                        d = 1122143;
                                        b = 1;
                                        a = '觉醒的冒险之心(战士)';
                                    } else {
                                        if (c == 7) {
                                            d = 1122144;
                                            b = 1;
                                            a = '觉醒的冒险之心(魔法师)';
                                        } else {
                                            if (c == 8) {
                                                d = 1122145;
                                                b = 1;
                                                a = '觉醒的冒险之心(弓箭手)';
                                            } else {
                                                if (c == 9) {
                                                    d = 1122146;
                                                    b = 1;
                                                    a = '觉醒的冒险之心(飞侠)';
                                                } else {
                                                    if (c == 10) {
                                                        d = 1122147;
                                                        b = 1;
                                                        a = '觉醒的冒险之心(海盗)';
                                                    } else {
                                                        if (c == 13) {
                                                            d = 2040212;
                                                            b = 1;
                                                            a = '龙眼镜专用特殊卷轴';
                                                        } else {
                                                            d = 2040212;
                                                            b = 1;
                                                            a = '龙眼镜专用特殊卷轴';
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    cm.gainItem(d, b)
    cm.gainItem(2430384, -1);
    cm.topMsg('打开了冒险岛7周年纪念箱，获取了 ' + a + ' ' + b + '个');

    cm.dispose();
}
var status = -1;