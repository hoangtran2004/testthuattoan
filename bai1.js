

function printPriceNumber(arr) {
    let newNumber = [];

    function isPrime(n) {
        if (n < 2) {
            return false
        }
        for (let i = 2; i < n; i++) {
            if (n % i === 0) {
                return false
            }
        }
        return true
    }

    for (let i = 0; i < arr.length; i++) {
        if (isPrime([arr[i]])) {
            newNumber.push(arr[i])
        }
    }
    return newNumber.sort();
}

