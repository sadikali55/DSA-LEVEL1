
let l = 15 / 2;
let sp = parseInt(l);
let stars = 1;
for (let i = 1; i <= 15; i++) {
    for (let j = 1; j <= sp; j++) {
        process.stdout.write(" ");
    }
    for (let j = 1; j <= stars; j++) {
        process.stdout.write("*");
    }
    if (i <= 15 / 2) {
        sp--;
        stars += 2;
    }
    else {
        sp++;
        stars -= 2;
    }
    process.stdout.write("\n\t");
}