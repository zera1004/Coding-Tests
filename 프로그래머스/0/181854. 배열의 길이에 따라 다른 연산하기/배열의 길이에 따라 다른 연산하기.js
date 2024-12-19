function solution(arr, n) {
    return arr.map((i,j) => {
        if (arr.length % 2 === 1) return j % 2 === 0 ? i + n : i;
        if (arr.length % 2 === 0) return j % 2 === 1 ? i + n : i;
    })
}