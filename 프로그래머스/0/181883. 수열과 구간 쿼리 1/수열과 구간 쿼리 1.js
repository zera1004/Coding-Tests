function solution(arr, queries) {
    queries.forEach((i,j) => {
        for(let k = i[0]; k <= i[1]; k++) {
            arr[k] += 1;
        }
    })
    return arr;
}