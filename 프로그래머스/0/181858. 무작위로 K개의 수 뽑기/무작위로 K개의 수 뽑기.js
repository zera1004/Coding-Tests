function solution(arr, k) {
    let result = [... new Set(arr)]
    return result.length >= k? result.slice(0, k): result.concat('-1,'.repeat(k - result.length).split(',')).filter(i => i !== '').map(i => +i)
}