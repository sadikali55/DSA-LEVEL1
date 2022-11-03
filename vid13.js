function printPrimeNumbers(l, h) {
    for (let i = l; i <= h; i++) {
        let count = 0;
        for (let j = 2; j * j <= i; j++) {
            if (i % j == 0) {
                count++;
                break;
            }
        }
        if (count == 0) {
            process.stdout.write(i + " is Prime\n");
        }
        else {
            process.stdout.write(i + " is Notprime\n");
        }
    }
}
console.log(printPrimeNumbers(2, 11));