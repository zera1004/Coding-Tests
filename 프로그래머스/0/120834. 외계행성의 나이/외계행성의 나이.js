function solution(age) {
    return String(age).split('').map(i => String.fromCharCode(+i + 97)).join('')
}