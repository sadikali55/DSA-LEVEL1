function span(equ) {
    for (let i = 0; i < equ.length; i++) {
        let count = 0;
        for (let j = i; j >= 0; j--) {
            if (equ[i] >= equ[j]) {
                count++;
            } else {
                break;
            }
        }
       console.log(equ[i] + " " + count);
    }

}
span([6, 4, 7, 19, 3, 10]);