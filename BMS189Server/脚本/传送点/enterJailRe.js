function enter() {
  if(cm.isQuestActive(23137)||cm.isQuestActive(23138)){
    cm.warp(931000610, 1, false);
  }else{
    cm.playerMessage(5, '这里是反抗者的监狱……没什么事的话，最好不要进。');
  }
}