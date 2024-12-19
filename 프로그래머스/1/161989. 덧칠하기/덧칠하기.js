function solution(n, m, section) {
    let result = 0;
    for (let i = section[0]; i <= n;) {
        let temp = i;
        for (let j = i; j < temp + m; j++) {
            if (section.includes(j)) i = section[section.indexOf(j)+1]
        }
        result++;
        //if(!i) break;
    }
    return result;
}