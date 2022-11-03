function countDigit(n) {
    digit = 0;
    while (n >= 1) {
        n = n / 10;
        digit++;
    }
    return digit;
}
function digitPrint(n) {
    let recall = countDigit(n);
let div = Math.pow(10,recall-1);
while(div >=1){
    let q = n/div;
    console.log(parseInt(q));
    n = n % div;
    div = div/10;
}

}


console.log(digitPrint(10000));