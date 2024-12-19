function solution(a, b, n) {
    let result = 0;

    while (n >= a) {
        let newc = Math.floor(n / a) * b;
        result += newc;
        n = newc + (n % a);
    }
    
    return result;
}