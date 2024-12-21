function solution(str1, str2) {
    return str1.split('').map((i,j) => i + str2.split('')[j]).join('');
}