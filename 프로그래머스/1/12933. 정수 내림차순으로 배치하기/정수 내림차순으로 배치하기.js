function solution(n) {
    return Number(String(n).split('').map(i => +i).sort((a,b) => b - a).join(''));
}