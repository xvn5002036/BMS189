/*
 *	脚本功能：分支判断 
 */

var status = -1;
function start() { action(1, 0, 0); }
function action(mode, type, selection) {
	status++;
	if (cm.getNumberFromQuestInfo(32970, "s1") == 1) {
		action1(mode, type, selection);
	} else {
		cm.dispose();
	}
}

function action1(mode, type, selection) {
	var i = -1;
	if (status <= i++) {
		cm.dispose();
	} else if (status === i++) {

	}
}

function action2(mode, type, selection) {
	var i = -1;
	if (status <= i++) {
		cm.dispose();
	} else if (status === i++) {

	}
}


//===============================================================================================
function randomNum(minNum, maxNum) {
	switch (arguments.length) {
		case 1:
			return parseInt(Math.random() * minNum + 1, 10);
		case 2:
			return parseInt(Math.random() * (maxNum - minNum + 1) + minNum, 10);
		default:
			return 0;
	}
}