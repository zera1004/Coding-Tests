function solution(n) {
    let result = '';
    
    if (n === 0) return 0;

    while (n > 0) {
        let temp = String(n % 3);
        result = temp + result;
        n = Math.floor(n / 3);
    }
    
    return result.split('').reverse().reduce((a, b, c) => +a + +b * (3 ** (result.length - 1 - c)), 0);
}