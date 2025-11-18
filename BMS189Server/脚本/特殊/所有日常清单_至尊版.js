var status = 0;
var ca = java.util.Calendar.getInstance();
var year = ca.get(java.util.Calendar.YEAR);
var month = ca.get(java.util.Calendar.MONTH) + 1;
var day = ca.get(java.util.Calendar.DATE);
var hour = ca.get(java.util.Calendar.HOUR);
var minute = ca.get(java.util.Calendar.MINUTE);
var second = ca.get(java.util.Calendar.SECOND);
var tz = '#fEffect/CharacterEff/1082565/4/0#';
var tz5 = '#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#';
var tz2 = '#fEffect/CharacterEff/1082565/0/0#';
var tz3 = '#fEffect/CharacterEff/1082588/0/0#';
var tz4 = '#fEffect/CharacterEff/1082588/3/0#';
var yun = '#fUI/UIWindow/PartySearch2/BtNext/mouseOver/0#';
var icon3 = '#fUI/GuildBBS/GuildBBS/Emoticon/Cash/7#';
var icon4 = '#fUI/GuildBBS/GuildBBS/Emoticon/Cash/6#';
var icon5 = '#fUI/GuildBBS/GuildBBS/Emoticon/Cash/3#';
var icon6 = '#fUI/GuildBBS/GuildBBS/Emoticon/Cash/1#';
var hwtext = new Array('人长得漂亮不如活得漂亮！', '当裤子失去皮带，才懂得什麽叫做依赖。', '烟不听话，所以我们\'抽烟\'。', '你发怒一分钟，便失去60秒的幸福。', '当男人遇见女人，从此只有纪念日，没有独立日。', '路见不平一声吼，吼完继续往前走。', '幸福是个比较级，要有东西垫底才感觉得到。', '知识就像内裤，看不见但很重要', '作为失败的典型，你实在是太成功了', '女人喜欢长得坏坏的男人，不是喜欢长坏了的男人', '跌倒了，爬起来再哭', '你若流泪，先湿的是我的心', '让未来到来，让过去过去', '我自横刀向天笑，笑完之后去睡觉', '别跟我谈感情，谈感情伤钱', '孤单是一个人的狂欢，狂欢是一群人的孤单', '姐不是收破烂的，做不到让你随喊随到', '我不是草船，你的贱别往我这发', '你的矮是终身的，我的胖却是暂时的', '別在无聊的时候來找我，不然显得我是多余的', '姐不是电视机，不要老是盯着姐看', '即使你已名花有主、我也要移花接木', '心里只有你一个频道 最可恨的是还没有广告', '给你最大的报复，就是活的比你幸福', '要不是老师说不能乱扔垃圾，不然我早把你扔出去', '没有癞蛤蟆，天鹅也会寂寞', '我是光棍我可耻，我给国家浪费纸', '人生没有如果，只有后果和结果', '你那么有钱 为什么不让鬼来推磨？', '别把人和狗相提并论，狗最起码忠诚', '生活嘛，就是生下来，活下去', '当你披上了婚纱 我也披上了袈裟', '趁着年轻把能干的坏事都干了吧，没几年了', '我人生只会两件事 1 这也不会 2 那也不会', '出租车司机，司机中的战斗机，噢耶！', '思想有多远，你就给我滚多远!', '人生最大的悲哀是青春不在,青春痘却还在。', '最简单的长寿秘决:保持呼吸，不要断气~', '打死我也不说，你们还没使美人计呢!', '不要和我比懒,我懒得和你比', '我不是个随便的人 我随便起来不是人', '不怕虎一样的敌人，就怕猪一样的队友', '老虎不发威 你当我是HELLO KITTY！', '吃自助最高境界：扶墙进，扶墙出。', '爷爷都是从孙子走过来的……', '夏天就是不好，穷的时候我连西北风都没得喝', '没什么事就不要找我，有事了更不要找我。', '我想早恋，可是已经晚了……', '钱可以解决的问题都不是问题。', '天哪，我的衣服又瘦了！', '不吃饱哪有力气减肥啊？', '连广告也信，读书读傻了吧？', '人怕出名猪怕壮，男怕没钱女怕胖。', '如果有钱也是一种错，我情愿一错再错', '命运负责洗牌，但是玩牌的是我们自己！', '好好活着，因为我们会死很久!', '人又不聪明，还学人家秃顶！', '我总在牛a与牛c之间徘徊。', '不怕被人利用，就怕你没用。', '鄙视我的人这么多，你算老几? ', '秀发去无踪，头屑更出众！', '春色满园关不住，我诱红杏出墙来。', '问世间情为何物？一物降一物', 'bmw是别摸我，msn是摸死你', '女为悦己者容,男为悦己者穷！', '念了十几年书，还是幼儿园比较好混');
function start() {
    status = -1;
    action(1, 0, 0);
}
function action(e, d, c) {
    if (e == -1) {
        cm.dispose();
    } else {
        if (e == 0 && status == 0) {
            cm.dispose();
            cm.openNpc(0, '拍卖菜单_至尊版');
            return;
        }
        if (e == 1) {
            status++;
        } else {
            status--;
        }
        if (cm.getzhizunvip() != 2) {
            cm.dispose();
            cm.playerMessage(1, '该菜单是至尊版专享。');
            return;
        }
        if (status == 0) {
            var b = Math.floor(Math.random() * hwtext.length);
            var a = '#e#d		' + tz4 + '' + tz3 + '' + cm.getServerName() + ' 日常清单 ' + tz3 + '' + tz4 + '#n#k\r\n';
            a += '#b 幽默时刻:#r' + hwtext[b] + '#k\r\n';
            a += '#b 服务器当前时间：#r' + hour + ':' + minute + ':' + second + '\r\n#n';
            a += '#L0##b' + icon3 + '每日签到 #r[#v3010172##v3010070##v1112779##v2435892#等…]#l#n\r\n';
            a += '#L1##b' + icon3 + '在线奖励 #r[#v2431887##v4001839##v5743003##v5062500#等…]#l#n\r\n';
            a += '#L2##b' + icon3 + '调查神秘河 #r[#v1712001##v1712002##v1712003##v1712005#等…]#l#n\r\n';
            a += '#L3##b' + icon3 + '扫荡神秘河 #r[#v1712001##v1712002##v1712003##v1712005#等…]#l#n\r\n';
            cm.askMenu(a);
        } else {
            if (status == 1) {
                if (c == 0) {
                    cm.dispose();
                    cm.openNpc(9130081, '每日签到');
                }
                if (c == 1) {
                    cm.dispose();
                    cm.openNpc(9400953, '在线时间奖励_至尊版');
                }
                if (c == 2) {
                    cm.dispose();
                    cm.openNpc(3003104, '调查神秘河_至尊版');
                }
                if (c == 3) {
                    cm.dispose();
                    cm.openNpc(3003104, '扫荡神秘河_至尊版');
                }
                if (c == 4) {
                    cm.dispose();
                    cm.openNpc(9310470, '枫叶学堂');
                }
                if (c == 5) {
                    cm.dispose();
                    cm.openNpc(9310470, '数字开锁');
                }
                if (c == 6) {
                    cm.sendOkS('#e#b抢楼活动#n#k在自由市场内NPC进行。');
                    status = -1;
                }
                if (c == 7) {
                    cm.sendOkS('#e#b挤奶活动#n#k在自由市场内NPC进行。');
                    status = -1;
                }
                if (c == 8) {
                    cm.dispose();
                    cm.openNpc(3003104, '神秘力量');
                }
            }
        }
    }
}