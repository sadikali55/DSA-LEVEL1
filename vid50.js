let sp = 10;
for(let i=1;i<=10;i++){
    for(let j=1;j<=sp-1;j++){
        process.stdout.write(" ");
    }
    process.stdout.write("*"); 
    process.stdout.write("\n");
    sp--;
}