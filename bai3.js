function pairOfNumber(A, n, arr) {
    for (let i = 0; i < A.length; i++) {
        let arr2 = []
        arr2.push(A[i])
        for (let j = i + 1; j < A.length; j++) {
            if (arr2.length === n && !arr[arr2]) {
                arr.push(arr2);
                break;
            } else {
                arr2.push(A[j])
            }
        }
    }
    console.log(arr)
}

pairOfNumber([1, 2, 3], 2, [])




