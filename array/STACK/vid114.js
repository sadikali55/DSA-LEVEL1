const Stack = require("./Stack.js");

function largestAreaOfHistogram(equ) {
    const stack = new Stack();
    let largestArea = 0;
    for (let i = 0; i <= equ.length; i++) {
        let count = 1;
        let val = equ[i];
        stack.push(val);
        for (let j = (i + 1); j <= equ.length; j++) {
          if(stack.peek() <= equ[j]){
                count++;
            } else {
                break;
            }
        }
        for (let k = (i - 1); k >= 0; k--) {
            if(stack.peek() <= equ[k]){
                count++;
            } else {
                break;
            }
        }
        let largest = val * count;
        if (largestArea < largest) {
            largestArea = largest;
        }
    }
    console.log(largestArea);
}
largestAreaOfHistogram([9, 9, 9, 4, 5, 2, 9]);