function solution(a, b) {
    let numArray = [];
    for(let i = a; i > 1; i--) {
        if(a % i === 0) numArray.push(i);
    }
    for (let i of numArray) {
        while(true) {
            if(a % i === 0 && b % i === 0) {
                a = a / i;
                b = b / i;
            } else break;
        }
    }
    while(true) {
        if (b % 2 === 0) b = b / 2;
        else break;
    }
    while(true) {
        if (b % 5 === 0) b = b / 5;
        else break;
    }
    return b === 1? 1: 2
}