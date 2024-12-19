function solution(n, k) {
    let result = [];
    for(let i = 1;; i++) {
        if ( k*i <= n) result.push(k*i)
        if ( k*i > n) break;
    }
    return result
}