function solution(score) {
    score.forEach((i,j) => {
        score[j].push(j)
    })
    score.sort((a,b) => (b[0]+b[1]) - (a[0]+a[1]))
    for(let i = 0; i < score.length; i++) {
        if(i !== 0 && score[i][0]+score[i][1] === score[i-1][0]+score[i-1][1]) {
            score[i].push(score[i-1][3])
            continue;
        }
        score[i].push(i+1)
    }
    score.sort((a,b) => a[2] - b[2]);
    return score.map(i => i[3]);
}