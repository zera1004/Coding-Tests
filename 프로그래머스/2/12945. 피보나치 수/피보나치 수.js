function solution(n) {
    let FA = 0
    let FB = 1;
    let result = 0;
    for(let i = 2; i < n + 1; i++) {
        result = (FA % 1234567 + FB % 1234567);
        FA = FB % 1234567;
        FB = result;
    }
    return result % 1234567;
}