let sp = 1;
let stars = (5/2)+1;
for (let i = 1; i <= 5; i++) {
    for (let j = 1; j <= stars; j++) {
        process.stdout.write("*");
    }
    for (let j = 1; j <= sp; j++) {
        process.stdout.write(" ");
    }
    for (let j = 1; j <= stars; j++) {
        process.stdout.write("*");
    }
    if(i<=5/2){
        sp += 2;
        stars--;
    }
    else{
        sp -= 2;
        stars++;
    }
    process.stdout.write("\n");
}