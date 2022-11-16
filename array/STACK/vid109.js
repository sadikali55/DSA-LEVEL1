const Stack = require("./Stack.js");

function greatestTest(nums) {

    let stack = new Stack();
    for (let i = nums.length-1; i >= 0; i--) {
        let val = nums[i];
        if (stack.isEmpty()) {
            stack.push(val);
            console.log(-1);
        }
        else if (stack.peek() > val) {
            console.log(stack.peek());
            stack.push(val);
            // stack.pop();
        }
        else {
            while (stack.peek() < val) {
                stack.pop();
                if (stack.isEmpty()) {
                    console.log(-1);
                    stack.push(val);
                }
                else if(stack.peek()> val){
                    console.log(stack.peek());
                }
            }
        }

    }
}
greatestTest([2, 5, 9, 3, 1, 12, 6, 8, 7])
