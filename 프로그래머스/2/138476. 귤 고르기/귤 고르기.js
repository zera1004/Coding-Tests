function solution(k, tangerine) {
    let tLength = [];
    tangerine.sort((a,b) => a - b)
    let num = tangerine[0]
    let temp = 1;
    for(let i = 1; i < tangerine.length; i++) {
        if(num === tangerine[i]) temp ++;
        else {
            tLength.push(temp);
            num = tangerine[i]
            temp = 1;
        }
    }
    tLength.push(temp);
    tLength.sort((a,b) => b - a);
    for(let i = 0; i < tLength.length; i++) {
        k -= tLength[i];
        if(k <= 0) return i + 1;
    }
}