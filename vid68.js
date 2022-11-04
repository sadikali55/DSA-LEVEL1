function numPattern(n) {
    let l = n / 2;
    let sp = parseInt(l);
    let stars = 1;
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= sp; j++) {
            if (i != (sp+1 )) {
                process.stdout.write(" ");
            }
             else {
                process.stdout.write("*");
             }
        }

        for (let j = 1; j <= stars; j++) {
            process.stdout.write("*");
        }
        process.stdout.write("\n");
        if (i <= (n / 2) ) {
            stars++;
        }
        else {
            stars--;
        }
    }
}
numPattern(5);