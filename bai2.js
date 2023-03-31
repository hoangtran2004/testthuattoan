function findFibonacciNumber(n) {
    let a = 0;
    let b = 1;
    let temp;
    if (n <= 0) {
        return `${n} is not fibonacci number`
    }
    for (let i = 2; i <= n; i++) {
        temp = b;
        b = a + b;
        a = temp
    }
    return b
}

