const Stack = require("./Stack.js");
function inFix(equ) {
    if (typeof equ !== "string") {
        throw new Error("Please pass string data")
    }
    const stack = new Stack();
    const stackOp = new Stack();
    let v1 = "-";
    let v2 = "+";
    let v3 = "/";
    let v4 = "*";
    let p = 0;
    let val = 0;
    let j =0;
    for (let i = 0; i <= equ.length - 1; i++) {
        val = equ[i];
        if ((stackOp.peek() == v4 || stackOp.peek() == v3) && val != "(") {
            p = eval(stack.peek() + stackOp.peek() + val);
            stack.pop();
            stackOp.pop();
            stack.push(p);
        }
        else if (val == "+" || val == "-" || val == "*" || val == "/" || val == "(") {
            stackOp.push(val);
        }
        else {
            stack.push(val);
        }
        if (val == ")") {
            stack.pop();
            j = stack.pop();
            while (stackOp.peek() != "(") {
                if (stackOp.peek() == v1 || stackOp.peek() == v2) {
                    p = eval(stack.peek() + stackOp.peek() + j);
                    stack.pop();
                    stackOp.pop();
                    stack.push(p);
                }
                if (stackOp.peek() == "(") {
                    stackOp.pop();
                    break;
                }


            }
        }
    }

    while (stackOp.getSize()>0) {
        if (stackOp.peek() == v1 || stackOp.peek() == v2||stackOp.peek() == v3||stackOp.peek() == v4) {
           j= stack.pop();
            p = eval(stack.peek() + stackOp.peek() + j);
            stack.pop();
            stackOp.pop();
            stack.push(p);
        }
    }
    console.log(stack);
}
inFix("2/2+3*(3+5*4/2)");