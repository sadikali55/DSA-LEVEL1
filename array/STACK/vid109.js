const Stack = require("./Stack.js");

function grattest(nums) {
    const stack = new Stack();
    let val = 0;
    for (let i = 1; i <= nums.length; i++) {
        let count = 1; (
        for (let j = i + 1; j <= nums.length; j++)) {
            val = nums[j];
            if (stack.peek() < nums[j]) {
                stack.pop();
                count++;
            }
        }
        if (nums[i] >= val) {
            console.log(-1);
        }

    }
}
grattest([2, 5, 7, 9, 3, 1, 12, 6, 8, 7])
