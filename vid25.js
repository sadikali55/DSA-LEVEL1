function countDigit(n) {
    digit = 0;
    while (n >= 1) {
        n = n / 10;
        digit++;
    }
    return digit;
}
function rotation(n,k) {
    let recall = countDigit(n);
    let div = 1;
    let multi = 1;
    k = k % recall;
    if (k < 0) {
        k = k + recall;
    }
    for (let i = 1; i <= recall; i++) {
        if (i <= k) {
            div = div * 10;
        }
        else {
            multi = multi * 10;
        }
    }
    let q = n / div;
    let r = n % div;
    r = r * multi + q;
   return(parseInt(r));
}
console.log(rotation(784452,-14));