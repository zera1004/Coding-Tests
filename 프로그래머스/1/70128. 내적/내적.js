function solution(a, b) {
    return a.map((i,j) => {
        return i * b[j];
    }).reduce((a,b) => a + b, 0)
}