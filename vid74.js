function starPattern(n) {
    for (let i = 1; i <= n; i++) {
        for (let k = 1; k <= n; k++) {
            if (k == 1 || k == n) {
                process.stdout.write("*\t");
            }

            else if (i > (n / 2) && (i == k || i + k == n + 1)) {
                process.stdout.write("*\t");
            }
            else {
                process.stdout.write(" \t");
            }
        }
        process.stdout.write("\n");
    }
}
starPattern(5);