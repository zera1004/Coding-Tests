function solution(my_string) {
    let result = 0;
    let temp = '';
    my_string.split('').forEach((i,j) => {
        if(i >= '0' && i <= '9') temp += i;
        if(!(i >= '0' && i <= '9')) {
            result += +temp;
            temp = ''
        }
        if(j === my_string.length-1) result += +temp;
    })
    return result
}