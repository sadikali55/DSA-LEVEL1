function table(x) {
    for (let i = 1; i <= 10; i++) {
        process.stdout.write("" + x + " * " + i + " = " + x * i);
        process.stdout.write("\n");
    }
}
table(9);