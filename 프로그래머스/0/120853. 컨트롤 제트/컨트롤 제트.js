function solution(s) {
    let result = 0;
    let s2 = s.split(' ').reverse();
    for (let i = 0; i < s2.length; i ++) {
        if (s2[i] === 'Z') {
            i++;
            continue;
        }
        result += +s2[i]
    }
    return result
}