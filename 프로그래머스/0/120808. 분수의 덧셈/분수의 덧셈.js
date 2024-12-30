function solution(numer1, denom1, numer2, denom2) {
    let s; // 분자
    let m; // 최소공배수, 분모
    let num1; // 최소공배수 / denom1
    let num2; // 최소공배수 / denom2
    for(let i = denom1; i <= denom1 * denom2; i++) {
        if(i % denom1 === 0 && i % denom2 === 0) {
            m = i;
            num1 = m / denom1;
            num2 = m / denom2;
            break;
        }
    }
    s = numer1 * num1 + numer2 * num2
    for(let i = 2; i <= m; i++) {
        if(s % i === 0 && m % i === 0) {
            s /= i;
            m /= i;
            i--;
        }
    }
    return [s , m]
}