var chose = false;
var price = 20000000;
var jobs, weapon, skill;
var free_advancement = 53748264;
var state_available = 0, state_unavailable = 1;
function start() {
    loadAvailableJobs();
    cm.askYesNo('Using the Free Advancement system, you can choose to switch to a different job within your class.\r\nTo do so, there are a few requirements you need to follow.\r\n- You must be a 4th job Adventurer.\r\n- You must have ' + price + ' mesos.\r\n- You can only change jobs once per day.\r\nThe following will be applied once you use the Free Advancement system.\r\n- All your SP and mastery levels will be reset.\r\n- If the job you are switching to uses a different main stat, your AP will be switched.\r\n- If the job you are switching to has a Link Skill, you will gain that Link Skill.\r\n- After switching, you will get a level 100 weapon of the job you switched to.\r\n\r\nWould you like to use the Free Advancement system?\r\n');
}
function action(c, b, a) {
    if (c != 1) {
        cm.dispose();
        return;
    }
    if (!chose) {
        if (getState() == state_unavailable) {
            cm.sendOk('You may not use the Free Advancement system anymore today.');
            cm.dispose();
            return;
        }
        if (getState() != state_available) {
            cm.sendOk('A problem has occured, please try again.');
            cm.dispose();
            return;
        }
        if (cm.getPlayer().getJob() > 1000 || cm.getPlayer().getJob() % 100 != 12) {
            cm.sendOk('You must be a 4th job advanturer.');
            cm.dispose();
            return;
        }
        if (cm.getPlayer().getMeso() < price) {
            cm.sendOk('You must have ' + price + ' mesos.');
            cm.dispose();
            return;
        }
        cm.askMenu('What job do you want to change to?\r\n#L999#I don\'t want to use the Free Advancement system.\r\n' + getJobSelection());
    } else {
        if (a == 999) {
            cm.dispose();
            return;
        }
        if (jobs[a] == null) {
            cm.sendOk('A problem has occured, please try again.');
            cm.dispose();
            return;
        }
        cm.getPlayer().changeJob(jobs[a]);
        if (weapon != 0) {
            cm.gainItem(weapon, 1);
        }
        if (skill != 0) {
        }
    }
}
function loadAvailableJobs() {
    var a = cm.getPlayer().getJob();
    switch (a) {
    case 112:
        jobs = [
            [
                122,
                'Paladin'
            ],
            [
                132,
                'Dark Knight'
            ]
        ];
        break;
    case 122:
        jobs = [
            [
                112,
                'Hero'
            ],
            [
                132,
                'Dark Knight'
            ]
        ];
        break;
    case 132:
        jobs = [
            [
                112,
                'Hero'
            ],
            [
                122,
                'Paladin'
            ]
        ];
        break;
    case 212:
        jobs = [
            [
                222,
                'I/L Arch Mage'
            ],
            [
                232,
                'Bishop'
            ]
        ];
        break;
    case 222:
        jobs = [
            [
                212,
                'F/P Arch Mage'
            ],
            [
                232,
                'Bishop'
            ]
        ];
        break;
    case 232:
        jobs = [
            [
                212,
                'F/P Arch Mage'
            ],
            [
                222,
                'I/L Arch Mage'
            ]
        ];
        break;
    case 312:
        jobs = [[
                322,
                'Marksman'
            ]];
        break;
    case 322:
        jobs = [[
                312,
                'Bowmaster'
            ]];
        break;
    case 412:
        jobs = [
            [
                422,
                'Shadower'
            ],
            [
                432,
                'Dual Blade'
            ]
        ];
        break;
    case 422:
        jobs = [
            [
                412,
                'Night Lord'
            ],
            [
                432,
                'Dual Blade'
            ]
        ];
        break;
    case 432:
        jobs = [
            [
                412,
                'Night Lord'
            ],
            [
                422,
                'Shadower'
            ]
        ];
        break;
    case 512:
        jobs = [
            [
                522,
                'Corsair'
            ],
            [
                532,
                'Cannoneer'
            ]
        ];
        break;
    case 522:
        jobs = [
            [
                512,
                'Buccaneer'
            ],
            [
                532,
                'Cannoneer'
            ]
        ];
        break;
    case 532:
        jobs = [
            [
                512,
                'Buccaneer'
            ],
            [
                522,
                'Corsair'
            ]
        ];
        break;
    default:
        jobs = null;
    }
}
function loadBonuses(a) {
    switch (a) {
    case 112:
        weapon = 0;
        break;
    case 122:
        weapon = 0;
        break;
    case 132:
        weapon = 0;
        break;
    case 212:
        weapon = 0;
        break;
    case 222:
        weapon = 0;
        break;
    case 232:
        weapon = 0;
        break;
    case 312:
        weapon = 0;
        break;
    case 322:
        weapon = 0;
        break;
    case 412:
        weapon = 0;
        break;
    case 422:
        weapon = 0;
        break;
    case 432:
        weapon = 0;
        skill = 0;
        break;
    case 512:
        weapon = 0;
        break;
    case 522:
        weapon = 0;
        break;
    case 532:
        weapon = 0;
        skill = 0;
        break;
    }
    if (skill == null) {
        skill = 0;
    }
    if (weapon == null) {
        weapon = 0;
    }
}
function getJobSelection() {
    var b = '';
    for (var a = 0; a < jobs.length; a++) {
        b += '#L' + a + '#' + jobs[a][1] + '#l\r\n';
    }
    return b;
}
function getState() {
    if (cm.getNumberFromQuestCustomData(free_advancement) == 0) {
        return 0;
    }
    return new Date().getTime() / (60 * 1000) - cm.getNumberFromQuestCustomData(free_advancement) >= 24 * 60 ? 1 : 2;
}
function setUnavailable() {
    cm.getPlayer().getQuestNAdd(cm.getQuestById(free_advancement)).setCustomData('' + new Date().getTime() / (60 * 1000));
}
var status = -1;