function solution(n) {
    let result = []
    while(n != 1) {
        result.push(n)
        if (n % 2 === 0) {
            n /= 2;
        } else if (n % 2 === 1) {
            n = n * 3 + 1;
        }
    }
    result.push(1)
    return result
}