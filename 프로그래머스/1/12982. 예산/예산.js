function solution(d, budget) {
    return d.sort((a,b) => a - b).filter((i,j,k) => {
        return k.slice(0, j + 1).reduce((a,b) => a+b) <= budget
    }).length;
}