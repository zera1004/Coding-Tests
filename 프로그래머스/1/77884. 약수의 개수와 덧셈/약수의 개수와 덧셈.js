function solution(left, right) {
    let result = 0;
    for(let i = left; i <= right; i++) {
        let num = 0;
        for(let j = 1; j*j <= i; j++) {
            if(i % j === 0) num += 2;
            if(j * j === i) num--;
        }
        if(num % 2 === 0) result += i;
        else if(num % 2 === 1) result -= i;
    }
    return result;
}