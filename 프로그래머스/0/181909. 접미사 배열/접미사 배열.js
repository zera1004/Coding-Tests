function solution(my_string) {
    let result = [];
    for (let i = 0; i <my_string.length; i++){
        result.push(my_string.slice(-i-1, my_string.length))
    }
    return result.sort();
}