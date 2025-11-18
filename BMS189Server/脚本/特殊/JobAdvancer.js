var job = [
    [
        [
            100,
            'Warrior'
        ],
        [
            200,
            'Magician'
        ],
        [
            300,
            'Bowman'
        ],
        [
            400,
            'Thief'
        ],
        [
            500,
            'Pirate'
        ]
    ],
    [
        [
            1100,
            'Dawn Warrior'
        ],
        [
            1200,
            'Blaze Wizard'
        ],
        [
            1300,
            'Wind Archer'
        ],
        [
            1400,
            'Night Walker'
        ],
        [
            1500,
            'Thunder Breaker'
        ]
    ],
    [
        [
            3200,
            'Battle Mage'
        ],
        [
            3300,
            'Wild Hunter'
        ],
        [
            3500,
            'Mechanic'
        ]
    ],
    [
        [
            110,
            'Fighter'
        ],
        [
            120,
            'Page'
        ],
        [
            130,
            'Spearman'
        ]
    ],
    [
        [
            210,
            'Wizard (F/P)'
        ],
        [
            220,
            'Wizard (I/L)'
        ],
        [
            230,
            'Cleric'
        ]
    ],
    [
        [
            310,
            'Hunter'
        ],
        [
            320,
            'Crossbow Man'
        ]
    ],
    [
        [
            410,
            'Assassin'
        ],
        [
            420,
            'Bandit'
        ]
    ],
    [
        [
            510,
            'Brawler'
        ],
        [
            520,
            'Gunslinger'
        ]
    ]
];
var extrajobs = [
    [
        2300,
        'Mercedes'
    ],
    [
        3100,
        'Demon Slayer'
    ]
];
var specialextrajobs = [
    [
        9400,
        'Dual Blade'
    ],
    [
        9501,
        'Cannoneer'
    ],
    [
        9508,
        'Jett'
    ]
];
var extra = true;
var npc_state = -1;
var select;
var jobindex;
function start() {
    jobindex = null;
    select = null;
    npc_state = -1;
    if (canAdvance(cm.getPlayer().getJob(), cm.getPlayer().getLevel())) {
        if (isExplorer(cm.getPlayer().getJob())) {
            if (cm.getPlayer().getRemainingSp() > 0) {
                cm.sendOk('You have to use all of your SP points in order to job advance.');
                cm.dispose();
                return;
            }
        }
        cm.askYesNo('Would you like to job advance?');
    } else {
        cm.sendOk('You may not advance at the current state.');
        cm.dispose();
    }
}
function action(d, b, a) {
    if (d != 1) {
        cm.dispose();
        return;
    }
    npc_state++;
    switch (npc_state) {
    case 0:
        if (cm.getPlayer().getSubcategory() == 1 && cm.getPlayer().getJob() == 0) {
            cm.getPlayer().changeJob(400);
            cm.dispose();
            return;
        }
        if (cm.getPlayer().getSubcategory() == 1 && cm.getPlayer().getJob() == 400) {
            cm.getPlayer().changeJob(430);
            cm.dispose();
            return;
        }
        if (cm.getPlayer().getSubcategory() == 10 && cm.getPlayer().getJob() == 0) {
            cm.getPlayer().changeJob(508);
            cm.getPlayer().forceChangeChannel(cm.getPlayer().getClient().getChannel());
            cm.dispose();
            return;
        }
        if (cm.getPlayer().getSubcategory() == 2 && cm.getPlayer().getJob() == 0) {
            cm.getPlayer().changeJob(501);
            cm.dispose();
            return;
        }
        if (isBeginnerJob(cm.getPlayer().getJob())) {
            var c = true;
            switch (cm.getPlayer().getJob()) {
            case 0:
                c = false;
                jobSelection(0);
                break;
            case 1000:
                c = false;
                jobSelection(1);
                break;
            case 3000:
                c = false;
                jobSelection(2);
                break;
            case 100:
                c = false;
                jobSelection(3);
                break;
            case 200:
                c = false;
                jobSelection(4);
                break;
            case 300:
                c = false;
                jobSelection(5);
                break;
            case 400:
                c = false;
                jobSelection(6);
                break;
            case 500:
                c = false;
                jobSelection(7);
                break;
            case 501:
                cm.getPlayer().changeJob(530);
                break;
            case 508:
                cm.getPlayer().changeJob(570);
                break;
            case 2000:
                cm.getPlayer().changeJob(2100);
                break;
            case 2001:
                cm.getPlayer().changeJob(2200);
                break;
            case 2002:
                cm.getPlayer().changeJob(2300);
                break;
            case 2003:
                cm.getPlayer().changeJob(2400);
                break;
            case 2004:
                cm.getPlayer().changeJob(2700);
                break;
            case 3001:
                cm.getPlayer().changeJob(3100);
                break;
            case 5000:
                cm.getPlayer().changeJob(5100);
                break;
            case 6000:
                cm.getPlayer().changeJob(6100);
                break;
            case 6001:
                cm.getPlayer().changeJob(6500);
                break;
            default:
                cm.sendOk('Unknown job found.');
                break;
            }
            if (c) {
                cm.dispose();
                return;
            }
        } else {
            if (is1stJob(cm.getPlayer().getJob())) {
                cm.getPlayer().changeJob(cm.getPlayer().getJob() + 10);
                cm.dispose();
                return;
            } else {
                if (is2ndJob(cm.getPlayer().getJob()) || is3rdJob(cm.getPlayer().getJob())) {
                    cm.getPlayer().changeJob(cm.getPlayer().getJob() + 1);
                    cm.dispose();
                    return;
                }
            }
        }
        break;
    case 1:
        select = a;
        if (!isValidJob(select)) {
            cm.dispose();
            return;
        }
        cm.askYesNo('Are you sure you want to Job Advance' + a <= job[jobindex].length ? ' into a(n) #b' + job[jobindex][a][1] + '#k' : '?');
        break;
    case 2:
        if (select != 3100) {
            cm.getPlayer().changeJob(getRealJob(select));
            if (!specialSecondaryWeaponJob(getRealJob(select))) {
                cm.dispose();
            }
            return;
        } else {
            cm.askMenu('As a Demon Slayer, you will have to choose a #bDemon Marking#k.\r\n#L1012276##i1012276##l\r\n#L1012277##i1012277##l\r\n#L1012278##i1012278##l\r\n#L1012279##i1012279##l\r\n#L1012280##i1012280##l');
        }
        if (getSubcategory(select) != 0) {
            cm.getPlayer().changeJob(getRealJob(select));
            cm.getPlayer().setSubcategory(getSubcategory(select));
            cm.getPlayer().dropMessage(0, 'You will change channel now so the special job change will effect you. No worries, you will land on the same channel you were in before.');
            cm.dispose();
            return;
        }
        break;
    case 3:
        cm.getPlayer().setDemonMarking(a);
        cm.getPlayer().setSkinColor(4);
        cm.getPlayer().changeJob(getRealJob(select));
        if (select == 3100) {
            cm.sendOk('As a Demon Slayer, your Mana Points(MP) will turn into Demon Force (DF) as soon as you log off.');
        }
        cm.dispose();
        return;
        break;
    default:
        cm.dispose();
        return;
    }
}
function isExplorer(a) {
    return a / 1000 == 0;
}
function isBeginnerJob(a) {
    return a % 1000 < 100;
}
function is1stJob(a) {
    return a % 1000 >= 100 && a % 100 == 0;
}
function is2ndJob(a) {
    return a % 100 == 10;
}
function is3rdJob(a) {
    return !isBeginnerJob() && a % 10 == 1;
}
function isDualBlade(a) {
    return a >= 430 && a <= 434 || cm.getPlayer().getSubcategory() == 1;
}
function canAdvance(a, b) {
    if (b >= 10 && isBeginnerJob(a)) {
        return true;
    }
    if (b >= 30 && is1stJob(a)) {
        return true;
    }
    if (b >= 70 && is2ndJob(a)) {
        return true;
    }
    if (b >= 120 && is3rdJob(a)) {
        return true;
    }
    if (isDualBlade(a)) {
        if (b >= 20 && a == 400) {
            return true;
        }
        if (b >= 30 && a == 430) {
            return true;
        }
        if (b >= 55 && a == 431) {
            return true;
        }
        if (b >= 70 && a == 432) {
            return true;
        }
        if (b >= 120 && a == 433) {
            return true;
        }
    }
    return false;
}
function jobSelection(a) {
    jobindex = a;
    var f = 'Please, select your job:';
    for (var b = 0; b < job[a].length; b++) {
        f += '\r\n#L' + job[a][b][0] + '#' + job[a][b][1] + '#l';
    }
    if (extra == true && a <= 2) {
        f += '\r\n\r\n#e#bExtra Jobs#k#n: #e#r(New)#k#n';
        for (var d = 0; d < extrajobs.length; d++) {
            f += '\r\n#L' + extrajobs[d][0] + '#' + extrajobs[d][1] + '#l';
        }
        for (var c = 0; c < specialextrajobs.length; c++) {
            f += '\r\n#L' + specialextrajobs[c][0] + '#' + specialextrajobs[c][1] + '#l';
        }
    }
    cm.askMenu(f);
}
function isValidJob(a) {
    var b;
    var c;
    outer:
        for (b = 0; b < a.length; b++) {
            for (c = 0; c < job[b].length; c++) {
                if (job[b][c][0] == a) {
                    break outer;
                }
            }
        }
    for (c = 0; c < extrajobs.length; c++) {
        if (extrajobs[c][0] == a) {
            break;
        }
    }
    for (c = 0; c < specialextrajobs.length; c++) {
        if (specialextrajobs[c][0] == a) {
            break;
        }
    }
}
function getSubcategory(a) {
    switch (a) {
    case 9400:
    case 430:
    case 431:
    case 432:
    case 433:
    case 434:
        return 1;
    case 9501:
        return 2;
    case 9508:
        return 10;
    }
    return 0;
}
function getRealJob(a) {
    switch (a) {
    case 9400:
        return 400;
    case 9501:
        return 501;
    case 9508:
        return 508;
    }
    return a;
}
function specialSecondaryWeaponJob(a) {
    switch (a) {
    case 508:
    case 570:
    case 571:
    case 572:
    case 3001:
    case 3100:
    case 3110:
    case 3111:
    case 3112:
    case 5100:
    case 5110:
    case 5111:
    case 5112:
        return true;
    }
    return false;
}
var status = -1;