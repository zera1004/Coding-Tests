function solution(rank, attendance) {
    let index = {};
    for(let i = 0; i < rank.length; i++) {
        index[rank[i]] = i;
    }
    return rank.filter((i,j) => attendance[j] === true).sort((a, b) => a - b).slice(0, 3).reduce((a, b, c) => a + ((10 ** (4 - 2 * c)) * index[b]), 0)
}