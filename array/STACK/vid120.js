const Stack = require("./Stack.js");

function inFixConversion(equ) {
    if (typeof equ !== "string") {
        throw new Error("Please pass string data")
    }
    const prestack = new Stack();
    const stackOp = new Stack();
    const poststack = new Stack();
    let v1 = "-";
    let v2 = "+";
    let v3 = "/";
    let v4 = "*";
    let val = 0;
    let j = 0;
    for (let i = 0; i <= equ.length - 1; i++) {
        val = equ[i];
        if ((stackOp.peek() == v3 || stackOp.peek() == v4) && val != "(") {
            if (val == v1 || val == v2 || val == v3 || val == v4) {
                j = prestack.pop();
                j = (stackOp.peek() + prestack.pop() + j);
                prestack.push(j);
                j = poststack.pop();
                j = (poststack.pop() + j + stackOp.pop());
                poststack.push(j);
                stackOp.push(val);

            }
            else {
                j = (stackOp.peek() + prestack.pop() + val);
                prestack.push(j);
                j = (poststack.pop() + val + stackOp.pop());
                poststack.push(j);
            }
        }
        else if (val == "(" || val == "+" || val == "-" || val == "*" || val == "/") {
            stackOp.push(val);
        }
        else if (val == ")") {
            while (stackOp.peek() != "(") {
                j = prestack.pop()
                j = (stackOp.peek() + prestack.pop() + j);
                prestack.push(j);
                j = poststack.pop()
                j = (poststack.pop() + j + stackOp.pop());
                poststack.push(j);
            }
            stackOp.pop();
        }
        else {
            prestack.push(val);
            poststack.push(val);
        }
    }
    while (stackOp.getSize() > 0) {
        if (stackOp.peek() == v1 || stackOp.peek() == v2 || stackOp.peek() == v3 || stackOp.peek() == v4) {
            j = prestack.pop();
            j = (stackOp.peek() + prestack.pop() + j);
            prestack.push(j);
            j = poststack.pop();
            j = (poststack.pop() + j + stackOp.pop());
            poststack.push(j);
        }
    }
    console.log(prestack);
    console.log(poststack);
}
inFixConversion("a+b/b");
