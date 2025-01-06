function solution(strings, n) {
    for (let i = 0; i < strings.length; i++) {
        strings[i] = strings[i][n] + strings[i];
    }
    strings.sort();
    return strings.map(i => i.slice(1))
}