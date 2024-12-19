function solution(n) {
    let result = 1;
    let x = 1;
    while(true) {
        if(n * x % 6 === 0) {
            result = n * x / 6;
            break;
        }
        x++
    }
    return result;
}