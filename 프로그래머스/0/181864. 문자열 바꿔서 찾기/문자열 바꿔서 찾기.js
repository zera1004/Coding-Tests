function solution(myString, pat) {
    let newString = myString.replaceAll('A','C').replaceAll('B','A').replaceAll('C','B');
    return newString.includes(pat)? 1: 0;
}