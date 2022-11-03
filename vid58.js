function patternFibonacci(n) {
    let a=0;
let b=1;
for(let i=1;i<=n;i++){
    for(let j=1;j<=i;j++){
        process.stdout.write(""+ a +"\t");
        let c=a+b;
        a=b;
        b=c;
    }
    process.stdout.write("\n");

}
    
}
patternFibonacci(5);