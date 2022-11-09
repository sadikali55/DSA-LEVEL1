let arr = [54, 7, 65, 75, 54, 4];
// for (let i = 0; i <= arr.length; i++) {
//     console.log(arr[i]);
// }

let min = arr[0];
let max = arr[0];
for (let i = 1; i <= arr.length; i++) {
    if (arr[i] > max) {
        max = arr[i];
    }
    if (arr[i] < min) {
        min = arr[i];
    }
}
let sub = max - min;
console.log(sub);