function solution(n_str) {
    for (let i = 0; i < n_str.length; i++) {
        if (Number(n_str[i])) return n_str.substring(i)
    }
}