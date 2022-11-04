function starPattern(n) {
    let sp = 0;
    let stars = n;
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= sp; j++) {

            process.stdout.write(" ");
        }
        for (let j = 1; j <= stars; j++) {
        if (i > 1 && i <= (n / 2) && j > 1 && j < stars) {
            process.stdout.write(" ");
        }
        else {
            process.stdout.write("*")
        }
    }
        if (i <= (n / 2)) {
            stars -= 2;
            sp++;
        }
        else {
            stars += 2;
            sp--;
        }
    
        process.stdout.write("\n");
    }
}
starPattern(7);