function solution(x) {
    return x % String(x).split('').reduce((a,b) => +a + +b,0) === 0
}