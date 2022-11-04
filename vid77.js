function matchDigit(n, input) {
    let digitcounter = 0;
    while (n > 1) {
        let rem = n % 10;
        let val = n / 10;
        n = parseInt(val);
        if (rem == input) {
            digitcounter++;
        }
    }
    process.stdout.write("" + digitcounter);
process.stdout.write("\n")
}
matchDigit(42644572564, 4);