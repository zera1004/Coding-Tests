function solution(my_string, m, c) {
    return my_string.split('').filter((i,j) => (j+1-c) % m === 0).join('')
}