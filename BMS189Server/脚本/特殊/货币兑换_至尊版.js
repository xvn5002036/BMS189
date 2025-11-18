var 音符 = '#fEffect/CharacterEff/1003276/0/0#';
var 爱心 = '#fEffect/CharacterEff/1022223/4/0#';
var 红色箭头 = '#fUI/UIWindow/Quest/icon6/7#';
var 蓝色角点 = '#fUI/UIWindow.img/PvP/Scroll/enabled/next2#';
var aaa = '#fUI/UIWindow.img/Quest/icon9/0#';
var zzz = '#fUI/UIWindow.img/Quest/icon8/0#';
var sss = '#fUI/UIWindow.img/QuestIcon/3/0#';
function start() {
    status = -1;
    action(1, 0, 0);
}
function action(d, b, a) {
    if (d == -1) {
        cm.dispose();
    } else {
        if (status >= 0 && d == 0) {
            cm.sendOk('感谢你的光临！');
            cm.dispose();
            return;
        }
        if (d == 1) {
            status++;
        } else {
            status--;
        }
        if (status == 0) {
            if (cm.getJob() >= 0 && cm.getJob() <= 522 && cm.hasSkill(1017) == false) {
                cm.teachSkill(1017, 1, 1);
            } else {
                if (cm.getJob() >= 1000 || cm.getJob() <= 2112 && cm.hasSkill(20001019) == false) {
                    cm.teachSkill(20001019, 1, 1);
                }
            }
            var c = '';
            for (i = 0; i < 10; i++) {
                c += '';
            }
            c += '#r---------------------硬币售货系统---------------------\r\n\r\n';
            c += '#L2##r幻 影 币#v4310218##l#l #L8##r英 雄 币#v4310195##l#l #L12##r万花筒币#v4310233##l#l\r\n\r\n';
            c += '#L6##r贝勒德币#v4310097##l#l #L9##r首领怪币#v4310143##l#l #L3##r豫园铜钱#v4310177##l#l\r\n\r\n';
            c += '#L1##r大冒险币#v4310266##l#l #L10##r纪 念 币#v4310108##l#l #L5##r冬日城堡#v4310242##l#l\r\n\r\n';
            c += '#L7##r冬季限量#v4310066##l#l #L11##r金色皇陵#v4310045##l#l #L4##r埃 苏 币#v4310156##l#l\r\n\r\n';
            cm.askMenu(c);
        }
        switch (a) {
        case 1:
            cm.dispose();
            cm.openNpc(9310074, 781);
            break;
        case 2:
            cm.dispose();
            cm.openNpc(9310074, 782);
            break;
        case 3:
            cm.dispose();
            cm.openNpc(9310074, 783);
            break;
        case 4:
            cm.dispose();
            cm.openNpc(9310074, 784);
            break;
        case 5:
            cm.dispose();
            cm.openNpc(9310074, 785);
            break;
        case 6:
            cm.dispose();
            cm.openNpc(9310074, 786);
            break;
        case 7:
            cm.dispose();
            cm.openNpc(9310074, 787);
            break;
        case 8:
            cm.dispose();
            cm.openNpc(9310074, 788);
            break;
        case 9:
            cm.dispose();
            cm.openNpc(9310074, 789);
            break;
        case 10:
            cm.dispose();
            cm.openNpc(9310074, 790);
            break;
        case 11:
            cm.dispose();
            cm.openNpc(9310074, 791);
            break;
        case 12:
            cm.dispose();
            cm.openNpc(9310074, 792);
            break;
        default:
            break;
        }
    }
}