function solution(a, d, included) {
    let result = 0;
    for(let i = 0; i < included.length; i++) {
        let num = a + (d * i);
        if(included[i] === true) result += num;
    }
    return result;
}