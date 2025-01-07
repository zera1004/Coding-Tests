function solution(num, total) {
    let x = 0;
    let c = 0;
    for(let i = -num; i <= total; i++) {
        if(num % 2 === 1 && num * i === total) {
            x = i - (num - 1) / 2;
            c = 1;
            break;
        }
        if(num % 2 === 0 && (2 * i + 1) * num / 2 === total) {
            x = i - (num / 2 - 1);
            c = 1;
            break;
        }
    }
    
    return new Array(num).fill(0).map((i,j) => {
        return x + j;
    })
}

// 홀수일때 num * i  // i - (num - 1)/2
// 짝수일때 (2 * num + 1) * num / 2 // i - (num / 2 - 1)