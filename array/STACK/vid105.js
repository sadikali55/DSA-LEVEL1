const Stack = require("./Stack.js");

function hasDuplicateBrackets(equ) {
    const stack = new Stack();

    for (let i = 0; i <= equ.length; i++) {
        const char = equ[i]
        if (char != ")") {
            stack.push(char);
        } else {
            if (stack.peek() == "(") {
                return true;
            }
            else {
                while (stack.peek() != "(") {
                    stack.pop();
                }
                // if (stack.peek() == "(") {
                    stack.pop();
                // }
            }
        }
    }
    // if there is a "(" on top of stack; return true; 
    // else remove all items until we find a matching bracket "("
    return false
}




let str = "(a+b)+(a+d)"
let resp = hasDuplicateBrackets(str);
console.log(str + " has duplicates: " + resp)