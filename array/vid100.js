let arr1 = [5, 1, 9, 8, 6];
let arr2 = [5, 8, 6, 3, 2];

let sum = new Array(arr1.length > arr2.length ? arr1.length : arr2.length);
let c = 0;
let i = arr1.length - 1;
let j = arr2.length - 1;
let k = sum.length -1;
while (k >= 0) {
    let d = c;

    if (i >= 0) {
        d += arr1[i];
    }
    if (j >= 0) {
        d += arr2[j];
    }
    c = parseInt(d / 10);
    d = d % 10;
    sum[k] = d;
    i--;
    k--;
    j--;
}
if (c != 0) {
    console.log(c);
}
console.log(sum);