function isPrime(n) {

    let count = 0;
    for (let i = 2; i*i <= n; i++) {
        if (n%i == 0) {
            count++;
            break;
        }
    }
    if(count==0){
        return true;
    }
    else{
        return false;
    }

}

console.log(isPrime(100000000000));