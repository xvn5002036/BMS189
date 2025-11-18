var 箱子名 = '命运卷轴自选';
var status = -1;
var 记录选择 = 0;
var 箱子ID = 2431727;
var itemList = [
	2613072,
	2613073,
	2612084,
	2612085,
	2615056,
	2615057,
	2616220,
	2616221,
	2048844,
	2048845
];
function start() {
  action(1, 0, 0);
}
function action(D, v, R) {
  if (status == 0 && D == 0) {
    cm.dispose();
    return;
  }
  D == 1 ? status++ : status--;
  if (cm.getzhizunvip() != 2) {
    cm.dispose();
    cm.playerMessage(1, '该功能是至尊版专享。');
    return;
  }
  if (status == 0) {
    text = '#b请选择你要获得的#r' + 箱子名 + '#b：\r\n#fn方正粗黑宋简体#';
    for (var C = 0; C < itemList.length; C++) {
      text += '#L' + C + '##i' + itemList[C] + '# #b#z' + itemList[C] + '##l\r\n';
    }
    cm.askMenu(text);
  } else if (status == 1) {
    cm.askNumber('获得 #b#e#v' + itemList[R] + '##z' + itemList[R] + '# #n#k确定了吗？\r\n身上有' + cm.getItemQuantity(箱子ID) + '个箱子，想要打开几个？（单次1-100）');
    selects = R;
  } else if (status == 2) {
    if (!cm.canHold(itemList[selects], R)) {
      cm.sendOkS('哎呀呀！！\r\n选择了' + R + '个#r#v' + itemList[selects] + '##z' + itemList[selects] + '##k但背包没空位啊。');
      cm.dispose();
      return;
    }
    if (R > cm.getItemQuantity(箱子ID) || R > 100) {
      cm.playerMessage(1, '想要打开' + R + '个，\r\n但身上没那么多箱子。\r\n(单次开启上限100个)');
      cm.dispose();
      return;
    }
    var z = cm.getItemInfo();
    cm.gainItem(itemList[selects], R);
    cm.worldSpouseMessage(23, '' + cm.getPlayer().getName() + ' : {' + z.getName(itemList[selects]) + '}是我在' + 箱子名 + '中获得的，恭喜我吧！');
    cm.gainItem(箱子ID, -R);
    cm.playerMessage(-1, '获得道具：' + cm.getItemName(itemList[selects]) + ' x' + R + '');
    cm.playerMessage(1, '获得道具：' + cm.getItemName(itemList[selects]) + ' x' + R + '');
    if (R > 3 && R < 10)
      cm.worldSpouseMessage(25, '[' + 箱子名 + '] ' + ' : ' + '真是豪爽！玩家“' + cm.getPlayer().getName() + '”一口气开了' + R + '个！！！');
    else if (R >= 10 && R < 20) {
      cm.worldSpouseMessage(25, '[' + 箱子名 + '] ' + ' : ' + '真是豪爽！玩家“' + cm.getPlayer().getName() + '”一口气开了' + R + '个！！！');
      cm.worldSpouseMessage(25, '[' + 箱子名 + '] ' + ' : ' + '真是豪爽！玩家“' + cm.getPlayer().getName() + '”一口气开了' + R + '个！！！');
    } else if (R >= 20 && R < 50) {
      cm.worldSpouseMessage(25, '[' + 箱子名 + '] ' + ' : ' + '真是豪爽！玩家“' + cm.getPlayer().getName() + '”一口气开了' + R + '个！！！');
      cm.worldSpouseMessage(25, '[' + 箱子名 + '] ' + ' : ' + '真是豪爽！玩家“' + cm.getPlayer().getName() + '”一口气开了' + R + '个！！！');
      cm.worldSpouseMessage(25, '[' + 箱子名 + '] ' + ' : ' + '真是豪爽！玩家“' + cm.getPlayer().getName() + '”一口气开了' + R + '个！！！');
    } else if (R >= 50) {
      cm.worldSpouseMessage(25, '[' + 箱子名 + '] ' + ' : ' + '真是豪爽！玩家“' + cm.getPlayer().getName() + '”一口气开了' + R + '个！！！');
      cm.worldSpouseMessage(25, '[' + 箱子名 + '] ' + ' : ' + '真是豪爽！玩家“' + cm.getPlayer().getName() + '”一口气开了' + R + '个！！！');
      cm.worldSpouseMessage(25, '[' + 箱子名 + '] ' + ' : ' + '真是豪爽！玩家“' + cm.getPlayer().getName() + '”一口气开了' + R + '个！！！');
      cm.worldSpouseMessage(25, '[' + 箱子名 + '] ' + ' : ' + '真是豪爽！玩家“' + cm.getPlayer().getName() + '”一口气开了' + R + '个！！！');
      cm.worldSpouseMessage(25, '[' + 箱子名 + '] ' + ' : ' + '真是豪爽！玩家“' + cm.getPlayer().getName() + '”一口气开了' + R + '个！！！');
    }
    cm.dispose();
  }
}