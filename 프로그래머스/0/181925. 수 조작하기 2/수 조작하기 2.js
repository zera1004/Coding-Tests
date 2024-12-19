function solution(numLog) {
    let result = numLog[0];
    numLog.shift()
    return numLog.map( i => {
        if(result + 1 === i) {
            result =i
            return 'w'
        }
        if(result - 1 === i) {
            result =i
            return 's'
        }
        if(result + 10 === i) {
            result =i
            return 'd'
        }
        if(result - 10 === i) {
            result =i
            return 'a'
        }
    }).join('')
}