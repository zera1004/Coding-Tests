function solution(arr) {
    let result = ''
    return String(arr.map((i,j) =>{
        result += i;
        if (j == arr.length-1) return result;
    })
    .filter(i => i != null))
}