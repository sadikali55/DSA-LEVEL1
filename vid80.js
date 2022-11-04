function dToB(n, b) {
    let basevalue = 0;
    // let i = 0;
    let i = 1;
    while (n > 0) {
        let rem = n % b;
        let c = n / b;
        n = parseInt(c);
        // let val = math.pow(10, i);
       // let val = 10*i; 
        basevalue += rem * i;
        i =i*10;
        // i++;
    }
    process.stdout.write("" + basevalue);
    process.stdout.write("\n");
}
dToB(5, 2);