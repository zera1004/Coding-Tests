function solution(s) {
    let result = s.split(' ');
    result.sort((a,b) => a-b);
    return result[0] + ' ' + result[result.length-1]
}