function solution(n) {
    let result = 0;
    for(let i = 1; i <= n; i++) {
        result++;
        while(true) {
            if(result % 3 === 0) result++;
            if(String(result).includes('3')) result++;
            if(result % 3 !== 0 && !(String(result).includes('3'))) break;
        }
        console.log(result)
    }
    return result;
}