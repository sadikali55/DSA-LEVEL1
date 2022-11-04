function aBA(n1, n2, b) {
    let abc = 0;
    let abd = 0;
    let p=1;
    while (n1 > 0 || n2 > 0 || abc > 0) {
        let rem1 = n1 % 10;
        let rem2 = n2 % 10;
        n1 = parseInt(n1 / 10);
        n2 = parseInt(n2 / 10);
        let rsum = rem1 + rem2 + abc;
        abd = (rsum % b)*p;
        p=p*10;
        abc = parseInt(rsum / b);
        process.stdout.write(""+abd);
    }
    process.stdout.write('\n');
}
aBA(4, 1, 2);