var status = -1;
function action(d, c, b) {
    status++;
    var a = -1;
    if (status <= a++) {
        cm.dispose();
    } else {
        if (status === a++) {
            cm.updateInfoQuest(16700, 'count=55;date=20190918');
            cm.updateInfoQuest(16700, 'count=56;date=20190918');
            cm.forceStartQuest(32988, '');
            cm.updateInfoQuest(32999, '00=h0;10=h0;01=h0;02=h0;20=h0;11=h0;21=h1;12=h0;03=h0;13=h0;04=h0;14=h0;05=h0;15=h1;06=h0;16=h1;07=h1;08=h1;17=h0;18=h2;19=h0');
            cm.updateInfoQuest(32999, '00=h0;10=h0;01=h0;02=h0;20=h0;11=h0;21=h1;12=h0;03=h0;13=h0;04=h0;14=h0;05=h0;15=h1;06=h0;16=h1;07=h2;08=h1;17=h0;18=h2;19=h0');
            cm.updateInfoQuest(32988, 'clear=1');
            cm.dispose();
            cm.warp(307000100);
        } else {
            cm.dispose();
        }
    }
}