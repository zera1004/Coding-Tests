function solution(cipher, code) {
    return cipher.split('').filter((i,j) => (j+1)%code === 0).join('')
}