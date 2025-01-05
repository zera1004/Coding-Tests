function solution(arr1, arr2) {
    return arr1.map((i,j) => {
        let result = i.map((k,l) => {
            return k + arr2[j][l];
        })
        return result
    })
}