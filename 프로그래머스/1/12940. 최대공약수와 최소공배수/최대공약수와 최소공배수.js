function solution(n, m) {
    let result = [];
    for(let i = n; i > 0; i--) {
        if(n % i === 0 && m % i === 0) {
            result.push(i);
            break;
        }
    }
    for(let i = m; i <= n * m; i++) {
        if(i % n === 0 && i % m === 0) {
            result.push(i)
            break;
        }
    }
    return result;
}