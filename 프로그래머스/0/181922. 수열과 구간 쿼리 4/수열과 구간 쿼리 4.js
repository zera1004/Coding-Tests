function solution(arr, queries) {
    queries.forEach(i => {
        arr.forEach((k,l) => {
            if(l >= i[0] && l <= i[1] && l % i[2] === 0) arr[l]++
        })
    })
    return arr
}