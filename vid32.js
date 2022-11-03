function pythagorean(p, b, h) {
    if (Math.pow(h, 2) != Math.pow(p, 2) + Math.pow(b, 2)) {
        return false;
    }
    return true;
}
console.log(pythagorean(3, 4, 5));