function solution(a, b) {
    return Number(String(a)+String(b)) > Number(String(b)+String(a)) ?
        Number(String(a)+String(b)) :
        Number(String(b)+String(a))
}