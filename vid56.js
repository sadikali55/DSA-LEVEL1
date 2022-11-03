function numberPattern(n) {
    let number = 0;
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= i; j++) {
            number++;
            process.stdout.write("\t"+number);
        }
        process.stdout.write("\n");
    }

}
numberPattern(5);