function solution(n) {
    let result = [];
    for(let i = n; i > 0; i--) {
        if (n%i == 0) result.push(i)
    }
    return result.sort((a,b) => a-b)
}