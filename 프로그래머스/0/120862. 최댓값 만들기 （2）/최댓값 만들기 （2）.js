function solution(numbers) {
    let result;
    for(let i = 0; i < numbers.length-1; i++) {
        for(let j = i+1; j < numbers.length; j++) {
            if(result === undefined) result = numbers[i] * numbers[j];
            if(result < numbers[i] * numbers[j]) result = numbers[i] * numbers[j]
        }
    }
    return result;
}