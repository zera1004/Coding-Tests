function solution(s)
{
    let result = []; //
    for (let i of s) {
        if(result.length > 0 && result[result.length - 1] === i) result.pop();
        else result.push(i)
        }
    return result.length === 0? 1: 0
}