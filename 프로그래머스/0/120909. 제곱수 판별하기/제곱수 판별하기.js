function solution(n) {
    for (let i = 1; i*i <= n; i++) {
        if (i**2 == n) return 1
    }
    return 2
}