function solution(str_list) {
    let left = str_list.indexOf('l');
    let right = str_list.indexOf('r');
    let result = []
    if((left < right && left !== -1) || (left !== -1 && right === -1)) {
        result = str_list.slice(0,left);
    }
    
    if((left > right && right !== -1) || (left === -1 && right !== -1)) {
        result = str_list.slice(right+1);
    }
    
    return result;
}