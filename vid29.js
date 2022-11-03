function primeFactor(n) {
    let factor =0;
    for (let i=2; i*i <= n; i++) {
        while(n % i == 0) {
             n = n / i;
             console.log(i);
        }
    }
 if(n !=1){
       console.log(n);
    }
}
console.log(primeFactor(46));