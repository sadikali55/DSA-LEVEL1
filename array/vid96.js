function access(n) {
    let val =-1;
    let arr = [50, 10, 54, 62, 24];
for (let i = 0; i <= arr.length; i++) {
    if (arr[i] == n) {
     val = i;
     break;
    }
}
console.log(val);
}
access(10);