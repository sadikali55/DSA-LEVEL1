function inverse(n) {
    let inv = 0;
    let op = 1;
    while (n >= 1) {
        let od = n % 10;
        let id = op;
        let ip = od;

        inv = inv + id * Math.pow(10, ip - 1);
        n = n / 10;
        n = parseInt(n);
        op++;
    }
    return inv;
}
console.log(inverse(21453,3));