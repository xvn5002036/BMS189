var A = Array('感受到一阵寒意！', '鼻子有些酸。', '内心惶惶不安！', '风这么大不会遇见怪物吧？');
PP = A[Math.floor(Math.random() * A.length)];
function start() {
    cm.playerMessage(-1, PP);
    cm.dispose();
}