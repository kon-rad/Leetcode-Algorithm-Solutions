


function nthUglyNumber(n) {
    const arr = new Array(n);
    arr[0] = 1;
    let index2 = 0, index3 = 0, index5 = 0;
    let factor2 = 2, factor3 = 3, factor5 = 5;
    for (let i = 1; i < n; i++) {
        let min = Math.min(Math.min(factor2, factor3), factor5);
        arr[i] = min;
        if (factor2 === min)
            factor2 = 2 * arr[++index2];
        if (factor3 == min)
            factor3 = 3 * arr[++index3];
        if (factor5 == min)
            factor5 = 5 * arr[++index5];
    }
    return arr[n-1];
}