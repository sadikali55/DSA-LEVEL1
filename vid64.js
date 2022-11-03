function shapNum(n) {
    let l = n / 2;
    let sp = parseInt(l);
    let num = 1;
    let inc = 1;
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= sp; j++) {
            process.stdout.write(" ");
        }
        let cinc = inc;
        for (let j = 1; j <= num; j++) {
            process.stdout.write("" + cinc);
            if (j < num / 2) {
                cinc++;
            }
            else {
                cinc--;
            }
        }
        if (i < n / 2) {
            sp--;
            num += 2;
            inc++;
        }
        else {
            sp++;
            num -= 2;
            inc--
        }
        process.stdout.write("\n");
    }
}
shapNum(5);