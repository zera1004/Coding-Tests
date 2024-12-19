function solution(k, m, score) {
    let result = 0;
    score = score.sort((a,b) => b-a);
    for (let i = m; i <= score.length; i = i + m) {
        result += score[i-1] * m
    }
    return result
}