function solution(n) {
    let result = 0;
    if (n % 2 === 1) {
        for (let i = 1; i <= n ; i +=2) {
            result += i;
        }
    }
    if (n % 2 === 0) {
        for (let i = 2; i <= n; i +=2) {
            result += i**2;
        }
    }
    return result;
}