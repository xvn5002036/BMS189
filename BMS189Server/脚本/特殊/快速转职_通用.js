var status = -1;
var NPC立绘组, index, NPC, face;
var newJob, 全职业id组_0转, 全职业id组_1转, 全职业id组_2转, 全职业id组_3转, 全职业id组_4转;
function start() {
    status = -1;
    action(1, 0, 0);
}
function action(d, b, a) {
    var c = '#face' + face + '##fs18##r#fn方正粗黑宋简体#【BMS新转职系统】使用快速转职会影响剧情和体验喔~#fs15#';
    NPC立绘组 = cm.getConstantScriptContent('菜单_NPC立绘');
    index = Math.floor(Math.random() * NPC立绘组.length);
    NPC = NPC立绘组[index][0];
    face = randomNum(0, NPC立绘组[index][1]);
    全职业id组_0转 = cm.getConstantScriptContent('全职业id_0转');
    全职业id组_1转 = cm.getConstantScriptContent('全职业id_1转');
    全职业id组_2转 = cm.getConstantScriptContent('全职业id_2转');
    全职业id组_3转 = cm.getConstantScriptContent('全职业id_3转');
    全职业id组_4转 = cm.getConstantScriptContent('全职业id_4转');
    if (d == -1) {
        cm.dispose();
        return;
    }
    if (d == 1) {
        status++;
    } else {
        status--;
    }
    if (status == -1) {
        cm.dispose();
        return;
    }
    if (cm.getPlayer().getSubcategory() == 1) {
        暗影双刀转职();
        return;
    } else {
        if (cm.getPlayer().getSubcategory() == 3) {
            古迹猎人转职();
            return;
        } else {
            if (cm.getPlayer().getSubcategory() == 2) {
                火炮手转职();
                return;
            } else {
                if (cm.getPlayer().getSubcategory() == 10) {
                    龙的传人转职();
                    return;
                }
            }
        }
    }
    if (status == 0) {
        if (全职业id组_4转.indexOf(cm.getJob()) > -1) {
            if (cm.isQuestFinished(1465) && cm.getPlayer().getLevel() >= 200) {
                cm.dispose();
                cm.openNpc(1540945, '五转中心_通用');
            } else {
                if (cm.getLevel() < 200) {
                    cm.addPopupSay(9110002, 5000, '【五转】要200级你忘记啦？');
                    cm.dispose();
                } else {
                    cm.dispose();
                    cm.openNpc(1530635, '五转中心_通用');
                }
            }
        } else {
            if (全职业id组_0转.indexOf(cm.getJob()) > -1) {
                if (cm.getPlayer().getLevel() >= 10) {
                    switch (cm.getJob()) {
                    case 0:
                        c += '\r\n#b#L' + 100 + '# [冒险家] 战士（一转）#l';
                        c += '\r\n#b#L' + 200 + '# [冒险家] 法师（一转）#l';
                        c += '\r\n#b#L' + 300 + '# [冒险家] 弓箭手（一转）#l';
                        c += '\r\n#b#L' + 400 + '# [冒险家] 飞侠（一转）#l';
                        c += '\r\n#b#L' + 500 + '# [冒险家] 海盗（一转）#l';
                        break;
                    case 430:
                        break;
                    case 1000:
                        c += '\r\n#b#L' + 1100 + '# [骑士团] 魂骑士（一转）#l';
                        c += '\r\n#b#L' + 1200 + '# [骑士团] 炎术士（一转）#l';
                        c += '\r\n#b#L' + 1300 + '# [骑士团] 风灵使者（一转）#l';
                        c += '\r\n#b#L' + 1400 + '# [骑士团] 夜行者（一转）#l';
                        c += '\r\n#b#L' + 1500 + '# [骑士团] 奇袭者（一转）#l';
                        break;
                    case 5000:
                        c += '\r\n#b#L' + 5100 + '# [骑士团] 米哈尔（一转）#l';
                        break;
                    case 3000:
                        c += '\r\n#b#L' + 3200 + '# [反抗者] 唤灵斗师（一转）#l';
                        c += '\r\n#b#L' + 3300 + '# [反抗者] 豹弩游侠（一转）#l';
                        c += '\r\n#b#L' + 3500 + '# [反抗者] 机械师（一转）#l';
                        c += '\r\n#b#L' + 3700 + '# [反抗者] 爆破手（一转）#l';
                        break;
                    case 3001:
                        c += '\r\n#b#L' + 3100 + '# [反抗者] 恶魔猎手（一转）#l';
                        c += '\r\n#b#L' + 3101 + '# [反抗者] 恶魔复仇者（一转）#l';
                        break;
                    case 3002:
                        c += '\r\n#b#L' + 3600 + '# [反抗者] 尖兵（一转）#l';
                        break;
                    case 2000:
                        c += '\r\n#b#L' + 2100 + '# [英雄] 战神（一转）#l';
                        break;
                    case 2001:
                        c += '\r\n#b#L' + 2200 + '# [英雄] 龙神（一转）#l';
                        break;
                    case 2002:
                        c += '\r\n#b#L' + 2300 + '# [英雄] 双弩精灵（一转）#l';
                        break;
                    case 2003:
                        c += '\r\n#b#L' + 2400 + '# [英雄] 怪盗幻影（一转）#l';
                        break;
                    case 2004:
                        c += '\r\n#b#L' + 2700 + '# [英雄] 夜光法师（一转）#l';
                        break;
                    case 2005:
                        c += '\r\n#b#L' + 2500 + '# [英雄] 隐月（一转）#l';
                        break;
                    case 4001:
                        c += '\r\n#b#L' + 4100 + '# [晓之阵] 剑豪（一转）#l';
                        break;
                    case 4002:
                        c += '\r\n#b#L' + 4200 + '# [晓之阵] 阴阳师（一转）#l';
                        break;
                    case 6000:
                        c += '\r\n#b#L' + 6100 + '# [诺巴] 狂龙战士（一转）#l';
                        break;
                    case 6001:
                        c += '\r\n#b#L' + 6500 + '# [诺巴] 爆莉萌天使（一转）#l';
                        break;
                    case 6002:
                        c += '\r\n#b#L' + 6400 + '# [诺巴] 魔链影士（一转）#l';
                        break;
                    case 14000:
                        c += '\r\n#b#L' + 14200 + '# [现世] 超能力者（一转）#l';
                        break;
                    case 15000:
                        c += '\r\n#b#L' + 15200 + '# [平民翼人] 圣晶使徒（一转）#l';
                        break;
                    case 15001:
                        c += '\r\n#b#L' + 15500 + '# [高等翼人] 影魂异人（一转）#l';
                        break;
                    case 15002:
                        c += '\r\n#b#L' + 15100 + '# [高等翼人] 御剑骑士（一转）#l';
                        break;
                    case 16000:
                        c += '\r\n#b#L' + 16400 + '# [阿尼玛] 虎影（一转）#l';
                        break;
                    case 17000:
                        c += '\r\n#b#L' + 17500 + '# [玄山派] 墨玄（一转）#l';
                        break;
                    case 10000:
                        c += '\r\n#b#L' + 10100 + '# [镜世界] 神之子（一转）#l';
                        break;
                    case 11000:
                        c += '\r\n#b#L' + 11200 + '# [达恩维尔] 林之灵（一转）#l';
                        break;
                    }
                } else {
                    cm.addPopupSay(9110002, 3500, '【一转】要10级你忘记啦？');
                    cm.dispose();
                    return;
                }
            } else {
                if (全职业id组_1转.indexOf(cm.getJob()) > -1) {
                    if (cm.getPlayer().getLevel() >= 30) {
                        switch (cm.getJob()) {
                        case 100:
                            c += '\r\n#b#L' + 110 + '# [冒险家] 剑客（二转）#l';
                            c += '\r\n#b#L' + 120 + '# [冒险家] 准骑士（二转）#l';
                            c += '\r\n#b#L' + 130 + '# [冒险家] 枪战士（二转）#l';
                            break;
                        case 200:
                            c += '\r\n#b#L' + 210 + '# [冒险家] 火毒_巫师（二转）#l';
                            c += '\r\n#b#L' + 220 + '# [冒险家] 冰雷_巫师（二转）#l';
                            c += '\r\n#b#L' + 230 + '# [冒险家] 牧师（二转）#l';
                            break;
                        case 300:
                            c += '\r\n#b#L' + 310 + '# [冒险家] 猎人（二转）#l';
                            c += '\r\n#b#L' + 320 + '# [冒险家] 弩弓手（二转）#l';
                            break;
                        case 400:
                            c += '\r\n#b#L' + 410 + '# [冒险家] 刺客（二转）#l';
                            c += '\r\n#b#L' + 420 + '# [冒险家] 侠客（二转）#l';
                            break;
                        case 500:
                            c += '\r\n#b#L' + 510 + '# [冒险家] 拳手（二转）#l';
                            c += '\r\n#b#L' + 520 + '# [冒险家] 火枪手（二转）#l';
                            break;
                        case 1100:
                            c += '\r\n#b#L' + 1110 + '# [骑士团] 魂骑士（二转）#l';
                            break;
                        case 1200:
                            c += '\r\n#b#L' + 1210 + '# [骑士团] 炎术士（二转）#l';
                            break;
                        case 1300:
                            c += '\r\n#b#L' + 1310 + '# [骑士团] 风灵使者（二转）#l';
                            break;
                        case 1400:
                            c += '\r\n#b#L' + 1410 + '# [骑士团] 夜行者（二转）#l';
                            break;
                        case 1500:
                            c += '\r\n#b#L' + 1510 + '# [骑士团] 奇袭者（二转）#l';
                            break;
                        case 5100:
                            c += '\r\n#b#L' + 5110 + '# [骑士团] 米哈尔（二转）#l';
                            break;
                        case 2100:
                            c += '\r\n#b#L' + 2110 + '# [英雄] 战神（二转）#l';
                            break;
                        case 2200:
                            c += '\r\n#b#L' + 2211 + '# [英雄] 龙神（二转）#l';
                            break;
                        case 2300:
                            c += '\r\n#b#L' + 2310 + '# [英雄] 双弩精灵（二转）#l';
                            break;
                        case 2400:
                            c += '\r\n#b#L' + 2410 + '# [英雄] 怪盗幻影（二转）#l';
                            break;
                        case 2500:
                            c += '\r\n#b#L' + 2510 + '# [英雄] 隐月（二转）#l';
                            break;
                        case 2700:
                            c += '\r\n#b#L' + 2710 + '# [英雄] 夜光法师（二转）#l';
                            break;
                        case 3100:
                            c += '\r\n#b#L' + 3110 + '# [反抗者] 恶魔猎手（二转）#l';
                            break;
                        case 3101:
                            c += '\r\n#b#L' + 3120 + '# [反抗者] 恶魔复仇者（二转）#l';
                            break;
                        case 3200:
                            c += '\r\n#b#L' + 3210 + '# [反抗者] 唤灵斗师（二转）#l';
                            break;
                        case 3300:
                            c += '\r\n#b#L' + 3310 + '# [反抗者] 豹弩游侠（二转）#l';
                            break;
                        case 3500:
                            c += '\r\n#b#L' + 3510 + '# [反抗者] 机械师（二转）#l';
                            break;
                        case 3600:
                            c += '\r\n#b#L' + 3610 + '# [反抗者] 尖兵（二转）#l';
                            break;
                        case 3700:
                            c += '\r\n#b#L' + 3710 + '# [反抗者] 爆破者（二转）#l';
                            break;
                        case 4100:
                            c += '\r\n#b#L' + 4110 + '# [晓之阵] 剑豪（二转）#l';
                            break;
                        case 4200:
                            c += '\r\n#b#L' + 4210 + '# [晓之阵] 阴阳师（二转）#l';
                            break;
                        case 6100:
                            c += '\r\n#b#L' + 6110 + '# [诺巴] 狂龙战士（二转）#l';
                            break;
                        case 6400:
                            c += '\r\n#b#L' + 6410 + '# [诺巴] 魔链影士（二转）#l';
                            break;
                        case 6500:
                            c += '\r\n#b#L' + 6510 + '# [诺巴] 爆莉萌天使（二转）#l';
                            break;
                        case 14200:
                            c += '\r\n#b#L' + 14210 + '# [现世] 超能力者（二转）#l';
                            break;
                        case 15200:
                            c += '\r\n#b#L' + 15210 + '# [平民翼人] 圣晶使徒（二转）#l';
                            break;
                        case 15500:
                            c += '\r\n#b#L' + 15510 + '# [高等翼人] 影魂异人（二转）#l';
                            break;
                        case 15100:
                            c += '\r\n#b#L' + 15110 + '# [高等翼人] 御剑骑士（二转）#l';
                            break;
                        case 16400:
                            c += '\r\n#b#L' + 16410 + '# [阿尼玛] 虎影（二转）#l';
                            break;
                        case 17500:
                            c += '\r\n#b#L' + 17510 + '# [玄山派] 墨玄（二转）#l';
                            break;
                        case 10100:
                            c += '\r\n#b#L' + 10110 + '# [镜世界] 神之子（二转）#l';
                            break;
                        case 11200:
                            c += '\r\n#b#L' + 11210 + '# [达恩维尔] 林之灵（二转）#l';
                            break;
                        }
                    } else {
                        cm.addPopupSay(9110002, 3500, '【二转】要30级你忘记啦？');
                        cm.dispose();
                        return;
                    }
                } else {
                    if (全职业id组_2转.indexOf(cm.getJob()) > -1) {
                        if (cm.getPlayer().getLevel() >= 60) {
                            switch (cm.getJob()) {
                            case 110:
                                c += '\r\n#b#L' + 111 + '# [冒险家] 勇士（三转）#l';
                                break;
                            case 120:
                                c += '\r\n#b#L' + 121 + '# [冒险家] 骑士（三转）#l';
                                break;
                            case 130:
                                c += '\r\n#b#L' + 131 + '# [冒险家] 狂战士（三转）#l';
                                break;
                            case 210:
                                c += '\r\n#b#L' + 211 + '# [冒险家] 火毒_魔导士（三转）#l';
                                break;
                            case 220:
                                c += '\r\n#b#L' + 221 + '# [冒险家] 冰雷_魔导士（三转）#l';
                                break;
                            case 230:
                                c += '\r\n#b#L' + 231 + '# [冒险家] 祭司（三转）#l';
                                break;
                            case 310:
                                c += '\r\n#b#L' + 311 + '# [冒险家] 射手（三转）#l';
                                break;
                            case 320:
                                c += '\r\n#b#L' + 321 + '# [冒险家] 游侠（三转）#l';
                                break;
                            case 410:
                                c += '\r\n#b#L' + 411 + '# [冒险家] 无影人（三转）#l';
                                break;
                            case 420:
                                c += '\r\n#b#L' + 421 + '# [冒险家] 独行客（三转）#l';
                                break;
                            case 510:
                                c += '\r\n#b#L' + 511 + '# [冒险家] 斗士（三转）#l';
                                break;
                            case 520:
                                c += '\r\n#b#L' + 521 + '# [冒险家] 大副（三转）#l';
                                break;
                            case 1110:
                                c += '\r\n#b#L' + 1111 + '# [骑士团] 魂骑士（三转）#l';
                                break;
                            case 1210:
                                c += '\r\n#b#L' + 1211 + '# [骑士团] 炎术士（三转）#l';
                                break;
                            case 1310:
                                c += '\r\n#b#L' + 1311 + '# [骑士团] 风灵使者（三转）#l';
                                break;
                            case 1410:
                                c += '\r\n#b#L' + 1411 + '# [骑士团] 夜行者（三转）#l';
                                break;
                            case 1510:
                                c += '\r\n#b#L' + 1511 + '# [骑士团] 奇袭者（三转）#l';
                                break;
                            case 5110:
                                c += '\r\n#b#L' + 5111 + '# [骑士团] 米哈尔（三转）#l';
                                break;
                            case 2110:
                                c += '\r\n#b#L' + 2111 + '# [英雄] 战神（三转）#l';
                                break;
                            case 2211:
                                c += '\r\n#b#L' + 2214 + '# [英雄] 龙神（三转）#l';
                                break;
                            case 2310:
                                c += '\r\n#b#L' + 2311 + '# [英雄] 双弩精灵（三转）#l';
                                break;
                            case 2410:
                                c += '\r\n#b#L' + 2411 + '# [英雄] 怪盗幻影（三转）#l';
                                break;
                            case 2510:
                                c += '\r\n#b#L' + 2511 + '# [英雄] 隐月（三转）#l';
                                break;
                            case 2710:
                                c += '\r\n#b#L' + 2711 + '# [英雄] 夜光法师（三转）#l';
                                break;
                            case 3110:
                                c += '\r\n#b#L' + 3111 + '# [反抗者] 恶魔猎手（三转）#l';
                                break;
                            case 3120:
                                c += '\r\n#b#L' + 3121 + '# [反抗者] 恶魔复仇者（三转）#l';
                                break;
                            case 3210:
                                c += '\r\n#b#L' + 3211 + '# [反抗者] 唤灵斗师（三转）#l';
                                break;
                            case 3310:
                                c += '\r\n#b#L' + 3311 + '# [反抗者] 豹弩游侠（三转）#l';
                                break;
                            case 3510:
                                c += '\r\n#b#L' + 3511 + '# [反抗者] 机械师（三转）#l';
                                break;
                            case 3610:
                                c += '\r\n#b#L' + 3611 + '# [反抗者] 尖兵（三转）#l';
                                break;
                            case 3710:
                                c += '\r\n#b#L' + 3711 + '# [反抗者] 爆破手（三转）#l';
                                break;
                            case 4110:
                                c += '\r\n#b#L' + 4111 + '# [晓之阵] 剑豪（三转）#l';
                                break;
                            case 4210:
                                c += '\r\n#b#L' + 4211 + '# [晓之阵] 阴阳师（三转）#l';
                                break;
                            case 6110:
                                c += '\r\n#b#L' + 6111 + '# [诺巴] 狂龙战士（三转）#l';
                                break;
                            case 6410:
                                c += '\r\n#b#L' + 6411 + '# [诺巴] 魔链影士（三转）#l';
                                break;
                            case 6510:
                                c += '\r\n#b#L' + 6511 + '# [诺巴] 爆莉萌天使（三转）#l';
                                break;
                            case 14210:
                                c += '\r\n#b#L' + 14211 + '# [现世] 超能力者（三转）#l';
                                break;
                            case 15210:
                                c += '\r\n#b#L' + 15211 + '# [平民翼人] 圣晶使徒（三转）#l';
                                break;
                            case 15510:
                                c += '\r\n#b#L' + 15511 + '# [高等翼人] 影魂异人（三转）#l';
                                break;
                            case 15110:
                                c += '\r\n#b#L' + 15111 + '# [高等翼人] 御剑骑士（三转）#l';
                                break;
                            case 16410:
                                c += '\r\n#b#L' + 16411 + '# [阿尼玛] 虎影（三转）#l';
                                break;
                            case 17510:
                                c += '\r\n#b#L' + 17511 + '# [玄山派] 墨玄（三转）#l';
                                break;
                            case 10110:
                                c += '\r\n#b#L' + 10111 + '# [镜世界] 神之子（三转）#l';
                                break;
                            case 11210:
                                c += '\r\n#b#L' + 11211 + '# [达恩维尔] 林之灵（三转）#l';
                                break;
                            }
                        } else {
                            cm.addPopupSay(9110002, 3500, '【三转】要60级你忘记啦？');
                            cm.dispose();
                            return;
                        }
                    } else {
                        if (全职业id组_3转.indexOf(cm.getJob()) > -1) {
                            if (cm.getPlayer().getLevel() >= 100) {
                                switch (cm.getJob()) {
                                case 111:
                                    c += '\r\n#b#L' + 112 + '# [冒险家] 英雄（四转）#l';
                                    break;
                                case 121:
                                    c += '\r\n#b#L' + 122 + '# [冒险家] 圣骑士（四转）#l';
                                    break;
                                case 131:
                                    c += '\r\n#b#L' + 132 + '# [冒险家] 黑骑士（四转）#l';
                                    break;
                                case 211:
                                    c += '\r\n#b#L' + 212 + '# [冒险家] 火毒_大魔导师（四转）#l';
                                    break;
                                case 221:
                                    c += '\r\n#b#L' + 222 + '# [冒险家] 冰雷_大魔导师（四转）#l';
                                    break;
                                case 231:
                                    c += '\r\n#b#L' + 232 + '# [冒险家] 主教（四转）#l';
                                    break;
                                case 311:
                                    c += '\r\n#b#L' + 312 + '# [冒险家] 神射手（四转）#l';
                                    break;
                                case 321:
                                    c += '\r\n#b#L' + 322 + '# [冒险家] 箭神（四转）#l';
                                    break;
                                case 411:
                                    c += '\r\n#b#L' + 412 + '# [冒险家] 隐士（四转）#l';
                                    break;
                                case 421:
                                    c += '\r\n#b#L' + 422 + '# [冒险家] 侠盗（四转）#l';
                                    break;
                                case 511:
                                    c += '\r\n#b#L' + 512 + '# [冒险家] 冲锋队长（四转）#l';
                                    break;
                                case 521:
                                    c += '\r\n#b#L' + 522 + '# [冒险家] 船长（四转）#l';
                                    break;
                                case 1111:
                                    c += '\r\n#b#L' + 1112 + '# [骑士团] 魂骑士（四转）#l';
                                    break;
                                case 1211:
                                    c += '\r\n#b#L' + 1212 + '# [骑士团] 炎术士（四转）#l';
                                    break;
                                case 1311:
                                    c += '\r\n#b#L' + 1312 + '# [骑士团] 风灵使者（四转）#l';
                                    break;
                                case 1411:
                                    c += '\r\n#b#L' + 1412 + '# [骑士团] 夜行者（四转）#l';
                                    break;
                                case 1511:
                                    c += '\r\n#b#L' + 1512 + '# [骑士团] 奇袭者（四转）#l';
                                    break;
                                case 5111:
                                    c += '\r\n#b#L' + 5112 + '# [骑士团] 米哈尔（四转）#l';
                                    break;
                                case 2111:
                                    c += '\r\n#b#L' + 2112 + '# [英雄] 战神（四转）#l';
                                    break;
                                case 2214:
                                    c += '\r\n#b#L' + 2217 + '# [英雄] 龙神（四转）#l';
                                    break;
                                case 2311:
                                    c += '\r\n#b#L' + 2312 + '# [英雄] 双弩精灵（四转）#l';
                                    break;
                                case 2411:
                                    c += '\r\n#b#L' + 2412 + '# [英雄] 怪盗幻影（四转）#l';
                                    break;
                                case 2511:
                                    c += '\r\n#b#L' + 2512 + '# [英雄] 隐月（四转）#l';
                                    break;
                                case 2711:
                                    c += '\r\n#b#L' + 2712 + '# [英雄] 夜光法师（四转）#l';
                                    break;
                                case 3111:
                                    c += '\r\n#b#L' + 3112 + '# [反抗者] 恶魔猎手（四转）#l';
                                    break;
                                case 3121:
                                    c += '\r\n#b#L' + 3122 + '# [反抗者] 恶魔复仇者（四转）#l';
                                    break;
                                case 3211:
                                    c += '\r\n#b#L' + 3212 + '# [反抗者] 唤灵斗师（四转）#l';
                                    break;
                                case 3311:
                                    c += '\r\n#b#L' + 3312 + '# [反抗者] 豹弩游侠（四转）#l';
                                    break;
                                case 3511:
                                    c += '\r\n#b#L' + 3512 + '# [反抗者] 机械师（四转）#l';
                                    break;
                                case 3611:
                                    c += '\r\n#b#L' + 3612 + '# [反抗者] 尖兵（四转）#l';
                                    break;
                                case 3711:
                                    c += '\r\n#b#L' + 3712 + '# [反抗者] 爆破手（四转）#l';
                                    break;
                                case 4111:
                                    c += '\r\n#b#L' + 4112 + '# [晓之阵] 剑豪（四转）#l';
                                    break;
                                case 4211:
                                    c += '\r\n#b#L' + 4212 + '# [晓之阵] 阴阳师（四转）#l';
                                    break;
                                case 6111:
                                    c += '\r\n#b#L' + 6112 + '# [诺巴] 狂龙战士（四转）#l';
                                    break;
                                case 6411:
                                    c += '\r\n#b#L' + 6412 + '# [诺巴] 魔链影士（四转）#l';
                                    break;
                                case 6511:
                                    c += '\r\n#b#L' + 6512 + '# [诺巴] 爆莉萌天使（四转）#l';
                                    break;
                                case 14211:
                                    c += '\r\n#b#L' + 14212 + '# [现世] 超能力者（四转）#l';
                                    break;
                                case 15211:
                                    c += '\r\n#b#L' + 15212 + '# [平民翼人] 圣晶使徒（四转）#l';
                                    break;
                                case 15511:
                                    c += '\r\n#b#L' + 15512 + '# [高等翼人] 影魂异人（四转）#l';
                                    break;
                                case 15111:
                                    c += '\r\n#b#L' + 15112 + '# [高等翼人] 御剑骑士（四转）#l';
                                    break;
                                case 16411:
                                    c += '\r\n#b#L' + 16412 + '# [阿尼玛] 虎影（四转）#l';
                                    break;
                                case 17511:
                                    c += '\r\n#b#L' + 17512 + '# [玄山派] 墨玄（四转）#l';
                                    break;
                                case 10111:
                                    c += '\r\n#b#L' + 10112 + '# [镜世界] 神之子（四转）#l';
                                    break;
                                case 11211:
                                    c += '\r\n#b#L' + 11212 + '# [达恩维尔] 林之灵（四转）#l';
                                    break;
                                }
                            } else {
                                cm.addPopupSay(9110002, 3500, '【四转】要100级你忘记啦？');
                                cm.dispose();
                                return;
                            }
                        } else {
                            cm.addPopupSay(9110002, 3500, '目前无法继续转职了，为了变得更强要继续努力。');
                            cm.dispose();
                            return;
                        }
                    }
                }
            }
            c += '\r\n\r\n#k#fs17##L1#谢谢，让我再考虑一下吧！#l';
            cm.askMenu_Bottom(c, 204, NPC);
        }
    } else {
        if (status == 1) {
            if (cm.getSpace(2) < 1) {
                cm.getTopMsgFont('背包太满了', 3, 20, 4, 0, 0);
                cm.dispose();
                return;
            }
            if (a == 1) {
                cm.getTopMsgFont('等你想要转职可以再来', 3, 20, 4, 0, 0);
                cm.dispose();
            } else {
                newJob = a;
                cm.askYesNo_Bottom('#face' + face + '#你确定想好要成为一个 #b' + cm.getJobName(newJob) + '#k 吗？', NPC);
            }
        } else {
            if (status == 2) {
                cm.changeJob(newJob);
                cm.gainItem(2430191, 1);
                cm.addPopupSay(9110002, 5000, '经过辛苦的培养，从现在开始你已经是#b' + cm.getJobName(newJob) + '#k了！赠送给你#b#z2430191##k一个！');
                cm.dispose();
            }
        }
    }
}
function 古迹猎人转职() {
    if (cm.getPlayer().getLevel() < 10) {
        cm.addPopupSay(9110002, 3500, '【一转】要10级你忘记啦？');
        cm.dispose();
        return;
    }
    if (status == 0) {
        if (全职业id组_4转.indexOf(cm.getJob()) > -1) {
            if (cm.isQuestFinished(1465) && cm.getPlayer().getLevel() >= 200) {
                cm.dispose();
                cm.openNpc(1540945, '五转中心_通用');
            } else {
                if (cm.getLevel() < 200) {
                    cm.addPopupSay(9110002, 5000, '【五转】要200级你忘记啦？');
                    cm.dispose();
                } else {
                    cm.dispose();
                    cm.openNpc(1530635, '五转中心_通用');
                }
            }
        } else {
            if (cm.getJob() == 0 && cm.getPlayer().getLevel() >= 10) {
                newJob = 301;
            } else {
                if (cm.getJob() == 301 && cm.getPlayer().getLevel() >= 30) {
                    newJob = 330;
                } else {
                    if (cm.getJob() == 330 && cm.getPlayer().getLevel() >= 60) {
                        newJob = 331;
                    } else {
                        if (cm.getJob() == 331 && cm.getPlayer().getLevel() >= 100) {
                            newJob = 332;
                        } else {
                            cm.addPopupSay(9110002, 3500, '目前无法继续转职了，为了变得更强要继续努力。');
                            cm.dispose();
                            return;
                        }
                    }
                }
            }
            cm.askYesNo_Bottom('#face' + face + '#你确定想好要成为一个 #b' + cm.getJobName(newJob) + '#k 吗？', NPC);
        }
    } else {
        if (status == 1) {
            cm.changeJob(newJob);
            cm.gainItem(2430191, 1);
            cm.addPopupSay(9110002, 5000, '经过辛苦的培养，从现在开始你已经是#b' + cm.getJobName(newJob) + '#k了！赠送给你#b#z2430191##k一个！');
            cm.dispose();
        }
    }
}
function 暗影双刀转职() {
    if (cm.getPlayer().getLevel() < 10) {
        cm.addPopupSay(9110002, 3500, '【一转】要10级你忘记啦？');
        cm.dispose();
        return;
    }
    if (status == 0) {
        if (全职业id组_4转.indexOf(cm.getJob()) > -1) {
            if (cm.isQuestFinished(1465) && cm.getPlayer().getLevel() >= 200) {
                cm.dispose();
                cm.openNpc(1540945, '五转中心_通用');
            } else {
                if (cm.getLevel() < 200) {
                    cm.addPopupSay(9110002, 5000, '【五转】要200级你忘记啦？');
                    cm.dispose();
                } else {
                    cm.dispose();
                    cm.openNpc(1530635, '五转中心_通用');
                }
            }
        } else {
            if (cm.getJob() == 0 && cm.getPlayer().getLevel() >= 10) {
                newJob = 400;
            } else {
                if (cm.getJob() == 400 && cm.getPlayer().getLevel() >= 20) {
                    newJob = 430;
                } else {
                    if (cm.getJob() == 430 && cm.getPlayer().getLevel() >= 30) {
                        newJob = 431;
                    } else {
                        if (cm.getJob() == 431 && cm.getPlayer().getLevel() >= 45) {
                            newJob = 432;
                        } else {
                            if (cm.getJob() == 432 && cm.getPlayer().getLevel() >= 60) {
                                newJob = 433;
                            } else {
                                if (cm.getJob() == 433 && cm.getPlayer().getLevel() >= 100) {
                                    newJob = 434;
                                } else {
                                    cm.addPopupSay(9110002, 3500, '目前无法继续转职了，为了变得更强要继续努力。');
                                    cm.dispose();
                                    return;
                                }
                            }
                        }
                    }
                }
            }
            cm.askYesNo_Bottom('#face' + face + '#你确定想好要成为一个 #b' + cm.getJobName(newJob) + '#k 吗？', NPC);
        }
    } else {
        if (status == 1) {
            cm.changeJob(newJob);
            cm.gainItem(2430191, 1);
            cm.addPopupSay(9110002, 5000, '经过辛苦的培养，从现在开始你已经是#b' + cm.getJobName(newJob) + '#k了！赠送给你#b#z2430191##k一个！');
            cm.dispose();
        }
    }
}
function 火炮手转职() {
    if (cm.getPlayer().getLevel() < 10) {
        cm.addPopupSay(9110002, 3500, '【一转】要10级你忘记啦？');
        cm.dispose();
        return;
    }
    if (status == 0) {
        if (全职业id组_4转.indexOf(cm.getJob()) > -1) {
            if (cm.isQuestFinished(1465) && cm.getPlayer().getLevel() >= 200) {
                cm.dispose();
                cm.openNpc(1540945, '五转中心_通用');
            } else {
                if (cm.getLevel() < 200) {
                    cm.addPopupSay(9110002, 5000, '【五转】要200级你忘记啦？');
                    cm.dispose();
                } else {
                    cm.dispose();
                    cm.openNpc(1530635, '五转中心_通用');
                }
            }
        } else {
            if (cm.getJob() == 0 && cm.getPlayer().getLevel() >= 10) {
                newJob = 501;
            } else {
                if (cm.getJob() == 501 && cm.getPlayer().getLevel() >= 30) {
                    newJob = 530;
                } else {
                    if (cm.getJob() == 530 && cm.getPlayer().getLevel() >= 60) {
                        newJob = 531;
                    } else {
                        if (cm.getJob() == 531 && cm.getPlayer().getLevel() >= 100) {
                            newJob = 532;
                        } else {
                            cm.addPopupSay(9110002, 3500, '目前无法继续转职了，为了变得更强要继续努力。');
                            cm.dispose();
                            return;
                        }
                    }
                }
            }
            cm.askYesNo_Bottom('#face' + face + '#你确定想好要成为一个 #b' + cm.getJobName(newJob) + '#k 吗？', NPC);
        }
    } else {
        if (status == 1) {
            cm.changeJob(newJob);
            cm.gainItem(2430191, 1);
            cm.addPopupSay(9110002, 5000, '经过辛苦的培养，从现在开始你已经是#b' + cm.getJobName(newJob) + '#k了！赠送给你#b#z2430191##k一个！');
            cm.dispose();
        }
    }
}
function 龙的传人转职() {
    if (cm.getPlayer().getLevel() < 10) {
        cm.addPopupSay(9110002, 3500, '【一转】要10级你忘记啦？');
        cm.dispose();
        return;
    }
    if (status == 0) {
        if (全职业id组_4转.indexOf(cm.getJob()) > -1) {
            if (cm.isQuestFinished(1465) && cm.getPlayer().getLevel() >= 200) {
                cm.dispose();
                cm.openNpc(1540945, '五转中心_通用');
            } else {
                if (cm.getLevel() < 200) {
                    cm.addPopupSay(9110002, 5000, '【五转】要200级你忘记啦？');
                    cm.dispose();
                } else {
                    cm.dispose();
                    cm.openNpc(1530635, '五转中心_通用');
                }
            }
        } else {
            if (cm.getJob() == 0 && cm.getPlayer().getLevel() >= 10) {
                newJob = 508;
            } else {
                if (cm.getJob() == 508 && cm.getPlayer().getLevel() >= 30) {
                    newJob = 570;
                } else {
                    if (cm.getJob() == 570 && cm.getPlayer().getLevel() >= 60) {
                        newJob = 571;
                    } else {
                        if (cm.getJob() == 571 && cm.getPlayer().getLevel() >= 100) {
                            newJob = 572;
                        } else {
                            cm.addPopupSay(9110002, 3500, '目前无法继续转职了，为了变得更强要继续努力。');
                            cm.dispose();
                            return;
                        }
                    }
                }
            }
            cm.askYesNo_Bottom('#face' + face + '#你确定想好要成为一个 #b' + cm.getJobName(newJob) + '#k 吗？', NPC);
        }
    } else {
        if (status == 1) {
            cm.changeJob(newJob);
            cm.gainItem(2430191, 1);
            cm.addPopupSay(9110002, 5000, '经过辛苦的培养，从现在开始你已经是#b' + cm.getJobName(newJob) + '#k了！赠送给你#b#z2430191##k一个！');
            cm.dispose();
        }
    }
}
function randomNum(b, a) {
    switch (arguments.length) {
    case 1:
        return parseInt(Math.random() * b + 1, 10);
        break;
    case 2:
        return parseInt(Math.random() * (a - b + 1) + b, 10);
        break;
    default:
        return 0;
        break;
    }
}