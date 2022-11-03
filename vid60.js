function numberNew(n) {
    for (let i = 0; i < n; i++) {
        let icj = 1;
        for (let j = 0; j <= i; j++) {
            process.stdout.write("" + icj + "\t")
            let icjp1 = icj * (i - j) / (j + 1);
            icj = icjp1;
        }
        process.stdout.write("\n");
    }
}
numberNew(6);