function gcdLcm(n, m) {
    on = n;
    om = m;
    while (n % m != 0) {
        let rem = n % m;
        n = m;
        m = parseInt(rem);
    }
    let gcd = m;
    let lcm = (on * om) / gcd;
    console.log(gcd);
    console.log(lcm);
}
console.log(gcdLcm(36, 24));