function solution(brown, yellow) {
    let num = [];
    let result = [];
    for(let i = yellow; i > 0; i--) {
        if(yellow % i === 0) num.push(i);
    }
    for (let i of num) {
        let temp = (2 * i) + (2 * yellow / i) + 4
        if(temp === brown) {
            result.push(i, yellow / i);
            break;
        }
    }
    result.sort((a,b) => b - a);
    result[0] += 2;
    result[1] += 2;
    return result;
}