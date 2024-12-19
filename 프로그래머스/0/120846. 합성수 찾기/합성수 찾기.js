function solution(n) {
    let result = 0;
    for(let i = 1; i <= n; i++) {
        let temp = 0;
        for(let j = 1; j <= i; j++) {
            if (i % j === 0) temp++;
            if(temp === 3) {
                result++;
                break;
            }
        }
    }
    return result
}