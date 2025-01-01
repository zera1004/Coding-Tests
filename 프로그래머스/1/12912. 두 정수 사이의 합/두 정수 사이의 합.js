function solution(a, b) {
    let result = 0;
    if(b < a) {
        let temp = b;
        b = a;
        a = temp;
    }
    for(let i = a; i <= b; i++) {
        result += i;
    }
    return result;
}