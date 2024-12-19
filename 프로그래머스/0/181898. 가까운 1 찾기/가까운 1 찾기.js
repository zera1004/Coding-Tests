function solution(arr, idx) {
    return arr.slice(idx).findIndex(i => i === 1) != -1?
        arr.slice(idx).findIndex(i => i === 1) + idx:
        -1
}