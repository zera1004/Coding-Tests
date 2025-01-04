function solution(s) {
    return (s.split('').filter(i => 0 <= i && i <= 9).length === s.length) && (s.length === 4 || s.length === 6)
}