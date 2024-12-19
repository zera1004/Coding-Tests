function solution(number) {
    let result = 0;
    number.split('').forEach(i => {
        result += +i;
    })
    console.log(result)
    return result%9
}