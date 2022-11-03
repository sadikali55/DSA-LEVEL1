let starsFirst = "";
for(let i=1;i<=5;i++){
    for(let j=1;j<=i;j++){
        starsFirst = "*";
        process.stdout.write(starsFirst);
    }
    process.stdout.write("\n");
}