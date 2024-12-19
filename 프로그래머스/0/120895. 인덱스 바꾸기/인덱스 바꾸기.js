function solution(my_string, num1, num2) {
    return my_string.split('').map((i,j) => {
        if(num1 === j) return my_string[num2];
        if(num2 === j) return my_string[num1];
        return i
    }).join('')
}