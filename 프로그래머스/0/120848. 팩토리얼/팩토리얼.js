function solution(n) {
    let result = 1;
    let i = 1;
    while(result <= n) {
        i++;
        result *= i;
        console.log(i, result)
    }
    i--;
    return i;
}