const Stack = require("./Stack");

function span(equ) {
    const stack = new Stack();
    for (let i = 0; i < equ.length; i++) {
        let val = (equ[i]);
        let count = 0;
        for (let j = i; j >= 0; j--) {
            stack.push(val);
            if (stack.peek() >= equ[j]) {
                count++;
            } else {
                break;
            }
        }
        console.log(equ[i] + " " + count);
    }

}
span([6, 4, 7, 19, 3, 10]);