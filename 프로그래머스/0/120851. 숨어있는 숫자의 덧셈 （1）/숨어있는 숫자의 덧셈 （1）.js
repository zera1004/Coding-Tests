function solution(my_string) {
    return my_string.split('').filter( i => i>0 && i<10).reduce((a,b) => +a+ +b,0)
}