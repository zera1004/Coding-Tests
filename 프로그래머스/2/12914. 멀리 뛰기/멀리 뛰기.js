function solution(n) {
    if (n === 1) return 1;
    if (n === 2) return 2;
    let a = 1;
    let b = 2;
    for(let i = 0; i < n - 2; i++) {
        let temp = b;
        b = (a + b) % 1234567;
        a = temp;
    }
    return b;
}