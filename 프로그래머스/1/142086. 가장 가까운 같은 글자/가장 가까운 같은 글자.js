function solution(s) {
    return s.split('').map((i,j) => {
        let r = -1;
        for (let k = 0; k < j; k++){
            if(i === s[k]) r = j - k;
        }
        return r
    })
}