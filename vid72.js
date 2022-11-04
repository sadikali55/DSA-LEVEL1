function starPattern(n) {
    let star = n;
    let a = (n / 2) + 1;
    let mid = parseInt(a);
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= n; j++) {
            if (i <= (n / 2) && j > mid && j < star || i > 1 && i <= (n / 2) && j < mid || i > (n / 2) + 1 && j > 1 && j < mid || j > mid && i > (n / 2) + 1 && i < star) {
                process.stdout.write(" ");

            }
            else {
                process.stdout.write("*");
            }
        }
        process.stdout.write("\n");
    }
}
starPattern(5);