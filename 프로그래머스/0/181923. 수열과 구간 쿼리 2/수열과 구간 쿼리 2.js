function solution(arr, queries) {
    let result = [];
    queries.forEach(i => {
        let tempArr = [];
        arr.forEach((j,l) => {
            if(i[0] <= l && i[1] >= l && i[2] < j) tempArr.push(j)
        })
        if(tempArr.length === 0) result.push(-1)
        else result.push(tempArr.sort((a,b) => a - b)[0])
    })
    return result;
}