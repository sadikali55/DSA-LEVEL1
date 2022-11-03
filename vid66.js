function numPatern(n) {
    let sp = 2 * n - 3;
    let num = 1;
    let val = 1;
    for (let i = 1; i <= n; i++) {
        let val = 1;
        for (let j = 1; j <= num; j++) {
            process.stdout.write("" + val);
val++;
        }
        for (let j = 1; j <= sp; j++) {
            process.stdout.write(" ");
        }
        if (i == n) {
            num--;
val--;
        }
        for (let j = 1; j <= num; j++) {
            val--;
            process.stdout.write("" + val);

        }
        process.stdout.write("\n");
        sp -= 2;
        num++;
        val++;
    }
}
numPatern(9);