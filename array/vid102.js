function sub(arr1, arr2) {
    let sub = new Array(arr1.length > arr2.length ? arr1.length : arr2.length);
    let i = arr1.length - 1;
    let j = arr2.length - 1;
    let k = sub.length - 1;
    b = 0;
    while (k >= 0) {
        let d = b;
        if (i >= 0) {
            d += arr1[i];
        }
        if (j >= 0) {
            if (d >= arr2[j]) {
                d = d - arr2[j];
            }
            else {
                d += 10;
                d = d - arr2[j];
                b -= 1;
            }
            sub[k] = d;
            i--;
            j--;
            k--;
        }


    }
    let idx = 0;
    while (idx < sub.length) {
        console.log(sub[idx]);
        idx++;
    }

}

sub([5, 7, 8], [4, 5, 9]);