function nTonConvert(n, b) {
    let basevalue = 0;
    let i = 1;
    while (n > 0) {
        let rem = n % 10;
        let rval = n / 10;
        n = parseInt(rval);
        basevalue += rem * i;
        i = i * b;
    }
    process.stdout.write("" + basevalue);
    process.stdout.write("\n");
}
nTonConvert(1010000,2);