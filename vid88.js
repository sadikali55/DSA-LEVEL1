function aBS(n1, n2, b) {
    let abv = 0;
    let bw = b;
    let p = 1;
    while (n1 > 0 || n2 > 0) {
        let rem1 = n1 % 10;
        let rem2 = n2 % 10;
        n1 = parseInt(n1 / 10);
        n2 = parseInt(n2 / 10);
        if (rem1 < rem2) {
            rem1 = rem1 + bw;
            abv += (rem1 - rem2) * p;
            n1 = (n1 - 1);
        }
        else {
            abv += (rem1 - rem2) * p;
        }
        p = p * 10;
    }
    process.stdout.write("anybasesub" + abv);
    process.stdout.write("\n");
}
aBS(1212, 236, 8);