function solution(n) {
    let result = 0;
    for(let i = 0; i*i <= n; i++) {
        if(n % i === 0) {
            result += i;
            result += n/i;
            if(i === n/i) result -= i;
        }
    }
    return result;
}