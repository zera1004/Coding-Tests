function solution(binomial) {
    let result = binomial.split(' ')
    if(result[1] == '+') return Number(result[0]) + Number(result[2])
    if(result[1] == '-') return Number(result[0]) - Number(result[2])
    if(result[1] == '*') return Number(result[0]) * Number(result[2])
    if(result[1] == '/') return Number(result[0]) / Number(result[2])
    
}