function solution(s) {
    return s.split('').sort().filter((i,j,k) => i !== k[j-1] && i !== k[j+1]).join('');
}