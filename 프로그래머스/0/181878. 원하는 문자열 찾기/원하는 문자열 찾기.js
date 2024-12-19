function solution(myString, pat) {
    let result = myString.toLowerCase().match(pat.toLowerCase())
    return result ? result.length : 0;
}