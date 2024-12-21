function solution(i, j, k) {
    let result = [];
    for (let l = i; l <= j; l++) {
        result.push(String(l));
    }
    return result.join('').split('').filter(m => +m === k).length;
}