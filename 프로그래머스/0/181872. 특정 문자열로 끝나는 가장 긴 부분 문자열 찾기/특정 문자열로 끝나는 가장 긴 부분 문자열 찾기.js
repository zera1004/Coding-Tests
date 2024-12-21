function solution(myString, pat) {
    let num = myString.lastIndexOf(pat) + pat.length;
    return myString.split('').filter((i,j) => j < num).join('');
}