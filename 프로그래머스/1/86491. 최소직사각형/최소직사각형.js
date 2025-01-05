function solution(sizes) {
    let result = [];
    for (let i of sizes) {
        result.push(i.sort((a,b) => b - a))
    }
    return result.sort((a,b) => b[0] - a[0])[0][0] * result.sort((a,b) => b[1] - a[1])[0][1];
}