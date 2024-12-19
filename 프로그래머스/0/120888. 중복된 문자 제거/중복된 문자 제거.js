function solution(my_string) {
    my_string = my_string.split('');
    let result = '';
    
    for(let i = 0; i < my_string.length;) {
        result += my_string[i];
        my_string = my_string.filter(j => my_string[i] !== j)
    }
    return result;
}