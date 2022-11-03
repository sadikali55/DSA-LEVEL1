let stars ="";

for(let i=1;i<=5;i++){
  for(let j=1;j<=i;j++){
   stars ="*";
    process.stdout.write(stars);    
  }
  process.stdout.write("\n");

}

