function anyToAnyConvert(n, c, b) {
    let basevalue = 0;
    let i = 1;
    while (n > 0) {
        let rem = n % b;
        let rval = n / b;
        n = parseInt(rval);
        basevalue += rem * i;
        i = i * c;
    }
    process.stdout.write("" + basevalue);
    process.stdout.write("\n");
}
anyToAnyConvert(650,10,8);