function solution(citations) {
    citations.sort((a,b) => b - a);
    console.log(citations);
    let index = 0;
    let result = 0;
    for(let i = 0; i < citations.length; i++) {
        index++
        let number = citations[i]
        if(index <= number) result = index;
    }
    return result;
}