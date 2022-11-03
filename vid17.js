function countDigit(n) {
    digit = 0;
    while (n >= 1) {
        n = n / 10;
        digit++;
    }
    return digit;
}
console.log(countDigit(144));