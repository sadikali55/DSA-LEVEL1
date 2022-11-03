function isPrime(n) {

    let count = 0;
    for (let i = 2; i * i <= n; i++) {
        if (n % i == 0) {
            count++;
            break;
        }
    }
    if (count == 0) {
        return true;
    }
    else {
        return false;
    }

}


function printPrimeNumbers(l, h) {
    for (let i = l; i <= h; i++) {
        let number = i

        let resp = isPrime(number)
        if (resp == true) {
            process.stdout.write(i +"is prime\n");
        }
        else {
            process.stdout.write(i+" is Not prime\n")
        }
    }

}
console.log(printPrimeNumbers(2, 11));