function solution(arr, query) {
    query.forEach((i,j) => {
        if(j % 2 === 1) arr = arr.slice(i);
        else arr = arr.slice(0, i + 1);
    })
    return arr;
}