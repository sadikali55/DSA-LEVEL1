let arr = [2, 5, 3, 7, 4];
let max = arr[0];
for (let i = 0; i <= arr.length; i++) {
    if (arr[i] > max) {
        max = arr[i];
    }
}
for (let floor = max; floor >= 1; floor--) {
    for (let i = 0; i < arr.length; i++) {
        if (floor <= arr[i]) {
            process.stdout.write("*\t");
        }
        else {
            process.stdout.write(" \t");
        }
    }

     process.stdout.write("\n")
}





