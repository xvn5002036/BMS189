var status = -1;
var selectionLog = [];
function action(f, e, d) {
    if (status == 0 && f == 0) {
        cm.dispose();
        return;
    }
    status++;
    selectionLog[status] = d;
    var c = -1;
    if (status <= c++) {
        cm.dispose();
    } else {
        if (status === c++) {
            var b = cm.getEventInstance();
            var a = b.getProperty('sumReactor');
            if (a.equals('1')) {
                cm.getMap().spawnReactorIfNotExist(3600001, 0, -2163, -1751, 0, 'spirit');
            } else {
                if (a.equals('2')) {
                    cm.getMap().spawnReactorIfNotExist(3600001, 0, -1614, -971, 0, 'spirit');
                } else {
                    if (a.equals('3')) {
                        cm.getMap().spawnReactorIfNotExist(3600001, 0, -869, -731, 0, 'spirit');
                    } else {
                        if (a.equals('4')) {
                            cm.getMap().spawnReactorIfNotExist(3600001, 0, -1360, -1991, 0, 'spirit');
                        } else {
                            if (a.equals('5')) {
                                cm.getMap().spawnReactorIfNotExist(3600001, 0, 533, -731, 0, 'spirit');
                            } else {
                                if (a.equals('6')) {
                                    cm.getMap().spawnReactorIfNotExist(3600001, 0, 1370, -971, 0, 'spirit');
                                } else {
                                    if (a.equals('7')) {
                                        cm.getMap().spawnReactorIfNotExist(3600001, 0, 1902, -1751, 0, 'spirit');
                                    } else {
                                        if (a.equals('8')) {
                                            cm.getMap().spawnReactorIfNotExist(3600001, 0, 1097, -1991, 0, 'spirit');
                                        } else {
                                            cm.dispose();
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
            cm.dispose();
        }
    }
}
function start() {
    status = -1;
    action(1, 0, 0);
}