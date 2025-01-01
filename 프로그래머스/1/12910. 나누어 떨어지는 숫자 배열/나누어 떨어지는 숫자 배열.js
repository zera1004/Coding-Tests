function solution(arr, divisor) {
    let result = arr.filter(i => i % divisor === 0).sort((a,b) => a - b)
    return result.length === 0? [-1]: result;
}