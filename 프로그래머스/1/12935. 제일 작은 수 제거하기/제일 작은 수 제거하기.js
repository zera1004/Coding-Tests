function solution(arr) {
    let num = arr.indexOf(arr.slice().sort((a,b) => a - b)[0]);
    let result = arr.slice(0, num).concat(arr.slice(num + 1))
    return result.length === 0? [-1]: result.map(i => +i);
}