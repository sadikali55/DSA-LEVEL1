const Stack = require("./Stack.js");

function hasBalanceBrackets(equ) {
    const stack = new Stack();
    for (let i = 0; i <= equ.length; i++) {
        let char = equ[i];
        if (char != "}" && char != "]" && char != ")") {
            stack.push(char);
        }
        else {
            while (stack.peek() != "{" && stack.peek() != "[" && stack.peek() != "(") {
                stack.pop();
            }

            if (stack.peek() == "(" && char == ")") {
                stack.pop();
            }
            else if (stack.peek() == "{" && char == "}") {
                stack.pop();
            }
            else if (stack.peek() == "[" && char == "]") {
                stack.pop();
            }
            else {
                return false;
            }
        }
    }

    if (stack.isEmpty()) {
        return true;
    } else {
        return false;
    }
}
// let str = "[[a+b)+{(c+d)*(e/f)}]";
let str = "[[a+b)+{(c+d)*(e/f)}]";
let resp = hasBalanceBrackets(str);
console.log(str + "has balanced bracket:" + resp);