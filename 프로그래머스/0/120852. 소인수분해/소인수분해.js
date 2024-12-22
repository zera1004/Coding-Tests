function solution(n) {
    let result = [];
    while(n !== 1) {
        for(let i = 2; i < n + 1; i++) {
            if(n % i === 0) {
                n /= i;
                if(!result.includes(i)) result.push(i)
                break;
            }
        }
    }
    return result.sort((a,b) => a - b)
}