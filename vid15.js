function fibonacciSeries(n) {
    let a = 0;
    let b = 1;
    for (let i = 1; i <= n; i++) {
        console.log(a);
        let c = a + b;
        a = b;
        b = c;
    }
    //console.log(c);
}
console.log(fibonacciSeries(3));