function solution(absolutes, signs) {
    return absolutes.map((i,j) =>{
        if(signs[j] === false) {
            return '-' + i;
        }
        return i;
    }).reduce((a,b) => +a + +b,0)
}