function solution(my_string) {
    let result = [];
    let split_ms = my_string.split(' ');
    
    for (let i = 0; i < split_ms.length; i++) {
        if (split_ms[i]) result.push(split_ms[i])
    }
    
    return result;
}