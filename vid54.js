function patternTriangle(n) {
    let l = n / 2;
let ousp = parseInt(l);
let insp = -1;
for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= ousp; j++) {
        process.stdout.write(" ");
    }
    process.stdout.write("*");
    for (let j = 1; j <= insp; j++) {
        process.stdout.write(" ");
    }
    if (insp >= 0) {
        process.stdout.write("*");
    }
    process.stdout.write("\n");
    if (i <= (n / 2)) {
        ousp--;
        insp += 2;
    }
    else {
        ousp++;
        insp -= 2;
    }
}
}
patternTriangle(5)