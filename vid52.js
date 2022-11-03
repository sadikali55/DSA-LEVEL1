
for (let i = 1; i <= 5; i++) {
    for (let j = 1; j <= 5; j++) {
        if (i == j || i + j == (5 + 1)) {
            process.stdout.write("*");
        }
        else {
            process.stdout.write(" ");
        }
    }
    process.stdout.write("\n");
}