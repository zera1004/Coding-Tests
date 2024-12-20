function solution(numbers, k) {
    let result = 0;
    let temp = 1;
    
    for(let i = 0; i < k-1; i++) {
        if (temp === numbers.length) temp = 2;
        else if (temp === numbers.length-1) temp = 1;
        else temp += 2;
    }
    return temp
}