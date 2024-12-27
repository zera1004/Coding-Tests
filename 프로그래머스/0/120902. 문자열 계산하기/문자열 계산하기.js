function solution(my_string) {
    let temp = my_string.split(' ')
    let result = +temp[0];
    let oper = '';
    for(let i = 1; i < temp.length; i++) {
        if(temp[i] === '+' || temp[i] === '-') oper = temp[i];
        else {
            if(oper === '+') result += +temp[i];
            if(oper === '-') result -= +temp[i];
        }
    }
    return result
}