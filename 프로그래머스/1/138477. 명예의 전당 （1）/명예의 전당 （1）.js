function solution(k, score) {
    let result = [];
    return score.map((i,j) => {
        result.push(score[j]);
        if (j < k) return result.sort((a,b) => a - b)[0]
        return result.sort((a,b) => b - a)[k-1]
    })
}