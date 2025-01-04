function solution(s) {
    return s.split('').map(i => i.charCodeAt()).sort((a, b) => b - a).map(i => String.fromCharCode(i)).join('');
}