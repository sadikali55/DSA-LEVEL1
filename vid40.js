let sp = "";
let stars = "";
for (let i = 1; i <= 5; i++) {
    for (let j = 1; j <= (5 - i); j++) {
        sp = " ";
        process.stdout.write(sp);
    }
    for (let j = 1; j <= i; j++) {
        stars = "*";
        process.stdout.write(stars);
    }
    process.stdout.write("\n");

}