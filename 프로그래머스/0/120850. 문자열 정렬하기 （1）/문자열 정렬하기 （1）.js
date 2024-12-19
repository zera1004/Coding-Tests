function solution(my_string) {
    return my_string.split('').filter(i => {
        if(i>=0 && i <= 9) return i
    }).map(Number).sort((a,b) => a-b)
}