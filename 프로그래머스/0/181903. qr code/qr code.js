function solution(q, r, code) {
    return code.split('').filter((i,j) => j % q ===r).join('')
}