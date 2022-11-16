const Stack = require("./Stack.js");
function max4Nums(equ) {
    const stack = new Stack();
    for (let i = 0; i <= equ.length - 4; i++) {
        let max = equ[i];

        for (let j = i + 1; j <= i + 3; j++) {
            stack.push(max);
            if (stack.peek() <= (equ[j]) ){
                max = equ[j];
            }
        }
        console.log(max);
    }
}
max4Nums([3, 9, 8, 2, 4, 5, 6]);